import {
  ArrowRight,
  Certificate,
  Flower,
  GlobeHemisphereEast,
  HandHeart,
  Heart,
  Leaf,
  Plant,
  FlowerTulip,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { conditionGroups, focusAreas, toneStyles } from "@/lib/site";
import { getContent, type Locale } from "@/lib/content";

/** CSS-only entrance (see .rise in globals.css): visible without scripts, still under reduced motion. */
const rise = (delay: number) => ({ "--rise-delay": `${delay}s` }) as React.CSSProperties;

/** Soft botanical marks around the hero, echoing the logo's leaf. Decorative only. */
const floaters = [
  { icon: Leaf, cls: "left-[4%] top-[30%] size-11", delay: "0s" },
  { icon: Plant, cls: "left-[8%] bottom-[14%] size-9", delay: "1.2s" },
  { icon: Flower, cls: "right-[4%] top-[34%] size-10", delay: "0.6s" },
  { icon: FlowerTulip, cls: "right-[9%] bottom-[16%] size-8", delay: "1.8s" },
  { icon: Heart, cls: "left-[16%] top-[16%] size-7", delay: "2.4s" },
];

const specialised = [
  ...focusAreas.slice(0, 2).map((f) => ({ label: f.label, icon: f.icon, tone: f.tone })),
  { label: "PCOD / PCOS", icon: conditionGroups[0].items[1].icon, tone: "clay" as const },
  { label: "Allergies", icon: conditionGroups[1].items[1].icon, tone: "gold" as const },
  { label: "Skin & hair", icon: conditionGroups[2].items[1].icon, tone: "forest" as const },
];

const trustIcons = [Clock, Certificate, HandHeart, GlobeHemisphereEast];

export function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getContent(locale).hero;
  const ui = getContent(locale).ui;
  return (
    <>
      <section id="top" className="hero-wash relative overflow-clip pt-[4.5rem] sm:pt-20">
        {/* Concentric rings behind the headline: a quiet, centred focal point. */}
        <div aria-hidden className="hero-rings pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
          <span />
          <span />
          <span />
        </div>

        {floaters.map(({ icon: Icon, cls, delay }) => (
          <Icon
            key={cls}
            aria-hidden
            weight="light"
            className={`floater pointer-events-none absolute hidden text-forest/35 md:block ${cls}`}
            style={{ animationDelay: delay }}
          />
        ))}

        <div className="container-page relative flex flex-col items-center pb-16 pt-20 text-center sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
          <h1 className="rise display text-forest-deep" style={rise(0)}>
            <span className="block text-[clamp(1.75rem,8.4vw,2.1rem)] leading-[1.1] sm:text-[4rem] lg:text-[4.5rem]">
              {t.line1}
            </span>
            <span className="block text-[clamp(1.75rem,8.4vw,2.1rem)] leading-[1.1] text-forest sm:text-[4rem] lg:text-[4.5rem]">
              {t.line2}
            </span>
          </h1>

          <p
            className="rise display mt-5 max-w-2xl text-[1.25rem] leading-snug text-ink/80 sm:mt-6 sm:text-[1.75rem]"
            style={rise(0.06)}
          >
            {t.sub}
          </p>

          <div className="rise mt-6 flex w-full max-w-2xl items-center gap-2 sm:mt-7 sm:gap-4" style={rise(0.1)}>
            <span aria-hidden className="h-px flex-1 bg-forest/25" />
            <p className="hero-pill display shrink-0 whitespace-nowrap rounded-full bg-leaf-soft px-3 py-1.5 text-[0.82rem] text-forest-deep sm:px-6 sm:py-2 sm:text-[1.2rem]">
              {t.pill}
            </p>
            <span aria-hidden className="h-px flex-1 bg-forest/25" />
          </div>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={rise(0.14)}>
            {t.desc}
          </p>

          <div className="rise mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={rise(0.18)}>
            <a href="#book" className="btn btn-primary shadow-card">
              {ui.book}
              <ArrowRight size={18} weight="bold" />
            </a>
            <a
              href="#care"
              className="btn border border-forest/20 bg-surface/80 text-forest-deep hover:border-forest/40 hover:bg-surface"
            >
              {t.explore}
            </a>
          </div>

          <div className="rise mt-12 w-full max-w-4xl border-t border-forest/10 pt-7" style={rise(0.26)}>
            <p className="text-[0.95rem] font-medium text-muted">{t.specialisedFor}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {specialised.map(({ icon: Icon, tone }, si) => {
                const label = t.specialised[si];
                return (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/90 py-1.5 pl-1.5 pr-4 text-[0.95rem] font-medium text-ink/85 shadow-card"
                >
                  <span className={`grid size-7 place-items-center rounded-full ${toneStyles[tone].tile}`}>
                    <Icon size={16} weight="duotone" className={toneStyles[tone].icon} />
                  </span>
                  {label}
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label={t.trustAria} className="bg-forest-deep text-white">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {t.trust.map(({ value, label }, i) => {
            const Icon = trustIcons[i];
            return (
            <div
              key={value}
              className={`flex flex-col items-center gap-3 px-3 py-9 text-center sm:py-11 ${
                i % 2 === 1 ? "border-l border-white/10" : ""
              } ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <Icon size={30} weight="duotone" className="text-gold" />
              <dt className="display text-[1.35rem] leading-tight sm:text-[1.7rem]">{value}</dt>
              <dd className="text-[0.9rem] text-white/65 sm:text-[0.95rem]">{label}</dd>
            </div>
            );
          })}
        </dl>
      </section>
    </>
  );
}
