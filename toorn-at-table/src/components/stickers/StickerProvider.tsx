"use client";

import { useEffect, useState } from "react";
import { Sticker } from "./Sticker";
import { stickerLayout } from "./sticker-config";

// Stickers are a desktop Easter-egg, period. Every sticker carries
// gesture listeners with `touchAction: none`, which silently blocks
// page scroll when a thumb lands on one. So we render them only on
// hover-capable, fine-pointer devices wide enough to give the scatter
// room (>= 768 px). That excludes phones AND tablets — both portrait
// and landscape iPad get the calmer polaroid-only experience that
// scrolls cleanly under any thumb.
const MIN_WIDTH = 768;

export function StickerProvider() {
  const [viewport, setViewport] = useState<{ vw: number; vh: number } | null>(
    null,
  );
  const [isTouch, setIsTouch] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () =>
      setViewport({ vw: window.innerWidth, vh: window.innerHeight });
    update();
    window.addEventListener("resize", update);

    const coarse = window.matchMedia("(pointer: coarse)");
    const noHover = window.matchMedia("(hover: none)");
    const sync = () => setIsTouch(coarse.matches || noHover.matches);
    sync();
    coarse.addEventListener("change", sync);
    noHover.addEventListener("change", sync);

    return () => {
      window.removeEventListener("resize", update);
      coarse.removeEventListener("change", sync);
      noHover.removeEventListener("change", sync);
    };
  }, []);

  if (!viewport || isTouch === null) return null;
  if (isTouch) return null;
  if (viewport.vw < MIN_WIDTH) return null;

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
