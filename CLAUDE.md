# Studio Toorn - Premium Digital Agency Website

## Doel
Portfolio en agency website voor Studio Toorn, een full-service digital agency gevestigd aan de Costa del Sol, Spanje. Dit is de hoofdsite waarop we klanten binnenhalen.

## Tech Stack
- Puur HTML + custom CSS (geen Tailwind; bewust verwijderd voor performance)
- GSAP + ScrollTrigger + Lenis smooth scroll via CDN
- Fonts: Boska (display serif) + General Sans (body) via Fontshare
- Statisch, één pagina
- Meertalig: Engels als default, met Spaans en Nederlands als opties (JS dictionary, data-i18n attributen, localStorage)

## Design Richting
Warm ivoor luxury, "galerie aan de Costa del Sol". Lichte basis (ivoor #f5f0e4), espresso-donkere tekst (#211b10), goud-accenten (#9a7627 / #c9a155). GEEN blauw/paars, geen pure zwart/wit. Concept: de site is opgebouwd als een chef's tasting menu (hero = amuse-bouche, services = Le Menu, portfolio = signature dishes met live iframes, contact = reservations). Zie PRODUCT.md en DESIGN.md voor details.

## Branding
- Naam: Studio Toorn
- Logo: monogram ST in driehoek; geoptimaliseerde versie images/monogram-small.png (gebruikt als CSS-mask, kleurbaar)
- Portret: images/nick-toorn.jpg (geoptimaliseerd)
- Contact: +31614412102 (WhatsApp), info@studiotoorn.com

## Founder
Nick Toorn, 36, gevestigd in Zuid-Spanje. Achtergrond als professioneel chef (Michelin-ster Amsterdam) en portretfotograaf, nu full-service digital agency eigenaar. Combineert creatief vakmanschap met AI-technologie.

## Deploy
Live site deployt via Netlify CLI vanuit de working dir (`netlify deploy --prod --dir .`), niet via GitHub push.
