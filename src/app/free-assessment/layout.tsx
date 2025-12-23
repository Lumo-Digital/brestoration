import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Property Assessment | Blue Restoration",
  description:
    "Get a free property damage assessment from Blue Restoration. Our experts evaluate water, fire, mold, and storm damage at no cost. Available 24/7 in Florida, South Carolina and North Carolina.",
  keywords: [
    "free property assessment",
    "free damage evaluation",
    "property damage inspection",
    "restoration assessment",
    "free estimate",
    "damage evaluation",
    "Florida property assessment",
    "North Carolina property assessment",
    "South Carolina property assessment",
  ],
  openGraph: {
    title: "Free Property Assessment | Blue Restoration",
    description:
      "Get a free property damage assessment from our experts. No-cost evaluation for water, fire, mold, and storm damage in Florida, South Carolina and North Carolina.",
    url: "https://brestorations.com/free-assessment",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Free Property Assessment - Blue Restoration",
      },
    ],
  },
};

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
