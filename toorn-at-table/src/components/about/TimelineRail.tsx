"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { Polaroid } from "@/components/polaroid/Polaroid";
import type { LocalisedString, TimelineChapter } from "@/lib/types";

const CARD_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Polaroids anchored to a timeline chapter id. Rendered as a wrapping
 * cluster at the foot of the chapter card — on desktop they overlap
 * slightly via negative margin, on mobile they stack inline.
 *
 * Captions + alts are Localised trios so the marker scribble flips
 * with the active language alongside the chapter body. Brand rule:
 * no em-dashes in polaroid captions.
 */
type ChapterPolaroid = {
  src: string;
  alt: LocalisedString;
  caption: LocalisedString;
  rotation?: number;
  size?: "sm" | "md" | "lg";
};

const CHAPTER_POLAROIDS: Record<string, ChapterPolaroid[]> = {
  marechaussee: [
    {
      src: "/images/polaroids/Marechaussee.jpeg",
      alt: {
        en: "Nick in Royal Marechaussee uniform at Schiphol",
        es: "Nick con uniforme de la Marechaussee en Schiphol",
        nl: "Nick in marechaussee-uniform op Schiphol",
      },
      caption: {
        en: "Schiphol, in uniform",
        es: "Schiphol, de uniforme",
        nl: "Schiphol, in uniform",
      },
    },
  ],
  gambia: [
    {
      src: "/images/polaroids/gambia.jpeg",
      alt: {
        en: "Nick volunteering in The Gambia",
        es: "Nick haciendo voluntariado en Gambia",
        nl: "Nick tijdens vrijwilligerswerk in Gambia",
      },
      caption: {
        en: "A year in The Gambia",
        es: "Un año en Gambia",
        nl: "Een jaar Gambia",
      },
    },
  ],
  amateur: [
    {
      src: "/images/polaroids/koksopleiding.jpeg",
      alt: {
        en: "Nick during culinary school",
        es: "Nick en la escuela de cocina",
        nl: "Nick tijdens de koksopleiding",
      },
      caption: {
        en: "First knife",
        es: "Primer cuchillo",
        nl: "Eerste mes",
      },
    },
  ],
  bordeau: [
    {
      src: "/images/polaroids/patisserie-amsterdam.jpeg",
      alt: {
        en: "Nick at work in the Bord'eau patisserie",
        es: "Nick trabajando en la pastelería de Bord'eau",
        nl: "Nick aan het werk bij de patisserie van Bord'eau",
      },
      caption: {
        en: "Bord'eau, patisserie",
        es: "Bord'eau, pastelería",
        nl: "Bord'eau, patisserie",
      },
      size: "sm",
      rotation: -4,
    },
    {
      src: "/images/polaroids/patisserie-amsterdam1.jpeg",
      alt: {
        en: "Detail of the Bord'eau patisserie",
        es: "Detalle de la pastelería de Bord'eau",
        nl: "Detail van de patisserie bij Bord'eau",
      },
      caption: {
        en: "On the mise",
        es: "En la mise",
        nl: "In de mise",
      },
      size: "sm",
      rotation: 3,
    },
    {
      src: "/images/polaroids/patisserie-amsterdam2.jpeg",
      alt: {
        en: "Bord'eau patisserie, third shot",
        es: "Pastelería de Bord'eau, tercera toma",
        nl: "Patisserie bij Bord'eau, derde shot",
      },
      caption: {
        en: "End of service",
        es: "Fin del servicio",
        nl: "Eind van de service",
      },
      size: "sm",
      rotation: -2,
    },
  ],
  groningen: [
    {
      src: "/images/polaroids/kvk.jpeg",
      alt: {
        en: "Nick at the Chamber of Commerce",
        es: "Nick en la Cámara de Comercio",
        nl: "Nick bij de Kamer van Koophandel",
      },
      caption: {
        en: "Day one, registered",
        es: "Día uno, dado de alta",
        nl: "KvK, dag een",
      },
      size: "sm",
      rotation: 4,
    },
    {
      src: "/images/polaroids/eetcafetexels.jpeg",
      alt: {
        en: "The Eetcafé Texels building in Groningen",
        es: "El local de Eetcafé Texels en Groningen",
        nl: "Het pand van Eetcafe Texels in Groningen",
      },
      caption: {
        en: "Eetcafé Texels",
        es: "Eetcafé Texels",
        nl: "Eetcafé Texels",
      },
      size: "sm",
      rotation: -3,
    },
    {
      src: "/images/polaroids/kaylee-eetcafetexels.jpeg",
      alt: {
        en: "Kaylee behind the bar at Eetcafé Texels",
        es: "Kaylee detrás de la barra en Eetcafé Texels",
        nl: "Kaylee achter de bar bij Eetcafe Texels",
      },
      caption: {
        en: "Kaylee behind the bar",
        es: "Kaylee tras la barra",
        nl: "Kaylee achter de bar",
      },
      size: "sm",
      rotation: 2,
    },
    {
      src: "/images/polaroids/holyburgers.jpeg",
      alt: {
        en: "Holyburgers on Gelkingestraat",
        es: "Holyburgers en la Gelkingestraat",
        nl: "Holyburgers in de Gelkingestraat",
      },
      caption: {
        en: "Holyburgers, Gelkingestraat",
        es: "Holyburgers, Gelkingestraat",
        nl: "Holyburgers, Gelkingestraat",
      },
      size: "sm",
      rotation: -4,
    },
  ],
  fotografie: [
    {
      src: "/images/polaroids/japan-yokohama.jpeg",
      alt: {
        en: "Eating ramen in Yokohama",
        es: "Comiendo ramen en Yokohama",
        nl: "Ramen eten in Yokohama",
      },
      caption: {
        en: "Yokohama, '24",
        es: "Yokohama, '24",
        nl: "Yokohama, '24",
      },
    },
  ],
  "costa-del-sol": [
    {
      src: "/images/polaroids/coin.jpeg",
      alt: {
        en: "The Andalusian landscape around Coín",
        es: "El paisaje andaluz alrededor de Coín",
        nl: "Het Andalusische landschap rond Coin",
      },
      caption: {
        en: "Coín, the backcountry",
        es: "Coín, el interior",
        nl: "Coín, achterland",
      },
      size: "sm",
      rotation: -3,
    },
    {
      src: "/images/polaroids/paellaavond.jpeg",
      alt: {
        en: "Guests gathered around a paella",
        es: "Invitados alrededor de una paella",
        nl: "Gasten rond een paella",
      },
      caption: {
        en: "Paella night",
        es: "Noche de paella",
        nl: "Paella avond",
      },
      size: "sm",
      rotation: 4,
    },
  ],
};


function ChapterCard({
  chapter,
  chapterPrefix,
  reduceMotion,
  onActive,
}: {
  chapter: TimelineChapter;
  chapterPrefix: string;
  reduceMotion: boolean;
  onActive: (id: string) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const isActive = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isActive) onActive(chapter.id);
  }, [isActive, chapter.id, onActive]);

  return (
    <motion.article
      ref={ref}
      id={chapter.id}
      className="relative"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: CARD_EASE }}
    >
      {/* Inner elements used to each carry their own staggered whileInView
          fade-up. With nine chapters that added up to ~30 concurrent
          IntersectionObservers and noticeable scroll jank on mid-tier
          phones. The parent article's whileInView covers the visual
          intent — the whole card fades in once. Inner h3 / body / scrawl
          ride along as plain HTML, which is what they should have been
          from the start. */}
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-tattoo-red">
          {chapterPrefix} {chapter.number}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 md:hidden">
          {chapter.period}
        </span>
      </div>
      <h3
        className="mt-4 max-w-2xl font-display italic leading-[1.02] text-ink"
        style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
      >
        {chapter.title}
      </h3>
      <div
        className="mt-6 max-w-2xl space-y-5 font-serif text-ink/85"
        style={{ fontSize: "clamp(17px, 1.25vw, 19px)", lineHeight: 1.6 }}
      >
        {chapter.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {chapter.marginalia && (
        <p
          className="mt-6 font-hand text-tattoo-red"
          style={{ fontSize: "20px", transform: "rotate(-1.5deg)" }}
        >
          {chapter.marginalia}
        </p>
      )}

      {(() => {
        const polaroids = CHAPTER_POLAROIDS[chapter.id];
        if (!polaroids || polaroids.length === 0) return null;
        return (
          <div className="mt-10 flex flex-wrap items-end justify-start gap-x-6 gap-y-8 md:mt-12 md:gap-x-2">
            {polaroids.map((p, i) => (
              <Polaroid
                key={p.src}
                src={p.src}
                alt={p.alt}
                caption={p.caption}
                size={p.size ?? "md"}
                rotation={p.rotation}
                className={i > 0 ? "md:-ml-4" : ""}
              />
            ))}
          </div>
        );
      })()}

    </motion.article>
  );
}

export function TimelineRail({
  chapters,
  eyebrow,
  title,
  chapterPrefix,
}: {
  chapters: TimelineChapter[];
  eyebrow: string;
  title: string;
  chapterPrefix: string;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState(chapters[0].id);
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="tijdlijn"
      aria-labelledby="timeline-heading"
      className="relative w-full bg-cream"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {eyebrow}
          </p>
          <h2
            id="timeline-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {title}
          </h2>
        </header>

        <div
          ref={railRef}
          className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12"
        >
          {/* Sticky year column */}
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-28">
              <div className="relative pl-1">
                <div
                  aria-hidden
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/15"
                />
                <motion.div
                  aria-hidden
                  className="absolute left-[7px] top-2 w-px origin-top bg-tattoo-red"
                  style={{
                    scaleY: reduceMotion ? 1 : scrollYProgress,
                    height: "calc(100% - 1rem)",
                  }}
                />
                <ul className="space-y-7 font-mono text-[11px] uppercase tracking-[0.22em]">
                  {chapters.map((c) => {
                    const active = c.id === activeId;
                    return (
                      <li key={c.id} className="relative pl-8">
                        <span
                          aria-hidden
                          className="absolute left-[3px] top-[3px] block h-2 w-2 rounded-full border transition-colors"
                          style={{
                            backgroundColor: active ? "#C8202A" : "#F4EDE0",
                            borderColor: active
                              ? "#C8202A"
                              : "rgba(26,26,26,0.4)",
                          }}
                        />
                        <span
                          className={`block transition-colors ${
                            active ? "text-tattoo-red" : "text-ink/45"
                          }`}
                        >
                          {c.yearShort}
                        </span>
                        <span
                          className={`mt-0.5 block text-[10px] tracking-[0.22em] transition-colors ${
                            active ? "text-ink/70" : "text-ink/35"
                          }`}
                        >
                          {c.period}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          {/* Cards column */}
          <div className="space-y-28 md:col-span-9 md:space-y-40">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                chapterPrefix={chapterPrefix}
                reduceMotion={reduceMotion}
                onActive={setActiveId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
