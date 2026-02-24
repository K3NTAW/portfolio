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
            I design and implement multi-user web and mobile systems that
            replace fragmented workflows with structured, reliable applications.
          </p>
          <p>
            My focus lies in operational clarity, permission architecture, and
            scalable backend systems, building software that organizations can
            depend on long-term.
          </p>
        </div>
      </div>
    </section>
  );
}
