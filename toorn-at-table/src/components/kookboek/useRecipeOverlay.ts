"use client";

import { useEffect, useRef, useState } from "react";
import type { Recipe } from "@/lib/types";

/**
 * Quick-view state for a recipe list: which recipe is open in the overlay,
 * kept in sync with `?recipe=<slug>` so a shared link opens that recipe and
 * the open one can be copied straight from the address bar. Shared by the
 * home-page menu and the /cookbook index.
 */
export function useRecipeOverlay(recipes: Recipe[]) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // On first load, open whatever ?recipe=<slug> points at.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("recipe");
    // Reading the URL has to wait for the client (no window on the server),
    // so this one setState-in-effect is the point, not a cascade.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (slug && recipes.some((r) => r.slug === slug)) setOpenSlug(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reflect the open recipe in the URL (no history entry, no scroll). Skips
  // the very first run so it never wipes the param the loader just read.
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

  const openRecipe = openSlug ? recipes.find((r) => r.slug === openSlug) ?? null : null;

  return {
    openRecipe,
    open: (slug: string) => setOpenSlug(slug),
    close: () => setOpenSlug(null),
  };
}
