import { HeroBackground } from "@/components/hero-background";

export function HeroSection() {
  return (
    <header className="relative flex min-h-screen w-full flex-col justify-center border-b border-slate-200 px-6 pb-20 pt-32 md:px-8">
      <HeroBackground />
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 border-l-2 border-sky-900 pl-4">
          <h1 className="text-lg font-medium tracking-tight text-slate-900 md:text-xl">
            Kenta Waibel
          </h1>
          <h2 className="text-sm uppercase tracking-wide text-slate-500">
            Systems Engineer and Product Builder
          </h2>
        </div>

        <h3 className="font-serif mb-8 max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Building structured, production-grade business systems with long-term
          product ownership in mind.
        </h3>

        <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl">
          I build structured systems that help organizations replace fragmented
          workflows with dependable, maintainable software infrastructure.
        </p>
        <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl">
          I combine deep technical capability with a structured approach to
          product design and operational clarity. Based in Zurich, Switzerland.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="border border-slate-900 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            View selected work
          </a>
          <a
            href="#contact"
            className="border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
