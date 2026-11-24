"use client";

import { useState } from "react";
import { ChatCircleDots, Plus, WhatsappLogo } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { faqs, waLink } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-tint py-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <p className="section-label">Questions</p>
          <h2 className="display mt-5 text-[2.4rem] text-forest-deep sm:text-[3rem]">
            Everything you
            <span className="block text-forest">might be wondering.</span>
          </h2>
          <div className="mt-8 rounded-[1.5rem] bg-forest-deep p-6 text-white shadow-card sm:p-7">
            <span className="grid size-12 place-items-center rounded-2xl bg-gold text-forest-deep">
              <ChatCircleDots size={26} weight="duotone" />
            </span>
            <p className="display mt-5 text-[1.5rem] leading-snug">Still have a question?</p>
            <p className="mt-2 leading-relaxed text-white/75">
              Send us a message and we will help before you book.
            </p>
            <a
              href={waLink("Hello Thraya Homeopathy, I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 w-full bg-surface text-forest-deep hover:bg-gold-soft"
            >
              <WhatsappLogo size={20} weight="fill" />
              Ask on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-7">
          <ul className="space-y-3">
            {faqs.map(({ q, a }, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={q}
                  className={`rounded-[1.25rem] border bg-surface transition-[border-color,box-shadow] duration-300 ${
                    isOpen ? "border-sage shadow-float" : "border-line shadow-card"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex min-h-16 w-full items-center justify-between gap-6 rounded-[1.25rem] px-5 py-5 text-left sm:px-6"
                    >
                      <span className="display text-[1.35rem] !leading-snug text-forest-deep sm:text-[1.55rem]">
                        {q}
                      </span>
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full transition-[transform,background-color,color] duration-300 ease-out-soft ${
                          isOpen ? "rotate-45 bg-forest text-white" : "bg-tint text-forest"
                        }`}
                      >
                        <Plus size={18} weight="bold" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-soft motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] px-5 pb-6 leading-relaxed text-muted sm:px-6">{a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
