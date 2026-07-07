"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Keep in sync with FORM_EXCLUDED_PATHS in utils/smoothScroll.ts
const EXCLUDED_PATHS = ["/cookie-policy", "/privacy-policy"];

export default function LeadFormSection() {
  const pathname = usePathname();

  if (EXCLUDED_PATHS.includes(pathname)) {
    return null;
  }

  return (
    <section id="form" className="w-full bg-white px-6 py-16">
      <div className="mx-auto w-full max-w-[800px]">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/voNxjZlwaGGpsDziFgGi"
          style={{
            width: "100%",
            height: "839px",
            border: "none",
            borderRadius: "3px",
          }}
          id="inline-voNxjZlwaGGpsDziFgGi"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form Website"
          data-height="839"
          data-layout-iframe-id="inline-voNxjZlwaGGpsDziFgGi"
          data-form-id="voNxjZlwaGGpsDziFgGi"
          title="Form Website"
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
