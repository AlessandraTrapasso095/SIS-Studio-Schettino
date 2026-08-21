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
    <section id="formazione" className="bg-white py-24 sm:py-32 lg:py-44">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <SectionLabel number="07">Conoscenza</SectionLabel>
            <h2 className="heading-xl mt-10 text-navy">Formazione</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-ink/64">
              Alcuni dei nostri corsi, dalle attività antincendio alla sicurezza, ai
              lavori sotto tensione e in quota.
            </p>
            <ArrowLink
              href="http://www.studioschettino.it/formazione-2/"
              target="_blank"
              rel="noreferrer"
              className="mt-8"
            >
              Tutti i corsi
            </ArrowLink>
          </Reveal>

          <div>
            <Reveal className="relative aspect-[16/9] overflow-hidden bg-navy">
              <Image
                src="/images/training/formazione.jpg"
                alt="Attività di formazione dello Studio Schettino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 62vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
              <span className="absolute bottom-5 left-5 text-[0.62rem] uppercase tracking-[0.2em] text-white sm:bottom-7 sm:left-7">
                Formazione / Sicurezza
              </span>
            </Reveal>
            <div className="mt-6 border-t border-navy/12">
              {courses.map((course, index) => (
                <Reveal
                  key={course}
                  delay={index * 0.04}
                  className="flex items-center gap-5 border-b border-navy/12 py-4"
                >
                  <span className="font-mono text-[0.58rem] text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-navy/72">{course}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div id="certificazioni" className="mt-28 border-t border-navy/12 pt-16 sm:mt-36 sm:pt-20 lg:mt-44">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <Reveal>
              <SectionLabel number="08">Sistema qualità</SectionLabel>
              <h2 className="heading-xl mt-10 text-navy">Certificazioni</h2>
            </Reveal>
            <div>
              <Reveal>
                <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-[-0.03em] text-navy sm:text-3xl">
                  Il sistema di gestione qualità della società viene regolarmente
                  valutato e convalidato.
                </p>
              </Reveal>
              <div className="mt-12 border-t border-navy/15">
                {certifications.map((certification, index) => (
                  <Reveal
                    key={certification}
                    delay={index * 0.05}
                    className="group grid min-h-24 grid-cols-[72px_1fr] items-center border-b border-navy/15 py-5 sm:min-h-28 sm:grid-cols-[120px_1fr_32px]"
                  >
                    <span className="font-mono text-[0.58rem] text-blue">
                      CERT.{String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-[clamp(1.8rem,3.5vw,3.8rem)] font-medium leading-none tracking-[-0.055em] text-navy transition-transform duration-500 group-hover:translate-x-2">
                      {certification}
                    </p>
                    <span className="hidden size-2 border border-blue group-hover:bg-blue sm:block" aria-hidden="true" />
                  </Reveal>
                ))}
              </div>
              <ArrowLink
                href="http://www.studioschettino.it/certificazioni/"
                target="_blank"
                rel="noreferrer"
                className="mt-9"
              >
                Documenti e membership
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
