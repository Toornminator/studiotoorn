"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { Sticker } from "@/components/sticker/Sticker";
import { useT } from "@/i18n/client";

const REVEAL_EASE = [0.65, 0, 0.35, 1] as const;
const LETTER_STAGGER = 0.08;
const REVEAL_DURATION = 0.6;
const TOORN = "TOORN";

function HandwrittenNote({ delay, text }: { delay: number; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -4 }}
      animate={{ opacity: 1, rotate: -8 }}
      transition={{ delay, duration: 0.6 }}
      className="pointer-events-none absolute left-1/2 top-[78%] hidden -translate-x-1/2 items-center gap-3 md:flex md:left-auto md:right-[6vw] md:top-[58%] md:translate-x-0"
    >
      <span
        className="font-hand text-tattoo-red whitespace-nowrap"
        style={{ fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.1 }}
      >
        {text}
      </span>
      <svg
        width="64"
        height="48"
        viewBox="0 0 64 48"
        fill="none"
        aria-hidden
        className="-rotate-[20deg]"
      >
        <path
          d="M4 14 Q26 4 50 24 Q56 30 58 38"
          stroke="#C8202A"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 32 L58 38 L52 44"
          stroke="#C8202A"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const t = useT();
  const reduceMotion = useReducedMotion();
  const stagger = reduceMotion ? 0 : LETTER_STAGGER;
  const dur = reduceMotion ? 0.001 : REVEAL_DURATION;
  const headlineEnd = dur + (TOORN.length - 1) * stagger;

  return (
    <section
      id="hero"
      className="relative flex flex-col"
      style={{ minHeight: "max(100svh, 640px)" }}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center px-5 pb-24 pt-6 text-center sm:px-12">
        <h1 className="font-display italic text-ink">
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

        {/* Above-the-fold polaroid — desktop-only so mobile hero stays calm */}
        <Polaroid
          src="/images/polaroids/kokenmetnick.jpeg"
          alt="Nick aan het koken voor gasten"
          caption="Aan tafel"
          size="md"
          priority
          rotation={6}
          className="absolute right-[5vw] top-[14vh] z-10 hidden md:block lg:right-[8vw]"
        />

        <Sticker
          src="/images/stickers/gamba.png"
          alt="Tattoo-flash gamba met citroen en knoflook"
          size="md"
          rotation={-8}
          className="absolute bottom-[8vh] left-[5vw] z-10 hidden md:block"
        />
      </div>
    </section>
  );
}
