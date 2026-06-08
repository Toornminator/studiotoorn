"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { localizedHref } from "@/i18n/config";

/**
 * Route error boundary. Catches a thrown render/runtime error in the page
 * tree and shows a calm, branded fallback with a "try again" (re-render via
 * `reset`) and a way home, instead of dumping a raw stack on the visitor.
 * Client component by contract. Locale is read from <html lang> so the copy
 * still matches the chosen language even though we're outside the server
 * dictionary here.
 */

const COPY = {
  en: {
    eyebrow: "something went wrong",
    heading: "Something burned in the kitchen.",
    body: "An unexpected error slipped through. It's on my side, not yours. Give it another go, or head back to the table.",
    retry: "Try again",
    home: "Back to the table",
  },
  es: {
    eyebrow: "algo ha fallado",
    heading: "Algo se ha quemado en la cocina.",
    body: "Se ha colado un error inesperado. Es cosa mía, no tuya. Inténtalo de nuevo o vuelve a la mesa.",
    retry: "Probar de nuevo",
    home: "Volver a la mesa",
  },
  nl: {
    eyebrow: "er ging iets mis",
    heading: "Er is iets aangebrand in de keuken.",
    body: "Er glipte een onverwachte fout doorheen. Het ligt aan mij, niet aan jou. Probeer het opnieuw, of loop terug naar de tafel.",
    retry: "Opnieuw proberen",
    home: "Terug naar tafel",
  },
} as const;

type Locale = keyof typeof COPY;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    // Surface the error for diagnostics, and pick up the active language.
    console.error(error);
    const lang = document.documentElement.lang as Locale;
    if (lang === "es" || lang === "nl") setLocale(lang);
  }, [error]);

  const t = COPY[locale];

  return (
    <section
      aria-labelledby="error-heading"
      className="relative flex flex-col items-center justify-center px-5 py-32 text-center sm:px-12"
      style={{ minHeight: "max(70svh, 520px)" }}
    >
      <Image
        src="/images/chef_skull_knife_transparent.png"
        alt=""
        width={785}
        height={800}
        className="h-16 w-auto opacity-90 sm:h-20"
      />

      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red sm:text-[11px]">
        {t.eyebrow}
      </p>

      <h1
        id="error-heading"
        className="mt-5 max-w-3xl font-display italic leading-[0.95] text-ink"
        style={{ fontSize: "clamp(34px, 5.5vw, 68px)" }}
      >
        {t.heading}
      </h1>

      <p
        className="mt-6 max-w-xl font-serif italic text-ink/75"
        style={{ fontSize: "clamp(17px, 1.4vw, 19px)", lineHeight: 1.5 }}
      >
        {t.body}
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          {t.retry}
        </button>
        <Link
          href={localizedHref("/", locale)}
          className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/60 underline-offset-4 transition-colors hover:text-tattoo-red hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          {t.home}
        </Link>
      </div>
    </section>
  );
}
