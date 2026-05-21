"use client";

import { useEffect, useState } from "react";
import { Sticker } from "./Sticker";
import { stickerLayout } from "./sticker-config";

// Stickers are a desktop Easter-egg. Below this width they cost more
// than they pay back — every sticker carries gesture listeners with
// `touchAction: none`, which silently blocks page scroll when the
// visitor's thumb lands on one. So we don't render them at all on
// phones; the scattered hand-drawn polaroids already carry the
// "found in a drawer" feel on mobile.
const MOBILE_BREAKPOINT = 768;

export function StickerProvider() {
  const [viewport, setViewport] = useState<{ vw: number; vh: number } | null>(
    null,
  );

  useEffect(() => {
    const update = () =>
      setViewport({ vw: window.innerWidth, vh: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!viewport) return null;
  if (viewport.vw < MOBILE_BREAKPOINT) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full overflow-hidden"
    >
      {stickerLayout.map((s) => {
        if (s.hideBelowVw && viewport.vw < s.hideBelowVw) return null;
        const height = s.height ?? 140;
        const width = Math.round(height * (s.aspect ?? 1));
        const rawX = (viewport.vw * s.posVw) / 100 - width / 2;
        const rawY = (viewport.vh * s.posVh) / 100 - height / 2;
        const initialX = Math.max(
          8,
          Math.min(viewport.vw - width - 8, rawX),
        );
        const initialY = Math.max(8, rawY);
        return (
          <Sticker
            key={s.id}
            id={s.id}
            imagePath={s.imagePath}
            alt={s.alt}
            width={width}
            height={height}
            initialRotation={s.initialRotation}
            initialX={initialX}
            initialY={initialY}
          />
        );
      })}
    </div>
  );
}
