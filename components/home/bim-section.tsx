"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const bimActivities = [
  "Redazione OGI / PGI",
  "Modellazione BIM 3D",
  "Clash Detection / Gestione CDE",
];

export function BimSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="bim" className="section-shell overflow-hidden bg-paper text-navy">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-16">
          <Reveal clip className="relative aspect-[4/3] overflow-hidden bg-white">
            <Image
              src="/images/bim/bim-model.jpg"
              alt="Modello BIM e nuvola di punti realizzati dallo Studio Schettino"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <motion.span
              className="absolute inset-x-0 bottom-0 h-px origin-left bg-blue"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={reduceMotion ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </Reveal>

          <div>
            <SectionHeader
              number="04"
              eyebrow="BIM"
              title="BIM"
              description="S.I.S. srl è il cuore pulsante di tutte le unità che sviluppa progettazioni integrate, direzione lavori, project e BIM Management."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {bimActivities.map((activity) => (
                <div key={activity} className="flex items-center gap-3 text-sm text-navy/68">
                  <span className="size-1.5 shrink-0 bg-blue" aria-hidden="true" />
                  {activity}
                </div>
              ))}
            </div>

            <ArrowLink
              href="http://www.studioschettino.it/vim-e-validazioni/"
              target="_blank"
              rel="noreferrer"
              className="mt-9"
            >
              Approfondisci
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
