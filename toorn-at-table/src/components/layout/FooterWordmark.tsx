"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const WORD = "TOORN";

/**
 * The last thing on every page: the name, set huge across the foot of the
 * footer, rising letter by letter out of the bottom edge as the reader
 * scrolls the final stretch, with "at table" scrawled on once it's up.
 * Scrubbed to scroll; reduced motion gets it already set.
 */
export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  return (
    <div ref={ref} aria-hidden className="relative mt-14 select-none overflow-hidden pt-[clamp(28px,4vw,64px)] md:mt-20">
      <div
        className="flex justify-between font-display leading-[0.78] text-cream"
        // TOORN in Alfa Slab runs ~4.1em wide: 21.5vw keeps it inside the
        // gutters from a 360px phone up to a wide desktop.
        style={{ fontSize: "clamp(56px, 21.5vw, 380px)" }}
      >
        {WORD.split("").map((letter, i) => (
          <Letter key={i} letter={letter} index={i} progress={scrollYProgress} reduce={reduce} />
        ))}
      </div>
      <motion.span
        className="absolute right-[3%] top-0 font-hand text-tattoo-red"
        style={{ fontSize: "clamp(22px, 3.4vw, 54px)", rotate: -6 }}
        initial={reduce ? false : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      >
        at table
      </motion.span>
    </div>
  );
}

function Letter({
  letter,
  index,
  progress,
  reduce,
}: {
  letter: string;
  index: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const start = index * 0.08;
  const y = useTransform(progress, [start, start + 0.6], reduce ? ["0%", "0%"] : ["105%", "0%"]);
  return (
    <motion.span style={{ y }} className="inline-block will-change-transform">
      {letter}
    </motion.span>
  );
}
