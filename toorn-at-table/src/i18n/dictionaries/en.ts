import type { Dictionary } from "../types";

/**
 * English copy — the canonical voice, translated from the May 2026
 * brand bible. Spanish and Dutch dictionaries mirror this structure
 * key-for-key (enforced by the Dictionary type).
 */

export const en: Dictionary = {
  nav: {
    aboutNick: "About Nick",
    services: "Services",
    travels: "Travels",
    cookbook: "Cookbook",
    events: "Events",
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  languageSwitcher: {
    label: "Language",
  },
  hero: {
    establishedLine: "Private chef · Costa del Sol · Est. 2023",
    tagline:
      "An eye for light, the discipline of years in uniform, and the precision of a Michelin-trained kitchen — at one table in the sun.",
    handwrittenNote: "not catering — a memory",
  },
  about: {
    eyebrow: "Chapter 01 · About Nick",
    headlineLine1: "A kitchen,",
    headlineLine2: "a camera,",
    headlineLine3: "a new table.",
    body1:
      "I'm Nick. Thirty-six, born in Zwolle, with a childhood split across Belgium and Germany. I finished my schooling in Groningen. The kitchen found me late: first three years with the Royal Marechaussee, then a year volunteering in Gambia.",
    body2:
      "It was only around twenty-six that I went all in. I started on the cold side of a restaurant kitchen, then a formative year in the patisserie at Bord'eau in Hotel de L'Europe — under Bas van Kranen. The camera has been with me since eighteen: the same discipline, a different tool.",
    body3:
      "Since 2023 I've been cooking privately on the Costa del Sol. Discipline from the uniform, precision from a Michelin-trained kitchen, calm from Andalusia — brought together at one table. Not catering. A memory.",
    chip1: "Michelin-trained",
    chip2: "Portrait and street photographer",
    chip3: "Private chef since 2023",
    portraitCaption: "Nick Toorn · 36",
  },
  timeline: {
    eyebrow: "Chapter 02 · The Timeline",
    title:
      "How a Dutch kitchen kid ended up at a table in Andalucía.",
    chapterPrefix: "Chap.",
  },
  marginalia: {
    warningPrefix: "heads up —",
    wrongPrefix: "went wrong —",
  },
  services: {
    eyebrow: "Services · What you can book",
    title: "Four ways to sit at the table.",
    intro:
      "No fixed prices — everything is bespoke. The shape is below; we'll work out the details together.",
    cards: {
      privateDinner: {
        eyebrow: "At your table",
        title: "Private dinner",
        body:
          "I cook at your home or villa. One evening, one table, one menu we agree on in advance. From shopping to plating to clean-up. You welcome your guests and hold your glass.",
        cta: "Plan an evening",
      },
      villaTakeover: {
        eyebrow: "A resident chef for a week",
        title: "Villa takeover",
        body:
          "A full week on location — dinners, and lunches or breakfasts if you like. I move with the rhythm of the group: one night raw fire, another an Italian village menu, everything straight from the market.",
        cta: "Book a week",
      },
      workshops: {
        eyebrow: "Hands-on at my pace",
        title: "Cooking workshops",
        body:
          "Small group, your kitchen or mine. One dish or a full line-up, always following the seasons. What I teach you: technique above all — a strong foundation makes every dinner better.",
        cta: "Ask about it",
      },
      events: {
        eyebrow: "Organised by Nick",
        title: "Own events",
        body:
          "Dinners I host myself: a fire-pit evening on a finca, an olive-grove table, a Dining under the Stars on the beach. Open booking, small group, a different setting each time.",
        cta: "See the agenda",
      },
    },
  },
  stats: {
    countriesLabel: "Countries visited",
    countriesSubline: "From San Sebastián to Tokyo.",
    yearsLabel: "Years in the trade",
    yearsSubline: "Since I was twenty-six — not a year earlier.",
    tablesLabel: "Tables per month",
    tablesSubline: "Kept small, on purpose.",
  },
  travel: {
    eyebrow: "Chapter 03 · Travels",
    title: "27 stamps, 27 kitchens that taught me something.",
    intro:
      "Tap any stamp to open the story behind it — every kitchen had its lesson, every plate its echo.",
    emptyState: "No travel stamps yet — coming soon.",
    legendTotal: "{count} stamps · {featured} stories",
    legendWithStory: "with story",
    legendVisited: "visited only",
    tapHint: "Tap to read",
    overlayPlaceholder:
      "I've been there. The story is on its way — Nick is working on a short blog about this place.",
    overlayEyebrow: "Travels",
    cursorReadStory: "Read story",
    stampAlt: "{name} travel stamp",
    visitedInYear: ", visited {year}",
  },
  cookbook: {
    eyebrow: "Chapter 04 · The Cookbook",
    title: "Recipes I make at home — honest produce, simple technique, Spanish sun.",
    intro:
      "A small, growing cookbook. Pick one for an evening, cook for someone you love, pour something I think pairs well.",
    filtersCategory: "Category",
    filtersSeason: "Season",
    categoryAll: "All",
    categoryStarter: "Starter",
    categoryMain: "Main",
    categorySide: "Side",
    categoryDessert: "Dessert",
    categoryDrink: "Drink",
    categoryBasic: "Basic",
    seasonAll: "Year-round",
    seasonSpring: "Spring",
    seasonSummer: "Summer",
    seasonAutumn: "Autumn",
    seasonWinter: "Winter",
    resultsOne: "recipe",
    resultsMany: "recipes",
    noResults: "No recipes for that combination. Try a different filter.",
    overlayIngredients: "Ingredients",
    overlayMethod: "Method",
    overlayTotalTime: "Total time",
    overlayServes: "Serves",
    overlayServesUnit: "people",
    overlayDifficulty: "Difficulty",
    overlayPairing: "Pair with",
    cursorOpen: "Open recipe",
  },
  events: {
    eyebrow: "Chapter 05 · Events",
    title: "Upcoming dinners — open tables, short guest lists.",
    intro:
      "A few times a month I cook at a long table where you can book a seat. Small groups, local produce, each time a different spot on the Costa.",
    emptyState:
      "No scheduled events at the moment. Sign up to the newsletter to hear about the next one first.",
    soldOut: "Sold out",
    onRequest: "On request",
    spotsSuffix: "spots",
    spotsAvailable: "available",
    openLabel: "Open",
    bookCta: "Reserve a seat",
    responseTime: "Reply within 24 hours",
    soldOutNote: "Sold out — sign up for the newsletter for the next one",
    overlayEyebrow: "Event",
    overlayLocation: "Location",
    overlayCity: "City",
    overlayPricePer: "Price p.p.",
    overlaySpots: "Spots",
    overlayMax: "max",
    overlayFrom: "from",
    cursorBook: "Book seat",
    cursorSoldOut: "Sold out",
  },
  closing: {
    eyebrow: "Interlude",
    quoteLine1: "Not catering.",
    quoteLine2: "A memory.",
    signature: "— Nick",
    ctaIntro: "Want to sit at the table?",
    ctaButton: "Plan a dinner",
    ctaNote: "Reply within 24 hours",
  },
  contact: {
    eyebrow: "Chapter 06 · At the table",
    title: "Tell me what you have in mind. I'll think with you within a day.",
    intro:
      "A private dinner at home, a villa week, a birthday, something else entirely — it all fits, as long as the table matters. The more I know, the sharper the first proposal.",
    directEyebrow: "Direct",
    directWhatsApp: "WhatsApp",
    directBase: "Base",
    baseValue: "Costa del Sol, Spain",
    form: {
      nameLabel: "Your name *",
      emailLabel: "Email *",
      phoneLabel: "Phone (optional)",
      typeLabel: "What do you have in mind? *",
      typePlaceholder: "Choose a type",
      types: {
        privateDinner: "Private dinner at home",
        villaTakeover: "Villa takeover (multiple days)",
        eventTicket: "Seat at an open event",
        other: "Something else",
      },
      dateLabel: "Date (if you have one)",
      guestsLabel: "Number of guests",
      locationLabel: "Location / city",
      locationPlaceholder:
        "e.g. Marbella, our villa in Estepona, an Airbnb in Mijas…",
      messageLabel: "What's the occasion? *",
      messagePlaceholder:
        "What's the occasion, who is it for, what are you hoping for, any dietary notes, a budget if you have one…",
      submit: "Send request",
      submitting: "Sending…",
      privacyNote: "We only keep your details to reply to your request.",
      errors: {
        nameRequired: "Please enter your name.",
        emailRequired: "Please enter a valid email address.",
        typeRequired: "Choose what kind of evening you're after.",
        messageRequired:
          "Write a few sentences about what you want — the occasion, the number of guests, the location.",
        guestsRange: "Enter a number between 1 and 200.",
        dateInvalid: "That date isn't valid.",
        backendDown:
          "Couldn't send automatically. Mail me directly at info@studiotoorn.com or WhatsApp +31 6 14 41 21 02.",
      },
      success:
        "Thank you — your request is in. I'll reply within 24 hours. Check your inbox for the confirmation.",
    },
    cursorSubmit: "Send",
    cursorReserve: "Reserve",
  },
  footer: {
    newsletterEyebrow: "Letter from the kitchen",
    newsletterTitle:
      "One note a month about what I'm cooking, where I'm cooking, and what's coming.",
    newsletterBody:
      "No spam, one click to unsubscribe, a small recipe in each letter. Confirmation lands in your inbox.",
    newsletterPlaceholder: "your@email.com",
    newsletterButton: "Sign up",
    newsletterStatusBanners: {
      ok: "Confirmed. Welcome to the list.",
      invalid: "That confirmation link doesn't work (anymore).",
      error: "Couldn't confirm — try again in a moment.",
    },
    newsletterMessages: {
      backendDown:
        "Newsletter is still being wired up — email me at info@studiotoorn.com to be added now.",
      invalidEmail: "Please enter a valid email address.",
      genericError:
        "Something went wrong on our side. Try again or email me directly.",
      alreadySubscribed: "You're already on the list — thank you!",
      checkInbox: "Check your inbox — I just sent a confirmation link.",
      thanks: "Thank you — you're on the list.",
    },
    brandEyebrow: "TOORN at table",
    brandLine1: "Private chef",
    brandLine2: "Costa del Sol",
    contactEmail: "info@studiotoorn.com",
    contactPhone: "+31 6 14 41 21 02",
    sitemapKookboek: "Cookbook",
    sitemapEvents: "Events",
    sitemapContact: "Contact",
    sitemapAbout: "About Nick",
    copyright: "All rights reserved.",
    madeWith: "Made with love on the Costa del Sol.",
  },
  preloader: {
    loadingMessage: "Setting the table",
    locationCaption: "Costa del Sol · Private chef",
    ariaLabel: "TOORN at table — Setting the table",
  },
  gallery: {
    eyebrow: "Interlude · In the kitchen",
    title: "What it looks like when the night runs.",
    intro:
      "Moments from past tables — plates, fires, hands, views. Click to see them big.",
    cursorOpen: "Open photo",
    cursorClose: "Close",
    cursorPrev: "Previous",
    cursorNext: "Next",
  },
  marquee: {
    primary: [
      "Costa del Sol",
      "Open kitchen",
      "Long tables",
      "Local produce",
      "One guest at a time",
    ],
    secondary: [
      "Private dinners",
      "Villa takeovers",
      "Birthdays",
      "Once-in-a-lifetime moments",
      "Bookings open",
    ],
  },
};
