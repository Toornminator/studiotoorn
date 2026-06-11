"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * The dark act. As "The Evening" scrolls into view the page dims from
 * paper-cream to the near-black of the share card, holds the room dark
 * through the whole section, then brings the lights back up on the way
 * out. The dimmer is scrubbed to scroll (one opacity transform on a
 * single full-bleed layer, so it stays paint-only and cheap), which
 * makes the transition feel like a hand on a dimmer switch rather
 * than a hard cut to a dark band.
 *
 * Reduced motion: the room is simply dark, no scrubbing.
 */

const GRAIN =
  'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")';

export function EveningAct({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Lights down over the first ~12% of the traverse (roughly the first
  // screenful), hold, lights back up over the last 10%.
  const dimmer = useTransform(
    scrollYProgress,
    [0, 0.12, 0.9, 1],
    reduceMotion ? [1, 1, 1, 1] : [0, 1, 1, 0],
  );

  return (
    <section
      ref={ref}
      id="the-evening"
      aria-labelledby="evening-heading"
      className="relative w-full"
    >
      <motion.div
        aria-hidden
        style={{ opacity: dimmer }}
        className="absolute inset-0 will-change-[opacity]"
      >
        {/* The room */}
        <div className="absolute inset-0 bg-night" />

        {/* Depth vignette so the centre reads warmer than the corners */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 38%, transparent 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Same paper grain as the preloader, so dark still feels printed */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: GRAIN }}
        />

        {/* Gold corner brackets — the share-card framing, now around the room */}
        <CornerMark className="left-5 top-5 md:left-8 md:top-8" />
        <CornerMark className="right-5 top-5 rotate-90 md:right-8 md:top-8" />
        <CornerMark className="bottom-5 left-5 -rotate-90 md:bottom-8 md:left-8" />
        <CornerMark className="bottom-5 right-5 rotate-180 md:bottom-8 md:right-8" />
      </motion.div>

      <div className="relative">{children}</div>
    </section>
  );
}

function CornerMark({ className }: { className?: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden
      className={`absolute ${className ?? ""}`}
    >
      <path
        d="M1 1 H12 M1 1 V12"
        stroke="var(--color-gold)"
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
