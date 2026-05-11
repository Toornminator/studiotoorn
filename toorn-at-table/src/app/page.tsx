import { About } from "@/components/about/About";
import { ClosingPanel } from "@/components/about/ClosingPanel";
import { Timeline } from "@/components/about/Timeline";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <ClosingPanel />
    </>
  );
}
