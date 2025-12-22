"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useLayoutEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handlePlayVideo = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
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

  const lightboxSlides = videos.map((video) => ({
    type: "video" as const,
    width: 1080,
    height: 1920,
    sources: [
      {
        src: video.src,
        type: "video/mp4",
      },
    ],
  }));

  const isSingleVideo = videos.length === 1;

  return (
    <>
      <div className="flex flex-col gap-10">
        <div
          className={isSingleVideo ? "" : "overflow-visible"}
          ref={isSingleVideo ? undefined : emblaRef}
        >
          <div
            className={
              isSingleVideo
                ? "mx-auto flex w-full max-w-4xl justify-center"
                : "flex gap-5"
            }
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className={
                  isSingleVideo
                    ? "relative aspect-video w-full overflow-hidden"
                    : "relative aspect-4/5 min-w-0 flex-[0_0_85%] overflow-hidden sm:aspect-5/3"
                }
              >
                <Image
                  src={video.thumb}
                  alt={`Customer testimonial video thumbnail - ${video.description}`}
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

        {!isSingleVideo && (
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
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        plugins={[Video]}
        video={{
          autoPlay: true,
          controls: true,
        }}
        carousel={{
          finite: isSingleVideo,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        render={{
          buttonPrev: isSingleVideo ? () => null : undefined,
          buttonNext: isSingleVideo ? () => null : undefined,
        }}
      />
    </>
  );
}
