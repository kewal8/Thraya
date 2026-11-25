import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Booking } from "@/components/booking";
import { Faq } from "@/components/faq";
import { Nav } from "@/components/nav";
import { Approach, Conditions, Doctor, Footer, Location, Medicines, Visit } from "@/components/sections";
import { waLink } from "@/lib/site";
import type { Locale } from "@/lib/content";
import { getContent } from "@/lib/content";

/** The full landing page, with the hero passed in (lets the hero options preview in context). */
export function HomePage({ hero, locale = "en" }: { hero: React.ReactNode; locale?: Locale }) {
  const ui = getContent(locale).ui;
  return (
    <div lang={locale} className={locale === "kn" ? "locale-kn" : undefined}>
      <Nav locale={locale} />
      <main id="main">
        {hero}
        <Approach locale={locale} />
        <Conditions locale={locale} />
        <Doctor locale={locale} />
        <Medicines locale={locale} />
        <Visit locale={locale} />
        <Faq locale={locale} />
        <Booking locale={locale} />
        <Location locale={locale} />
      </main>
      <Footer locale={locale} />

      <a
        href={waLink("Hello Thraya Homeopathy, I would like to book a consultation.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ui.whatsappFab}
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-forest text-white shadow-fab lift"
      >
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </div>
  );
}
