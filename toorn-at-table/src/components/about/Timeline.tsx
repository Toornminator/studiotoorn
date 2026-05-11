import { timelineChapters } from "./timeline-data";

export function Timeline() {
  return (
    <section
      id="tijdlijn"
      aria-labelledby="timeline-heading"
      className="relative w-full bg-cream"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            Hoofdstuk 02 · De Tijdlijn
          </p>
          <h2
            id="timeline-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Hoe een keukenjongen uit Amsterdam aan een tafel in Andalusië belandde.
          </h2>
        </header>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12">
          {/* Sticky year column */}
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-ink/15" aria-hidden />
                <ul className="space-y-7 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                  {timelineChapters.map((c) => (
                    <li key={c.id} className="relative pl-8">
                      <span
                        aria-hidden
                        className="absolute left-[7px] top-[3px] block h-2 w-2 rounded-full border border-ink/40 bg-cream"
                      />
                      <span className="block text-ink/45">{c.yearShort}</span>
                      <span className="mt-0.5 block text-[10px] tracking-[0.22em] text-ink/35">
                        {c.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Cards column */}
          <div className="space-y-28 md:col-span-9 md:space-y-40">
            {timelineChapters.map((chapter) => (
              <article
                key={chapter.id}
                id={chapter.id}
                className="relative"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-tattoo-red">
                    Hfdstk {chapter.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 md:hidden">
                    {chapter.period}
                  </span>
                </div>
                <h3
                  className="mt-4 max-w-2xl font-display italic leading-[1.02] text-ink"
                  style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
                >
                  {chapter.title}
                </h3>
                <div
                  className="mt-6 max-w-2xl space-y-5 font-serif text-ink/85"
                  style={{ fontSize: "clamp(17px, 1.25vw, 19px)", lineHeight: 1.6 }}
                >
                  {chapter.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {chapter.marginalia && (
                  <p className="mt-6 font-hand text-tattoo-red" style={{ fontSize: "20px" }}>
                    {chapter.marginalia}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
