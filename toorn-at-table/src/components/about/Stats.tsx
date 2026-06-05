"use client";

import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/i18n/client";

/**
 * Animated stat strip — three counters that tick up from zero when they
 * scroll into view. The labels + sublines come from the locale dictionary
 * so the section translates with the rest of the site; the numbers
 * themselves don't.
 */
export function Stats() {
  const t = useT();

  return (
    <section aria-label="By the numbers" className="relative w-full">
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-12 md:pb-32">
        <div className="grid grid-cols-1 gap-12 border-y border-ink/15 py-16 sm:grid-cols-3 md:gap-16 md:py-24">
          <Reveal className="flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {t.stats.countriesLabel}
            </p>
            <p
              className="font-display italic leading-[0.85] text-ink"
              style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
            >
              <Counter value={27} />
            </p>
            <p className="font-serif italic text-ink/65" style={{ fontSize: 15 }}>
              {t.stats.countriesSubline}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {t.stats.yearsLabel}
            </p>
            <p
              className="font-display italic leading-[0.85] text-ink"
              style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
            >
              <Counter value={10} />
            </p>
            <p className="font-serif italic text-ink/65" style={{ fontSize: 15 }}>
              {t.stats.yearsSubline}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {t.stats.tablesLabel}
            </p>
            <p
              className="font-display italic leading-[0.85] text-ink"
              style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
            >
              <Counter value={6} />
            </p>
            <p className="font-serif italic text-ink/65" style={{ fontSize: 15 }}>
              {t.stats.tablesSubline}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
