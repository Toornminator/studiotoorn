"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { useT } from "@/i18n/client";

const REVEAL_EASE = [0.65, 0, 0.35, 1] as const;
const LETTER_STAGGER = 0.08;
const REVEAL_DURATION = 0.6;
const TOORN = "TOORN";

function HandwrittenNote({ delay, text }: { delay: number; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -4 }}
      animate={{ opacity: 1, rotate: -6 }}
      transition={{ delay, duration: 0.6 }}
      className="pointer-events-none absolute left-1/2 top-[78%] hidden -translate-x-1/2 md:flex md:left-auto md:right-[max(6vw,80px)] md:top-[58%] md:translate-x-0"
    >
      <span
        className="font-hand text-tattoo-red whitespace-nowrap"
        style={{ fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.1 }}
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
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 0.35],
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex flex-col"
      style={{ minHeight: "max(100svh, 640px)" }}
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex flex-1 flex-col items-center justify-center px-5 pb-24 pt-6 text-center will-change-transform sm:px-12"
      >
        <h1 id="hero-heading" className="font-display italic text-ink">
          <span
            className="block leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(72px, 14vw, 220px)" }}
          >
            <span className="inline-flex overflow-hidden align-baseline">
              {TOORN.split("").map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * stagger,
                    duration: dur,
                    ease: REVEAL_EASE,
                  }}
                  className="inline-block"
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
          <span className="sr-only"> — {t.hero.establishedLine}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: headlineEnd + 0.35,
            duration: reduceMotion ? 0.001 : 0.55,
            ease: "easeOut",
          }}
          className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/65 sm:mt-12 sm:text-xs sm:tracking-[0.32em]"
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
    </section>
  );
}
