import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const criteria = [
  "Affidabilità",
  "Completezza e adeguatezza",
  "Leggibilità, coerenza e ripercorribilità",
  "Compatibilità",
];

export function VerificationSection() {
  return (
    <section id="verifiche" className="bg-paper py-24 sm:py-32 lg:py-44">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionLabel number="06">Controllo</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(4.6rem,11vw,12rem)] font-medium uppercase leading-[0.74] tracking-[-0.09em] text-navy">
              Verifica
              <span className="ml-[13%] mt-3 block text-[0.48em] tracking-[-0.065em] text-blue">dei progetti</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal className="relative aspect-[16/10] overflow-hidden bg-white">
            <Image
              src="/images/verification/verification-model.png"
              alt="Modello digitale sottoposto a verifica progettuale dallo Studio Schettino"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute left-5 top-5 bg-navy px-3 py-2 font-mono text-[0.58rem] uppercase tracking-widest text-white">
              BIM validation
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-navy sm:text-4xl">
                Verifica preventiva della progettazione ai sensi dell’art. 42 D.Lgs.
                36/2023
              </h3>
              <p className="mt-7 text-base leading-8 text-ink/65">
                Ciascun elaborato progettuale viene controllato da un Ispettore che è
                un professionista operante in un settore specifico e pertanto altamente
                qualificato nel garantire la massima correttezza e qualità del progetto
                stesso.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-navy/12">
              {criteria.map((criterion, index) => (
                <Reveal
                  key={criterion}
                  delay={index * 0.05}
                  className="flex items-center gap-4 border-b border-navy/12 py-4 text-sm text-navy/75"
                >
                  <span className="w-7 shrink-0 font-mono text-[0.56rem] text-blue">{String(index + 1).padStart(2, "0")}</span>
                  {criterion}
                </Reveal>
              ))}
            </div>

            <ArrowLink
              href="http://www.studioschettino.it/verificheprogetti/"
              target="_blank"
              rel="noreferrer"
              className="mt-9"
            >
              Approfondisci
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
