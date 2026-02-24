const strengths = [
  "Business-first system modeling",
  "Regulation-driven backend architecture",
  "Incremental modernization of legacy operations"
];

export function SuperpowersSection() {
  return (
    <section className="w-full px-6 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-10 border-b border-slate-200 pb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
          Core Strengths
        </h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {strengths.map((strength) => (
            <li key={strength} className="border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
              {strength}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
