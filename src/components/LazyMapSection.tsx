"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MapSection = dynamic(() => import("@/components/MapSection"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-gray-100 sm:h-[400px] md:h-[500px]" />
  ),
});

export default function LazyMapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Loads the map (and its ~1.8MB Mapbox bundle) only once the section is
    // about to enter the viewport, instead of right after the page mounts.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (shouldRender) {
    return <MapSection />;
  }

  return (
    <div
      ref={containerRef}
      className="h-115 w-full bg-gray-100 sm:h-140 md:h-165"
    />
  );
}
