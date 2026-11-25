"use client";

import { useState } from "react";
import { Plus, WhatsappLogo } from "@phosphor-icons/react";
import { faqs, waLink } from "@/lib/site";

export function FaqV1() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-tint py-24 sm:py-32">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
        <div className="lg:col-span-5 lg:row-start-1">
          <h2 className="title text-[2.4rem] text-forest-deep sm:text-[3.4rem]">
            Everything you might be wondering.
          </h2>
        </div>

        <div className="lg:col-span-7 lg:row-span-2 lg:row-start-1">
          <ul className="border-t border-[var(--v1-rule)]">
            {faqs.map(({ q, a }, i) => {
              const isOpen = open === i;
              return (
                <li key={q} className="border-b border-[var(--v1-rule)]">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="title-sm text-[1.3rem] text-forest-deep sm:text-[1.5rem]">
                        {q}
                      </span>
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full transition-[transform,background-color,color] duration-300 ease-out-soft ${
                          isOpen ? "rotate-45 bg-forest text-white" : "bg-surface text-forest"
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
                      <p className="max-w-[62ch] pb-6 pr-12 leading-relaxed text-muted">{a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-t border-[var(--v1-rule)] pt-6 lg:col-span-5 lg:row-start-2 lg:self-start">
          <p className="title-sm text-[1.4rem] text-forest-deep">Still have a question?</p>
          <p className="mt-1.5 leading-relaxed text-muted">
            Send us a message and we will help before you book.
          </p>
          <a
            href={waLink("Hello Thraya Homeopathy, I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-5 border border-forest/25 bg-surface text-forest-deep hover:border-forest/50"
          >
            <WhatsappLogo size={20} weight="fill" className="text-forest" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
