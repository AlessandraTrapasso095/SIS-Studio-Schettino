"use client";

import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const footerLinks = [
  ["Studio", "#studio"],
  ["Servizi", "#servizi"],
  ["Team", "#team"],
  ["BIM", "#bim"],
  ["News", "#news"],
  ["Contatti", "#contatti"],
];

export function Footer() {
  return (
    <footer className="bg-[#021326] text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/12 py-14 sm:py-16 lg:grid-cols-[1.25fr_0.65fr_1fr] lg:gap-16 lg:py-20">

          {/* BRAND */}
          <div>
            <Image
              src="/logo/studio-schettino-transparent.png"
              alt="Studio Schettino Ingegneria"
              width={2172}
              height={724}
              className="h-auto w-[250px] brightness-0 invert sm:w-[285px]"
            />

            <p className="mt-7 max-w-[390px] text-[0.95rem] leading-7 text-white/48">
              Ingegneria, progettazione integrata e BIM.
              Soluzioni tecniche per infrastrutture, edifici e sistemi complessi.
            </p>

            <p className="mt-7 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-cyan/65">
              Rende · Calabria
            </p>
          </div>

          {/* NAV */}
          <nav aria-label="Navigazione footer">
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/34">
              Esplora
            </p>

            <div className="mt-6 grid gap-3">
              {footerLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group flex max-w-[150px] items-center justify-between text-[0.9rem] text-white/58 transition-colors hover:text-white"
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    size={12}
                    className="text-cyan/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* CONTACT */}
          <div>
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/34">
              Contatti
            </p>

            <a
              href="mailto:segreteria@studioschettino.it"
              className="group mt-6 block border-b border-white/12 pb-5"
            >
              <span className="flex items-center justify-between gap-4">
                <span className="text-[1rem] text-white/82 transition-colors group-hover:text-cyan">
                  segreteria@studioschettino.it
                </span>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-cyan/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </a>

            <a
              href="tel:+390984653529"
              className="mt-5 block text-[1.1rem] text-white/72 transition-colors hover:text-cyan"
            >
              +39 0984 653529
            </a>

            <a
              href="#contatti"
              className="group mt-8 inline-flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-cyan"
            >
              Tutti i contatti
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 py-7 text-[0.55rem] uppercase tracking-[0.13em] text-white/28 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Studio Schettino
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>P.IVA 03849810787</span>
            <span>Concept demo non ufficiale</span>
          </div>

          <a
            href="#top"
            aria-label="Torna all’inizio"
            className="group inline-flex size-9 items-center justify-center border border-white/16 text-white/50 transition-colors hover:border-cyan hover:text-cyan"
          >
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </Container>
    </footer>
  );
}
