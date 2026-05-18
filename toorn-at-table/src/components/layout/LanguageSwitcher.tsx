"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "@/app/actions/locale";
import { LOCALES, LOCALE_LABELS, LOCALE_LONG_LABELS, type Locale } from "@/i18n/config";
import { useLocale, useT } from "@/i18n/client";

/**
 * Tiny three-letter pill — EN / ES / NL — that swaps the active locale.
 * Sets a year-long cookie via the server action and refreshes so the
 * next server render speaks the chosen language. The current locale is
 * styled inkfilled; the rest are hairline ink-on-cream.
 */
export function LanguageSwitcher() {
  const current = useLocale();
  const dict = useT();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onSelect = (locale: Locale) => {
    if (locale === current || pending) return;
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
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
            aria-label={LOCALE_LONG_LABELS[locale]}
            disabled={pending && !active}
            className={`px-2.5 py-1 transition-colors ${
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
