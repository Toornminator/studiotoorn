"use client";

import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_LONG_LABELS,
  localizedHref,
  stripLocalePrefix,
  type Locale,
} from "@/i18n/config";
import { useLocale, useSetLocale, useT } from "@/i18n/client";

/**
 * Tiny three-letter pill — EN / ES / NL — that swaps the active locale by
 * navigating to that locale's URL (root = English, /es, /nl).
 *
 *  1. Synchronous client flip via the LocaleProvider so the pill + every
 *     `useT()` consumer re-render this frame and the change reads as instant.
 *  2. A full navigation to the locale's URL. It has to be a hard navigation,
 *     not a soft router.push: the locale prefixes rewrite to the same route,
 *     so Next would otherwise reuse the already-rendered server components and
 *     leave the page in the old language until a manual refresh.
 */
export function LanguageSwitcher() {
  const current = useLocale();
  const setLocale = useSetLocale();
  const dict = useT();
  const pathname = usePathname();

  const onSelect = (locale: Locale) => {
    if (locale === current) return;
    // 1. Flip the client dictionary immediately — every useT() consumer
    //    re-renders this frame, so the change reads as instant while the load
    //    below is in flight.
    setLocale(locale);
    // 2. Full navigation to the locale's URL. A soft router.push is NOT
    //    enough: /es and / (and /es/x and /x) rewrite to the same route, so
    //    Next's client router reuses the already-rendered server components
    //    and the page stays in the old language until a hard refresh. A real
    //    navigation re-runs the proxy and re-renders the server tree in the
    //    right language.
    const base = stripLocalePrefix(pathname);
    window.location.assign(localizedHref(base, locale));
  };

  return (
    <div
      role="group"
      aria-label={dict.languageSwitcher.label}
      className="inline-flex items-center gap-px overflow-hidden rounded-full border border-ink/20 bg-cream-warm/40 font-mono text-[10px] uppercase tracking-[0.2em]"
    >
      {LOCALES.map((locale) => {
        const active = locale === current;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => onSelect(locale)}
            aria-current={active ? "true" : undefined}
            // Accessible name must contain the visible "EN"/"ES"/"NL" label
            // (WCAG 2.5.3 Label in Name), so screen-reader and voice-control
            // users hear "Nederlands (NL)", not a name that omits what they see.
            aria-label={`${LOCALE_LONG_LABELS[locale]} (${LOCALE_LABELS[locale]})`}
            className={`px-2.5 py-1 transition-colors duration-150 focus:outline-none focus-visible:shadow-[inset_0_0_0_2px_#c8202a] ${
              active
                ? "bg-ink text-cream"
                : "text-ink/65 hover:text-ink"
            }`}
          >
            {LOCALE_LABELS[locale]}
          </button>
        );
      })}
    </div>
  );
}
