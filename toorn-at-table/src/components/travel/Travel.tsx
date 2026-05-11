import { getTravelLocations } from "@/lib/content/travel";
import { TravelMap } from "./TravelMap";

export async function Travel() {
  const locations = await getTravelLocations();

  return (
    <section
      id="reizen"
      aria-labelledby="travel-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-32 md:px-12 md:pt-32 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            Hoofdstuk 03 · Reizen
          </p>
          <h2
            id="travel-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Plekken die mij koken brachten — een atlas van markten,
            keukens en lange middagen.
          </h2>
          <p
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
            style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}
          >
            Zevenentwintig landen, één kompas. De rode pinnen hebben een
            verhaal achter zich — klik erop. De kleine zwarte stippen zijn
            plekken waar Nick is geweest, blog volgt.
          </p>
        </header>

        <TravelMap locations={locations} />
      </div>
    </section>
  );
}
