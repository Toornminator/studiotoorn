"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Vertical parallax — child translates with scroll progress through its
 * own bounding box. `intensity` controls how far it drifts in pixels; a
 * positive value pushes the child up as you scroll past it (slower than
 * the page), negative values push it down (faster than the page).
 */
export function Parallax({
  children,
  intensity = 80,
  className,
}: {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
