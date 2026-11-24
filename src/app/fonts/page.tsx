// Temporary heading-font comparison. Delete this folder once a font is chosen.
import type { Metadata } from "next";
import {
  Alegreya_Sans,
  Belleza,
  Cagliostro,
  Commissioner,
  Proza_Libre,
  Rosario,
  Tenor_Sans,
  Ysabeau,
} from "next/font/google";

export const metadata: Metadata = { title: "Heading font options", robots: { index: false } };

const ysabeau = Ysabeau({ subsets: ["latin"], weight: "600" });
const commissioner = Commissioner({ subsets: ["latin"], axes: ["FLAR", "VOLM"] });
const alegreyaSans = Alegreya_Sans({ subsets: ["latin"], weight: "500" });
const proza = Proza_Libre({ subsets: ["latin"], weight: "600" });
const rosario = Rosario({ subsets: ["latin"], weight: "600" });
const cagliostro = Cagliostro({ subsets: ["latin"], weight: "400" });
const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });
const belleza = Belleza({ subsets: ["latin"], weight: "400" });

type Option = { name: string; font: string; note: string; style?: React.CSSProperties };

const options: Option[] = [
  {
    name: "Ysabeau",
    font: ysabeau.className,
    note: "A sans drawn on a Garamond skeleton: classic book proportions and calligraphic strokes, no serifs. The most serif-like of the set.",
  },
  {
    name: "Commissioner (flared)",
    font: commissioner.className,
    note: "A clean modern sans with flared stroke ends switched on, so letters taper like serifs. Very readable.",
    style: { fontWeight: 600, fontVariationSettings: "'FLAR' 100, 'VOLM' 0" },
  },
  {
    name: "Alegreya Sans",
    font: alegreyaSans.className,
    note: "The sans companion to a calligraphic serif. Warm, lively, with pen-like movement.",
  },
  {
    name: "Proza Libre",
    font: proza.className,
    note: "A humanist sans with visible stroke contrast. Friendly, clear and grown-up.",
  },
  {
    name: "Rosario",
    font: rosario.className,
    note: "Soft, calligraphic humanist sans. Gentle and caring in tone.",
  },
  {
    name: "Cagliostro",
    font: cagliostro.className,
    note: "Optima-style flared sans: thick and thin strokes that end in subtle flares. Elegant.",
  },
  {
    name: "Tenor Sans",
    font: tenor.className,
    note: "Wide, flared and refined, with a classical feel. Premium and calm.",
  },
  {
    name: "Belleza",
    font: belleza.className,
    note: "Flared humanist sans with fashion-style contrast. Light and elegant.",
  },
];

export default function Fonts() {
  return (
    <main className="container-page py-10 sm:py-16">
      <h1 className="text-sm font-semibold text-forest">Heading font options: sans with serif character</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Each is a sans-serif whose strokes or proportions borrow from serif type. Body text under
        every sample stays in Hanken Grotesk.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {options.map((o, i) => (
          <section key={o.name} className="hero-wash overflow-hidden rounded-[1.5rem] border border-line p-6 sm:p-8">
            <p className="text-sm font-semibold text-forest">
              {i + 1}. {o.name}
            </p>
            <div className={`${o.font} mt-5 text-forest-deep`} style={o.style}>
              <p className="text-[2.3rem] leading-[1.08] tracking-[-0.01em] sm:text-[2.8rem]">
                Personalised homeopathic care
              </p>
              <p className="mt-2 text-[1.35rem] leading-snug text-forest sm:text-[1.6rem]">
                for women, men, children &amp; the entire family.
              </p>
            </div>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
              Gentle, individualised treatment for acute and chronic health concerns, led by
              Dr.&nbsp;Ardhra&nbsp;C.
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
              <p className={`${o.font} text-[1.65rem] leading-tight text-forest-deep`} style={o.style}>
                Care that sees the whole person.
              </p>
              <p className={`${o.font} mt-3 text-[1.25rem] text-forest-deep`} style={o.style}>
                Menstrual &amp; hormonal disorders
              </p>
              <p className="mt-1 text-[0.95rem] text-muted">Irregular or painful cycles and hormonal imbalance.</p>
            </div>
            <p className="mt-5 border-t border-line pt-4 text-sm text-ink/80">{o.note}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
