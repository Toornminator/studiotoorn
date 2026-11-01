"use client";

import { useTransform, type MotionValue } from "framer-motion";

/**
 * Maps a scroll-progress motion value through a piecewise-linear range
 * (clamped), like `useTransform(progress, input, output)`.
 *
 * Why not just that: framer-motion hands array-form transforms of
 * `useScroll` progress that land on opacity / filter to a native
 * ScrollTimeline, and that timeline spans the WHOLE document instead of
 * the target's offsets. On a long page the value then barely moves (the
 * hero never faded, the inked quote would never ink). The function form
 * is computed on the JS side, so it honours the target offsets.
 */
export function useScrollMap<T extends number | string>(
  progress: MotionValue<number>,
  input: number[],
  output: T[],
): MotionValue<T> {
  return useTransform(progress, (v: number) => interpolate(v, input, output));
}

function interpolate<T extends number | string>(v: number, input: number[], output: T[]): T {
  if (v <= input[0]) return output[0];
  const last = input.length - 1;
  if (v >= input[last]) return output[last];
  let i = 1;
  while (input[i] < v) i++;
  const t = (v - input[i - 1]) / (input[i] - input[i - 1]);
  const a = output[i - 1];
  const b = output[i];
  if (typeof a === "number" && typeof b === "number") return (a + (b - a) * t) as T;
  // Strings like "blur(2px)": interpolate the first number, keep the shape.
  const na = parseFloat(String(a).replace(/^[^\d.-]+/, ""));
  const nb = parseFloat(String(b).replace(/^[^\d.-]+/, ""));
  const n = na + (nb - na) * t;
  return String(a).replace(/-?\d*\.?\d+/, n.toFixed(3)) as T;
}
