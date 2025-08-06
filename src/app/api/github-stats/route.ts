import { NextRequest, NextResponse } from 'next/server';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string;
  name: string;
  updated_at: string;
}

interface GitHubEvent {
  type: string;
  repo: {
    name: string;
  };
  payload: any;
  created_at: string;
}

export async function GET(request: NextRequest) {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'k3ntaw';

    // Fetch user data
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!userResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status}`);
    }

    const user: GitHubUser = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    const repos: GitHubRepo[] = await reposResponse.json();

    // Calculate statistics
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
    
    // Calculate language statistics
    const languageStats: Record<string, number> = {};
    repos.forEach(repo => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    });

    const totalRepos = Object.values(languageStats).reduce((sum, count) => sum + count, 0);
    const topLanguages = Object.entries(languageStats)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalRepos) * 100),
        color: getLanguageColor(name)
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);

    // Fetch recent activity (events)
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events?per_page=30`,
      {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    const events: GitHubEvent[] = await eventsResponse.json();

    // Process recent activity
    const recentActivity = events.slice(0, 10).map(event => {
      let type: 'commit' | 'pull_request' | 'issue' | 'star' = 'commit';
      let message = 'Activity on repository';
      
      switch (event.type) {
        case 'PushEvent':
          type = 'commit';
          message = `Pushed ${event.payload.commits?.length || 0} commits`;
          break;
        case 'PullRequestEvent':
          type = 'pull_request';
          message = event.payload.action === 'opened' ? 'Opened pull request' : 'Updated pull request';
          break;
        case 'IssuesEvent':
          type = 'issue';
          message = event.payload.action === 'opened' ? 'Opened issue' : 'Updated issue';
          break;
        case 'WatchEvent':
          type = 'star';
          message = 'Starred repository';
          break;
      }

      return {
        type,
        repo: event.repo.name,
        message,
        date: event.created_at
      };
    });

    // Mock contribution data (GitHub API doesn't provide contribution graph data)
    const contributions = generateMockContributions();

    const stats = {
      totalCommits: Math.floor(Math.random() * 1000) + 500, // Mock data
      totalRepos: user.public_repos,
      totalStars,
      totalForks,
      followers: user.followers,
      following: user.following,
      contributions,
      topLanguages,
      recentActivity
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub statistics' },
      { status: 500 }
    );
  }
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C++': '#f34b7d',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'C#': '#178600',
    'Swift': '#ffac45',
    'Kotlin': '#F18E33',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Shell': '#89e051',
    'Vue': '#2c3e50',
    'React': '#61dafb',
    'Angular': '#dd0031'
  };
  return colors[language] || '#6c757d';
}

function generateMockContributions() {
  const contributions = [];
  const today = new Date();
  
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    contributions.push({
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 10) // Random contribution count
    });
  }
  
  return contributions;
} 