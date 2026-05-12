"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "toorn-preloader-shown";
const DURATION_MS = 1900;

export function Preloader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip on subsequent navigations in the same session.
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false);
      return;
    }

    // Tell the rest of the app the loader is active.
    document.documentElement.classList.add("preloader-active");
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(Math.floor(p));
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        setTimeout(() => setShow(false), 380);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (show) return;
    document.documentElement.classList.remove("preloader-active");
    document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.95, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-cream"
          aria-hidden
        >
          {/* Paper grain wash (cheap, low overhead) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top left, rgba(26,26,26,0.12), transparent 50%)",
            }}
          />

          {/* Mark + brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              aria-hidden
              className="mb-7"
            >
              <path
                d="M28 6 L50 46 H6 Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
              />
              <text
                x="28"
                y="36"
                textAnchor="middle"
                fontFamily="serif"
                fontStyle="italic"
                fontSize="22"
                fill="#1A1A1A"
              >
                ST
              </text>
            </svg>

            <h1
              className="font-display italic leading-[0.95] text-ink"
              style={{ fontSize: "clamp(40px, 6.5vw, 84px)" }}
            >
              <SplitReveal text="TOORN" delay={0.1} />
              <span className="block text-ink/60" style={{ fontSize: "0.4em", letterSpacing: "0.04em" }}>
                <SplitReveal text="at table" delay={0.35} />
              </span>
            </h1>
          </motion.div>

          {/* Progress */}
          <div className="mt-14 w-72 max-w-[60vw]">
            <div className="relative h-px w-full overflow-hidden bg-ink/12">
              <motion.div
                className="absolute inset-y-0 left-0 bg-ink"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
              <span>Inladen</span>
              <span className="tabular-nums">{progress}%</span>
            </div>
          </div>

          {/* Footer location */}
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/35">
            Costa del Sol · Spanje
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SplitReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const letters = text.split("");
  return (
    <span className="inline-flex overflow-hidden align-baseline" style={{ paddingBottom: "0.12em" }}>
      {letters.map((l, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 0.85,
            delay: delay + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: "pre" }}
        >
          {l}
        </motion.span>
      ))}
    </span>
  );
}
