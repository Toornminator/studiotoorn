"use client";

import { useState } from "react";

const REAL_PORTRAIT = "/images/nick-portrait.jpg";
const PLACEHOLDER = "/images/portrait-placeholder.svg";

/**
 * Renders Nick's portrait. Tries the real photo first; if it 404s (because
 * the file hasn't been dropped in yet) we fall back to the placeholder SVG
 * with the same dimensions, so the layout never shifts. Once
 * /public/images/nick-portrait.jpg exists the fallback never fires.
 */
export function Portrait() {
  const [src, setSrc] = useState(REAL_PORTRAIT);
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-warm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Nick Toorn, private chef"
        className="h-full w-full object-cover"
        onError={() => setSrc(PLACEHOLDER)}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 20%, rgba(232,220,196,0) 55%, rgba(26,26,26,0.18) 100%)",
        }}
      />
    </div>
  );
}
