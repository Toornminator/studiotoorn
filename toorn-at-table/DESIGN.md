# DESIGN.md — TOORN at table

Visual system as implemented. Source of truth for tokens: `src/styles/tokens.css`; fonts: `src/lib/fonts.ts`. Full verbal + asset guide: `BRAND.md`.

## Theme

Warm paper. The site reads as printed matter: cream stock, ink type, tattoo-red marker. Light by conviction (sun, paper, Andalucía), with one sanctioned dark register: the near-black "evening service" world of the OG share card (`#0A0A0A` ink + `#C9A86A` gold + cream), usable when the narrative dims the lights.

## Color

| Token | Value | Role |
|---|---|---|
| `cream` | `#F4EDE0` | Page background; light text on dark |
| `cream-warm` | `#E8DCC4` | Cards, panels, raised surfaces |
| `ink` | `#1A1A1A` | Body text, buttons, borders |
| `tattoo-red` | `#C8202A` | Primary accent: eyebrows, hand notes, hovers, CTAs |
| `tattoo-mustard` | `#E5A823` | Stars, small highlights |
| `tattoo-jade` | `#2E7D5B` | Success states |
| `tattoo-navy` | `#1E3A5F` | Rare deep accent |
| OG ink | `#0A0A0A` | Dark-register backdrop |
| OG gold | `#C9A86A` | Dark-register accent (brackets, hairlines) |

Greys are `ink` at reduced alpha: text 85, secondary 70, muted 55, faint 45, hairlines 15. Mirror with `cream/xx` on dark. Never blue/purple gradients, never pure white.

## Typography

Four Google families, all weight 400, loaded via `next/font`:

| Role | Family | Var |
|---|---|---|
| Display | Alfa Slab One (no synthetic bold/italic; deliberate `italic` only on hero/About h1) | `--font-display` |
| Body/serif | IM Fell English (+ real italic) | `--font-serif` |
| Mono | Special Elite | `--font-mono` |
| Hand | Permanent Marker | `--font-hand` |

Fluid scale: hero `clamp(72px,14vw,220px)`, section H2 `clamp(36px,5vw,64px)`, H3 `clamp(28px,3.4vw,42px)`, pull quote `clamp(36px,5.5vw,72px)`, body 16–19px/1.5–1.6. Signature tell: mono eyebrow, 10–11px, UPPERCASE, tracking 0.28–0.32em, tattoo-red.

## Surfaces & elevation

- Hairlines `1px` `ink/12–20`; section headers under a `border-t border-ink/15`.
- Cards: border + `bg-cream-warm/30–60`, radius 4px (or `rounded-2xl` for speech balloons).
- Buttons: `rounded-full bg-ink` mono-caps cream text, hover `tattoo-red`.
- Shadows: `shadow-paper`, `shadow-sticker-rest`, `shadow-sticker-lifted` (tokens). Soft, low, never glossy.
- Paper grain overlay site-wide (off below 768px).

## Layout

`max-w-6xl` sections, `max-w-4xl` reading blocks. Vertical rhythm `pb-32` → `pb-48`. Floating rotated polaroids on `lg:`+. Draggable tattoo-flash stickers on fine pointers only.

## Motion

- Reveal: fade + 28px rise, `cubic-bezier(0.16,1,0.3,1)`, ~0.9s; word-by-word slide-up for display headings (`Reveal` / `RevealWords`).
- Lenis smooth scroll desktop only. Custom fork cursor (fine pointers). Marquee is pure CSS.
- Everything collapses gracefully under `prefers-reduced-motion`.
- View Transitions for route changes (teaser photo morphs into recipe hero).

## Components quick reference

Eyebrow, primary button, arrow text-link, paper card, hand note (`font-hand text-tattoo-red`, rotated -1.5° to -6°), Polaroid, Marquee, Counter, Magnetic, Parallax. See `BRAND.md` §8 for exact classes.
