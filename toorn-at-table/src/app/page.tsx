import { About } from "@/components/about/About";
import { Timeline } from "@/components/about/Timeline";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
    </>
  );
}
