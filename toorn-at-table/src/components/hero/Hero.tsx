"use client";

import { motion } from "framer-motion";

const REVEAL_EASE = [0.65, 0, 0.35, 1] as const;
const LETTER_STAGGER = 0.08;
const REVEAL_DURATION = 0.6;

const TOORN = "TOORN";
const headlineEnd =
  REVEAL_DURATION + (TOORN.length - 1) * LETTER_STAGGER;

function NavBar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70 sm:px-10">
      <span className="font-medium text-ink">TOORN at table</span>
      <div className="flex items-center gap-4 sm:gap-6">
        <a href="#kookboek" className="transition-colors hover:text-tattoo-red">
          Het Kookboek
        </a>
        <span aria-hidden className="text-ink/30">
          ·
        </span>
        <a href="#events" className="transition-colors hover:text-tattoo-red">
          Events
        </a>
        <span aria-hidden className="text-ink/30">
          ·
        </span>
        <a href="#contact" className="transition-colors hover:text-tattoo-red">
          Contact
        </a>
      </div>
    </nav>
  );
}

function HandwrittenNote() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -4 }}
      animate={{ opacity: 1, rotate: -8 }}
      transition={{ delay: headlineEnd + 0.8, duration: 0.6 }}
      className="pointer-events-none absolute right-[8vw] top-[58%] flex items-center gap-3 origin-center"
      style={{ transformOrigin: "center" }}
    >
      <span
        className="font-hand text-tattoo-red"
        style={{ fontSize: "24px", lineHeight: 1.1 }}
      >
        psst — pak me op en gooi me rond
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
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col"
      style={{ minHeight: "max(100vh, 700px)" }}
    >
      <NavBar />

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-8 text-center sm:px-12">
        <h1 className="font-display italic text-ink">
          <span
            className="block leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(80px, 14vw, 220px)" }}
          >
            <span className="inline-flex overflow-hidden align-baseline">
              {TOORN.split("").map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * LETTER_STAGGER,
                    duration: REVEAL_DURATION,
                    ease: REVEAL_EASE,
                  }}
                  className="inline-block"
                  style={{
                    paddingRight: letter === "O" ? "0.01em" : undefined,
                  }}
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
              duration: REVEAL_DURATION,
              ease: REVEAL_EASE,
            }}
            className="block leading-[0.9] text-ink/85"
            style={{
              fontSize: "clamp(48px, 8vw, 120px)",
              marginLeft: "1.6em",
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
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mt-12 font-mono text-[11px] uppercase tracking-[0.32em] text-ink/65 sm:text-xs"
        >
          Private chef · Costa del Sol · Est. 2024
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: headlineEnd + 0.55,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-5 max-w-2xl font-serif italic text-ink/80"
          style={{ fontSize: "22px", lineHeight: 1.4 }}
        >
          Michelin-getrainde keuken, Spaanse zon, en een tafel die voelt als
          thuis.
        </motion.p>

        <HandwrittenNote />
      </div>
    </section>
  );
}
