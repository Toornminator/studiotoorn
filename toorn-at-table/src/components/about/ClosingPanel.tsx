"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;

export function ClosingPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="afsluiting"
      aria-labelledby="closing-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-4xl px-5 pt-12 pb-32 text-center md:px-12 md:pt-20 md:pb-48">
        <div
          aria-hidden
          className="mx-auto h-px w-24 bg-ink/25 mb-16 md:mb-24"
        />

        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
          Tussenrust
        </p>

        <motion.blockquote
          id="closing-heading"
          className="mt-8 font-serif italic leading-[1.02] text-ink"
          style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: REVEAL_EASE }}
        >
          <span className="text-ink/40">“</span>Geen catering.
          <br className="hidden sm:inline" /> Een herinnering.
          <span className="text-ink/40">”</span>
        </motion.blockquote>

        <motion.p
          className="mt-8 font-hand text-tattoo-red"
          style={{ fontSize: "26px" }}
          initial={reduceMotion ? false : { opacity: 0, rotate: -3 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, rotate: -1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          — Nick
        </motion.p>

        <motion.div
          className="mt-16 flex flex-col items-center gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: REVEAL_EASE, delay: 0.4 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
            Wil je aan tafel?
          </p>
          <Magnetic strength={0.45}>
            <a
              href="#contact"
              data-cursor="Reserveer"
              className="group relative inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Plan een diner
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M1 6 H15 M11 1 L16 6 L11 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Magnetic>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            Reactie binnen 24 uur
          </p>
        </motion.div>
      </div>
    </section>
  );
}
