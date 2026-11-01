"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { scrollPageTo } from "@/components/layout/SmoothScroll";
import type { LocalisedString, TimelineChapter } from "@/lib/types";

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

const STAMP_COLORS = ["var(--color-tattoo-red)", "var(--color-tattoo-navy)"];

/**
 * Vertical scroll spent per pixel of sideways travel in the pinned mode.
 * Below 1 the pages move faster than the wheel, which keeps nine wide
 * pages from turning into a marathon (1 would cost ~8,000 px of scroll).
 */
const SCROLL_PER_PX = 0.6;

/**
 * A passport stamp for one chapter, inked onto its page the moment the
 * page is properly in view: it lands oversized and settles with a hard
 * spring (the thunk), rotated like a border guard in a hurry. The edge is
 * roughed up with a displacement filter so it reads as rubber and ink,
 * not vector.
 */
function Stamp({
  chapter,
  chapterPrefix,
  index,
  inked,
  reduce,
}: {
  chapter: TimelineChapter;
  chapterPrefix: string;
  index: number;
  inked: boolean;
  reduce: boolean;
}) {
  const color = STAMP_COLORS[index % STAMP_COLORS.length];
  const place = chapter.period.split("·").pop()?.trim() ?? "";
  const ring = `${place} · ${chapterPrefix} ${chapter.number} · TOORN · `;
  const filterId = `ink-${chapter.id}`;
  const pathId = `ring-${chapter.id}`;
  const rest = index % 2 === 0 ? -11 : 8;

  return (
    <motion.svg
      viewBox="0 0 150 150"
      aria-hidden
      className="pointer-events-none h-[118px] w-[118px] mix-blend-multiply md:h-[136px] md:w-[136px]"
      initial={false}
      animate={
        inked || reduce
          ? { opacity: 0.88, scale: 1, rotate: rest }
          : { opacity: 0, scale: 1.9, rotate: rest - 14 }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 520, damping: 22, mass: 0.9 }
      }
    >
      <defs>
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={index + 3} />
          <feDisplacementMap in="SourceGraphic" scale="3.2" />
        </filter>
        <path id={pathId} d="M75 75 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0" />
      </defs>
      <g filter={`url(#${filterId})`} fill="none" stroke={color} style={{ color }}>
        <circle cx="75" cy="75" r="68" strokeWidth="3.2" />
        <circle cx="75" cy="75" r="60" strokeWidth="1.1" />
        <circle cx="75" cy="75" r="38" strokeWidth="1.1" />
        <text
          fill={color}
          stroke="none"
          className="font-mono uppercase"
          style={{ fontSize: 9.6, letterSpacing: "0.18em" }}
        >
          <textPath href={`#${pathId}`} textLength="306" lengthAdjust="spacingAndGlyphs">
            {ring}
          </textPath>
        </text>
        <text
          x="75"
          y="80"
          textAnchor="middle"
          fill={color}
          stroke="none"
          className="font-display"
          style={{ fontSize: chapter.yearShort.length > 3 ? 18 : 24 }}
        >
          {chapter.yearShort}
        </text>
        <text
          x="75"
          y="96"
          textAnchor="middle"
          fill={color}
          stroke="none"
          className="font-mono"
          style={{ fontSize: 7, letterSpacing: "0.3em" }}
        >
          {chapter.number}
        </text>
      </g>
    </motion.svg>
  );
}

/**
 * One passport page: chapter text on the left, its polaroids on the
 * right. In the pinned (desktop) mode the polaroid cluster drifts against
 * the direction of travel, so photos and text sit at different depths.
 */
function ChapterPage({
  chapter,
  index,
  total,
  chapterPrefix,
  progress,
  pinned,
  reduce,
}: {
  chapter: TimelineChapter;
  index: number;
  total: number;
  chapterPrefix: string;
  progress: MotionValue<number>;
  pinned: boolean;
  reduce: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inked = useInView(ref, { amount: 0.35, once: true });
  const step = 1 / Math.max(1, total - 1);
  const centre = index * step;
  const drift = useTransform(progress, [centre - step, centre + step], [90, -90]);
  const polaroids = CHAPTER_POLAROIDS[chapter.id] ?? [];

  return (
    <article
      ref={ref}
      id={chapter.id}
      aria-label={`${chapterPrefix} ${chapter.number}: ${chapter.title}`}
      className="relative flex w-[86vw] shrink-0 snap-center flex-col gap-8 overflow-hidden border border-ink/12 bg-cream-warm/40 p-6 sm:w-[70vw] md:p-10 lg:h-[min(68svh,640px)] lg:w-[min(64vw,900px)] lg:flex-row lg:gap-10"
    >
      {/* Page number as a watermark, the way passport pages carry theirs. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 right-4 select-none font-display leading-none text-ink/[0.045]"
        style={{ fontSize: "clamp(150px, 15vw, 250px)" }}
      >
        {chapter.number}
      </span>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col lg:max-w-[34rem]">
        <div className="flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.26em]">
          <span className="text-tattoo-red">
            {chapterPrefix} {chapter.number}
          </span>
          <span className="text-right text-ink/45">{chapter.period}</span>
        </div>
        <h3
          className="mt-5 font-display italic leading-[1.02] text-ink"
          style={{ fontSize: "clamp(26px, 2.7vw, 42px)" }}
        >
          {chapter.title}
        </h3>
        <div
          className="mt-5 space-y-4 font-serif text-ink/85"
          style={{ fontSize: "clamp(16px, 1.15vw, 18px)", lineHeight: 1.6 }}
        >
          {chapter.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {chapter.marginalia && (
          <p className="mt-6 font-hand text-tattoo-red" style={{ fontSize: 19, transform: "rotate(-1.5deg)" }}>
            {chapter.marginalia}
          </p>
        )}
        <span className="mt-auto pt-8 font-mono text-[10px] tracking-[0.3em] text-ink/35">
          {chapter.number} / {String(total).padStart(2, "0")}
        </span>
        {/* Stamped across the corner of the text, overlapping a little,
            the way a border guard never quite aims. */}
        <div className="absolute -bottom-3 right-0 translate-x-[30%]">
          <Stamp
            chapter={chapter}
            chapterPrefix={chapterPrefix}
            index={index}
            inked={inked}
            reduce={reduce}
          />
        </div>
      </div>

      {polaroids.length > 0 && (
        <motion.div
          style={pinned && !reduce ? { x: drift } : undefined}
          className={`relative z-10 flex shrink-0 flex-wrap content-center items-center justify-center gap-x-1 gap-y-4 lg:ml-auto lg:w-[40%] ${
            polaroids.length > 2 ? "lg:-space-x-6" : ""
          }`}
        >
          {polaroids.map((p, i) => (
            <Polaroid
              key={p.src}
              src={p.src}
              alt={p.alt}
              caption={p.caption}
              size={polaroids.length > 1 ? "sm" : (p.size ?? "md")}
              rotation={p.rotation ?? (i % 2 === 0 ? -4 : 5)}
            />
          ))}
        </motion.div>
      )}
    </article>
  );
}

/**
 * The timeline as a passport. On a roomy desktop the section pins and the
 * chapters travel sideways as you scroll down, page after page, each one
 * stamped as it arrives; a year rail on top fills in red and doubles as
 * navigation. On phones, tablets, short screens and with reduced motion it
 * is a plain swipeable row (scroll-snap), no scroll hijack at all.
 */
export function TimelineRail({
  chapters,
  eyebrow,
  title,
  chapterPrefix,
  swipeHint,
}: {
  chapters: TimelineChapter[];
  eyebrow: string;
  title: string;
  chapterPrefix: string;
  swipeHint: string;
}) {
  const reduce = useReducedMotion() ?? false;
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);
  const total = chapters.length;

  // Pin only where there is room for it, and never under reduced motion.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 700px)");
    const sync = () => setPinned(mq.matches && !reduce);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [reduce]);

  // How far the track has to travel sideways = how far the page scrolls.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !pinned) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  // Swipe mode reports its own progress from the track's scrollLeft.
  const swipeProgress = useMotionValue(0);
  const progress = pinned ? scrollYProgress : swipeProgress;

  useMotionValueEvent(progress, "change", (v) => {
    setActive(Math.min(total - 1, Math.max(0, Math.round(v * (total - 1)))));
  });

  const goTo = (i: number) => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;
    if (pinned) {
      const top = stage.getBoundingClientRect().top + window.scrollY;
      scrollPageTo(top + (i / (total - 1)) * (stage.offsetHeight - window.innerHeight));
    } else {
      const page = track.children[i] as HTMLElement | undefined;
      if (page) {
        track.scrollTo({
          left: page.offsetLeft - (track.clientWidth - page.offsetWidth) / 2,
          behavior: reduce ? "auto" : "smooth",
        });
      }
    }
  };

  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="relative w-full bg-cream">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">{eyebrow}</p>
          <h2
            id="timeline-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {title}
          </h2>
        </header>
      </div>

      <div
        ref={stageRef}
        className="relative mt-12 pb-24 md:mt-16 md:pb-36 lg:pb-0"
        style={pinned ? { height: `calc(${Math.round(distance * SCROLL_PER_PX)}px + 100svh)` } : undefined}
      >
        <div
          className={
            pinned
              ? "sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden pt-20"
              : "relative"
          }
        >
          {/* Year rail: progress + navigation. */}
          <div className="mx-auto w-full max-w-6xl px-5 md:px-12">
            <div className="relative">
              <div aria-hidden className="absolute left-0 right-0 top-[5px] h-px bg-ink/15" />
              <motion.div
                aria-hidden
                className="absolute left-0 right-0 top-[5px] h-px origin-left bg-tattoo-red"
                style={{ scaleX: progress }}
              />
              <ol className="relative flex justify-between">
                {chapters.map((c, i) => {
                  const on = i <= active;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`${chapterPrefix} ${c.number}: ${c.title}`}
                        aria-current={i === active ? "step" : undefined}
                        className="group flex flex-col items-center gap-2 focus-visible:outline-none"
                      >
                        <span
                          className={`block h-[11px] w-[11px] rounded-full border transition-colors duration-300 ${
                            on ? "border-tattoo-red bg-tattoo-red" : "border-ink/35 bg-cream"
                          } ${i === active ? "scale-125" : ""} group-focus-visible:ring-2 group-focus-visible:ring-tattoo-red group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-cream`}
                        />
                        <span
                          className={`hidden font-mono text-[10px] uppercase tracking-[0.2em] transition-colors sm:block ${
                            i === active ? "text-tattoo-red" : "text-ink/40 group-hover:text-ink/70"
                          }`}
                        >
                          {c.yearShort}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
            {!pinned && (
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.26em] text-ink/45">
                {swipeHint} <span aria-hidden>&rarr;</span>
              </p>
            )}
          </div>

          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            onScroll={
              pinned
                ? undefined
                : (e) => {
                    const t = e.currentTarget;
                    const max = t.scrollWidth - t.clientWidth;
                    swipeProgress.set(max > 0 ? t.scrollLeft / max : 0);
                  }
            }
            className={`mt-8 flex gap-5 md:mt-10 md:gap-8 ${
              pinned
                ? "w-max items-stretch pl-[max(1.25rem,calc((100vw-72rem)/2+3rem))] pr-[max(1.25rem,calc((100vw-72rem)/2+3rem))] will-change-transform"
                : "items-start snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-5 pb-6 [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
            }`}
          >
            {chapters.map((chapter, i) => (
              <ChapterPage
                key={chapter.id}
                chapter={chapter}
                index={i}
                total={total}
                chapterPrefix={chapterPrefix}
                progress={progress}
                pinned={pinned}
                reduce={reduce}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
