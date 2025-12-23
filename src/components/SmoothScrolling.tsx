"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable smooth scrolling on mobile/touch devices for better performance
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Don't create ScrollSmoother on touch devices
      return;
    }

    const smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0, // Disable on touch completely
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
