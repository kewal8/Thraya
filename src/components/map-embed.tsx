"use client";

import { useState } from "react";
import { MapPin, MapTrifold } from "@phosphor-icons/react";

/**
 * Google Maps costs about 1 MB of third-party code, so the map loads only when asked for.
 * Until then a light placeholder shows the clinic and a "Show map" button.
 */
export function MapEmbed({
  src,
  title,
  place,
  showLabel,
}: {
  src: string;
  title: string;
  place: string;
  showLabel: string;
}) {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={src}
        title={title}
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0"
      />
    );
  }

  return (
    <div className="absolute inset-0 grid place-items-center bg-tint p-6 text-center">
      {/* A faint street grid so the slot reads as a map before it loads. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative flex flex-col items-center">
        <span className="grid size-14 place-items-center rounded-full bg-forest text-white shadow-card">
          <MapPin size={28} weight="fill" />
        </span>
        <p className="mt-4 max-w-xs font-semibold text-forest-deep">{place}</p>
        <button
          type="button"
          onClick={() => setShow(true)}
          className="btn mt-5 border border-forest/25 bg-surface text-forest-deep hover:border-forest/50"
        >
          <MapTrifold size={20} className="text-forest" />
          {showLabel}
        </button>
      </div>
    </div>
  );
}
