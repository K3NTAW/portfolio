"use client";

import { useState, useEffect } from 'react';

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

export function useGitHubProjects(username?: string) {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = username 
          ? `/api/github-projects?username=${encodeURIComponent(username)}`
          : '/api/github-projects';
          
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  return { projects, loading, error };
} 