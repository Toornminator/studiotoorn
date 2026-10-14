import { ingestSubmission, type FormSubmissionPayload } from "../../src/lib/guest-reviews/ingest";
import { reviewStore } from "../../src/lib/guest-reviews/store";

/**
 * Netlify event function: runs on every VERIFIED form submission (spam never
 * reaches it). The file name is the event name, so it must stay
 * `submission-created`. Only the "reviews" form is handled; contact, order
 * and newsletter submissions pass straight through.
 *
 * A review is parked in Netlify Blobs as pending, polaroids included, until
 * Nick approves or rejects it on /beheer.
 */
export default async function submissionCreated(req: Request) {
  const { payload } = (await req.json()) as { payload: FormSubmissionPayload };
  if (payload?.form_name !== "reviews") return new Response("ignored");

  // Field shapes only (never values): tells us how Netlify delivered files.
  const shapes = Object.fromEntries(
    ["photo1", "photo2", "photo3"].map((k) => {
      const v = payload.data?.[k];
      return [k, v === undefined ? "none" : typeof v === "object" ? `object:${Object.keys(v ?? {}).join("|")}` : typeof v];
    }),
  );

  const pending = await ingestSubmission(payload, reviewStore());
  console.log("review submission", payload.id, pending ? "parked" : "rejected by validation", {
    photos: pending?.photoNumbers.length ?? 0,
    photoErrors: pending?.photoErrors ?? [],
    shapes,
  });
  return new Response("ok");
}
