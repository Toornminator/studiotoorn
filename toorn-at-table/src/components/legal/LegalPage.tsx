import Link from "next/link";

/**
 * Shared layout for the /privacy and /terms pages. Server-rendered,
 * static, no client JS beyond what the site shell already ships.
 *
 * Content is passed in as plain strings + a section array. Both pages
 * share the same visual rhythm: red eyebrow, big italic title, a
 * single-paragraph intro, then a numbered list of sections, then a
 * mailto contact line and a "back to the site" link.
 */

type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactNote: string;
  backLabel: string;
  /** Locale-aware home href ("/", "/es", "/nl"). */
  homeHref: string;
};

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
  contactNote,
  backLabel,
  homeHref,
}: LegalPageProps) {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-3xl px-5 pt-24 pb-32 md:px-8 md:pt-32 md:pb-40">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
          {eyebrow}
        </p>
        <h1
          className="mt-4 font-display italic leading-[0.98] text-ink"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          {title}
        </h1>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
          {lastUpdated}
        </p>

        <p
          className="mt-10 max-w-2xl font-serif italic text-ink/80"
          style={{ fontSize: "clamp(17px, 1.4vw, 19px)", lineHeight: 1.5 }}
        >
          {intro}
        </p>

        <ol className="mt-14 space-y-12">
          {sections.map((s, i) => (
            <li key={i} className="border-t border-ink/15 pt-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-tattoo-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="font-display italic leading-[1.05] text-ink"
                  style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
                >
                  {s.heading}
                </h2>
              </div>
              <div
                className="mt-5 max-w-2xl space-y-4 font-serif text-ink/85"
                style={{ fontSize: "clamp(16px, 1.15vw, 18px)", lineHeight: 1.65 }}
              >
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <p
          className="mt-16 max-w-2xl border-t border-ink/15 pt-8 font-serif italic text-ink/70"
          style={{ fontSize: "clamp(15px, 1.1vw, 17px)", lineHeight: 1.55 }}
        >
          {contactNote}
        </p>

        <Link
          href={homeHref}
          className="mt-12 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55 transition-colors hover:text-tattoo-red"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path
              d="M13 5 H1 M5 1 L1 5 L5 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {backLabel}
        </Link>
      </div>
    </section>
  );
}
