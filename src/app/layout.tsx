import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScrolling from "@/components/SmoothScrolling";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluerestoration.com"),
  title: {
    default: "Blue Restoration - Expert Water, Fire & Mold Damage Restoration",
    template: "%s | Blue Restoration",
  },
  description:
    "Professional water damage, fire damage, mold evaluation, and storm damage restoration services in South Florida. 24/7 emergency response. Free assessment available.",
  keywords: [
    "water damage restoration",
    "fire damage restoration",
    "mold evaluation",
    "storm damage restoration",
    "emergency restoration",
    "South Florida restoration",
    "Doral restoration services",
    "property damage restoration",
  ],
  authors: [{ name: "Blue Restoration" }],
  creator: "Blue Restoration",
  publisher: "Blue Restoration LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bluerestoration.com",
    siteName: "Blue Restoration",
    title: "Blue Restoration - Expert Water, Fire & Mold Damage Restoration",
    description:
      "Professional water damage, fire damage, mold evaluation, and storm damage restoration services in South Florida. 24/7 emergency response.",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Blue Restoration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Restoration - Expert Water, Fire & Mold Damage Restoration",
    description:
      "Professional water damage, fire damage, mold evaluation, and storm damage restoration services in South Florida. 24/7 emergency response.",
    images: ["/images/og.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/favicon.ico" },
    ],
    apple: [
      { url: "/icons/favicon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/icons/favicon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/icons/favicon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/favicon-76x76.png", sizes: "76x76", type: "image/png" },
      {
        url: "/icons/favicon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/icons/favicon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/icons/favicon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/icons/favicon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/icons/favicon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/icons/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icons/favicon-310x310.png",
        sizes: "310x310",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.variable} antialiased`}>
        <StructuredData />
        <SmoothScrolling>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
