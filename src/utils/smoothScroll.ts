import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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
  const { offset = -80, duration = 1, ease = "power2.inOut" } = options || {};

  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY: Math.abs(offset),
    },
    ease,
  });
}
