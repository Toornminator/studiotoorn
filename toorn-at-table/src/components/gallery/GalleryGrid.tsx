"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useT } from "@/i18n/client";

type Photo = { src: string; alt: string };

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-12 columns-2 gap-4 sm:columns-3 sm:gap-5 md:mt-16 md:columns-3 md:gap-6 lg:columns-4">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            data-cursor={t.gallery.cursorOpen}
            className="group relative mb-4 block w-full overflow-hidden bg-cream-warm/30 sm:mb-5 md:mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            style={{ breakInside: "avoid" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
              duration: 0.65,
              delay: Math.min(0.5, i * 0.04),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              className="block w-full transition-transform duration-[600ms] ease-out will-change-transform group-hover:scale-[1.04]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            photos={photos}
            initialIndex={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Lightbox({
  photos,
  initialIndex,
  onClose,
}: {
  photos: Photo[];
  initialIndex: number;
  onClose: () => void;
}) {
  const t = useT();
  const [i, setI] = useState(initialIndex);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setI((p) => (p - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setI((p) => (p + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [photos.length, onClose]);

  const photo = photos[i];
  const prevPhoto = () => setI((p) => (p - 1 + photos.length) % photos.length);
  const nextPhoto = () => setI((p) => (p + 1) % photos.length);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Foto vergroot"
      className="fixed inset-0 z-[210] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label={t.gallery.cursorClose}
        data-cursor={t.gallery.cursorClose}
        className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 bg-ink/40 text-cream transition-colors hover:bg-tattoo-red hover:border-transparent sm:right-8 sm:top-8"
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

      {/* Prev */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevPhoto();
          }}
          aria-label={t.gallery.cursorPrev}
          data-cursor={t.gallery.cursorPrev}
          className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 bg-ink/40 text-cream transition-colors hover:bg-tattoo-red hover:border-transparent sm:left-6"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M9 2 L3 7 L9 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Next */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextPhoto();
          }}
          aria-label={t.gallery.cursorNext}
          data-cursor={t.gallery.cursorNext}
          className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 bg-ink/40 text-cream transition-colors hover:bg-tattoo-red hover:border-transparent sm:right-6"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M5 2 L11 7 L5 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <motion.img
        key={photo.src}
        src={photo.src}
        alt={photo.alt}
        className="block max-h-[88vh] max-w-[92vw] object-contain shadow-paper"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Counter + caption */}
      <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-cream/70 sm:bottom-8">
        <p className="tabular-nums">
          {i + 1} / {photos.length}
        </p>
        {photo.alt && (
          <p className="mt-2 max-w-[90vw] truncate normal-case tracking-normal text-cream/55" style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontStyle: "italic" }}>
            {photo.alt}
          </p>
        )}
      </div>
    </motion.div>
  );
}
