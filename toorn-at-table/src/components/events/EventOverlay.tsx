"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { useT, useLocale } from "@/i18n/client";
import { localizedHref } from "@/i18n/config";
import type { EventItem } from "@/lib/types";

function formatLongDate(iso: string, locale: string) {
  const d = new Date(iso + "T12:00:00");
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function EventOverlay({
  event,
  onClose,
}: {
  event: EventItem;
  onClose: () => void;
}) {
  const t = useT();
  const locale = useLocale();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const isSoldOut =
    event.bookable === false ||
    (event.spotsAvailable !== undefined && event.spotsAvailable <= 0);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-overlay-title"
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
          {t.events.overlayEyebrow}
        </p>

        <h2
          id="event-overlay-title"
          className="mt-4 font-display italic leading-[0.98] text-ink"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
        >
          {event.title}
        </h2>

        <p
          className="mt-6 font-serif italic text-ink/70"
          style={{ fontSize: "clamp(17px, 1.3vw, 20px)" }}
        >
          {formatLongDate(event.date, locale)}
          {event.startTime && (
            <span className="text-ink/55">
              {" "}
              · {t.events.overlayFrom} {event.startTime}
            </span>
          )}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-y-5 border-y border-ink/15 py-6 font-mono text-[11px] uppercase tracking-[0.22em] sm:grid-cols-4">
          <div>
            <dt className="text-ink/45">{t.events.overlayLocation}</dt>
            <dd className="mt-1 normal-case tracking-normal text-ink font-serif italic" style={{ fontSize: 14 }}>
              {event.location}
            </dd>
          </div>
          {event.city && (
            <div>
              <dt className="text-ink/45">{t.events.overlayCity}</dt>
              <dd className="mt-1 text-ink">{event.city}</dd>
            </div>
          )}
          {event.priceEur !== undefined && (
            <div>
              <dt className="text-ink/45">{t.events.overlayPricePer}</dt>
              <dd className="mt-1 text-ink">€ {event.priceEur}</dd>
            </div>
          )}
          {event.capacity && (
            <div>
              <dt className="text-ink/45">{t.events.overlaySpots}</dt>
              <dd className="mt-1 text-ink">
                {isSoldOut
                  ? t.events.soldOut
                  : event.spotsAvailable !== undefined
                    ? `${event.spotsAvailable} / ${event.capacity}`
                    : `${event.capacity} ${t.events.overlayMax}`}
              </dd>
            </div>
          )}
        </dl>

        {event.menuTeaser && (
          <p
            className="mt-10 max-w-2xl font-serif italic text-ink/85"
            style={{ fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: 1.4 }}
          >
            {event.menuTeaser}
          </p>
        )}

        {event.description && (
          <p
            className="mt-6 max-w-2xl font-serif text-ink/85"
            style={{ fontSize: "clamp(16px, 1.1vw, 18px)", lineHeight: 1.6 }}
          >
            {event.description}
          </p>
        )}

        <div className="mt-12 flex flex-col items-start gap-4">
          {isSoldOut ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/55">
              {t.events.soldOutNote}
            </p>
          ) : (
            <>
              <Magnetic strength={0.4}>
                <a
                  href={localizedHref(`/?event=${event.slug}#contact`, locale)}
                  onClick={onClose}
                  data-cursor={t.contact.cursorReserve}
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red"
                >
                  {t.events.bookCta}
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
                    <path
                      d="M1 5 H13 M10 1 L13 5 L10 9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </svg>
                </a>
              </Magnetic>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                {t.events.responseTime}
              </p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
