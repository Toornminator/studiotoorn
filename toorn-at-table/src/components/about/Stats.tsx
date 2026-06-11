"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/i18n/client";

/**
 * Animated stat strip — each number stamps onto the paper (drops in
 * oversized, thunks down to a slightly crooked rest, like a rubber
 * stamp) and then ticks up from zero. The labels + sublines come from
 * the locale dictionary so the section translates with the rest of the
 * site; the numbers themselves don't.
 */

function Stat({
  label,
  value,
  subline,
  delay,
  reduce,
}: {
  label: string;
  value: number;
  subline: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <Reveal delay={delay} className="flex flex-col items-start gap-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
        {label}
      </p>
      <motion.p
        className="font-display italic leading-[0.85] text-ink"
        style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
        initial={reduce ? false : { opacity: 0, scale: 1.5, rotate: 5 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: -2 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      >
        <Counter value={value} />
      </motion.p>
      <p className="font-serif italic text-ink/65" style={{ fontSize: 15 }}>
        {subline}
      </p>
    </Reveal>
  );
}

export function Stats() {
  const t = useT();
  const reduce = Boolean(useReducedMotion());

  return (
    <section aria-label="By the numbers" className="relative w-full">
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-12 md:pb-32">
        <div className="grid grid-cols-1 gap-12 border-y border-ink/15 py-16 sm:grid-cols-3 md:gap-16 md:py-24">
          <Stat
            label={t.stats.countriesLabel}
            value={27}
            subline={t.stats.countriesSubline}
            delay={0}
            reduce={reduce}
          />
          <Stat
            label={t.stats.yearsLabel}
            value={10}
            subline={t.stats.yearsSubline}
            delay={0.12}
            reduce={reduce}
          />
          <Stat
            label={t.stats.tablesLabel}
            value={6}
            subline={t.stats.tablesSubline}
            delay={0.24}
            reduce={reduce}
          />
        </div>
      </div>
    </section>
  );
}
