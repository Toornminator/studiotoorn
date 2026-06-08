import Image from "next/image";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/server";
import type { Recipe } from "@/lib/types";

/**
 * Cookbook teaser — a compact four-photo strip that sits high on the page
 * (between About and the Timeline) so visitors see the food early, then
 * links straight down to the full cookbook section (#cookbook). It is a
 * visual bridge, not a numbered chapter, and deliberately shows photos +
 * titles only (no filters, no cards) so it never reads as the cookbook
 * having moved.
 *
 * Slugs are curated for visual punch and variety (bread, pasta, a hearty
 * main, something sweet). If a curated slug is ever renamed, the gap is
 * topped up with the next recipes that carry a hero image, so the strip
 * always renders four photos.
 */

const FEATURED_SLUGS = [
  "brioche-mortadella-pistache",
  "tagliatelle-nero-nduja",
  "smashed-beef-wraps",
  "cinnamon-rolls-kwark",
];

function pickFeatured(recipes: Recipe[]): Recipe[] {
  const withImage = recipes.filter((r) => r.heroImage);
  const bySlug = new Map(withImage.map((r) => [r.slug, r]));
  const picks: Recipe[] = [];

  for (const slug of FEATURED_SLUGS) {
    const r = bySlug.get(slug);
    if (r) picks.push(r);
  }
  for (const r of withImage) {
    if (picks.length >= 4) break;
    if (!picks.includes(r)) picks.push(r);
  }
  return picks.slice(0, 4);
}

export async function CookbookTeaser({ recipes }: { recipes: Recipe[] }) {
  const t = await getDictionary();
  const picks = pickFeatured(recipes);
  if (picks.length === 0) return null;

  return (
    <section
      aria-labelledby="cookbook-teaser-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-24 md:px-12 md:pt-28 md:pb-28">
        <header className="flex flex-col gap-6 border-t border-ink/15 pt-12 md:flex-row md:items-end md:justify-between md:pt-16">
          <div>
            <Reveal
              as="p"
              className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
            >
              {t.cookbookTeaser.eyebrow}
            </Reveal>
            <h2
              id="cookbook-teaser-heading"
              className="mt-4 max-w-2xl font-display italic leading-[0.95] text-ink"
              style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}
            >
              <RevealWords text={t.cookbookTeaser.title} />
            </h2>
          </div>

          <Reveal as="div" delay={0.15} className="shrink-0">
            <a
              href="/#cookbook"
              className="group inline-flex items-center gap-2 rounded-[2px] font-mono text-[11px] uppercase tracking-[0.26em] text-ink/70 transition-colors hover:text-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              {t.cookbookTeaser.cta}
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
                <path
                  d="M1 5 H13 M10 1 L13 5 L10 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </svg>
            </a>
          </Reveal>
        </header>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-6">
          {picks.map((r, i) => (
            <li key={r.slug}>
              <Reveal delay={0.1 + i * 0.08}>
                <a
                  href={`/recipes/${r.slug}`}
                  data-cursor={t.cookbookTeaser.cta}
                  className="group block rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] border border-ink/12 bg-ink/5">
                    <Image
                      src={r.heroImage as string}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 22vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p
                    className="mt-3 font-serif italic leading-snug text-ink/80 transition-colors group-hover:text-tattoo-red"
                    style={{ fontSize: 15 }}
                  >
                    {r.title}
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
