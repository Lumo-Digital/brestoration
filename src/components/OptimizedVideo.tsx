"use client";

import { useEffect, useRef, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
  loading?: "lazy" | "eager";
}

export default function OptimizedVideo({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
  loading = "lazy",
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(loading === "eager");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (loading === "eager") {
      return;
    }

    const currentVideo = videoRef.current;
    if (!currentVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsInView(true);
            setHasLoaded(true);
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.1,
      }
    );

    observer.observe(currentVideo);

    return () => {
      observer.unobserve(currentVideo);
    };
  }, [loading, hasLoaded]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay && isInView}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isInView ? preload : "none"}
      poster={poster}
      aria-label="Background video"
    >
      {isInView && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
