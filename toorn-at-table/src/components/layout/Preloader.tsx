"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "toorn-preloader-shown";
const TOTAL_MS = 3200;
const REDUCED_MS = 1400;

const COLORS = {
  bg: "#0B0A08",
  ivory: "#F4ECD8",
  ivoryMid: "rgba(244,236,216,0.55)",
  ivoryDim: "rgba(244,236,216,0.32)",
  gold: "#C9A86A",
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Preloader() {
  const [show, setShow] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Don't replay on internal navigation in the same session.
    if (sessionStorage.getItem(SESSION_KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false);
      return;
    }

    document.documentElement.classList.add("preloader-active");
    document.body.style.overflow = "hidden";

    const duration = reduceMotion ? REDUCED_MS : TOTAL_MS;
    const t = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setShow(false);
    }, duration);

    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  useEffect(() => {
    if (show) return;
    document.documentElement.classList.remove("preloader-active");
    document.body.style.overflow = "";
  }, [show]);

  const reduce = Boolean(reduceMotion);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-live="polite"
          aria-label="TOORN at table — Een tafel wordt klaargemaakt"
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, filter: "blur(8px)", scale: 1.03 }
          }
          transition={{ duration: reduce ? 0.5 : 0.9, ease: EASE }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: COLORS.bg }}
        >
          {/* Slow champagne-gold ambient glow */}
          {!reduce && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "min(72vw, 720px)",
                height: "min(72vw, 720px)",
                background:
                  "radial-gradient(circle at center, rgba(201,168,106,0.22) 0%, rgba(201,168,106,0.06) 35%, transparent 65%)",
                filter: "blur(28px)",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: [0.85, 1.05, 1] }}
              transition={{ duration: 2.4, ease: EASE }}
            />
          )}

          {/* Vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.85) 100%)",
            }}
          />

          {/* Fine paper grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")',
            }}
          />

          {/* Stage */}
          <div className="relative flex flex-col items-center px-6 text-center">
            <Monogram reduce={reduce} />

            <div className="mt-9 flex flex-col items-center md:mt-12">
              <h1
                className="font-display italic leading-[0.95]"
                style={{
                  color: COLORS.ivory,
                  fontSize: "clamp(38px, 7vw, 84px)",
                  letterSpacing: "0.015em",
                }}
              >
                <LetterReveal
                  text="TOORN"
                  startDelay={reduce ? 0 : 0.85}
                  reduce={reduce}
                />
              </h1>
              <p
                className="mt-3 font-display italic"
                style={{
                  color: COLORS.ivoryMid,
                  fontSize: "clamp(13px, 1.7vw, 20px)",
                  letterSpacing: "0.34em",
                }}
              >
                <LetterReveal
                  text="at table"
                  startDelay={reduce ? 0 : 1.25}
                  reduce={reduce}
                />
              </p>
            </div>

            {/* Champagne hairline */}
            <motion.div
              aria-hidden
              className="mt-8 h-px md:mt-10"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: reduce ? 160 : ["0px", "240px", "200px"],
                opacity: 1,
              }}
              transition={{
                duration: reduce ? 0.5 : 1.1,
                delay: reduce ? 0.2 : 1.7,
                ease: EASE,
              }}
            />

            {/* Loading message */}
            <motion.p
              className="mt-7 inline-flex items-center font-mono uppercase"
              style={{
                color: "rgba(244,236,216,0.55)",
                fontSize: 10,
                letterSpacing: "0.34em",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: reduce ? 0.3 : 2.1,
                ease: EASE,
              }}
            >
              Een tafel wordt klaargemaakt
              <Dots reduce={reduce} startDelay={reduce ? 0.6 : 2.55} />
            </motion.p>
          </div>

          {/* Bottom corner marks */}
          <motion.p
            className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono uppercase"
            style={{
              color: COLORS.ivoryDim,
              fontSize: 10,
              letterSpacing: "0.34em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: reduce ? 0.4 : 2.3 }}
          >
            Costa del Sol · Privé chef
          </motion.p>

          {/* Frame corners — luxury menu plate detail */}
          <CornerMark className="left-6 top-6" reduce={reduce} />
          <CornerMark className="right-6 top-6 rotate-90" reduce={reduce} />
          <CornerMark className="bottom-6 left-6 -rotate-90" reduce={reduce} />
          <CornerMark className="bottom-6 right-6 rotate-180" reduce={reduce} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Monogram({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduce ? 0.4 : 0.9, ease: EASE }}
    >
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden
        className="block"
      >
        {/* Outer gold ring — drawn around the monogram */}
        <motion.circle
          cx="48"
          cy="48"
          r="46"
          stroke={COLORS.gold}
          strokeWidth="0.7"
          strokeOpacity="0.7"
          fill="none"
          pathLength={1}
          strokeDasharray="1 1"
          initial={{ strokeDashoffset: 1, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.75 }}
          transition={{
            duration: reduce ? 0.4 : 1.8,
            delay: reduce ? 0.1 : 0.4,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
        {/* Inner gold ring */}
        <motion.circle
          cx="48"
          cy="48"
          r="38"
          stroke={COLORS.gold}
          strokeWidth="0.5"
          strokeOpacity="0.4"
          fill="none"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{
            duration: reduce ? 0.4 : 1.0,
            delay: reduce ? 0.15 : 0.8,
            ease: EASE,
          }}
        />
        {/* Triangle */}
        <motion.path
          d="M48 22 L72 70 H24 Z"
          stroke={COLORS.ivory}
          strokeWidth="1.1"
          strokeLinejoin="round"
          fill="none"
          pathLength={1}
          strokeDasharray="1 1"
          initial={{ strokeDashoffset: 1, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{
            duration: reduce ? 0.4 : 1.2,
            delay: reduce ? 0 : 0.25,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
        {/* ST */}
        <motion.text
          x="48"
          y="58"
          textAnchor="middle"
          fontFamily="serif"
          fontStyle="italic"
          fontSize="18"
          fill={COLORS.ivory}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: reduce ? 0.25 : 1.1,
            ease: EASE,
          }}
        >
          ST
        </motion.text>
      </svg>
    </motion.div>
  );
}

function LetterReveal({
  text,
  startDelay,
  reduce,
}: {
  text: string;
  startDelay: number;
  reduce: boolean;
}) {
  if (reduce) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: startDelay, ease: EASE }}
      >
        {text}
      </motion.span>
    );
  }

  const letters = Array.from(text);
  return (
    <span
      className="inline-flex overflow-hidden align-baseline"
      style={{ paddingBottom: "0.18em", marginBottom: "-0.18em" }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: "pre" }}
          initial={{ y: "115%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 1.05,
            delay: startDelay + i * 0.06,
            ease: EASE,
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

function Dots({
  reduce,
  startDelay,
}: {
  reduce: boolean;
  startDelay: number;
}) {
  if (reduce) return null;
  return (
    <span className="ml-2 inline-flex gap-[3px]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block rounded-full"
          style={{
            width: 3,
            height: 3,
            background: COLORS.gold,
          }}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.4,
            delay: startDelay + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}

function CornerMark({
  className,
  reduce,
}: {
  className?: string;
  reduce: boolean;
}) {
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      className={`absolute ${className ?? ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: reduce ? 0.2 : 1.9, ease: EASE }}
    >
      <path
        d="M1 1 H10 M1 1 V10"
        stroke={COLORS.gold}
        strokeOpacity="0.55"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
