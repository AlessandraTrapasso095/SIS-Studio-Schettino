import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const bimActivities = [
  "Redazione OGI",
  "Redazione PGI",
  "Modellazione BIM 3D",
  "Clash Detection",
  "Gestione CDE",
  "Modelli As Built",
];

export function BimSection() {
  return (
    <section id="bim" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32 lg:py-44">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/10 lg:block" />
      <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/10 lg:block" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionLabel number="04" light>BIM</SectionLabel>
            <div className="mt-12 hidden font-mono text-[0.58rem] uppercase leading-7 tracking-[0.16em] text-white/30 lg:block">
              <p>Section / Information</p>
              <p>Process / Information</p>
              <p>Model / Coordination</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(5.4rem,15vw,14rem)] font-medium uppercase leading-[0.72] tracking-[-0.09em] text-white">
                BIM
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 border-t border-white/16 pt-8 md:grid-cols-2 md:gap-12">
              <Reveal delay={0.08}>
                <p className="body-lg text-white/68">
                  S.I.S. srl è il cuore pulsante di tutte le unità che sviluppa
                  progettazioni integrate, direzione lavori, project e BIM Management.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="body-lg text-white/68">
                  Passione, ricerca e creatività sono gli elementi che guidano il
                  gruppo nella crescita e nel raggiungimento di obiettivi sempre più
                  elevati.
                </p>
                <ArrowLink
                  href="http://www.studioschettino.it/vim-e-validazioni/"
                  target="_blank"
                  rel="noreferrer"
                  light
                  className="mt-8"
                >
                  Approfondisci
                </ArrowLink>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-[1.4fr_0.6fr] lg:gap-8">
          <Reveal className="relative min-h-[440px] overflow-hidden border border-white/12 sm:min-h-[620px]">
            <Image
              src="/images/bim/bim-model.jpg"
              alt="Modello BIM e nuvola di punti realizzati dallo Studio Schettino"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/30 pt-4 sm:inset-x-8 sm:bottom-8">
              <span className="text-[0.62rem] uppercase tracking-[0.2em] text-white/70">Point cloud / BIM</span>
              <span className="font-mono text-[0.58rem] text-cyan">MODEL.01</span>
            </div>
          </Reveal>

          <div className="grid border border-white/12 sm:grid-cols-2 lg:grid-cols-1">
            {bimActivities.map((activity, index) => (
              <Reveal
                key={activity}
                delay={index * 0.04}
                className="group flex min-h-24 items-center justify-between gap-4 border-b border-white/12 px-5 py-5 last:border-b-0 sm:min-h-28 sm:px-7"
              >
                <div>
                  <span className="font-mono text-[0.58rem] text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-medium tracking-wide text-white/78">
                    {activity}
                  </p>
                </div>
                <span className="size-2 border border-cyan/70 transition-colors group-hover:bg-cyan" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
