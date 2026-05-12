"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

/**
 * Animated counter — counts from 0 to `value` once the element scrolls
 * into view, using a slow ease-out curve so the deceleration reads as
 * intentional rather than mechanical.
 */
export function Counter({
  value,
  duration = 2.4,
  className,
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.floor(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, duration, mv]);

  return (
    <motion.span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {rounded}
    </motion.span>
  );
}
