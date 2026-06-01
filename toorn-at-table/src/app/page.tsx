import { About } from "@/components/about/About";
import { ClosingPanel } from "@/components/about/ClosingPanel";
import { Stats } from "@/components/about/Stats";
import { Timeline } from "@/components/about/Timeline";
import { Contact } from "@/components/contact/Contact";
import { NetlifyFormSchema } from "@/components/contact/NetlifyFormSchema";
import { TheEvening } from "@/components/evening/TheEvening";
import { TheTableTeaser } from "@/components/the-table/TheTableTeaser";
import { Events } from "@/components/events/Events";
import { Faq } from "@/components/faq/Faq";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/hero/Hero";
import { Kookboek } from "@/components/kookboek/Kookboek";
import { Services } from "@/components/services/Services";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Travel } from "@/components/travel/Travel";
import { Marquee } from "@/components/ui/Marquee";
import { HomeStructuredData } from "@/components/seo/StructuredData";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { getEvents } from "@/lib/content/events";
import { getRecipes } from "@/lib/content/recipes";

export default async function Home() {
  const locale = await getCurrentLocale();
  const [t, recipes, events] = await Promise.all([
    getDictionary(),
    getRecipes(locale),
    getEvents(locale),
  ]);

  return (
    <>
      {/* Recipe + Event + WebSite + Person JSON-LD. Lifts the home
          page into Google's recipe carousel and event vertical, and
          gives the brand a richer Knowledge Graph node. */}
      <HomeStructuredData recipes={recipes} events={events} />

      <Hero />
      <About />
      <Timeline />
      <Services />
      <TheEvening recipes={recipes} />
      <Marquee items={t.marquee.primary} />
      <Travel />
      <Stats />
      <Kookboek />
      <Gallery />
      <Marquee items={t.marquee.secondary} duration={44} />
      <Events />
      <TheTableTeaser />
      <ClosingPanel />
      <Testimonials />
      <Faq />
      <Contact />
      <NetlifyFormSchema />
    </>
  );
}
