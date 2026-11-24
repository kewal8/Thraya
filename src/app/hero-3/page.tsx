// Hero option 3 preview. Delete this route once a hero is chosen.
import type { Metadata } from "next";
import { HeroCard } from "@/components/hero-options";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = { title: "Hero option 3: Soft card", robots: { index: false } };

export default function HeroThree() {
  return <HomePage hero={<HeroCard />} />;
}
