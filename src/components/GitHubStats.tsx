"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, GitCommit, GitFork, Star, Users, TrendingUp, Loader2 } from 'lucide-react';
import { useGitHubStats } from '@/hooks/useGitHubStats';

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

interface GitHubStatsProps {
  username: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username }) => {
  const { stats, loading, error } = useGitHubStats(username);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6 bg-background">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">GitHub Statistics</h2>
          <p className="text-muted-foreground">Overview of my GitHub activity and contributions</p>
        </div>
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Loading statistics...</span>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6 bg-background">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">GitHub Statistics</h2>
          <p className="text-muted-foreground">Overview of my GitHub activity and contributions</p>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <p className="text-destructive mb-2">Error loading statistics</p>
            <p className="text-sm text-muted-foreground">{error || 'Failed to load data'}</p>
          </div>
        </div>
      </div>
    );
  }

  const getLanguageColor = (color: string) => {
    return color || '#6c757d';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'commit':
        return <GitCommit className="w-4 h-4" />;
      case 'pull_request':
        return <GitFork className="w-4 h-4" />;
      case 'issue':
        return <Users className="w-4 h-4" />;
      case 'star':
        return <Star className="w-4 h-4" />;
      default:
        return <GitCommit className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'commit':
        return 'text-green-500';
      case 'pull_request':
        return 'text-blue-500';
      case 'issue':
        return 'text-orange-500';
      case 'star':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-background">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">GitHub Statistics</h2>
        <p className="text-muted-foreground">Overview of my GitHub activity and contributions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GitCommit className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{stats.totalCommits.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Commits</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GitFork className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{stats.totalRepos.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Repositories</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">{stats.totalStars.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Stars</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GitFork className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">{stats.totalForks.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Forks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <div>
                <p className="text-2xl font-bold">{stats.followers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-2xl font-bold">{stats.following.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Languages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Languages</CardTitle>
            <CardDescription>Most used programming languages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: getLanguageColor(lang.color) }}
                    />
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  <Badge variant="secondary">{lang.percentage}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest GitHub activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.recentActivity.slice(0, 5).map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`mt-1 ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.repo}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(activity.date)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contribution Graph */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Contribution History</CardTitle>
          <CardDescription>GitHub contribution graph for the last year</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Contribution graph will be displayed here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Showing activity from the last 365 days
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitHubStats; 