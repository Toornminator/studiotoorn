"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Tattoo-flash sticker — a small decorative PNG placed inline in a
 * section. Pointer-events-none so it never blocks interaction, with
 * a deterministic ±10 degree rotation jitter (hash of src) so the
 * same sticker always lands at the same tilt and SSR + client agree.
 *
 * Each sticker pops in with a small fade-up-and-settle on viewport
 * enter — like a sticker pressed onto paper, then released. Quiet
 * on purpose: no spring overshoot, no continuous motion.
 *
 * Layout-agnostic: the component is fixed-square via the size prop,
 * the image inside scales with object-contain to preserve aspect
 * ratio. Callers position via className (absolute/relative/flex).
 */

type Size = "sm" | "md" | "lg";

const SIZE_PX: Record<Size, number> = {
  sm: 90,
  md: 130,
  lg: 180,
};

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function jitter(seed: string, range: number): number {
  return (hash(seed) % (range * 2 + 1)) - range;
}

export type StickerProps = {
  /** Path relative to /public, e.g. "/images/stickers/garlic.png" */
  src: string;
  /** Required for accessibility — describes the sticker's subject. */
  alt: string;
  size?: Size;
  /** Override the auto-jittered rotation in degrees. */
  rotation?: number;
  /** Override the hash seed for the rotation. Defaults to src. */
  seed?: string;
  /** Caller-supplied positioning + sizing classes. */
  className?: string;
};

export function Sticker({
  src,
  alt,
  size = "md",
  rotation,
  seed,
  className = "",
}: StickerProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const px = SIZE_PX[size];
  const finalRotation = rotation ?? jitter(seed ?? src, 10);

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, scale: 0.85, rotate: finalRotation - 4 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, scale: 1, rotate: finalRotation }
      }
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: px,
        height: px,
        transform: `rotate(${finalRotation}deg)`,
      }}
      aria-hidden={alt === "" ? true : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${px}px`}
        loading="lazy"
        className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
      />
    </motion.div>
  );
}
