"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { menuItems, navItems } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding,box-shadow] duration-500 ${
          scrolled || open
            ? "border-navy/10 bg-white/90 py-2 shadow-[0_10px_32px_rgba(4,21,44,0.04)] backdrop-blur-lg"
            : "border-transparent bg-white/60 py-3.5 backdrop-blur-sm"
        }`}
      >
        <Container className="flex items-center justify-between gap-5">
          <a
            href="#top"
            aria-label="Studio Schettino — torna all’inizio"
            className="block shrink-0 outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-blue"
          >
            <Image
              src="/logo/studio-schettino-transparent.png"
              alt="Studio Schettino Ingegneria"
              width={2172}
              height={724}
              preload
              className="h-auto w-[146px] sm:w-[166px] xl:w-[178px]"
              sizes="(max-width: 640px) 146px, (max-width: 1280px) 166px, 178px"
            />
          </a>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            <nav aria-label="Navigazione principale" className="flex items-center gap-5 xl:gap-7">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link text-navy">
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contatti"
              className="border border-navy bg-navy px-5 py-3 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-white outline-none transition-colors hover:bg-blue focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
            >
              Contattaci
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigazione"
            className="fixed inset-0 z-40 overflow-y-auto bg-navy text-white lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.42 }}
          >
            <Container className="flex min-h-svh flex-col justify-between pb-8 pt-28 sm:pt-32">
              <nav aria-label="Menu completo" className="border-t border-white/14">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.06 + index * 0.035, duration: 0.45 }}
                    className="flex items-center justify-between border-b border-white/14 py-3.5 outline-none transition-colors hover:text-cyan focus-visible:text-cyan"
                  >
                    <span className="font-display text-[clamp(1.35rem,7vw,2.35rem)] font-medium leading-tight tracking-[-0.035em]">
                      {item.label}
                    </span>
                    <span className="font-mono text-[0.55rem] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-10 border-t border-white/14 pt-6 text-xs leading-6 text-white/50">
                <p>S.I.S. srl · Rende, Cosenza</p>
                <a href="mailto:segreteria@studioschettino.it" className="mt-1 block text-white/75">
                  segreteria@studioschettino.it
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
