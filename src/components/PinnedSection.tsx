"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerConfig {
  start?: string;
  end?: string;
  pinSpacing?: boolean;
  markers?: boolean;
}

interface PinnedSectionProps {
  children: React.ReactNode;
  pinnedContent: React.ReactNode;
  scrollTriggerConfig?: ScrollTriggerConfig;
}

export default function PinnedSection({
  children,
  pinnedContent,
  scrollTriggerConfig = {},
}: PinnedSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !pinnedRef.current || !scrollRef.current) return;

    const {
      start = "top top",
      end = "bottom bottom",
      pinSpacing = false,
      markers = false,
    } = scrollTriggerConfig;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: scrollRef.current,
        start,
        end,
        pin: pinnedRef.current,
        pinSpacing,
        markers,
      });
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, [scrollTriggerConfig]);

  return (
    <>
      <div ref={pinnedRef}>{pinnedContent}</div>
      <div ref={scrollRef}>{children}</div>
    </>
  );
}
