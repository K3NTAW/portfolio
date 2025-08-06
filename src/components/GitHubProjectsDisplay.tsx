"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Github, Star, GitFork, Calendar, Loader2 } from 'lucide-react';
import { useGitHubProjects } from '@/hooks/useGitHubProjects';

interface GitHubProject {
  id: string;
  name: string;
  description: string;
  readme: string;
  tags: string[];
  language: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  githubUrl: string;
  liveUrl?: string;
}

interface GitHubProjectsDisplayProps {
  username?: string;
}

const GitHubProjectsDisplay: React.FC<GitHubProjectsDisplayProps> = ({ username }) => {
  const { projects, loading, error } = useGitHubProjects(username);
  const [selectedProject, setSelectedProject] = useState<GitHubProject | null>(null);

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      'TypeScript': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-green-500',
      'Java': 'bg-orange-500',
      'Go': 'bg-cyan-500',
      'Rust': 'bg-orange-600',
      'C++': 'bg-purple-500',
      'PHP': 'bg-indigo-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6 bg-background">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">GitHub Projects</h2>
          <p className="text-muted-foreground">A collection of my open source projects and contributions</p>
        </div>
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Loading projects...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6 bg-background">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">GitHub Projects</h2>
          <p className="text-muted-foreground">A collection of my open source projects and contributions</p>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <p className="text-destructive mb-2">Error loading projects</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-background">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">GitHub Projects</h2>
        <p className="text-muted-foreground">A collection of my open source projects and contributions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </div>
                <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)} flex-shrink-0 mt-1`} />
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span>{project.forks}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(project.lastUpdated)}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {project.name}
                        <div className={`w-2 h-2 rounded-full ${getLanguageColor(project.language)}`} />
                      </DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                          {project.readme}
                        </pre>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex gap-3">
                        <Button asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View on GitHub
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button variant="outline" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>

                {project.liveUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjectsDisplay; 