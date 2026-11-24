import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/lib/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

// Ascendant Serif by EF Studio. Personal-use files for preview; needs a web licence before launch.
const heading = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    { path: "../fonts/ascendant/AscendantSerif-PersonalUse-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/ascendant/AscendantSerif-PersonalUse-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/ascendant/AscendantSerif-PersonalUse-Bold.otf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: `${site.name} | Classical Homeopathy by Dr. Ardhra C`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f7f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${heading.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh">
        {/* Marks scripting as available, so reveal animations only hide content when they can show it again. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
