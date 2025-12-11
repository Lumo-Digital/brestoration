import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

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
