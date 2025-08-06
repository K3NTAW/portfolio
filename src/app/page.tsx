import GitHubProjectsDisplay from '@/components/GitHubProjectsDisplay';
import GitHubStats from '@/components/GitHubStats';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-12">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              Full-stack developer passionate about creating amazing web experiences
            </p>
          </div>
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
        
        <GitHubStats username="k3ntaw" />
        <GitHubProjectsDisplay username="k3ntaw" />
      </div>
    </main>
  );
}
