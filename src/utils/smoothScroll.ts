import type { MouseEvent } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Pages that don't render the lead form section (see LeadFormSection)
const FORM_EXCLUDED_PATHS = ["/cookie-policy", "/privacy-policy", "/thank-you"];

/**
 * Smooth scroll to a target element using GSAP
 * This prevents conflicts with ScrollTrigger pinned sections
 */
export function smoothScrollTo(
  target: string | HTMLElement,
  options?: {
    offset?: number;
    duration?: number;
    ease?: string;
  }
) {
  const { offset = -80, duration = 0.8, ease = "power2.out" } = options || {};

  // Temporarily disable native smooth scroll to prevent conflicts
  const htmlElement = document.documentElement;
  const originalScrollBehavior = htmlElement.style.scrollBehavior;
  htmlElement.style.scrollBehavior = "auto";

  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY: Math.abs(offset),
      autoKill: true,
    },
    ease,
    onComplete: () => {
      // Restore original scroll behavior
      htmlElement.style.scrollBehavior = originalScrollBehavior;
      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    },
  });
}

/**
 * Click handler for CTAs linking to href="/#form". On pages that render the
 * form (see FORM_EXCLUDED_PATHS), scrolls smoothly instead of navigating.
 * On excluded pages, lets the Link navigate to the homepage's form section.
 */
export function scrollToForm(e: MouseEvent<HTMLElement>) {
  if (FORM_EXCLUDED_PATHS.includes(window.location.pathname)) {
    return;
  }

  e.preventDefault();
  smoothScrollTo("#form", { offset: -80 });
}
