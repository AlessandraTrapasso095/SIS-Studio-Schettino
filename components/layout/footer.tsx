"use client";

import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

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
  const reduceMotion = useReducedMotion();

  return (
    <footer className="overflow-hidden bg-[#021326] pb-8 pt-16 text-white sm:pt-20 lg:pt-24">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-display text-[clamp(2.8rem,5vw,5.5rem)] font-medium uppercase leading-none tracking-[-0.045em]">
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

        <a
          href="mailto:segreteria@studioschettino.it"
          className="group block py-10 outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:py-12"
        >
          <span className="footer-label">Scrivici</span>
          <span className="mt-5 flex items-center justify-between gap-4 font-display text-[clamp(1.45rem,3vw,3rem)] font-medium leading-tight tracking-[-0.04em] text-white">
            <span className="break-all">segreteria@studioschettino.it</span>
            <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
          <span className="mt-5 block h-px origin-left bg-white/22 transition-transform duration-500 group-hover:scale-x-[0.98]" />
        </a>

        <div className="grid gap-12 pb-12 sm:pb-16 lg:grid-cols-[1.35fr_0.75fr_0.9fr] lg:gap-16">
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
            <div className="mt-7 text-sm leading-7 text-white/48">
              <p className="footer-label">Sede legale</p>
              <address className="mt-3 not-italic">
                Via Finlandia n. 5<br />87036 Rende (CS)
              </address>
            </div>
          </div>

          <nav aria-label="Navigazione footer">
            <p className="footer-label">Navigazione</p>
            <div className="mt-5 grid gap-3.5">
              {footerLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center justify-between text-sm text-white/62"
                >
                  {label}
                  <span className="translate-x-0 text-cyan/55 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="footer-label">Contatti</p>
            <div className="mt-5 text-sm leading-7 text-white/58">
              <a className="block text-white/82" href="tel:+390984653529">+39 0984 653529</a>
              <a className="block text-white/82" href="tel:+393299322456">+39 329 9322456</a>
              <p className="mt-5 footer-label">PEC</p>
              <a className="mt-2 block break-all" href="mailto:ingegneriaschettinosrl@pec.it">
                ingegneriaschettinosrl@pec.it
              </a>
              <p className="mt-6 text-xs leading-6 text-white/38">
                P.IVA 03849810787<br />REA CS 260790
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/16 pt-7 text-[0.6rem] uppercase leading-5 tracking-[0.13em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Studio Schettino · P.IVA 03849810787</p>
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
