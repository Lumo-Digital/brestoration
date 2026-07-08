import Script from "next/script";

interface ServiceStructuredDataProps {
  name: string;
  description: string;
  path: string;
}

export default function ServiceStructuredData({
  name,
  description,
  path,
}: ServiceStructuredDataProps) {
  const baseUrl = "https://brestorations.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${baseUrl}${path}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Blue Restoration",
      telephone: "+1-336-530-5926",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3625 NW 82nd Ave Suite 111",
        addressLocality: "Doral",
        addressRegion: "FL",
        postalCode: "33166",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "State", name: "Florida" },
      { "@type": "State", name: "South Carolina" },
      { "@type": "State", name: "North Carolina" },
    ],
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema),
      }}
    />
  );
}
