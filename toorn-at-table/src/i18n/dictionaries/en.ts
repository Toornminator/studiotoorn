import type { Dictionary } from "../types";

/**
 * English copy. The canonical voice, translated from the May 2026
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
      "An eye for light. Years in uniform. A Michelin kitchen for the precision. One table in the sun, and that's it.",
    handwrittenNote: "not catering. a memory",
  },
  about: {
    eyebrow: "Chapter 01 · About Nick",
    headlineLine1: "A kitchen,",
    headlineLine2: "a camera,",
    headlineLine3: "a new table.",
    body1:
      "I'm Nick. Thirty-six. Born in Zwolle, childhood split across Belgium and Germany, school finished in Groningen. The kitchen found me late. Three years with the Royal Marechaussee first. Then a year volunteering in Gambia.",
    body2:
      "Twenty-six before I went all in. Started on the cold side of a kitchen. Then a year in the patisserie at Bord'eau, Hotel de L'Europe, under Bas van Kranen. The year that taught me what discipline looks like. The camera came earlier, eighteen. Same discipline, different tool.",
    body3:
      "Since 2023 I cook privately on the Costa del Sol. Uniform discipline. Michelin precision. Andalusian calm. All of it at one table. Not catering. A memory.",
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
    warningPrefix: "heads up ",
    wrongPrefix: "went wrong ",
  },
  services: {
    eyebrow: "Services · What you can book",
    title: "Four ways to sit at the table.",
    intro:
      "No fixed prices. Everything is bespoke. The shape is below; we'll work out the details together.",
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
          "A full week on location. Dinners, and lunches or breakfasts if you like. I move with the rhythm of the group: one night raw fire, another an Italian village menu, everything straight from the market.",
        cta: "Book a week",
      },
      workshops: {
        eyebrow: "Hands-on at my pace",
        title: "Cooking workshops",
        body:
          "Small group, your kitchen or mine. One dish or a full line-up, always following the seasons. What I teach you: technique above all. A strong foundation makes every dinner better.",
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
    yearsSubline: "Since I was twenty-six. Not a year earlier.",
    tablesLabel: "Tables per month",
    tablesSubline: "Kept small, on purpose.",
  },
  travel: {
    eyebrow: "Chapter 03 · Travels",
    title: "27 stamps, 27 kitchens that taught me something.",
    intro:
      "Tap any stamp for the story. Every kitchen had its lesson. Every plate left a mark.",
    emptyState: "No travel stamps yet. Coming soon.",
    legendTotal: "{count} stamps · {featured} stories",
    legendWithStory: "with story",
    legendVisited: "visited only",
    tapHint: "Tap to read",
    overlayPlaceholder:
      "I've been there. The story is on its way. Nick is working on a short blog about this place.",
    overlayEyebrow: "Travels",
    cursorReadStory: "Read story",
    stampAlt: "{name} travel stamp",
    visitedInYear: ", visited {year}",
  },
  cookbook: {
    eyebrow: "Chapter 04 · The Cookbook",
    title: "Recipes I make at home. Honest produce, simple technique, Spanish sun.",
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
    title: "Upcoming dinners. Open tables, short guest lists.",
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
    soldOutNote: "Sold out. Sign up for the newsletter for the next one",
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
    signature: " Nick",
    ctaIntro: "Want to sit at the table?",
    ctaButton: "Plan a dinner",
    ctaNote: "Reply within 24 hours",
  },
  contact: {
    eyebrow: "Chapter 06 · At the table",
    title: "Tell me what you have in mind. I'll think with you within a day.",
    intro:
      "A private dinner at home. A villa week. A birthday. Something else entirely. It all fits, as long as the table matters. The more you tell me, the sharper the first proposal.",
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
          "Write a few sentences about what you want. The occasion, the number of guests, the location.",
        guestsRange: "Enter a number between 1 and 200.",
        dateInvalid: "That date isn't valid.",
        backendDown:
          "Couldn't send automatically. Mail me directly at info@studiotoorn.com or WhatsApp +31 6 14 41 21 02.",
      },
      success:
        "Thank you. Your request is in. I'll reply within 24 hours. Check your inbox for the confirmation.",
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
      error: "Couldn't confirm. Try again in a moment.",
    },
    newsletterMessages: {
      backendDown:
        "Newsletter is still being wired up. Email me at info@studiotoorn.com to be added now.",
      invalidEmail: "Please enter a valid email address.",
      genericError:
        "Something went wrong on our side. Try again or email me directly.",
      alreadySubscribed: "You're already on the list. Thank you!",
      checkInbox: "Check your inbox. I just sent a confirmation link.",
      thanks: "Thank you. You're on the list.",
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
    ariaLabel: "TOORN at table. Setting the table",
  },
  gallery: {
    eyebrow: "Interlude · In the kitchen",
    title: "What it looks like when the night runs.",
    intro:
      "Moments from past tables. Plates, fires, hands, views. Click to see them big.",
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
  cookies: {
    eyebrow: "Cookies",
    body: "We use cookies to count how many people land on the site and which pages they read. Nothing more. Accept and we see the totals. Reject and we don't.",
    linkLabel: "Read the full privacy notice",
    accept: "Accept",
    reject: "Reject",
  },
  legal: {
    columnHeading: "Legal",
    privacyLabel: "Privacy",
    termsLabel: "Terms",
  },
  privacy: {
    eyebrow: "Privacy notice",
    title: "What we know about you, and what we don't.",
    lastUpdated: "Last updated: 25 May 2026",
    intro:
      "Short version: we use this site to talk to people who might want a private dinner. We don't sell data. We don't share it with advertisers. We use the minimum we need to write you back and to know how many visitors find the site. Long version below.",
    sections: [
      {
        heading: "Who's behind this site",
        body: [
          "TOORN at table is run by Nick Toorn, working as a private chef from the Costa del Sol, Spain. For any privacy question or request you can reach me at info@toornattable.com or via WhatsApp on +31 6 14412102.",
          "I am the data controller for everything described below.",
        ],
      },
      {
        heading: "What you give me",
        body: [
          "Contact form: name, email, optional phone, the date and shape of what you're planning, and whatever you write in the message. I use this to reply to you and to draft a first proposal.",
          "Newsletter: just your email and the language you read the site in. I use it to send the very occasional dispatch and nothing else.",
          "I never ask for payment details on this site. Any invoicing happens through separate channels once a booking is firm.",
        ],
      },
      {
        heading: "What the site collects on its own",
        body: [
          "Analytics: I use Google Analytics 4 to count visits and see which sections people read. It only runs after you click Accept on the cookie banner. If you reject, no analytics cookie is set and no events are logged. IP addresses are anonymised before they reach Google.",
          "Server logs: my hosting provider, Netlify, keeps short-term access logs for security and performance, the same way every web host does. These are not used to profile you.",
        ],
      },
      {
        heading: "Who else sees this",
        body: [
          "Netlify hosts the site and processes form submissions. Their EU servers handle the data. Their privacy notice: netlify.com/privacy.",
          "Supabase stores newsletter signups in EU-based Postgres. Their privacy notice: supabase.com/privacy.",
          "Resend delivers transactional email (booking confirmations, newsletter). Their privacy notice: resend.com/legal/privacy-policy.",
          "Google Analytics receives anonymised visit data only after consent. Their privacy notice: policies.google.com/privacy.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Contact form replies live in my inbox for as long as a conversation is active, plus a year afterwards in case you book again. Then they go.",
          "Newsletter signups stay until you unsubscribe.",
          "Analytics data is kept for 14 months in Google Analytics, the shortest setting they offer.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under the EU GDPR you can ask me to: show you what I have on you, correct anything that's wrong, delete it, send it to you in a portable format, or stop processing it. Email info@toornattable.com and I will respond within thirty days.",
          "If you think I've handled your data badly you can also complain to your national data-protection authority. For Spain that's the AEPD (aepd.es); for the Netherlands the AP (autoriteitpersoonsgegevens.nl).",
        ],
      },
      {
        heading: "Changes",
        body: [
          "If this notice changes in any way that matters, the date at the top updates and the change appears in the next newsletter. Small typo fixes don't.",
        ],
      },
    ],
    contactNote:
      "Questions about anything above? Write to info@toornattable.com or message +31 6 14412102.",
  },
  terms: {
    eyebrow: "Terms",
    title: "How a booking works, in plain words.",
    lastUpdated: "Last updated: 25 May 2026",
    intro:
      "These are the working rules between you and me when you book a dinner, a villa week, a workshop, or seats at one of my own events. They're written so you can read them once and know where you stand.",
    sections: [
      {
        heading: "The service",
        body: [
          "I'm Nick Toorn, working as a private chef from the Costa del Sol. I cook private dinners at your home or villa, longer in-residence weeks, small workshops, and the open-booking dinners I host myself. Everything is bespoke. There is no fixed menu and no fixed price list.",
        ],
      },
      {
        heading: "Booking and confirmation",
        body: [
          "Send me the rough shape of what you're planning via the contact form, WhatsApp, or email. I reply within 24 hours with a first proposal: menu direction, timing, a price.",
          "A booking is firm only after you accept the proposal in writing and pay the deposit. Until then nothing is held in my calendar.",
        ],
      },
      {
        heading: "Payment",
        body: [
          "Standard split: 30% deposit on confirmation, the remainder within seven days of the dinner. For weeks at a villa or larger formats we agree the schedule together up front.",
          "Payments are by bank transfer or, on request, by card. Receipts are issued from a Spanish autonomo number.",
        ],
      },
      {
        heading: "Changes and cancellation",
        body: [
          "You can move the date once at no cost up to 14 days before the booking, subject to my calendar.",
          "Cancellation more than 30 days out: full refund of the deposit minus already-purchased perishables. Between 14 and 30 days: 50% refund of the deposit. Inside 14 days: the deposit is not refundable, since the produce is bought and the slot is held.",
          "If I have to cancel for any reason on my end, you get the full deposit back. That has not happened yet and I plan to keep it that way.",
        ],
      },
      {
        heading: "Allergies and diet",
        body: [
          "Tell me about any allergies, intolerances, or strong dietary preferences when you book. I'll work them in or, if a guest has a severe allergy I can't safely guarantee around, I'll tell you straight rather than risk it.",
          "If allergies aren't disclosed at booking and only surface on the night, I do what I can but can't take responsibility for an outcome there.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "I carry professional liability insurance for the cooking work itself. Beyond that, I'm not liable for: guests' alcohol consumption, anything that happens outside the agreed service window, damage to property caused by a guest, or losses that are reasonably outside my control.",
        ],
      },
      {
        heading: "Force majeure",
        body: [
          "Either side can postpone without penalty if something genuinely outside our control gets in the way: a serious illness, a transport strike, a government order, a natural event. We'll re-book to the next workable date.",
        ],
      },
      {
        heading: "Applicable law",
        body: [
          "These terms are governed by Spanish law. Any dispute we can't resolve amicably will be settled by the courts of Málaga, Spain.",
        ],
      },
    ],
    contactNote:
      "Anything here that needs more clarity? Write to info@toornattable.com or message +31 6 14412102 and I'll explain.",
  },
};
