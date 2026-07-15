import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import { CTA_BUTTONS } from "@/constants";

export const metadata: Metadata = {
  title: "Thank You - Blue Restoration",
  description:
    "Thank you for reaching out to Blue Restoration. Our team will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="mb-30 flex flex-col items-center bg-white px-4 pb-30 text-center">
      <div className="mt-40 flex max-w-150 flex-col items-center gap-6">
        <div className="bg-brand-dark-blue flex h-16 w-16 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-[var(--color-default-font)] lg:text-5xl">
          Thank You!
        </h1>

        <p className="leading-snug text-gray-700">
          We&apos;ve received your request. A member of our team will contact
          you shortly to discuss the next steps.
        </p>

        <p className="leading-snug text-gray-700">
          If your situation is urgent, call us now for 24/7 emergency
          assistance.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a href={CTA_BUTTONS.emergency.href} className="w-full sm:w-fit">
            <Button className="cursor-pointer">
              {CTA_BUTTONS.emergency.label}
            </Button>
          </a>
          <Link href="/" className="w-full sm:w-fit">
            <Button className="bg-transparent text-[var(--color-default-font)] outline outline-[var(--color-default-font)] hover:opacity-70 hover:brightness-100">
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
