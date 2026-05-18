"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NowPlaying as NowPlayingData } from "@/lib/types";

/**
 * "What was playing" — pinned mini-strip in the overlay. One line of
 * vinyl-glyph + `Track — Artist`. Clicking expands to a 152px embed
 * (Spotify by default, YouTube fallback). The iframe is mounted only
 * on click so the page weight stays unaffected unless the visitor
 * actually wants to hear it.
 */

function VinylGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="7" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function NowPlaying({ data }: { data: NowPlayingData }) {
  const [expanded, setExpanded] = useState(false);
  const hasEmbed = Boolean(data.spotifyTrackId || data.youtubeId);

  const embedUrl = data.spotifyTrackId
    ? `https://open.spotify.com/embed/track/${data.spotifyTrackId}?utm_source=generator`
    : data.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${data.youtubeId}`
    : null;

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => hasEmbed && setExpanded((v) => !v)}
        disabled={!hasEmbed}
        className={`group inline-flex items-center gap-2.5 border-b border-dotted border-ink/25 pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70 transition-colors ${
          hasEmbed
            ? "hover:border-tattoo-red hover:text-tattoo-red focus-visible:outline-none focus-visible:text-tattoo-red focus-visible:border-tattoo-red cursor-pointer"
            : "cursor-default"
        }`}
      >
        <VinylGlyph />
        <span className="normal-case tracking-normal font-serif italic text-ink">
          {data.track}
        </span>
        <span className="text-ink/50 normal-case tracking-normal font-serif italic">
          — {data.artist}
        </span>
        {hasEmbed && (
          <span className="ml-2 text-[9px] tracking-[0.28em] text-ink/40 group-hover:text-tattoo-red">
            {expanded ? "[ close ]" : "[ play ]"}
          </span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {expanded && embedUrl && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 152, opacity: 1, marginTop: 14 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-md"
              title={`${data.track} by ${data.artist}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Compact teaser shown on the recipe card grid — just `♪ Artist`. The
 * "this recipe has a story behind it" breadcrumb. Doesn't render if
 * the recipe doesn't carry a `nowPlaying`.
 */
export function NowPlayingBadge({ data }: { data: NowPlayingData }) {
  return (
    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
      <span aria-hidden>♪</span>
      <span className="normal-case tracking-normal font-serif italic text-ink/65">
        {data.artist}
      </span>
    </span>
  );
}
