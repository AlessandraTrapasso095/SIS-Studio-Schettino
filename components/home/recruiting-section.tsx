import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function RecruitingSection() {
  return (
    <section id="recruiting" className="overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionLabel number="09">Recruiting</SectionLabel>
            <p className="mt-12 font-display text-[clamp(4rem,9vw,9rem)] font-medium uppercase leading-[0.76] tracking-[-0.08em] text-navy">
              Join<br /><span className="text-blue">our</span><br />team
            </p>
            <p className="mt-8 text-[0.6rem] uppercase tracking-[0.18em] text-ink/42">
              Elemento grafico della concept demo
            </p>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col justify-end">
            <div className="border border-navy/15">
              <div className="flex items-center justify-between gap-4 border-b border-navy/15 bg-paper px-5 py-4 sm:px-7">
                <span className="font-mono text-[0.62rem] text-blue">ID.RC.005.25</span>
                <span className="border border-blue px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-blue">
                  Aperto
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-4xl font-medium tracking-[-0.045em] text-navy sm:text-5xl">
                  BIM Specialist
                </h2>
                <dl className="mt-9 grid gap-6 border-t border-navy/12 pt-7 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="detail-label">Livello formazione</dt>
                    <dd className="mt-2 text-navy/72">Junior / Senior</dd>
                  </div>
                  <div>
                    <dt className="detail-label">Luogo di lavoro</dt>
                    <dd className="mt-2 text-navy/72">Calabria · Rende (CS)</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="detail-label">Profilo</dt>
                    <dd className="mt-2 text-navy/72">BIM Specialist per attività di studio in sede.</dd>
                  </div>
                </dl>
                <a
                  href="http://www.studioschettino.it/recruiting/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 flex items-center justify-between border-t border-navy/15 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-navy outline-none transition-colors hover:text-blue focus-visible:text-blue"
                >
                  Invia la tua candidatura
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
