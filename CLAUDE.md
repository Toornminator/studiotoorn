# Studio Toorn - Agency Website (studiotoorn.com)

## Doel
De hoofdsite van Studio Toorn, digitaal atelier aan de Costa del Sol. Verkoopt vier disciplines: websites, platforms & apps (Stripe-abonnementen, iOS/Android), AI-automatisering (agents, n8n) en merk & content.

## Bestanden
- `index.html` — opbouw, Engelse standaardtekst met `data-i18n`-sleutels
- `assets/site.css` — alle stijl (licht ivoor + donkere hoofdstukken via `body.is-dark` en geregistreerde `@property`-kleuren)
- `assets/i18n.js` — alle teksten EN/ES/NL (`window.ST_I18N`)
- `assets/site.js` — taal, Lenis, nav, cursor, hero, loader
- `assets/sections.js` — marquee, reveals, SplitText-koppen, gepind horizontaal portfolio, dienst-demo's, AI-log, proces, FAQ, formulier, footer
- `images/work/` — portfolio-captures (WebP, desktop 900/1600 + mobiel 560), gemaakt met Playwright
- `audit/`, `offerte/`, `factuur/` + `/voorproef` (redirect) horen bij JARVIS; niet aanraken

## Stack
Puur HTML/CSS/JS, geen build. GSAP 3.13 (ScrollTrigger + SplitText, gratis sinds 2025) + Lenis 1.3 via jsDelivr. Fonts Boska + General Sans via Fontshare. Formspree `xpwzgrqj`.

## Design
"Atelier bij daglicht, keuken bij nacht": ivoor basis (#f4efe4), espresso tekst (#1d170f), goud (#9a7426 / #c9a155). Portfolio, AI-hoofdstuk en contact+footer zijn donker (#110d09); de pagina kleurt mee tijdens het scrollen. Chef-concept blijft de rode draad. Zie DESIGN.md.

## Portfolio (stand 2026-10-30)
GoSpain, Malaga Insiders, TOORN at table, En Boca, Juridisch AI Adviseur, SilkFlorae (netlify-rebuild) + 86'd als lab-kaart. Bewust weggelaten: Cosmic Ceramics, MR Consulting (generiek), SwingUnity (merkrisico), Shots by Nick (18+-poort). Geen live iframes meer: Malaga Insiders/Prints/Mandje blokkeren framing en vreemde sites botsten met onze UI.

## Contact & juridisch
+31614412102 (WhatsApp), info@studiotoorn.com. Footer toont Content Angels Agency SL, NIF B75910182, Benalmádena (LSSI).

## Deploy
Netlify CLI vanuit een SCHONE stage-map, nooit `--dir .` (zie geheugen studiotoorn_deploy_flow). Stage moet `assets/` bevatten.
