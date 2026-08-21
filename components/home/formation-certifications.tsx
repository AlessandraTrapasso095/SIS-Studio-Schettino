import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { certifications } from "@/lib/content";

const courses = [
  "Addetti antincendio",
  "RSPP – ASPP",
  "CEI 11/27 PES-PAV-PEI",
  "Lavori in quota e DPI di III categoria",
  "Operatori in piattaforma aerea PLE",
];

export function FormationCertifications() {
  return (
    <section id="formazione" className="section-shell bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <SectionLabel number="06">Conoscenza</SectionLabel>
            <h2 className="heading-xl mt-8 text-navy">Formazione e certificazioni</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-ink/60 sm:leading-8">
              Il sistema di gestione qualità della società viene regolarmente valutato e convalidato.
            </p>
          </Reveal>

          <div id="certificazioni" className="lg:col-span-7 lg:col-start-6">
            <p className="detail-label">Sistema qualità</p>
            <div className="mt-5 grid border-t border-navy/12 sm:grid-cols-2">
              {certifications.map((certification, index) => (
                <Reveal
                  key={certification}
                  delay={index * 0.04}
                  className="border-b border-navy/10 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                >
                  <p className="font-display text-xl font-medium tracking-[-0.025em] text-navy sm:text-2xl">
                    {certification}
                  </p>
                </Reveal>
              ))}
            </div>
            <ArrowLink
              href="http://www.studioschettino.it/certificazioni/"
              target="_blank"
              rel="noreferrer"
              className="mt-7"
            >
              Documenti e membership
            </ArrowLink>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-navy/12 pt-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <Reveal className="relative aspect-[16/10] overflow-hidden bg-white lg:col-span-7">
            <Image
              src="/images/training/formazione.jpg"
              alt="Attività di formazione dello Studio Schettino"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-display text-[clamp(1.5rem,2vw,2.3rem)] font-medium tracking-[-0.035em] text-navy">
                Formazione
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink/58">
                Alcuni dei nostri corsi, dalle attività antincendio alla sicurezza, ai lavori sotto tensione e in quota.
              </p>
            </Reveal>
            <div className="mt-6 border-t border-navy/12">
              {courses.map((course) => (
                <div key={course} className="border-b border-navy/10 py-3.5 text-sm text-navy/68">
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
