"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A guest's polaroid, tossed onto the table: it flies in from above with
 * a spin and lands on a spring at its resting tilt, then a strip of tape
 * pins it down. The WebP already carries its own white frame and caption,
 * so this only adds the throw and the tape.
 */
export function TossedPhoto({
  src,
  index,
  rotation,
}: {
  src: string;
  index: number;
  rotation: number;
}) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.span
      className="relative block w-[104px] md:w-[120px]"
      initial={reduce ? false : { opacity: 0, y: -60, rotate: rotation + (index % 2 ? 24 : -24), scale: 1.15 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 + index * 0.12 }}
      style={reduce ? { transform: `rotate(${rotation}deg)` } : undefined}
    >
      <Image
        src={src}
        alt=""
        width={1080}
        height={1313}
        sizes="120px"
        className="h-auto w-full shadow-[0_10px_22px_-10px_rgba(20,16,12,0.6)]"
      />
      {/* Masking tape, slightly translucent, never quite straight. */}
      <motion.span
        aria-hidden
        className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 bg-[#e8dcc4]/75 shadow-[0_1px_2px_rgba(20,16,12,0.18)] backdrop-blur-[1px]"
        style={{ rotate: index % 2 ? 5 : -6 }}
        initial={reduce ? false : { opacity: 0, scaleX: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.55 + index * 0.12 }}
      />
    </motion.span>
  );
}
