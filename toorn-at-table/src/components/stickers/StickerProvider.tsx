"use client";

import { useEffect, useState } from "react";
import { Sticker } from "./Sticker";
import { stickerLayout } from "./sticker-config";

const MOBILE_BREAKPOINT = 640;
const MOBILE_SCALE = 0.7;

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

  const isMobile = viewport.vw < MOBILE_BREAKPOINT;
  const scale = isMobile ? MOBILE_SCALE : 1;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full overflow-hidden"
    >
      {stickerLayout.map((s) => {
        if (s.hideBelowVw && viewport.vw < s.hideBelowVw) return null;
        const height = Math.round((s.height ?? 140) * scale);
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
