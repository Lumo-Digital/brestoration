"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Eyebrow from "@/components/Eyebrow";
import MapSection from "@/components/MapSection";
import CallToAction from "@/components/CallToAction";
import VideoCarousel from "@/components/VideoCarousel";
import { HERO_VIDEO, VIDEO_CAROUSEL_SECTION } from "@/constants";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function WaterDamage() {
  const pinnedRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
        markers: false, // debugging
      });
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <main>
      <section
        id="hero"
        className="relative flex h-[50dvh] flex-col justify-end gap-10 px-6 py-12 sm:h-[50dvh]"
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
            <source src={HERO_VIDEO.src} type="video/mp4" />
            {HERO_VIDEO.fallbackText}
          </video>
          <div className="from-brand-dark-blue to-brand-dark-blue/30 absolute top-0 left-0 h-full w-full bg-linear-to-b" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
          <h1 className="text-4xl font-semibold text-balance text-white lg:w-2/3">
            Fast Water Damage Restoration Services
          </h1>
          <p className="text-balance text-white lg:w-2/3">
            24/7 emergency water removal and restoration. We respond quickly to
            minimize damage and restore your property from floods, leaks, and
            water emergencies.
          </p>
        </div>
      </section>
      <section id="services" className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div
            ref={pinnedRef}
            className="flex flex-col items-start md:col-span-4"
          >
            <Eyebrow>24/7 Emergency Service</Eyebrow>
            <h2 className="mx-auto mb-8 w-full text-left text-3xl leading-7 font-semibold text-balance">
              Professional Water Damage Solutions
            </h2>
          </div>
          <div
            ref={scrollRef}
            className="relative flex flex-col gap-10 md:col-span-8"
          >
            {/* Línea vertical con gradient que se desvanece al final */}
            <div
              className="absolute top-6 bottom-0 left-4.5 w-0.5"
              style={{
                background:
                  "linear-gradient(to bottom, #D9D9D9 0%, #D9D9D9 85%, transparent 100%)",
              }}
            />
            <div className="flex gap-10">
              <div className="mb-6 flex items-start justify-center">
                <div className="bg-brand-dark-blue mx-auto inline-flex aspect-square -rotate-6 justify-center px-1">
                  <span className="bg-brand-light-blue relative z-10 flex aspect-square translate-1 rotate-5 items-center justify-center px-2 py-1 text-xl font-semibold text-white">
                    1
                  </span>
                </div>
              </div>
              <div>
                <div className="relative aspect-3/1 w-full">
                  <Image
                    src="/bg-free-assessment.jpg"
                    alt="Emergency response"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 leading-tight font-medium">
                  Rapid emergency response to stop the water source and assess
                  the full extent of damage throughout your property.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="mb-6 flex items-start justify-center">
                <div className="bg-brand-dark-blue mx-auto inline-flex aspect-square -rotate-6 justify-center px-1">
                  <span className="bg-brand-light-blue relative z-10 flex aspect-square translate-1 rotate-5 items-center justify-center px-2 py-1 text-xl font-semibold text-white">
                    2
                  </span>
                </div>
              </div>
              <div>
                <div className="relative aspect-3/1 w-full">
                  <Image
                    src="/bg-free-assessment.jpg"
                    alt="Water extraction"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 leading-tight font-medium">
                  Complete water removal using state-of-the-art extraction
                  equipment to eliminate standing water and saturated materials.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="mb-6 flex items-start justify-center">
                <div className="bg-brand-dark-blue mx-auto inline-flex aspect-square -rotate-6 justify-center px-1">
                  <span className="bg-brand-light-blue relative z-10 flex aspect-square translate-1 rotate-5 items-center justify-center px-2 py-1 text-xl font-semibold text-white">
                    3
                  </span>
                </div>
              </div>
              <div>
                <div className="relative aspect-3/1 w-full">
                  <Image
                    src="/bg-free-assessment.jpg"
                    alt="Strategic drying"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 leading-tight font-medium">
                  Strategic drying using industrial dehumidifiers and air movers
                  to thoroughly dry all affected structures and prevent mold
                  growth.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="mb-6 flex items-start justify-center">
                <div className="bg-brand-dark-blue mx-auto inline-flex aspect-square -rotate-6 justify-center px-1">
                  <span className="bg-brand-light-blue relative z-10 flex aspect-square translate-1 rotate-5 items-center justify-center px-2 py-1 text-xl font-semibold text-white">
                    4
                  </span>
                </div>
              </div>
              <div>
                <div className="relative aspect-3/1 w-full">
                  <Image
                    src="/bg-free-assessment.jpg"
                    alt="Cleaning and sanitization"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 leading-tight font-medium">
                  Thorough cleaning and sanitization of all affected areas using
                  antimicrobial treatments to ensure a safe, healthy
                  environment.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="mb-6 flex items-start justify-center">
                <div className="bg-brand-dark-blue mx-auto inline-flex aspect-square -rotate-6 justify-center px-1">
                  <span className="bg-brand-light-blue relative z-10 flex aspect-square translate-1 rotate-5 items-center justify-center px-2 py-1 text-xl font-semibold text-white">
                    5
                  </span>
                </div>
              </div>
              <div>
                <div className="relative aspect-3/1 w-full">
                  <Image
                    src="/bg-free-assessment.jpg"
                    alt="Full restoration"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 leading-tight font-medium">
                  Complete restoration and rebuilding of water-damaged areas,
                  returning your property to pre-loss condition or better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>{VIDEO_CAROUSEL_SECTION.eyebrow}</Eyebrow>
          <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-7 font-semibold text-balance md:w-2/3 lg:w-2/4">
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
