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
            Systems-Oriented Software Engineer
          </h2>
        </div>

        <h3 className="font-serif mb-8 max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Designing structured, audit-ready software systems for complex business
          environments.
        </h3>

        <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl">
          My engineering focus is entirely dedicated to clarity, strict
          governance, structured data modeling, and ensuring long-term system
          integrity for enterprise operations.
        </p>
      </div>
    </header>
  );
}
