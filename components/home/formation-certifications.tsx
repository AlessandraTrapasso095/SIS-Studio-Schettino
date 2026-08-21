import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { certifications } from "@/lib/content";

const courses = [
  "Addetti antincendio",
  "RSPP – ASPP",
  "CEI 11/27 PES-PAV-PEI",
  "Lavori in quota e DPI di III categoria",
];

export function FormationCertifications() {
  return (
    <section id="formazione" className="section-shell bg-paper">
      <Container>
        <div className="w-full">
          <SectionHeader
            number="06"
            eyebrow="Conoscenza"
            title="Formazione e certificazioni."
          />

          <Reveal>
            <p className="mt-6 w-full text-[0.98rem] leading-7 text-ink/60 sm:text-[1rem] lg:whitespace-nowrap">
              Formazione continua, aggiornamento tecnico e standard certificati:
              competenze e qualità che accompagnano ogni fase del lavoro.
            </p>
          </Reveal>
        </div>

        <Reveal
          clip
          className="relative mt-10 aspect-[4/3] overflow-hidden bg-navy sm:aspect-[16/9] lg:mt-12 lg:aspect-[16/6.2]"
        >
          <Image
            src="/images/training/formazione.jpg"
            alt="Attività di formazione dello Studio Schettino"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.015]"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/80">
              Formazione tecnica
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div>
            <Reveal>
              <p className="detail-label">Formazione</p>

              <h3 className="mt-4 max-w-md font-display text-[clamp(1.9rem,2.4vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.04em] text-navy">
                Competenze in continuo aggiornamento.
              </h3>

              <p className="mt-5 max-w-lg text-[0.95rem] leading-7 text-ink/60">
                Percorsi dedicati alla sicurezza, all’antincendio, ai lavori
                sotto tensione e alle attività in quota.
              </p>
            </Reveal>

            <div className="mt-8">
              {courses.map((course, index) => (
                <Reveal key={course} delay={index * 0.04}>
                  <div className="grid grid-cols-[38px_1fr] items-center border-t border-navy/8 py-4">
                    <span className="font-mono text-[0.55rem] tracking-[0.15em] text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[0.93rem] leading-6 text-navy/72">
                      {course}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <ArrowLink
              href="http://www.studioschettino.it/formazione-2/"
              target="_blank"
              rel="noreferrer"
              className="mt-7"
            >
              Tutti i corsi
            </ArrowLink>
          </div>

          <div id="certificazioni">
            <Reveal>
              <p className="detail-label">Sistema qualità</p>

              <h3 className="mt-4 max-w-md font-display text-[clamp(1.9rem,2.4vw,2.8rem)] font-medium leading-[1.04] tracking-[-0.04em] text-navy">
                Standard verificati.
              </h3>

              <p className="mt-5 max-w-lg text-[0.95rem] leading-7 text-ink/60">
                Sistemi di gestione certificati a supporto della qualità,
                della sicurezza e dell’organizzazione dello studio.
              </p>
            </Reveal>

            <div className="mt-8">
              {certifications.map((certification, index) => (
                <Reveal key={certification} delay={index * 0.04}>
                  <div className="flex items-center justify-between gap-6 border-t border-navy/8 py-4">
                    <span className="font-display text-[1rem] font-medium tracking-[-0.02em] text-navy">
                      {certification}
                    </span>

                    <span className="font-mono text-[0.52rem] tracking-[0.14em] text-navy/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <ArrowLink
              href="http://www.studioschettino.it/certificazioni/"
              target="_blank"
              rel="noreferrer"
              className="mt-7"
            >
              Tutte le certificazioni
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
