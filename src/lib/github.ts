import { Octokit } from "octokit";

export async function getGithubProjects() {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const res = await octokit.request("GET /users/{username}/repos", {
      username: "k3ntaw",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return res.data;
  } catch (error) {
    console.warn("Failed to fetch GitHub projects:", error);
    return [];
  }
} 