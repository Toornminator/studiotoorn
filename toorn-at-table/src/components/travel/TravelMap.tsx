"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Parallax } from "@/components/ui/Parallax";
import type { TravelLocation } from "@/lib/types";
import { AtlasMap } from "./AtlasMap";
import { TravelOverlay } from "./TravelOverlay";

export function TravelMap({ locations }: { locations: TravelLocation[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = openSlug
    ? locations.find((l) => l.slug === openSlug) ?? null
    : null;

  return (
    <>
      <Parallax intensity={40} className="relative mt-14 md:mt-20">
        <AtlasMap>
          {locations.map((loc) => {
            const isFeatured = Boolean(loc.intro || loc.body);
            return (
              <g
                key={loc.slug}
                transform={`translate(${(loc.mapX / 100) * 1400}, ${(loc.mapY / 100) * 640})`}
                style={{ cursor: "pointer" }}
                onClick={() => setOpenSlug(loc.slug)}
                data-cursor={isFeatured ? "Lees verhaal" : loc.name}
              >
                {isFeatured && (
                  <circle r="14" fill="#C8202A" fillOpacity="0.18">
                    <animate
                      attributeName="r"
                      values="9;18;9"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      values="0.25;0;0.25"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  r={isFeatured ? 6 : 4}
                  fill={isFeatured ? "#C8202A" : "#1A1A1A"}
                  stroke="#1A1A1A"
                  strokeWidth="1"
                />
                {isFeatured && (
                  <>
                    <line x1="-10" y1="0" x2="-7" y2="0" stroke="#1A1A1A" strokeWidth="1" />
                    <line x1="7" y1="0" x2="10" y2="0" stroke="#1A1A1A" strokeWidth="1" />
                    <line x1="0" y1="-10" x2="0" y2="-7" stroke="#1A1A1A" strokeWidth="1" />
                    <line x1="0" y1="7" x2="0" y2="10" stroke="#1A1A1A" strokeWidth="1" />
                    <text
                      x="14"
                      y="-12"
                      fontFamily="var(--font-mono), monospace"
                      fontSize="10"
                      letterSpacing="1.5"
                      fill="#1A1A1A"
                    >
                      {loc.name.toUpperCase()}
                    </text>
                    {loc.year && (
                      <text
                        x="14"
                        y="0"
                        fontFamily="var(--font-mono), monospace"
                        fontSize="8"
                        letterSpacing="1.5"
                        fill="#1A1A1A"
                        fillOpacity="0.5"
                      >
                        &apos;{String(loc.year).slice(-2)}
                      </text>
                    )}
                  </>
                )}
              </g>
            );
          })}
        </AtlasMap>

        {locations.length === 0 && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="max-w-md bg-cream/85 px-6 py-5 text-center backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-tattoo-red">
                Binnenkort
              </p>
              <p className="mt-2 font-serif italic text-ink/75" style={{ fontSize: 16, lineHeight: 1.5 }}>
                De plekken die Nick langs is geweest worden hier op de kaart
                geprikt, met een korte blog per stop. Eerste set komt
                binnenkort.
              </p>
            </div>
          </div>
        )}
      </Parallax>

      {/* Compact location chips below the map for tap-friendly entry */}
      {locations.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-2">
          {locations.map((loc) => (
            <li key={loc.slug}>
              <button
                onClick={() => setOpenSlug(loc.slug)}
                data-cursor="Lees verhaal"
                className="rounded-full border border-ink/15 bg-cream-warm/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
              >
                {loc.name}
                {loc.year && (
                  <span className="ml-2 text-ink/35">&apos;{String(loc.year).slice(-2)}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      <AnimatePresence>
        {open && (
          <TravelOverlay location={open} onClose={() => setOpenSlug(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

// Re-export AnimatePresence wrapper for parent type clarity.
export type { TravelLocation };
