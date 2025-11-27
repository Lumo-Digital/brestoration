"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { SERVICES, NAV_ITEMS, CTA_BUTTONS } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-6 pt-6 pb-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo-white.svg"
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
            <button className="cursor-pointer text-white transition-colors hover:text-gray-300">
              Services
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 z-50 mt-2 w-96 -translate-x-1/2">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
                  <div className="grid grid-cols-2 gap-3">
                    {SERVICES.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="flex flex-col gap-2 rounded-lg border border-gray-300 p-4 text-sm font-semibold tracking-widest text-black/70 uppercase transition-all hover:border-blue-600 hover:bg-blue-50"
                        >
                          <Icon className="h-6 w-6" />
                          {service.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white transition-colors hover:text-gray-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 text-white transition-colors hover:bg-gray-800 md:hidden"
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
                src="/logo-white.svg"
                height={40}
                width={143}
                alt="Blue Restoration Logo"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-1 flex-col items-start justify-between gap-8">
            <ul className="m-0 w-full px-0">
              {/* Services Section */}
              <li className="flex flex-col px-5 py-4">
                <span className="mb-5 text-sm font-semibold tracking-[0.25rem] text-white/60 uppercase">
                  Services
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.label}
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
                    );
                  })}
                </div>
              </li>

              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="flex px-5 py-4">
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-lg text-white transition-colors hover:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex w-full flex-col px-4 pb-4 sm:flex-row sm:gap-4">
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
