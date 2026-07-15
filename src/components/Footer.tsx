"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICE_AREAS } from "@/constants/serviceAreas";
import { CTA_BUTTONS } from "@/constants";
import { scrollToForm } from "@/utils/smoothScroll";

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue relative bottom-px pt-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 pb-6 lg:gap-0">
        <div className="col-span-12 flex items-start justify-between md:col-span-3 lg:col-span-3">
          <Link href="/">
            <Image
              height={40}
              width={143}
              src="/logos/logo-white.svg"
              alt="Blue Restoration Logo"
            />
          </Link>
        </div>

        <div className="col-span-6 text-sm text-white md:col-span-3 lg:col-span-3">
          <h3 className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase">
            Sitemap
          </h3>
          <ul className="flex flex-col gap-2 p-0">
            <li>
              <Link
                href={"/"}
                className="text-white transition-colors hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/fire-damage"}
                prefetch={false}
                className="text-white transition-colors hover:text-gray-300"
              >
                Fire Damage
              </Link>
            </li>
            <li>
              <Link
                href={"/mold-evaluation"}
                prefetch={false}
                className="text-white transition-colors hover:text-gray-300"
              >
                Mold Evaluation
              </Link>
            </li>
            <li>
              <Link
                href={"/water-damage"}
                prefetch={false}
                className="text-white transition-colors hover:text-gray-300"
              >
                Water Damage
              </Link>
            </li>
            <li>
              <Link
                href={"/roof-evaluation"}
                prefetch={false}
                className="text-white transition-colors hover:text-gray-300"
              >
                Roof Evaluation
              </Link>
            </li>
            <li>
              <Link
                href={"/#form"}
                onClick={scrollToForm}
                className="text-white transition-colors hover:text-gray-300"
              >
                Free Assessment
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 text-sm text-white md:col-span-3 lg:col-span-3">
          <h3 className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase">
            Social
          </h3>
          <ul className="flex flex-col gap-2 p-0">
            <li>
              <a
                href={"https://www.instagram.com/bluerestoration.services"}
                className="text-white transition-colors hover:text-gray-300"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={"https://api.whatsapp.com/send?phone=13365305926"}
                className="text-white transition-colors hover:text-gray-300"
              >
                Whatsapp
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-span-12 text-sm text-white sm:col-span-6 md:col-span-3 lg:col-span-3"
          id="contact"
        >
          <h3 className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase md:text-right">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 p-0 md:text-right">
            <li>
              <a
                href="mailto:info@brestorations.com"
                className="text-white transition-colors hover:text-gray-300"
              >
                info@brestorations.com
              </a>
            </li>
            <li>
              <a
                href={CTA_BUTTONS.emergency.href}
                className="text-white transition-colors hover:text-gray-300"
              >
                {CTA_BUTTONS.emergency.label}
              </a>
            </li>
            <li>FL, NC & SC</li>
          </ul>
        </div>

        <div className="col-span-12 mt-15 border-t border-white/10 pt-8 text-sm text-white">
          <h3 className="mb-4 text-sm font-semibold tracking-[0.25rem] uppercase">
            Service Areas
          </h3>
          <p className="text-white/70">
            {SERVICE_AREAS.map(
              (group) => `${group.state}: ${group.cities.join(", ")}`
            ).join(" — ")}
          </p>
        </div>

        <div className="col-span-12 text-sm text-white sm:col-span-6 sm:hidden md:order-1 md:mt-4 lg:mt-16 lg:justify-self-end">
          <h3 className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase md:hidden">
            Legal
          </h3>
          <ul className="flex flex-col gap-2 p-0 md:flex-row md:justify-end md:gap-5">
            <li>
              <Link href={"/privacy-policy"} prefetch={false}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/cookie-policy"} prefetch={false}>
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 flex justify-between">
          <p className="text-sm text-white md:col-span-6 md:mt-4 lg:mt-16">
            © {new Date().getFullYear()} Blue Restoration Services
          </p>
          <ul className="hidden p-0 text-sm text-white sm:flex sm:gap-6 md:mt-4 lg:mt-16">
            <li>
              <Link href={"/privacy-policy"} prefetch={false}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/cookie-policy"} prefetch={false}>
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
