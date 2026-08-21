import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const criteria = ["Affidabilità", "Completezza e adeguatezza", "Compatibilità"];

export function VerificationSection() {
  return (
    <section id="verifiche" className="section-shell bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="relative aspect-[16/10] overflow-hidden bg-paper lg:col-span-7">
            <Image
              src="/images/verification/verification-model.png"
              alt="Modello digitale sottoposto a verifica progettuale dallo Studio Schettino"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="05">Controllo</SectionLabel>
              <h2 className="heading-xl mt-8 text-navy">Verifica dei progetti</h2>
              <h3 className="mt-6 font-display text-[clamp(1.35rem,2vw,2rem)] font-medium leading-snug tracking-[-0.03em] text-navy">
                Verifica preventiva della progettazione ai sensi dell’art. 42 D.Lgs. 36/2023
              </h3>
              <p className="mt-5 text-base leading-7 text-ink/62 sm:leading-8">
                Ciascun elaborato progettuale viene controllato da un Ispettore che è
                un professionista operante in un settore specifico e pertanto altamente
                qualificato nel garantire la massima correttezza e qualità del progetto stesso.
              </p>
            </Reveal>

            <div className="mt-8 border-t border-navy/12">
              {criteria.map((criterion) => (
                <div key={criterion} className="flex items-center gap-3 border-b border-navy/10 py-3.5 text-sm text-navy/68">
                  <span className="size-1.5 bg-blue" aria-hidden="true" />
                  {criterion}
                </div>
              ))}
            </div>

            <ArrowLink
              href="http://www.studioschettino.it/verificheprogetti/"
              target="_blank"
              rel="noreferrer"
              className="mt-8"
            >
              Approfondisci
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
