import type { Project } from "@/config/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <h3 className="font-serif text-2xl font-medium tracking-tight text-slate-900">
          {project.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-8 text-sm font-light text-slate-700 md:grid-cols-2 lg:col-span-8">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-900">Context</span>
          <p>{project.context}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-900">Role</span>
          <p>{project.role}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-900">Challenge</span>
          <p>{project.challenge}</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium text-slate-900">What I Built</span>
          <ul className="list-disc space-y-1 pl-4">
            {project.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <span className="font-medium text-slate-900">Contribution</span>
          <ul className="list-disc space-y-1 pl-4">
            {project.technicalHighlights.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <figure className="border border-slate-200 bg-slate-50 p-4">
            <figcaption className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">
              Business Outcomes
            </figcaption>
            <div className="space-y-2 text-xs text-slate-700">
              {project.impact.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[10px] font-medium text-slate-600">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </article>
  );
}
