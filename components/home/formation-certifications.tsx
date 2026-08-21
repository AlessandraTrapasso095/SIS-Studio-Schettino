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
        <SectionHeader
          number="06"
          eyebrow="Conoscenza"
          title={<>Formazione e<br />certificazioni.</>}
          description="Il sistema di gestione qualità della società viene regolarmente valutato e convalidato."
        />

        <div id="certificazioni" className="mt-10 border-y border-navy/10 py-8 sm:mt-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex-1">
              <p className="detail-label">Sistema qualità</p>
              <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
                {certifications.map((certification, index) => (
                  <Reveal key={certification} delay={index * 0.04}>
                    <p className="font-display text-lg font-medium tracking-[-0.025em] text-navy xl:text-xl">
                      {certification}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
            <ArrowLink
              href="http://www.studioschettino.it/certificazioni/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
            >
              Documenti
            </ArrowLink>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          <Reveal clip className="relative aspect-[16/10] overflow-hidden bg-white">
            <Image
              src="/images/training/formazione.jpg"
              alt="Attività di formazione dello Studio Schettino"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-display text-[clamp(1.5rem,2vw,2.3rem)] font-medium tracking-[-0.035em] text-navy">
                Formazione
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink/58">
                Alcuni dei nostri corsi, dalle attività antincendio alla sicurezza, ai lavori sotto tensione e in quota.
              </p>
            </Reveal>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {courses.map((course) => (
                <div key={course} className="flex items-start gap-3 text-sm leading-6 text-navy/68">
                  <span className="mt-2 size-1.5 shrink-0 bg-blue" aria-hidden="true" />
                  {course}
                </div>
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
        </div>
      </Container>
    </section>
  );
}
