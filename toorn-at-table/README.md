# TOORN at table

Private chef brand site for Nick Toorn (Costa del Sol). Tattoo-flash-meets-
Michelin-cookbook aesthetic: cream paper base, ink-black serif headlines and
draggable tattoo flash stickers that scroll with the page.

## Tech stack

- Next.js 16 (App Router) + TypeScript + Tailwind v4
- React 19.2 (useActionState, useFormStatus, server actions)
- Fonts via `next/font/google`: Fraunces (display), Instrument Serif (body),
  JetBrains Mono (UI), Caveat (handwritten notes)
- `@use-gesture/react` + `@react-spring/web` for sticker drag physics
- `framer-motion` for page reveals, the cursor and the overlay transitions
- `lenis` for smooth scroll
- `zustand` (+ persist middleware) for sticker positions in localStorage
- `@supabase/supabase-js` for the recipe / event / travel / forms backend
- `resend` for transactional newsletter + booking emails

## Run it

```bash
npm install
cp .env.example .env.local   # fill in real values when you have them
npm run dev                  # http://localhost:3000
npm run build
```

The site works without any env vars — it falls back to the static content in
`src/content/*` and the contact form returns a "mail me direct" message.
As soon as Supabase + Resend are wired the site routes through them
automatically.

## Page flow

| #  | Section                | Source                        |
|----|------------------------|-------------------------------|
|    | Hero                   | static                         |
| 01 | Over Nick              | static                         |
| 02 | Tijdlijn               | `timeline-data.ts`             |
| 03 | Reizen                 | `getTravelLocations()`         |
| 04 | Het Kookboek           | `getRecipes()`                 |
| 05 | Events                 | `getEvents()`                  |
|    | Tussenrust + CTA       | static                         |
| 06 | Aan tafel (booking)    | server action + Resend         |
|    | Footer (nieuwsbrief)   | server action + Resend         |

Recipes, events and travel posts each open as a focused overlay modal —
single-page, no extra routes.

## Where things live

```
src/
  app/
    layout.tsx                    SmoothScroll → PaperBg → NavBar → main
                                  → Footer → StickerProvider → CustomCursor
    page.tsx                      Hero / About / Timeline / Travel /
                                  Kookboek / Events / Closing / Contact
    api/newsletter/confirm/       GET /api/newsletter/confirm?token=...
    actions/                      server actions (contact, newsletter)
  components/
    about/                        portrait, timeline, closing pull-quote
    contact/                      booking form
    events/                       list + overlay
    hero/                         TOORN reveal + handwritten note
    kookboek/                     filtered grid + recipe overlay
    layout/                       nav, footer, paper bg, cursor,
                                  smooth-scroll, newsletter form
    stickers/                     drag system + provider
    travel/                       atlas SVG + interactive markers + overlay
  content/                        static recipes / events / travel
  lib/
    content/                      data access: tries Supabase, falls back
    supabase/                     client + server clients
    types.ts                      domain shapes
  styles/tokens.css               @theme colours / fonts / shadows
supabase/migrations/              SQL — recipes, events, travel, forms, RLS
public/
  images/                         portrait, logo-dark
  stickers/                       14 processed tattoo flash PNGs
```

## Phase 1 + 2 — what's done

- Cream paper foundation with fractal-noise grain + soft vignette
- Sticker system (drag, tilt, lift, persisted positions) with **real**
  tattoo flash artwork — 14 PNGs stripped of the ChatGPT backdrop, sized
  for the hero and per-chapter use
- Hero with letter-by-letter TOORN reveal
- Over Nick portrait strook + scroll-revealed Tijdlijn
- Reizen atlas — hand-drawn Mediterranean basin with pin markers + blog
  overlay (locations added via `src/content/travel.ts`)
- Het Kookboek — filterable index + full recipe overlay (intro, meta,
  grouped ingredients, numbered steps, pairing)
- Events — typographic agenda with capacity + overlay → prefilled
  booking form
- Booking form with server action: validates, stores in Supabase, mails
  notification to Nick + confirmation to the visitor (Resend)
- Newsletter signup with double opt-in via Resend; `/api/newsletter/confirm`
  flips `confirmed_at` and shows a banner on the home page
- Custom ink cursor (dot / link / grab)
- Lenis smooth scroll, off when `prefers-reduced-motion: reduce`
- Sticky brand-wide nav, anchor scroll-margin so jumps don't hide titles

## Adding a sticker

1. Drop a PNG in `public/stickers/<name>.png` (transparent, white sticker
   border kept, 720px on the longest edge).
2. Append to `stickerLayout` in `src/components/stickers/sticker-config.ts`:

   ```ts
   {
     id: "<unique>",
     imagePath: "/stickers/<name>.png",
     alt: "Describes the art",
     initialRotation: -10,
     posVw: 50, posVh: 30,
     height: 160, aspect: 0.7,
     hideBelowVw: 768, // optional, for desktop-margin stickers
   }
   ```

## Adding content

- **Recipes** → edit `src/content/recipes.ts` or insert into the Supabase
  `recipes` (+ `recipe_ingredients` + `recipe_steps`) tables and set
  `published_at`. The shape matches `Recipe` in `src/lib/types.ts`.
- **Events** → `src/content/events.ts` or Supabase `events` table.
- **Travel** → `src/content/travel.ts` or Supabase `travel_locations`.
  `mapX` / `mapY` are 0–100 percentages on the 800×500 atlas viewBox.

## Wiring Supabase (when ready)

1. Create a Supabase project, run the SQL in
   `supabase/migrations/20260511120000_init.sql` against it (via the
   dashboard editor or `supabase db push` if you use the CLI).
2. Copy `.env.example` → `.env.local`, fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
3. Restart dev. The content layer auto-switches from static fallback to
   live data.

## Wiring Resend (when ready)

1. Create a Resend account, verify a sending domain.
2. Add to `.env.local`:
   - `RESEND_API_KEY`
   - `RESEND_FROM_ADDRESS="TOORN at table <hello@your-domain>"`
   - `NOTIFICATION_EMAIL=nick@your-domain`  (where contact-form leads land)
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`  (used to build the
     newsletter confirmation links — without it the action falls back to
     the incoming request host)

## Phase 3 ideas

- Recipe photography → drop into `public/recipes/<slug>.jpg` and set
  `heroImage` on the recipe to upgrade the card from typographic to
  photographic.
- Travel blog images + lightbox.
- Sticker pack download for guests.
- i18n: English + Spanish next to Dutch.
- Stripe Checkout for event tickets.
