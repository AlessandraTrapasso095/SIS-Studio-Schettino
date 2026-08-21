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
    <section id="bim" className="relative overflow-hidden bg-navy py-28 text-white sm:py-36 lg:py-48">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.055]" />
      <div className="pointer-events-none absolute left-[8.333%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />
      <div className="pointer-events-none absolute right-[8.333%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionLabel number="05" light>BIM</SectionLabel>
            <h2 className="mt-10 font-display text-[clamp(7rem,20vw,22rem)] font-medium uppercase leading-[0.62] tracking-[-0.105em] text-white">
              BIM
            </h2>
          </Reveal>

          <div className="lg:col-span-3 lg:col-start-10 lg:pb-2">
            <Reveal>
              <p className="body-lg text-white/70">
                S.I.S. srl è il cuore pulsante di tutte le unità che sviluppa
                progettazioni integrate, direzione lavori, project e BIM Management.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 text-sm leading-7 text-white/52">
                Passione, ricerca e creatività sono gli elementi che guidano il gruppo
                nella crescita e nel raggiungimento di obiettivi sempre più elevati.
              </p>
              <ArrowLink
                href="http://www.studioschettino.it/vim-e-validazioni/"
                target="_blank"
                rel="noreferrer"
                light
                className="mt-9"
              >
                Approfondisci
              </ArrowLink>
            </Reveal>
          </div>
        </div>

        <div className="relative mt-20 sm:mt-28 lg:mt-36 lg:min-h-[860px]">
          <Reveal className="relative min-h-[470px] overflow-hidden sm:min-h-[680px] lg:w-[79%] lg:min-h-[820px]">
            <Image
              src="/images/bim/bim-model.jpg"
              alt="Modello BIM e nuvola di punti realizzati dallo Studio Schettino"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 79vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/58 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/32 pt-4 sm:inset-x-8 sm:bottom-8">
              <span className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/70">Point cloud / BIM</span>
              <span className="font-mono text-[0.56rem] text-cyan">MODEL.01</span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-6 ml-auto aspect-[4/5] w-[72%] overflow-hidden border-[6px] border-navy sm:w-[48%] lg:absolute lg:right-0 lg:top-[14%] lg:mt-0 lg:w-[31%]">
            <Image
              src="/images/bim/bim-detail.jpg"
              alt="Dettaglio di modellazione BIM dello Studio Schettino"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 72vw, (max-width: 1024px) 48vw, 31vw"
            />
            <div className="absolute inset-x-4 bottom-4 border-t border-white/35 pt-3 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-white/72">
              Model / Coordination
            </div>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-white/18 sm:mt-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {bimActivities.map((activity, index) => (
              <Reveal
                key={activity}
                delay={index * 0.04}
                className="group flex items-center gap-5 border-b border-white/14 py-6 sm:px-6 sm:first:pl-0 lg:min-h-28 lg:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <span className="font-mono text-[0.56rem] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl font-medium tracking-[-0.025em] text-white/76 transition-colors group-hover:text-white sm:text-2xl">
                  {activity}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
