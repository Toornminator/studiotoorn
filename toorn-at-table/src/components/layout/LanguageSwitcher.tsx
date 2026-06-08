"use client";

import { useRouter, usePathname } from "next/navigation";
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
 * Tiny three-letter pill — EN / ES / NL — that swaps the active locale.
 *
 * Two-phase swap so the button feels instant:
 *  1. Synchronous client flip via the LocaleProvider — every `useT()`
 *     consumer re-renders this frame, the pill highlights the new
 *     choice immediately, no awaiting anything.
 *  2. Fire-and-forget background: persist the choice in a year-long
 *     cookie + `router.refresh()` so server-rendered sections (Hero,
 *     About, Footer, …) catch up to the new dictionary shortly after.
 */
export function LanguageSwitcher() {
  const current = useLocale();
  const setLocale = useSetLocale();
  const dict = useT();
  const router = useRouter();
  const pathname = usePathname();

  const onSelect = (locale: Locale) => {
    if (locale === current) return;
    // 1. Instant client swap — pill + every useT() consumer flips this frame.
    setLocale(locale);
    // 2. Soft-navigate to the same page under the new locale's URL (/, /es,
    //    /nl) so server components re-render and the address bar matches the
    //    language. The instant swap above keeps it feeling immediate.
    const base = stripLocalePrefix(pathname);
    router.push(localizedHref(base, locale));
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
