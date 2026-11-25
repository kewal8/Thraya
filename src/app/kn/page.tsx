import type { Metadata } from "next";
import { Noto_Sans_Kannada, Noto_Serif_Kannada } from "next/font/google";
import { Hero } from "@/components/hero";
import { HomePage } from "@/components/home-page";

/* Kannada script faces. Latin text on this page (names, "PCOD / PCOS", numbers) keeps the
   brand fonts; these fill in the Kannada glyphs only. */
const knSans = Noto_Sans_Kannada({
  variable: "--font-kn-sans",
  subsets: ["kannada"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const knSerif = Noto_Serif_Kannada({
  variable: "--font-kn-serif",
  subsets: ["kannada"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ತ್ರಯ ಹೋಮಿಯೋಪತಿ | ಡಾ. ಆರ್ದ್ರಾ ಸಿ ಅವರ ಶಾಸ್ತ್ರೀಯ ಹೋಮಿಯೋಪತಿ",
  description:
    "ಡಾ. ಆರ್ದ್ರಾ ಸಿ ಅವರ ನೇತೃತ್ವದ ಶಾಸ್ತ್ರೀಯ ಹೋಮಿಯೋಪತಿ ಕ್ಲಿನಿಕ್. ಮಹಿಳೆಯರು, ಪುರುಷರು, ಮಕ್ಕಳು ಮತ್ತು ಇಡೀ ಕುಟುಂಬಕ್ಕೆ ವೈಯಕ್ತಿಕ ಆರೈಕೆ.",
};

export default function HomeKannada() {
  return (
    <div className={`${knSans.variable} ${knSerif.variable}`}>
      <HomePage locale="kn" hero={<Hero locale="kn" />} />
    </div>
  );
}
