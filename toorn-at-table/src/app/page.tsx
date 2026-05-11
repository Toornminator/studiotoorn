import { About } from "@/components/about/About";
import { ClosingPanel } from "@/components/about/ClosingPanel";
import { Timeline } from "@/components/about/Timeline";
import { Contact } from "@/components/contact/Contact";
import { Events } from "@/components/events/Events";
import { Hero } from "@/components/hero/Hero";
import { Kookboek } from "@/components/kookboek/Kookboek";
import { Travel } from "@/components/travel/Travel";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Travel />
      <Kookboek />
      <Events />
      <ClosingPanel />
      <Contact />
    </>
  );
}
