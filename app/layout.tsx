import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import type { ReactNode } from "react";

import { CookieBanner } from "@/components/cookie-banner";
import { SkipToContent } from "@/components/skip-to-content";
import { ThemeProvider } from "@/components/theme-provider";
import { social } from "@/config/social";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL(social.website),
  title: {
    default: "Kenta Waibel | Systems-Oriented Software Engineer",
    template: "%s | Kenta Waibel"
  },
  description:
    "Designing structured, audit-ready software systems for complex business environments in Zurich, with a focus on financial governance and operational reliability.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "systems-oriented software engineer",
    "zurich software engineer",
    "financial governance software",
    "audit-ready systems",
    "enterprise workflow architecture"
  ],
  openGraph: {
    title: "Kenta Waibel | Systems-Oriented Software Engineer",
    description:
      "Designing structured, audit-ready software systems for complex business environments.",
    url: "/",
    siteName: "Kenta Waibel Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenta Waibel | Systems-Oriented Software Engineer",
    description:
      "Portfolio focused on governance-grade software architecture, data integrity, and enterprise reliability."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${lora.variable} bg-[#FAFAFA] font-sans font-light text-slate-800 antialiased selection:bg-sky-100 selection:text-sky-900`}
      >
        <ThemeProvider>
          <SkipToContent />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
