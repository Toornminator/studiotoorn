"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/client";

const SESSION_KEY = "toorn-preloader-shown";
// Held just long enough to land the brand moment, then out of the way: the
// curtain is on the LCP critical path for first-time visitors, so every
// 100 ms here is first-paint time. Internal reveal delays below are timed
// to all settle before this fires.
const TOTAL_MS = 1400;
const REDUCED_MS = 800;

const COLORS = {
  bg: "#000000",
  ivory: "#F4ECD8",
  ivoryMid: "rgba(244,236,216,0.55)",
  ivoryDim: "rgba(244,236,216,0.32)",
  gold: "#C9A86A",
  goldWarm: "rgba(255,180,80,1)",
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Preloader() {
  const t = useT();
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
          aria-label={t.preloader.ariaLabel}
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, filter: "blur(8px)", scale: 1.03 }
          }
          transition={{ duration: reduce ? 0.5 : 0.95, ease: EASE }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: COLORS.bg }}
        >
          {/* Soft champagne ambient — sits behind everything */}
          {!reduce && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "min(80vw, 820px)",
                height: "min(80vw, 820px)",
                background:
                  "radial-gradient(circle at center, rgba(201,168,106,0.20) 0%, rgba(201,168,106,0.05) 35%, transparent 65%)",
                filter: "blur(40px)",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: [0.85, 1.08, 1] }}
              transition={{ duration: 2.6, ease: EASE }}
            />
          )}

          {/* Subtle vignette for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.9) 100%)",
            }}
          />

          {/* Fine grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'2\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")',
            }}
          />

          {/* Stage */}
          <div className="relative flex flex-col items-center px-6 text-center">
            <Logo reduce={reduce} />

            {/* Champagne hairline */}
            <motion.div
              aria-hidden
              className="mt-4 h-px md:mt-6"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: reduce ? 160 : ["0px", "260px", "220px"],
                opacity: 1,
              }}
              transition={{
                duration: reduce ? 0.4 : 0.7,
                delay: reduce ? 0.15 : 0.5,
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
                duration: 0.6,
                delay: reduce ? 0.25 : 0.7,
                ease: EASE,
              }}
            >
              {t.preloader.loadingMessage}
              <Dots reduce={reduce} startDelay={reduce ? 0.5 : 0.95} />
            </motion.p>
          </div>

          {/* Bottom marker */}
          <motion.p
            className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono uppercase"
            style={{
              color: COLORS.ivoryDim,
              fontSize: 10,
              letterSpacing: "0.34em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: reduce ? 0.35 : 0.78 }}
          >
            {t.preloader.locationCaption}
          </motion.p>

          {/* Gold corner brackets — luxury menu plate detail */}
          <CornerMark className="left-6 top-6" reduce={reduce} />
          <CornerMark className="right-6 top-6 rotate-90" reduce={reduce} />
          <CornerMark className="bottom-6 left-6 -rotate-90" reduce={reduce} />
          <CornerMark className="bottom-6 right-6 rotate-180" reduce={reduce} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Logo({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="relative"
      // Smaller than the old square mark since the new logo is portrait
      // (chef hat at the top, blade dropping below). Clamps keep it
      // commanding on desktop without crowding on mobile.
      style={{ width: "clamp(220px, 32vw, 380px)" }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: reduce ? 0.45 : 0.85,
        delay: reduce ? 0 : 0.1,
        ease: EASE,
      }}
    >
      {/* Warm halo behind the logo — centred on the skull so the chef
          hat and knife read against a soft ambient bloom rather than
          flat black. Pulses gently then settles. */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,200,120,0.45) 0%, rgba(201,168,106,0.18) 28%, transparent 58%)",
            filter: "blur(34px)",
            transform: "scale(1.35)",
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 1, 0.85, 1, 0.9] }}
          transition={{
            duration: 1.0,
            delay: 0.3,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.65, 0.85, 1],
          }}
        />
      )}

      <Image
        src="/images/chef_skull_knife_transparent.png"
        alt="TOORN at table"
        width={785}
        height={800}
        priority
        className="relative block h-auto w-full"
        style={{
          zIndex: 1,
          // Subtle drop shadow lifts the mark off the black backdrop
          // without making the linework feel printed-on.
          filter: "drop-shadow(0 14px 30px rgba(0,0,0,0.55))",
        }}
      />

      {/* Blood-drip glow — a small red shimmer pulsing where the knife
          drips. Keeps the eye where the logo wants you to look and
          replaces the old flame flicker now that there is no flame. */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            top: "92%",
            width: "9%",
            height: "9%",
            background:
              "radial-gradient(circle, rgba(220,40,40,0.85) 0%, rgba(160,20,20,0.35) 40%, transparent 70%)",
            filter: "blur(6px)",
            mixBlendMode: "screen",
            zIndex: 2,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0.85, 0.6, 0.95, 0.7, 0.9],
            scale: [0.8, 1.05, 0.9, 1.1, 0.95, 1.08, 1],
          }}
          transition={{
            duration: 2.6,
            delay: 0.7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      )}
    </motion.div>
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
      transition={{ duration: 0.6, delay: reduce ? 0.2 : 0.45, ease: EASE }}
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
