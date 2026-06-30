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

## Data & forms

All content (recipes, events, travel, weekly menu, testimonials) is authored
in `src/content/*` and shipped with the build — no database, no CMS. Pages
are statically prerendered per locale. Forms (contact, booking, newsletter)
submit straight to Netlify Forms; submissions appear in the Netlify dashboard.
The site needs no environment variables.

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build
```

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
| 06 | Aan tafel (booking)    | Netlify Forms                  |
|    | Footer (nieuwsbrief)   | Netlify Forms                  |

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
    api/newsletter/confirm/       legacy redirect stub (old opt-in links)
    actions/                      contact + locale helpers
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
    content/                      data access: resolves static content
    types.ts                      domain shapes
  styles/tokens.css               @theme colours / fonts / shadows
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
- Booking form posts to Netlify Forms; Nick gets the lead in the Netlify
  Forms dashboard (notifications + spam filtering configured there)
- Newsletter signup posts to Netlify Forms (no confirmation step)
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

- **Recipes** → edit `src/content/recipes.ts` and set `publishedAt`. The
  shape matches `LocalisedRecipe` in `src/lib/types.ts` (EN/ES/NL trio per
  field). A new slug is picked up by `generateStaticParams` on the next build.
- **Events** → `src/content/events.ts`.
- **Travel** → `src/content/travel.ts`. `mapX` / `mapY` are 0–100
  percentages on the 800×500 atlas viewBox.

## Phase 3 ideas

- Recipe photography → drop into `public/recipes/<slug>.jpg` and set
  `heroImage` on the recipe to upgrade the card from typographic to
  photographic.
- Travel blog images + lightbox.
- Sticker pack download for guests.
- i18n: English + Spanish next to Dutch.
- Stripe Checkout for event tickets.
