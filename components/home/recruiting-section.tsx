import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function RecruitingSection() {
  return (
    <section id="recruiting" className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 border-t border-navy/10 py-10 lg:grid-cols-[1fr_1fr_auto] lg:items-center lg:gap-14 lg:py-12">
          <Reveal>
            <SectionLabel number="08">Recruiting</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,3.5vw,3.5rem)] font-medium tracking-[-0.045em] text-navy">
              Lavorare con noi
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-lg font-medium text-navy">BIM Specialist</p>
            <p className="mt-2 text-sm leading-7 text-ink/58">
              BIM Specialist per attività di studio in sede. Junior / Senior · Rende (CS).
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:text-right">
            <a
              href="http://www.studioschettino.it/recruiting/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-navy outline-none transition-colors hover:text-blue focus-visible:ring-2 focus-visible:ring-blue"
            >
              Invia la candidatura
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
