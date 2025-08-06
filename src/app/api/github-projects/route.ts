import { NextRequest, NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  readme?: string;
}

interface ProcessedProject {
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

export async function GET(request: NextRequest) {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    // Get username from query params or use a default
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'k3ntaw'; // Replace with your GitHub username

    // Fetch repositories from GitHub API
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10&type=owner`,
      {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const repos: GitHubRepo[] = await reposResponse.json();

    // Process repositories and fetch README for each
    const processedProjects: ProcessedProject[] = await Promise.all(
      repos
        .filter(repo => !repo.name.includes('.github') && !repo.fork) // Filter out special repos and forks
        .map(async (repo) => {
          // Fetch README content
          let readmeContent = '# ' + repo.name + '\n\n' + (repo.description || 'No description available.');
          
          try {
            const readmeResponse = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/readme`,
              {
                headers: {
                  'Authorization': `token ${githubToken}`,
                  'Accept': 'application/vnd.github.v3+json',
                },
              }
            );

            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json();
              // Decode base64 content
              readmeContent = Buffer.from(readmeData.content, 'base64').toString('utf-8');
            }
          } catch (error) {
            console.log(`Could not fetch README for ${repo.name}:`, error);
          }

          // Create tags from topics and language
          const tags = [
            ...(repo.language ? [repo.language] : []),
            ...(repo.topics || [])
          ].slice(0, 5); // Limit to 5 tags

          return {
            id: repo.id.toString(),
            name: repo.name,
            description: repo.description || 'No description available.',
            readme: readmeContent,
            tags,
            language: repo.language || 'Unknown',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            lastUpdated: repo.updated_at,
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || undefined,
          };
        })
    );

    return NextResponse.json(processedProjects);
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub projects' },
      { status: 500 }
    );
  }
} 