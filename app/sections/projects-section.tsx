import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="w-full px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-16 border-b border-slate-200 pb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
          Selected Work
        </h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div key={project.title} className="flex flex-col gap-16">
              <ProjectCard project={project} />
              {index < projects.length - 1 ? (
                <div className="h-px w-full bg-slate-200" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
