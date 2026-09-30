import type { Metadata } from "next";
import { BLOG_ARTICLES } from "@/lib/blog-data";

export function generateStaticParams() {
  const tags = Array.from(
    new Set(
      BLOG_ARTICLES.map((a) => a.category.toLowerCase().replace(/\s+/g, "-"))
    )
  );
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const tagDisplay = tag
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Tag: ${tagDisplay}`,
    description: `Browse Artic Analytica articles tagged with "${tagDisplay}". Discover insights, case studies, and updates.`,
    alternates: {
      canonical: `/blog/tag/${tag}`,
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `Tag: ${tagDisplay} | Artic Analytica`,
      description: `Browse Artic Analytica articles tagged with "${tagDisplay}".`,
      url: `/blog/tag/${tag}`,
    },
  };
}

export default function TagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
