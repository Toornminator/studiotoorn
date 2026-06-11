import Image from "next/image";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { localizedHref } from "@/i18n/config";
import type { Recipe } from "@/lib/types";
import { EveningAct } from "./EveningAct";

/**
 * "The Evening" — the IMMERSE beat of the funnel, staged as the dark act
 * of the page. Services tells a visitor WHAT they can book; this section
 * lets them FEEL what the night is: the lights dim to the share-card
 * near-black (see EveningAct), and the only lit object in the room is
 * the paper menu card under a candle glow. Two halves: the flow of an
 * evening (in Nick's voice) and an illustrative tasting menu pulled live
 * from the real cookbook, so the sample is always in sync with what he
 * actually cooks and localises for free.
 *
 * Honest by construction: the menu is labelled a sample, never a fixed
 * card, and every dish is a real recipe that exists on the site.
 */

// Course order for the sample menu, keyed to dishes that exist in the
// cookbook. Any slug that isn't found is skipped, so the menu degrades
// gracefully if a recipe is renamed or removed.
const SAMPLE_MENU = [
  { slug: "gougere-comte-parmezaan", course: "aperitivo" },
  { slug: "vitello-tonnato", course: "starter" },
  { slug: "dorada-plancha", course: "sea" },
  { slug: "runderwang-rode-wijn", course: "main" },
  { slug: "peer-kardemom-mascarpone", course: "dessert" },
] as const;

type CourseKey = (typeof SAMPLE_MENU)[number]["course"];

export async function TheEvening({ recipes }: { recipes: Recipe[] }) {
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  const copy = t.theEvening;

  const bySlug = new Map(recipes.map((r) => [r.slug, r]));
  const menu = SAMPLE_MENU.flatMap((entry) => {
    const recipe = bySlug.get(entry.slug);
    if (!recipe) return [];
    return [
      {
        course: copy.courses[entry.course as CourseKey],
        title: recipe.title,
        intro: recipe.intro,
      },
    ];
  });

  return (
    <EveningAct>
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 pt-4 md:px-12 md:pb-48 md:pt-8">
        <header className="relative border-t border-cream/15 pt-12 md:pt-20">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold"
          >
            {copy.eyebrow}
          </Reveal>
          <h2
            id="evening-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-cream"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={copy.title} />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-cream/70"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {copy.intro}
            </span>
          </Reveal>

          {/* Hand-scrawled stage direction, golden in the dark */}
          <Reveal
            as="p"
            delay={0.35}
            className="pointer-events-none absolute right-0 top-16 hidden rotate-[-4deg] font-hand text-gold/90 md:block"
          >
            <span style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }}>
              {copy.lightsNote}
            </span>
          </Reveal>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-16">
          {/* Flow of the night */}
          <div className="md:col-span-7">
            <Reveal
              as="p"
              className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream/45"
            >
              {copy.flowHeading}
            </Reveal>
            <ol className="mt-8 space-y-8">
              {copy.flow.map((beat, i) => (
                <Reveal as="li" key={beat.title} delay={Math.min(0.3, i * 0.07)}>
                  <div className="flex gap-5">
                    <span
                      aria-hidden
                      className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-gold"
                      style={{ paddingTop: 4 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="font-display text-cream"
                        style={{ fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.1 }}
                      >
                        {beat.title}
                      </h3>
                      <p
                        className="mt-2 max-w-md font-serif text-cream/70"
                        style={{ fontSize: 16, lineHeight: 1.55 }}
                      >
                        {beat.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Sample menu — the one lit object in the room: a paper card
              under candlelight. Stays cream-on-ink exactly like the rest
              of the brand's printed matter, so the red course labels and
              hairlines read as the same physical menu, now after dark. */}
          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative">
                <div
                  aria-hidden
                  className="candle-glow absolute -inset-8 md:-inset-14"
                />
                <figure
                  className="relative rotate-[-1.5deg] border border-ink/20 bg-cream p-7 md:p-9"
                  style={{
                    boxShadow:
                      "0 30px 80px -20px rgba(0,0,0,0.75), 0 6px 24px rgba(0,0,0,0.45)",
                  }}
                >
                  <figcaption className="flex items-baseline justify-between border-b border-ink/15 pb-4">
                    <span className="font-display text-ink" style={{ fontSize: 22 }}>
                      {copy.menuHeading}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
                      TOORN
                    </span>
                  </figcaption>

                  <ul className="divide-y divide-ink/10">
                    {menu.map((dish) => (
                      <li key={dish.title} className="py-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-tattoo-red">
                          {dish.course}
                        </p>
                        <p
                          className="mt-2 font-display text-ink"
                          style={{ fontSize: "clamp(18px, 1.6vw, 21px)", lineHeight: 1.15 }}
                        >
                          {dish.title}
                        </p>
                        {dish.intro && (
                          <p
                            className="mt-1.5 font-serif italic text-ink/60"
                            style={{ fontSize: 14, lineHeight: 1.45 }}
                          >
                            {dish.intro}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-ink/15 pt-5 font-serif text-ink/55" style={{ fontSize: 13.5, lineHeight: 1.5 }}>
                    {copy.menuNote}
                  </p>

                  {/* Printed house mark at the foot of the card */}
                  <Image
                    src="/images/chef_skull_knife_transparent.png"
                    alt=""
                    width={785}
                    height={800}
                    className="mx-auto mt-6 h-9 w-auto opacity-70"
                  />
                </figure>
              </div>
            </Reveal>

            <Reveal delay={0.25} className="mt-7">
              <a
                href={localizedHref("/#contact", locale)}
                data-cursor={copy.cta}
                className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-cream/70 transition-colors hover:text-gold"
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
          </div>
        </div>
      </div>
    </EveningAct>
  );
}
