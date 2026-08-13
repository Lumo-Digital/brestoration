"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { Check, Loader2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SERVICES } from "@/constants/services";

// Keep in sync with FORM_EXCLUDED_PATHS in utils/smoothScroll.ts
const EXCLUDED_PATHS = ["/cookie-policy", "/privacy-policy", "/thank-you"];

const formSchema = z.object({
  services: z.array(z.string()).min(1, "Please select at least one service"),
  isHomeOwner: z.enum(["yes", "no"], { error: "Please select an option" }),
  hasInsurance: z.enum(["yes", "no"], { error: "Please select an option" }),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Please enter a valid email")),
  phone: z.string().optional(),
  zipcode: z.string().optional(),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadFormSection() {
  const pathname = usePathname();
  const router = useRouter();
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      isHomeOwner: undefined,
      hasInsurance: undefined,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipcode: "",
      comments: "",
    },
  });

  const services = watch("services");
  const isHomeOwner = watch("isHomeOwner");
  const hasInsurance = watch("hasInsurance");

  if (EXCLUDED_PATHS.includes(pathname)) {
    return null;
  }

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

  const handlePhoneInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    // Extract only digits from the input
    const digits = e.currentTarget.value.replace(/\D/g, "");

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
    setSubmitState("loading");

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      zipCode: data.zipcode,
      comments: data.comments,
      servicesOfInterest: data.services,
      isHomeOwner:
        data.isHomeOwner?.charAt(0).toUpperCase() + data.isHomeOwner?.slice(1),
      hasInsurance:
        data.hasInsurance?.charAt(0).toUpperCase() +
        data.hasInsurance?.slice(1),
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
        // @ts-expect-error - dataLayer is provided by GTM
        window.dataLayer = window.dataLayer || [];

        // GTM: general form submission event
        // @ts-expect-error - dataLayer is provided by GTM
        window.dataLayer.push({
          event: "form_submit_success",
          formId: "contact-form",
          formName: "Free Assessment",
        });

        // GA4 (G-VCPFTC2Q4L): in GTM create a GA4 Event tag triggered by "generate_lead",
        // then import it as a conversion in Google Ads
        // @ts-expect-error - dataLayer is provided by GTM
        window.dataLayer.push({
          event: "generate_lead",
          form_name: "Free Assessment",
        });

        setSubmitState("success");
        reset();
        router.push("/thank-you");
        setTimeout(() => setSubmitState("idle"), 3000);
      } else {
        setSubmitState("error");
        toast.error(result.error || "Something went wrong");
        setTimeout(() => setSubmitState("idle"), 3000);
      }
    } catch {
      setSubmitState("error");
      toast.error("Connection error. Please try again.");
      setTimeout(() => setSubmitState("idle"), 3000);
    }
  };

  const onError = () => {
    toast.error("Please fill in all required fields before submitting.");
  };

  return (
    <section id="form" className="w-full bg-white px-6 py-16">
      <form
        id="contact-form"
        className="mx-auto w-full max-w-[800px]"
        onSubmit={handleSubmit(onSubmit, onError)}
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
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <fieldset>
            <legend className="mb-4 text-sm font-semibold tracking-[0.25rem] uppercase">
              Are you a home owner? <span className="text-red-500">*</span>
            </legend>
            <div className="flex gap-4">
              {(["yes", "no"] as const).map((val) => (
                <label
                  key={val}
                  className="hover:bg-gray-25 hover:border-brand-300 has-checked:shadow-[0_0_0_2px_theme(colors.brand.500)] relative flex cursor-pointer items-center gap-3 rounded-sm border border-neutral-300 px-6 py-4 transition-all duration-200"
                >
                  <input
                    type="radio"
                    name="isHomeOwner"
                    value={val}
                    checked={isHomeOwner === val}
                    onChange={() =>
                      setValue("isHomeOwner", val, { shouldValidate: true })
                    }
                    className="h-4 w-4"
                    style={{ accentColor: "var(--brand-500)" }}
                  />
                  <span className="capitalize">{val}</span>
                </label>
              ))}
            </div>
            {errors.isHomeOwner && (
              <span className="error-message mt-2 text-sm text-red-500">
                Please select an option
              </span>
            )}
          </fieldset>

          <fieldset>
            <legend className="mb-4 text-sm font-semibold tracking-[0.25rem] uppercase">
              Do you have insurance? <span className="text-red-500">*</span>
            </legend>
            <div className="flex gap-4">
              {(["yes", "no"] as const).map((val) => (
                <label
                  key={val}
                  className="hover:bg-gray-25 hover:border-brand-300 has-checked:shadow-[0_0_0_2px_theme(colors.brand.500)] relative flex cursor-pointer items-center gap-3 rounded-sm border border-neutral-300 px-6 py-4 transition-all duration-200"
                >
                  <input
                    type="radio"
                    name="hasInsurance"
                    value={val}
                    checked={hasInsurance === val}
                    onChange={() =>
                      setValue("hasInsurance", val, { shouldValidate: true })
                    }
                    className="h-4 w-4"
                    style={{ accentColor: "var(--brand-500)" }}
                  />
                  <span className="capitalize">{val}</span>
                </label>
              ))}
            </div>
            {errors.hasInsurance && (
              <span className="error-message mt-2 text-sm text-red-500">
                Please select an option
              </span>
            )}
          </fieldset>
        </div>

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
              <label htmlFor="email" className="mb-2 block text-sm font-normal">
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
              <label htmlFor="phone" className="mb-2 block text-sm font-normal">
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
                maxLength={5}
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

            <button
              type="submit"
              disabled={submitState === "loading" || submitState === "success"}
              className={`col-span-1 mt-5 inline-flex w-full items-center justify-center px-12 py-3 font-semibold transition-all duration-300 md:col-span-2 ${submitState === "idle" ? "bg-brand-yellow cursor-pointer hover:brightness-80" : ""} ${submitState === "loading" ? "bg-brand-yellow cursor-not-allowed opacity-70" : ""} ${submitState === "success" ? "cursor-default bg-green-500 text-white" : ""} ${submitState === "error" ? "bg-red-500 text-white" : ""} `}
            >
              {submitState === "idle" && "Send"}
              {submitState === "loading" && (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              )}
              {submitState === "success" && (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Sent!
                </>
              )}
              {submitState === "error" && (
                <>
                  <X className="mr-2 h-4 w-4" />
                  Something went wrong
                </>
              )}
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
