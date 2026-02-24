const stats = [
  { label: "Systems Delivered", value: "20+" },
  { label: "Auditable Workflows", value: "50+" },
  { label: "Years in Complex Ops", value: "6+" }
];

export function StatsSection() {
  return (
    <section className="w-full border-b border-slate-200 px-6 py-16 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-slate-200 bg-white p-6">
            <p className="text-3xl font-medium text-slate-900">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
