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
    default: "Kenta Waibel | Independent Software Engineer",
    template: "%s | Kenta Waibel"
  },
  description:
    "Building structured, production-grade business systems with long-term product ownership in mind.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "independent software engineer",
    "zurich full stack developer",
    "production-grade business systems",
    "shopify integration engineer",
    "rbac admin dashboards",
    "app store developer switzerland"
  ],
  openGraph: {
    title: "Kenta Waibel | Independent Software Engineer",
    description:
      "Structured, production-grade business systems with practical deployment experience and long-term product ownership.",
    url: "/",
    siteName: "Kenta Waibel Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenta Waibel | Independent Software Engineer",
    description:
      "Calm, execution-focused software engineering with real deployments from Zurich."
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
