"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useScrollMap } from "@/components/ui/useScrollMap";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { useT } from "@/i18n/client";

const REVEAL_EASE = [0.65, 0, 0.35, 1] as const;
const LETTER_STAGGER = 0.08;
const REVEAL_DURATION = 0.6;
const TOORN = "TOORN";

/**
 * A red marker swipe that draws itself under the wordmark once the
 * letters have landed: two overlapping passes (one fat, one thin and
 * lighter) so it reads as a real hand dragging a marker, not a clean
 * vector underline. Reduced motion renders it pre-drawn.
 */
function MarkerStroke({ delay, reduce }: { delay: number; reduce: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 420 26"
      fill="none"
      aria-hidden
      className="mt-4 h-auto rotate-[-1.6deg] md:mt-5"
      style={{ width: "clamp(190px, 26vw, 380px)" }}
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.2 }}
    >
      <motion.path
        d="M6 17 C 70 9, 150 7, 218 11 C 282 15, 348 13, 414 8"
        stroke="var(--color-tattoo-red)"
        strokeWidth="7"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M14 21 C 90 15, 180 13, 250 15 C 310 17, 360 15, 406 12"
        stroke="var(--color-tattoo-red)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeOpacity="0.6"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: delay + 0.16,
          duration: reduce ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.svg>
  );
}

/**
 * Scroll invitation pinned to the bottom edge of the hero: mono label
 * plus a small arrow that dips like a nod. Fades out over the first
 * quarter of the hero's exit so it never lingers once the visitor has
 * taken the hint.
 */
function ScrollCue({
  delay,
  label,
  progress,
  reduce,
}: {
  delay: number;
  label: string;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const opacity = useScrollMap(progress, [0, 0.25], reduce ? [1, 1] : [1, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
    >
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: reduce ? 0.001 : 0.7, ease: "easeOut" }}
        className="flex flex-col items-center gap-2.5"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-ink/45">
          {label}
        </span>
        <motion.svg
          width="12"
          height="26"
          viewBox="0 0 12 26"
          fill="none"
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M6 1 V21 M1.5 17 L6 22.5 L10.5 17"
            stroke="var(--color-tattoo-red)"
            strokeOpacity="0.75"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

/**
 * Nick's scrawl under the tagline. In the flow (not absolutely placed) so
 * it can never land on top of the established line, nudged right and
 * tilted so it still reads as written on afterwards.
 */
function HandwrittenNote({ delay, text }: { delay: number; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -2, y: 6 }}
      animate={{ opacity: 1, rotate: -4, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="pointer-events-none mt-6 flex md:mt-5 md:translate-x-[12vw]"
    >
      <span
        className="font-hand text-tattoo-red md:whitespace-nowrap"
        style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: 1.1 }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export function Hero() {
  const t = useT();
  const reduceMotion = useReducedMotion();
  const stagger = reduceMotion ? 0 : LETTER_STAGGER;
  const dur = reduceMotion ? 0.001 : REVEAL_DURATION;
  const headlineEnd = dur + (TOORN.length - 1) * stagger;

  // Scroll-linked "settle": as the hero leaves, its content drifts up a touch
  // and fades, so it recedes like a title card instead of hard-cutting into
  // the first chapter. Collapses to no movement under reduced-motion.
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -64],
  );
  const contentOpacity = useScrollMap(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 0.35],
  );
  // ...and tips back like a page being turned, hinged at its foot.
  const pageTilt = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 14]);
  const pageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 0.93]);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex flex-col"
      style={{ minHeight: "max(100svh, 640px)" }}
    >
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          rotateX: pageTilt,
          scale: pageScale,
          transformPerspective: 1400,
          transformOrigin: "50% 100%",
        }}
        className="relative flex flex-1 flex-col items-center justify-center px-5 pb-24 pt-6 text-center will-change-transform sm:px-12"
      >
        <h1 id="hero-heading" className="font-display italic text-ink">
          <span
            className="block leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(72px, 14vw, 220px)" }}
          >
            <span className="relative inline-flex align-baseline">
              {/* Second ink pass in red, landing a hair off register like
                  a two-colour letterpress run. */}
              <motion.span
                aria-hidden
                initial={reduceMotion ? false : { opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 0.2, x: 4, y: 3 }}
                transition={{ delay: headlineEnd + 0.05, duration: reduceMotion ? 0.001 : 0.5, ease: REVEAL_EASE }}
                className="pointer-events-none absolute inset-0 inline-flex select-none text-tattoo-red mix-blend-multiply"
              >
                {TOORN}
              </motion.span>
              {TOORN.split("").map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  // Each letter is pressed into the paper: it comes down
                  // large and soft, lands with a little give, then sits.
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 1.4, y: -18, filter: "blur(8px)" }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: i * stagger,
                    opacity: { delay: i * stagger, duration: 0.18 },
                    filter: { delay: i * stagger, duration: 0.3 },
                    type: "spring",
                    stiffness: 480,
                    damping: 20,
                    mass: 0.9,
                  }}
                  className="relative inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: headlineEnd,
              duration: dur,
              ease: REVEAL_EASE,
            }}
            className="block leading-[0.9] text-ink/85"
            style={{
              fontSize: "clamp(40px, 8vw, 120px)",
              marginLeft: "1.4em",
              marginTop: "-0.05em",
            }}
          >
            at table
          </motion.span>
          {/* Visually-hidden, localized descriptor so the page h1 carries the
              core keyword ("private chef · Costa del Sol") for crawlers and
              screen readers, while the visible mark stays the clean wordmark. */}
          <span className="sr-only"> · {t.hero.establishedLine}</span>
        </h1>

        <MarkerStroke
          delay={headlineEnd + 0.15}
          reduce={Boolean(reduceMotion)}
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: headlineEnd + 0.35,
            duration: reduceMotion ? 0.001 : 0.55,
            ease: "easeOut",
          }}
          className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/65 sm:mt-10 sm:text-xs sm:tracking-[0.32em]"
        >
          {t.hero.establishedLine}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: headlineEnd + 0.55,
            duration: reduceMotion ? 0.001 : 0.6,
            ease: "easeOut",
          }}
          className="mt-5 max-w-xl px-2 font-serif italic text-ink/80 sm:max-w-2xl"
          style={{ fontSize: "clamp(18px, 2.2vw, 22px)", lineHeight: 1.45 }}
        >
          {t.hero.tagline}
        </motion.p>

        <HandwrittenNote delay={headlineEnd + 0.8} text={t.hero.handwrittenNote} />

        {/* Above-the-fold polaroid — desktop only. Tablet portrait would
            have it collide with the centred wordmark, and every other
            section's floating polaroid is already `lg:block`, so this
            keeps the rhythm consistent: phones + tablets see the calm
            text-only hero, lg+ gets the scatter. */}
        <Polaroid
          src="/images/polaroids/kokenmetnick.jpeg"
          alt={{
            en: "Nick cooking for guests",
            es: "Nick cocinando para los invitados",
            nl: "Nick aan het koken voor gasten",
          }}
          caption={{
            en: "At table",
            es: "A la mesa",
            nl: "Aan tafel",
          }}
          size="md"
          priority
          rotation={6}
          className="absolute right-[max(3vw,40px)] top-[11vh] z-10 hidden lg:block"
        />
      </motion.div>

      <ScrollCue
        delay={headlineEnd + 1.15}
        label={t.hero.scrollCue}
        progress={scrollYProgress}
        reduce={Boolean(reduceMotion)}
      />
    </section>
  );
}
