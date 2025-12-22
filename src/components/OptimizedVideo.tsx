"use client";

import { useEffect, useRef, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  alt?: string;
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
  alt = "Background video",
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
  // For eager loading, start ready. For lazy, wait for load event
  const [isVideoReady, setIsVideoReady] = useState(loading === "eager");

  useEffect(() => {
    if (loading === "eager") {
      // Already initialized in state above
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

  const handleLoadedData = () => {
    setIsVideoReady(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error(`Failed to load video: ${src}`, e);
    // Still show the poster even if video fails
    setIsVideoReady(true);
  };

  return (
    <video
      ref={videoRef}
      className={`${className} transition-opacity duration-700 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
      autoPlay={autoPlay && isInView}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isInView ? preload : "none"}
      poster={poster}
      onLoadedData={handleLoadedData}
      onError={handleError}
      aria-label={alt}
      title={alt}
    >
      {isInView && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
