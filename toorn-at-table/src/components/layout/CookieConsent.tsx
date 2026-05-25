"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/client";

/**
 * GDPR cookie banner with Google Consent Mode v2 wiring.
 *
 * The gtag script always loads (in layout.tsx) but is held in
 * `consent: default = denied` state until the visitor makes a choice.
 * That means GA4 stays inert — no analytics_storage, no ad_storage,
 * no ad_user_data, no ad_personalization — until "Accept" is clicked.
 * Reject keeps it inert forever (or until the visitor wipes
 * localStorage). Either way the choice is honoured for `STORAGE_TTL_MS`
 * before we re-ask.
 *
 * Spanish AEPD + EU EDPB guidance both require an explicit reject button
 * that's no more buried than the accept button — handled here with two
 * equal-weight buttons, no dark-pattern "Accept all" pre-tick.
 */

const STORAGE_KEY = "toorn-cookie-consent-v1";
const STORAGE_TTL_MS = 1000 * 60 * 60 * 24 * 365; // 12 months

type Choice = "granted" | "denied";

type StoredConsent = {
  choice: Choice;
  /** Unix timestamp (ms) when the choice was stored. */
  decidedAt: number;
};

/**
 * Push a Consent Mode v2 update into the gtag dataLayer. Safe to call
 * before gtag.js has finished loading — dataLayer is a plain array
 * that gtag.js drains on init, so the update is replayed once it
 * arrives.
 */
function pushConsent(choice: Choice) {
  if (typeof window === "undefined") return;
  const state = choice === "granted" ? "granted" : "denied";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dl: any[] = ((window as unknown as { dataLayer?: unknown[] }).dataLayer ||= []);
  dl.push([
    "consent",
    "update",
    {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    },
  ]);
}

function readStored(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed.choice || !parsed.decidedAt) return null;
    if (Date.now() - parsed.decidedAt > STORAGE_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStored(choice: Choice) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, decidedAt: Date.now() } satisfies StoredConsent),
    );
  } catch {
    /* private mode etc. — banner just re-appears next visit */
  }
}

export function CookieConsent() {
  const t = useT();
  const reduceMotion = useReducedMotion();
  // `null` = haven't read storage yet → render nothing to avoid SSR/hydration mismatch
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      // Re-push the prior decision so GA picks it up on this page-load too.
      pushConsent(stored.choice);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    writeStored("granted");
    pushConsent("granted");
    setVisible(false);
  };

  const reject = () => {
    writeStored("denied");
    pushConsent("denied");
    setVisible(false);
  };

  if (visible !== true) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-3 bottom-3 z-[400] mx-auto max-w-3xl rounded-lg border border-ink/15 bg-cream shadow-[0_18px_36px_-12px_rgba(20,16,12,0.45)] sm:inset-x-6 sm:bottom-6"
      >
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
          <div className="flex-1">
            <p
              id="cookie-consent-title"
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-tattoo-red"
            >
              {t.cookies.eyebrow}
            </p>
            <p
              className="mt-2 font-serif text-ink/85"
              style={{ fontSize: 14.5, lineHeight: 1.55 }}
            >
              {t.cookies.body}{" "}
              <Link
                href="/privacy"
                className="underline decoration-ink/30 underline-offset-2 transition-colors hover:text-tattoo-red hover:decoration-tattoo-red"
              >
                {t.cookies.linkLabel}
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-row gap-3 sm:flex-col sm:gap-2">
            <button
              type="button"
              onClick={accept}
              className="flex-1 rounded-full bg-ink px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-cream transition-colors hover:bg-tattoo-red sm:flex-none"
            >
              {t.cookies.accept}
            </button>
            <button
              type="button"
              onClick={reject}
              className="flex-1 rounded-full border border-ink/25 bg-transparent px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/80 transition-colors hover:border-ink hover:text-ink sm:flex-none"
            >
              {t.cookies.reject}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
