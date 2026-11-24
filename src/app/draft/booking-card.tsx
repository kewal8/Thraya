"use client";

import { useId, useState } from "react";
import { site, waLink } from "@/lib/site";

const concerns = [
  "Women's health",
  "Children's health",
  "Family or general",
  "Something else",
] as const;

const message = (concern: string | null) =>
  concern
    ? `Hello Thraya Homeopathy, I would like to book a consultation for ${concern.toLowerCase()}.`
    : "Hello Thraya Homeopathy, I would like to book a consultation.";

/**
 * The booking as a pressed cotton card. Works without script: the link opens WhatsApp
 * with a general request; with script, the chosen concern is added to the message.
 */
export function BookingCard({ title = "Book a consultation" }: { title?: string }) {
  const [concern, setConcern] = useState<string | null>(null);
  const id = useId();

  return (
    <div className="d-stock d-book">
      <p className="d-book__title">{title}</p>
      <fieldset className="d-book__fieldset">
        <legend className="d-book__legend">What would you like help with?</legend>
        <div className="d-book__chips">
          {concerns.map((c, i) => (
            <span className="d-chip" key={c}>
              <input
                type="radio"
                name={`concern-${id}`}
                id={`${id}-${i}`}
                value={c}
                checked={concern === c}
                onChange={() => setConcern(c)}
              />
              <label htmlFor={`${id}-${i}`}>{c}</label>
            </span>
          ))}
        </div>
      </fieldset>
      <a
        className="d-btn d-btn--primary d-btn--wide d-book__go"
        href={waLink(message(concern))}
        target="_blank"
        rel="noopener noreferrer"
      >
        Continue on WhatsApp
      </a>
      <p className="d-book__note">
        WhatsApp opens with your request written out. Nothing is sent until you press send.
      </p>
      <p className="d-book__alt">
        Or call{" "}
        <a className="d-link" href={`tel:${site.phone.replace(/\s/g, "")}`}>
          {site.phone}
        </a>
      </p>
    </div>
  );
}
