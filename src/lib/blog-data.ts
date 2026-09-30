/**
 * Shared blog articles data.
 * Extracted to a shared file so it can be consumed by both:
 * - Server components (for metadata generation)
 * - Client components (for rendering)
 */

export interface BlogArticle {
  id: number;
  timestamp: Date;
  date: string;
  title: string;
  thumbnail: string;
  href: string;
  category: string;
  author: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 1,
    timestamp: new Date("2025-02-17"),
    date: "17 Februari 2025",
    title: "Quality Transformation: Artic Achieves ISO 9001 — Setting the Gold Standard in Data Consulting",
    thumbnail: "/images/insight/thumbnail-1.png",
    href: "/blog/1",
    category: "Achievement",
    author: "Artic Analytica",
  },
  {
    id: 2,
    timestamp: new Date("2025-04-06"),
    date: "6 April 2025",
    title: "More Than Just Charts: Three Data Visualization Mistakes That Lead CEOs to Make Wrong Decisions",
    thumbnail: "/images/insight/thumbnail-2.png",
    href: "/blog/2",
    category: "Insight",
    author: "Artic Analytica",
  },
  {
    id: 3,
    timestamp: new Date("2025-05-24"),
    date: "24 Mei 2025",
    title: "How the Semarang Local Government Increased Public Satisfaction by 15% Using Only Perception Data?",
    thumbnail: "/images/insight/thumbnail-3.png",
    href: "/blog/3",
    category: "Case Study",
    author: "Artic Analytica",
  },
  {
    id: 4,
    timestamp: new Date("2025-08-18"),
    date: "18 Agustus 2025",
    title: "Data-Driven Policy: How Analytics is Reshaping Government Decision Making in Southeast Asia",
    thumbnail: "/images/insight/thumbnail-1.png",
    href: "/blog/4",
    category: "Policy",
    author: "Artic Analytica",
  },
  {
    id: 5,
    timestamp: new Date("2025-09-10"),
    date: "10 September 2025",
    title: "The Future of Research: Why AI-Assisted Analysis is Changing the Game for Consultants",
    thumbnail: "/images/insight/thumbnail-2.png",
    href: "/blog/5",
    category: "Research",
    author: "Artic Analytica",
  },
  {
    id: 6,
    timestamp: new Date("2025-10-22"),
    date: "22 Oktober 2025",
    title: "Building Data Literacy: How Artic Academy Trains the Next Generation of Analysts",
    thumbnail: "/images/insight/thumbnail-3.png",
    href: "/blog/6",
    category: "Academy",
    author: "Artic Analytica",
  },
];

/** Works project data for sitemap & metadata */
export const WORKS_IDS = [1, 2, 3] as const;

/** Expert slugs for sitemap & metadata */
export const EXPERT_SLUGS = [
  "yuwanto",
  "huntal-hutapea",
  "enar-ratriany-assa",
  "ayunina-zenti",
  "fitria-barokah",
] as const;

/** Technical team slugs for sitemap & metadata */
export const TECHNICAL_SLUGS = ["rian-destianto"] as const;
