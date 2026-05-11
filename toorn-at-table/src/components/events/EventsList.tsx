"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { EventItem } from "@/lib/types";
import { EventOverlay } from "./EventOverlay";

const NL_MONTHS = [
  "jan",
  "feb",
  "mrt",
  "apr",
  "mei",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec",
];

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return {
    day: d.getDate(),
    month: NL_MONTHS[d.getMonth()],
    year: d.getFullYear(),
    weekday: ["zo", "ma", "di", "wo", "do", "vr", "za"][d.getDay()],
  };
}

export function EventsList({ events }: { events: EventItem[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openEvent = openSlug
    ? events.find((e) => e.slug === openSlug) ?? null
    : null;

  if (events.length === 0) {
    return (
      <p className="mt-20 font-serif italic text-ink/55">
        Geen geplande events op dit moment. Schrijf je in voor de nieuwsbrief
        om als eerste te horen wanneer de volgende erbij komt.
      </p>
    );
  }

  return (
    <>
      <ul className="mt-16 space-y-px border-t border-b border-ink/15 md:mt-24">
        {events.map((event) => {
          const d = formatDate(event.date);
          const isSoldOut =
            event.bookable === false ||
            (event.spotsAvailable !== undefined && event.spotsAvailable <= 0);
          return (
            <li key={event.slug}>
              <motion.button
                onClick={() => setOpenSlug(event.slug)}
                whileHover={{ backgroundColor: "rgba(232, 220, 196, 0.55)" }}
                transition={{ duration: 0.15 }}
                className="group grid w-full grid-cols-[88px_1fr_auto] items-center gap-6 border-b border-ink/15 px-1 py-7 text-left transition-colors hover:bg-cream-warm/55 last:border-b-0 md:grid-cols-[160px_1fr_auto_auto] md:gap-10 md:px-2 md:py-9"
              >
                {/* Date stamp */}
                <div>
                  <div
                    className="font-display italic leading-[0.85] text-ink"
                    style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
                  >
                    {d.day}{" "}
                    <span className="text-ink/65">{d.month}</span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                    {d.weekday} · {d.year}
                  </div>
                </div>

                {/* Title + location */}
                <div className="min-w-0">
                  <h3
                    className="font-display italic leading-[1.05] text-ink"
                    style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}
                  >
                    {event.title}
                  </h3>
                  <p className="mt-2 font-serif italic text-ink/65" style={{ fontSize: 16 }}>
                    {event.location}
                    {event.city && (
                      <span className="text-ink/40"> · {event.city}</span>
                    )}
                  </p>
                  {event.menuTeaser && (
                    <p
                      className="mt-3 hidden max-w-xl font-serif text-ink/75 md:block"
                      style={{ fontSize: 15, lineHeight: 1.5 }}
                    >
                      {event.menuTeaser}
                    </p>
                  )}
                </div>

                {/* Spots */}
                <div className="hidden flex-col items-end font-mono text-[10px] uppercase tracking-[0.22em] md:flex">
                  {isSoldOut ? (
                    <span className="text-ink/40">Volgeboekt</span>
                  ) : event.spotsAvailable !== undefined && event.capacity ? (
                    <>
                      <span className="text-ink">
                        {event.spotsAvailable} / {event.capacity}
                      </span>
                      <span className="text-ink/40">plekken</span>
                    </>
                  ) : (
                    <span className="text-ink/40">Op aanvraag</span>
                  )}
                </div>

                {/* Open arrow */}
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 transition-colors group-hover:text-tattoo-red">
                  <span className="hidden md:inline">Open</span>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                    <path
                      d="M1 5 H12 M9 1 L12 5 L9 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </motion.button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {openEvent && (
          <EventOverlay event={openEvent} onClose={() => setOpenSlug(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
