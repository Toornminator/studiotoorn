"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Magnetic wrapper — translates its child toward the cursor while it's
 * within the element, springs back when it leaves. Used on hero / contact
 * CTAs to give them that "alive" feel without going so far that links
 * become hard to click.
 */
export function Magnetic({
  children,
  strength = 0.35,
  range = 1,
  className,
}: {
  children: React.ReactNode;
  /** How much of the cursor offset translates into element offset (0..1). */
  strength?: number;
  /** Multiplier on the element's bounding box — how far around it reacts. */
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.6 });

  const onMove = (e: React.MouseEvent) => {
    // Reduce-motion visitors keep a still, non-magnetic button.
    if (reduceMotion) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    // Limit pull to within `range` × half-size so links stay clickable.
    const maxX = (rect.width / 2) * range;
    const maxY = (rect.height / 2) * range;
    x.set(Math.max(-maxX, Math.min(maxX, dx * strength)));
    y.set(Math.max(-maxY, Math.min(maxY, dy * strength)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
