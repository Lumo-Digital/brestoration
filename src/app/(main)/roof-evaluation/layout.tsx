import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Evaluation & Repair",
  description:
    "Professional roof evaluation, inspection, and repair services in Florida, South Carolina and North Carolina. Certified roof inspectors. Storm and hurricane-ready assessments. Free evaluation available.",
  keywords: [
    "roof evaluation",
    "roof inspection",
    "roof repair",
    "roof replacement",
    "roof assessment",
    "Florida roof inspection",
    "North Carolina roof inspection",
    "South Carolina roof inspection",
    "storm damage roof",
    "hurricane roof repair",
  ],
  openGraph: {
    title: "Roof Evaluation & Repair | Blue Restoration",
    description:
      "Professional roof evaluation, inspection, and repair services. Certified inspectors and durable, weather-resistant solutions in Florida, South Carolina and North Carolina.",
    url: "https://brestorations.com/roof-evaluation",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Roof Evaluation and Repair Services",
      },
    ],
  },
};

export default function RoofEvaluationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
