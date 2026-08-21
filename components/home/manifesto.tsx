import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Manifesto() {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-navy text-white sm:min-h-[90svh]">
      <Image
        src="/images/studio/engineering-detail.jpg"
        alt="Attività tecnica in galleria svolta dallo Studio Schettino"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,25,0.82)_0%,rgba(2,11,25,0.18)_60%,rgba(2,11,25,0.08)_100%)]" />
      <Container className="relative flex min-h-[78svh] flex-col justify-between py-10 sm:min-h-[90svh] sm:py-14">
        <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.22em] text-white/60">
          <span className="text-cyan">03</span>
          <span className="h-px w-10 bg-current" />
          <span>Manifesto</span>
        </div>
        <div className="max-w-5xl">
          <p className="font-display text-[clamp(3.5rem,10vw,11.5rem)] font-medium uppercase leading-[0.78] tracking-[-0.075em]">
            Engineering
          </p>
          <div className="mt-7 flex flex-col gap-5 border-t border-white/30 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-white/62">
              Progettazioni integrate · Direzione lavori · Project e BIM Management
            </p>
            <p className="font-mono text-[0.58rem] uppercase tracking-widest text-white/40">
              Studio Schettino / Rende
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
