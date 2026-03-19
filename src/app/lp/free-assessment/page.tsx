import type { Metadata } from "next";
import Script from "next/script";
import { HERO_VIDEOS, VIDEO_FALLBACK_TEXT } from "@/constants/videos";

export const metadata: Metadata = {
  title: "Get Your Free Property Assessment",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LPFreeAssessmentPage() {
  return (
    <main className="flex flex-col">
      <section
        id="hero"
        className="relative flex h-[80dvh] flex-col justify-end px-6 py-12 md:h-[50dvh] lg:h-[40dvh]"
      >
        <div className="absolute top-0 left-0 -z-1 h-full w-full">
          <video
            className="h-full w-full object-cover object-[50%_55%]"
            preload="metadata"
            playsInline
            autoPlay
            loop
            muted
            poster={HERO_VIDEOS.home.poster}
          >
            <source src={HERO_VIDEOS.home.src} type="video/mp4" />
            {VIDEO_FALLBACK_TEXT}
          </video>
          <div className="from-brand-dark-blue to-brand-dark-blue/30 absolute top-0 left-0 h-full w-full bg-linear-to-b" />
        </div>

        <div className="mx-auto w-full max-w-[800px]">
          <h1 className="text-5xl font-semibold text-balance text-white">
            Get Your Free Property Assessment Today
          </h1>
        </div>
      </section>

      <section id="form" className="w-full bg-white px-6 py-12">
        <div className="mx-auto w-full max-w-[800px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/O6o3o0lGCnE41t2E9Mnk"
            style={{
              width: "100%",
              height: "902px",
              border: "none",
              borderRadius: "3px",
            }}
            id="inline-O6o3o0lGCnE41t2E9Mnk"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form Website"
            data-height="902"
            data-layout-iframe-id="inline-O6o3o0lGCnE41t2E9Mnk"
            data-form-id="O6o3o0lGCnE41t2E9Mnk"
            title="Form Website"
          />
        </div>
      </section>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69bc145bfa352c8ead2883a0"
        strategy="lazyOnload"
      />
    </main>
  );
}
