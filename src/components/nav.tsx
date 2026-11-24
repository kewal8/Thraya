"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { nav, site, waLink } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    const next = v > 12;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-[76rem] border bg-surface/90 backdrop-blur-md transition-[box-shadow,border-color,border-radius] duration-300 ${
          open ? "rounded-[1.75rem]" : "rounded-[2.5rem]"
        } ${scrolled || open ? "border-line shadow-float" : "border-line/70 shadow-card"}`}
      >
      <div className="flex h-16 items-center justify-between gap-4 pl-4 pr-2 sm:h-[4.5rem] sm:pl-6 sm:pr-2.5">
        <a href="#top" aria-label="Thraya Homeopathy, home" className="shrink-0">
          <Image
            src="/brand/thraya-logo.png"
            alt="Dr. Ardhra's Thraya Homeopathy"
            width={414}
            height={189}
            preload
            className="h-12 w-auto sm:h-[3.4rem]"
          />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[0.93rem] text-ink/75 transition-colors duration-200 hover:bg-tint hover:text-forest-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            aria-label={`Call us on ${site.phone}`}
            className="inline-flex size-11 items-center justify-center gap-2 rounded-full border border-forest/15 text-sm font-semibold text-forest-deep transition-colors hover:bg-tint xl:w-auto xl:border-transparent xl:px-3"
          >
            <Phone size={20} weight="fill" className="text-forest" />
            <span className="hidden xl:inline">Call us</span>
          </a>
          <a href="#book" className="btn btn-primary hidden min-h-11 px-5 text-sm sm:inline-flex">
            Book a consultation
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-forest-deep transition-colors hover:bg-tint lg:hidden"
          >
            {open ? <X size={24} /> : <List size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line px-2 lg:hidden"
          >
            <ul className="px-3 py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display flex min-h-14 items-center border-b border-line/70 text-2xl text-forest-deep"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pb-3 pt-5">
                <a href="#book" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                  Book a consultation
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-3 w-full border border-forest/20 text-forest-deep"
                >
                  <WhatsappLogo size={20} weight="fill" className="text-forest" />
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
