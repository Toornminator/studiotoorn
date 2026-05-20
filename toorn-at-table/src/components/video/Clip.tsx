"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * Click-to-play video clip. Renders a poster image with a centered
 * play button until the visitor clicks, then mounts the real <video>
 * element and starts playback. This keeps page weight flat for the
 * "didn't watch" majority and dodges autoplay-policy quirks across
 * browsers.
 *
 * If no poster is provided, the first video frame loads as the
 * placeholder via `preload="metadata"` once the visitor clicks.
 *
 * Caption matches the polaroid scribble — same red marker font —
 * so video clips visually sit next to polaroids without clashing.
 */

export type ClipProps = {
  /** Absolute path under /public, e.g. "/videos/koetshuys.mp4" */
  src: string;
  /** Optional poster image path (highly recommended). */
  poster?: string;
  /** Required for screen readers. */
  alt: string;
  /** Optional handwritten caption shown under the clip. */
  caption?: string;
  /** Caller-supplied sizing / positioning classes. */
  className?: string;
};

export function Clip({
  src,
  poster,
  alt,
  caption,
  className = "",
}: ClipProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onPlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* autoplay blocked — visitor can hit native controls */
      });
    });
  };

  return (
    <figure className={`relative ${className}`}>
      <div className="relative aspect-video w-full overflow-hidden bg-ink shadow-[0_10px_28px_-12px_rgba(20,16,12,0.5)] ring-1 ring-ink/[0.08]">
        {playing ? (
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play: ${alt}`}
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

      {caption && (
        <figcaption
          className="mt-3 text-center font-hand text-tattoo-red leading-[1.15]"
          style={{ fontSize: 16 }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
