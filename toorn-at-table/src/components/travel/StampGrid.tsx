"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { TravelLocation } from "@/lib/types";
import { TravelOverlay } from "./TravelOverlay";

/**
 * Passport-stamp grid for the Reizen section.
 *
 * Per-country rendering preference:
 *   1. If `public/images/stamps/{slug}.png` exists, render that PNG as
 *      the stamp. The illustration is expected to include the ring,
 *      country name and ANNO year already, so no SVG overlay is added.
 *   2. If the PNG is missing (or hasn't been uploaded yet) the image
 *      onError handler swaps in the SVG fallback stamp (rings + curved
 *      mono country name + Alfa Slab country code + ANNO baseline),
 *      so the grid keeps reading correctly while Nick is filling out
 *      the illustration set.
 *
 * Visited-only countries (no intro / body in travel-data) render at
 * grayscale + reduced opacity so the eye lands on the ones with stories.
 * The featured countries keep full colour and gain a red wax-stamp dot
 * in the corner of the SVG fallback. Hover lifts saturation back and
 * snaps the slight handmade rotation to 0.
 */

/**
 * Cache-bust token for stamp PNGs. Bump this string whenever a batch
 * of stamps gets re-uploaded so Next.js's image optimizer and the
 * browser stop serving the previously-cached version under the same
 * URL. Anything past "?v=" is opaque to the file system — the actual
 * file on disk is loaded — but the URL change is enough to invalidate
 * every cache layer between the file and the user's screen.
 */
const STAMP_VERSION = "v3";

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

  const featuredCount = locations.filter((l) => l.intro || l.body).length;

  return (
    <>
      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/15 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
        <span>
          {locations.length} stempels · {featuredCount} verhalen
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-tattoo-red" />
          met verhaal
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="inline-block h-2 w-2 rounded-full border border-ink/50" />
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
          <TravelOverlay location={open} onClose={() => setOpenSlug(null)} />
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
  const baseImagePath =
    location.heroImage ?? `/images/stamps/${location.slug}.png`;
  const imagePath = `${baseImagePath}?v=${STAMP_VERSION}`;

  const [imageBroken, setImageBroken] = useState(false);

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
      className="group relative block aspect-square w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
      aria-label={`${location.name}${
        location.year ? `, bezocht ${location.year}` : ""
      }${isFeatured ? " — lees verhaal" : ""}`}
    >
      {imageBroken ? (
        <SvgStamp
          slug={location.slug}
          labelName={labelName}
          code={code}
          year={location.year}
          isFeatured={isFeatured}
        />
      ) : (
        <Image
          src={imagePath}
          alt={`${location.name} reisstempel`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw"
          onError={() => setImageBroken(true)}
          className={`object-contain transition duration-300 ease-out ${
            isFeatured
              ? ""
              : "grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100"
          }`}
        />
      )}

      {/* Featured wax-stamp dot overlay — only when the PNG renders;
          the SVG fallback already draws its own corner mark. */}
      {!imageBroken && isFeatured && (
        <span
          aria-hidden
          className="pointer-events-none absolute right-[10%] top-[10%]"
        >
          <span className="relative block h-3 w-3 rounded-full bg-tattoo-red shadow-[0_0_0_4px_rgba(200,32,42,0.18)]" />
        </span>
      )}
    </motion.button>
  );
}

function SvgStamp({
  slug,
  labelName,
  code,
  year,
  isFeatured,
}: {
  slug: string;
  labelName: string;
  code: string;
  year?: number;
  isFeatured: boolean;
}) {
  const codeSize = code.length >= 3 ? 42 : code.length === 2 ? 60 : 70;
  return (
    <svg
      viewBox="0 0 200 200"
      className={`block h-full w-full ${
        isFeatured ? "text-ink" : "text-ink/45"
      }`}
      aria-hidden
    >
      <defs>
        <path id={`top-${slug}`} d="M 28 100 A 72 72 0 0 1 172 100" />
      </defs>

      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
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

      <text
        fontFamily="var(--font-mono), monospace"
        fontSize="11"
        letterSpacing="0.28em"
        fill="currentColor"
      >
        <textPath href={`#top-${slug}`} startOffset="50%" textAnchor="middle">
          {labelName}
        </textPath>
      </text>

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

      {year && (
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
          ANNO {year}
        </text>
      )}

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
  );
}
