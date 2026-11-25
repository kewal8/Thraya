import type { Metadata } from "next";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { waLink } from "@/lib/site";
import { BookingV1 } from "./booking";
import { FaqV1 } from "./faq";
import {
  ApproachV1,
  ConditionsV1,
  DoctorV1,
  HeroV1,
  LocationV1,
  MedicinesV1,
  VisitV1,
} from "./sections";
import "./v1.css";

export const metadata: Metadata = {
  title: "Thraya Homeopathy (Copy 1)",
  robots: { index: false, follow: false },
};

/** Copy 1: the client-approved warm direction, refined. Review only. */
export default function CopyOne() {
  return (
    <div data-theme="thraya-v1">
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=gambetta@400,500,600&display=swap"
        precedence="default"
      />
      <Nav languageSwitch={false} />
      <main id="main">
        <HeroV1 />
        <ApproachV1 />
        <ConditionsV1 />
        <DoctorV1 />
        <MedicinesV1 />
        <VisitV1 />
        <FaqV1 />
        <BookingV1 />
        <LocationV1 />
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
    </div>
  );
}
