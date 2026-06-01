# Toorn aan de deur — local weekly fine-dining delivery

**Design spec — 2026-06-01**
Project: toornattable.com (TOORN at table). Branch: `claude/toorn-chef-website-bird9`.

---

## 1. Goal & context

A small, local, weekly fine-dining-to-the-door service that runs **alongside** the
premium private-chef brand. Its job is **steady local cashflow** in the quiet weeks
between villa bookings: predictable, close to home, cash.

- **Audience:** people **living in or visiting Arroyo de la Miel** (Benalmádena,
  Costa del Sol) only. No delivery outside that town.
- **Offer:** one new fine-dining menu every week, cooked fresh, delivered to the door.
- **Brand:** stays under TOORN at table as a clearly-labelled local sub-offer,
  **"Toorn aan de deur" / "Toorn to your door" / "Toorn a domicilio."** It does not
  get its own separate brand; it leverages the existing site, trust and SEO.

## 2. Service mechanics (the rules)

| Rule | Value |
|------|-------|
| Delivery day | Every **Saturday** |
| Menu published | Early in the week (Nick edits content) |
| Order cutoff | Up to **2 days before** delivery = **Thursday, end of day (23:59 local)**. After the cutoff, ordering for that Saturday closes. |
| Price | **€22 per portion** (house price), ordered by quantity. A single week may override the price for a special menu. |
| Payment | **Cash on delivery.** No online payment. |
| Capacity | **20 portions per week** cap. Page shows "X spots left" and "sold out this week". |
| Delivery area | **Arroyo de la Miel only.** |

Capacity is tracked **manually** for the MVP: Nick sets the cap and updates
`spotsAvailable` (or flips a sold-out flag) in the content file as orders come in,
the same way he already edits events. No live backend. A Supabase-backed live count
is a **future enhancement**, out of scope here.

## 3. Brand framing

### 3a. New brand slogan (replaces "Not catering. A memory.")

The brand-wide line **"Not catering. A memory."** is replaced everywhere by:

> **Real food, by hand, to your table.**

Reason: the old line positions *against* catering, which now conflicts with adding a
delivery offer; the new line is stronger and works for both the villa work and the
door service ("to your table" reads as both at-table and at-the-door). Trilingual:

- EN: "Real food, by hand, to your table."
- ES: "Comida de verdad, hecha a mano, a tu mesa."
- NL: "Echt eten, met de hand gemaakt, aan jouw tafel."

**Locations to update** (every place the old line appears):
- Hero handwritten note (`src/components/hero/Hero.tsx` via `t.hero.handwrittenNote`)
- ClosingPanel ("Not catering. A memory.")
- OG share image text (`scripts/build-og-image.py` + regenerated `opengraph-image`)
- `src/app/layout.tsx` metadata (description, openGraph, twitter)
- `src/app/manifest.ts` if present there
- Any dictionary strings carrying the old line (grep `Not catering`, `A memory`, and the ES/NL equivalents)

### 3b. Local sub-label

"Toorn aan de deur" (NL) / "Toorn to your door" (EN) / "Toorn a domicilio" (ES),
used as the eyebrow/label on the homepage teaser and the dedicated page.

## 4. Architecture — hybrid (homepage teaser + dedicated page)

### 4a. Dedicated page — route `/the-table`

A focused, locally-shareable landing page (a single link to drop in local Facebook
groups, flyers, etc.). Server component, trilingual, brand-styled to match the rest
of the site (cream/ink/tattoo-red, slab display, serif body, no em-dashes).

Sections, top to bottom:
1. **Hero** — "Fine dining to your door in Arroyo de la Miel", the delivery day, and
   "X spots left this week" (or "Sold out this week / next menu drops Monday").
2. **This week's menu** — menu title + courses + one Bourdain-voice line, price per
   portion, delivery day + order cutoff, spots remaining.
3. **How it works** — 4 steps, reusing the "Evening flow" visual pattern:
   1) New menu every Saturday. 2) Order by Thursday, up to 2 days before. 3) I cook
   it fresh that day. 4) To your door, pay cash.
4. **Where I deliver** — Arroyo de la Miel only, stated plainly.
5. **Order form** — see §6.
6. **Mini-FAQ** — 4-6 local-specific Q&As (delivery area, cash, allergies, cutoff,
   what "sold out" means, what if I'm a visitor not a resident).

SEO: own `metadata` (title, description, canonical `/the-table`) targeting local
terms ("private chef Arroyo de la Miel", "comida a domicilio Benalmádena", "fine
dining delivery Costa del Sol").

### 4b. Homepage teaser

A compact section placed on the homepage **after the "The Evening" section** (which
itself follows Services), so the Services → Evening → weekly-table flow reads as
"what you can book → what a night is → this week, locally". Eyebrow
"This week · Arroyo de la Miel", the week's menu title, price per portion,
"X spots left", delivery day, and a button → `/the-table`.

**Auto-hides** when there is no active/upcoming weekly menu (same defensive pattern as
the Gallery and Testimonials sections: return `null` when the data is empty). This
keeps the premium homepage narrative intact in weeks with no menu published.

## 5. Data model

New content file `src/content/weekly-menu.ts`, a Localised array modelled on
`events.ts`. The page and teaser pick the **next upcoming menu by `deliveryDate`**
(mirrors how `getEvents` filters `date >= today`).

`LocalisedWeeklyMenu` fields:
- `slug` — stable id (e.g. the delivery date, `2026-06-06`)
- `title` — menu name (LocalisedString)
- `courses` — ordered list of dish lines, as `LocalisedParagraphs`
  (`{ en: string[]; es: string[]; nl: string[] }`), consistent with the recipe
  body model
- `description` — one Bourdain-voice line (LocalisedString)
- `pricePerPortion` — number (EUR); defaults to the house price (22) when omitted
- `deliveryDate` — ISO date of the Saturday
- `orderCutoff` — ISO datetime; default = Thursday 23:59 before `deliveryDate`
- `capacity` — number (default 20)
- `spotsAvailable` — number (Nick updates manually); `0` or a `soldOut` flag closes orders
- `allergens` — optional (LocalisedString)
- `active` — optional boolean to force-hide a draft

House defaults live in a small config (delivery weekday = Saturday, price = €22,
cap = 20, delivery-area label) so individual menus only need to override what differs.

Data-access layer `src/lib/content/weekly-menu.ts` — **pure static** (no Supabase, like
`travel`): resolves Localised → plain for the active locale, picks the current/upcoming
week, and derives `orderingOpen` (now < orderCutoff && spotsAvailable > 0). No
`server-only` guard if the schema layer needs the same data.

`src/lib/types.ts` — add `LocalisedWeeklyMenu` + resolved `WeeklyMenu` types.

## 6. Order form

New client component (mirror `BookingForm.tsx`): client-side `fetch` to Netlify Forms,
honeypot, field-level validation, success/error states.

Fields:
- Name (required)
- **Phone (required)** — for cash + delivery coordination
- Email (optional)
- **Delivery address in Arroyo de la Miel** (required) with a clear "we only deliver
  within Arroyo de la Miel" note
- **Number of portions** (required, 1..min(cap-remaining, sane max)) with a **live
  total** = portions × price
- Preferred delivery time/window (the day is fixed; pick a time)
- Allergies / dietary notes (optional)
- **Hidden field** capturing which week's menu (slug + deliveryDate) so Nick knows
  which Saturday the order is for
- Honeypot (`bot-field`)
- Visible **cash reminder**: "Payment is cash on delivery."

Behaviour:
- A new Netlify form named `order`, registered in `public/__forms.html` (Netlify scans
  `/public` at deploy), same mechanism as the existing `contact` form.
- When the cutoff has passed or the week is sold out, the form is replaced by a clear
  "Ordering for this Saturday is closed. The next menu drops Monday." state.
- On success: confirmation copy ("Got it. I'll confirm by WhatsApp within the day.").

## 7. i18n & voice

New dictionary keys for the page, teaser, how-it-works steps, order form labels, and
mini-FAQ, added to `src/i18n/types.ts` and all three dictionaries (`en`, `es`, `nl`).
Brand voice: Bourdain, direct, **no em-dashes** (brand rule).

## 8. SEO / structured data

- `/the-table` gets its own `metadata` (bare title via the template, description,
  canonical, local keywords).
- Optional later: an `Offer` / `Menu` schema for the weekly menu. Not required for MVP.

## 9. Operational / legal (Nick's domain — noted, not built)

- Spanish food-business hygiene rules + autónomo invoicing (cash income still declared).
- Allergen disclosure (EU FIC): the menu should list allergens; the form captures them.
- Delivery packaging that keeps fine dining hot and presentable.
- Cash handling / change on the day.

## 10. Out of scope (YAGNI)

- Live capacity backend (Supabase auto-count) — manual for MVP.
- Online/card payment — cash only by design.
- Delivery outside Arroyo de la Miel.
- Customer accounts, recurring subscriptions, loyalty.
- An archive of past weekly menus (could come later; MVP shows the current/next week).

## 11. Resolved inputs

- Delivery day: **Saturday**
- House price: **€22 per portion**
- Weekly cap: **20 portions**
- Brand slogan: **"Real food, by hand, to your table."**
- Architecture: **hybrid** (homepage teaser + `/the-table` page)
- Route: `/the-table` (can be revisited)
