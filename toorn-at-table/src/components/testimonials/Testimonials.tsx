import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getDictionary, getCurrentLocale } from "@/i18n/server";
import { localizedHref } from "@/i18n/config";
import { getTestimonials, getTestimonialStats } from "@/lib/content/testimonials";
import type { Testimonial } from "@/lib/types";

/**
 * "Guests" / Testimonials — the trust spine of the booking funnel. Sits
 * just before the contact form so social proof peaks at the moment the
 * visitor decides whether to write. A wealthy stranger handing over their
 * kitchen for an evening needs to see other people like them already did.
 *
 * Driven entirely by src/content/testimonials.ts. When that array is empty
 * the section returns null and the page stays clean — no empty shell, no
 * fake stars. Same defensive pattern as the Gallery section.
 */
export async function Testimonials() {
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  const testimonials = getTestimonials(locale);
  if (testimonials.length === 0) return null;

  const { count, average } = getTestimonialStats();
  const copy = t.testimonials;

  return (
    <section
      id="guests"
      aria-labelledby="testimonials-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
          >
            {copy.eyebrow}
          </Reveal>
          <h2
            id="testimonials-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={copy.title} />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {copy.intro}
            </span>
          </Reveal>

          {/* Aggregate trust line — the number that earns the click. */}
          <Reveal
            delay={0.3}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <Stars rating={Math.round(average)} className="text-tattoo-mustard" />
            <span className="font-display text-ink" style={{ fontSize: 22 }}>
              {average.toFixed(1).replace(".", localeDecimal(locale))}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
              · {count} {copy.tablesServed}
            </span>
          </Reveal>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ink/15 bg-ink/15 md:mt-16 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <li key={item.slug} className="bg-cream">
              <TestimonialCard item={item} index={i} />
            </li>
          ))}
          {/* On an odd count the 2-col grid leaves a hole; fill it with a
              soft invitation that doubles as a second route to the form. */}
          {testimonials.length % 2 === 1 && (
            <li className="bg-cream">
              <a
                href={localizedHref("/#contact", locale)}
                data-cursor={copy.cta}
                className="group flex h-full flex-col justify-center gap-4 p-7 transition-colors hover:bg-cream-warm/40 md:p-12"
              >
                <span
                  className="font-serif italic text-ink/70"
                  style={{ fontSize: "clamp(18px, 1.7vw, 22px)", lineHeight: 1.4 }}
                >
                  {copy.invitation}
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
                  {copy.cta}
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 5 H11 M8 1 L11 5 L8 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
          )}
        </ul>

        {/* The invitation cell already carries the CTA on odd counts, so
            only show the standalone link when the grid came out even. */}
        {testimonials.length % 2 === 0 && (
        <Reveal delay={0.15} className="mt-10 md:mt-14">
          <a
            href={localizedHref("/#contact", locale)}
            data-cursor={copy.cta}
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70 transition-colors hover:text-tattoo-red"
          >
            {copy.cta}
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M1 5 H11 M8 1 L11 5 L8 9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <Reveal delay={Math.min(0.3, index * 0.08)} className="h-full">
      <figure className="flex h-full flex-col p-7 md:p-12">
        {/* Oversized opening quote mark — a printed-page flourish. */}
        <span
          aria-hidden
          className="font-display leading-none text-tattoo-red/25"
          style={{ fontSize: 64, marginBottom: -8 }}
        >
          &ldquo;
        </span>
        <blockquote
          className="font-serif text-ink/90"
          style={{ fontSize: "clamp(18px, 1.7vw, 22px)", lineHeight: 1.5 }}
        >
          {item.quote}
        </blockquote>
        <figcaption className="mt-7 flex flex-col gap-2 border-t border-ink/12 pt-5">
          <Stars rating={item.rating} className="text-tattoo-mustard" size={13} />
          <span className="mt-1 font-display text-ink" style={{ fontSize: 17 }}>
            {item.author}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/55">
            {[item.context, item.location].filter(Boolean).join(" · ")}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

function Stars({
  rating,
  className,
  size = 16,
}: {
  rating: number;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 ${className ?? ""}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1.4}
          aria-hidden
          className={i < rating ? "" : "opacity-35"}
        >
          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.8l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94z" />
        </svg>
      ))}
    </span>
  );
}

/** Spanish + Dutch read decimals with a comma; English with a point. */
function localeDecimal(locale: string): string {
  return locale === "en" ? "." : ",";
}
