"use client";

import { useRef } from "react";

/** Phone menu on a native <details>, so it opens without script; with script, picking a link closes it. */
export function Menu({ children, summary }: { children: React.ReactNode; summary: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details
      ref={ref}
      className="k-menu lg:hidden"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a") && ref.current) ref.current.open = false;
      }}
    >
      {summary}
      {children}
    </details>
  );
}
