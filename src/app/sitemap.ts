import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_ARTICLES, WORKS_IDS, EXPERT_SLUGS, TECHNICAL_SLUGS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static public pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/artic-research`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/who-we-are`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic works detail pages
  const worksPages: MetadataRoute.Sitemap = WORKS_IDS.map((id) => ({
    url: `${baseUrl}/works/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog detail pages
  const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: article.timestamp,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Expert profile pages
  const expertPages: MetadataRoute.Sitemap = EXPERT_SLUGS.map((slug) => ({
    url: `${baseUrl}/who-we-are/expert/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Technical team profile pages
  const technicalPages: MetadataRoute.Sitemap = TECHNICAL_SLUGS.map((slug) => ({
    url: `${baseUrl}/who-we-are/technical/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...worksPages,
    ...blogPages,
    ...expertPages,
    ...technicalPages,
  ];
}
