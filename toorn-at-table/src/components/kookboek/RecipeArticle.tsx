import Image from "next/image";
import Link from "next/link";
import { MarginNotesForAnchor } from "@/components/marginalia/MarginNote";
import { NowPlaying } from "@/components/now-playing/NowPlaying";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import type { EssayImage, Recipe, RecipeIngredient } from "@/lib/types";

function formatTime(minutes?: number) {
  if (!minutes) return null;
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

function groupIngredients(items: RecipeIngredient[]) {
  const groups = new Map<string | "_", RecipeIngredient[]>();
  for (const item of items) {
    const key = item.group ?? "_";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(item);
  }
  return Array.from(groups.entries());
}

function EssayPhoto({ img, slug }: { img: EssayImage; slug: string }) {
  const src = img.src.startsWith("/")
    ? img.src
    : `/images/recipes/${slug}/${img.src}`;
  return (
    <figure className="my-8">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-warm shadow-paper">
        <Image
          src={src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
        />
      </div>
      {img.caption && (
        <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Full-page, server-rendered recipe article. Mirrors the in-page overlay's
 * content but as crawlable, standalone HTML at /recipes/[slug] — its own h1,
 * Recipe schema, and a real URL for sharing + search rich results. No overlay
 * chrome: the page itself is the surface.
 */
export function RecipeArticle({
  recipe,
  t,
  locale,
}: {
  recipe: Recipe;
  t: Dictionary;
  locale: Locale;
}) {
  const CATEGORY_LABEL: Record<Recipe["category"], string> = {
    voor: t.cookbook.categoryStarter,
    hoofd: t.cookbook.categoryMain,
    bij: t.cookbook.categorySide,
    dessert: t.cookbook.categoryDessert,
    borrel: t.cookbook.categoryDrink,
    basis: t.cookbook.categoryBasic,
  };
  const SEASON_LABEL: Record<string, string> = {
    lente: t.cookbook.seasonSpring,
    zomer: t.cookbook.seasonSummer,
    herfst: t.cookbook.seasonAutumn,
    winter: t.cookbook.seasonWinter,
    altijd: t.cookbook.seasonAll,
  };

  const totalTime = (recipe.prepMinutes ?? 0) + (recipe.cookMinutes ?? 0);
  const grouped = groupIngredients(recipe.ingredients);

  const imagesByParagraph = new Map<number, EssayImage[]>();
  for (const img of recipe.essayImages ?? []) {
    const list = imagesByParagraph.get(img.afterParagraph) ?? [];
    list.push(img);
    imagesByParagraph.set(img.afterParagraph, list);
  }

  return (
    <article className="mx-auto w-full max-w-4xl px-5 pb-28 pt-24 md:px-12 md:pb-40 md:pt-28">
      <Link
        href={localizedHref("/#cookbook", locale)}
        className="group inline-flex items-center gap-2 rounded-[2px] font-mono text-[10px] uppercase tracking-[0.26em] text-ink/55 transition-colors hover:text-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
          <path
            d="M15 5 H3 M6 1 L3 5 L6 9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-0.5"
          />
        </svg>
        {t.cookbook.eyebrow}
      </Link>

      {recipe.heroImage && (
        <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden bg-ink/5 shadow-paper">
          <Image
            src={recipe.heroImage}
            alt={recipe.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            priority
            className="object-cover"
          />
        </div>
      )}

      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
        {CATEGORY_LABEL[recipe.category]}
        {recipe.seasons.length > 0 && (
          <span className="text-ink/35">
            {" "}
            · {recipe.seasons.map((s) => SEASON_LABEL[s] ?? s).join(" / ")}
          </span>
        )}
      </p>

      <h1
        className="mt-4 font-display italic leading-[0.98] text-ink"
        style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
      >
        {recipe.title}
      </h1>

      {recipe.intro && (
        <p
          className="mt-6 max-w-2xl font-serif italic text-ink/80"
          style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.45 }}
        >
          {recipe.intro}
        </p>
      )}

      <MarginNotesForAnchor
        notes={recipe.marginalia}
        anchor="intro"
        className="mt-4 max-w-md md:ml-auto md:max-w-xs md:text-right"
      />

      {recipe.nowPlaying && <NowPlaying data={recipe.nowPlaying} />}

      {recipe.body && recipe.body.length > 0 && (
        <div
          className="mt-10 max-w-2xl space-y-5 font-serif text-ink/85"
          style={{ fontSize: "clamp(16px, 1.1vw, 18px)", lineHeight: 1.6 }}
        >
          {recipe.body.map((para, i) => (
            <div key={i}>
              <p>{para}</p>
              {(imagesByParagraph.get(i) ?? []).map((img, j) => (
                <EssayPhoto key={`${i}-${j}`} img={img} slug={recipe.slug} />
              ))}
            </div>
          ))}
        </div>
      )}

      <MarginNotesForAnchor
        notes={recipe.marginalia}
        anchor="essay"
        className="mt-8 max-w-md md:ml-auto md:max-w-xs md:text-right"
      />

      <dl className="mt-12 grid grid-cols-2 gap-y-4 border-y border-ink/15 py-5 font-mono text-[11px] uppercase tracking-[0.22em] sm:grid-cols-4">
        {totalTime > 0 && (
          <div>
            <dt className="text-ink/45">{t.cookbook.overlayTotalTime}</dt>
            <dd className="mt-1 text-ink">{formatTime(totalTime)}</dd>
          </div>
        )}
        {recipe.servings && (
          <div>
            <dt className="text-ink/45">{t.cookbook.overlayServes}</dt>
            <dd className="mt-1 text-ink">
              {recipe.servings} {t.cookbook.overlayServesUnit}
            </dd>
          </div>
        )}
        {recipe.difficulty && (
          <div>
            <dt className="text-ink/45">{t.cookbook.overlayDifficulty}</dt>
            <dd className="mt-1 text-ink">{recipe.difficulty} / 5</dd>
          </div>
        )}
        {recipe.pairing && (
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-ink/45">{t.cookbook.overlayPairing}</dt>
            <dd
              className="mt-1 font-serif italic normal-case tracking-normal text-ink"
              style={{ fontSize: 14 }}
            >
              {recipe.pairing}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <section className="md:col-span-5">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.cookbook.overlayIngredients}
          </h2>
          <ul className="mt-6 space-y-6 font-serif">
            {grouped.map(([groupName, items]) => (
              <li key={groupName}>
                {groupName !== "_" && (
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                    {groupName}
                  </p>
                )}
                <ul className="space-y-2.5">
                  {items.map((it, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-3 border-b border-dotted border-ink/15 pb-2.5"
                      style={{ fontSize: 16, lineHeight: 1.5 }}
                    >
                      {it.quantity && (
                        <span className="min-w-[64px] font-mono text-[12px] uppercase tracking-[0.08em] text-ink/70">
                          {it.quantity}
                        </span>
                      )}
                      <span className="flex-1 text-ink">
                        {it.ingredient}
                        {it.note && (
                          <span className="italic text-ink/55"> · {it.note}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <MarginNotesForAnchor
            notes={recipe.marginalia}
            anchor="ingredients"
            className="mt-6"
          />
        </section>

        <section className="md:col-span-7">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.cookbook.overlayMethod}
          </h2>
          <ol className="mt-6 space-y-7">
            {recipe.steps.map((step) => (
              <li key={step.position} className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <span
                    className="font-display italic text-tattoo-red"
                    style={{ fontSize: 32, lineHeight: 1, minWidth: 36 }}
                  >
                    {step.position}
                  </span>
                  <p
                    className="font-serif text-ink/90"
                    style={{ fontSize: 17, lineHeight: 1.55 }}
                  >
                    {step.body}
                  </p>
                </div>
                <MarginNotesForAnchor
                  notes={recipe.marginalia}
                  anchor={`step-${step.position}` as const}
                  className="ml-14 max-w-md"
                />
              </li>
            ))}
          </ol>
          <MarginNotesForAnchor
            notes={recipe.marginalia}
            anchor="method"
            className="ml-14 mt-8 max-w-md"
          />
        </section>
      </div>

      <div className="mt-16 border-t border-ink/15 pt-10">
        <Link
          href={localizedHref("/#cookbook", locale)}
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.26em] text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
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
        </Link>
      </div>
    </article>
  );
}
