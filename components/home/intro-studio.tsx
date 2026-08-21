import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function IntroStudio() {
  return (
    <section id="studio" className="relative overflow-hidden bg-paper py-24 sm:py-32 lg:py-44">
      <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-navy/[0.07] lg:block" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel number="01">Studio</SectionLabel>
            <p className="mt-10 max-w-sm font-mono text-[0.64rem] uppercase leading-6 tracking-[0.15em] text-ink/45">
              Rende · Cosenza<br />Calabria · Italia
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="heading-xl max-w-5xl text-navy">
                Una realtà giovane, costruita attorno a collaborazione e ricerca.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 border-t border-navy/12 pt-8 md:grid-cols-2 md:gap-12 lg:mt-16">
              <Reveal delay={0.08}>
                <p className="body-lg text-ink/72">
                  La S.I.S. srl altro non è che una normale evoluzione del percorso
                  ingegneristico fatto in precedenza dal fondatore e dai suoi più
                  stretti collaboratori.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="body-lg text-ink/72">
                  L’unione fisica di vari professionisti, oggi sotto un unico nome e
                  percorso, mantiene sempre al centro la collaborazione e ricerca.
                </p>
                <ArrowLink href="#servizi" className="mt-8">
                  Esplora i servizi
                </ArrowLink>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20 grid items-end gap-6 sm:mt-28 lg:grid-cols-[1.5fr_0.55fr] lg:gap-10">
          <Reveal className="relative min-h-[430px] overflow-hidden sm:min-h-[620px] lg:min-h-[740px]">
            <Image
              src="/images/studio/studio-work.jpg"
              alt="Dettaglio di un’infrastruttura ispezionata dallo Studio Schettino"
              fill
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 72vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
            <p className="absolute bottom-5 left-5 text-[0.6rem] uppercase tracking-[0.2em] text-white sm:bottom-7 sm:left-7">
              Infrastrutture / Ispezione
            </p>
          </Reveal>

          <Reveal delay={0.12} className="border-t border-navy/15 pt-6 lg:mb-14">
            <p className="font-display text-[clamp(2rem,4vw,4.7rem)] font-medium leading-[0.95] tracking-[-0.055em] text-navy">
              Progettare.<br />Accogliere.<br />Sperimentare.
            </p>
            <p className="mt-7 text-sm leading-7 text-ink/60">
              Uno spazio dove confrontarsi e coltivare la voglia di sapere e creare.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
