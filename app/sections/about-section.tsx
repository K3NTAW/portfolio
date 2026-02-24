export function AboutSection() {
  return (
    <section id="profile" className="w-full px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h2 className="border-b border-slate-200 pb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
            Professional Profile
          </h2>
        </div>

        <div className="flex flex-col gap-6 text-base font-light leading-relaxed text-slate-700 lg:col-span-8 lg:col-start-5">
          <p>
            Software in corporate environments is fundamentally about
            establishing order. My approach to software engineering centers on
            systems thinking-building multi-user business applications that
            serve as a reliable, immutable source of truth for operational and
            executive teams.
          </p>
          <p>
            I specialize in addressing complex administrative and financial
            workflows. By deeply understanding underlying business realities
            before writing code, I deliver architectures that prioritize
            reliability, traceability, and long-term maintainability over
            transient technological trends.
          </p>
          <p>
            With a dedicated interest in financial governance and operational
            clarity, I design applications that bridge the gap between technical
            infrastructure and rigorous corporate oversight, specifically
            tailored for sophisticated management and administrative
            environments.
          </p>
        </div>
      </div>
    </section>
  );
}
