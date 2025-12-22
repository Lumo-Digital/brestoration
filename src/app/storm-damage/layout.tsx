import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storm Damage Restoration",
  description:
    "Emergency storm damage restoration services in South Florida. Hurricane damage repair, wind and hail damage, emergency tarping and board-up. Available 24/7.",
  keywords: [
    "storm damage restoration",
    "hurricane damage repair",
    "wind damage repair",
    "hail damage restoration",
    "emergency storm services",
    "storm cleanup",
    "South Florida storm damage",
  ],
  openGraph: {
    title: "Storm Damage Restoration | Blue Restoration",
    description:
      "Emergency storm damage restoration services. Hurricane damage repair and emergency response. Available 24/7 in South Florida.",
    url: "https://bluerestoration.com/storm-damage",
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
