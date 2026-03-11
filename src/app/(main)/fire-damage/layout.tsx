import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Damage Restoration",
  description:
    "Expert fire damage restoration services in Florida, South Carolina and North Carolina. Smoke and soot removal, odor elimination, structural repairs. Emergency response available 24/7.",
  keywords: [
    "fire damage restoration",
    "smoke damage repair",
    "soot removal",
    "fire restoration services",
    "smoke odor removal",
    "fire damage cleanup",
    "Florida fire restoration",
    "North Carolina fire restoration",
    "South Carolina fire restoration",
  ],
  openGraph: {
    title: "Fire Damage Restoration | Blue Restoration",
    description:
      "Expert fire damage restoration services. Smoke and soot removal, odor elimination, and structural repairs. 24/7 emergency response.",
    url: "https://brestorations.com/fire-damage",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Fire Damage Restoration Services",
      },
    ],
  },
};

export default function FireDamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
