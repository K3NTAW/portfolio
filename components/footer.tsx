import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { social } from "@/config/social";

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-slate-200 bg-slate-50 px-6 py-20 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-slate-900">
            Contact
          </h2>
          <p className="max-w-sm text-sm font-light text-slate-600">
            Available for professional discussions regarding system architecture,
            technical consulting, and specialized software engineering requirements.
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col justify-start gap-6 md:items-end">
          <a
            href={`mailto:${social.email}`}
            className="flex items-center gap-2 border-b border-slate-300 pb-1 text-base font-medium tracking-tight text-slate-900 transition-colors duration-200 hover:border-sky-900 hover:text-sky-900"
          >
            {social.email}
            <ArrowUpRight size={16} />
          </a>
          <a
            href={social.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-slate-600 transition-colors duration-200 hover:text-sky-900"
          >
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
          <Link
            href="/privacy"
            className="text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-900"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-20 flex w-full max-w-6xl flex-col items-start justify-between gap-4 text-xs font-medium tracking-wide text-slate-400 md:flex-row md:items-center">
        <span>{`© ${new Date().getFullYear()} Kenta Waibel. Systems Engineering.`}</span>
        <span>{social.location}</span>
      </div>
    </footer>
  );
}
