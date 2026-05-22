"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/i18n/client";
import { pick } from "@/lib/content/i18n";
import type { LocalisedString } from "@/lib/types";

/**
 * Video clip in one of two modes:
 *
 *  - `mode="click"` (default) — poster image with a centered cream
 *    play button. The actual <video> element only mounts after the
 *    visitor clicks, so page weight stays flat for the "didn't watch"
 *    majority and we dodge autoplay-policy quirks across browsers.
 *
 *  - `mode="ambient"` — autoplay, muted, loop, no controls, no
 *    overlay. For short looping snippets that read like motion
 *    photographs more than they read like "videos." Wrapped in the
 *    same shadow + paper-ring frame as the click variant so it lives
 *    in the same family as the polaroids on the page.
 *
 * Aspect prop drives the container ratio (16/9 default, 9/16 for
 * portrait phone clips, 1/1 for square). Caller controls the rendered
 * width via className (max-w-* / w-* / etc.).
 */

type Mode = "click" | "ambient";
type Aspect = "16/9" | "9/16" | "1/1" | "4/5";

const ASPECT_CLASS: Record<Aspect, string> = {
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
};

export type ClipProps = {
  /** Absolute path under /public, e.g. "/videos/whatsapp-clip.mp4" */
  src: string;
  /** Required for screen readers. Plain string or Localised trio. */
  alt: string | LocalisedString;
  mode?: Mode;
  aspect?: Aspect;
  /** Optional poster image — only used in click mode. */
  poster?: string;
  /** Optional handwritten caption shown under the clip. Plain string
   *  or Localised trio that flips with the active language. */
  caption?: string | LocalisedString;
  /** Caller-supplied sizing / positioning classes (e.g. max-w-sm). */
  className?: string;
};

function resolveLocalised(
  value: string | LocalisedString | undefined,
  locale: ReturnType<typeof useLocale>,
): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "string") return value;
  return pick(value, locale);
}

export function Clip({
  src,
  alt,
  mode = "click",
  aspect = "16/9",
  poster,
  caption,
  className = "",
}: ClipProps) {
  const [playing, setPlaying] = useState(mode === "ambient");
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const resolvedAlt = resolveLocalised(alt, locale) ?? "";
  const resolvedCaption = resolveLocalised(caption, locale);

  // Ambient clips defer their src until the frame is near the viewport.
  // Without this, the whatsapp-clip's 11 MB would download on every page
  // load — even for visitors who never scroll to ClosingPanel. With this,
  // the bytes only land when the visitor is about to see them, with a
  // ~400 px rootMargin to give the browser a head start so the loop is
  // already running by the time the frame is fully on screen.
  const [shouldLoad, setShouldLoad] = useState(mode !== "ambient");
  useEffect(() => {
    if (mode !== "ambient") return;
    if (shouldLoad) return;
    const el = frameRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode, shouldLoad]);

  const onPlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* autoplay blocked — visitor can hit native controls */
      });
    });
  };

  const aspectClass = ASPECT_CLASS[aspect];
  const isAmbient = mode === "ambient";

  return (
    <figure className={`relative ${className}`}>
      <div
        ref={frameRef}
        className={`relative w-full overflow-hidden bg-ink shadow-[0_10px_28px_-12px_rgba(20,16,12,0.5)] ring-1 ring-ink/[0.08] ${aspectClass}`}
      >
        {isAmbient ? (
          // Ambient: autoplay/muted/loop. The <video> only carries a real
          // src once the IntersectionObserver above flips shouldLoad, so
          // visitors who never scroll here pay no bytes for the clip.
          <video
            ref={videoRef}
            src={shouldLoad ? src : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={resolvedAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : playing ? (
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={resolvedAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play: ${resolvedAlt}`}
            className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {poster ? (
              <Image
                src={poster}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <span aria-hidden className="absolute inset-0 block bg-ink" />
            )}
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors duration-300 group-hover:bg-ink/20"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 shadow-[0_4px_18px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  aria-hidden
                >
                  <path d="M2 1.5 L18 11 L2 20.5 Z" fill="#1A1A1A" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      {resolvedCaption && (
        <figcaption
          className="mt-3 text-center font-hand text-tattoo-red leading-[1.15]"
          style={{ fontSize: 16 }}
        >
          {resolvedCaption}
        </figcaption>
      )}
    </figure>
  );
}
