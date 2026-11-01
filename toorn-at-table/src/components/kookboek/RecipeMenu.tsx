"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
  type Variants,
} from "framer-motion";
import { useLocale, useT } from "@/i18n/client";
import { localizedHref } from "@/i18n/config";
import type { Recipe, RecipeCategory } from "@/lib/types";
import { RecipeOverlay } from "./RecipeOverlay";
import { useRecipeOverlay } from "./useRecipeOverlay";

/**
 * The home-page cookbook, set as a restaurant menu card instead of a wall
 * of cards: every dish on one typographic list, grouped by course, two
 * columns on desktop. It keeps the whole cookbook one glance tall (the old
 * card grid ran ~6,700 px) and leaves the photos to do their work on
 * demand.
 *
 * Mouse: hovering a dish lifts its photo, polaroid-framed, beside the
 * cursor; it trails on a spring, tilts with the hand's speed and wipes in
 * like ink when you move to the next dish. The rest of the list dims so
 * the eye stays on the line you're reading.
 * Touch: no hover to lean on, so each line carries a small thumbnail.
 *
 * A click opens the same quick-view overlay (and ?recipe= deep link) as
 * the /cookbook index; modified clicks fall through to the recipe page.
 */

const COURSE_ORDER: RecipeCategory[] = ["borrel", "voor", "hoofd", "bij", "dessert", "basis"];

const EASE = [0.16, 1, 0.3, 1] as const;

function formatMinutes(prep?: number, cook?: number) {
  const total = (prep ?? 0) + (cook ?? 0);
  if (!total) return null;
  if (total < 60) return `${total} min`;
  const h = Math.floor(total / 60);
  const m = total % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};
const rowVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const leaderVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE, delay: 0.15 } },
};

export function RecipeMenu({ recipes }: { recipes: Recipe[] }) {
  const t = useT();
  const locale = useLocale();
  const reduce = useReducedMotion() ?? false;
  const { openRecipe, open, close } = useRecipeOverlay(recipes);

  const [hovered, setHovered] = useState<Recipe | null>(null);
  // Photos are only fetched for dishes the visitor has actually pointed at.
  const [seen, setSeen] = useState<Set<string>>(() => new Set());

  // Cursor-follow for the floating photo: raw pointer -> spring -> tilt
  // from the spring's own velocity, so a flick of the wrist swings it.
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });
  const vx = useVelocity(x);
  const rotate = useTransform(vx, [-1600, 1600], [-9, 9], { clamp: true });

  const courseLabel: Record<RecipeCategory, string> = {
    borrel: t.cookbook.categoryDrink,
    voor: t.cookbook.categoryStarter,
    hoofd: t.cookbook.categoryMain,
    bij: t.cookbook.categorySide,
    dessert: t.cookbook.categoryDessert,
    basis: t.cookbook.categoryBasic,
  };

  // Dishes are numbered straight through the menu, course after course.
  const groups = COURSE_ORDER.map((course) => ({
    course,
    items: recipes.filter((r) => r.category === course),
  }))
    .filter((g) => g.items.length > 0)
    .map((g, gi, all) => ({
      ...g,
      first: 1 + all.slice(0, gi).reduce((n, prev) => n + prev.items.length, 0),
    }));

  const point = (r: Recipe) => {
    setHovered(r);
    if (r.heroImage && !seen.has(r.slug)) setSeen((s) => new Set(s).add(r.slug));
  };

  return (
    <div
      className="relative mt-14 md:mt-20"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onPointerLeave={() => setHovered(null)}
    >
      <div className="group/menu border-y-4 border-double border-ink/25 py-10 md:columns-2 md:gap-16 md:py-14">
        {groups.map(({ course, items, first }) => (
          <motion.section
            key={course}
            aria-label={courseLabel[course]}
            variants={groupVariants}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-8% 0px" }}
            className="mb-12 last:mb-0 md:mb-14"
          >
            <motion.div variants={rowVariants} className="mb-5 flex break-after-avoid break-inside-avoid items-center gap-4">
              <span aria-hidden className="h-px flex-1 bg-ink/15" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.36em] text-tattoo-red">
                {courseLabel[course]}
              </h3>
              <span aria-hidden className="h-px flex-1 bg-ink/15" />
            </motion.div>

            <ul>
              {items.map((r, i) => {
                const index = first + i;
                const time = formatMinutes(r.prepMinutes, r.cookMinutes);
                return (
                  <motion.li key={r.slug} variants={rowVariants} className="break-inside-avoid">
                    <a
                      href={localizedHref(`/recipes/${r.slug}`, locale)}
                      onClick={(e) => {
                        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                        e.preventDefault();
                        open(r.slug);
                      }}
                      onPointerEnter={(e) => e.pointerType === "mouse" && point(r)}
                      onFocus={() => point(r)}
                      onBlur={() => setHovered(null)}
                      className="group flex items-end gap-3 py-2.5 transition-opacity duration-300 focus-visible:outline-none pointer-fine:group-hover/menu:opacity-40 pointer-fine:hover:!opacity-100"
                    >
                      <span className="w-6 shrink-0 pb-[3px] font-mono text-[10px] tabular-nums text-ink/35">
                        {String(index).padStart(2, "0")}
                      </span>
                      {r.heroImage && (
                        <span className="relative hidden h-12 w-12 shrink-0 self-center overflow-hidden rounded-[3px] bg-ink/5 pointer-coarse:block">
                          <Image
                            src={r.heroImage}
                            alt=""
                            fill
                            sizes="48px"
                            loading="lazy"
                            className="object-cover"
                          />
                        </span>
                      )}
                      <span
                        className="min-w-0 font-serif text-ink transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-tattoo-red group-focus-visible:text-tattoo-red group-focus-visible:underline"
                        style={{ fontSize: "clamp(19px, 1.55vw, 23px)", lineHeight: 1.25 }}
                      >
                        {r.title}
                      </span>
                      <motion.span
                        aria-hidden
                        variants={leaderVariants}
                        className="mb-[6px] min-w-6 flex-1 origin-left border-b border-dotted border-ink/35"
                      />
                      <span className="shrink-0 pb-[3px] font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                        {time ?? ""}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.section>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.26em]">
        <span className="text-ink/45">
          {recipes.length} {t.cookbook.resultsMany}
        </span>
        <a
          href={localizedHref("/cookbook", locale)}
          className="group inline-flex items-center gap-2 text-ink/70 transition-colors hover:text-tattoo-red"
        >
          {t.cookbook.menuBrowse}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
            <path d="M1 5 H11 M8 1 L11 5 L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Floating polaroid that trails the cursor (mouse only). */}
      {!reduce && seen.size > 0 && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[70] hidden pointer-fine:block"
          style={{ x, y, rotate }}
        >
          <motion.div
            initial={false}
            animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.86 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="ml-10 w-[250px] -translate-y-1/2 bg-cream-warm p-3 pb-2 shadow-[0_24px_50px_-18px_rgba(20,16,12,0.6)] ring-1 ring-ink/[0.06]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/10">
              {recipes
                .filter((r) => r.heroImage && seen.has(r.slug))
                .map((r) => {
                  const active = hovered?.slug === r.slug;
                  // The new dish wipes up over the old one; the old layer
                  // only collapses (instantly, out of sight) once it is
                  // covered, ready to wipe in again next time.
                  return (
                    <motion.div
                      key={r.slug}
                      className="absolute inset-0"
                      initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.12, zIndex: 1 }}
                      animate={
                        active
                          ? {
                              clipPath: "inset(0% 0% 0% 0%)",
                              scale: 1,
                              zIndex: 2,
                              transition: { duration: 0.55, ease: EASE },
                            }
                          : {
                              clipPath: "inset(100% 0% 0% 0%)",
                              scale: 1.12,
                              zIndex: 1,
                              // Drop behind at once, collapse once covered.
                              transition: { default: { duration: 0, delay: 0.6 }, zIndex: { duration: 0 } },
                            }
                      }
                    >
                      <Image
                        src={r.heroImage as string}
                        alt=""
                        fill
                        sizes="250px"
                        className="object-cover"
                      />
                    </motion.div>
                  );
                })}
            </div>
            <div className="h-9 pt-2 text-center">
              <AnimatePresence mode="wait" initial={false}>
                {hovered && (
                  <motion.p
                    key={hovered.slug}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="truncate font-hand text-[15px] leading-none text-tattoo-red"
                  >
                    {courseLabel[hovered.category]}
                    {formatMinutes(hovered.prepMinutes, hovered.cookMinutes)
                      ? ` · ${formatMinutes(hovered.prepMinutes, hovered.cookMinutes)}`
                      : ""}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence>
        {openRecipe && <RecipeOverlay recipe={openRecipe} onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
