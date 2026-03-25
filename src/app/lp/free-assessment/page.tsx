import type { Metadata } from "next";
import Image from "next/image";
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
      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-[80dvh] items-stretch px-6 py-12 md:min-h-[60dvh]"
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
            suppressHydrationWarning
          >
            <source src={HERO_VIDEOS.home.src} type="video/mp4" />
            {VIDEO_FALLBACK_TEXT}
          </video>
          <div className="from-brand-dark-blue to-brand-dark-blue/30 absolute top-0 left-0 h-full w-full bg-linear-to-b" />
        </div>

        <div className="mx-auto flex w-full max-w-[800px] flex-1 flex-col justify-between space-y-6">
          <Image
            src="/logos/logo-white.svg"
            alt="Blue Restoration logo"
            width={140}
            height={60}
            priority
          />
          <div className="flex flex-col gap-y-6">
            <h1 className="text-5xl font-semibold text-balance text-white">
              Your Home Was Damaged. Now What?
            </h1>
            <p className="text-xl text-white/90">
              We assess, document, and restore — fast. Water, fire, mold, storm,
              or roof damage.
            </p>
            <ul className="flex flex-col gap-2 text-white">
              {[
                "Certified Technicians",
                "We Work With Your Insurance",
                "24/7 Emergency Response",
                "Serving FL, NC & SC",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-medium">
                  <span className="text-brand-yellow">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
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

      {/* Is This You? */}
      <section id="is-this-you" className="bg-white px-6 py-16">
        <div className="mx-auto w-full max-w-[800px]">
          <h2 className="text-brand-dark-blue mb-8 text-3xl font-bold">
            Is This You?
          </h2>
          <ul className="mb-8 space-y-4">
            {[
              "Water leaked into your ceiling after heavy rain",
              "You spotted mold growing behind walls",
              "A fire left smoke and structural damage",
              "A storm destroyed your roof overnight",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="text-brand-light-blue mt-1 font-bold">—</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-dark-blue text-lg font-semibold">
            If any of this sounds familiar, you need a professional assessment —
            and fast.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-brand-dark-blue px-6 py-16 text-white"
      >
        <div className="mx-auto w-full max-w-[800px]">
          <h2 className="mb-10 text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Free Assessment",
                description:
                  "We come to your property, evaluate the full extent of the damage, and document everything.",
              },
              {
                step: "Step 2",
                title: "Insurance Coordination",
                description:
                  "We communicate directly with your insurance provider to ensure your claim is filed correctly and completely.",
              },
              {
                step: "Step 3",
                title: "Full Restoration",
                description:
                  "Our certified team restores your property to its pre-damage condition — efficiently and safely.",
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase">
                  {step}
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-white/80">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-6 py-16">
        <div className="mx-auto w-full max-w-[800px]">
          <h2 className="text-brand-dark-blue mb-8 text-3xl font-bold">
            Services
          </h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { icon: "🔥", label: "Fire Damage" },
              { icon: "💧", label: "Water Damage" },
              { icon: "🍄", label: "Mold Evaluation" },
              { icon: "🌪️", label: "Storm Damage" },
              { icon: "🏠", label: "Roof Evaluation" },
            ].map(({ icon, label }) => (
              <li
                key={label}
                className="border-brand-light-blue/20 flex items-center gap-3 rounded-lg border p-4"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-brand-dark-blue font-semibold">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="bg-brand-light-blue px-6 py-16 text-center text-white"
      >
        <div className="mx-auto w-full max-w-[800px] space-y-4">
          <h2 className="text-3xl font-bold">
            Don&apos;t Let Damage Get Worse. Every Hour Counts.
          </h2>
          <p className="text-xl font-medium">Book Your Free Assessment Now</p>
          <a
            href="#form"
            className="bg-brand-yellow text-brand-dark-blue mt-4 inline-block rounded-lg px-8 py-4 text-lg font-bold transition-opacity hover:opacity-90"
          >
            Get My Free Assessment
          </a>
        </div>
      </section>

      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCL57XP9');`}
      </Script>
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
