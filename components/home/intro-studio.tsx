import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function IntroStudio() {
  return (
    <section id="studio" className="relative overflow-hidden bg-paper py-28 sm:py-36 lg:py-48">
      <div className="pointer-events-none absolute inset-y-0 left-[8.333%] hidden w-px bg-navy/[0.06] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 left-[66.666%] hidden w-px bg-navy/[0.06] lg:block" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-3">
            <SectionLabel number="01">Studio</SectionLabel>
            <p className="mt-9 font-mono text-[0.58rem] uppercase leading-6 tracking-[0.17em] text-ink/42">
              Rende · Cosenza<br />Calabria · Italia
            </p>
          </Reveal>

          <Reveal className="lg:col-span-9 lg:col-start-4">
            <h2 className="font-display text-[clamp(3.7rem,7.8vw,9rem)] font-medium leading-[0.87] tracking-[-0.075em] text-navy">
              Una realtà nuova<br />e giovane. <span className="text-blue">In terra Calabra.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 sm:mt-28 lg:mt-36 lg:grid-cols-12 lg:gap-y-0">
          <Reveal className="relative order-2 min-h-[500px] overflow-hidden sm:min-h-[700px] lg:order-1 lg:col-span-8 lg:col-start-2 lg:min-h-[860px]">
            <Image
              src="/images/studio/studio-work.jpg"
              alt="Dettaglio di un’infrastruttura ispezionata dallo Studio Schettino"
              fill
              className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 67vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/35 pt-4 text-[0.55rem] uppercase tracking-[0.18em] text-white sm:inset-x-8 sm:bottom-8">
              <span>Infrastrutture / Ispezione</span>
              <span className="font-mono text-cyan">IMG.01</span>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2 lg:col-span-3 lg:col-start-10 lg:pt-36">
            <Reveal>
              <p className="body-lg text-ink/68">
                La S.I.S. srl altro non è che una normale evoluzione del percorso
                ingegneristico fatto in precedenza dal fondatore e dai suoi più
                stretti collaboratori.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 text-sm leading-7 text-ink/58">
                L’unione fisica di vari professionisti, oggi sotto un unico nome e
                percorso, mantiene sempre al centro la collaborazione e ricerca.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-8 border-t border-navy/15 pt-8 text-sm leading-7 text-ink/58">
                La scelta di “restare” in terra Calabra ha come fulcro principale
                quello di continuare a costruire una realtà nuova e giovane.
              </p>
              <ArrowLink href="#servizi" className="mt-9">
                Esplora i servizi
              </ArrowLink>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 flex justify-end lg:mt-[-4rem] lg:pr-[8.333%]">
          <p className="relative z-10 font-display text-[clamp(2.5rem,5.6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-navy">
            Progettare.<br />Accogliere.<br /><span className="text-blue">Sperimentare.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
