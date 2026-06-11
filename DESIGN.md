# DESIGN.md — Studio Toorn

## Color strategy
Drenched dark with committed gold. The surface is warm near-black; gold is not a 10% accent, it carries headings, rules, numerals and interactive states. Named reference: candlelit Michelin dining room at midnight, brass and flame on black steel.

Tokens (all neutrals tinted toward the gold hue, never pure black/white):
- `--ink` #0b0a08 (page base)
- `--ink-2` #121008 surface lift
- `--ink-3` #1a1610 raised surface
- `--gold` #c9a155 (primary accent, brand fixed)
- `--gold-2` #e8c87e (highlight, hover)
- `--gold-dim` rgba(201,161,85,.14) (hairlines)
- `--cream` #f2ecdd (primary text)
- `--cream-dim` rgba(242,236,221,.55) (secondary text)
- ::selection gold on ink.

## Typography
- Display: **Boska** (Fontshare). High-contrast, razor serifs: knife steel. Weights 300/400/500, italic for emphasis words.
- Body/UI: **General Sans** (Fontshare). Weights 300/400/500/600.
- No monospace anywhere. Caps reserved for short tracked labels (≤3 words, .25em+ tracking, 10–12px).
- Scale: fluid clamp(), ratio ≥1.3 between steps. H1 clamp(3rem, 8vw, 7.5rem). Body 15–17px, line-height 1.75+ on dark.
- Headlines max 2–3 lines, ultra-wide containers. Body copy ≤70ch.

## Layout
- Full-bleed sections, huge vertical rhythm: clamp(7rem, 14vh, 12rem) between chapters.
- Asymmetric by default: menu-style lists, sticky split (portrait left, chapters right), staggered portfolio widths. No identical card grids.
- The portfolio keeps live-iframe browser frames (signature element, carried over).

## Motion
- Lenis smooth scroll + GSAP ScrollTrigger. Ease: power4.out / expo.out only. No bounce.
- Hero: canvas ember field (gold sparks rising, cursor-reactive), masked line reveals.
- Scroll: word-by-word opacity scrub on statement paragraphs, scale 0.92→1 image entries, pinned stacking cards for process, marquee strip.
- Hover: floating image preview on menu items, magnetic CTAs, cursor morph (dot + ring, "VIEW" state on projects).
- prefers-reduced-motion: all of the above collapses to simple fades; canvas renders a static gradient.
- Mobile (<768px, pointer coarse): no custom cursor, no pinning, no hover-previews; everything stacks with simple reveals.

## Components
- Buttons: pill, cream-on-gold solid for primary, hairline gold outline for secondary; arrow nested in its own circular chip.
- Menu items (services): name + dotted leader + descriptor, hairline separators, floating preview image on hover.
- Browser frames (portfolio): dark chrome bar, three dots, address pill, live iframe scaled inside.
- Forms: underline inputs on dark, gold focus line, labels as small tracked caps.

## Bans
- No #000/#fff, no gradient text, no side-stripe borders, no glassmorphism by default, no icon card grids, no em dashes in copy, no emojis, no Playfair/Inter/Outfit/Space Grotesk.
