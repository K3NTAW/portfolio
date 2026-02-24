const principles = [
  {
    title: "Build for long-term maintainability",
    description:
      "Systems should remain understandable and reliable as teams, processes, and requirements evolve."
  },
  {
    title: "Design explicit permission models",
    description:
      "Role and access decisions are modeled intentionally to support secure operations and clear accountability."
  },
  {
    title: "Treat data integrity as non-negotiable",
    description:
      "Reliable systems are built on consistent data constraints, predictable behavior, and clear state transitions."
  },
  {
    title: "Prioritize performance and clarity",
    description:
      "Execution speed matters, but never at the expense of clear architecture, readable code, and stable runtime behavior."
  },
  {
    title: "Integrate before disrupting",
    description:
      "New software should strengthen existing operations and workflows instead of forcing avoidable organizational friction."
  }
];

export function HowIBuildSection() {
  return (
    <section id="principles" className="w-full px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-16 border-b border-slate-200 pb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
          Systems Philosophy
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
