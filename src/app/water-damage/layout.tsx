import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Damage Restoration",
  description:
    "Professional water damage restoration services in South Florida. Emergency water extraction, structural drying, and mold prevention. Available 24/7. Free assessment.",
  keywords: [
    "water damage restoration",
    "emergency water extraction",
    "flood damage repair",
    "water removal services",
    "structural drying",
    "water damage repair",
    "South Florida water damage",
  ],
  openGraph: {
    title: "Water Damage Restoration | Blue Restoration",
    description:
      "Professional water damage restoration services. Emergency water extraction and structural drying. Available 24/7 in South Florida.",
    url: "https://bluerestoration.com/water-damage",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Water Damage Restoration Services",
      },
    ],
  },
};

export default function WaterDamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
