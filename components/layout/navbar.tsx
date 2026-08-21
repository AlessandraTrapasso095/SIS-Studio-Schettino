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
    const onScroll = () => setScrolled(window.scrollY > 48);
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
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled || open
            ? "border-navy/10 bg-paper/92 py-2 shadow-[0_8px_40px_rgba(4,17,36,0.045)] backdrop-blur-xl"
            : "border-navy/10 bg-transparent py-4 lg:py-5"
        }`}
      >
        <Container className="flex items-center justify-between gap-5">
          <a
            href="#top"
            aria-label="Studio Schettino — torna all’inizio"
            className="relative z-10 block shrink-0 outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-blue"
          >
            <Image
              src="/logo/studio-schettino-transparent.png"
              alt="Studio Schettino Ingegneria"
              width={2172}
              height={724}
              preload
              className="h-auto w-[152px] sm:w-[182px] xl:w-[214px]"
              sizes="(max-width: 640px) 152px, (max-width: 1280px) 182px, 214px"
            />
          </a>

          <nav
            aria-label="Navigazione principale"
            className={`hidden items-center gap-7 transition-opacity lg:flex xl:gap-9 ${open ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="fullscreen-menu"
            onClick={() => setOpen((value) => !value)}
            className="group flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-navy outline-none focus-visible:ring-2 focus-visible:ring-blue"
          >
            <span className="hidden sm:block">Menu</span>
            <span className="grid size-10 place-items-center transition-transform duration-500 group-hover:rotate-90">
              {open ? <X size={19} /> : <Menu size={19} />}
            </span>
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="fullscreen-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigazione"
            className="fixed inset-0 z-40 overflow-y-auto bg-navy text-white"
            initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? undefined : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
            <Container className="relative flex min-h-svh flex-col justify-end pb-10 pt-28 sm:pb-14 sm:pt-32 lg:pb-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
                <div className="hidden lg:block">
                  <p className="section-label text-white/45">
                    <span className="text-cyan">00</span>
                    <span className="h-px w-8 bg-current" />
                    Navigazione
                  </p>
                  <p className="mt-8 max-w-xs text-sm leading-7 text-white/55">
                    S.I.S. srl · Studio Schettino Ingegneria<br />
                    Rende, Cosenza
                  </p>
                </div>

                <nav aria-label="Menu completo" className="border-t border-white/15">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: reduceMotion ? 0 : 0.16 + index * 0.045,
                        duration: 0.55,
                      }}
                      className="group flex items-center justify-between border-b border-white/15 py-3.5 outline-none transition-colors hover:text-cyan focus-visible:text-cyan sm:py-4"
                    >
                      <span className="font-display text-[clamp(1.6rem,4.2vw,3.8rem)] font-medium uppercase leading-none tracking-[-0.04em]">
                        {item.label}
                      </span>
                      <span className="font-mono text-[0.65rem] text-white/35 group-hover:text-cyan">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
