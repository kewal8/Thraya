// Copy 2: "The Clinic Card". A separate visual world for comparison; the homepage is untouched.
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckSquare,
  List,
  MapPin,
  Phone,
  Plus,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react/dist/ssr";
import {
  conditionGroups,
  faqs,
  nav,
  phoneIsWhatsapp,
  photos,
  promises,
  site,
  steps,
  triad,
  waLink,
} from "@/lib/site";
import { BookingForm } from "./booking-card";
import { Menu } from "./menu";
import "./card.css";

export const metadata: Metadata = {
  title: "Thraya Homeopathy (Copy 2)",
  robots: { index: false, follow: false },
};

const tel = `tel:${site.phone.replace(/\s/g, "")}`;
const bookText = "Hello Thraya Homeopathy, I would like to book a consultation.";

const stockFor = { clay: "k-card--pink", gold: "k-card--yellow", forest: "" } as const;
const tabAt = ["", "k-tab--1", "k-tab--2"] as const;

const trust = [
  { value: "10+ years", label: "of clinical experience" },
  { value: "MD (Hom.)", label: "postgraduate qualified" },
  { value: "All ages", label: "women, men and children" },
  { value: "Germany & France", label: "medicines sourced from" },
];

const specialised = ["Women's Health", "Children's Health", "PCOD / PCOS", "Allergies", "Skin & hair"];

const credentials = [
  { term: "Degree", detail: "Bachelor of Homeopathic Medicine and Surgery (BHMS)" },
  { term: "Postgraduate", detail: "MD (Hom.) in Organon of Medicine and Homeopathic Philosophy" },
  { term: "Alma mater", detail: "Father Muller Homeopathic Medical College and Hospital, Deralakatte, Mangalore" },
];

const reassurances = [
  "Opens WhatsApp with your request ready to send",
  "Your details are shared only when you press send",
  "Patients of all ages are welcome",
];

export default function CopyTwo() {
  return (
    <div data-theme="thraya-card">
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=erode@400,500,600,700&display=swap"
        precedence="default"
      />

      {/* Ink for the rubber stamps: a slight bleed at the edges and uneven coverage */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <filter id="k-ink" x="-6%" y="-12%" width="112%" height="124%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2.6" xChannelSelector="R" yChannelSelector="G" result="bled" />
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" seed="11" result="grain" />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -2.7 0 0 0 2.15"
            result="coverage"
          />
          <feComposite in="bled" in2="coverage" operator="in" />
        </filter>
      </svg>

      <Header />

      <main id="main">
        <Hero />
        <Approach />
        <Conditions />
        <Doctor />
        <WhyThraya />
        <Visit />
        <Faq />
        <Booking />
        <Location />
      </main>

      <Footer />

      <a
        href={waLink(bookText)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Thraya Homeopathy on WhatsApp"
        className="k-fab"
      >
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="k-header">
      <div className="k-wrap k-header__row relative">
        <a href="#top" aria-label="Thraya Homeopathy, home" className="shrink-0">
          <Image
            src="/brand/thraya-logo.png"
            alt="Dr. Ardhra's Thraya Homeopathy"
            width={414}
            height={189}
            preload
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav aria-label="Primary" className="k-nav hidden lg:block">
          <ul className="flex items-center">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={tel} className="k-btn k-btn--line !min-h-11 !px-3 sm:!px-4" aria-label="Call us">
            <Phone size={18} weight="bold" />
            <span className="hidden sm:inline">Call us</span>
          </a>
          <a href="#book" className="k-btn k-btn--ink !min-h-11 hidden !px-4 sm:inline-flex">
            Book a consultation
          </a>
          <Menu
            summary={
              <summary className="k-btn k-btn--line !min-h-11 !px-3" aria-label="Menu">
                <List size={20} weight="bold" className="k-menu__open" />
                <X size={20} weight="bold" className="k-menu__close" />
              </summary>
            }
          >
            <div className="k-menu__panel">
              <ul>
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="k-menu__link">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid gap-2">
                <a href="#book" className="k-btn k-btn--ink">
                  Book a consultation
                </a>
                <a href={waLink(bookText)} target="_blank" rel="noopener noreferrer" className="k-btn k-btn--line">
                  <WhatsappLogo size={20} weight="fill" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Menu>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="k-wrap pb-12 pt-5 sm:pb-16 sm:pt-8">
      <div className="k-card k-card--punched">
        <div className="k-cardhead">
          <p className="k-title text-[1.05rem] sm:text-[1.2rem]">{site.clinicName}</p>
          <p className="text-[0.85rem]" style={{ color: "var(--ink-soft)" }}>
            {site.tagline}
          </p>
        </div>

        <div className="relative mt-7 sm:mt-9">
          <h1 className="k-title k-h1 pr-2">
            <span className="block">Gentle Healing,</span>
            <span className="block">Personalised for You</span>
          </h1>
          <p className="k-sub mt-4 max-w-[34ch] sm:mt-5">
            To Restore Balance, Relieve Symptoms and Support Lasting Health
          </p>
          <span className="k-stamp k-stamp--hero k-stamp--settle">
            <span className="k-stamp__big">Dr. Ardhra C</span>
            <span className="k-stamp__small">BHMS, MD (Hom.)</span>
          </span>
        </div>

        <div className="k-rows mt-7 border-y sm:mt-9" style={{ borderColor: "var(--rule-strong)" }}>
          <p className="py-3 text-[1.15rem] sm:text-[1.35rem]" style={{ fontFamily: "var(--font-title)" }}>
            for Women, Men, Children &amp; the Entire Family
          </p>
          <p className="k-body py-3">
            Individualised care for acute and chronic concerns, led by Dr.&nbsp;Ardhra&nbsp;C.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a href="#book" className="k-btn k-btn--ink">
            Book a consultation
            <ArrowRight size={18} weight="bold" />
          </a>
          <a href="#care" className="k-link self-start sm:self-auto">
            Explore our services
          </a>
        </div>

        <dl className="k-boxes mt-9 grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <div
              key={t.value}
              className={`${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              style={{ borderColor: "var(--rule-strong)" }}
            >
              <dt className="k-title text-[1.25rem] sm:text-[1.6rem]">{t.value}</dt>
              <dd className="mt-1 text-[0.875rem] leading-snug" style={{ color: "var(--ink-soft)" }}>
                {t.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7">
          <p className="k-label">Specialised care for</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {specialised.map((s) => (
              <li key={s} className="flex items-center gap-2 text-[1rem] font-medium">
                <CheckSquare size={20} weight="fill" style={{ color: "var(--violet)" }} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionCard({
  id,
  tab,
  tone = "",
  at = 0,
  className = "",
  children,
}: {
  id?: string;
  tab: string;
  tone?: string;
  at?: 0 | 1 | 2;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="k-wrap k-section !pt-6 sm:!pt-8">
      <div className={`k-card k-tabbed ${tone} ${className}`}>
        <span className={`k-tab ${tabAt[at]}`}>{tab}</span>
        {children}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <SectionCard id="approach" tab="Our approach">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="k-title k-h2 lg:col-span-5">
          <span className="block">Care that sees</span>
          <span className="block">the whole person.</span>
        </h2>
        <div className="space-y-4 lg:col-span-7">
          <p className="k-lead">
            At Thraya Homeopathy, every patient is treated as an individual, with a focus on
            understanding the person as a whole rather than just the presenting complaint.
          </p>
          <p className="k-body">
            Rooted in the principles of classical homeopathy, our approach involves detailed
            case-taking, attentive listening and individualised prescriptions, guided by each
            patient&rsquo;s unique symptoms and health history.
          </p>
          <p className="k-body">Every consultation is approached with patience, compassion and care.</p>
        </div>
      </div>

      <dl className="k-boxes mt-10 md:grid-cols-3">
        {triad.map(({ word, icon: Icon, body }, i) => (
          <div
            key={word}
            className={`!p-5 sm:!p-6 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""}`}
            style={{ borderColor: "var(--rule-strong)" }}
          >
            <dt className="flex items-center gap-3">
              <Icon size={28} weight="duotone" style={{ color: "var(--ink)" }} />
              <span className="k-title k-h3">{word}</span>
            </dt>
            <dd className="k-body mt-3 !text-base">{body}</dd>
          </div>
        ))}
      </dl>
    </SectionCard>
  );
}

function Conditions() {
  return (
    <section id="care" className="k-section">
      <div className="k-wrap">
        <div className="k-card k-card--pale k-tabbed">
          <span className="k-tab k-tab--2">What we treat</span>
          <h2 className="k-title k-h2 max-w-2xl">
            <span className="block">Care for every stage</span>
            <span className="block">of family life.</span>
          </h2>
          <p className="k-lead mt-4 !text-[var(--ink-soft)]">
            Consultations for women, men and children, for a wide range of acute and chronic
            health concerns.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-start">
          {conditionGroups.map((g, gi) => (
            <article key={g.title} className={`k-card k-tabbed ${stockFor[g.tone]} !p-5 sm:!p-7`}>
              <span className={`k-tab k-tab--card ${tabAt[gi]}`}>{g.title}</span>
              <p className="k-body !text-base">{g.intro}</p>
              <ul className="k-rows mt-4 border-t" style={{ borderColor: "var(--rule-strong)" }}>
                {g.items.map(({ name, note, icon: Icon }) => (
                  <li key={name} className="py-4">
                    <div className="flex items-start gap-3">
                      <Icon size={22} weight="duotone" className="mt-0.5 shrink-0" style={{ color: "var(--ink)" }} />
                      <div className="min-w-0">
                        <h3 className="k-title text-[1.2rem] leading-snug">{name}</h3>
                        <p className="mt-1 text-[0.95rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                          {note}
                        </p>
                        <a
                          href={waLink(`Hello Thraya Homeopathy, I would like to ask about ${name}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="k-link mt-2 inline-flex min-h-11 text-[0.92rem]"
                        >
                          Ask about this
                          <ArrowRight size={14} weight="bold" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div
          className="mt-8 flex flex-col items-start gap-4 border-y py-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--rule-strong)" }}
        >
          <p className="k-title text-[1.25rem] sm:text-[1.4rem]">
            Not sure if your concern is covered? Ask us before booking.
          </p>
          <a href="#book" className="k-btn k-btn--ink shrink-0">
            Book a consultation
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <SectionCard id="doctor" tab="Know your doctor" tone="k-card--pale" at={1}>
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 lg:col-span-4">
          {/* Placeholder photo. Replace with Dr. Ardhra's portrait (suggested 900x1100). */}
          <div className="k-mounted mx-auto max-w-[19rem] md:mx-0">
            <div className="k-print relative aspect-[4/5]">
              <Image
                src={photos.doctor}
                alt="Dr. Ardhra C"
                fill
                sizes="(min-width: 768px) 30vw, 80vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="min-w-0 md:col-span-7 lg:col-span-8">
          <h2 className="k-title k-h2 !text-[clamp(2.4rem,3vw+1rem,3.8rem)]">Dr. Ardhra C</h2>
          <p className="mt-3">
            <span className="k-stamp k-stamp--line">
              <span className="k-stamp__big">BHMS, MD (Hom.)</span>
            </span>
          </p>
          <p className="k-lead mt-5 max-w-[60ch]">
            With over 10 years of clinical experience, Dr. Ardhra specialises in classical
            homeopathy, with a special focus on women&rsquo;s and children&rsquo;s health, while
            catering to patients of all ages with a wide range of acute and chronic health
            concerns.
          </p>

          <dl className="k-boxes mt-8 sm:grid-cols-2">
            <div>
              <dt className="k-title text-[1.6rem]">10+ years</dt>
              <dd className="mt-1 text-[0.9rem]" style={{ color: "var(--ink-soft)" }}>
                of clinical experience
              </dd>
            </div>
            <div className="border-t sm:border-l sm:border-t-0" style={{ borderColor: "var(--rule-strong)" }}>
              <dt className="k-title text-[1.6rem]">Women &amp; children</dt>
              <dd className="mt-1 text-[0.9rem]" style={{ color: "var(--ink-soft)" }}>
                special focus of practice
              </dd>
            </div>
          </dl>

          <dl className="k-rows mt-8 border-y" style={{ borderColor: "var(--rule-strong)" }}>
            {credentials.map((c) => (
              <div key={c.term} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="k-label sm:pt-0.5">{c.term}</dt>
                <dd className="leading-relaxed">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionCard>
  );
}

function WhyThraya() {
  return (
    <SectionCard tab="Why Thraya" tone="k-card--ink" at={2}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 className="k-title k-h2">
            <span className="block">Gentle medicine,</span>
            <span className="block" style={{ color: "var(--on-ink-accent)" }}>
              chosen for you.
            </span>
          </h2>
          <div
            className="k-print relative mt-8 aspect-[4/3] rounded-[4px] lg:aspect-[4/5]"
            style={{ ["--print-paper" as string]: "#d3e5c5" }}
          >
            <Image
              src={photos.remedies}
              alt="Amber remedy bottles with white flowers and green leaves on a wooden table"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>

        <ul className="k-rows border-y lg:col-span-7 lg:self-center" style={{ borderColor: "var(--rule-strong)" }}>
          {promises.map(({ title, body, icon: Icon }) => (
            <li key={title} className="flex gap-4 py-6 sm:gap-5">
              <Icon size={30} weight="duotone" className="mt-0.5 shrink-0" style={{ color: "var(--on-ink-accent)" }} />
              <div>
                <h3 className="k-title k-h3">{title}</h3>
                <p className="k-body mt-1.5">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}

function Visit() {
  return (
    <SectionCard tab="Your first visit" at={1}>
      <h2 className="k-title k-h2">
        <span className="block">Four simple steps</span>
        <span className="block">to begin your care.</span>
      </h2>

      <ol className="mt-9 border-y" style={{ borderColor: "var(--rule-strong)" }}>
        {steps.map(({ title, body, icon: Icon }, i) => (
          <li
            key={title}
            className={`grid grid-cols-[2.75rem_1fr] gap-x-4 py-5 sm:grid-cols-[4rem_14rem_1fr] sm:items-baseline sm:gap-x-6 ${i > 0 ? "border-t" : ""}`}
            style={{ borderColor: "var(--rule)" }}
          >
            <span className="k-title text-[2rem] leading-none sm:text-[2.6rem]" style={{ color: "var(--ink)" }}>
              {i + 1}
            </span>
            <h3 className="k-title k-h3 flex items-center gap-2.5">
              <Icon size={22} weight="duotone" className="shrink-0" style={{ color: "var(--ink-soft)" }} />
              {title}
            </h3>
            <p className="k-body col-start-2 mt-1 sm:col-start-3 sm:mt-0">{body}</p>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}

function Faq() {
  return (
    <SectionCard id="faq" tab="Questions" tone="k-card--pink" at={2}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="k-title k-h2">
            <span className="block">Everything you</span>
            <span className="block">might be wondering.</span>
          </h2>
          <div className="mt-8 border-y py-6" style={{ borderColor: "var(--rule-strong)" }}>
            <p className="k-title k-h3">Still have a question?</p>
            <p className="k-body mt-2">Send us a message and we will help before you book.</p>
            <a
              href={waLink("Hello Thraya Homeopathy, I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="k-btn k-btn--ink mt-5 w-full sm:w-auto"
            >
              <WhatsappLogo size={20} weight="fill" />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-b lg:col-span-7" style={{ borderColor: "var(--rule-strong)" }}>
          {faqs.map(({ q, a }, i) => (
            <details
              key={q}
              name="k-faq"
              open={i === 0}
              className="k-faq border-t"
              style={{ borderColor: "var(--rule-strong)" }}
            >
              <summary className="flex min-h-16 items-center justify-between gap-5 py-4">
                <h3 className="k-title text-[1.2rem] leading-snug sm:text-[1.4rem]">{q}</h3>
                <Plus size={22} weight="bold" className="k-faq__mark shrink-0" style={{ color: "var(--ink)" }} />
              </summary>
              <p className="k-body max-w-[62ch] pb-6">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

function Booking() {
  return (
    <SectionCard id="book" tab="Begin your care" className="k-card--punched">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 className="k-title k-h2">
            <span className="block">Book your</span>
            <span className="block">consultation.</span>
          </h2>
          <p className="k-lead mt-5 max-w-md">
            Share a few details and your request opens in WhatsApp, ready to send. We will
            confirm a consultation time with you.
          </p>
          <ul className="mt-7 space-y-3">
            {reassurances.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <CheckSquare size={22} weight="fill" className="mt-0.5 shrink-0" style={{ color: "var(--violet)" }} />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--rule-strong)" }}>
            <p className="k-label">{phoneIsWhatsapp ? "Call or WhatsApp" : "WhatsApp"}</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="k-link mt-1 text-[1.15rem]">
              <WhatsappLogo size={20} weight="fill" />
              {site.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <BookingForm />
        </div>
      </div>
    </SectionCard>
  );
}

function Location() {
  const { lat, lng } = site.geo;
  const embed = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
  return (
    <SectionCard id="location" tab="Location" tone="k-card--pale" at={1}>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="k-title k-h2">Visit the clinic.</h2>
          <address className="mt-6 not-italic">
            <p className="text-lg font-semibold">{site.clinicName}</p>
            <p className="k-body mt-2">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            {site.hours && <p className="k-body mt-3">{site.hours}</p>}
          </address>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="k-btn k-btn--ink mt-7">
            <MapPin size={18} weight="bold" />
            Get directions
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="k-map lg:h-full">
            <iframe
              src={embed}
              title={`Map showing ${site.clinicName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--stock-ink)", color: "var(--on-ink)" }}>
      <div className="k-wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-block rounded-[6px] px-5 py-4" style={{ background: "var(--stock-green)" }}>
            <Image
              src="/brand/thraya-logo.png"
              alt="Dr. Ardhra's Thraya Homeopathy. Nurturing Body, Mind and Spirit."
              width={414}
              height={189}
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm leading-relaxed" style={{ color: "var(--on-ink-soft)" }}>
            Classical homeopathy for women, men, children and the entire family.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-sm font-semibold" style={{ color: "var(--on-ink-accent)" }}>
            Explore
          </h2>
          <ul className="mt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center no-underline hover:underline"
                  style={{ color: "var(--on-ink-soft)" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold" style={{ color: "var(--on-ink-accent)" }}>
            Contact
          </h2>
          <ul className="mt-3 space-y-3" style={{ color: "var(--on-ink-soft)" }}>
            <li className="flex gap-3">
              <WhatsappLogo size={20} weight="fill" className="mt-0.5 shrink-0" style={{ color: "var(--on-ink-accent)" }} />
              <span>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {site.whatsappDisplay}
                </a>
                {phoneIsWhatsapp && (
                  <a href={tel} className="mt-1 block text-[0.9rem] hover:underline">
                    Call or WhatsApp
                  </a>
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0" style={{ color: "var(--on-ink-accent)" }} />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--on-ink-rule)" }}>
        <div
          className="k-wrap flex flex-col gap-2 pb-24 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:py-6"
          style={{ color: "rgb(241 244 232 / 0.62)" }}
        >
          <div>
            <p>&copy; 2026 Thraya Homeopathy</p>
            <p className="mt-1">
              Information on this site is general and does not replace a consultation. Placeholder
              photos from Unsplash.
            </p>
          </div>
          <p className="shrink-0 sm:pr-20 sm:text-right">
            Designed and developed by <span className="font-semibold" style={{ color: "var(--on-ink)" }}>Kewal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
