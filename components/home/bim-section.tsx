"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const bimActivities = [
  "Redazione OGI / PGI",
  "Modellazione BIM 3D",
  "Clash Detection / Gestione CDE",
];

export function BimSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="bim" className="section-shell overflow-hidden bg-navy text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel number="04" light>BIM</SectionLabel>
              <h2 className="heading-xl mt-8 text-white">BIM</h2>
              <p className="body-lg mt-6 text-white/68">
                S.I.S. srl è il cuore pulsante di tutte le unità che sviluppa
                progettazioni integrate, direzione lavori, project e BIM Management.
              </p>
              <p className="mt-5 text-sm leading-7 text-white/50">
                Passione, ricerca e creatività sono gli elementi che guidano il gruppo
                nella crescita e nel raggiungimento di obiettivi sempre più elevati.
              </p>
            </Reveal>

            <div className="mt-8 border-t border-white/14">
              {bimActivities.map((activity) => (
                <div key={activity} className="border-b border-white/12 py-3.5 text-sm text-white/68">
                  {activity}
                </div>
              ))}
            </div>

            <ArrowLink
              href="http://www.studioschettino.it/vim-e-validazioni/"
              target="_blank"
              rel="noreferrer"
              light
              className="mt-8"
            >
              Approfondisci
            </ArrowLink>
          </div>

          <Reveal className="relative aspect-[4/3] overflow-hidden bg-[#0b2340] lg:col-span-7">
            <Image
              src="/images/bim/bim-model.jpg"
              alt="Modello BIM e nuvola di punti realizzati dallo Studio Schettino"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <motion.span
              className="absolute inset-x-0 bottom-0 h-px origin-left bg-cyan"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={reduceMotion ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
