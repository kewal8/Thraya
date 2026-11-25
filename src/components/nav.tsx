"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { List, Phone, Translate, WhatsappLogo, X } from "@phosphor-icons/react";
import { nav, site, waLink } from "@/lib/site";
import { getContent, localePath, type Locale } from "@/lib/content";

export function Nav({ locale = "en", languageSwitch = true }: { locale?: Locale; languageSwitch?: boolean }) {
  const c = getContent(locale);
  const ui = c.ui;
  const sw = c.switcher;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deepen the bar's shadow once the page scrolls. Plain listener: no animation library needed.
  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 12;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a href="#top" aria-label={ui.homeAria} className="shrink-0">
          <Image
            src="/brand/thraya-logo.webp"
            alt="Dr. Ardhra's Thraya Homeopathy"
            width={414}
            height={189}
            preload
            sizes="130px"
            className="h-12 w-auto sm:h-[3.4rem]"
          />
        </a>

        <nav aria-label={ui.primaryNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[0.93rem] text-ink/75 transition-colors duration-200 hover:bg-tint hover:text-forest-deep"
                >
                  {c.nav[i]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          {languageSwitch && (
          <a
            href={localePath[sw.target]}
            hrefLang={sw.target}
            lang={sw.target}
            aria-label={sw.aria}
            className="lang-switch inline-flex h-11 items-center gap-1.5 rounded-full border border-forest/15 px-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-tint"
          >
            <Translate size={18} className="hidden text-forest sm:block" aria-hidden />
            {sw.label}
          </a>
          )}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            aria-label={ui.callAria(site.phone)}
            className="inline-flex size-11 items-center justify-center gap-2 rounded-full border border-forest/15 text-sm font-semibold text-forest-deep transition-colors hover:bg-tint xl:w-auto xl:border-transparent xl:px-3"
          >
            <Phone size={20} weight="fill" className="text-forest" />
            <span className="hidden xl:inline">{ui.callUs}</span>
          </a>
          <a href="#book" className="btn btn-primary hidden min-h-11 px-5 text-sm sm:inline-flex">
            {ui.book}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            className="grid size-11 place-items-center rounded-full text-forest-deep transition-colors hover:bg-tint lg:hidden"
          >
            {open ? <X size={24} /> : <List size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu: height animates with a CSS grid-rows transition; inert while closed. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-soft motion-reduce:transition-none lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!open}
      >
          <nav
            id="mobile-menu"
            aria-label={ui.mobileNav}
            className={`min-h-0 overflow-hidden px-2 ${open ? "border-t border-line" : ""}`}
          >
            <ul className="px-3 py-2">
              {nav.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display flex min-h-14 items-center border-b border-line/70 text-2xl text-forest-deep"
                  >
                    {c.nav[i]}
                  </a>
                </li>
              ))}
              <li className="pb-3 pt-5">
                <a href="#book" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                  {ui.book}
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
          </nav>
      </div>
      </div>
    </header>
  );
}
