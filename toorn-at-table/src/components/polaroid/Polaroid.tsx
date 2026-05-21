"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/i18n/client";
import { pick } from "@/lib/content/i18n";
import type { LocalisedString } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Polaroid — small framed photo with a marker-scribbled caption.
 *
 * The frame uses real polaroid proportions: photo on top in a 4:5
 * window, cream-warm matting around it, extra padding underneath for
 * the handwritten caption. A deterministic ±4° rotation (jittered by
 * src hash so SSR + client agree) keeps each instance feeling tossed-
 * onto-the-table rather than mechanically aligned.
 *
 * On scroll-in it fades up + rotates from a shy under-position into
 * its resting angle — like someone just placed it down. Quiet on
 * purpose: no spring overshoot, no extra motion.
 *
 * Sizing presets (sm/md/lg) drive the polaroid width in px; callers
 * pick the size that fits the slot and position the component with
 * normal flex/grid/absolute Tailwind classes. The component itself
 * is layout-agnostic — pass `className` for desktop scatter
 * (`md:absolute md:top-X md:left-Y`) and it falls back to inline
 * flow on mobile by default.
 */

type Size = "sm" | "md" | "lg";

const SIZE_WIDTH: Record<Size, number> = {
  sm: 140,
  md: 200,
  lg: 280,
};

const SIZE_CAPTION_PX: Record<Size, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function jitter(seed: string, range: number): number {
  return (hash(seed) % (range * 2 + 1)) - range;
}

export type PolaroidProps = {
  /** Absolute path under /public, e.g. "/images/polaroids/paella.jpeg" */
  src: string;
  /** Required for accessibility — never let the photo carry the text.
   *  Accepts either a plain string (legacy) or a Localised trio that
   *  the component picks against the active locale. */
  alt: string | LocalisedString;
  /** Optional handwritten caption shown under the photo. Same i18n
   *  contract as `alt`: pass a plain string for one-off labels, or
   *  a Localised trio so the marker scribble flips with the active
   *  language. Brand rule: no em-dashes in polaroid captions. */
  caption?: string | LocalisedString;
  /** Override the auto-jittered rotation in degrees. */
  rotation?: number;
  size?: Size;
  /** Above-the-fold only — fetches the image eagerly. */
  priority?: boolean;
  /** Override the hash seed for the rotation jitter. Defaults to src. */
  seed?: string;
  /** Caller-supplied positioning + sizing classes. */
  className?: string;
};

function resolveLocalised(
  value: string | LocalisedString | undefined,
  locale: ReturnType<typeof useLocale>,
): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "string") return value;
  return pick(value, locale);
}

export function Polaroid({
  src,
  alt,
  caption,
  rotation,
  size = "md",
  priority = false,
  seed,
  className = "",
}: PolaroidProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const locale = useLocale();
  const width = SIZE_WIDTH[size];
  const captionPx = SIZE_CAPTION_PX[size];
  const finalRotation = rotation ?? jitter(seed ?? src, 4);
  const resolvedAlt = resolveLocalised(alt, locale) ?? "";
  const resolvedCaption = resolveLocalised(caption, locale);

  return (
    <motion.figure
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 24, rotate: finalRotation - 1.5 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, rotate: finalRotation }
      }
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width,
        // SSR fallback so the rotation lands before hydration / for
        // visitors with prefers-reduced-motion.
        transform: `rotate(${finalRotation}deg)`,
      }}
      // cn() with twMerge ensures the caller's positioning class
      // (absolute, fixed, …) wins over the default `relative` here.
      // Before this, a Tailwind class collision left the polaroid
      // as position:relative and `right: 120px` pushed it 120px
      // LEFT into the viewport edge instead of pinning the right
      // edge 120px from the viewport's right side.
      className={cn(
        "relative inline-block bg-cream-warm shadow-[0_8px_22px_-10px_rgba(20,16,12,0.45)] ring-1 ring-ink/[0.06]",
        className,
      )}
    >
      {/* Matting around the photo — extra room below for the caption */}
      <div className="px-3 pt-3 pb-2">
        <div
          className="relative w-full overflow-hidden bg-ink/10"
          style={{ aspectRatio: "4 / 5" }}
        >
          <Image
            src={src}
            alt={resolvedAlt}
            fill
            sizes={`${width}px`}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="object-cover"
          />
        </div>
      </div>

      {resolvedCaption && (
        <figcaption
          className="px-3 pb-4 pt-1 text-center font-hand text-tattoo-red leading-[1.15]"
          style={{ fontSize: captionPx }}
        >
          {resolvedCaption}
        </figcaption>
      )}
    </motion.figure>
  );
}
