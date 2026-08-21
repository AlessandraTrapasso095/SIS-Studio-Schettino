import Image from "next/image";

import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const criteria = ["Affidabilità", "Completezza e adeguatezza", "Compatibilità"];

export function VerificationSection() {
  return (
    <section id="verifiche" className="section-shell bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeader number="05" eyebrow="Controllo" title="Verifica dei progetti." />
            <Reveal delay={0.05}>
              <h3 className="mt-6 max-w-xl font-display text-[clamp(1.3rem,1.7vw,1.75rem)] font-medium leading-snug tracking-[-0.025em] text-navy">
                Verifica preventiva della progettazione ai sensi dell’art. 42 D.Lgs. 36/2023
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink/62">
                Ciascun elaborato progettuale viene controllato da un Ispettore,
                professionista altamente qualificato nel garantire la correttezza e la
                qualità del progetto.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-8 grid gap-4 border-t border-navy/10 pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {criteria.map((criterion) => (
                <div key={criterion} className="flex items-start gap-3 text-sm leading-5 text-navy/68">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-blue" aria-hidden="true" />
                  {criterion}
                </div>
              ))}
            </Reveal>

            <ArrowLink
              href="http://www.studioschettino.it/verificheprogetti/"
              target="_blank"
              rel="noreferrer"
              className="mt-9"
            >
              Approfondisci
            </ArrowLink>
          </div>

          <Reveal clip className="relative aspect-[16/10] overflow-hidden bg-paper">
            <Image
              src="/images/verification/verification-model.png"
              alt="Modello digitale sottoposto a verifica progettuale dallo Studio Schettino"
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
