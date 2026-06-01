"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/client";

/**
 * Contact nudge: a hand-drawn speech balloon pinned to the bottom-right
 * corner. Not a modal, no backdrop, never blocks the page. It pops in once
 * the visitor has scrolled a little (so it doesn't fight the hero, the
 * preloader, or the cookie banner), stays put, and carries a short line in
 * Nick's handwriting plus a CTA into the contact form.
 *
 * Dismissal (the X or tapping through to contact) is remembered in
 * localStorage for two weeks, so it never nags a returning visitor. Same
 * persistence pattern as the cookie banner.
 */

const STORAGE_KEY = "toorn-nudge-v1";
const TTL_MS = 1000 * 60 * 60 * 24 * 14; // 14 days
const SCROLL_TRIGGER = 700;
const FALLBACK_MS = 14000;

function recentlyDismissed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const at = Number(raw);
    return Number.isFinite(at) && Date.now() - at < TTL_MS;
  } catch {
    return false;
  }
}

function persistDismiss() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* private mode etc. — the nudge just re-appears next visit */
  }
}

export function ContactNudge() {
  const t = useT();
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (recentlyDismissed()) return;

    let done = false;
    let timer: number | undefined;
    const reveal = () => {
      if (done) return;
      done = true;
      setShow(true);
      window.removeEventListener("scroll", onScroll);
      if (timer) window.clearTimeout(timer);
    };
    const onScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER) reveal();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Fallback so it still appears for visitors who don't scroll (e.g. on a
    // short page), long enough that the cookie banner is handled first.
    timer = window.setTimeout(reveal, FALLBACK_MS);
    if (window.scrollY > SCROLL_TRIGGER) reveal();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    persistDismiss();
    setShow(false);
  };

  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed bottom-4 right-4 z-[300] sm:bottom-6 sm:right-6"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-auto relative max-w-[270px] rotate-[-1.5deg] rounded-2xl border-2 border-ink bg-cream px-5 pb-4 pt-4 shadow-[0_14px_30px_-12px_rgba(20,16,12,0.5)]">
            <button
              type="button"
              onClick={dismiss}
              aria-label={t.nudge.dismiss}
              className="absolute -right-2.5 -top-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-ink bg-cream text-ink transition-colors hover:border-tattoo-red hover:bg-tattoo-red hover:text-cream"
            >
              <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
                <path
                  d="M1 1 L8 8 M8 1 L1 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <p
              className="font-hand text-tattoo-red"
              style={{ fontSize: 23, lineHeight: 1.12 }}
            >
              {t.nudge.message}
            </p>

            <Link
              href={contactHref}
              onClick={dismiss}
              data-cursor={t.nudge.cta}
              className="group mt-3 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cream transition-colors hover:bg-tattoo-red"
            >
              {t.nudge.cta}
              <svg
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M1 4.5 H10 M7.5 1 L10.5 4.5 L7.5 8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Speech-bubble tail, pointing down toward the corner. */}
            <span
              aria-hidden
              className="absolute -bottom-[9px] right-9 h-4 w-4 rotate-45 border-b-2 border-r-2 border-ink bg-cream"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
