import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kenta Waibel",
  description:
    "Privacy policy for kentawaibel.ch, covering contact requests, cookies, and data processing."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] px-6 py-24 md:px-8">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <header>
          <h1 className="font-serif text-4xl font-medium tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Last updated: February 24, 2026
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-medium text-slate-900">Data controller</h2>
          <p>
            Kenta Waibel, Zurich, Switzerland. For privacy-related requests,
            contact: contact@kentawaibel.ch.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-medium text-slate-900">Contact form data</h2>
          <p>
            If you submit the contact form, your name, email address, and
            message are processed for communication purposes only. Data is not
            sold, and is retained only as long as necessary to respond and
            maintain relevant professional correspondence.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-medium text-slate-900">Cookies</h2>
          <p>
            Essential cookies may be used for site functionality. Optional
            analytics cookies are disabled by default and require explicit
            consent through the cookie banner.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-medium text-slate-900">Your rights</h2>
          <p>
            You may request access, correction, or deletion of personal data by
            email. Requests are handled according to applicable Swiss and EU
            data-protection requirements.
          </p>
        </section>
      </div>
    </main>
  );
}
