import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artic Update",
  description:
    "Read the latest insights, case studies, and updates from Artic Analytica. Explore data-driven stories on research, policy, and strategy.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Artic Update | Artic Analytica",
    description:
      "Read the latest insights, case studies, and updates from Artic Analytica. Explore data-driven stories on research, policy, and strategy.",
    url: "/blog",
  },
  twitter: {
    title: "Artic Update | Artic Analytica",
    description:
      "Read the latest insights, case studies, and updates from Artic Analytica. Explore data-driven stories on research, policy, and strategy.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
