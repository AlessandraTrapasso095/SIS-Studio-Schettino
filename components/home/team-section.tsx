"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { teamMembers } from "@/lib/content";

export function TeamSection() {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="team" className="section-shell overflow-hidden bg-[#021326] text-white">
      <Container>
        <div className="max-w-[900px]">
          <SectionLabel number="03" light>People</SectionLabel>
          <div>
            <motion.h2
              className="heading-xl mt-8 max-w-3xl text-white"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              Le persone<br />dietro lo studio.
            </motion.h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">
              L’unione fisica di vari professionisti, oggi sotto un unico nome e percorso.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 min-[350px]:grid-cols-2 sm:mt-16 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-7 xl:grid-cols-5 xl:gap-x-6">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              className={`group min-w-0 transition-opacity duration-500 ${hovered !== null && hovered !== index ? "opacity-55" : "opacity-100"}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.035 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden border-b border-white/14">
                <span
                  className="absolute inset-x-[12%] bottom-[7%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(103,185,220,0.2)_0%,rgba(103,185,220,0.06)_46%,transparent_72%)] opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} dello Studio Schettino`}
                  fill
                  loading="eager"
                  className="object-contain object-bottom pt-4 opacity-[0.94] saturate-[0.9] transition-[transform,filter,opacity] duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.025] group-hover:opacity-100 group-hover:saturate-100 sm:pt-5"
                  sizes="(max-width: 349px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw"
                />
                <span
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </div>

              <div className="pt-4">
                <h3 className="font-display text-[clamp(1rem,1.35vw,1.2rem)] font-medium leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
