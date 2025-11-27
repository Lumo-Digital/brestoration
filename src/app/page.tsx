import Link from "next/link";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import VideoCard from "@/components/VideoCard";
import VideoCarousel from "@/components/VideoCarousel";
import MapSection from "@/components/MapSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import {
  SERVICES,
  HERO_VIDEO,
  WHY_CHOOSE_US_SECTION,
  VIDEO_CAROUSEL_SECTION,
  CTA_BUTTONS,
} from "@/constants";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section
          id="hero"
          className="relative flex h-[75dvh] flex-col justify-end gap-10 px-6 py-12 sm:h-[50dvh]"
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
            <h1 className="text-4xl font-semibold text-balance text-white md:text-6xl lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-balance text-white lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              adipisci nihil sapiente ratione autem, libero inventore
              praesentium tenetur.
            </p>
            <div className="flex w-full flex-col md:flex-row md:gap-4 lg:justify-start">
              <Link
                href={CTA_BUTTONS.freeAssessment.href}
                className="w-full md:w-1/2 lg:w-fit"
              >
                <Button className="cursor-pointer">
                  {CTA_BUTTONS.freeAssessment.label}
                </Button>
              </Link>
              <a href="tel:+123456789" className="w-full md:w-1/2 lg:w-fit">
                <Button className="cursor-pointer">
                  {CTA_BUTTONS.emergency.label}
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="bg-white px-6 py-12 md:py-20">
          <div className="mx-auto max-w-7xl">
            <Eyebrow>Lorem ipsum</Eyebrow>
            <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-7 font-semibold text-balance sm:w-2/4">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h2>
            <ul className="grid grid-cols-12 gap-4">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <li
                    key={service.label}
                    className="col-span-6 aspect-7/6 rounded border border-gray-400 sm:aspect-6/3 md:aspect-8/3 lg:col-span-3 lg:aspect-2/1"
                  >
                    <Link
                      href={service.href}
                      className="relative flex h-full w-full flex-col justify-between gap-3 p-4 text-sm font-semibold tracking-widest text-black/70 uppercase"
                    >
                      <Icon className="mr-3" />

                      <span className="w-10 leading-tight">
                        {service.label}
                      </span>
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
            <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-7 font-semibold text-balance sm:w-2/4">
              {WHY_CHOOSE_US_SECTION.title}
            </h2>
            <div className="grid grid-cols-12 gap-6">
              {WHY_CHOOSE_US_SECTION.items.map((item, i) => (
                <VideoCard
                  key={item.title}
                  src={item.videoSrc}
                  className={`col-span-12 aspect-video ${i < 2 ? "lg:col-span-6" : "lg:col-span-4"}`}
                >
                  <h3 className="text-2xl leading-7 font-semibold">
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
            <h2 className="mx-auto mb-8 w-full text-center text-3xl leading-7 font-semibold text-balance sm:w-2/4">
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
      <Footer />
    </>
  );
}
