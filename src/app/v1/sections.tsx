import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Certificate,
  Clock,
  Flower,
  FlowerTulip,
  GlobeHemisphereEast,
  HandHeart,
  Leaf,
  Plant,
} from "@phosphor-icons/react/dist/ssr";
import { conditionGroups, focusAreas, photos, promises, site, steps, toneStyles, triad, waLink } from "@/lib/site";

const rise = (delay: number) => ({ "--rise-delay": `${delay}s` }) as React.CSSProperties;

const floaters = [
  { icon: Leaf, cls: "left-[5%] top-[34%] size-11", delay: "0s" },
  { icon: Plant, cls: "left-[10%] bottom-[18%] size-9", delay: "1.2s" },
  { icon: Flower, cls: "right-[5%] top-[30%] size-10", delay: "0.6s" },
  { icon: FlowerTulip, cls: "right-[10%] bottom-[20%] size-8", delay: "1.8s" },
];

const specialised = [
  ...focusAreas.slice(0, 2).map((f) => ({ label: f.label, icon: f.icon, tone: f.tone })),
  { label: "PCOD / PCOS", icon: conditionGroups[0].items[1].icon, tone: "clay" as const },
  { label: "Allergies", icon: conditionGroups[1].items[1].icon, tone: "gold" as const },
  { label: "Skin & hair", icon: conditionGroups[2].items[1].icon, tone: "forest" as const },
];

const trust = [
  { icon: Clock, value: "10+ years", label: "of clinical experience" },
  { icon: Certificate, value: "MD (Hom.)", label: "postgraduate qualified" },
  { icon: HandHeart, value: "All ages", label: "women, men and children" },
  { icon: GlobeHemisphereEast, value: "Germany & France", label: "medicines sourced from" },
];

export function HeroV1() {
  return (
    <>
      <section id="top" className="v1-wash relative overflow-clip pt-[4.5rem] sm:pt-20">
        {floaters.map(({ icon: Icon, cls, delay }) => (
          <Icon
            key={cls}
            aria-hidden
            weight="light"
            className={`floater pointer-events-none absolute hidden text-forest/30 lg:block ${cls}`}
            style={{ animationDelay: delay }}
          />
        ))}

        <div className="container-page relative flex flex-col items-center pb-14 pt-16 text-center sm:pb-20 sm:pt-24 lg:pt-28">
          <h1 className="rise title text-forest-deep" style={rise(0)}>
            <span className="block text-[2.35rem] sm:text-[4.25rem] lg:text-[5rem]">Gentle Healing,</span>
            <span className="block text-[2.35rem] text-forest sm:text-[4.25rem] lg:text-[5rem]">
              Personalised for You
            </span>
          </h1>

          <p className="rise lede mt-6 max-w-[34rem] text-[1.3rem] text-ink/75 sm:text-[1.6rem]" style={rise(0.06)}>
            To Restore Balance, Relieve Symptoms and Support Lasting Health
          </p>

          <p
            className="rise mt-6 rounded-full bg-leaf-soft px-4 py-1.5 text-[0.92rem] font-medium text-forest-deep sm:px-5 sm:text-base"
            style={rise(0.1)}
          >
            for Women, Men, Children &amp; the Entire Family
          </p>

          <p className="rise mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted sm:text-lg" style={rise(0.14)}>
            Individualised care for acute and chronic concerns, led by Dr.&nbsp;Ardhra&nbsp;C.
          </p>

          <div className="rise mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={rise(0.18)}>
            <a href="#book" className="btn btn-primary shadow-card">
              Book a consultation
              <ArrowRight size={18} weight="bold" />
            </a>
            <a
              href="#care"
              className="btn border border-forest/20 bg-surface/80 text-forest-deep hover:border-forest/40 hover:bg-surface"
            >
              Explore our services
            </a>
          </div>

          <div className="rise mt-14 w-full max-w-3xl" style={rise(0.24)}>
            <p className="text-[0.92rem] text-muted">Specialised care for</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {specialised.map(({ label, icon: Icon, tone }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-[0.92rem] text-ink/85"
                >
                  <Icon size={16} weight="duotone" className={toneStyles[tone].icon} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Why patients trust Thraya" className="bg-forest-deep text-white">
        <dl className="container-page grid grid-cols-2 gap-x-6 gap-y-7 py-8 sm:py-9 lg:grid-cols-4">
          {trust.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-start gap-3">
              <Icon size={24} weight="duotone" className="mt-1 shrink-0 text-gold" />
              <div className="min-w-0">
                <dt className="title-sm text-[1.2rem] sm:text-[1.35rem]">{value}</dt>
                <dd className="mt-0.5 text-[0.88rem] text-white/70">{label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

/** The logo's heart, mind and figure colours carry Body, Mind and Spirit. */
const triadInk = { clay: "text-clay", gold: "text-gold-ink", forest: "text-forest" } as const;

export function ApproachV1() {
  return (
    <section id="approach" className="container-page py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <h2 className="title text-[2.4rem] text-forest-deep sm:text-[3.4rem] lg:col-span-5">
          Care that sees the whole person.
        </h2>
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted sm:text-lg lg:col-span-7 lg:pt-3">
          <p className="lede text-[1.3rem] text-ink sm:text-[1.5rem]">
            At Thraya Homeopathy, every patient is treated as an individual, with a focus on
            understanding the person as a whole rather than just the presenting complaint.
          </p>
          <p>
            Rooted in the principles of classical homeopathy, our approach involves detailed
            case-taking, attentive listening and individualised prescriptions, guided by each
            patient&rsquo;s unique symptoms and health history.
          </p>
          <p>Every consultation is approached with patience, compassion and care.</p>
        </div>
      </div>

      <ul className="mt-16 grid gap-8 border-t border-[var(--v1-rule)] pt-10 sm:mt-20 md:grid-cols-3 md:gap-10 md:pt-14">
        {triad.map(({ word, tone, body }) => (
          <li key={word}>
            <h3 className={`title text-[2.1rem] sm:text-[2.9rem] ${triadInk[tone]}`}>{word}</h3>
            <p className="mt-3 max-w-[32ch] text-[1.05rem] leading-relaxed text-muted">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ConditionsV1() {
  return (
    <section id="care" className="bg-tint py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2 className="title text-[2.4rem] text-forest-deep sm:text-[3.4rem] lg:col-span-7">
            Care for every stage of family life.
          </h2>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-muted sm:text-lg lg:col-span-5">
            Consultations for women, men and children, for a wide range of acute and chronic
            health concerns.
          </p>
        </div>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-3 lg:gap-10">
          {conditionGroups.map((g) => {
            const t = toneStyles[g.tone];
            return (
              <section key={g.title} aria-labelledby={`grp-${g.tone}`}>
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${t.bar}`} aria-hidden />
                  <h3 id={`grp-${g.tone}`} className="text-[1.05rem] font-semibold text-forest-deep">
                    {g.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-[0.95rem] text-muted lg:min-h-[3rem]">{g.intro}</p>
                <ul className="mt-5 border-t border-[var(--v1-rule)]">
                  {g.items.map(({ name, note, icon: Icon }) => (
                    <li key={name} className="border-b border-[var(--v1-rule)]">
                      <a
                        href={waLink(`Hello Thraya Homeopathy, I would like to ask about ${name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="v1-row -mx-3 flex items-start gap-4 rounded-xl px-3 py-5"
                      >
                        <Icon size={26} weight="duotone" className={`mt-0.5 shrink-0 ${t.icon}`} />
                        <span className="min-w-0 flex-1">
                          <span className="title-sm block text-[1.3rem] text-forest-deep">{name}</span>
                          <span className="mt-1 block text-[0.95rem] leading-relaxed text-muted">{note}</span>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-forest">
                            Ask about this
                            <ArrowRight size={14} weight="bold" className="v1-arrow" />
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-[var(--v1-rule)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="lede text-[1.25rem] text-forest-deep sm:text-[1.4rem]">
            Not sure if your concern is covered? Ask us before booking.
          </p>
          <a href="#book" className="btn btn-primary">
            Book a consultation
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

const credentials = [
  { term: "Degree", detail: "Bachelor of Homeopathic Medicine and Surgery (BHMS)" },
  { term: "Postgraduate", detail: "MD (Hom.) in Organon of Medicine and Homeopathic Philosophy" },
  {
    term: "Alma mater",
    detail: "Father Muller Homeopathic Medical College and Hospital, Deralakatte, Mangalore",
  },
];

const doctorStats = [
  { value: "10+ years", label: "of clinical experience" },
  { value: "Women & children", label: "special focus of practice" },
];

export function DoctorV1() {
  return (
    <section id="doctor" className="container-page py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-tint lg:col-span-5">
          <Image
            src={photos.doctor}
            alt="Placeholder photo, to be replaced with Dr. Ardhra C's portrait"
            fill
            sizes="(min-width: 1024px) 38vw, 92vw"
            className="object-cover object-top"
          />
        </div>

        <div className="lg:col-span-7">
          <h2 className="title text-[2.8rem] text-forest-deep sm:text-[4rem]">Dr. Ardhra C</h2>
          <p className="mt-2 text-lg font-medium text-clay">BHMS, MD (Hom.)</p>
          <p className="lede mt-7 max-w-[40ch] text-[1.25rem] text-ink/85 sm:text-[1.4rem]">
            With over 10 years of clinical experience, Dr. Ardhra specialises in classical
            homeopathy, with a special focus on women&rsquo;s and children&rsquo;s health, while
            catering to patients of all ages with a wide range of acute and chronic health
            concerns.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            {doctorStats.map((s) => (
              <div key={s.value}>
                <dt className="title-sm text-[1.45rem] text-forest sm:text-[1.8rem]">{s.value}</dt>
                <dd className="mt-1 text-[0.9rem] text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>

          <dl className="mt-10 border-t border-[var(--v1-rule)]">
            {credentials.map(({ term, detail }) => (
              <div
                key={term}
                className="grid gap-1 border-b border-[var(--v1-rule)] py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="text-[0.88rem] font-semibold text-forest">{term}</dt>
                <dd className="leading-relaxed text-ink/85">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function MedicinesV1() {
  return (
    <section className="bg-forest-deep text-white">
      <div className="container-page grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-forest lg:col-span-5 lg:aspect-[4/5]">
          <Image
            src={photos.remedies}
            alt="Amber remedy bottles with white flowers and green leaves on a wooden table"
            fill
            sizes="(min-width: 1024px) 38vw, 92vw"
            className="object-cover object-bottom"
          />
        </div>

        <div className="lg:col-span-7">
          <h2 className="title text-[2.4rem] sm:text-[3.4rem]">Gentle medicine, chosen for you.</h2>
          <ul className="mt-10 border-t border-[var(--v1-rule-dark)]">
            {promises.map(({ title, body }) => (
              <li
                key={title}
                className="grid gap-1.5 border-b border-[var(--v1-rule-dark)] py-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:py-6"
              >
                <h3 className="title-sm text-[1.35rem] sm:text-[1.45rem]">{title}</h3>
                <p className="leading-relaxed text-white/72 sm:pt-1">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function VisitV1() {
  return (
    <section className="bg-gold-wash py-24 sm:py-32">
      <div className="container-page">
        <h2 className="title max-w-2xl text-[2.4rem] text-forest-deep sm:text-[3.4rem]">
          Four simple steps to begin your care.
        </h2>

        <ol className="relative mt-14 grid gap-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div aria-hidden className="absolute left-5 right-0 top-5 hidden border-t border-[var(--v1-rule)] lg:block" />
          {steps.map(({ title, body }, i) => (
            <li key={title} className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 sm:block">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute bottom-[-2.5rem] left-5 top-10 border-l border-[var(--v1-rule)] sm:hidden"
                />
              )}
              <span className="relative grid size-10 place-items-center rounded-full bg-forest text-[0.95rem] font-semibold text-white ring-8 ring-[var(--color-gold-wash)]">
                {i + 1}
              </span>
              <div>
                <h3 className="title-sm mt-1 text-[1.6rem] text-forest-deep sm:mt-6">{title}</h3>
                <p className="mt-2 max-w-[30ch] leading-relaxed text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function LocationV1() {
  const { lat, lng } = site.geo;
  const embed = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
  return (
    <section id="location" className="container-page pb-24 pt-4 sm:pb-32 sm:pt-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="title text-[2.4rem] text-forest-deep sm:text-[3.4rem]">Visit the clinic.</h2>
          <address className="mt-7 not-italic">
            <p className="text-lg font-semibold text-forest-deep">{site.clinicName}</p>
            <p className="mt-2 text-lg leading-relaxed text-muted">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            {site.hours && (
              <p className="mt-4 flex items-center gap-2 text-muted">
                <Clock size={18} /> {site.hours}
              </p>
            )}
          </address>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
            Get directions
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-[1.75rem] border border-line lg:col-span-7">
          <iframe
            src={embed}
            title={`Map showing ${site.clinicName}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

