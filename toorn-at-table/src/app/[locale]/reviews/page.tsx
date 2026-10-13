import type { Metadata } from "next";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary, setRequestLocale } from "@/i18n/server";
import { buildAlternates } from "@/i18n/config";

/**
 * /reviews — the guest book. Nick sends this link after a dinner. Guests
 * give stars, write a few lines and add up to three photos, which become
 * polaroid WebPs in their own browser before anything is sent.
 *
 * Nothing auto-publishes. Submissions land in the Netlify Forms dashboard;
 * Nick checks each one against his bookings, and approved reviews (with
 * their polaroids) go into src/content/testimonials.ts, which lights up the
 * Guests section below and on the home page. The verification line on this
 * page is the EU Omnibus disclosure of how reviews are checked.
 */

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  setRequestLocale((await params).locale);
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  return {
    title: t.reviews.metaTitle,
    description: t.reviews.metaDescription,
    alternates: buildAlternates("/reviews", locale),
    robots: { index: true, follow: true },
  };
}

export default async function ReviewsPage({ params }: Params) {
  setRequestLocale((await params).locale);
  const t = await getDictionary();
  const copy = t.reviews;

  return (
    <div className="relative w-full">
      <section className="mx-auto w-full max-w-5xl px-5 pt-24 pb-12 md:px-12 md:pt-32 md:pb-16">
        <Reveal
          as="p"
          className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
        >
          {copy.eyebrow}
        </Reveal>
        <h1
          className="mt-4 max-w-3xl font-display italic leading-[0.98] text-ink"
          style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
        >
          <RevealWords text={copy.title} as="span" />
        </h1>
        <Reveal
          as="p"
          delay={0.2}
          className="mt-6 max-w-2xl font-serif italic text-ink/75"
        >
          <span style={{ fontSize: "clamp(17px, 1.3vw, 19px)", lineHeight: 1.5 }}>
            {copy.intro}
          </span>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 max-w-2xl">
          <div className="flex items-start gap-4 border border-ink/15 bg-cream-warm/35 px-5 py-4 md:px-6">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="mt-0.5 shrink-0 text-tattoo-jade"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M7.5 12.5 L10.5 15.5 L16.5 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-serif text-ink/75" style={{ fontSize: 15.5, lineHeight: 1.55 }}>
              {copy.verification}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-28 md:px-12 md:pb-40">
        <div className="border-t border-ink/15 pt-12 md:pt-16">
          <ReviewForm />
        </div>
      </section>

      {/* Approved reviews. Renders nothing until the first one is published. */}
      <Testimonials />
    </div>
  );
}
