import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { localizedHref } from "@/i18n/config";
import { ServiceStack, type ServiceCard } from "./ServiceStack";

/**
 * "Diensten" / Services / Servicios — four bookable formats per the brand
 * bible (deel 05). Async server component, pulls labels and bodies from
 * the locale dictionary; the cards themselves deal onto the table in the
 * client-side ServiceStack, each with the polaroid that sets its mood.
 */
export async function Services() {
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);

  const cards: ServiceCard[] = [
    {
      ...t.services.cards.privateDinner,
      href: localizedHref("/#contact", locale),
      photo: {
        src: "/images/polaroids/paella.jpeg",
        alt: { en: "A large paella on the table", es: "Una gran paella en la mesa", nl: "Een grote paella op tafel" },
        caption: { en: "Paella, centre of the table", es: "Paella, en el centro", nl: "Paella, midden op tafel" },
      },
    },
    {
      ...t.services.cards.villaTakeover,
      href: localizedHref("/#contact", locale),
      photo: {
        src: "/images/polaroids/blokes.jpeg",
        alt: { en: "Nick with his crew", es: "Nick con su equipo", nl: "Nick met zijn ploeg" },
        caption: { en: "The crew", es: "El equipo", nl: "De ploeg" },
      },
    },
    {
      ...t.services.cards.workshops,
      href: localizedHref("/#contact", locale),
      photo: {
        src: "/images/polaroids/cocktails.jpeg",
        alt: { en: "Cocktails ready on the bar", es: "Cócteles listos en la barra", nl: "Cocktails klaar op de bar" },
        caption: { en: "Cocktails up", es: "Cócteles listos", nl: "Cocktails klaar" },
      },
    },
    {
      ...t.services.cards.events,
      href: localizedHref("/#events", locale),
      photo: {
        src: "/images/polaroids/avonduitverkocht.jpeg",
        alt: { en: "A fully booked evening at the venue", es: "Una noche con todas las mesas llenas", nl: "Vol bezette avond in de zaak" },
        caption: { en: "Full house", es: "Sala llena", nl: "Vol bezet" },
      },
    },
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="relative w-full">
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.services.eyebrow}
          </Reveal>
          <h2
            id="services-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={t.services.title} />
          </h2>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-2xl font-serif italic text-ink/75">
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>{t.services.intro}</span>
          </Reveal>
        </header>

        <ServiceStack cards={cards} />
      </div>
    </section>
  );
}
