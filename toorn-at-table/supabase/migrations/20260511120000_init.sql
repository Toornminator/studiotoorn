-- Initial schema for TOORN at table.
--
-- Tables:
--   recipes, recipe_ingredients, recipe_steps  → het kookboek
--   events                                      → upcoming dinners
--   travel_locations                            → places + blog text on the map
--   newsletter_subscribers                      → email opt-ins (double opt-in)
--   contact_submissions                         → booking enquiries
--
-- Row level security is enabled on every table. Public anon access can read
-- published content and insert newsletter / contact rows. Writes to recipes,
-- events and travel use the service role from server actions / admin tools.

create extension if not exists "pgcrypto";

-- ───────────────────────── recipes ────────────────────────────────────────

create table if not exists recipes (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,
  title           text not null,
  intro           text,
  body            text,
  category        text not null check (
                     category in ('voor', 'hoofd', 'bij', 'dessert', 'borrel', 'basis')
                   ),
  seasons         text[] not null default '{}',
  difficulty      smallint check (difficulty between 1 and 5),
  prep_minutes    int,
  cook_minutes    int,
  servings        int default 4,
  hero_image      text,
  pairing         text,
  published_at    timestamptz,
  position        int not null default 0,
  created_at      timestamptz not null default now()
);

create table if not exists recipe_ingredients (
  id          uuid primary key default gen_random_uuid(),
  recipe_id   uuid not null references recipes(id) on delete cascade,
  group_name  text,
  position    int not null default 0,
  quantity    text,
  ingredient  text not null,
  note        text
);

create table if not exists recipe_steps (
  id          uuid primary key default gen_random_uuid(),
  recipe_id   uuid not null references recipes(id) on delete cascade,
  position    int not null default 0,
  body        text not null
);

create index if not exists recipes_slug_idx on recipes(slug);
create index if not exists recipe_ingredients_recipe_idx
  on recipe_ingredients(recipe_id, position);
create index if not exists recipe_steps_recipe_idx
  on recipe_steps(recipe_id, position);

-- ───────────────────────── events ─────────────────────────────────────────

create table if not exists events (
  id                uuid primary key default gen_random_uuid(),
  slug              text unique not null,
  title             text not null,
  date              date not null,
  start_time        time,
  location          text not null,
  city              text,
  menu_teaser       text,
  description       text,
  capacity          int,
  spots_available   int,
  price_eur_cents   int,
  hero_image        text,
  bookable          boolean not null default true,
  created_at        timestamptz not null default now()
);

create index if not exists events_date_idx on events(date);

-- ───────────────────────── travel_locations ──────────────────────────────

create table if not exists travel_locations (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        text not null,
  country     text,
  year        int,
  hero_image  text,
  map_x       numeric not null check (map_x between 0 and 100),
  map_y       numeric not null check (map_y between 0 and 100),
  intro       text,
  body        text,
  pull_quote  text,
  position    int not null default 0,
  created_at  timestamptz not null default now()
);

create index if not exists travel_locations_slug_idx on travel_locations(slug);

-- ───────────────────────── newsletter_subscribers ────────────────────────

create table if not exists newsletter_subscribers (
  id                  uuid primary key default gen_random_uuid(),
  email               text unique not null,
  confirmation_token  uuid not null default gen_random_uuid(),
  confirmed_at        timestamptz,
  unsubscribed_at     timestamptz,
  source              text,
  created_at          timestamptz not null default now()
);

create index if not exists newsletter_email_idx on newsletter_subscribers(email);

-- ───────────────────────── contact_submissions ───────────────────────────

create table if not exists contact_submissions (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  phone        text,
  event_date   date,
  guests       int,
  location     text,
  message      text not null,
  source       text default 'website',
  status       text not null default 'new'
                 check (status in ('new', 'responded', 'archived')),
  created_at   timestamptz not null default now()
);

create index if not exists contact_status_idx on contact_submissions(status, created_at desc);

-- ───────────────────────── row level security ───────────────────────────

alter table recipes               enable row level security;
alter table recipe_ingredients    enable row level security;
alter table recipe_steps          enable row level security;
alter table events                enable row level security;
alter table travel_locations      enable row level security;
alter table newsletter_subscribers enable row level security;
alter table contact_submissions   enable row level security;

-- Public read access for published content.
create policy "recipes_select_published"      on recipes
  for select using (published_at is not null);

create policy "recipe_ingredients_select"     on recipe_ingredients
  for select using (
    exists (
      select 1 from recipes r
      where r.id = recipe_id and r.published_at is not null
    )
  );

create policy "recipe_steps_select"           on recipe_steps
  for select using (
    exists (
      select 1 from recipes r
      where r.id = recipe_id and r.published_at is not null
    )
  );

create policy "events_select_all"             on events
  for select using (true);

create policy "travel_locations_select_all"   on travel_locations
  for select using (true);

-- Public can opt in to the newsletter and send a contact enquiry.
create policy "newsletter_public_insert"      on newsletter_subscribers
  for insert with check (true);

create policy "contact_public_insert"         on contact_submissions
  for insert with check (true);

-- Everything else (updates, deletes, admin reads) requires the service role
-- which bypasses RLS server-side.
