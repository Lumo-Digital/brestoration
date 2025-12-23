"use client";

import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

/**
 * CookieConsentBanner Component
 *
 * Displays a GDPR/CCPA compliant cookie consent banner
 * Manages user consent for analytics cookies (Google Analytics, Meta Pixel)
 *
 * Features:
 * - Custom styling matching Blue Restoration brand
 * - Decline and Accept buttons
 * - Links to Privacy Policy and Cookie Policy
 * - Stores consent in localStorage
 * - Triggers analytics initialization only after consent
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

  const handleAcceptCookie = () => {
    // Enable analytics tracking
    if (typeof window !== "undefined") {
      window.gtag_consent = true;

      // Trigger analytics initialization
      const event = new CustomEvent("cookie-consent-accepted");
      window.dispatchEvent(event);
    }
  };

  const handleDeclineCookie = () => {
    // Disable analytics tracking
    if (typeof window !== "undefined") {
      window.gtag_consent = false;

      // Trigger analytics cleanup
      const event = new CustomEvent("cookie-consent-declined");
      window.dispatchEvent(event);
    }
  };

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      cookieName="blue-restoration-cookie-consent"
      enableDeclineButton
      onAccept={handleAcceptCookie}
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
          We use cookies to enhance your browsing experience, analyze our
          traffic, and personalize content. By clicking &quot;Accept All&quot;,
          you consent to our use of cookies for analytics and marketing.
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

// TypeScript declaration for global window object
declare global {
  interface Window {
    gtag_consent?: boolean;
  }
}
