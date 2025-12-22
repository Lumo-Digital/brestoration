"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { SERVICES, CTA_BUTTONS } from "@/constants";
import { smoothScrollTo } from "@/utils/smoothScroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const isPolicyPage =
    pathname === "/cookie-policy" || pathname === "/privacy-policy";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAddressClick = () => {
    const address = "3625 NW 82nd Ave Suite 111, Doral, FL";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `geo:0,0?q=${encodeURIComponent(address)}`;
    } else {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
        "_blank"
      );
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("#contact", { offset: -80 });
  };

  return (
    <header
      className={`absolute z-1000 w-full px-6 py-6 pb-7 ${isPolicyPage ? "bg-brand-dark-blue" : ""}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logos/logo-white.svg"
              height={40}
              width={143}
              alt="Blue Restoration Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex cursor-pointer items-center gap-1 text-white transition-colors hover:text-gray-300">
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 z-50 w-64 pt-2">
                <div className="border border-gray-200 bg-white py-2 shadow-xl">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.label}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                      >
                        <Icon className="h-5 w-5 text-gray-500" />
                        {service.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-white transition-colors hover:text-gray-300"
          >
            Contact
          </a>

          <Link
            href="/free-assessment"
            className="text-white transition-colors hover:text-gray-300"
          >
            <Button className="text-black">Get a FREE assessment</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="cursor-pointer rounded-md p-2 text-white transition-colors hover:bg-gray-800 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`bg-brand-dark-blue fixed inset-0 z-50 h-full w-full transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full w-full flex-col">
          <div className="flex justify-between p-6">
            <Link href="/">
              <Image
                src="/logos/logo-white.svg"
                height={40}
                width={143}
                alt="Blue Restoration Logo"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="cursor-pointer rounded-md p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-1 flex-col items-start justify-between gap-8">
            <ul className="m-0 w-full px-0">
              {/* Services Section */}
              <li className="flex flex-col px-5 py-4 pb-6">
                <span className="mb-5 text-sm font-semibold tracking-[0.25rem] text-white/60 uppercase">
                  Services
                </span>
                <ul className="grid grid-cols-2 gap-3">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.label}>
                        <Link
                          href={service.href}
                          onClick={toggleMenu}
                          className="flex h-24 flex-col justify-between gap-2 rounded-lg border border-white/20 bg-white/10 p-3 text-xs leading-tight font-semibold tracking-widest text-white uppercase transition-all hover:border-white/40 hover:bg-white/20"
                        >
                          <Icon className="h-5 w-5" />
                          <span>
                            {service.label.split(" ").map((word, i) => (
                              <span key={i}>
                                {word}
                                {i < service.label.split(" ").length - 1 && (
                                  <br />
                                )}
                              </span>
                            ))}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              <li className="flex flex-col px-5 py-4 pb-6">
                <span className="mb-5 text-sm font-semibold tracking-[0.25rem] text-white/60 uppercase">
                  Contact
                </span>
                <ul className="flex flex-col gap-3 text-sm text-white">
                  <li>
                    <a
                      href="mailto:info@brestorations.com"
                      className="flex items-center gap-2 text-white transition-colors hover:text-gray-300"
                    >
                      <Mail className="h-4 w-4" />
                      info@brestorations.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+13054979125"
                      className="flex items-center gap-2 text-white transition-colors hover:text-gray-300"
                    >
                      <Phone className="h-4 w-4" />
                      +1 305 497 9125
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleAddressClick}
                      className="flex cursor-pointer items-start gap-2 text-left text-white transition-colors hover:text-gray-300"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>
                        3625 NW 82nd Ave Suite 111
                        <br />
                        Doral, FL
                      </span>
                    </button>
                  </li>
                </ul>
              </li>

              {/* {NAV_ITEMS.map((item, index) => (
                <li
                  key={item.label}
                  className={`flex px-5 py-4 ${index < NAV_ITEMS.length - 1 ? "border-b border-white/20" : ""}`}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-lg text-white transition-colors hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))} */}
            </ul>
            <div className="flex w-full flex-col gap-4 px-4 pb-4 sm:flex-row">
              <Link
                href={CTA_BUTTONS.freeAssessment.href}
                className="w-full sm:w-1/2"
              >
                <Button className="cursor-pointer">
                  {CTA_BUTTONS.freeAssessment.label}
                </Button>
              </Link>
              <Link
                href={CTA_BUTTONS.emergency.href}
                className="w-full sm:w-1/2"
              >
                <Button className="cursor-pointer">
                  {CTA_BUTTONS.emergency.label}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
