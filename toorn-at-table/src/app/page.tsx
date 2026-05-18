import { About } from "@/components/about/About";
import { ClosingPanel } from "@/components/about/ClosingPanel";
import { Stats } from "@/components/about/Stats";
import { Timeline } from "@/components/about/Timeline";
import { Contact } from "@/components/contact/Contact";
import { NetlifyFormSchema } from "@/components/contact/NetlifyFormSchema";
import { Events } from "@/components/events/Events";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/hero/Hero";
import { Kookboek } from "@/components/kookboek/Kookboek";
import { Services } from "@/components/services/Services";
import { Travel } from "@/components/travel/Travel";
import { Marquee } from "@/components/ui/Marquee";
import { getDictionary } from "@/i18n/server";

export default async function Home() {
  const t = await getDictionary();

  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Services />
      <Marquee items={t.marquee.primary} />
      <Travel />
      <Stats />
      <Kookboek />
      <Gallery />
      <Marquee items={t.marquee.secondary} duration={44} />
      <Events />
      <ClosingPanel />
      <Contact />
      <NetlifyFormSchema />
    </>
  );
}
