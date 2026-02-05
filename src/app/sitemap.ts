import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";

const baseUrl = "https://uncensored-ai.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsMeta();

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...blogEntries,
  ];
}
