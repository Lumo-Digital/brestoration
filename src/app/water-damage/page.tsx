"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Eyebrow from "@/components/Eyebrow";
import MapSection from "@/components/MapSection";
import CallToAction from "@/components/CallToAction";
import VideoCarousel from "@/components/VideoCarousel";
import {
  HERO_VIDEOS,
  VIDEO_CAROUSEL_SECTION,
  VIDEO_FALLBACK_TEXT,
} from "@/constants";
import { SERVICES } from "@/constants/services";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function WaterDamage() {
  const pinnedRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pinnedRef2 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const service = SERVICES.find((s) => s.href === "/water-damage");
  const timeline1 = service?.timelines?.[0];
  const timeline2 = service?.timelines?.[1];
  const heroTitle = service?.title || "Water Damage Restoration";
  const heroDescription =
    service?.description || "Complete water damage restoration";

  useEffect(() => {
    if (!pinnedRef.current || !scrollRef.current) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: scrollRef.current,
        start: "top top+=80",
        endTrigger: scrollRef.current,
        end: "bottom 30%",
        pin: pinnedRef.current,
        pinSpacing: false,
        markers: false,
      });

      if (pinnedRef2.current && scrollRef2.current) {
        ScrollTrigger.create({
          trigger: scrollRef2.current,
          start: "top top+=80",
          endTrigger: scrollRef2.current,
          end: "bottom 30%",
          pin: pinnedRef2.current,
          pinSpacing: false,
          markers: false,
        });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <main>
      <section
        id="hero"
        className="relative flex h-[40dvh] flex-col justify-end gap-10 px-6 py-12 sm:h-[40dvh]"
      >
        <div className="absolute top-0 left-0 -z-1 h-full w-full">
          <video
            className="h-full w-full object-cover"
            preload="metadata"
            playsInline
            autoPlay
            loop
            muted
          >
            <source src={HERO_VIDEOS.waterDamage.src} type="video/mp4" />
            {VIDEO_FALLBACK_TEXT}
          </video>
          <div className="from-brand-dark-blue to-brand-dark-blue/30 absolute top-0 left-0 h-full w-full bg-linear-to-b" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
          <h1 className="text-4xl font-semibold text-balance text-white lg:w-2/3">
            {heroTitle}
          </h1>
          <p className="text-balance text-white lg:w-2/3">{heroDescription}</p>
        </div>
      </section>
      <section id="services" className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div
            ref={pinnedRef}
            className="flex flex-col items-start md:col-span-4"
          >
            <Eyebrow>{timeline1?.eyebrow || "24/7 Emergency Service"}</Eyebrow>
            <h2 className="mx-auto mb-8 w-full text-left text-3xl leading-8 font-semibold text-balance">
              {timeline1?.title || "Professional Water Damage Solutions"}
            </h2>
            {timeline1?.description && (
              <p className="text-balance">{timeline1.description}</p>
            )}
          </div>
          <div
            ref={scrollRef}
            className="relative flex flex-col gap-15 md:col-span-8 md:gap-20"
          >
            {/* Línea vertical con gradient que se desvanece al final */}
            <div
              className="absolute top-6 bottom-0 left-4.5 w-0.5"
              style={{
                background:
                  "linear-gradient(to bottom, #D9D9D9 0%, #D9D9D9 85%, transparent 100%)",
              }}
            />
            {timeline1?.steps.map((step, index) => (
              <div key={index} className="flex gap-10">
                <div className="mb-6 flex items-start justify-center">
                  <div className="bg-brand-dark-blue mx-auto inline-flex aspect-square -rotate-6 justify-center px-1">
                    <span className="bg-brand-light-blue relative z-10 flex aspect-square translate-1 rotate-5 items-center justify-center px-2 py-1 text-xl font-semibold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="leading-tight font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {timeline2 && (
        <section className="bg-white px-6 py-12 md:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
            <div
              ref={pinnedRef2}
              className="flex flex-col items-start md:col-span-4"
            >
              <Eyebrow>{timeline2.eyebrow || "Emergency Guide"}</Eyebrow>
              <h2 className="mx-auto mb-8 w-full text-left text-3xl leading-8 font-semibold text-balance">
                {timeline2.title}
              </h2>
              {timeline2.description && (
                <p className="text-balance">{timeline2.description}</p>
              )}
            </div>
            <div
              ref={scrollRef2}
              className="relative flex flex-col gap-15 md:col-span-8 md:gap-20"
            >
              {/* Línea vertical con gradient que se desvanece al final */}
              <div
                className="absolute top-6 bottom-0 left-4.5 w-0.5"
                style={{
                  background:
                    "linear-gradient(to bottom, #D9D9D9 0%, #D9D9D9 85%, transparent 100%)",
                }}
              />
              {timeline2.steps.map((step, index) => (
                <div key={index} className="flex gap-10">
                  <div className="mb-6 flex items-start justify-center">
                    <div className="bg-brand-dark-blue mx-auto inline-flex aspect-square -rotate-6 justify-center px-1">
                      <span className="bg-brand-light-blue relative z-10 flex aspect-square translate-1 rotate-5 items-center justify-center px-2 py-1 text-xl font-semibold text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="leading-tight font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>{VIDEO_CAROUSEL_SECTION.eyebrow}</Eyebrow>
          <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-8 font-semibold text-balance md:w-2/3 lg:w-2/4">
            {VIDEO_CAROUSEL_SECTION.title}
          </h2>
          <VideoCarousel videos={VIDEO_CAROUSEL_SECTION.videos} />
        </div>
      </section>
      <MapSection />
      <section id="cta" className="relative">
        <CallToAction />
      </section>
    </main>
  );
}
