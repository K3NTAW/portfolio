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
          <span className="font-medium text-slate-900">Problem</span>
          <p>{project.problem}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-900">Role</span>
          <p>{project.role}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-900">System Complexity</span>
          <p>{project.complexity}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-slate-900">Technical Depth</span>
          <p>{project.technicalDepth}</p>
        </div>
        <div className="flex flex-col gap-1 md:col-span-2">
          <span className="font-medium text-slate-900">Outcome</span>
          <p>{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}
