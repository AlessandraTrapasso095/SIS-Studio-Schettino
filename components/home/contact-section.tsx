import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const contactColumns = [
  {
    label: "Sede legale",
    lines: ["Via Finlandia n. 5", "87036 Rende (CS)", "Calabria · Italia"],
  },
  {
    label: "Sede operativa",
    lines: ["Via Edmondo De Amicis n. 52", "87036 Rende (CS)", "Calabria · Italia"],
  },
];

export function ContactSection() {
  return (
    <section id="contatti" className="section-shell bg-white">
      <Container>
        <div className="max-w-[950px]">
          <Reveal>
            <SectionLabel number="09">Contatti</SectionLabel>
            <h2 className="heading-xl mt-8 text-navy">Rende, Cosenza</h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 border-y border-navy/12 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:py-12">
          <Reveal>
            <p className="detail-label">Società</p>
            <p className="mt-5 font-mono text-[0.62rem] uppercase leading-6 tracking-[0.18em] text-ink/48">
              P.IVA 03849810787<br />REA – CS 260790
            </p>
          </Reveal>
          <div className="contents">
            {contactColumns.map((column, index) => (
              <Reveal key={column.label} delay={index * 0.08}>
                <p className="detail-label">{column.label}</p>
                <address className="mt-5 not-italic text-base leading-8 text-navy/68">
                  {column.lines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="pt-8 sm:pt-10 lg:grid lg:grid-cols-[0.62fr_1.38fr] lg:gap-14">
          <div className="hidden lg:block" aria-hidden="true" />
          <div>
            <Reveal>
              <a
                href="tel:+390984653529"
                className="contact-line group"
              >
                <span>+39 0984 653529</span>
                <ArrowUpRight className="contact-line__icon" />
              </a>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href="tel:+393299322456"
                className="contact-line group"
              >
                <span>+39 329 9322456</span>
                <ArrowUpRight className="contact-line__icon" />
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="mailto:segreteria@studioschettino.it"
                className="contact-line group break-all"
              >
                <span>segreteria@studioschettino.it</span>
                <ArrowUpRight className="contact-line__icon" />
              </a>
            </Reveal>

            <div className="mt-10 grid gap-8 border-t border-navy/12 pt-8 text-sm sm:grid-cols-2">
              <Reveal>
                <p className="detail-label">PEC</p>
                <a
                  href="mailto:ingegneriaschettinosrl@pec.it"
                  className="mt-3 block break-all leading-7 text-navy/68 transition-colors hover:text-blue"
                >
                  ingegneriaschettinosrl@pec.it
                </a>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="detail-label">Fatture</p>
                <a
                  href="mailto:fatture@studioschettino.it"
                  className="mt-3 block break-all leading-7 text-navy/68 transition-colors hover:text-blue"
                >
                  fatture@studioschettino.it
                </a>
              </Reveal>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-navy/12 pt-8">
              <a className="social-link" href="https://www.linkedin.com/company/raffaeleschettino/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="social-link" href="https://www.instagram.com/sis_srl/?hl=it" target="_blank" rel="noreferrer">Instagram</a>
              <a className="social-link" href="https://www.facebook.com/profile.php?id=100045233516761" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
