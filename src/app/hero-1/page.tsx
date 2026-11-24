// Hero option 1 preview. Delete this route once a hero is chosen.
import type { Metadata } from "next";
import { HeroCentred } from "@/components/hero-options";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = { title: "Hero option 1: Centred", robots: { index: false } };

export default function HeroOne() {
  return <HomePage hero={<HeroCentred />} />;
}
