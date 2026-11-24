"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { conditionGroups, waLink } from "@/lib/site";

const stains = { clay: "var(--stain-clay)", gold: "var(--stain-gold)", forest: "var(--stain-green)" } as const;

/**
 * Conditions as sample strips on a rail: each group is a blotter stained in one of the
 * logo's colours; the chosen one drops and its list shows. Without script every list shows.
 */
export function ConditionsSwitcher() {
  const [active, setActive] = useState(0);
  // false on the server and in the first paint, true once script runs: every list shows without it.
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = conditionGroups.length;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="d-grid d-care__grid">
      <div className="d-strips" role="tablist" aria-label="Areas of care">
        {conditionGroups.map((g, i) => (
          <button
            key={g.title}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`care-tab-${i}`}
            aria-controls={`care-panel-${i}`}
            aria-selected={ready ? active === i : i === 0}
            tabIndex={!ready || active === i ? 0 : -1}
            className="d-strip"
            style={{ "--stain": stains[g.tone] } as React.CSSProperties}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="d-strip__name">{g.title}</span>
          </button>
        ))}
      </div>

      <div className="d-panels">
        {conditionGroups.map((g, i) => (
          <section
            key={g.title}
            id={`care-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`care-tab-${i}`}
            className="d-panel"
            hidden={ready && active !== i}
          >
            <div className="d-panel__head">
              <h3>{g.title}</h3>
              <p>{g.intro}</p>
            </div>
            <ul>
              {g.items.map((c) => (
                <li key={c.name}>
                  <span className="d-panel__name">{c.name}</span>
                  <span className="d-panel__note">{c.note}</span>
                  <a
                    className="d-link d-panel__ask"
                    href={waLink(`Hello Thraya Homeopathy, I would like to ask about ${c.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask about this
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
