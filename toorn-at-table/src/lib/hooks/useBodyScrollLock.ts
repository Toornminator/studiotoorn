"use client";

import { useEffect } from "react";

/**
 * Lock the document body's vertical scroll while a modal/overlay is open.
 *
 * Captures the previous `overflow` value on mount, sets it to `hidden`,
 * and restores the previous value on unmount. Safe to nest — multiple
 * overlays unmounting in LIFO order each restore the layer below, and
 * the outermost cleanup restores the page scroll.
 */
export function useBodyScrollLock() {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);
}
