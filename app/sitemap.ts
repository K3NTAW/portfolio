import type { MetadataRoute } from "next";

import { social } from "@/config/social";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: social.website,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${social.website}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    }
  ];
}
