"use client";

import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

/**
 * CookieConsentBanner Component
 *
 * Displays a CCPA-compliant cookie notice for an opt-out model:
 * analytics and marketing cookies (Google Analytics, Meta Pixel) load by
 * default, and this banner lets visitors opt out.
 *
 * Features:
 * - Custom styling matching Blue Restoration brand
 * - "I Understand" (dismiss) and "Opt Out" buttons
 * - Links to Privacy Policy and Cookie Policy
 * - Opt-out takes effect on the next page load and clears existing
 *   analytics cookies immediately
 */
export default function CookieConsentBanner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleDeclineCookie = () => {
    if (typeof window !== "undefined") {
      clearAnalyticsCookies();
    }
  };

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="I Understand"
      declineButtonText="Opt Out"
      cookieName="blue-restoration-cookie-consent"
      enableDeclineButton
      onDecline={handleDeclineCookie}
      expires={365}
      style={{
        background: "rgba(15, 23, 42, 0.98)",
        padding: "20px 24px",
        alignItems: "center",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
        borderTop: "2px solid #3b82f6",
        zIndex: 9999,
      }}
      buttonStyle={{
        background: "#3b82f6",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "600",
        padding: "10px 24px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s ease",
        margin: "0 8px",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#94a3b8",
        fontSize: "14px",
        fontWeight: "600",
        padding: "10px 24px",
        border: "1px solid #475569",
        cursor: "pointer",
        transition: "all 0.2s ease",
        margin: "0 8px",
      }}
      contentStyle={{
        flex: "1 1 auto",
        margin: "0",
        color: "#e2e8f0",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
      buttonWrapperClasses="cookie-consent-buttons"
    >
      <div className="mr-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <span className="flex-1">
          We use cookies, including analytics and marketing cookies (Google
          Analytics, Meta Pixel), to enhance your browsing experience and
          understand site traffic. These are enabled by default; you can opt out
          at any time.
        </span>
        <div className="flex gap-2 text-sm">
          <Link
            href="/privacy-policy"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Privacy Policy
          </Link>
          <span className="text-slate-500">•</span>
          <Link
            href="/cookie-policy"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </CookieConsent>
  );
}

/**
 * Clear analytics cookies immediately when a user opts out, so tracking
 * stops right away instead of waiting for the next page load.
 */
function clearAnalyticsCookies() {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.slice(0, eqPos).trim() : cookie.trim();

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
