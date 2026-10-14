import { keys, type PendingReview, type ReviewStore } from "./store";

/**
 * Turns a verified Netlify Forms "reviews" submission into a pending review:
 * cleans the fields, copies the polaroid files out of Netlify's upload
 * storage into our own store (their links are not meant to be permanent),
 * and saves the record for /beheer.
 *
 * Relative imports only: the `submission-created` function bundles this.
 */

/** The parts of Netlify's submission payload we read. */
export type FormSubmissionPayload = {
  id: string;
  form_name: string;
  created_at?: string;
  data: Record<string, unknown>;
};

const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

function text(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const clean = value.replace(/\s+/g, " ").trim().slice(0, max);
  return clean || undefined;
}

/** Keeps paragraph breaks in the review body, collapses everything else. */
function body(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .split(/\n{2,}/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n\n")
    .slice(0, max);
}

/**
 * A file field arrives either as a plain URL string or as an object with a
 * `url` (Netlify has used both shapes); anything else is ignored.
 */
function fileUrl(value: unknown): string | null {
  if (typeof value === "string" && /^https?:\/\//.test(value)) return value;
  if (value && typeof value === "object" && "url" in value) {
    const url = (value as { url: unknown }).url;
    if (typeof url === "string" && /^https?:\/\//.test(url)) return url;
  }
  return null;
}

function isWebp(bytes: ArrayBuffer): boolean {
  const b = new Uint8Array(bytes, 0, Math.min(12, bytes.byteLength));
  return (
    b.length === 12 &&
    String.fromCharCode(b[0], b[1], b[2], b[3]) === "RIFF" &&
    String.fromCharCode(b[8], b[9], b[10], b[11]) === "WEBP"
  );
}

export function isSafeId(id: string): boolean {
  return /^[A-Za-z0-9_-]{6,64}$/.test(id);
}

export async function ingestSubmission(
  payload: FormSubmissionPayload,
  store: ReviewStore,
  fetchImpl: typeof fetch = fetch,
): Promise<PendingReview | null> {
  if (payload.form_name !== "reviews" || !isSafeId(payload.id)) return null;
  const d = payload.data ?? {};

  const rating = Math.round(Number(d.rating));
  const review = body(d.review, 1500);
  const name = text(d.name, 80);
  const email = text(d.email, 160);
  if (!name || !email || !review || !(rating >= 1 && rating <= 5)) return null;

  const locale = d.locale === "es" || d.locale === "nl" ? d.locale : "en";
  const eventDate = typeof d.eventDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d.eventDate)
    ? d.eventDate
    : undefined;

  const photoNumbers: number[] = [];
  const captions: string[] = [];
  const photoErrors: number[] = [];

  for (const n of [1, 2, 3]) {
    const url = fileUrl(d[`photo${n}`]);
    if (!url) continue;
    try {
      const res = await fetchImpl(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const bytes = await res.arrayBuffer();
      if (bytes.byteLength > MAX_PHOTO_BYTES || !isWebp(bytes)) throw new Error("not a webp");
      await store.setBytes(keys.photo(payload.id, n), bytes);
      photoNumbers.push(n);
      captions.push(text(d[`caption${n}`], 32) ?? "");
    } catch (err) {
      console.error(`review ${payload.id}: photo ${n} skipped`, err instanceof Error ? err.message : err);
      photoErrors.push(n);
    }
  }

  const pending: PendingReview = {
    id: payload.id,
    receivedAt: payload.created_at ?? new Date().toISOString(),
    locale,
    name,
    email,
    occasion: text(d.occasion, 120),
    location: text(d.location, 120),
    eventDate,
    rating,
    review,
    captions,
    photoNumbers,
    ...(photoErrors.length ? { photoErrors } : {}),
  };
  await store.setJSON(keys.pending(payload.id), pending);
  return pending;
}
