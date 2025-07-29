import { getGithubProjects } from "@/lib/github";
import { ProjectCard } from "@/components/project-card";
import { getVercelProjects } from "@/lib/vercel";
import { VercelCard } from "@/components/vercel-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { SkillBadge } from "@/components/skill-badge";

export default async function Home() {
  const projects = await getGithubProjects();
  const vercelProjects = await getVercelProjects();

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Vercel",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="hero"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m a Developer
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  I build modern and responsive web applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <a href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="h-full w-full">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="h-full w-full"
                particleColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description || ""}
                stars={project.stargazers_count || 0}
                url={project.html_url}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="deployments" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Deployments</h2>
          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {vercelProjects.map((project) => (
              <VercelCard
                key={project.id}
                name={project.name}
                url={`https://${project.latestDeployments?.[0]?.url}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
          <div className="flex flex-wrap gap-2 mt-8">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </section>
       <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m currently available for freelance work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
