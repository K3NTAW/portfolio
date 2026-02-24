export function NowSection() {
  return (
    <section id="direction" className="w-full bg-sky-900 px-6 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h2 className="border-b border-sky-800 pb-4 text-xs font-medium uppercase tracking-wider text-sky-300/80">
            Current Focus
          </h2>
        </div>

        <div className="lg:col-span-8 lg:col-start-5">
          <h3 className="font-serif mb-6 text-3xl font-medium tracking-tight text-white">
            Structured Operational Systems
          </h3>
          <p className="max-w-2xl text-base font-light leading-relaxed text-sky-100">
            I am currently focused on designing structured operational and
            financial systems for businesses that require high levels of clarity
            and accountability.
          </p>
          <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-sky-100">
            Long-term, my objective is to build software products that serve as
            foundational infrastructure within business environments.
          </p>
        </div>
      </div>
    </section>
  );
}
