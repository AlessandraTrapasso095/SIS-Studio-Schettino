import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-blue py-24 text-white sm:py-32 lg:py-40">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.09]" />
      <Container className="relative">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.22em] text-white/60">
            <span className="text-cyan">10</span>
            <span className="h-px w-10 bg-white/45" />
            Contatto
          </p>
          <a
            href="#contatti"
            className="group block border-y border-white/24 py-10 outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:py-14"
          >
            <div className="flex items-end justify-between gap-8">
              <h2 className="font-display text-[clamp(3.6rem,10vw,11rem)] font-medium uppercase leading-[0.76] tracking-[-0.08em]">
                Parliamo<br />del tuo<br />progetto
              </h2>
              <span className="mb-2 grid size-14 shrink-0 place-items-center border border-white/40 transition-all duration-500 group-hover:rotate-45 group-hover:border-cyan group-hover:bg-cyan group-hover:text-navy sm:size-20">
                <ArrowUpRight size={24} strokeWidth={1.4} />
              </span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
