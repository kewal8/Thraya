"use client";

import { useState } from "react";
import {
  CheckCircle,
  Clock,
  EnvelopeSimple,
  Phone,
  WarningCircle,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { concernOptions, phoneIsWhatsapp, site, waLink } from "@/lib/site";
import { getContent, type Locale } from "@/lib/content";

type Errors = { name?: string; phone?: string };

/** Keeps a phone number on one line. */
const nbsp = (n: string) => n.replace(/ /g, "\u00a0");

export function Booking({ locale = "en" }: { locale?: Locale }) {
  const t = getContent(locale).booking;
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const concern = String(data.get("concern") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = t.errName;
    if (phone.replace(/\D/g, "").length < 10) next.phone = t.errPhone;
    setErrors(next);
    if (next.name || next.phone) {
      setSent(false);
      return;
    }

    const lines = [
      "Hello Thraya Homeopathy, I would like to book a consultation.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      concern && `Concern: ${concern}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const details = [
    site.whatsapp && {
      icon: WhatsappLogo,
      label: phoneIsWhatsapp ? t.callOrWhatsapp(nbsp(site.whatsappDisplay)) : t.whatsappOnly(nbsp(site.whatsappDisplay)),
      href: waLink(),
    },
    site.phone && !phoneIsWhatsapp && { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    site.email && { icon: EnvelopeSimple, label: site.email, href: `mailto:${site.email}` },
    site.hours && { icon: Clock, label: site.hours, href: undefined },
  ].filter(Boolean) as { icon: typeof Phone; label: string; href?: string }[];

  return (
    <section id="book" className="container-page py-20 sm:py-28">
      <div className="grid overflow-hidden rounded-[2rem] bg-surface shadow-float lg:grid-cols-12">
        <Reveal className="relative overflow-hidden bg-forest p-7 text-white sm:p-10 lg:col-span-5 lg:p-12">
          <WhatsappLogo
            aria-hidden
            size={220}
            weight="fill"
            className="pointer-events-none absolute -bottom-12 -right-12 text-white/[0.05]"
          />
          <p className="section-label on-dark relative">{t.label}</p>
          <h2 className="display relative mt-5 text-[2.5rem] text-white sm:text-[3rem]">
            {t.h1}
            <span className="block text-gold-soft">{t.h2}</span>
          </h2>
          <p className="relative mt-5 max-w-md text-lg leading-relaxed text-white/80">
            {t.intro}
          </p>

          <ul className="relative mt-8 space-y-3">
            {t.reassurances.map((r) => (
              <li key={r} className="flex items-start gap-3 text-white/90">
                <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-gold" />
                {r}
              </li>
            ))}
          </ul>

          {details.length > 0 && (
            <ul className="relative mt-8 space-y-4 border-t border-white/15 pt-8">
              {details.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3 text-white/85">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-gold">
                    <Icon size={20} />
                  </span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="pt-2 hover:text-white">
                      {label}
                    </a>
                  ) : (
                    <span className="pt-2">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal delay={0.1} className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-forest-deep">
                {t.name}
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`field ${errors.name ? "!border-clay" : ""}`}
              />
              {errors.name && (
                <p id="name-error" className="text-sm font-medium text-clay">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-forest-deep">
                {t.phone}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`field ${errors.phone ? "!border-clay" : ""}`}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm font-medium text-clay">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor="concern" className="text-sm font-semibold text-forest-deep">
                {t.concern}
              </label>
              <select id="concern" name="concern" defaultValue="" className="field appearance-none">
                <option value="">{t.concernPlaceholder}</option>
                {concernOptions.map((c, i) => (
                  <option key={c} value={c}>
                    {t.concernOptions[i]}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-forest-deep">
                {t.message}
              </label>
              <textarea id="message" name="message" rows={4} className="field resize-y" />
              <p className="text-sm text-muted">
                {t.messageHint}
              </p>
            </div>

            <p className="flex items-start gap-2 rounded-xl bg-clay-soft px-4 py-3 text-sm leading-relaxed text-ink/80 sm:col-span-2">
              <WarningCircle size={18} className="mt-0.5 shrink-0 text-clay" />
              {t.emergency}
            </p>

            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                <WhatsappLogo size={20} weight="fill" />
                {t.submit}
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`mt-4 flex items-start gap-2 text-sm font-medium text-forest ${
                  sent ? "" : "sr-only"
                }`}
              >
                {sent && (
                  <>
                    <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0" />
                    {t.sent}
                  </>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
