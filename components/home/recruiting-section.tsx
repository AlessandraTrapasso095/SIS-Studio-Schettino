import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function RecruitingSection() {
  return (
    <section id="recruiting" className="bg-navy text-white">
      <Container>
        <div className="relative min-h-[540px] overflow-hidden py-20 sm:py-24 lg:min-h-[620px] lg:py-28">

          {/* subtle technical background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] top-1/2 size-[430px] -translate-y-1/2 rounded-full border border-white/[0.06] lg:size-[560px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[13%] top-1/2 size-[300px] -translate-y-1/2 rounded-full border border-blue/15 lg:size-[390px]"
          />

          <div className="relative z-10 grid min-h-[380px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT */}
            <div className="relative z-20">
              <Reveal>
                <SectionLabel number="08" light>
                  Recruiting
                </SectionLabel>

                <h2 className="mt-8 max-w-[650px] font-display text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.055em] text-white">
                  Posizioni
                  <br />
                  aperte.
                </h2>

                <p className="mt-8 max-w-[470px] text-[0.98rem] leading-7 text-white/58">
                  Cerchiamo professionisti che vogliano crescere, confrontarsi
                  e contribuire allo sviluppo di progetti complessi attraverso
                  competenze tecniche e strumenti digitali.
                </p>

                <a
                  href="http://www.studioschettino.it/recruiting/"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-9 inline-flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white outline-none transition-colors hover:text-blue focus-visible:ring-2 focus-visible:ring-blue"
                >
                  Scopri le posizioni
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </Reveal>
            </div>

            {/* RIGHT — BIM 3D VISUAL */}
            <div className="relative min-h-[460px] lg:min-h-[540px]">

              {/* atmospheric glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.12] blur-[90px]"
              />

              {/* technical orbit lines */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[50%] border border-blue/15"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[48%] w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[10deg] rounded-[50%] border border-white/[0.06]"
              />

              {/* floating BIM model */}
              <Reveal
                delay={0.08}
                className="absolute -inset-x-[10%] bottom-[3%] top-[-3%]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/images/recruiting/bim-specialist-3d.png"
                    alt="Modello tridimensionale BIM"
                    fill
                    priority={false}
                    className="object-contain object-center drop-shadow-[0_35px_50px_rgba(0,0,0,0.38)] transition-transform duration-700 ease-out hover:-translate-y-2 hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[7%] left-1/2 h-[10%] w-[62%] -translate-x-1/2 rounded-full bg-black/25 blur-2xl"
                  />

                  <div className="pointer-events-none absolute right-[2%] top-[9%]">
                    <p className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-blue/70">
                      BIM / DIGITAL MODEL
                    </p>
                    <div className="mt-2 h-px w-24 bg-blue/35" />
                  </div>
                </div>
              </Reveal>

              {/* POSITION */}
              <Reveal
                delay={0.14}
                className="absolute bottom-4 left-0 z-30 sm:left-4 lg:bottom-7 lg:left-0"
              >
                <div className="border-l-2 border-blue py-2 pl-5 pr-7">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-blue">
                    Posizione aperta
                  </p>

                  <p className="mt-2 font-display text-[1.45rem] font-medium tracking-[-0.03em] text-white">
                    BIM Specialist
                  </p>

                  <p className="mt-1 text-[0.72rem] text-white/48">
                    Junior / Senior · Rende (CS)
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
