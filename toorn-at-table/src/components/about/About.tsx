import { Parallax } from "@/components/ui/Parallax";
import { Portrait } from "./Portrait";

/**
 * About / Nick's story section. Phase 2 scaffolding — intro strook with
 * portrait + paragraph. The scroll-driven timeline will mount underneath
 * in the next step.
 *
 * Copy below is concept text and should be reviewed by Nick before launch.
 */
export function About() {
  return (
    <section
      id="over-nick"
      aria-labelledby="about-heading"
      className="relative w-full"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-12 md:py-40">
        <div className="md:col-span-5">
          <Parallax intensity={60} className="relative mx-auto w-full max-w-[320px] md:max-w-none">
            <Portrait />
            <span className="absolute -bottom-3 -right-3 rotate-[-4deg] bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cream">
              Nick Toorn · 36
            </span>
          </Parallax>
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            Hoofdstuk 01 · Over Nick
          </p>

          <h2
            id="about-heading"
            className="mt-5 font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(40px, 6.5vw, 84px)" }}
          >
            Een keuken,
            <br />
            een camera,
            <br />
            <span className="text-ink/70">een nieuwe tafel.</span>
          </h2>

          <div className="mt-8 space-y-5 font-serif text-ink/85" style={{ fontSize: "clamp(17px, 1.3vw, 19px)", lineHeight: 1.55 }}>
            <p>
              Ik ben Nick. Zesendertig, geboren in Zwolle, met een jeugd over
              grenzen heen — deels België, deels Duitsland. Mijn opleiding rondde
              ik af in Groningen. De keuken vond me pas laat: eerst drie jaar
              bij de Marechaussee, daarna een jaar vrijwilligerswerk in Gambia.
            </p>
            <p>
              Pas rond mijn zesentwintigste koos ik voluit voor het vak. Eerst
              aan de koude kant van een restaurantkeuken, daarna een vormend
              jaar in de patisserie van Bord&apos;eau in Hotel de L&apos;Europe
              — onder Bas van Kranen. De camera was er al sinds mijn achttiende:
              dezelfde discipline, een ander gereedschap.
            </p>
            <p>
              Sinds 2023 kook ik privé aan de Costa del Sol. Discipline uit het
              uniform, precisie uit de sterrenkeuken, rust uit Andalusië —
              samengebracht aan één tafel. Geen catering. Een herinnering.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <span>Sterrenkeuken-getraind</span>
            <span aria-hidden className="text-ink/30">·</span>
            <span>Portret- en straatfotograaf</span>
            <span aria-hidden className="text-ink/30">·</span>
            <span>Private chef sinds 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
