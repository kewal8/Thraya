"use client";

import { useState } from "react";
import { CheckSquare, WarningCircle, WhatsappLogo } from "@phosphor-icons/react";
import { concernOptions, waLink } from "@/lib/site";

type Errors = { name?: string; phone?: string };

/**
 * The registration side of the clinic card. On a valid request the clinic's stamp lands,
 * the status prints onto the card, then WhatsApp opens with the request written out.
 */
export function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [stampKey, setStampKey] = useState(0);

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
      const first = next.name ? "k-name" : "k-phone";
      document.getElementById(first)?.focus();
      return;
    }

    const lines = [
      "Hello Thraya Homeopathy, I would like to book a consultation.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      concern && `Concern: ${concern}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    // Open in the same tick as the click so popup blockers allow it; the stamp lands alongside.
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    setStampKey((k) => k + 1);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
        <div className="grid gap-1">
          <label htmlFor="k-name" className="k-label">
            Full name
          </label>
          <input
            id="k-name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "k-name-error" : undefined}
            className="k-input"
          />
          {errors.name && (
            <p id="k-name-error" className="mt-1 text-sm font-medium" style={{ color: "var(--clay)" }}>
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="k-phone" className="k-label">
            Phone number
          </label>
          <input
            id="k-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "k-phone-error" : undefined}
            className="k-input"
          />
          {errors.phone && (
            <p id="k-phone-error" className="mt-1 text-sm font-medium" style={{ color: "var(--clay)" }}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <fieldset className="grid gap-3">
        <legend className="k-label mb-3">What would you like help with?</legend>
        <div className="flex flex-wrap gap-2">
          {concernOptions.map((c, i) => (
            <span className="k-chip relative" key={c}>
              <input type="radio" name="concern" id={`k-concern-${i}`} value={c} />
              <label htmlFor={`k-concern-${i}`}>{c}</label>
            </span>
          ))}
        </div>
        <p className="text-sm" style={{ color: "var(--ink-faint)" }}>
          Choose a concern (optional)
        </p>
      </fieldset>

      <div className="grid gap-1">
        <label htmlFor="k-message" className="k-label">
          Anything you would like us to know
        </label>
        <textarea id="k-message" name="message" rows={3} className="k-input" />
        <p className="mt-1 text-sm" style={{ color: "var(--ink-faint)" }}>
          Optional. Your details are only shared when you press send in WhatsApp.
        </p>
      </div>

      <p className="flex items-start gap-2 border-y py-3 text-[0.95rem] leading-relaxed" style={{ borderColor: "var(--rule)", color: "var(--ink-soft)" }}>
        <WarningCircle size={19} className="mt-0.5 shrink-0" style={{ color: "var(--clay)" }} />
        For a medical emergency, please go to your nearest hospital.
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
        <button type="submit" className="k-btn k-btn--ink w-full sm:w-auto">
          <WhatsappLogo size={20} weight="fill" />
          Book a consultation
        </button>
        {sent && (
          <span key={stampKey} aria-hidden className="k-stamp k-stamp--land">
            <span className="k-stamp__small">Dr. Ardhra&rsquo;s</span>
            <span className="k-stamp__big">Thraya Homeopathy</span>
          </span>
        )}
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`flex items-start gap-2 text-[1.0625rem] font-semibold ${sent ? "" : "sr-only"}`}
      >
        {sent && (
          <>
            <CheckSquare size={22} weight="fill" className="mt-0.5 shrink-0" />
            WhatsApp has opened with your request. Press send there to reach us.
          </>
        )}
      </p>
    </form>
  );
}
