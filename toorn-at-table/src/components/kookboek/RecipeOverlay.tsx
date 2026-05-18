"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useT } from "@/i18n/client";
import { useBodyScrollLock } from "@/lib/hooks/useBodyScrollLock";
import { MarginNotesForAnchor } from "@/components/marginalia/MarginNote";
import { NowPlaying } from "@/components/now-playing/NowPlaying";
import type {
  EssayImage,
  Recipe,
  RecipeIngredient,
} from "@/lib/types";

function formatTime(minutes?: number) {
  if (!minutes) return null;
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} u ${m} min` : `${h} u`;
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

/**
 * Inline essay photo. Anchored by `afterParagraph` index so the body
 * renderer slots it in between paragraphs without having to know the
 * full content shape.
 */
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
          unoptimized
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

export function RecipeOverlay({
  recipe,
  onClose,
}: {
  recipe: Recipe;
  onClose: () => void;
}) {
  const t = useT();
  const CATEGORY_LABEL: Record<Recipe["category"], string> = {
    voor: t.cookbook.categoryStarter,
    hoofd: t.cookbook.categoryMain,
    bij: t.cookbook.categorySide,
    dessert: t.cookbook.categoryDessert,
    borrel: t.cookbook.categoryDrink,
    basis: t.cookbook.categoryBasic,
  };
  useBodyScrollLock();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const totalTime = (recipe.prepMinutes ?? 0) + (recipe.cookMinutes ?? 0);
  const grouped = groupIngredients(recipe.ingredients);

  // Group essay images by the paragraph index they sit after, so the
  // body renderer can splice them in without a second pass.
  const imagesByParagraph = new Map<number, EssayImage[]>();
  for (const img of recipe.essayImages ?? []) {
    const list = imagesByParagraph.get(img.afterParagraph) ?? [];
    list.push(img);
    imagesByParagraph.set(img.afterParagraph, list);
  }

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-overlay-title"
      className="fixed inset-0 z-[200] overflow-y-auto bg-ink/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="relative mx-auto my-6 w-full max-w-4xl bg-cream px-5 pb-20 pt-16 shadow-paper md:my-12 md:px-12 md:pb-28 md:pt-20"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label={t.gallery.cursorClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-cream-warm text-ink transition-colors hover:bg-tattoo-red hover:text-cream md:right-6 md:top-6"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2 2 L12 12 M12 2 L2 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
          {CATEGORY_LABEL[recipe.category]}
          {recipe.seasons.length > 0 && (
            <span className="text-ink/35"> · {recipe.seasons.join(" / ")}</span>
          )}
        </p>

        <h2
          id="recipe-overlay-title"
          className="mt-4 font-display italic leading-[0.98] text-ink"
          style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
        >
          {recipe.title}
        </h2>

        {recipe.intro && (
          <p
            className="mt-6 max-w-2xl font-serif italic text-ink/80"
            style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.45 }}
          >
            {recipe.intro}
          </p>
        )}

        {/* Intro-anchored marginalia (sits right under the intro) */}
        <MarginNotesForAnchor
          notes={recipe.marginalia}
          anchor="intro"
          className="mt-4 max-w-md md:ml-auto md:max-w-xs md:text-right"
        />

        {/* Now playing — pinned strip under the intro */}
        {recipe.nowPlaying && <NowPlaying data={recipe.nowPlaying} />}

        {/* Essay body — long-read part. Renders before the meta strip
            so the story comes first and the recipe-as-spec comes after. */}
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

        {/* Essay-anchored marginalia (after the long-read, before the spec) */}
        <MarginNotesForAnchor
          notes={recipe.marginalia}
          anchor="essay"
          className="mt-8 max-w-md md:ml-auto md:max-w-xs md:text-right"
        />

        {/* Meta strip — spec begins here */}
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
              <dd className="mt-1 text-ink normal-case tracking-normal font-serif italic" style={{ fontSize: 14 }}>
                {recipe.pairing}
              </dd>
            </div>
          )}
        </dl>

        {/* Ingredients + steps */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <section className="md:col-span-5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {t.cookbook.overlayIngredients}
            </h3>
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
                            <span className="text-ink/55 italic">
                              {" "}
                              · {it.note}
                            </span>
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
            <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {t.cookbook.overlayMethod}
            </h3>
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
              className="mt-8 ml-14 max-w-md"
            />
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
