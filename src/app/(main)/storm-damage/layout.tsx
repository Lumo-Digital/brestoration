import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storm Damage Restoration",
  description:
    "Emergency storm damage restoration services in Florida, South Carolina and North Carolina. Hurricane damage repair, wind and hail damage, emergency tarping and board-up. Available 24/7.",
  keywords: [
    "storm damage restoration",
    "hurricane damage repair",
    "wind damage repair",
    "hail damage restoration",
    "emergency storm services",
    "storm cleanup",
    "Florida storm damage",
    "North Carolina storm damage",
    "South Carolina storm damage",
  ],
  openGraph: {
    title: "Storm Damage Restoration | Blue Restoration",
    description:
      "Emergency storm damage restoration services. Hurricane damage repair and emergency response. Available 24/7 in Florida, South Carolina and North Carolina.",
    url: "https://brestorations.com/storm-damage",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Storm Damage Restoration Services",
      },
    ],
  },
};

export default function StormDamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
