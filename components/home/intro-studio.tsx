import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function IntroStudio() {
  return (
    <section id="studio" className="section-shell bg-white">
      <Container>
        <SectionHeader
          number="01"
          eyebrow="Studio"
          title={<>Una realtà nuova e giovane. <span className="text-blue">In terra Calabra.</span></>}
        />

        <div className="mt-10 grid gap-10 border-t border-navy/10 pt-10 sm:mt-12 sm:pt-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="body-lg text-ink/68">
                La S.I.S. srl altro non è che una normale evoluzione del percorso
                ingegneristico fatto in precedenza dal fondatore e dai suoi più
                stretti collaboratori.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 text-base leading-7 text-ink/64 sm:leading-8">
                L’unione fisica di vari professionisti, oggi sotto un unico nome e
                percorso, mantiene sempre al centro la collaborazione e ricerca.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-7 text-ink/64 sm:leading-8">
                La scelta di “restare” in terra Calabra ha come fulcro principale
                quello di continuare a costruire una realtà nuova e giovane.
              </p>
              <ArrowLink href="#servizi" className="mt-8">
                Esplora i servizi
              </ArrowLink>
            </Reveal>
          </div>

          <Reveal clip className="relative aspect-[16/10] overflow-hidden bg-paper">
            <Image
              src="/images/studio/studio-work.jpg"
              alt="Attività di ispezione infrastrutturale dello Studio Schettino"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
