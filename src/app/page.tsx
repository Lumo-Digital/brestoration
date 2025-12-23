import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import VideoCard from "@/components/VideoCard";
import VideoCarousel from "@/components/VideoCarousel";
import MapSection from "@/components/MapSection";
import CallToAction from "@/components/CallToAction";
import OptimizedVideo from "@/components/OptimizedVideo";
import {
  SERVICES,
  WHY_CHOOSE_US_SECTION,
  VIDEO_CAROUSEL_SECTION,
  CTA_BUTTONS,
  HERO_VIDEOS,
} from "@/constants";

export const metadata: Metadata = {
  title: "Blue Restoration - 24/7 Emergency Restoration Services",
  description:
    "Blue Restoration provides professional water damage, fire damage, mold evaluation, and storm damage restoration services in Florida, South Carolina and North Carolina. Available 24/7 for emergencies. Free assessment available.",
  openGraph: {
    title: "Blue Restoration - 24/7 Emergency Services",
    description:
      "Professional water damage, fire damage, mold evaluation, and storm damage restoration services. 24/7 emergency response in Florida, South Carolina and North Carolina.",
    url: "https://bluerestoration.com",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Blue Restoration Services",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="relative flex h-[80dvh] flex-col justify-end gap-10 px-6 py-12"
      >
        <div className="absolute top-0 left-0 -z-1 h-full w-full">
          <OptimizedVideo
            src={HERO_VIDEOS.home.src}
            poster={HERO_VIDEOS.home.poster}
            alt={HERO_VIDEOS.home.alt}
            className="h-full w-full object-cover"
            loading="eager"
            preload="auto"
          />
          <div className="from-brand-dark-blue to-brand-dark-blue/40 absolute top-0 left-0 h-full w-full bg-linear-to-b" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
          <h1 className="text-4xl font-semibold text-balance text-white md:text-6xl lg:w-2/3">
            Expert Damage Restoration When You Need It Most
          </h1>
          <p className="text-balance text-white lg:w-2/3">
            Fast, professional restoration for water, fire, mold, and storm
            damage. Our certified team responds immediately to protect your
            property and restore your peace of mind.
          </p>
          <div className="flex w-full flex-col md:flex-row md:gap-4 lg:justify-start">
            <Link
              href={CTA_BUTTONS.freeAssessment.href}
              className="mb-4 w-full md:w-1/2 lg:w-fit"
            >
              <Button className="cursor-pointer">
                {CTA_BUTTONS.freeAssessment.label}
              </Button>
            </Link>
            <a href="tel:+13054979125" className="w-full md:w-1/2 lg:w-fit">
              <Button className="cursor-pointer">
                {CTA_BUTTONS.emergency.label}
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section id="services" className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-8 font-semibold text-balance md:w-2/3 lg:w-2/4">
            Comprehensive Solutions for Every Type of Property Damage
          </h2>
          <ul className="grid grid-cols-12 gap-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <li
                  key={service.label}
                  className="hover:bg-brand-dark-blue/20 col-span-6 aspect-7/6 rounded border border-gray-400 bg-white transition-all sm:aspect-6/3 md:aspect-8/3 lg:col-span-3 lg:aspect-2/1"
                >
                  <Link
                    href={service.href}
                    className="relative flex h-full w-full flex-col justify-between gap-3 p-4 text-sm font-semibold tracking-widest text-black/70 uppercase"
                  >
                    <Icon className="mr-3" />

                    <span className="w-10 leading-tight">{service.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section id="why-choose-us" className="bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>{WHY_CHOOSE_US_SECTION.eyebrow}</Eyebrow>
          <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-8 font-semibold text-balance md:w-2/3 lg:w-2/4">
            {WHY_CHOOSE_US_SECTION.title}
          </h2>
          <div className="grid grid-cols-12 gap-6">
            {WHY_CHOOSE_US_SECTION.items.map((item, i) => (
              <VideoCard
                key={item.title}
                src={item.videoSrc}
                alt={item.videoAlt}
                className={`col-span-12 max-h-60 ${i < 2 ? "lg:col-span-6 lg:aspect-video lg:max-h-fit" : "lg:col-span-4 lg:aspect-5/4 lg:max-h-fit"}`}
              >
                <h3 className="text-2xl leading-8 font-semibold">
                  {item.title}
                </h3>
                <p className="w-full text-sm leading-snug">
                  {item.description}
                </p>
              </VideoCard>
            ))}
          </div>
        </div>
      </section>
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
