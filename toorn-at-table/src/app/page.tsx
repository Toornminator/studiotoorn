import { About } from "@/components/about/About";
import { ClosingPanel } from "@/components/about/ClosingPanel";
import { Stats } from "@/components/about/Stats";
import { Timeline } from "@/components/about/Timeline";
import { Contact } from "@/components/contact/Contact";
import { Events } from "@/components/events/Events";
import { Hero } from "@/components/hero/Hero";
import { Kookboek } from "@/components/kookboek/Kookboek";
import { Travel } from "@/components/travel/Travel";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Marquee
        items={[
          "Costa del Sol",
          "Open keuken",
          "Lange tafels",
          "Lokale producten",
          "Eén gast tegelijk",
        ]}
      />
      <Travel />
      <Stats />
      <Kookboek />
      <Marquee
        items={[
          "Private dinners",
          "Villa takeovers",
          "Verjaardagen",
          "Eens-in-het-leven momenten",
          "Boekingen open",
        ]}
        duration={44}
      />
      <Events />
      <ClosingPanel />
      <Contact />
    </>
  );
}
