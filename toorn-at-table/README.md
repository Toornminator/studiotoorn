# TOORN at table

Private chef brand site for Nick Toorn (Costa del Sol). Tattoo-flash-meets-
Michelin-cookbook aesthetic: cream paper base, ink-black serif headlines and
draggable tattoo flash stickers that scroll with the page.

## Tech stack

- Next.js 16 (App Router) + TypeScript + Tailwind v4
- React 19.2
- Fonts via `next/font/google`: Fraunces (display), Instrument Serif (body),
  JetBrains Mono (UI), Caveat (handwritten notes)
- `@use-gesture/react` + `@react-spring/web` for sticker drag physics
- `framer-motion` for page-level reveals + the custom cursor
- `lenis` for smooth scroll
- `zustand` (+ persist middleware) for sticker positions in localStorage

## Run it

```bash
npm install
npm run dev   # turbopack dev server on http://localhost:3000
npm run build
```

## Where things live

```
src/
  app/
    layout.tsx          mounts SmoothScroll → PaperBackground → main →
                        StickerProvider → CustomCursor
    page.tsx            renders <Hero />
    globals.css         Tailwind + tokens + Lenis baseline
  components/
    hero/Hero.tsx       nav, TOORN headline, subtitle, tagline, note
    layout/
      PaperBackground.tsx  cream paper + SVG grain
      CustomCursor.tsx     ink-droplet cursor (dot / link / grab)
      SmoothScroll.tsx     Lenis wrapper, opt-out on reduced-motion
    stickers/
      Sticker.tsx          spring-driven draggable sticker
      StickerProvider.tsx  resolves vw/vh to pixel coords, renders all
      sticker-config.ts    the source of truth for positions
      useStickerStore.ts   Zustand store, persists to "toorn-stickers"
  lib/
    fonts.ts          all next/font configs
    utils.ts          cn() helper
  styles/
    tokens.css        @theme: colors, font aliases, paper shadows
public/
  stickers/           placeholder tattoo SVGs (rose, swallow, anchor,
                      dagger, heart) — to be replaced with Nick's art
```

## Phase 1 — what's done

- Project + design system (cream/ink palette, four-font stack, paper shadows)
- Paper background with fractal-noise grain + soft vignette
- Sticker system: drag physics, tilt clamp, hover scale, persisted positions
- 5 placeholder American-traditional tattoo stickers
- Hero: sticky mono nav, letter-by-letter TOORN reveal, staggered subtitle
  and tagline, hand-written "psst" note
- Custom ink cursor with mode transitions (dot / link / grab) — disabled on
  touch devices
- Lenis smooth scroll — disabled when `prefers-reduced-motion: reduce`

## Adding a sticker

1. Drop a 200×200 viewBox SVG into `public/stickers/<name>.svg`.
2. Append an entry to `stickerLayout` in
   `src/components/stickers/sticker-config.ts`:

   ```ts
   {
     id: "<unique>",
     svgPath: "/stickers/<name>.svg",
     alt: "Describes the art",
     initialRotation: -10,
     posVw: 50,  // % of viewport width, top-left anchored
     posVh: 30,  // % of viewport height
     size: 130,
   }
   ```

3. That's it — the provider picks it up and the store will persist any new
   drag positions automatically.

## How Nick can hand off real tattoo art

Each sticker should be a single SVG file with:

- **Transparent background** (no white rectangle behind the art)
- **Flat colors** — no gradients, no raster effects
- **Thick black outlines** (≈3–4px on a 200×200 viewBox so they read at
  120px on screen)
- ViewBox `0 0 200 200` (or any square viewBox — the layout sizes them
  uniformly)
- File names lowercase, kebab-case: `rose-with-banner.svg`

Drop the files in `public/stickers/` and update `sticker-config.ts` to point
at the new paths. No code changes beyond that.

If a sticker should re-center for everyone (e.g. you ship a new design and
want existing visitors to see it in its intended spot), clear the persisted
positions by calling `useStickerStore.getState().resetAll()` from a
temporary admin button, or bump the persist `name` in `useStickerStore.ts`.

## What's next — phase 2 and beyond

- **About / Nick's story** — Michelin background, move to Spain, timeline
- **Events grid** — upcoming dinners with hover-to-peek cards
- **Het Kookboek** — recipes section backed by Supabase
  (`recipes`, `ingredients`, `steps`)
- **Contact** — booking form posting to `contact_submissions` (Supabase) +
  transactional confirmation via Resend
- **Newsletter** — `newsletter_subscribers` with double opt-in via Resend
- **i18n** — Dutch is primary, English + Spanish as additional locales

## Hooking up Supabase later

1. `npm install @supabase/supabase-js`
2. Add a server-only Supabase client in `src/lib/supabase.ts` using
   environment variables `NEXT_PUBLIC_SUPABASE_URL` and
   `SUPABASE_SERVICE_ROLE_KEY` (or anon key for client reads).
3. Drop migrations into `supabase/migrations/` describing the schemas above.
4. Read recipes / events in Server Components (Next.js 16 prefers async
   data fetching at the component boundary).
5. Mutations (newsletter signup, contact form) go through Server Actions
   that call Resend for confirmation emails.
