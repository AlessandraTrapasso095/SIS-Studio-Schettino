"use client";

import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

const footerLinks = [
  ["Studio", "#studio"],
  ["Servizi", "#servizi"],
  ["BIM", "#bim"],
  ["Team", "#team"],
  ["News", "#news"],
  ["Contatti", "#contatti"],
];

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="overflow-hidden bg-[#021326] pb-8 pt-16 text-white sm:pt-20 lg:pt-24">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-display text-[clamp(2.35rem,4.7vw,4.8rem)] font-medium leading-none tracking-[-0.055em]">
            Studio Schettino
          </p>
          <div className="pb-1 font-mono text-[0.61rem] uppercase tracking-[0.18em]">
            <p className="text-cyan/75">Ingegneria</p>
            <p className="mt-2 text-white/42">Rende · Calabria</p>
          </div>
        </div>

        <motion.div
          className="mt-8 h-px origin-left bg-white/18"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={reduceMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.25fr_0.7fr] lg:gap-16">
          <div>
            <Image
              src="/logo/studio-schettino-transparent.png"
              alt="Studio Schettino Ingegneria"
              width={2172}
              height={724}
              className="h-auto w-[230px] brightness-0 invert sm:w-[270px]"
            />
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/54">
              Progettazioni integrate, direzione lavori, project e BIM Management.
            </p>
          </div>

          <div>
            <p className="footer-label">Contatti</p>
            <a
              href="mailto:segreteria@studioschettino.it"
              className="group mt-5 block max-w-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <span className="flex items-center justify-between gap-4 font-display text-[clamp(1.35rem,2.3vw,2.35rem)] font-medium leading-tight tracking-[-0.04em] text-white">
                <span className="break-all">segreteria@studioschettino.it</span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <span className="mt-4 block h-px origin-left bg-white/26 transition-transform duration-500 group-hover:scale-x-100 sm:scale-x-[0.92]" />
            </a>

            <div className="mt-8 grid gap-7 text-sm leading-7 text-white/56 sm:grid-cols-2">
              <div>
                <p>Via Edmondo De Amicis n. 52<br />87036 Rende (CS)</p>
                <a className="mt-3 block text-white/78" href="tel:+390984653529">+39 0984 653529</a>
                <a className="block text-white/78" href="tel:+393299322456">+39 329 9322456</a>
              </div>
              <div>
                <p className="footer-label">PEC</p>
                <a className="mt-3 block break-all" href="mailto:ingegneriaschettinosrl@pec.it">
                  ingegneriaschettinosrl@pec.it
                </a>
                <p className="mt-4 text-xs text-white/38">P.IVA 03849810787 · REA CS 260790</p>
              </div>
            </div>
          </div>

          <nav aria-label="Navigazione footer">
            <p className="footer-label">Esplora</p>
            <div className="mt-5 grid border-t border-white/12">
              {footerLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center justify-between border-b border-white/12 py-3 text-sm text-white/64"
                >
                  {label}
                  <span className="text-cyan/55">↗</span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/16 pt-7 text-[0.6rem] uppercase leading-5 tracking-[0.13em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Studio Schettino</p>
          <p className="max-w-xl sm:text-center">
            Concept demo realizzato esclusivamente a scopo di presentazione. Sito non ufficiale.
          </p>
          <a
            href="#top"
            aria-label="Torna all’inizio"
            className="group inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/22 text-white/70 outline-none transition-colors hover:border-cyan hover:text-cyan focus-visible:ring-2 focus-visible:ring-cyan"
          >
            <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
