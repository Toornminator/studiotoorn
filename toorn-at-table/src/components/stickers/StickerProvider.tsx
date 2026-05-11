"use client";

import { useEffect, useState } from "react";
import { Sticker } from "./Sticker";
import { stickerLayout } from "./sticker-config";

const MOBILE_BREAKPOINT = 640;
const MOBILE_SCALE = 0.65;

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
        const size = Math.round((s.size ?? 120) * scale);
        const rawX = (viewport.vw * s.posVw) / 100 - size / 2;
        const rawY = (viewport.vh * s.posVh) / 100 - size / 2;
        const initialX = Math.max(
          8,
          Math.min(viewport.vw - size - 8, rawX),
        );
        const initialY = Math.max(8, rawY);
        return (
          <Sticker
            key={s.id}
            id={s.id}
            svgPath={s.svgPath}
            alt={s.alt}
            size={size}
            initialRotation={s.initialRotation}
            initialX={initialX}
            initialY={initialY}
          />
        );
      })}
    </div>
  );
}
