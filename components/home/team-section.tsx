"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { teamMembers } from "@/lib/content";

export function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team" className="section-shell bg-paper">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-3">
            <SectionLabel number="03">Persone</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <motion.h2
              className="heading-xl text-navy"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              Il team
            </motion.h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/58">
              L’unione fisica di vari professionisti, oggi sotto un unico nome e percorso.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 min-[350px]:grid-cols-2 sm:mt-16 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-14">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              className="group min-w-0"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.035 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e9ecee] transition-colors duration-500 group-hover:bg-[#e1edf3]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} dello Studio Schettino`}
                  fill
                  className="object-contain object-bottom p-2 pt-5 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02] sm:p-3 sm:pt-6"
                  sizes="(max-width: 349px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-blue transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </div>

              <div className="pt-4">
                <h3 className="font-display text-[clamp(1rem,1.5vw,1.25rem)] font-medium leading-tight tracking-[-0.025em] text-navy transition-colors duration-300 group-hover:text-blue">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.13em] text-ink/46">
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
