import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-[#020b19] pb-8 pt-12 text-white sm:pt-16">
      <Container>
        <div className="grid gap-12 border-b border-white/12 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <div className="inline-block bg-white px-4 py-3">
              <Image
                src="/logo/studio-schettino-logo.png"
                alt="Studio Schettino Ingegneria"
                width={2172}
                height={724}
                className="h-auto w-[210px] sm:w-[260px]"
              />
            </div>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              S.I.S. srl · Progettazioni integrate, direzione lavori, project e
              BIM Management.
            </p>
          </div>

          <div>
            <p className="footer-label">Navigazione</p>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              <a href="#studio">Chi siamo</a>
              <a href="#servizi">Servizi</a>
              <a href="#bim">BIM</a>
              <a href="#verifiche">Verifiche progetti</a>
              <a href="#news">News</a>
            </div>
          </div>

          <div>
            <p className="footer-label">Contatti</p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              <p>Via Edmondo De Amicis n. 52<br />87036 Rende (CS)</p>
              <a className="block" href="tel:+390984653529">+39 0984 653529</a>
              <a className="block" href="mailto:segreteria@studioschettino.it">
                segreteria@studioschettino.it
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-7 text-[0.65rem] uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Studio Schettino · P.IVA 03849810787</p>
          <p className="max-w-xl sm:text-right">
            Concept demo realizzato esclusivamente a scopo di presentazione. Sito
            non ufficiale.
          </p>
          <a
            href="#top"
            aria-label="Torna all’inizio"
            className="grid size-10 shrink-0 place-items-center border border-white/20 transition-colors hover:border-cyan hover:text-cyan"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
