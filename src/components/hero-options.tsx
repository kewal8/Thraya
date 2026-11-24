// Three hero options for review. Once one is chosen, it replaces hero.tsx and this file goes.
import { ArrowRight, Brain, FlowerLotus, Heart } from "@phosphor-icons/react/dist/ssr";
import { focusAreas, toneStyles } from "@/lib/site";

const rise = (delay: number) => ({
  style: { "--rise-delay": `${delay}s` } as React.CSSProperties,
});

const marks = [
  { icon: Heart, label: "Body", tile: "bg-clay-soft text-clay" },
  { icon: Brain, label: "Mind", tile: "bg-gold-soft text-gold-ink" },
  { icon: FlowerLotus, label: "Spirit", tile: "bg-leaf-soft text-forest" },
];

function Actions({ onDark = false, center = false }: { onDark?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${center ? "sm:justify-center" : ""}`}>
      <a href="#book" className={`btn ${onDark ? "bg-gold text-forest-deep hover:bg-gold-soft" : "btn-primary"}`}>
        Book a consultation
        <ArrowRight size={18} weight="bold" />
      </a>
      <a
        href="#care"
        className={`btn border ${
          onDark
            ? "border-white/30 text-white hover:border-white/60"
            : "border-forest/25 bg-surface text-forest-deep hover:border-forest/50"
        }`}
      >
        Explore our services
      </a>
    </div>
  );
}

/** Option 1: centred, close to the client's mock-up. */
export function HeroCentred() {
  return (
    <section id="top" className="border-b border-line bg-paper pt-[4.5rem] sm:pt-20">
      <div className="container-page flex flex-col items-center pb-20 pt-14 text-center sm:pb-24 sm:pt-20">
        <div className="rise flex items-end gap-3" aria-hidden {...rise(0)}>
          {marks.map(({ icon: Icon, tile }, i) => (
            <span
              key={i}
              className={`grid size-12 place-items-center rounded-2xl ${tile} ${i === 1 ? "mb-2" : ""}`}
            >
              <Icon size={24} weight="duotone" />
            </span>
          ))}
        </div>

        <h1 className="rise display mt-8 max-w-4xl text-forest-deep" {...rise(0.06)}>
          <span className="block text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem]">
            Personalised homeopathic care
          </span>
          <span className="mt-3 block text-[1.5rem] leading-tight text-forest sm:text-[2rem] lg:text-[2.4rem]">
            for women, men, children &amp; the entire family.
          </span>
        </h1>

        <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" {...rise(0.12)}>
          Classical homeopathy for acute and chronic concerns, led by Dr.&nbsp;Ardhra&nbsp;C.
        </p>

        <div className="rise mt-9 w-full sm:w-auto" {...rise(0.18)}>
          <Actions center />
        </div>

        <ul className="rise mt-12 flex flex-wrap justify-center gap-2.5" aria-label="Our focus areas" {...rise(0.24)}>
          {focusAreas.map(({ label, icon: Icon, tone }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-4 text-[0.95rem] font-medium text-ink/85"
            >
              <span className={`grid size-7 place-items-center rounded-full ${toneStyles[tone].tile}`}>
                <Icon size={16} weight="duotone" className={toneStyles[tone].icon} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Option 2: a deep green banner with gold accents. */
export function HeroBanner() {
  return (
    <section id="top" className="pt-[4.5rem] sm:pt-20">
      <div className="container-page pt-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-deep px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <FlowerLotus
            aria-hidden
            size={420}
            weight="thin"
            className="pointer-events-none absolute -bottom-24 -right-16 hidden text-white/[0.06] sm:block"
          />
          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <ul className="rise flex flex-wrap items-center gap-x-6 gap-y-2" {...rise(0)}>
                {marks.map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-2 text-[0.95rem] text-white/80">
                    <Icon size={22} weight="duotone" className="text-gold" />
                    {label}
                  </li>
                ))}
              </ul>
              <h1 className="rise display mt-8 text-white" {...rise(0.06)}>
                <span className="block text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem]">
                  Personalised homeopathic care
                </span>
                <span className="mt-3 block text-[1.5rem] leading-tight text-gold-soft sm:text-[2rem] lg:text-[2.3rem]">
                  for women, men, children &amp; the entire family.
                </span>
              </h1>
              <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl" {...rise(0.12)}>
                Classical homeopathy for acute and chronic concerns, led by Dr.&nbsp;Ardhra&nbsp;C.
              </p>
              <div className="rise mt-9" {...rise(0.18)}>
                <Actions onDark />
              </div>
            </div>

            <ul
              aria-label="Our focus areas"
              className="rise divide-y divide-white/15 border-y border-white/15 lg:col-span-4"
              {...rise(0.24)}
            >
              {focusAreas.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-4 py-4">
                  <Icon size={26} weight="duotone" className="shrink-0 text-gold" />
                  <span className="font-display text-[1.3rem]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Option 3: a soft coloured card, headline left, focus tiles right. */
export function HeroCard() {
  return (
    <section id="top" className="pt-[4.5rem] sm:pt-20">
      <div className="container-page pb-6 pt-4">
        <div className="grid gap-10 rounded-[2rem] bg-leaf-soft px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-16 lg:py-20">
          <div className="lg:col-span-7">
            <h1 className="rise display text-forest-deep" {...rise(0)}>
              <span className="block text-[2.6rem] sm:text-[3.6rem] lg:text-[4.2rem]">
                Personalised homeopathic care
              </span>
              <span className="mt-3 block text-[1.5rem] leading-tight text-forest sm:text-[1.9rem] lg:text-[2.1rem]">
                for women, men, children &amp; the entire family.
              </span>
            </h1>
            <p className="rise mt-7 max-w-lg text-lg leading-relaxed text-ink/75 sm:text-xl" {...rise(0.08)}>
              Classical homeopathy for acute and chronic concerns, led by Dr.&nbsp;Ardhra&nbsp;C.
            </p>
            <div className="rise mt-9" {...rise(0.14)}>
              <Actions />
            </div>
          </div>

          <ul aria-label="Our focus areas" className="rise grid gap-3 lg:col-span-5" {...rise(0.2)}>
            {focusAreas.map(({ label, icon: Icon, tone }, i) => (
              <li
                key={label}
                className={`flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-card ${
                  i === 1 ? "lg:ml-8" : ""
                }`}
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${toneStyles[tone].tile}`}>
                  <Icon size={26} weight="duotone" className={toneStyles[tone].icon} />
                </span>
                <span className="font-display text-[1.2rem] text-forest-deep sm:text-[1.4rem]">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
