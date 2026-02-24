"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const CONSENT_KEY = "kw_cookie_consent";

type ConsentValue = "accepted" | "rejected";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function saveConsent(value: ConsentValue) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <aside
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 z-[70] border border-slate-300 bg-white p-4 shadow-lg md:left-auto md:max-w-xl"
    >
      <p className="text-sm text-slate-700">
        This site uses essential cookies for basic functionality. Optional
        analytics cookies are disabled by default and only enabled after
        explicit consent.
      </p>
      <p className="mt-2 text-xs text-slate-600">
        Read more in the{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-slate-900">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" onClick={() => saveConsent("accepted")}>
          Accept all
        </Button>
        <Button size="sm" variant="outline" onClick={() => saveConsent("rejected")}>
          Reject optional
        </Button>
      </div>
    </aside>
  );
}
