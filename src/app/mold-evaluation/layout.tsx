import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mold Evaluation & Remediation",
  description:
    "Professional mold evaluation, testing, and remediation services in Florida, South Carolina and North Carolina. Certified mold inspectors. Safe and effective mold removal. Free assessment available.",
  keywords: [
    "mold evaluation",
    "mold inspection",
    "mold testing",
    "mold remediation",
    "mold removal",
    "mold assessment",
    "Florida mold inspection",
    "North Carolina mold inspection",
    "South Carolina mold inspection",
    "black mold removal",
  ],
  openGraph: {
    title: "Mold Evaluation & Remediation | Blue Restoration",
    description:
      "Professional mold evaluation, testing, and remediation services. Certified inspectors and safe mold removal in Florida, South Carolina and North Carolina.",
    url: "https://bluerestoration.com/mold-evaluation",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Mold Evaluation and Remediation Services",
      },
    ],
  },
};

export default function MoldEvaluationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
