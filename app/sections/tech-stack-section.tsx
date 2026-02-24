import type { ComponentType } from "react";

import { architectureItems, backendItems, dataItems } from "@/lib/tech-icons";

function CapabilityColumn({
  title,
  items
}: {
  title: string;
  items: {
    icon: ComponentType<{ size?: number; className?: string }>;
    label: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-serif text-2xl font-medium tracking-tight text-slate-900">
        {title}
      </h3>
      <ul className="flex flex-col gap-4 text-sm font-light text-slate-600">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <item.icon size={18} className="mt-0.5 text-sky-900" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section
      id="expertise"
      className="w-full border-y border-slate-200 bg-slate-50 px-6 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-16 border-b border-slate-200 pb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
          What I Do
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <CapabilityColumn title="Product Systems" items={architectureItems} />
          <CapabilityColumn title="Delivery Focus" items={dataItems} />
          <CapabilityColumn title="Technical Execution" items={backendItems} />
        </div>
        <p className="mt-10 max-w-3xl text-sm font-light leading-relaxed text-slate-700">
          My approach combines product thinking with execution speed, building
          systems that deliver visible value from day one.
        </p>
      </div>
    </section>
  );
}
