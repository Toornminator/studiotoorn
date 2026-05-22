"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n/client";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import { Clip } from "@/components/video/Clip";
import { Polaroid } from "@/components/polaroid/Polaroid";
import type { TravelLocation } from "@/lib/types";

export function TravelOverlay({
  location,
  onClose,
}: {
  location: TravelLocation;
  onClose: () => void;
}) {
  const t = useT();
  useBodyScrollLock();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="travel-overlay-title"
      // data-lenis-prevent stops Lenis from hijacking wheel + touch
      // events inside the overlay so the native overflow-y-auto can
      // actually scroll the dialog content instead of the page behind it.
      data-lenis-prevent
      className="fixed inset-0 z-[200] overflow-y-auto bg-ink/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="relative mx-auto my-6 w-full max-w-3xl bg-cream px-5 pb-20 pt-16 shadow-paper md:my-12 md:px-12 md:pb-24 md:pt-20"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={t.gallery.cursorClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-cream-warm text-ink transition-colors hover:bg-tattoo-red hover:text-cream md:right-6 md:top-6"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2 2 L12 12 M12 2 L2 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
          {t.travel.overlayEyebrow}
          {location.country && <span className="text-ink/40"> · {location.country}</span>}
          {location.year && <span className="text-ink/40"> · {location.year}</span>}
        </p>

        <h2
          id="travel-overlay-title"
          className="mt-4 font-display italic leading-[0.98] text-ink"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
        >
          {location.name}
        </h2>

        {location.intro && (
          <p
            className="mt-6 max-w-2xl font-serif italic text-ink/80"
            style={{ fontSize: "clamp(18px, 1.4vw, 22px)", lineHeight: 1.45 }}
          >
            {location.intro}
          </p>
        )}

        {location.body && (
          <div
            className="mt-10 max-w-2xl space-y-5 font-serif text-ink/85"
            style={{ fontSize: "clamp(16px, 1.1vw, 18px)", lineHeight: 1.65 }}
          >
            {location.body.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}

        {location.pullQuote && (
          <blockquote
            className="my-12 border-l-2 border-tattoo-red pl-6 font-display italic text-ink/85"
            style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.25 }}
          >
            “{location.pullQuote}”
          </blockquote>
        )}

        {!location.intro && !location.body && (
          <p
            className="mt-10 max-w-2xl font-serif italic text-ink/55"
            style={{ fontSize: 18, lineHeight: 1.5 }}
          >
            {t.travel.overlayPlaceholder}
          </p>
        )}

        {/* Photo cluster + optional ambient clip. The clip lands on the
            right at md+ so the polaroid scatter and the 9:16 portrait
            sit shoulder-to-shoulder; on mobile the clip stacks above
            the polaroids so the moving image catches the eye first. */}
        {(location.polaroids?.length || location.clip) && (
          <div
            className={`mt-14 grid items-start gap-10 md:mt-20 md:gap-12 ${
              location.clip ? "md:grid-cols-[1fr_auto]" : ""
            }`}
          >
            {location.polaroids && location.polaroids.length > 0 && (
              <div className="order-2 flex flex-wrap items-end justify-start gap-x-6 gap-y-8 md:order-1 md:gap-x-2">
                {location.polaroids.map((p, i) => (
                  <Polaroid
                    key={p.src}
                    src={p.src}
                    alt={p.alt}
                    caption={p.caption}
                    size="md"
                    rotation={p.rotation}
                    className={i > 0 ? "md:-ml-4" : ""}
                  />
                ))}
              </div>
            )}

            {location.clip && (
              <div className="order-1 mx-auto w-full max-w-[260px] md:order-2 md:mx-0">
                <Clip
                  src={location.clip.src}
                  alt={location.clip.alt}
                  caption={location.clip.caption}
                  mode="ambient"
                  aspect="9/16"
                />
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
