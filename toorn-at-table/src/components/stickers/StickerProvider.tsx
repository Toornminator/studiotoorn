"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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

/** Width of the content column (Tailwind max-w-6xl). */
const CONTENT = 1152;

type Placed = { id: string; x: number; y: number; width: number; height: number };

/**
 * Places every sticker beside its section: centred in the chosen gutter,
 * `top` px below the section's top edge. Re-measured whenever the page
 * layout changes (fonts, images, the timeline pinning itself), since the
 * document coordinates of the sections move with it.
 */
function measure(): Placed[] {
  const vw = document.documentElement.clientWidth;
  const gutter = Math.max(0, (vw - Math.min(vw, CONTENT)) / 2);
  const placed: Placed[] = [];
  for (const s of stickerLayout) {
    if (s.hideBelowVw && vw < s.hideBelowVw) continue;
    const section = document.getElementById(s.anchor);
    if (!section) continue;
    const height = s.height ?? 140;
    const width = Math.round(height * (s.aspect ?? 1));
    const centre = Math.max(width / 2 + 8, gutter / 2);
    const cx = s.side === "left" ? centre : vw - centre;
    const top = section.getBoundingClientRect().top + window.scrollY;
    placed.push({
      id: s.id,
      x: Math.round(cx - width / 2),
      y: Math.round(top + s.top - height / 2),
      width,
      height,
    });
  }
  return placed;
}

export function StickerProvider() {
  const pathname = usePathname();
  const [placed, setPlaced] = useState<Placed[] | null>(null);
  const [isTouch, setIsTouch] = useState<boolean | null>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const noHover = window.matchMedia("(hover: none)");
    const sync = () => setIsTouch(coarse.matches || noHover.matches);
    sync();
    coarse.addEventListener("change", sync);
    noHover.addEventListener("change", sync);
    return () => {
      coarse.removeEventListener("change", sync);
      noHover.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPlaced(measure()));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  if (!placed || isTouch !== false) return null;
  if (document.documentElement.clientWidth < MIN_WIDTH) return null;

  const meta = new Map(stickerLayout.map((s) => [s.id, s]));

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full overflow-hidden"
    >
      {placed.map((p) => {
        const s = meta.get(p.id)!;
        return (
          <Sticker
            key={p.id}
            id={p.id}
            imagePath={s.imagePath}
            alt={s.alt}
            width={p.width}
            height={p.height}
            initialRotation={s.initialRotation}
            initialX={p.x}
            initialY={p.y}
          />
        );
      })}
    </div>
  );
}
