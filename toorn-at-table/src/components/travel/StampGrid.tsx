"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useT } from "@/i18n/client";
import type { TravelLocation } from "@/lib/types";
import { TravelOverlay } from "./TravelOverlay";

/**
 * Passport-stamp carousel for the Reizen section.
 *
 * 27 stamps in a horizontal snap-scroll strip — big enough to actually
 * see, calm enough to scan. Each stamp clicks open to the localised
 * travel overlay; native horizontal scroll handles touch + trackpad,
 * arrow buttons handle mouse + keyboard, and a dynamic counter tracks
 * which country you're currently parked on.
 *
 * Per-country rendering preference:
 *   1. If `public/images/stamps/{slug}.png` exists, render that PNG as
 *      the stamp. The illustration is expected to include the ring,
 *      country name and ANNO year already.
 *   2. If the PNG is missing the image onError handler swaps in the
 *      SVG fallback stamp (rings + curved mono country name + Alfa
 *      Slab country code + ANNO baseline).
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
  const t = useT();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = openSlug
    ? locations.find((l) => l.slug === openSlug) ?? null
    : null;

  const featuredCount = locations.filter((l) => l.intro || l.body).length;
  const legend = t.travel.legendTotal
    .replace("{count}", String(locations.length))
    .replace("{featured}", String(featuredCount));

  // Measure the centre-to-centre distance of one stamp from the DOM
  // so prev/next + the index counter stay correct across breakpoints
  // and after responsive resizes.
  const getStep = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;
    const items = Array.from(scroller.children) as HTMLElement[];
    if (items.length < 2) return items[0]?.offsetWidth ?? 0;
    return items[1].offsetLeft - items[0].offsetLeft;
  }, []);

  const scrollByStamp = useCallback(
    (direction: 1 | -1) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const step = getStep();
      if (!step) return;
      scroller.scrollBy({ left: step * direction, behavior: "smooth" });
    },
    [getStep],
  );

  // Vertical wheel input on desktop translates to horizontal scroll —
  // a near-universal expectation for horizontal scrollers. Trackpads
  // already produce horizontal deltas naturally; we only re-route when
  // the wheel was clearly meant to scroll the page.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scroller.scrollLeft += e.deltaY;
      }
    };
    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", onWheel);
  }, []);

  // Track which stamp is closest to the start of the viewport so the
  // counter + label stay in sync as the visitor scrolls.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const update = () => {
      const step = getStep();
      if (!step) return;
      const idx = Math.round(scroller.scrollLeft / step);
      setCurrentIndex(
        Math.min(locations.length - 1, Math.max(0, idx)),
      );
    };
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [getStep, locations.length]);

  // Keyboard nav: left/right arrows when the carousel is focused.
  const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByStamp(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByStamp(-1);
    }
  };

  const currentLocation = locations[currentIndex];

  return (
    <>
      <div className="mt-12 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span>{legend}</span>
          <span aria-hidden className="text-tattoo-red/70">
            ↳ {t.travel.tapHint}
          </span>
        </span>
        {currentLocation && (
          <span className="text-ink/40">
            {currentLocation.name}{" "}
            <span className="text-ink/30">
              · {currentIndex + 1} / {locations.length}
            </span>
          </span>
        )}
      </div>

      <div className="relative mt-10 md:mt-14">
        {/* Prev / next arrows — desktop only, swipe takes over on touch */}
        <button
          type="button"
          onClick={() => scrollByStamp(-1)}
          aria-label="Previous stamp"
          className="absolute left-1 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-cream/95 text-ink shadow-[0_4px_14px_-4px_rgba(20,16,12,0.25)] transition-colors hover:bg-tattoo-red hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red md:inline-flex"
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M15 7 H2 M6 2 L1 7 L6 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByStamp(1)}
          aria-label="Next stamp"
          className="absolute right-1 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-cream/95 text-ink shadow-[0_4px_14px_-4px_rgba(20,16,12,0.25)] transition-colors hover:bg-tattoo-red hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red md:inline-flex"
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 7 H14 M10 2 L15 7 L10 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <ul
          ref={scrollerRef}
          data-lenis-prevent
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-label={t.travel.eyebrow}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-4 [scrollbar-width:none] [-ms-overflow-style:none] focus-visible:outline-none [&::-webkit-scrollbar]:hidden"
        >
          {locations.map((loc, i) => (
            <li
              key={loc.slug}
              className="shrink-0 snap-start w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px]"
            >
              <Stamp
                location={loc}
                code={STAMP_CODES[loc.slug] ?? loc.slug.slice(0, 2).toUpperCase()}
                onClick={() => setOpenSlug(loc.slug)}
                index={i}
              />
            </li>
          ))}
        </ul>
      </div>

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
  const t = useT();
  const isFeatured = Boolean(location.intro || location.body);
  const rotation = jitter(location.slug, 4);
  const labelName = (location.country ?? location.name).toUpperCase();
  const imagePath =
    location.heroImage ?? `/images/stamps/${location.slug}.png`;

  const [imageBroken, setImageBroken] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      data-cursor={isFeatured ? t.travel.cursorReadStory : labelName}
      initial={{ opacity: 0, y: 18, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ scale: 1.06, rotate: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(0.45, (index % 8) * 0.04),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative block aspect-square w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
      aria-label={`${location.name}${
        location.year
          ? t.travel.visitedInYear.replace("{year}", String(location.year))
          : ""
      }${isFeatured ? `. ${t.travel.cursorReadStory}` : ""}`}
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
          alt={t.travel.stampAlt.replace("{name}", location.name)}
          fill
          sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 240px, 260px"
          onError={() => setImageBroken(true)}
          className="object-contain transition duration-300 ease-out"
        />
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
    </svg>
  );
}
