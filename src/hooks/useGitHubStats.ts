"use client";

import { useState, useEffect } from 'react';

interface GitHubStats {
  totalCommits: number;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
  following: number;
  contributions: {
    date: string;
    count: number;
  }[];
  topLanguages: {
    name: string;
    percentage: number;
    color: string;
  }[];
  recentActivity: {
    type: 'commit' | 'pull_request' | 'issue' | 'star';
    repo: string;
    message: string;
    date: string;
  }[];
}

export function useGitHubStats(username?: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = username 
          ? `/api/github-stats?username=${encodeURIComponent(username)}`
          : '/api/github-stats';
          
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub statistics');
        }
        
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { stats, loading, error };
} 