import Script from "next/script";

interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs: string[];
  areaServed: string[];
  priceRange: string;
}

export default function StructuredData() {
  const localBusinessSchema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Blue Restoration",
    description:
      "Professional water damage, fire damage, mold evaluation, and storm damage restoration services in Florida, South Carolina and North Carolina.",
    url: "https://brestorations.com",
    telephone: "+1-305-497-9125",
    email: "info@brestorations.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3625 NW 82nd Ave Suite 111",
      addressLocality: "Doral",
      addressRegion: "FL",
      postalCode: "33166",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.8104,
      longitude: -80.3377,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/bluerestoration.services",
      "https://api.whatsapp.com/send?phone=13054979125",
    ],
    areaServed: [
      "Florida",
      "South Carolina",
      "North Carolina",
      "Doral, FL",
      "Miami, FL",
      "Miami-Dade County, FL",
      "Broward County, FL",
    ],
    priceRange: "$$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Restoration Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Blue Restoration",
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Damage Restoration",
            description:
              "Professional water damage restoration and emergency water extraction services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fire Damage Restoration",
            description:
              "Complete fire damage restoration including smoke and soot removal.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mold Evaluation",
            description:
              "Professional mold inspection, testing, and remediation services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Storm Damage Restoration",
            description:
              "Emergency storm damage restoration and repair services.",
          },
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
