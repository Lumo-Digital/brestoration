import Link from "next/link";
import Button from "@/components/Button";
import { VIDEO_FALLBACK_TEXT } from "@/constants/videos";

export default function CallToAction() {
  return (
    <section id="cta" className="relative">
      <video
        className="absolute top-0 left-0 -z-1 h-full w-full object-cover"
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/videos/home/hero.mp4" type="video/mp4" />
        {VIDEO_FALLBACK_TEXT}
      </video>
      <div className="from-brand-dark-blue/80 to-brand-dark-blue flex w-full flex-col justify-end gap-6 bg-linear-to-b sm:items-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center p-6 py-25">
          <h2 className="mb-3 text-center text-4xl font-semibold text-white sm:w-3/4 sm:text-center sm:text-balance">
            Ready to Restore Your Property?
          </h2>
          <p className="mb-4 text-center text-white sm:w-3/4 sm:text-center">
            Don&apos;t wait for damage to worsen. Our expert team is ready to
            assess your property and provide a detailed restoration plan.
            Contact us today for fast, professional service you can trust.
          </p>
          <Link href="/free-assessment" className="w-full sm:w-fit">
            <Button className="w-full">Book a free assessment</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
