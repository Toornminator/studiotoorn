# TOORN at table — Brand guide

The complete visual + verbal system behind **toornattable.com**. Every value
here is pulled straight from the live codebase, so it is exact and current.

- Source of truth for tokens: `src/styles/tokens.css`
- Fonts: `src/lib/fonts.ts`
- Share card: `scripts/build-og-image.py`

_Last updated: June 2026_

---

## 1. The idea in one line

A Michelin-trained private chef on the Costa del Sol, told in the voice of an
old-school tattoo flash poster. Warm paper, heavy slab type, hand-scrawled red
notes, a fork for a cursor. Honest, raw, intimate. Not corporate, not catering.

**Tagline:** _Real food, by hand, to your table._
**Supporting line:** _Art on a plate._
**Locator:** _Private chef · Costa del Sol · Est. 2023_

---

## 2. Logo

- **Mark:** chef-skull-knife monogram (skull in a chef's toque over a crossed
  knife, a drip of red).
- **File:** `/public/images/chef_skull_knife_transparent.png` (transparent PNG,
  785 × 800).
- **Use:** NavBar, Footer, Preloader, the favicon/app icons, and the share card.
- **Clear space:** keep at least the height of the toque clear on all sides.
- **Backgrounds:** works on cream (`#f4ede0`) and on near-black (`#0a0a0a`).
  The transparent PNG carries its own light edges, so it never needs a plate.
- **Don't:** recolour it, add effects, stretch it, or set it on a busy photo.

---

## 3. Colour palette

The whole site runs on a warm, near-monochrome paper base with a small set of
tattoo-ink accents. **No blue/purple tech gradients, ever.**

### Core (used everywhere)

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `cream` | `#F4EDE0` | 244, 237, 224 | Page background, light text on dark |
| `cream-warm` | `#E8DCC4` | 232, 220, 196 | Cards, panels, raised surfaces |
| `ink` | `#1A1A1A` | 26, 26, 26 | Body text, buttons, borders |

### Accents (use sparingly, with intent)

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `tattoo-red` | `#C8202A` | 200, 32, 42 | Primary accent: eyebrows, hand notes, hovers, CTAs |
| `tattoo-mustard` | `#E5A823` | 229, 168, 35 | Warm gold: review stars, small highlights |
| `tattoo-jade` | `#2E7D5B` | 46, 125, 91 | Success / positive states |
| `tattoo-navy` | `#1E3A5F` | 30, 58, 95 | Rare deep accent (use very little) |

### Share card (OpenGraph / Twitter) only

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| OG ink | `#0A0A0A` | 10, 10, 10 | Card backdrop (a touch darker than `ink`) |
| OG gold | `#C9A86A` | 201, 168, 106 | Corner brackets + accent on the dark card |
| cream / tattoo-red | as above | | Wordmark + eyebrow on the card |

**Opacity ramp.** Most "greys" are `ink` at reduced alpha rather than separate
colours. Common steps: text `ink/85`, secondary `ink/70`, muted `ink/55`,
faint `ink/45`, hairline borders `ink/15`. Mirror with `cream/xx` on dark.

---

## 4. Typography

Four Google fonts, all weight **400**, latin subset. Loaded via `next/font`
and exposed as CSS variables.

| Role | Font | CSS var / class | Used for |
|------|------|-----------------|----------|
| **Display** | Alfa Slab One | `--font-display` / `font-display` | Hero wordmark, section H2s, big numbers |
| **Body / serif** | IM Fell English | `--font-serif` / `font-serif` | Running text, intros, pull quotes (has a real italic) |
| **Mono** | Special Elite | `--font-mono` / `font-mono` | Eyebrows, meta, form labels, nav |
| **Hand** | Permanent Marker | `--font-hand` / `font-hand` | Nick's red scrawled notes + signature |

Notes:
- **Default body font** = IM Fell English, falling back to `Georgia, "Times New
  Roman", serif`.
- **Alfa Slab One ships only a Roman 400 cut.** `font-synthesis: none` is set
  on `.font-display` so the browser never fakes italic/bold. For italic display
  feeling, use IM Fell English italic instead.
- Where the brand "feels" italic and slab at once (hero, About headline), that
  is Alfa Slab One set in `italic` deliberately on the `<h1>` only.

### Type scale (fluid, `clamp(min, vw, max)`)

| Element | Size |
|---------|------|
| Hero wordmark "TOORN" | `clamp(72px, 14vw, 220px)` |
| About headline | `clamp(40px, 6.5vw, 84px)` |
| Section H2 (display) | `clamp(36px, 5vw, 64px)` |
| Sub-headings (H3) | `clamp(28px, 3.4vw, 42px)` |
| Closing pull quote (serif italic) | `clamp(36px, 5.5vw, 72px)` |
| Lead / intro paragraph | `clamp(17px, 1.25vw, 19px)` |
| Body paragraph | `16–19px`, line-height `1.5–1.6` |
| **Eyebrow / meta (mono)** | `10–11px`, UPPERCASE, letter-spacing `0.28–0.32em`, colour `tattoo-red` (or `ink/45–55`) |

The mono eyebrow in tattoo-red, all-caps, wide-tracked, is the single most
recurring "tell" of the brand. Almost every section opens with one.

---

## 5. Voice & tone

Anthony Bourdain meets Marco Pierre White. First person, direct, honest about
the ugly moments, food as the spine of every story. Short sentences. Fragments
are welcome. Starting a line with "But" / "And" / "Maar" / "Y" is fine.

**Hard rules**
- **No em-dashes (`—`) anywhere.** Use a full stop and a new sentence, or a
  comma. This is enforced across all content and is checked on every change.
- **Trilingual, always together.** Every piece of content exists as
  `{ en, es, nl }`. English is the default and the canonical voice; Spanish
  skews Andalusian and warm; Dutch is plain and intimate. Never ship one
  language without the other two.
- Polaroid captions and hand notes: short, never a sentence longer than a breath.

**Examples of the voice (live on the site):**
- "Not catering. A memory." → now "Real food, by hand, to your table."
- "A tomato doesn't sit at the side of the plate. A tomato is the plate."
- "First time I made this it split, here's why."

---

## 6. Imagery, texture & motifs

- **Tattoo flash stickers.** Old-school American-traditional flash art (shrimp,
  chili, knife, whisk, lobster, shell) scattered as draggable stickers. They
  carry the "rock & roll" half of the brand. Disabled on touch / small screens.
- **Polaroids.** Real photos in a paper frame, slightly rotated, with a
  red Permanent-Marker caption. The human, off-the-cuff layer.
- **Paper background.** A subtle noise/grain over cream (off below 768px for
  performance). The site should always feel like printed paper, not a screen.
- **Recipe & food photography.** Warm, natural light, real plates on wood /
  stone / cream linen. Honest, not over-styled. Shot to read on cream.
- **Drop shadows** are soft and low (see §7), never glossy or neon.

---

## 7. Surfaces, shadows, spacing, motion

### Shadows (tokens)
| Token | Value |
|-------|-------|
| `shadow-paper` | `0 2px 4px rgba(26,26,26,.06), 0 0 0 1px rgba(26,26,26,.04)` |
| `shadow-sticker-rest` | `0 4px 12px rgba(26,26,26,.12)` |
| `shadow-sticker-lifted` | `0 12px 32px rgba(26,26,26,.2)` |

### Borders & radius
- Hairline borders: `1px` solid `ink/12–20`.
- Cards / menu panels: `border` + `bg-cream-warm/30–60`, small radius (`4px`)
  or `rounded-2xl` for the speech balloon.
- Buttons / pills: fully rounded (`rounded-full`), ink fill, cream text,
  hover → `tattoo-red`.

### Layout
- Content max-width: `max-w-6xl` (~1152px) for most sections, `max-w-4xl` for
  reading-width blocks (FAQ, closing).
- Generous vertical rhythm: section padding bottom `pb-32` (mobile) →
  `pb-48` (desktop). The site breathes.
- Section headers sit under a top hairline `border-t border-ink/15`.

### Motion
- Reveal on scroll: fade + 28px rise, ease `[0.16, 1, 0.3, 1]`, ~0.9s.
- Word-by-word reveal on big display headings.
- **Custom cursor:** a warm-grey fork (`#7A756C`) that tracks the pointer 1:1,
  morphing to a ring over links and a grab icon over draggable stickers.
- Smooth scroll (Lenis) on desktop only; native momentum on touch.
- Respect `prefers-reduced-motion` everywhere.

---

## 8. UI building blocks (quick reference)

- **Eyebrow:** `font-mono`, `text-[10px]`, `uppercase`, `tracking-[0.32em]`,
  `text-tattoo-red`.
- **Primary button:** `rounded-full bg-ink px-9 py-5 font-mono text-[11px]
  uppercase tracking-[0.28em] text-cream hover:bg-tattoo-red`.
- **Text link / CTA arrow:** mono caps, `ink/70` → `tattoo-red` on hover, with
  a 14×10 arrow that nudges right.
- **Card:** `border border-ink/12 bg-cream-warm/60`, hero image on top, mono
  eyebrow + display title + serif intro inside.
- **Hand note:** `font-hand text-tattoo-red`, slight rotation (`-1.5°` to `-6°`).

---

## 9. Do / Don't

**Do**
- Lead sections with a red mono eyebrow.
- Keep it warm, papery, hand-made.
- Use accents like seasoning: a little red goes a long way.
- Write in all three languages, in Nick's voice, with zero em-dashes.

**Don't**
- No blue/purple, no tech gradients, no glassmorphism, no neon glow.
- No fake bold/italic on Alfa Slab One.
- No stock-y, over-lit, over-styled food photos.
- No corporate "catering" tone. This is one chef, one table, a memory.

---

## 10. Asset & font sourcing

- **Fonts (Google Fonts, weight 400):** Alfa Slab One · IM Fell English
  (normal + italic) · Special Elite · Permanent Marker.
- **Logo + icons:** `/public/images/chef_skull_knife_transparent.png`,
  `/public/icon.png`, `/public/apple-icon.png`, favicon.
- **Share card generator:** `scripts/build-og-image.py` (regenerates
  `src/app/opengraph-image.png` + `twitter-image.png`, 1200 × 630).
- **Socials:** instagram.com/toornattable · tiktok.com/@toornattable ·
  facebook profile · linkedin.com/in/nick-toorn-973351195.
