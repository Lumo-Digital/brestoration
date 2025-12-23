"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookieConsentValue } from "react-cookie-consent";

/**
 * Analytics Component
 *
 * Conditionally loads Google Analytics and Meta Pixel based on cookie consent
 * Only initializes tracking scripts after user has accepted cookies
 *
 * Environment Variables Required:
 * - NEXT_PUBLIC_GA_ID: Google Analytics Measurement ID (e.g., G-XXXXXXXXXX)
 * - NEXT_PUBLIC_META_PIXEL_ID: Meta/Facebook Pixel ID
 *
 * Usage:
 * Add to your root layout.tsx inside <body>
 */
export default function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Listen for consent changes
    const handleConsentAccepted = () => setHasConsent(true);
    const handleConsentDeclined = () => {
      setHasConsent(false);
      // Clear any existing analytics cookies
      clearAnalyticsCookies();
    };

    // Check initial consent status after mounting
    const checkConsent = () => {
      const consentValue = getCookieConsentValue(
        "blue-restoration-cookie-consent"
      );
      if (consentValue === "true") {
        setHasConsent(true);
      }
    };

    checkConsent();

    window.addEventListener("cookie-consent-accepted", handleConsentAccepted);
    window.addEventListener("cookie-consent-declined", handleConsentDeclined);

    return () => {
      window.removeEventListener(
        "cookie-consent-accepted",
        handleConsentAccepted
      );
      window.removeEventListener(
        "cookie-consent-declined",
        handleConsentDeclined
      );
    };
  }, []);

  // Get IDs from environment variables
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
}

/**
 * Clear all analytics-related cookies when user declines consent
 */
function clearAnalyticsCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

    // Clear Google Analytics cookies
    if (
      name.startsWith("_ga") ||
      name.startsWith("_gid") ||
      name.startsWith("_gat") ||
      name.startsWith("_fbp") ||
      name.startsWith("_fbc")
    ) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }
}
