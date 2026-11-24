// Hero option 2 preview. Delete this route once a hero is chosen.
import type { Metadata } from "next";
import { HeroBanner } from "@/components/hero-options";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = { title: "Hero option 2: Green banner", robots: { index: false } };

export default function HeroTwo() {
  return <HomePage hero={<HeroBanner />} />;
}
