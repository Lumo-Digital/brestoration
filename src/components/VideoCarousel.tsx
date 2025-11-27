"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useLayoutEffect, useState } from "react";

interface VideoCarouselProps {
  videos: {
    src: string;
    caption?: string;
  }[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  return (
    <div className="flex flex-col gap-10">
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex gap-5">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative aspect-4/5 min-w-0 flex-[0_0_85%] overflow-hidden sm:aspect-5/3"
            >
              <video
                className="h-full w-full object-cover"
                preload="metadata"
                playsInline
                autoPlay
                loop
                muted
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
              {video.caption && (
                <div className="bg-brand-dark-blue/80 absolute top-0 left-0 flex h-full w-full flex-col justify-end gap-6 p-6 text-white">
                  {video.caption}
                </div>
              )}
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
  );
}
