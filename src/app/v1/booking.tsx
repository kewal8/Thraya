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
import { concernOptions, phoneIsWhatsapp, site, waLink } from "@/lib/site";

type Errors = { name?: string; phone?: string };

const reassurances = [
  "Opens WhatsApp with your request ready to send",
  "Your details are shared only when you press send",
  "Patients of all ages are welcome",
];

export function BookingV1() {
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
    if (name.length < 2) next.name = "Please enter your full name.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Please enter a valid phone number.";
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
      label: phoneIsWhatsapp ? `Call or WhatsApp ${site.whatsappDisplay}` : `WhatsApp ${site.whatsappDisplay}`,
      href: waLink(),
    },
    site.phone && !phoneIsWhatsapp && { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    site.email && { icon: EnvelopeSimple, label: site.email, href: `mailto:${site.email}` },
    site.hours && { icon: Clock, label: site.hours, href: undefined },
  ].filter(Boolean) as { icon: typeof Phone; label: string; href?: string }[];

  return (
    <section id="book" className="container-page py-24 sm:py-32">
      <div className="grid overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card lg:grid-cols-12">
        <div className="relative bg-forest p-7 text-white sm:p-10 lg:col-span-5 lg:p-12">
          <h2 className="title text-[2.4rem] sm:text-[3rem]">Book your consultation.</h2>
          <p className="relative mt-5 max-w-md text-lg leading-relaxed text-white/80">
            Share a few details and your request opens in WhatsApp, ready to send. We will
            confirm a consultation time with you.
          </p>

          <ul className="relative mt-8 space-y-3">
            {reassurances.map((r) => (
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
                  <Icon size={22} className="mt-0.5 shrink-0 text-gold" />
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-forest-deep">
                Full name
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
                Phone number
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
                What would you like help with?
              </label>
              <select id="concern" name="concern" defaultValue="" className="field appearance-none">
                <option value="">Choose a concern (optional)</option>
                {concernOptions.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-forest-deep">
                Anything you would like us to know
              </label>
              <textarea id="message" name="message" rows={4} className="field resize-y" />
              <p className="text-sm text-muted">
                Optional. Your details are only shared when you press send in WhatsApp.
              </p>
            </div>

            <p className="flex items-start gap-2 rounded-xl bg-clay-soft px-4 py-3 text-sm leading-relaxed text-ink/80 sm:col-span-2">
              <WarningCircle size={18} className="mt-0.5 shrink-0 text-clay" />
              For a medical emergency, please go to your nearest hospital.
            </p>

            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                <WhatsappLogo size={20} weight="fill" />
                Book a consultation
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
                    WhatsApp has opened with your request. Press send there to reach us.
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
