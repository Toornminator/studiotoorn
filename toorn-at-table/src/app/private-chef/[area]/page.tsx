import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { getArea, getAreas, getAreaSlugs } from "@/lib/content/areas";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { buildAlternates, localizedHref } from "@/i18n/config";

/**
 * Service-area landing page: the direct answer to "I need a private
 * chef in [place]", for Google and for AI assistants.
 *
 * Structure follows the extractability playbook: the definition block
 * (who/what/where/how) sits in the first screen, the how-it-works steps
 * are a numbered list reused from The Evening copy, the FAQs are
 * standalone Q&A pairs with FAQPage schema, and a Service +
 * BreadcrumbList graph ties the page to the LocalBusiness entity.
 */

const SITE = "https://toornattable.com";

type Params = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return getAreaSlugs().map((area) => ({ area }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { area: slug } = await params;
  const locale = await getCurrentLocale();
  const area = getArea(slug, locale);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: buildAlternates(`/private-chef/${slug}`, locale),
    robots: { index: true, follow: true },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${SITE}/private-chef/${slug}`,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function AreaPage({ params }: Params) {
  const { area: slug } = await params;
  const [locale, t] = await Promise.all([getCurrentLocale(), getDictionary()]);
  const area = getArea(slug, locale);
  if (!area) notFound();

  const otherAreas = getAreas(locale).filter((a) => a.slug !== slug);
  const url = `${SITE}/private-chef/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "Private chef",
        name: area.title,
        description: area.definition,
        url,
        provider: { "@id": `${SITE}/#business` },
        areaServed: {
          "@type": "City",
          name: area.name,
          geo: {
            "@type": "GeoCoordinates",
            latitude: area.geo.lat,
            longitude: area.geo.lng,
          },
        },
        availableLanguage: ["English", "Spanish", "Dutch"],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: area.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="relative w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header + the extractable definition block */}
      <section className="mx-auto w-full max-w-5xl px-5 pt-24 pb-12 md:px-12 md:pt-32 md:pb-16">
        <Reveal
          as="p"
          className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
        >
          {t.areas.eyebrow}
        </Reveal>
        <h1
          className="mt-4 font-display italic leading-[0.95] text-ink"
          style={{ fontSize: "clamp(40px, 7vw, 92px)" }}
        >
          <RevealWords text={area.title} as="span" />
        </h1>
        <Reveal
          as="p"
          delay={0.2}
          className="mt-7 max-w-3xl border-l border-ink/20 pl-5 font-serif text-ink/85 md:pl-6"
        >
          <span style={{ fontSize: "clamp(17px, 1.45vw, 20px)", lineHeight: 1.55 }}>
            {area.definition}
          </span>
        </Reveal>
      </section>

      {/* Voice paragraphs with the area texture */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-16 md:px-12 md:pb-24">
        <div className="max-w-2xl space-y-6">
          {area.body.map((paragraph) => (
            <Reveal as="p" key={paragraph.slice(0, 32)} className="font-serif text-ink/80">
              <span style={{ fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.65 }}>
                {paragraph}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How the night runs — numbered, extractable, reused copy */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-16 md:px-12 md:pb-24">
        <header className="border-t border-ink/15 pt-12 md:pt-16">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
          >
            {t.theEvening.flowHeading}
          </Reveal>
        </header>
        <ol className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {t.theEvening.flow.map((beat, i) => (
            <Reveal as="li" key={beat.title} delay={Math.min(0.3, i * 0.07)}>
              <div className="flex gap-5">
                <span
                  aria-hidden
                  className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-tattoo-red"
                  style={{ paddingTop: 4 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2
                    className="font-display text-ink"
                    style={{ fontSize: "clamp(19px, 1.9vw, 24px)", lineHeight: 1.1 }}
                  >
                    {beat.title}
                  </h2>
                  <p
                    className="mt-2 max-w-md font-serif text-ink/75"
                    style={{ fontSize: 16, lineHeight: 1.55 }}
                  >
                    {beat.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Area FAQs — same accordion language as the home FAQ */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 md:px-12 md:pb-24">
        <header className="border-t border-ink/15 pt-12 md:pt-16">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
          >
            {t.areas.faqTitle}
          </Reveal>
        </header>
        <div className="mt-8">
          {area.faqs.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(0.3, i * 0.05)}>
              <details className="group border-b border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span
                    className="font-display text-ink transition-colors group-hover:text-tattoo-red"
                    style={{ fontSize: "clamp(18px, 1.7vw, 23px)", lineHeight: 1.15 }}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 font-display text-tattoo-red transition-transform duration-300 group-open:rotate-[135deg]"
                    style={{ fontSize: 28, lineHeight: 1 }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="max-w-2xl pb-7 font-serif text-ink/75"
                  style={{ fontSize: "clamp(15px, 1.2vw, 17px)", lineHeight: 1.6 }}
                >
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-20 text-center md:px-12 md:pb-28">
        <Reveal className="flex flex-col items-center gap-4 border-t border-ink/15 pt-14 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
            {t.closing.ctaIntro}
          </p>
          <Magnetic strength={0.45}>
            <Link
              href={localizedHref("/#contact", locale)}
              data-cursor={t.contact.cursorReserve}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              {t.closing.ctaButton}
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
                <path
                  d="M1 6 H15 M11 1 L16 6 L11 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Magnetic>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            {t.closing.ctaNote}
          </p>
        </Reveal>
      </section>

      {/* Cross-links to the other area pages */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-28 md:px-12 md:pb-36">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3 border-t border-ink/15 pt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50">
          <span>{t.areas.otherAreas}</span>
          {otherAreas.map((a) => (
            <Link
              key={a.slug}
              href={localizedHref(`/private-chef/${a.slug}`, locale)}
              className="text-ink/70 transition-colors hover:text-tattoo-red"
            >
              {a.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
