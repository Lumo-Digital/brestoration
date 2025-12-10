"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Remove hash from URL if present
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Also force after a microtask to ensure it happens after Next.js processes
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, [pathname]);

  return null;
}
