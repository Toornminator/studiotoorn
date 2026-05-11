"use client";

import { useEffect, useState } from "react";
import { Sticker } from "./Sticker";
import { stickerLayout } from "./sticker-config";

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

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full overflow-hidden"
    >
      {stickerLayout.map((s) => {
        const size = s.size ?? 120;
        const initialX = (viewport.vw * s.posVw) / 100 - size / 2;
        const initialY = (viewport.vh * s.posVh) / 100 - size / 2;
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
