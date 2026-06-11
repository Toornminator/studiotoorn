"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/client";

/**
 * The "get the app" panel on /cookbook: native install on Android and
 * desktop Chrome (beforeinstallprompt), Add-to-Home-Screen steps on iOS
 * (which has no prompt API), and a "save all recipes offline" action
 * that asks the service worker to precache the whole cookbook.
 *
 * `offlineUrls` is the full localized cookbook: the index page, every
 * recipe page and every hero image, assembled server-side.
 */

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const SAVED_KEY = "toorn-cookbook-offline-saved";

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    // iPadOS 13+ masquerades as macOS but is touch-first.
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

export function CookbookAppPanel({ offlineUrls }: { offlineUrls: string[] }) {
  const t = useT();
  const copy = t.cookbookApp;

  const [standalone, setStandalone] = useState(false);
  const [ios, setIos] = useState(false);
  const [canPrompt, setCanPrompt] = useState(false);
  const [swReady, setSwReady] = useState(false);
  const [saveState, setSaveState] = useState<
    "idle" | "saving" | "done" | "error"
  >("idle");
  const promptRef = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    setStandalone(isStandalone());
    setIos(isIos());

    const onPrompt = (e: Event) => {
      e.preventDefault();
      promptRef.current = e as BeforeInstallPromptEvent;
      setCanPrompt(true);
    };
    const onInstalled = () => {
      promptRef.current = null;
      setCanPrompt(false);
      setStandalone(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => setSwReady(true));
    }
    try {
      if (localStorage.getItem(SAVED_KEY)) setSaveState("done");
    } catch {
      // Storage blocked: the button simply stays in its idle state.
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    const deferred = promptRef.current;
    if (!deferred) return;
    await deferred.prompt();
    const choice = await deferred.userChoice;
    if (choice.outcome === "accepted") {
      promptRef.current = null;
      setCanPrompt(false);
    }
  };

  const saveOffline = async () => {
    if (!("serviceWorker" in navigator)) return;
    setSaveState("saving");
    try {
      const registration = await navigator.serviceWorker.ready;
      const worker =
        registration.active ?? navigator.serviceWorker.controller;
      if (!worker) throw new Error("no active worker");
      const result = await new Promise<{ ok: boolean }>((resolve, reject) => {
        const channel = new MessageChannel();
        const timeout = window.setTimeout(
          () => reject(new Error("timeout")),
          120_000,
        );
        channel.port1.onmessage = (e) => {
          window.clearTimeout(timeout);
          resolve(e.data as { ok: boolean });
        };
        worker.postMessage(
          { type: "PRECACHE_URLS", urls: offlineUrls },
          [channel.port2],
        );
      });
      // Partial failures still mean a usable offline book; only a full
      // refusal reads as an error.
      setSaveState("done");
      try {
        localStorage.setItem(SAVED_KEY, String(Date.now()));
      } catch {
        // Ignore: state just won't persist across visits.
      }
      if (!result.ok) {
        // Keep "done" but leave a breadcrumb for the curious.
        console.warn("Some recipes failed to precache");
      }
    } catch {
      setSaveState("error");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink/15 bg-ink/10 md:grid-cols-2">
      {/* Install half */}
      <section className="bg-cream-warm/45 p-7 md:p-9">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
          {copy.installEyebrow}
        </p>
        <h2
          className="mt-3 font-display leading-[1.05] text-ink"
          style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
        >
          {copy.installTitle}
        </h2>
        <p
          className="mt-3 max-w-md font-serif text-ink/75"
          style={{ fontSize: 15.5, lineHeight: 1.55 }}
        >
          {copy.installBody}
        </p>

        {standalone ? (
          <p className="mt-6 font-hand text-tattoo-red" style={{ fontSize: 21 }}>
            {copy.installedNote}
          </p>
        ) : canPrompt ? (
          <button
            type="button"
            onClick={install}
            data-cursor={copy.installButton}
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.26em] text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {copy.installButton}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M7 1 V10 M3 6.5 L7 10.5 L11 6.5 M2 13 H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : ios ? (
          <ol className="mt-6 space-y-2.5">
            {copy.iosSteps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-4">
                <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-tattoo-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-serif text-ink/80"
                  style={{ fontSize: 15.5, lineHeight: 1.5 }}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="mt-6 space-y-2.5">
            {copy.iosSteps.slice(1).map((step, i) => (
              <li key={step} className="flex items-baseline gap-4">
                <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-tattoo-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-serif text-ink/80"
                  style={{ fontSize: 15.5, lineHeight: 1.5 }}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* Offline half */}
      <section className="bg-cream-warm/45 p-7 md:p-9">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
          {copy.offlineTitle}
        </p>
        <p
          className="mt-3 max-w-md font-serif text-ink/75"
          style={{ fontSize: 15.5, lineHeight: 1.55 }}
        >
          {copy.offlineBody}
        </p>

        {swReady ? (
          saveState === "done" ? (
            <p className="mt-6 font-hand text-tattoo-red" style={{ fontSize: 21 }}>
              {copy.offlineDone}
            </p>
          ) : (
            <>
              <button
                type="button"
                onClick={saveOffline}
                disabled={saveState === "saving"}
                data-cursor={copy.offlineButton}
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.26em] text-ink transition-colors hover:bg-ink hover:text-cream disabled:cursor-wait disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                {saveState === "saving" ? copy.offlineSaving : copy.offlineButton}
              </button>
              {saveState === "error" && (
                <p
                  className="mt-3 font-serif italic text-tattoo-red"
                  style={{ fontSize: 14.5 }}
                  role="status"
                >
                  {copy.offlineError}
                </p>
              )}
            </>
          )
        ) : (
          // No service worker yet (first visit, or unsupported browser):
          // the panel still explains the feature without a dead button.
          <p
            className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/40"
            aria-hidden
          >
            ···
          </p>
        )}
      </section>
    </div>
  );
}
