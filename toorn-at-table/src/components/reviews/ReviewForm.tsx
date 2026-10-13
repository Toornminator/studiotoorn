"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { useLocale, useT } from "@/i18n/client";
import { makePolaroid, PolaroidError } from "@/lib/polaroid";

/**
 * Guest-book form: stars, a review, and up to three photos that are turned
 * into polaroid WebPs right in the browser (see lib/polaroid.ts) before
 * anything is sent.
 *
 * Submits straight to Netlify Forms as multipart FormData, one file per
 * field (photo1..photo3), which is how Netlify Forms accepts uploads. The
 * matching hidden form that lets Netlify detect the fields at deploy time
 * lives in public/__forms.html. Nothing auto-publishes: Nick reads each
 * submission in the Netlify dashboard, checks it against his bookings, and
 * only then does it go into src/content/testimonials.ts with its polaroids.
 */

const MAX_PHOTOS = 3;
const MIN_REVIEW = 20;
const MAX_REVIEW = 1500;
const MAX_CAPTION = 32;
// Netlify Forms caps a whole submission at 8 MB; stay well under it.
const MAX_PAYLOAD = 7.5 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ROTATIONS = [-3, 2.5, -1.5];

type Photo = {
  id: string;
  file: File;
  caption: string;
  status: "processing" | "ready" | "error";
  url?: string;
  blob?: Blob;
  /** Bumped on every re-render so a stale result never wins a race. */
  version: number;
};

type FieldErrors = Partial<
  Record<"name" | "email" | "rating" | "review" | "consent" | "photos", string>
>;

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

function slugify(s: string) {
  return (
    s
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 30) || "guest"
  );
}

function inputClass(error?: string) {
  return `mt-2 w-full border-b bg-transparent pb-2 font-serif text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink focus-visible:rounded-[2px] focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
    error ? "border-tattoo-red" : "border-ink/25"
  }`;
}

function FieldLabel({
  children,
  htmlFor,
  error,
}: {
  children: React.ReactNode;
  htmlFor: string;
  error?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55"
      >
        {children}
      </label>
      {error && (
        <span
          role="alert"
          className="text-right font-mono text-[10px] uppercase tracking-[0.18em] text-tattoo-red"
        >
          {error}
        </span>
      )}
    </div>
  );
}

function Star({ filled, size = 34 }: { filled: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.3}
      className={filled ? "" : "opacity-40"}
    >
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.8l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94z" />
    </svg>
  );
}

export function ReviewForm() {
  const t = useT();
  const copy = t.reviews;
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [review, setReview] = useState("");
  const [consent, setConsent] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });
  const [today, setToday] = useState<string>();

  const botRef = useRef<HTMLInputElement>(null);
  const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>());
  const photosRef = useRef<Photo[]>([]);
  photosRef.current = photos;

  // A past-event overlay links here with ?occasion=… so the guest doesn't
  // have to retype which night it was. Read once on mount (useSearchParams
  // would force a client bailout on this statically generated page).
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("occasion");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (preset) setOccasion(preset.slice(0, 80));
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  // Bring the thank-you note into view; the form it replaces was long.
  useEffect(() => {
    if (submit.status === "success") {
      document
        .getElementById("review-thanks")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submit.status]);

  // Free every preview URL when the page goes away.
  useEffect(() => {
    const pending = timers.current;
    return () => {
      photosRef.current.forEach((p) => p.url && URL.revokeObjectURL(p.url));
      pending.forEach(clearTimeout);
    };
  }, []);

  const develop = useCallback(
    async (id: string, file: File, caption: string, version: number) => {
      try {
        const result = await makePolaroid(file, caption);
        setPhotos((prev) =>
          prev.map((p) => {
            if (p.id !== id || p.version !== version) {
              // Stale or removed: throw this result away.
              if (p.id === id) URL.revokeObjectURL(result.url);
              return p;
            }
            if (p.url) URL.revokeObjectURL(p.url);
            return { ...p, status: "ready", url: result.url, blob: result.blob };
          }),
        );
        if (!photosRef.current.some((p) => p.id === id)) {
          URL.revokeObjectURL(result.url);
        }
      } catch (err) {
        const code = err instanceof PolaroidError ? err.code : "decode";
        const message =
          code === "type"
            ? copy.errors.photoType
            : code === "size"
              ? copy.errors.photoSize
              : copy.errors.photoFailed;
        setPhotos((prev) => prev.filter((p) => p.id !== id));
        setErrors((e) => ({ ...e, photos: message }));
      }
    },
    [copy.errors],
  );

  const onPickFiles = (list: FileList | null) => {
    if (!list || list.length === 0) return;
    const room = MAX_PHOTOS - photos.length;
    const picked = Array.from(list).slice(0, Math.max(room, 0));
    setErrors((e) => ({
      ...e,
      photos: list.length > room ? copy.errors.tooMany : undefined,
    }));
    const fresh: Photo[] = picked.map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      file,
      caption: "",
      status: "processing",
      version: 0,
    }));
    setPhotos((prev) => [...prev, ...fresh]);
    fresh.forEach((p) => develop(p.id, p.file, "", 0));
  };

  const onCaption = (id: string, value: string) => {
    const caption = value.slice(0, MAX_CAPTION);
    setPhotos((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, caption, version: p.version + 1, status: "processing" }
          : p,
      ),
    );
    // Re-develop once the guest stops typing, not on every keystroke.
    const existing = timers.current.get(id);
    if (existing) clearTimeout(existing);
    timers.current.set(
      id,
      setTimeout(() => {
        const current = photosRef.current.find((p) => p.id === id);
        if (current) develop(id, current.file, current.caption, current.version);
      }, 450),
    );
  };

  const onRemove = (id: string) => {
    const existing = timers.current.get(id);
    if (existing) clearTimeout(existing);
    setPhotos((prev) => {
      const gone = prev.find((p) => p.id === id);
      if (gone?.url) URL.revokeObjectURL(gone.url);
      return prev.filter((p) => p.id !== id);
    });
    setErrors((e) => ({ ...e, photos: undefined }));
  };

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!name.trim()) e.name = copy.errors.name;
    if (!EMAIL_RE.test(email.trim())) e.email = copy.errors.email;
    if (rating < 1) e.rating = copy.errors.rating;
    if (review.trim().length < MIN_REVIEW) e.review = copy.errors.review;
    if (!consent) e.consent = copy.errors.consent;
    return e;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors((prev) => ({ ...found, photos: prev.photos }));
    const order: (keyof FieldErrors)[] = ["name", "email", "rating", "review", "consent"];
    const first = order.find((k) => found[k]);
    if (first) {
      document.getElementById(`review-${first}`)?.focus();
      return;
    }
    if (photos.some((p) => p.status === "processing")) return;

    const ready = photos.filter((p) => p.status === "ready" && p.blob);
    const total = ready.reduce((sum, p) => sum + (p.blob?.size ?? 0), 0);
    if (total > MAX_PAYLOAD) {
      setErrors((e) => ({ ...e, photos: copy.errors.photoSize }));
      return;
    }

    const fd = new FormData();
    fd.set("form-name", "reviews");
    fd.set("bot-field", botRef.current?.value ?? "");
    fd.set("name", name.trim());
    fd.set("email", email.trim().toLowerCase());
    fd.set("occasion", occasion.trim());
    fd.set("location", location.trim());
    fd.set("eventDate", eventDate);
    fd.set("rating", String(rating));
    fd.set("review", review.trim());
    fd.set("locale", locale);
    fd.set("consent", "yes");
    const base = slugify(name);
    ready.forEach((p, i) => {
      fd.set(`photo${i + 1}`, p.blob as Blob, `polaroid-${base}-${i + 1}.webp`);
      fd.set(`caption${i + 1}`, p.caption.trim());
    });

    setSubmit({ status: "submitting" });
    try {
      // No Content-Type header: the browser sets the multipart boundary.
      const res = await fetch("/__forms.html", { method: "POST", body: fd });
      if (!res.ok) {
        console.error(`[reviews] Netlify Forms POST failed: ${res.status}`);
        setSubmit({ status: "error", message: copy.errors.generic });
        return;
      }
      setSubmit({ status: "success" });
    } catch {
      setSubmit({ status: "error", message: copy.errors.generic });
    }
  };

  const shown = hover || rating;
  const developing = photos.some((p) => p.status === "processing");
  const submitting = submit.status === "submitting";

  if (submit.status === "success") {
    const ready = photos.filter((p) => p.url);
    return (
      <div
        id="review-thanks"
        className="scroll-mt-28 border border-ink/15 bg-cream-warm/30 p-8 md:p-12"
        role="status"
      >
        <p
          className="font-display text-ink"
          style={{ fontSize: "clamp(28px, 3.4vw, 42px)", lineHeight: 1.05 }}
        >
          {copy.successTitle}
        </p>
        <p
          className="mt-5 max-w-2xl font-serif text-ink/80"
          style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.55 }}
        >
          {copy.successBody}
          {ready.length > 0 && ` ${copy.successPhotos}`}
        </p>
        {ready.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-6">
            {ready.map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.id}
                src={p.url}
                alt=""
                className="w-[180px] shadow-[0_10px_26px_-12px_rgba(20,16,12,0.55)] md:w-[220px]"
                style={{ transform: `rotate(${ROTATIONS[i]}deg)` }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      name="reviews"
      method="POST"
      action="/__forms.html"
      encType="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
      className="space-y-12"
    >
      <input type="hidden" name="form-name" value="reviews" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input ref={botRef} name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {/* Stars first: it's the question everyone answers before thinking. */}
      <fieldset>
        <legend className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
          {copy.ratingLabel}
        </legend>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div
            className="flex items-center gap-1.5 text-tattoo-mustard"
            onMouseLeave={() => setHover(0)}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <label
                key={n}
                onMouseEnter={() => setHover(n)}
                className="relative cursor-pointer"
                data-cursor={copy.ratingWords[n - 1]}
              >
                <input
                  id={n === 1 ? "review-rating" : undefined}
                  type="radio"
                  name="rating"
                  value={n}
                  checked={rating === n}
                  onChange={() => {
                    setRating(n);
                    setErrors((e) => ({ ...e, rating: undefined }));
                  }}
                  className="peer sr-only"
                />
                <span className="block rounded-sm transition-transform duration-150 ease-out hover:scale-110 peer-focus-visible:ring-2 peer-focus-visible:ring-tattoo-red peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-cream motion-reduce:transition-none">
                  <Star filled={n <= shown} />
                </span>
                <span className="sr-only">{copy.starLabel.replace("{n}", String(n))}</span>
              </label>
            ))}
          </div>
          <span
            aria-live="polite"
            className="min-w-[8ch] font-hand text-tattoo-red"
            style={{ fontSize: 22 }}
          >
            {shown > 0 ? copy.ratingWords[shown - 1] : ""}
          </span>
        </div>
        {errors.rating && (
          <p role="alert" className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-tattoo-red">
            {errors.rating}
          </p>
        )}
      </fieldset>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <FieldLabel htmlFor="review-name" error={errors.name}>
            {copy.nameLabel}
          </FieldLabel>
          <input
            id="review-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={60}
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            aria-invalid={Boolean(errors.name)}
            className={inputClass(errors.name)}
            style={{ fontSize: 18 }}
          />
          <p className="mt-2 font-serif italic text-ink/50" style={{ fontSize: 14 }}>
            {copy.nameHint}
          </p>
        </div>
        <div>
          <FieldLabel htmlFor="review-email" error={errors.email}>
            {copy.emailLabel}
          </FieldLabel>
          <input
            id="review-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={inputClass(errors.email)}
            style={{ fontSize: 18 }}
          />
          <p className="mt-2 font-serif italic text-ink/50" style={{ fontSize: 14 }}>
            {copy.emailHint}
          </p>
        </div>
        <div>
          <FieldLabel htmlFor="review-occasion">
            {copy.occasionLabel}
          </FieldLabel>
          <input
            id="review-occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            maxLength={80}
            placeholder={copy.occasionPlaceholder}
            className={inputClass()}
            style={{ fontSize: 18 }}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <FieldLabel htmlFor="review-location">
              {copy.locationLabel}
            </FieldLabel>
            <input
              id="review-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              maxLength={60}
              placeholder={copy.locationPlaceholder}
              className={inputClass()}
              style={{ fontSize: 18 }}
            />
          </div>
          <div>
            <FieldLabel htmlFor="review-date">
              {copy.dateLabel}
            </FieldLabel>
            <input
              id="review-date"
              type="date"
              value={eventDate}
              max={today}
              onChange={(e) => setEventDate(e.target.value)}
              className={inputClass()}
              style={{ fontSize: 18 }}
            />
          </div>
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="review-review" error={errors.review}>
          {copy.reviewLabel}
        </FieldLabel>
        <textarea
          id="review-review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={6}
          maxLength={MAX_REVIEW}
          placeholder={copy.reviewPlaceholder}
          aria-invalid={Boolean(errors.review)}
          className={`${inputClass(errors.review)} resize-y leading-relaxed`}
          style={{ fontSize: 18 }}
        />
      </div>

      {/* Photos: each one develops into a polaroid in place. */}
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
            {copy.photosLabel}
            <span className="ml-2 text-ink/30">· {photos.length}/{MAX_PHOTOS}</span>
          </p>
          {errors.photos && (
            <span role="alert" className="text-right font-mono text-[10px] uppercase tracking-[0.18em] text-tattoo-red">
              {errors.photos}
            </span>
          )}
        </div>
        <p className="mt-2 max-w-xl font-serif italic text-ink/55" style={{ fontSize: 15 }}>
          {copy.photosHint}
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <li key={p.id} className="flex flex-col items-center">
              <div
                className="relative w-full max-w-[240px]"
                style={{ transform: `rotate(${ROTATIONS[i]}deg)` }}
              >
                {p.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={p.url}
                    src={p.url}
                    alt=""
                    className="polaroid-develop block w-full shadow-[0_10px_26px_-12px_rgba(20,16,12,0.55)]"
                  />
                ) : (
                  <div
                    className="flex w-full items-center justify-center bg-cream-warm shadow-[0_10px_26px_-12px_rgba(20,16,12,0.45)]"
                    style={{ aspectRatio: "88 / 107" }}
                  >
                    <span className="animate-pulse font-hand text-ink/50" style={{ fontSize: 18 }}>
                      {copy.processing}
                    </span>
                  </div>
                )}
                {p.url && p.status === "processing" && (
                  <span className="absolute inset-x-0 bottom-3 text-center font-mono text-[9px] uppercase tracking-[0.24em] text-ink/45">
                    {copy.processing}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => onRemove(p.id)}
                  aria-label={copy.removePhoto}
                  className="absolute -right-3 -top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 bg-cream text-ink shadow-sm transition-colors hover:bg-tattoo-red hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red"
                >
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 w-full max-w-[240px]">
                <label
                  htmlFor={`caption-${p.id}`}
                  className="sr-only"
                >
                  {copy.captionLabel}
                </label>
                <input
                  id={`caption-${p.id}`}
                  value={p.caption}
                  onChange={(e) => onCaption(p.id, e.target.value)}
                  maxLength={MAX_CAPTION}
                  placeholder={copy.captionPlaceholder}
                  className="w-full border-b border-ink/25 bg-transparent pb-1 text-center font-hand text-tattoo-red placeholder:text-ink/30 focus:border-ink focus:outline-none"
                  style={{ fontSize: 18 }}
                />
              </div>
            </li>
          ))}

          {photos.length < MAX_PHOTOS && (
            <li className="flex flex-col items-center">
              <label
                className="group relative flex w-full max-w-[240px] cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/25 bg-cream-warm/20 p-6 text-center transition-colors hover:border-tattoo-red hover:bg-cream-warm/50 focus-within:border-tattoo-red focus-within:ring-2 focus-within:ring-tattoo-red focus-within:ring-offset-2 focus-within:ring-offset-cream"
                style={{ aspectRatio: "88 / 107", transform: `rotate(${ROTATIONS[photos.length]}deg)` }}
                data-cursor={copy.addPhoto}
              >
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => {
                    onPickFiles(e.target.files);
                    e.target.value = "";
                  }}
                />
                <span
                  aria-hidden
                  className="font-display leading-none text-ink/35 transition-colors group-hover:text-tattoo-red"
                  style={{ fontSize: 56 }}
                >
                  +
                </span>
                <span className="font-hand text-ink/70" style={{ fontSize: 20 }}>
                  {copy.addPhoto}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink/40">
                  {copy.addPhotoSub}
                </span>
              </label>
            </li>
          )}
        </ul>
      </div>

      <div>
        <label htmlFor="review-consent" className="flex cursor-pointer items-start gap-4">
          <input
            id="review-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (e.target.checked) setErrors((x) => ({ ...x, consent: undefined }));
            }}
            aria-invalid={Boolean(errors.consent)}
            className="mt-1 h-5 w-5 shrink-0 accent-[#C8202A]"
          />
          <span className="max-w-2xl font-serif text-ink/80" style={{ fontSize: 16, lineHeight: 1.5 }}>
            {copy.consentLabel}
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-tattoo-red">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-5">
        <Magnetic strength={0.4}>
          <button
            type="submit"
            disabled={submitting || developing}
            data-cursor={submitting ? undefined : copy.submit}
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60"
          >
            {submitting ? copy.submitting : developing ? copy.processing : copy.submit}
            {!submitting && !developing && (
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
                <path
                  d="M1 5 H13 M10 1 L13 5 L10 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </svg>
            )}
          </button>
        </Magnetic>
        {submit.status === "error" && (
          <p role="alert" className="max-w-md font-serif italic text-tattoo-red" style={{ fontSize: 16 }}>
            {submit.message}
          </p>
        )}
      </div>
    </form>
  );
}
