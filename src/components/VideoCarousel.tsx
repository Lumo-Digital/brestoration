"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

interface VideoCarouselProps {
  videos: {
    thumb: string;
    src: string;
    description: string;
  }[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handlePlayVideo = (index: number) => {
    setPlayingVideo(index);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  useLayoutEffect(() => {
    if (!emblaApi) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
    updateScrollButtons();

    return () => {
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && playingVideo !== null) {
        handleCloseVideo();
      }
    };

    if (playingVideo !== null) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [playingVideo]);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-5">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative aspect-4/5 min-w-0 flex-[0_0_85%] overflow-hidden sm:aspect-5/3"
              >
                <Image
                  src={video.thumb}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="from-brand-dark-blue via-brand-dark-blue/0 has-[button:hover]:via-brand-dark-blue/40 absolute inset-0 flex flex-col items-center justify-end gap-3 bg-linear-to-t to-transparent p-6 pb-8 text-center text-white transition-colors duration-400">
                  <p className="mb-3 w-2/3 text-sm sm:text-base">
                    {video.description}
                  </p>
                  <button
                    onClick={() => handlePlayVideo(index)}
                    className="flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-transform hover:scale-105"
                  >
                    <Play className="h-4 w-4" fill="currentColor" />
                    Play video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="hover:bg-brand-dark-blue group bg-brand-dark-blue/90 rounded-full p-2 shadow-lg transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white transition-colors" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="hover:bg-brand-dark-blue group bg-brand-dark-blue/90 rounded-full p-2 shadow-lg transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white transition-colors" />
          </button>
        </div>
      </div>

      {playingVideo !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={handleCloseVideo}
        >
          <button
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 z-10 cursor-pointer p-3 text-white transition-all hover:scale-110"
            aria-label="Cerrar video"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full shadow-2xl"
              controls
              autoPlay
              onEnded={handleCloseVideo}
            >
              <source src={videos[playingVideo].src} type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
