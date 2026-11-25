/* eslint-disable @next/next/no-img-element */
// Draft redesign (Hallmark, Atelier with the Thraya brand kept). The live homepage is untouched.
import type { Metadata } from "next";
import Image from "next/image";
import { faqs, nav, site, triad, waLink } from "@/lib/site";
import { BookingCard } from "./booking-card";
import { ConditionsSwitcher } from "./conditions-switcher";
import "./draft.css";

export const metadata: Metadata = {
  title: "Draft | Thraya Homeopathy",
  robots: { index: false },
};

const stillLife = {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg/1920px-Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg",
  srcSet:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg/960px-Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg 960w, https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg/1280px-Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg 1280w, https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg/1920px-Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg 1920w",
  credit: "https://commons.wikimedia.org/wiki/File:Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg",
};

const stainFor = { clay: "var(--stain-clay)", gold: "var(--stain-gold)", forest: "var(--stain-green)" } as const;

const draftNav = nav
  .filter((n) => n.href !== "#faq" && n.href !== "#location")
  .concat([
    { label: "Questions", href: "#questions" },
    { label: "Visit", href: "#visit" },
  ]);

const tel = `tel:${site.phone.replace(/\s/g, "")}`;
const mapSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=16&output=embed`;

export default function Draft() {
  return (
    <div className="draft" data-theme="thraya-draft">
      <header className="d-nav">
        <div className="d-nav__pill">
          <a href="#top" className="d-nav__logo" aria-label="Thraya Homeopathy, home">
            <Image src="/brand/thraya-logo.png" alt="Dr. Ardhra's Thraya Homeopathy" width={414} height={189} preload />
          </a>
          <nav aria-label="Primary">
            <ul className="d-nav__links">
              {draftNav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="d-nav__actions">
            <a className="d-link d-nav__call" href={tel} aria-label={`Call ${site.phone}`}>
              Call<span className="d-nav__call-label">&nbsp;{site.phone}</span>
            </a>
            <a className="d-btn" href="#book">
              Book
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero: Ledge. The head rests at the base of a quiet field; the booking card is the action. */}
        <section className="d-hero" id="top">
          <div className="d-container d-grid d-hero__grid">
            <div className="d-hero__text">
              <h1 className="d-rise">Personalised homeopathic care</h1>
              <p className="d-lead d-hero__lead d-rise" style={{ "--d": "0.12s" } as React.CSSProperties}>
                For women, men, children and the entire family, with Dr.&nbsp;Ardhra&nbsp;C.
              </p>
              <div className="d-hero__links d-rise" style={{ "--d": "0.2s" } as React.CSSProperties}>
                <a className="d-link" href="#care">
                  What we treat
                </a>
                <a className="d-link" href="#doctor">
                  About Dr. Ardhra
                </a>
              </div>
            </div>
            <div className="d-hero__card d-rise" id="book" style={{ "--d": "0.28s" } as React.CSSProperties}>
              <BookingCard />
            </div>
          </div>
        </section>

        {/* The room: one photograph, full bleed, no head. A stand-in until the clinic's own. */}
        <figure className="d-room" data-slot="room" data-alt="The consulting room at Thraya Homeopathy">
          <img
            src={stillLife.src}
            srcSet={stillLife.srcSet}
            sizes="100vw"
            width={4000}
            height={2667}
            alt="An amber dropper bottle among rosemary sprigs on a wooden table"
            style={{ objectPosition: "50% 55%" }}
            loading="lazy"
          />
        </figure>

        {/* Statement: the client's approach, set as one sentence and a wall text. */}
        <section className="d-section" id="approach">
          <div className="d-container d-grid">
            <div className="d-statement__head">
              <h2 className="d-h2">Our approach</h2>
            </div>
            <div className="d-statement__body">
              <p className="d-statement__line">
                Every patient is treated as an individual, understood as a whole person rather than
                just the presenting complaint.
              </p>
              <div className="d-wall">
                <p className="d-dropcap">
                  Rooted in the principles of classical homeopathy, our approach involves detailed
                  case-taking, attentive listening and individualised prescriptions, guided by each
                  patient&rsquo;s unique symptoms and health history.
                </p>
                <p>
                  Medicines are natural and gentle, sourced from Germany, France and other reputed
                  countries. Every consultation is approached with patience, compassion and care.
                </p>
              </div>
            </div>
            <ul className="d-triad" aria-label="Body, mind and spirit">
              {triad.map((t) => (
                <li key={t.word} style={{ "--stain": stainFor[t.tone] } as React.CSSProperties}>
                  <span className="d-triad__word">{t.word}</span>
                  <span>{t.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conditions: the choice as strips on a rail. */}
        <section className="d-section d-care" id="care">
          <div className="d-container">
            <div className="d-grid">
              <div className="d-care__intro">
                <h2 className="d-h2">What we treat</h2>
                <p className="d-lead">
                  Consultations for women, men and children, for a wide range of acute and chronic
                  health concerns.
                </p>
              </div>
            </div>
            <ConditionsSwitcher />
            <p className="d-care__more">
              Not sure if your concern is listed?{" "}
              <a
                className="d-link"
                href={waLink("Hello Thraya Homeopathy, I would like to ask about my concern.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask before you book
              </a>
            </p>
          </div>
        </section>

        {/* Doctor: a matted print and a ruled record. */}
        <section className="d-section" id="doctor">
          <div className="d-container d-grid">
            <figure className="d-doctor__print">
              <div className="d-stock d-mat">
                {/* Placeholder portrait. Replace with Dr. Ardhra's photograph (900 x 1125). */}
                <div className="d-mat__img" data-slot="doctor" data-alt="Dr. Ardhra C">
                </div>
              </div>
              <figcaption className="d-pencil">
                <span>Consulting in Sompura, Bengaluru</span>
              </figcaption>
            </figure>

            <div className="d-doctor__text">
              <h2 className="d-h2">Dr. Ardhra C</h2>
              <p className="d-doctor__creds">Classical homeopath</p>
              <p className="d-doctor__bio">
                With over 10 years of clinical experience, Dr. Ardhra specialises in classical
                homeopathy, with a special focus on women&rsquo;s and children&rsquo;s health, while
                catering to patients of all ages with a wide range of acute and chronic health
                concerns.
              </p>
              <dl className="d-record">
                <div>
                  <dt>Degree</dt>
                  <dd>Bachelor of Homeopathic Medicine and Surgery (BHMS)</dd>
                </div>
                <div>
                  <dt>Postgraduate</dt>
                  <dd>MD (Hom.) in Organon of Medicine and Homeopathic Philosophy</dd>
                </div>
                <div>
                  <dt>Alma mater</dt>
                  <dd>Father Muller Homeopathic Medical College and Hospital, Deralakatte, Mangalore</dd>
                </div>
                <div>
                  <dt>Special focus</dt>
                  <dd>Women&rsquo;s and children&rsquo;s health</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Questions: a ruled list, native disclosure, readable with scripts off. */}
        <section className="d-section d-faq" id="questions">
          <div className="d-container d-grid">
            <div className="d-faq__head">
              <h2 className="d-h2">Questions</h2>
              <p className="d-lead">
                <a
                  className="d-link"
                  href={waLink("Hello Thraya Homeopathy, I have a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask us on WhatsApp
                </a>
              </p>
            </div>
            <div className="d-faq__list">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Visit: the address, how to arrange a time and the booking again. */}
        <section className="d-section" id="visit">
          <div className="d-container d-grid">
            <div className="d-visit__info">
              <h2 className="d-h2">Visit the clinic</h2>
              <dl className="d-record">
                <div>
                  <dt>Clinic</dt>
                  <dd>{site.clinicName}</dd>
                </div>
                <div>
                  <dt>Address</dt>
                  <dd>
                    {site.address.map((line) => (
                      <span key={line} style={{ display: "block" }}>
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Times</dt>
                  <dd>{site.hours || "Call or WhatsApp to arrange a time"}</dd>
                </div>
                <div>
                  <dt>Call or WhatsApp</dt>
                  <dd>
                    <a href={tel}>{site.phone}</a>
                  </dd>
                </div>
              </dl>
              <div className="d-visit__actions">
                <a className="d-btn" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
                <a
                  className="d-link"
                  href={waLink("Hello Thraya Homeopathy, I would like to book a consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
            <figure className="d-visit__map">
              <div className="d-stock d-mat">
                <div className="d-mat__frame">
                  <iframe src={mapSrc} title={`Map showing ${site.clinicName}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
              <figcaption className="d-pencil">
                <span>Sarjapur - Marathahalli Road, Sompura</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer className="d-foot">
        <div className="d-container">
          <div className="d-foot__mark">
            <Image src="/brand/thraya-logo.png" alt="Dr. Ardhra's Thraya Homeopathy. Nurturing Body, Mind and Spirit." width={414} height={189} />
          </div>
          <div className="d-grid d-foot__cols">
            <div className="d-foot__col">
              <h2>Clinic</h2>
              <p style={{ marginTop: "var(--space-sm)" }}>
                {site.address.map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div className="d-foot__col">
              <h2>Contact</h2>
              <ul>
                <li>
                  <a href={tel}>Call {site.phone}</a>
                </li>
                <li>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp {site.whatsappDisplay}
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-foot__col">
              <h2>On this page</h2>
              <ul>
                {draftNav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href}>{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="d-foot__fine">
            <div>
              <p>&copy; 2026 Thraya Homeopathy. Information on this site is general and does not replace a consultation.</p>
              <p style={{ marginTop: "var(--space-2xs)" }}>
                Photographs: <a href={stillLife.credit}>formulatehealth</a> (CC BY 2.0, Wikimedia Commons).
              </p>
            </div>
            <p>Designed and developed by Kewal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
