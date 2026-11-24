import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Booking } from "@/components/booking";
import { Faq } from "@/components/faq";
import { Nav } from "@/components/nav";
import { Approach, Conditions, Doctor, Footer, Location, Medicines, Visit } from "@/components/sections";
import { waLink } from "@/lib/site";

/** The full landing page, with the hero passed in (lets the hero options preview in context). */
export function HomePage({ hero }: { hero: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main">
        {hero}
        <Approach />
        <Conditions />
        <Doctor />
        <Medicines />
        <Visit />
        <Faq />
        <Booking />
        <Location />
      </main>
      <Footer />

      <a
        href={waLink("Hello Thraya Homeopathy, I would like to book a consultation.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Thraya Homeopathy on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-forest text-white shadow-fab lift"
      >
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </>
  );
}
