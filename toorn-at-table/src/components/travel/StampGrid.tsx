"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { TravelLocation } from "@/lib/types";
import { TravelOverlay } from "./TravelOverlay";

/**
 * Travel section UI — replaces the hand-drawn atlas with a passport-stamp
 * grid. Each visited country becomes a circular tattoo-flash stamp:
 *
 *   ⬮ Country name curved on top   (mono, letter-spaced)
 *   ⬮ ISO-style code in the middle (slab display, big)
 *   ⬮ "ANNO 19xx" baseline         (mono, dim)
 *   ⬮ Red corner dot + small ink splats when the location has a story
 *
 * Click → existing TravelOverlay opens with the blog content. Featured
 * (story) and visited-only stamps are visually distinct so the difference
 * the previous map tried to convey survives, with none of the geographic
 * crowding.
 */

const STAMP_CODES: Record<string, string> = {
  nederland: "NL",
  belgie: "BE",
  luxemburg: "LU",
  duitsland: "DE",
  frankrijk: "FR",
  zwitserland: "CH",
  oostenrijk: "AT",
  tsjechie: "CZ",
  hongarije: "HU",
  roemenie: "RO",
  uk: "UK",
  ierland: "IE",
  denemarken: "DK",
  zweden: "SE",
  noorwegen: "NO",
  finland: "FI",
  spanje: "ES",
  portugal: "PT",
  italie: "IT",
  vaticaan: "VA",
  griekenland: "GR",
  turkije: "TR",
  marokko: "MA",
  senegal: "SN",
  gambia: "GM",
  "verenigde-staten": "USA",
  japan: "JP",
};

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function jitter(slug: string, range: number) {
  return (hash(slug) % (range * 2 + 1)) - range;
}

export function StampGrid({ locations }: { locations: TravelLocation[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = openSlug
    ? locations.find((l) => l.slug === openSlug) ?? null
    : null;

  const featuredCount = locations.filter(
    (l) => l.intro || l.body,
  ).length;

  return (
    <>
      {/* Legend strip */}
      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/15 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
        <span>
          {locations.length} stempels · {featuredCount} verhalen
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-tattoo-red"
          />
          rode dop = verhaal
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full border border-ink/50"
          />
          alleen geweest
        </span>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 md:mt-14 md:grid-cols-4 md:gap-x-8 md:gap-y-12 lg:grid-cols-5">
        {locations.map((loc, i) => (
          <li key={loc.slug}>
            <Stamp
              location={loc}
              code={STAMP_CODES[loc.slug] ?? loc.slug.slice(0, 2).toUpperCase()}
              onClick={() => setOpenSlug(loc.slug)}
              index={i}
            />
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <TravelOverlay
            location={open}
            onClose={() => setOpenSlug(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Stamp({
  location,
  code,
  onClick,
  index,
}: {
  location: TravelLocation;
  code: string;
  onClick: () => void;
  index: number;
}) {
  const isFeatured = Boolean(location.intro || location.body);
  const rotation = jitter(location.slug, 5);
  const labelName = (location.country ?? location.name).toUpperCase();
  const codeSize = code.length >= 3 ? 42 : code.length === 2 ? 60 : 70;

  return (
    <motion.button
      onClick={onClick}
      data-cursor={isFeatured ? "Lees verhaal" : labelName}
      initial={{ opacity: 0, y: 18, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ scale: 1.06, rotate: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(0.45, (index % 10) * 0.04),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative block aspect-square w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-4 focus-visible:ring-offset-cream ${
        isFeatured ? "text-ink" : "text-ink/45"
      }`}
      aria-label={`${location.name}${
        location.year ? `, bezocht ${location.year}` : ""
      }${isFeatured ? " — lees verhaal" : ""}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="block h-full w-full transition-transform duration-300 ease-out group-hover:rotate-0"
        aria-hidden
      >
        <defs>
          <path
            id={`top-${location.slug}`}
            d="M 28 100 A 72 72 0 0 1 172 100"
          />
        </defs>

        {/* Outer ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Inner dotted ring */}
        <circle
          cx="100"
          cy="100"
          r="83"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        {/* Country name curved across the top */}
        <text
          fontFamily="var(--font-mono), monospace"
          fontSize="11"
          letterSpacing="0.28em"
          fill="currentColor"
        >
          <textPath
            href={`#top-${location.slug}`}
            startOffset="50%"
            textAnchor="middle"
          >
            {labelName}
          </textPath>
        </text>

        {/* Country code centre — slab display */}
        <text
          x="100"
          y="120"
          textAnchor="middle"
          fontFamily="var(--font-display), serif"
          fontSize={codeSize}
          fill="currentColor"
        >
          {code}
        </text>

        {/* Year baseline */}
        {location.year && (
          <text
            x="100"
            y="150"
            textAnchor="middle"
            fontFamily="var(--font-mono), monospace"
            fontSize="10"
            letterSpacing="0.34em"
            fill="currentColor"
            opacity="0.6"
          >
            ANNO {location.year}
          </text>
        )}

        {/* Featured marks: red wax-stamp dot + ink splats */}
        {isFeatured && (
          <g>
            <circle cx="156" cy="46" r="6" fill="#C8202A" />
            <circle
              cx="156"
              cy="46"
              r="11"
              fill="none"
              stroke="#C8202A"
              strokeWidth="0.8"
              opacity="0.4"
            />
            <circle cx="44" cy="158" r="1.5" fill="currentColor" />
            <circle cx="58" cy="56" r="1" fill="currentColor" opacity="0.55" />
            <path
              d="M150 156 L156 156 M153 153 L153 159"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </motion.button>
  );
}
