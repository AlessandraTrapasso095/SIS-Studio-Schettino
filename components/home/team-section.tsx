"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { teamMembers } from "@/lib/content";

export function TeamSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section id="team" className="section-shell overflow-hidden bg-[#021326] text-white">
      <Container>
        <SectionHeader
          number="03"
          eyebrow="People"
          title="Il team."
          description="L’unione fisica di vari professionisti, oggi sotto un unico nome e percorso."
          light
        />

        <div className="mt-12 hidden min-h-[580px] grid-cols-[0.72fr_1.18fr] gap-12 border-t border-white/12 pt-10 lg:grid xl:min-h-[620px] xl:gap-16">
          <div className="grid content-start grid-cols-2 gap-x-6">
            {teamMembers.map((member, index) => {
              const isActive = active === index;

              return (
                <button
                  key={member.name}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="team-active-person"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group flex min-h-14 items-center gap-3 border-b border-white/10 text-left outline-none transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan ${
                    isActive ? "text-white" : "text-white/46 hover:text-white/75"
                  }`}
                >
                  <span
                    className={`w-5 shrink-0 font-mono text-[0.52rem] transition-colors duration-500 ${isActive ? "text-cyan" : "text-white/25"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.78rem] font-medium leading-tight tracking-[-0.01em] xl:text-sm">
                    {member.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="team-active-person"
            aria-live="polite"
            className="relative min-h-[540px] overflow-hidden border-b border-white/12 xl:min-h-[580px]"
          >
            <span
              className="absolute bottom-[-10%] left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(103,185,220,0.18)_0%,rgba(103,185,220,0.055)_44%,transparent_72%)] blur-sm"
              aria-hidden="true"
            />

            {teamMembers.map((member, index) => (
              <motion.div
                key={member.image}
                className="absolute inset-x-0 bottom-0 top-0"
                initial={false}
                animate={{
                  opacity: active === index ? 1 : 0,
                  y: active === index ? 0 : 10,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-hidden={active !== index}
              >
                <Image
                  src={member.image}
                  alt={active === index ? `${member.name}, ${member.role} dello Studio Schettino` : ""}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1279px) 58vw, 720px"
                />
              </motion.div>
            ))}

            <motion.div
              key={teamMembers[active].name}
              className="absolute bottom-7 left-0 z-10 max-w-[16rem] bg-[#021326]/82 py-3 pr-6 backdrop-blur-sm"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl font-medium tracking-[-0.035em] text-white">
                {teamMembers[active].name}
              </p>
              <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-cyan">
                {teamMembers[active].role}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 border-t border-white/12 pt-8 md:grid-cols-3 lg:hidden sm:gap-x-8 sm:gap-y-12">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              className="group min-w-0"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.04 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden border-b border-white/12">
                <span
                  className="absolute inset-x-[8%] bottom-[2%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(103,185,220,0.16)_0%,transparent_70%)]"
                  aria-hidden="true"
                />
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} dello Studio Schettino`}
                  fill
                  className="object-contain object-bottom transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                />
              </div>
              <h3 className="mt-4 font-display text-base font-medium leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan sm:text-lg">
                {member.name}
              </h3>
              <p className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-white/42">
                {member.role}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
