import type { Metadata } from "next";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { OrderForm } from "@/components/the-table/OrderForm";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { getCurrentWeeklyMenu } from "@/lib/content/weekly-menu";
import type { Locale } from "@/i18n/config";

const LOCALE_TAG: Record<Locale, string> = {
  en: "en-GB",
  es: "es-ES",
  nl: "nl-NL",
};

function formatDay(iso: string, locale: Locale): string {
  // Noon anchor avoids a timezone day-shift for date-only strings.
  const d = iso.includes("T") ? new Date(iso) : new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat(LOCALE_TAG[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Madrid",
  }).format(d);
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDictionary();
  return {
    title: t.theTable.serviceName,
    description: t.theTable.metaDescription,
    alternates: { canonical: "/the-table" },
    openGraph: {
      title: t.theTable.metaTitle,
      description: t.theTable.metaDescription,
      url: "https://toornattable.com/the-table",
    },
  };
}

export default async function TheTablePage() {
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  const copy = t.theTable;
  const menu = getCurrentWeeklyMenu(locale);

  const deliveryDay = menu ? formatDay(menu.deliveryDate, locale) : null;
  const orderByDay = menu ? formatDay(menu.orderCutoff, locale) : null;

  return (
    <main className="relative w-full">
      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-5 pt-28 pb-12 md:px-12 md:pt-40 md:pb-16">
        <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
          {copy.heroEyebrow}
        </Reveal>
        <h1
          className="mt-4 font-display italic leading-[0.95] text-ink"
          style={{ fontSize: "clamp(44px, 8vw, 104px)" }}
        >
          <RevealWords text={copy.heroTitle} as="span" />
        </h1>
        <Reveal as="p" delay={0.2} className="mt-6 max-w-2xl font-serif text-ink/80" >
          <span style={{ fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.5 }}>
            {copy.heroIntro}
          </span>
        </Reveal>
        {menu && (
          <Reveal delay={0.3} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/55">
            <span>
              {copy.teaserDeliveryPrefix} {deliveryDay}
            </span>
            <span aria-hidden className="text-ink/25">·</span>
            <span className={menu.orderingOpen ? "text-tattoo-red" : "text-ink/55"}>
              {menu.orderingOpen
                ? `${menu.spotsLeft} ${copy.spotsLeftLabel}`
                : copy.soldOutLabel}
            </span>
          </Reveal>
        )}
      </section>

      {/* This week's menu */}
      {menu && (
        <section className="mx-auto w-full max-w-5xl px-5 pb-24 md:px-12 md:pb-32">
          <div className="border border-ink/20 bg-cream-warm/30 p-7 md:p-12">
            <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {copy.menuEyebrow}
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-3 font-display leading-[1.02] text-ink" >
              <span style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>{menu.title}</span>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-4 max-w-2xl font-serif italic text-ink/70">
              <span style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.5 }}>
                {menu.description}
              </span>
            </Reveal>

            <ul className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
              {menu.courses.map((course, i) => (
                <li key={i} className="flex gap-5 py-4">
                  <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-tattoo-red" style={{ paddingTop: 4 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-ink" style={{ fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.2 }}>
                    {course}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-5 border-t border-ink/15 pt-6">
              <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/55">
                <span className="flex flex-col gap-1">
                  <span className="text-ink/40">{copy.deliveryDayLabel}</span>
                  <span className="text-ink/80">{deliveryDay}</span>
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-ink/40">{copy.orderByLabel}</span>
                  <span className="text-ink/80">{orderByDay}</span>
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-ink/40">{copy.spotsLeftLabel}</span>
                  <span className={menu.orderingOpen ? "text-tattoo-red" : "text-ink/80"}>
                    {menu.orderingOpen ? menu.spotsLeft : copy.soldOutLabel}
                  </span>
                </span>
              </div>
              <span className="font-display text-ink" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                €{menu.pricePerPortion}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/45">
                  {copy.perPerson}
                </span>
              </span>
            </div>

            {menu.allergens && (
              <p className="mt-6 border-t border-ink/10 pt-5 font-serif text-ink/55" style={{ fontSize: 13.5, lineHeight: 1.5 }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/45">
                  {copy.allergensLabel}:{" "}
                </span>
                {menu.allergens}
              </p>
            )}
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-24 md:px-12 md:pb-32">
        <header className="border-t border-ink/15 pt-12 md:pt-16">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {copy.howEyebrow}
          </Reveal>
          <h2 className="mt-4 max-w-3xl font-display leading-[0.95] text-ink" style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}>
            <RevealWords text={copy.howTitle} as="span" />
          </h2>
        </header>
        <ol className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {copy.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={Math.min(0.3, i * 0.07)}>
              <div className="flex gap-5">
                <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-tattoo-red" style={{ paddingTop: 4 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-ink" style={{ fontSize: "clamp(19px, 1.9vw, 24px)", lineHeight: 1.1 }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md font-serif text-ink/75" style={{ fontSize: 16, lineHeight: 1.55 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Delivery area */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-24 md:px-12 md:pb-32">
        <header className="border-t border-ink/15 pt-12 md:pt-16">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {copy.areaEyebrow}
          </Reveal>
          <h2 className="mt-4 font-display leading-[0.95] text-ink" style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}>
            <RevealWords text={copy.areaTitle} as="span" />
          </h2>
          <Reveal as="p" delay={0.15} className="mt-5 max-w-2xl font-serif text-ink/80">
            <span style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.55 }}>
              {copy.areaBody}
            </span>
          </Reveal>
        </header>
      </section>

      {/* Order form or closed state */}
      <section id="order" className="mx-auto w-full max-w-5xl px-5 pb-24 md:px-12 md:pb-32">
        <header className="border-t border-ink/15 pt-12 md:pt-16">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {copy.form.eyebrow}
          </Reveal>
          {menu && menu.orderingOpen ? (
            <>
              <h2 className="mt-4 font-display leading-[0.95] text-ink" style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}>
                <RevealWords text={copy.form.title} as="span" />
              </h2>
              <Reveal as="p" delay={0.15} className="mt-5 max-w-2xl font-serif text-ink/80">
                <span style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.55 }}>
                  {copy.form.intro}
                </span>
              </Reveal>
              <div className="mt-10">
                <OrderForm
                  pricePerPortion={menu.pricePerPortion}
                  maxPortions={menu.spotsLeft}
                  menuSlug={menu.slug}
                  menuTitle={menu.title}
                  deliveryDate={menu.deliveryDate}
                />
              </div>
            </>
          ) : (
            <>
              <h2 className="mt-4 font-display leading-[1.0] text-ink" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
                {copy.form.closedTitle}
              </h2>
              <Reveal as="p" delay={0.15} className="mt-5 max-w-2xl font-serif text-ink/80">
                <span style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.55 }}>
                  {copy.form.closedBody}
                </span>
              </Reveal>
            </>
          )}
        </header>
      </section>

      {/* Mini-FAQ */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-16">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {copy.faqEyebrow}
          </Reveal>
          <h2 className="mt-4 font-display leading-[0.95] text-ink" style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}>
            <RevealWords text={copy.faqTitle} as="span" />
          </h2>
        </header>
        <div className="mt-10">
          {copy.faqItems.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(0.3, i * 0.05)}>
              <details className="group border-b border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-ink transition-colors group-hover:text-tattoo-red" style={{ fontSize: "clamp(18px, 1.7vw, 23px)", lineHeight: 1.15 }}>
                    {item.q}
                  </span>
                  <span aria-hidden className="shrink-0 font-display text-tattoo-red transition-transform duration-300 group-open:rotate-[135deg]" style={{ fontSize: 28, lineHeight: 1 }}>
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 font-serif text-ink/75" style={{ fontSize: "clamp(15px, 1.2vw, 17px)", lineHeight: 1.6 }}>
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
