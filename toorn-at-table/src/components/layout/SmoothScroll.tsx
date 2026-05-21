"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Wheel-driven smooth scroll for desktop only.
 *
 * Lenis is great for taming jumpy mouse wheels into a buttery scroll —
 * but on touch devices it fights the platform's native momentum scroll
 * (iOS rubber-band, Android fling) and the result feels stuttery and
 * mistimed. So we feature-detect coarse pointer + no-hover and bail
 * out, letting the browser do what it already does well on touch.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    // Skip Lenis on touch devices — native momentum scroll is smoother
    // than anything we can re-implement on top of it.
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.15,
      smoothWheel: true,
    });

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
