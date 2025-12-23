"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/Button";
import MapSection from "@/components/MapSection";
import { SERVICES } from "@/constants/services";
import { HERO_VIDEOS, VIDEO_FALLBACK_TEXT } from "@/constants/videos";

const formSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  zipcode: z.string().optional(),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function FreeAssessmentPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipcode: "",
      comments: "",
    },
  });

  const services = watch("services");

  const handleServiceToggle = (service: string) => {
    const currentServices = services || [];
    if (currentServices.includes(service)) {
      setValue(
        "services",
        currentServices.filter((s) => s !== service)
      );
    } else {
      setValue("services", [...currentServices, service]);
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extract only digits from the input
    const digits = e.target.value.replace(/\D/g, "");

    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);

    // Format based on digit length
    let formattedValue = "";

    if (limitedDigits.length === 0) {
      formattedValue = "";
    } else if (limitedDigits.length <= 3) {
      formattedValue = `(${limitedDigits}`;
    } else if (limitedDigits.length <= 6) {
      formattedValue = `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
    } else {
      formattedValue = `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    }

    setValue("phone", formattedValue);
  };

  const onSubmit = async (data: FormData) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      zipCode: data.zipcode,
      comments: data.comments,
      servicesOfInterest: data.services,
      tags: ["website lead"],
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✓ Your request has been sent successfully!");
        reset();
      } else {
        alert("✕ " + (result.error || "Something went wrong"));
      }
    } catch {
      alert("✕ Connection error. Please try again.");
    }
  };

  const errorMessages = Object.values(errors)
    .map((error) => error.message)
    .filter(Boolean);

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
      <section id="form" className="w-full bg-white px-6">
        <form
          id="contact-form"
          className="mx-auto mt-10 mb-12 w-full max-w-[800px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset>
            <legend className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase">
              Service of interest <span className="text-red-500">*</span>
            </legend>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {SERVICES.map((service, i) => {
                const checkboxId = `checkbox-${service.label.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <div className="input-group w-full" key={i}>
                    <label
                      className="hover:bg-gray-25 hover:border-brand-300 has-checked:shadow-[0_0_0_2px_theme(colors.brand.500)] relative block w-full cursor-pointer rounded-sm border border-neutral-300 px-7 py-5 leading-5 transition-all duration-200"
                      htmlFor={checkboxId}
                    >
                      <input
                        type="checkbox"
                        className="absolute top-3 right-3 h-4 w-4"
                        style={{ accentColor: "var(--brand-500)" }}
                        id={checkboxId}
                        checked={services?.includes(service.label)}
                        onChange={() => handleServiceToggle(service.label)}
                      />
                      {service.label.split(" ")[0]}
                      <br />
                      {service.label.split(" ")[1]}
                    </label>
                  </div>
                );
              })}
            </div>
            {errors.services && (
              <span className="error-message mt-2 text-sm text-red-500">
                {errors.services.message}
              </span>
            )}
          </fieldset>
          <fieldset className="mt-10">
            <legend className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase">
              Contact details
            </legend>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="input-group w-full">
                <label
                  htmlFor="first-name"
                  className="mb-2 block text-sm font-normal"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  {...register("firstName")}
                  className={`focus:border-brand-500 w-full rounded-sm border ${errors.firstName ? "border-red-500" : "border-neutral-300"} p-3 transition-colors duration-200 focus:outline-none`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <span className="error-message mt-1 text-sm text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="input-group w-full">
                <label
                  htmlFor="last-name"
                  className="mb-2 block text-sm font-normal"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  {...register("lastName")}
                  className={`focus:border-brand-500 w-full rounded-sm border ${errors.lastName ? "border-red-500" : "border-neutral-300"} p-3 transition-colors duration-200 focus:outline-none`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <span className="error-message mt-1 text-sm text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div className="input-group w-full">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-normal"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`focus:border-brand-500 w-full rounded-sm border ${errors.email ? "border-red-500" : "border-neutral-300"} p-3 transition-colors duration-200 focus:outline-none`}
                  placeholder="john@email.com"
                />
                {errors.email && (
                  <span className="error-message mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="input-group w-full">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-normal"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="focus:border-brand-500 w-full rounded-sm border border-neutral-300 p-3 transition-colors duration-200 focus:outline-none"
                  placeholder="(123) 456-7890"
                  maxLength={14}
                  onInput={handlePhoneInput}
                />
              </div>
              <div className="input-group w-full">
                <label
                  htmlFor="zipcode"
                  className="mb-2 block text-sm font-normal"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipcode"
                  {...register("zipcode")}
                  className="focus:border-brand-500 w-full rounded-sm border border-neutral-300 p-3 transition-colors duration-200 focus:outline-none"
                  placeholder="12345"
                />
              </div>
              <div className="input-group w-full md:col-span-2">
                <label
                  htmlFor="comments"
                  className="mb-2 block text-sm font-normal"
                >
                  Additional Comments
                </label>
                <textarea
                  id="comments"
                  {...register("comments")}
                  rows={4}
                  className="focus:border-brand-500 w-full rounded-sm border border-neutral-300 p-3 transition-colors duration-200 focus:outline-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <Button
                type="submit"
                className="col-span-1 mt-5 cursor-pointer md:col-span-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>

              {errorMessages.length > 0 && (
                <div className="col-span-1 mt-4 md:col-span-2">
                  <div className="rounded-sm border border-red-200 bg-red-50 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-red-800">
                      Please fix the following errors:
                    </h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-red-600">
                      {errorMessages.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </fieldset>
        </form>
      </section>
      <MapSection />
    </main>
  );
}
