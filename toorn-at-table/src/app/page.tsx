import { About } from "@/components/about/About";
import { ClosingPanel } from "@/components/about/ClosingPanel";
import { Timeline } from "@/components/about/Timeline";
import { Hero } from "@/components/hero/Hero";
import { Kookboek } from "@/components/kookboek/Kookboek";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Kookboek />
      <ClosingPanel />
    </>
  );
}
