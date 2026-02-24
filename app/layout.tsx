import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import type { ReactNode } from "react";

import { SkipToContent } from "@/components/skip-to-content";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Kenta Waibel | Systems-Oriented Software Engineer",
  description:
    "Designing structured, audit-ready software systems for complex business environments."
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
        </ThemeProvider>
      </body>
    </html>
  );
}
