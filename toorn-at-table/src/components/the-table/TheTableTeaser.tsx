import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { getCurrentWeeklyMenu } from "@/lib/content/weekly-menu";
import { localizedHref, type Locale } from "@/i18n/config";

const LOCALE_TAG: Record<Locale, string> = {
  en: "en-GB",
  es: "es-ES",
  nl: "nl-NL",
};

function formatDay(iso: string, locale: Locale): string {
  const d = iso.includes("T") ? new Date(iso) : new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat(LOCALE_TAG[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Madrid",
  }).format(d);
}

/**
 * Homepage teaser for "Toorn aan de deur". A compact, clearly-labelled
 * block that surfaces this week's local menu and links to /the-table.
 * Auto-hides when no menu is queued (same defensive pattern as the
 * Gallery / Testimonials sections), so the premium homepage narrative
 * stays intact in weeks with nothing on.
 */
export async function TheTableTeaser() {
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  const menu = getCurrentWeeklyMenu(locale);
  if (!menu) return null;

  const copy = t.theTable;
  const deliveryDay = formatDay(menu.deliveryDate, locale);

  return (
    <section
      id="to-your-door"
      aria-labelledby="table-teaser-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <Reveal className="border border-ink/20 bg-cream-warm/30 p-7 md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {copy.teaserEyebrow}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em]">
              {menu.orderingOpen ? (
                <span className="text-tattoo-red">
                  {menu.spotsLeft} {copy.teaserSpotsLeft}
                </span>
              ) : (
                <span className="text-ink/50">{copy.teaserSoldOut}</span>
              )}
            </p>
          </div>

          <h2
            id="table-teaser-heading"
            className="mt-5 font-display leading-[1.0] text-ink"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            {menu.title}
          </h2>
          <p className="mt-3 max-w-2xl font-serif italic text-ink/70" style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.45 }}>
            {menu.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-ink/15 pt-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/55">
              <span>
                {copy.teaserDeliveryPrefix} {deliveryDay}
              </span>
              <span aria-hidden className="text-ink/25">·</span>
              <span className="text-ink/80">
                €{menu.pricePerPortion} {copy.perPerson}
              </span>
            </div>
            <Link
              href={localizedHref("/the-table", locale)}
              data-cursor={copy.teaserCta}
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70 transition-colors hover:text-tattoo-red"
            >
              {copy.teaserCta}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                <path d="M1 5 H11 M8 1 L11 5 L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
