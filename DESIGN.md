# DESIGN.md — Studio Toorn (2026-10-30)

## Concept
Atelier in daylight, kitchen at night. A warm ivory editorial base for clarity, with three dark "lights down" chapters (Work, AI, Contact + footer) where screens and gold glow. Theme switches live while scrolling: `body.is-dark` swaps registered `@property` colour tokens that transition over .9s.

## Tokens
Light: `--bg #f4efe4`, `--bg2 #ebe4d4`, `--card #fbf8f1`, `--ink #1d170f`, `--accent #9a7426`, `--label #7a5a19`
Dark: `--bg #110d09`, `--bg2 #19130c`, `--card #1f170e`, `--ink #f3ecdd`, `--accent/--label #e8b866`
Constants: `--gold #c9a155` (button fill), `--wa #188a4c`, ease `cubic-bezier(.16,1,.3,1)`.

## Type
Boska 300/400 + italics (display), General Sans 400–600 (body/UI). Monospace only in the AI ops log (literally a system log). Caps only for short tracked labels.

## Motion inventory
Preloader (first visit per session) · hero line masks + underline draw + 3D screen stack with mouse tilt and scroll parallax + dust motes canvas · scroll-velocity marquee · word-by-word manifesto scrub · SplitText line reveals on every h2 · pinned horizontal portfolio (desktop ≥1024) with image parallax, phones rising, HUD counter · sticky services stage with four looping product demos (booking site, membership app with Stripe, AI agent flow, brand kit) · AI ops log typing live with the matching pipeline step lit · portrait clip reveal + parallax · counters · process line drawing with steps lighting up · grid-rows FAQ accordion · magnetic buttons · cursor with VIEW state · footer wordmark rising letter by letter with hover lift.
All of it collapses to static content under `prefers-reduced-motion`, and `html.no-fx` shows everything if the CDN fails.

## Rules
No pure #000/#fff, no gradient text, no side-stripe borders, no em dashes in copy, no emojis, no fabricated testimonials or metrics. Portfolio uses real captures, never live iframes.
