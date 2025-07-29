import { Vercel } from "@vercel/sdk";

export async function getVercelProjects() {
  if (!process.env.VERCEL_TOKEN) {
    return [];
  }

  try {
    const vercel = new Vercel({
      bearerToken: process.env.VERCEL_TOKEN,
    });
    
    const { projects } = await vercel.projects.getProjects({});
    return projects;
  } catch (error) {
    console.warn("Failed to fetch Vercel projects:", error);
    return [];
  }
} 