import { trustMetrics, trustSignals, testimonial } from "@/config/trust";

export function TrustSignalsSection() {
  return (
    <section id="trust" className="w-full border-b border-slate-200 bg-white px-6 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-10 border-b border-slate-200 pb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
          Credibility and Trust Signals
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trustMetrics.map((metric) => (
            <article key={metric.label} className="border border-slate-200 bg-slate-50 p-5">
              <p className="text-3xl font-medium tracking-tight text-slate-900">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">{metric.label}</p>
              <p className="mt-1 text-xs text-slate-600">{metric.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="font-serif mb-4 text-2xl font-medium tracking-tight text-slate-900">
              Governance-oriented implementation standards
            </h3>
            <ul className="space-y-3 text-sm font-light leading-relaxed text-slate-700">
              {trustSignals.map((signal) => (
                <li key={signal} className="border-l-2 border-sky-800 pl-3">
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700 lg:col-span-5">
            <p className="font-serif text-base text-slate-900">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-3 text-xs uppercase tracking-wide text-slate-500">
              {testimonial.attribution}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
