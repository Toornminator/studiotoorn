# DESIGN.md — Studio Toorn

## Color strategy
Warm ivory luxury, committed gold. Named reference: a sunlit gallery-atelier on the Costa del Sol at noon; sun-bleached plaster, linen, brass details, espresso ink. All neutrals tinted toward the gold hue, never pure black/white.

Tokens:
- `--paper` #f5f0e4 (page base, warm ivory)
- `--paper-2` #ede6d4 (alternate sections, marquee strip)
- `--paper-3` #fbf8f0 (raised cards, browser frames)
- `--ink` #211b10 (primary text, espresso)
- `--ink-mid` rgba(33,27,16,.64), `--ink-faint` rgba(33,27,16,.40)
- `--gold` #9a7627 (display accents, italic em words)
- `--gold-deep` #7a5d1d (small labels, eyebrows; higher contrast)
- `--gold-bright` #c9a155 (button fills, decorative strokes on dark media)
- `--hairline` rgba(154,118,39,.24)
- Shadows: soft and diffused only: 0 30px 70px -34px rgba(33,27,16,.28)
- ::selection ink on paper.

## Typography
- Display: **Boska** (Fontshare), weights 300/400/500 + italics. Body/UI: **General Sans** 300-600.
- No monospace. Caps only for short tracked labels.
- H1 clamp(2.8rem, 7.2vw, 6.8rem), max 2-3 lines. Body ≤70ch, line-height 1.85+.
- Inline image pill inside the hero headline (rounded-full photo inside the H1).

## Layout
- Tasting-menu narrative: hero, marquee, Le Menu (services as menu rows), live-iframe portfolio, statements, chef, stacked process courses, guest book, FAQ, reservations, giant footer.
- Section rhythm alternates paper / paper-2; chapter spacing clamp(7rem,14vh,12rem).
- Course tracker fixed right edge (desktop) showing current chapter 01-08.

## Motion
- Lenis + GSAP ScrollTrigger; power4/expo ease only.
- Hero: gold dust-mote canvas (cursor-reactive), masked line reveals, scroll-exit parallax.
- Word-by-word opacity scrub statements; sticky stacking process cards; dual-direction marquee; magnetic buttons; cursor morph with VIEW state; footer giant text fills with ink on scrub.
- FAQ accordion animates grid-template-rows (never height).
- prefers-reduced-motion collapses everything to simple fades; canvas off.

## Conversion
- Primary CTA framing: free 30 minute "tasting" call. WhatsApp first.
- Sticky WhatsApp chip appears after one viewport of scroll.
- "Now booking projects for {next month}" availability chip in contact.
- FAQ (6 items) with FAQPage JSON-LD.

## Bans
- No pure #000/#fff, no gradient text, no side-stripe borders, no glassmorphism as decoration, no icon card grids, no em dashes in copy, no emojis, no Playfair/Inter/Outfit, no Tailwind.
