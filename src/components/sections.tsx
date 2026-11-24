import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Certificate,
  ChatCircleDots,
  Clock,
  GraduationCap,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { conditionGroups, nav, photos, promises, site, steps, toneStyles, triad, waLink, phoneIsWhatsapp } from "@/lib/site";

export function Approach() {
  return (
    <section id="approach" className="container-page py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="section-label">Our approach</p>
          <h2 className="display mt-5 text-[2.5rem] text-forest-deep sm:text-[3.4rem]">
            Care that sees
            <span className="block text-forest">the whole person.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7 lg:pt-12">
          <p className="text-ink/85">
            At Thraya Homeopathy, every patient is treated as an individual, with a focus on
            understanding the person as a whole rather than just the presenting complaint.
          </p>
          <p>
            Rooted in the principles of classical homeopathy, our approach involves detailed
            case-taking, attentive listening and individualised prescriptions, guided by each
            patient&rsquo;s unique symptoms and health history.
          </p>
          <p>Every consultation is approached with patience, compassion and care.</p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {triad.map(({ word, icon: Icon, body }, i) => (
          <Reveal
            key={word}
            delay={i * 0.08}
            className="lift rounded-[1.75rem] border border-line bg-surface p-7 shadow-card sm:p-8"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-forest-deep text-gold-soft">
              <Icon size={28} weight="duotone" />
            </span>
            <h3 className="display mt-6 text-[1.9rem] text-forest-deep">{word}</h3>
            <p className="mt-3 leading-relaxed text-muted">{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const conditionCards = conditionGroups.flatMap((g) =>
  g.items.map((item) => ({ ...item, group: g.title, tone: g.tone })),
);

export function Conditions() {
  return (
    <section id="care" className="bg-tint py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">What we treat</p>
          <h2 className="display mt-5 text-[2.5rem] text-forest-deep sm:text-[3.4rem]">
            Care for every stage
            <span className="block text-forest">of family life.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Consultations for women, men and children, for a wide range of acute and chronic
            health concerns.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {conditionCards.map(({ name, note, icon: Icon, tone, group }, i) => {
            const t = toneStyles[tone];
            return (
              <Reveal
                as="li"
                key={name}
                delay={(i % 4) * 0.06}
                className="lift group relative flex flex-col rounded-[1.25rem] border border-line bg-surface p-4 shadow-card sm:rounded-[1.5rem] sm:p-6"
              >
                <span className={`grid size-11 shrink-0 place-items-center rounded-xl sm:size-14 sm:rounded-2xl ${t.tile}`}>
                  <Icon size={24} weight="duotone" className={t.icon} />
                </span>
                <div className="mt-4 flex flex-1 flex-col sm:mt-6">
                  <p className="hidden text-[0.8rem] font-semibold text-muted sm:block">{group}</p>
                  <h3 className="display text-[1.1rem] leading-tight text-forest-deep sm:mt-1 sm:text-[1.35rem]">{name}</h3>
                  <p className="mt-2 hidden text-[0.95rem] leading-relaxed text-muted sm:block">{note}</p>
                  <a
                    href={waLink(`Hello Thraya Homeopathy, I would like to ask about ${name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.85rem] font-semibold text-forest after:absolute after:inset-0 after:rounded-[inherit] hover:text-forest-deep sm:pt-5 sm:text-[0.92rem]"
                  >
                    Ask about this
                    <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-[1.5rem] bg-forest p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <ChatCircleDots size={30} weight="duotone" className="shrink-0 text-gold" />
            <p className="text-lg">Not sure if your concern is covered? Ask us before booking.</p>
          </div>
          <a href="#book" className="btn bg-surface text-forest-deep hover:bg-gold-soft">
            Book a consultation
            <ArrowRight size={18} weight="bold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Medicines() {
  return (
    <section className="relative overflow-clip bg-forest-deep text-white">
      <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="section-label on-dark">Why Thraya</p>
          <h2 className="display mt-5 text-[2.5rem] text-white sm:text-[3.2rem]">
            Gentle medicine,
            <span className="block text-gold-soft">chosen for you.</span>
          </h2>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-forest">
            <Image
              src={photos.globules}
              alt="Homeopathic globules beside a stethoscope"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {promises.map(({ title, body, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.06}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 sm:p-7"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-gold text-forest-deep">
                <Icon size={28} weight="duotone" />
              </span>
              <h3 className="display mt-6 text-[1.5rem] leading-tight text-white sm:text-[1.65rem]">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-white/70">{body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const credentials = [
  {
    icon: GraduationCap,
    term: "Degree",
    detail: "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
  },
  {
    icon: Certificate,
    term: "Postgraduate",
    detail: "MD (Hom.) in Organon of Medicine and Homeopathic Philosophy",
  },
  {
    icon: Buildings,
    term: "Alma mater",
    detail: "Father Muller Homeopathic Medical College and Hospital, Deralakatte, Mangalore",
  },
];

const doctorStats = [
  { value: "10+ years", label: "of clinical experience" },
  { value: "Women & children", label: "special focus of practice" },
];

export function Doctor() {
  return (
    <section id="doctor" className="container-page py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          {/* Placeholder photo. Replace with Dr. Ardhra's portrait (suggested 900x1100). */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-tint shadow-card">
            <Image
              src={photos.doctor}
              alt="Dr. Ardhra C"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-7">
          <p className="section-label">Know your doctor</p>
          <h2 className="display mt-5 text-5xl text-forest-deep sm:text-[3.6rem]">Dr. Ardhra C</h2>
          <p className="mt-3 text-lg font-medium text-clay">BHMS, MD (Hom.)</p>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink/85">
            With over 10 years of clinical experience, Dr. Ardhra specialises in classical
            homeopathy, with a special focus on women&rsquo;s and children&rsquo;s health, while
            catering to patients of all ages with a wide range of acute and chronic health
            concerns.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-5 border-y border-line py-6 sm:grid-cols-2 sm:gap-6">
            {doctorStats.map((s) => (
              <div key={s.value}>
                <dt className="display whitespace-nowrap text-[1.75rem] leading-none text-forest lg:text-[1.9rem]">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[0.85rem] leading-snug text-muted sm:text-[0.95rem]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 grid gap-3">
            {credentials.map(({ icon: Icon, term, detail }) => (
              <li key={term} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-forest-deep text-gold-soft">
                  <Icon size={22} weight="duotone" />
                </span>
                <p className="leading-relaxed text-ink/85">
                  <span className="block text-[0.85rem] font-semibold text-forest">{term}</span>
                  {detail}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section className="bg-gold-wash py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Your first visit</p>
          <h2 className="display mt-5 text-[2.5rem] text-forest-deep sm:text-[3.4rem]">
            Four simple steps
            <span className="block text-forest">to begin your care.</span>
          </h2>
        </Reveal>
        <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-[3.75rem] hidden border-t-2 border-dashed border-forest/25 lg:block"
          />
          {steps.map(({ title, body, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.08}
              className="relative rounded-[1.5rem] border border-line bg-surface p-6 text-center shadow-card sm:p-7"
            >
              <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-forest text-white shadow-card ring-8 ring-surface">
                <Icon size={28} weight="duotone" />
                <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-gold text-xs font-bold text-forest-deep">
                  {i + 1}
                </span>
              </span>
              <h3 className="display mt-6 text-[1.5rem] text-forest-deep">{title}</h3>
              <p className="mx-auto mt-2 max-w-[28ch] leading-relaxed text-muted">{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Location() {
  const { lat, lng } = site.geo;
  const embed = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
  return (
    <section id="location" className="container-page py-20 sm:py-24">
      <div className="grid overflow-hidden rounded-[2rem] border border-line bg-surface shadow-card lg:grid-cols-12">
        <Reveal className="p-7 sm:p-10 lg:col-span-5 lg:p-12">
          <span className="grid size-14 place-items-center rounded-2xl bg-forest-deep text-gold-soft">
            <MapPin size={28} weight="duotone" />
          </span>
          <h2 className="display mt-6 text-[2.5rem] text-forest-deep sm:text-[3rem]">
            Visit
            <span className="text-forest"> the clinic.</span>
          </h2>
          <address className="mt-6 not-italic">
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
        </Reveal>

        <div className="relative min-h-80 lg:col-span-7">
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

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-block rounded-2xl bg-surface px-5 py-4">
            <Image
              src="/brand/thraya-logo.png"
              alt="Dr. Ardhra's Thraya Homeopathy. Nurturing Body, Mind and Spirit."
              width={414}
              height={189}
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-white/70">
            Classical homeopathy for women, men, children and the entire family.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-sm font-semibold text-gold">Explore</h2>
          <ul className="mt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold text-gold">Contact</h2>
          <ul className="mt-3 space-y-3 text-white/75">
            {site.whatsapp && (
              <li className="flex gap-3">
                <WhatsappLogo size={20} weight="fill" className="mt-0.5 shrink-0 text-gold" />
                <span>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {site.whatsappDisplay}
                  </a>
                  {phoneIsWhatsapp && (
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-[0.9rem] text-white/60 hover:text-white"
                    >
                      Call or WhatsApp
                    </a>
                  )}
                </span>
              </li>
            )}
            {site.phone && !phoneIsWhatsapp && (
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
            )}
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </li>
            {site.hours && <li>{site.hours}</li>}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 pb-24 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <div>
            <p>&copy; 2026 Thraya Homeopathy</p>
            <p className="mt-1 text-white/45">
              Information on this site is general and does not replace a consultation.
              Placeholder photos from Unsplash.
            </p>
          </div>
          <p className="shrink-0 sm:pr-20 sm:text-right">
            Designed and developed by <span className="font-semibold text-white/80">Kewal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
