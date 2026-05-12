/**
 * Push the static concept content in src/content/* into Supabase. Idempotent
 * — every record upserts on its unique slug, so it's safe to rerun.
 *
 * Usage:
 *   1. Make sure .env.local has SUPABASE_URL + the SECRET (server) key.
 *   2. Make sure the SQL migration in supabase/migrations/ has been applied.
 *   3. `npm run seed`
 *
 * Run individual sets:
 *   `npm run seed -- recipes`
 *   `npm run seed -- events`
 *   `npm run seed -- travel`
 */
import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { recipes } from "../src/content/recipes";
import { events } from "../src/content/events";
import { travelLocations } from "../src/content/travel";

config({ path: ".env.local" });

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SECRET =
  process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!URL || !SECRET) {
  console.error(
    "[seed] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(URL, SECRET, {
  auth: { persistSession: false },
});

const targets = new Set(
  process.argv.slice(2).length > 0
    ? process.argv.slice(2)
    : ["recipes", "events", "travel"],
);

async function seedRecipes() {
  console.log(`[seed] recipes: ${recipes.length}`);

  for (const r of recipes) {
    // Upsert the recipe row, get its id back.
    const { data: row, error: rErr } = await supabase
      .from("recipes")
      .upsert(
        {
          slug: r.slug,
          title: r.title,
          intro: r.intro ?? null,
          body: r.body ?? null,
          category: r.category,
          seasons: r.seasons,
          difficulty: r.difficulty ?? null,
          prep_minutes: r.prepMinutes ?? null,
          cook_minutes: r.cookMinutes ?? null,
          servings: r.servings ?? null,
          hero_image: r.heroImage ?? null,
          pairing: r.pairing ?? null,
          published_at: new Date().toISOString(),
        },
        { onConflict: "slug" },
      )
      .select("id")
      .single();

    if (rErr || !row) {
      console.error(`[seed]   ${r.slug}: ${rErr?.message}`);
      continue;
    }

    // Replace ingredients + steps wholesale so the seed is idempotent.
    await supabase.from("recipe_ingredients").delete().eq("recipe_id", row.id);
    await supabase.from("recipe_steps").delete().eq("recipe_id", row.id);

    if (r.ingredients.length > 0) {
      const { error } = await supabase.from("recipe_ingredients").insert(
        r.ingredients.map((i, position) => ({
          recipe_id: row.id,
          group_name: i.group ?? null,
          position,
          quantity: i.quantity ?? null,
          ingredient: i.ingredient,
          note: i.note ?? null,
        })),
      );
      if (error) console.error(`[seed]   ${r.slug} ingredients: ${error.message}`);
    }

    if (r.steps.length > 0) {
      const { error } = await supabase.from("recipe_steps").insert(
        r.steps.map((s) => ({
          recipe_id: row.id,
          position: s.position,
          body: s.body,
        })),
      );
      if (error) console.error(`[seed]   ${r.slug} steps: ${error.message}`);
    }

    console.log(`[seed]   ✓ ${r.slug}`);
  }
}

async function seedEvents() {
  console.log(`[seed] events: ${events.length}`);

  const { error } = await supabase.from("events").upsert(
    events.map((e) => ({
      slug: e.slug,
      title: e.title,
      date: e.date,
      start_time: e.startTime ?? null,
      location: e.location,
      city: e.city ?? null,
      menu_teaser: e.menuTeaser ?? null,
      description: e.description ?? null,
      capacity: e.capacity ?? null,
      spots_available: e.spotsAvailable ?? null,
      price_eur_cents: e.priceEur != null ? Math.round(e.priceEur * 100) : null,
      hero_image: e.heroImage ?? null,
      bookable: e.bookable,
    })),
    { onConflict: "slug" },
  );

  if (error) console.error(`[seed]   ${error.message}`);
  else console.log(`[seed]   ✓ ${events.length} events`);
}

async function seedTravel() {
  console.log(`[seed] travel locations: ${travelLocations.length}`);

  const { error } = await supabase.from("travel_locations").upsert(
    travelLocations.map((l, position) => ({
      slug: l.slug,
      name: l.name,
      country: l.country ?? null,
      year: l.year ?? null,
      hero_image: l.heroImage ?? null,
      map_x: l.mapX,
      map_y: l.mapY,
      intro: l.intro ?? null,
      body: l.body ?? null,
      pull_quote: l.pullQuote ?? null,
      position,
    })),
    { onConflict: "slug" },
  );

  if (error) console.error(`[seed]   ${error.message}`);
  else console.log(`[seed]   ✓ ${travelLocations.length} travel locations`);
}

async function main() {
  console.log(`[seed] target: ${URL}`);
  if (targets.has("recipes")) await seedRecipes();
  if (targets.has("events")) await seedEvents();
  if (targets.has("travel")) await seedTravel();
  console.log("[seed] done.");
}

main().catch((err) => {
  console.error("[seed] fatal:", err);
  process.exit(1);
});
