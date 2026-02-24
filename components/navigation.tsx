"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#expertise", label: "What I Do" },
  { href: "#work", label: "Systems Shipped" },
  { href: "#principles", label: "Systems Philosophy" },
  { href: "#direction", label: "Current Focus" },
  { href: "#trust", label: "Credentials" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-[#FAFAFA]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <div className="flex flex-col">
          <Link href="/" className="text-sm font-medium tracking-tight text-slate-900">
            Kenta Waibel
          </Link>
          <span className="text-xs text-slate-500">Independent Software Engineer</span>
        </div>

        <div className="hidden gap-8 text-xs font-medium tracking-wide text-slate-600 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 hover:text-sky-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-slate-300 px-4 py-2 text-xs font-medium tracking-wide text-slate-900 transition-colors duration-200 hover:bg-slate-50 hover:text-sky-900 md:block"
        >
          Contact
        </a>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-slate-200 px-6 transition-[max-height] duration-300 md:hidden",
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <div className="flex flex-col gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 transition-colors hover:text-sky-900"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-slate-700 transition-colors hover:text-sky-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
