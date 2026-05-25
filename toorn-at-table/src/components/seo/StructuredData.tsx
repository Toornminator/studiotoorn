import type { Recipe } from "@/lib/types";
import type { EventItem } from "@/lib/types";

/**
 * Home-page structured data.
 *
 * Emits two big JSON-LD blobs on the home route:
 *
 *  1. An array of Recipe entities (one per cookbook recipe). Lifts the
 *     site into Google's recipe-search rich results — recipes render
 *     as visual cards with the hero image, prep time, servings,
 *     potentially the star rating once we add reviews.
 *
 *  2. An array of Event entities (one per upcoming event). Lifts the
 *     events into Google's event-search vertical with date, location,
 *     price, and a click-through link.
 *
 * Plus a WebSite entity with a potentialAction so Google can eventually
 * show a sitelinks search box under the brand result.
 *
 * Server-rendered: takes the already-resolved Recipe[] and EventItem[]
 * (in the active locale) and turns each into a schema.org object. Each
 * object gets a stable @id keyed off the slug so Google can de-dupe.
 */

const SITE = "https://toornattable.com";

const CATEGORY_TO_SCHEMA: Record<Recipe["category"], string> = {
  voor: "Appetizer",
  hoofd: "Main course",
  bij: "Side dish",
  dessert: "Dessert",
  borrel: "Cocktail",
  basis: "Sauce",
};

function isoDuration(minutes: number | undefined): string | undefined {
  if (!minutes) return undefined;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}`;
}

function recipeToSchema(r: Recipe) {
  const ingredients = r.ingredients
    .map((i) => [i.quantity, i.ingredient].filter(Boolean).join(" "))
    .filter((s) => s.length > 0);

  const instructions = r.steps.map((s) => ({
    "@type": "HowToStep",
    position: s.position,
    text: s.body,
  }));

  const totalMin = (r.prepMinutes ?? 0) + (r.cookMinutes ?? 0);
  const author = {
    "@type": "Person",
    name: "Nick Toorn",
    url: SITE,
  };

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${SITE}/#recipe-${r.slug}`,
    name: r.title,
    description: r.intro ?? r.body?.[0],
    image: r.heroImage ? `${SITE}${r.heroImage}` : undefined,
    author,
    recipeCategory: CATEGORY_TO_SCHEMA[r.category],
    recipeCuisine: "Mediterranean",
    prepTime: isoDuration(r.prepMinutes),
    cookTime: isoDuration(r.cookMinutes),
    totalTime: isoDuration(totalMin > 0 ? totalMin : undefined),
    recipeYield: r.servings ? `${r.servings} servings` : undefined,
    recipeIngredient: ingredients,
    recipeInstructions: instructions,
    keywords: [r.title, "private chef", "Costa del Sol"].join(", "),
    inLanguage: ["en", "es", "nl"],
    isPartOf: { "@id": `${SITE}/#website` },
  };
}

function eventToSchema(e: EventItem) {
  // Compose ISO startDate from date + optional startTime.
  const startDate = e.startTime ? `${e.date}T${e.startTime}:00+02:00` : e.date;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${SITE}/#event-${e.slug}`,
    name: e.title,
    description: e.description ?? e.menuTeaser,
    startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: e.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: e.city,
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
    },
    image: e.heroImage ? `${SITE}${e.heroImage}` : `${SITE}/opengraph-image.png`,
    maximumAttendeeCapacity: e.capacity,
    offers:
      e.priceEur !== undefined
        ? {
            "@type": "Offer",
            price: e.priceEur,
            priceCurrency: "EUR",
            availability:
              e.bookable && (e.spotsAvailable ?? 0) > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/SoldOut",
            url: `${SITE}/#events`,
            validFrom: new Date().toISOString().slice(0, 10),
          }
        : undefined,
    organizer: {
      "@type": "Organization",
      name: "TOORN at table",
      url: SITE,
      "@id": `${SITE}/#business`,
    },
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "TOORN at table",
    description:
      "Private chef on the Costa del Sol. Private dinners, villa weeks, workshops and open-booking events by Nick Toorn since 2023.",
    publisher: { "@id": `${SITE}/#business` },
    inLanguage: ["en", "es", "nl"],
  };
}

function personSchema() {
  // Nick as a standalone Person entity (separately from the
  // founder embed in LocalBusiness). Lets Google build a richer
  // Knowledge Graph node for the chef himself.
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#nick`,
    name: "Nick Toorn",
    jobTitle: "Private Chef",
    description:
      "Michelin-trained private chef on the Costa del Sol. Founder of TOORN at table.",
    image: `${SITE}/images/nick-portrait.jpg`,
    url: SITE,
    nationality: { "@type": "Country", name: "Netherlands" },
    knowsLanguage: ["English", "Spanish", "Dutch"],
    worksFor: { "@id": `${SITE}/#business` },
    sameAs: [
      "https://www.linkedin.com/in/nick-toorn-973351195/",
      "https://www.instagram.com/toornattable",
      "https://www.tiktok.com/@toornattable",
    ],
  };
}

export function HomeStructuredData({
  recipes,
  events,
}: {
  recipes: Recipe[];
  events: EventItem[];
}) {
  const graphs = [
    websiteSchema(),
    personSchema(),
    ...recipes.map(recipeToSchema),
    ...events.map(eventToSchema),
  ];
  // Schema.org allows wrapping multiple entities in a single
  // `@graph` for terser output — Google parses both styles fine.
  const payload = {
    "@context": "https://schema.org",
    "@graph": graphs,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
