import type { Metadata } from "next";
import { BLOG_ARTICLES } from "@/lib/blog-data";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: String(a.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => String(a.id) === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: `${article.title} — Read this ${article.category.toLowerCase()} article from Artic Analytica, published on ${article.date}.`,
    alternates: {
      canonical: `/blog/${article.id}`,
    },
    openGraph: {
      title: `${article.title} | Artic Analytica`,
      description: `${article.title} — Read this ${article.category.toLowerCase()} article from Artic Analytica.`,
      url: `/blog/${article.id}`,
      type: "article",
      images: article.thumbnail ? [{ url: article.thumbnail }] : undefined,
      publishedTime: article.timestamp.toISOString(),
      authors: [article.author],
    },
    twitter: {
      title: `${article.title} | Artic Analytica`,
      description: `${article.title} — Read this ${article.category.toLowerCase()} article from Artic Analytica.`,
      images: article.thumbnail ? [article.thumbnail] : undefined,
    },
  };
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
