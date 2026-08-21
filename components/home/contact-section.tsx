import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function ContactSection() {
  return (
    <section id="contatti" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>

        {/* HEADER */}
        <Reveal>
          <SectionLabel number="09">Contatti</SectionLabel>

          <h2 className="mt-7 font-display text-[clamp(2.7rem,4vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.05em] text-navy">
            Contatti e sedi.
          </h2>
        </Reveal>

        {/* MAIN CONTACTS */}
        <div className="mt-14 grid border-y border-navy/10 lg:grid-cols-2">

          <Reveal>
            <a
              href="mailto:segreteria@studioschettino.it"
              className="group block py-9 lg:border-r lg:border-navy/10 lg:pr-12"
            >
              <p className="detail-label">Email</p>

              <div className="mt-5 flex items-center justify-between gap-5">
                <span className="min-w-0 font-display text-[clamp(1.55rem,2.25vw,2.7rem)] font-medium leading-tight tracking-[-0.04em] text-navy transition-colors group-hover:text-blue">
                  segreteria@studioschettino.it
                </span>

                <ArrowUpRight
                  size={21}
                  className="shrink-0 text-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <a
              href="tel:+390984653529"
              className="group block py-9 lg:pl-12"
            >
              <p className="detail-label">Telefono</p>

              <div className="mt-5 flex items-center justify-between gap-5">
                <span className="font-display text-[clamp(1.65rem,2.35vw,2.8rem)] font-medium tracking-[-0.04em] text-navy transition-colors group-hover:text-blue">
                  +39 0984 653529
                </span>

                <ArrowUpRight
                  size={21}
                  className="shrink-0 text-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </a>
          </Reveal>

        </div>

        {/* LOCATIONS + DETAILS */}
        <div className="grid gap-10 border-b border-navy/10 py-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr] lg:gap-14">

          <Reveal>
            <p className="detail-label">Sede legale</p>

            <address className="mt-5 not-italic text-[0.93rem] leading-7 text-navy/68">
              Via Finlandia n. 5<br />
              87036 Rende (CS)<br />
              Calabria · Italia
            </address>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="detail-label">Sede operativa</p>

            <address className="mt-5 not-italic text-[0.93rem] leading-7 text-navy/68">
              Via Edmondo De Amicis n. 52<br />
              87036 Rende (CS)<br />
              Calabria · Italia
            </address>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="detail-label">Amministrazione</p>

            <div className="mt-5 space-y-3 text-[0.86rem] leading-6 text-navy/58">
              <a
                href="tel:+393299322456"
                className="block transition-colors hover:text-blue"
              >
                +39 329 9322456
              </a>

              <a
                href="mailto:ingegneriaschettinosrl@pec.it"
                className="block break-all transition-colors hover:text-blue"
              >
                ingegneriaschettinosrl@pec.it
              </a>

              <a
                href="mailto:fatture@studioschettino.it"
                className="block transition-colors hover:text-blue"
              >
                fatture@studioschettino.it
              </a>

              <p className="pt-2 text-navy/42">
                P.IVA 03849810787 · REA CS 260790
              </p>
            </div>
          </Reveal>

        </div>

        {/* SOCIAL */}
        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-navy/38">
            Studio Schettino · Rende (CS)
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/company/raffaeleschettino/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[0.82rem] text-navy/58 transition-colors hover:text-blue"
            >
              LinkedIn
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://www.instagram.com/sis_srl/?hl=it"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[0.82rem] text-navy/58 transition-colors hover:text-blue"
            >
              Instagram
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100045233516761"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[0.82rem] text-navy/58 transition-colors hover:text-blue"
            >
              Facebook
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </Container>
    </section>
  );
}
