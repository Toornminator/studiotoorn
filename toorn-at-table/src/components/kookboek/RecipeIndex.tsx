"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useT } from "@/i18n/client";
import { localizedHref } from "@/i18n/config";
import { NowPlayingBadge } from "@/components/now-playing/NowPlaying";
import type { Recipe, RecipeCategory, Season } from "@/lib/types";
import { RecipeOverlay } from "./RecipeOverlay";

function formatMinutes(prep?: number, cook?: number) {
  const total = (prep ?? 0) + (cook ?? 0);
  if (!total) return null;
  if (total < 60) return `${total} min`;
  const h = Math.floor(total / 60);
  const m = total % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

function DifficultyDots({ level = 0 }: { level?: number }) {
  return (
    <span
      className="inline-flex items-center gap-[3px]"
      aria-label={`${level}/5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          aria-hidden
          className="h-[6px] w-[6px] rounded-full"
          style={{ backgroundColor: i <= level ? "#1A1A1A" : "rgba(26,26,26,0.18)" }}
        />
      ))}
    </span>
  );
}

export function RecipeIndex({ recipes }: { recipes: Recipe[] }) {
  const t = useT();
  const locale = useLocale();
  const [activeCategory, setActiveCategory] =
    useState<RecipeCategory | "all">("all");
  const [activeSeason, setActiveSeason] = useState<Season | "all">("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Deep-linking, so a shared recipe link actually opens that recipe.
  // On first load, open whatever ?recipe=<slug> points at.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("recipe");
    if (slug && recipes.some((r) => r.slug === slug)) setOpenSlug(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reflect the open recipe in the URL (without a history entry or scroll),
  // so the visitor can copy it straight from the address bar too. Skips the
  // very first run so it never wipes the param the loader just read.
  const firstSync = useRef(true);
  useEffect(() => {
    if (firstSync.current) {
      firstSync.current = false;
      return;
    }
    const url = new URL(window.location.href);
    if (openSlug) url.searchParams.set("recipe", openSlug);
    else url.searchParams.delete("recipe");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }, [openSlug]);

  const CATEGORIES: { id: RecipeCategory | "all"; label: string }[] = [
    { id: "all", label: t.cookbook.categoryAll },
    { id: "voor", label: t.cookbook.categoryStarter },
    { id: "hoofd", label: t.cookbook.categoryMain },
    { id: "bij", label: t.cookbook.categorySide },
    { id: "dessert", label: t.cookbook.categoryDessert },
    { id: "borrel", label: t.cookbook.categoryDrink },
    { id: "basis", label: t.cookbook.categoryBasic },
  ];

  const SEASONS: { id: Season | "all"; label: string }[] = [
    { id: "all", label: t.cookbook.seasonAll },
    { id: "lente", label: t.cookbook.seasonSpring },
    { id: "zomer", label: t.cookbook.seasonSummer },
    { id: "herfst", label: t.cookbook.seasonAutumn },
    { id: "winter", label: t.cookbook.seasonWinter },
  ];

  const CATEGORY_LABEL: Record<RecipeCategory, string> = {
    voor: t.cookbook.categoryStarter,
    hoofd: t.cookbook.categoryMain,
    bij: t.cookbook.categorySide,
    dessert: t.cookbook.categoryDessert,
    borrel: t.cookbook.categoryDrink,
    basis: t.cookbook.categoryBasic,
  };

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      if (activeCategory !== "all" && r.category !== activeCategory) return false;
      if (
        activeSeason !== "all" &&
        !r.seasons.includes(activeSeason) &&
        !r.seasons.includes("altijd")
      )
        return false;
      return true;
    });
  }, [recipes, activeCategory, activeSeason]);

  const openRecipe = openSlug
    ? recipes.find((r) => r.slug === openSlug) ?? null
    : null;

  return (
    <>
      <div className="mt-14 space-y-5 md:mt-20">
        <FilterRow
          label={t.cookbook.filtersCategory}
          options={CATEGORIES}
          activeId={activeCategory}
          onSelect={(id) => setActiveCategory(id as RecipeCategory | "all")}
        />
        <FilterRow
          label={t.cookbook.filtersSeason}
          options={SEASONS}
          activeId={activeSeason}
          onSelect={(id) => setActiveSeason(id as Season | "all")}
        />
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
        {filtered.length}{" "}
        {filtered.length === 1 ? t.cookbook.resultsOne : t.cookbook.resultsMany}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((recipe) => (
            <motion.a
              key={recipe.slug}
              layout
              href={localizedHref(`/recipes/${recipe.slug}`, locale)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => {
                // Plain click opens the in-page quick-view overlay; modified
                // clicks (cmd/ctrl/shift) fall through to the real recipe page
                // so "open in new tab" works and the href stays crawlable.
                if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                e.preventDefault();
                setOpenSlug(recipe.slug);
              }}
              data-cursor={t.cookbook.cursorOpen}
              className="group relative flex flex-col items-start overflow-hidden border border-ink/12 bg-cream-warm/60 text-left transition-colors hover:bg-cream-warm/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              style={{ borderRadius: 4 }}
            >
              {recipe.heroImage && (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={recipe.heroImage}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="flex w-full flex-col items-start gap-4 p-6 md:p-7">
              <div className="flex w-full items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-tattoo-red">
                  {CATEGORY_LABEL[recipe.category]}
                </span>
                <DifficultyDots level={recipe.difficulty ?? 0} />
              </div>

              <h3
                className="font-display italic leading-[1.05] text-ink"
                style={{ fontSize: "clamp(24px, 2.4vw, 30px)" }}
              >
                {recipe.title}
              </h3>

              {recipe.nowPlaying && (
                <NowPlayingBadge data={recipe.nowPlaying} />
              )}

              {recipe.intro && (
                <p className="font-serif text-ink/70" style={{ fontSize: 15, lineHeight: 1.5 }}>
                  {recipe.intro.length > 110
                    ? recipe.intro.slice(0, 110).trim() + "…"
                    : recipe.intro}
                </p>
              )}

              <div className="mt-auto flex w-full items-center justify-between pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                <span>
                  {formatMinutes(recipe.prepMinutes, recipe.cookMinutes) ?? "·"}
                </span>
                <span className="inline-flex items-center gap-1 text-ink/40 transition-colors group-hover:text-tattoo-red">
                  {t.events.openLabel}
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
                    <path
                      d="M1 4 H10 M7 1 L10 4 L7 7"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-serif italic text-ink/55">
          {t.cookbook.noResults}
        </p>
      )}

      <AnimatePresence>
        {openRecipe && (
          <RecipeOverlay recipe={openRecipe} onClose={() => setOpenSlug(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  activeId,
  onSelect,
}: {
  label: string;
  options: { id: T; label: string }[];
  activeId: T;
  onSelect: (id: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40">
        {label}
      </span>
      {options.map((opt) => {
        const active = opt.id === activeId;
        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
              active
                ? "border-ink bg-ink text-cream"
                : "border-ink/20 bg-transparent text-ink/65 hover:border-ink/40 hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
