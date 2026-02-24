const principles = [
  {
    title: "Explicit business rule modeling",
    description:
      "Code must reflect corporate reality. I prioritize documenting and enforcing strict business logic constraints at the architectural level, preventing operational deviations."
  },
  {
    title: "Traceability over convenience",
    description:
      "A system without a verifiable history is a liability. Every application is built with comprehensive auditability from day one, serving as a reliable record for governance."
  },
  {
    title: "Integration over disruption",
    description:
      "Software should enhance operations, not halt them. My systems are designed to interface seamlessly with existing ERP and banking environments rather than demanding costly total replacements."
  },
  {
    title: "Stability over trends",
    description:
      "Corporate infrastructure is no place for experimental frameworks. I utilize proven, highly stable technologies that guarantee performance and deterministic outcomes."
  },
  {
    title: "Long-term maintainability",
    description:
      "Systems must outlast organizational shifts. Clean implementation, explicit documentation, and minimal dependencies ensure the software remains an asset, not technical debt."
  }
];

export function HowIBuildSection() {
  return (
    <section id="principles" className="w-full px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-16 border-b border-slate-200 pb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
          Engineering Principles
        </h2>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="flex flex-col gap-2">
              <h3 className="font-serif text-xl font-medium tracking-tight text-slate-900">
                {principle.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-slate-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
