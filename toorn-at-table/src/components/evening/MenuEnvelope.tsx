"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useScrollMap } from "@/components/ui/useScrollMap";

/**
 * The sample menu arrives the way an invitation does: when it first comes
 * into view only its head shows above the front pocket of an envelope
 * (red wax seal and all), and as you keep scrolling the envelope slides
 * down and away, uncovering the card. The pocket starts a quarter of the
 * way down the card on purpose: the card is taller than most screens, so
 * an envelope at its foot would play out below the fold, unseen.
 *
 * Reduced motion: no envelope, the card simply sits there.
 */
export function MenuEnvelope({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "start 0%"] });

  const cardY = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [1.5, -1.5]);
  // The envelope gives way slower than the page scrolls, so on screen it
  // drifts up a little while the card rises out of it much faster.
  const envelopeY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const envelopeOpacity = useScrollMap(scrollYProgress, [0.65, 1], [1, 0]);

  if (reduce) return <div className="rotate-[-1.5deg]">{children}</div>;

  return (
    // Clipped just below the card: the envelope sinks away behind that edge
    // instead of sliding over the call-to-action underneath. Sides and top
    // stay open for the card's tilt and shadow.
    <div ref={ref} className="relative" style={{ clipPath: "inset(-40% -14% -7% -14%)" }}>
      <motion.div style={{ y: cardY, rotate: cardRotate }} className="relative z-10 will-change-transform">
        {children}
      </motion.div>

      {/* Front pocket of the envelope. */}
      <motion.div
        aria-hidden
        style={{ y: envelopeY, opacity: envelopeOpacity }}
        className="pointer-events-none absolute -inset-x-[6%] bottom-[-6%] top-[24%] z-20 flex flex-col drop-shadow-[0_-16px_26px_rgba(0,0,0,0.55)]"
      >
        <svg viewBox="0 0 400 70" preserveAspectRatio="none" className="h-[72px] w-full shrink-0">
          <path d="M0 0 L200 68 L400 0 L400 70 L0 70 Z" fill="#e8dcc4" />
          <path d="M0 0 L200 68 L400 0" fill="none" stroke="#c9a86a" strokeOpacity="0.75" strokeWidth="1.3" />
        </svg>
        <div className="-mt-px flex-1 bg-cream-warm" />
        {/* Wax seal with the house initial, on the point of the V. */}
        <span className="absolute left-1/2 top-[64px] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-tattoo-red font-display text-[22px] text-cream/90 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.35),0_6px_14px_rgba(0,0,0,0.45)] ring-4 ring-tattoo-red/60">
          T
        </span>
      </motion.div>
    </div>
  );
}
