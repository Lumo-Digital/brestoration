import Link from "next/link";
import Button from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import { CTA_BUTTONS } from "@/constants";
import { CloudLightning } from "lucide-react";

export default function StormDamage() {
  return (
    <main>
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <CloudLightning className="text-brand-dark-blue h-12 w-12" />
            <h1 className="text-4xl font-semibold md:text-5xl">
              Storm Damage Restoration
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Storm and Weather Damage Repair Services
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  Severe weather can cause extensive damage to your property,
                  from roof damage and flooding to broken windows and structural
                  issues. Our storm damage restoration team is ready to respond
                  immediately to help protect and restore your property.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  We provide comprehensive storm damage restoration including
                  emergency tarping, water extraction, structural repairs, and
                  complete rebuilding services. Our experienced team works
                  quickly to secure your property and prevent further damage.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Our Process</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-brand-dark-blue flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold">Emergency Protection</h4>
                      <p className="text-gray-700">
                        Immediate response to secure property with tarping and
                        board-up services
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-dark-blue flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold">Damage Assessment</h4>
                      <p className="text-gray-700">
                        Comprehensive inspection and documentation for insurance
                        claims
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-dark-blue flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold">Complete Restoration</h4>
                      <p className="text-gray-700">
                        Full repair and restoration of all storm-damaged areas
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">
                  Types of Storm Damage We Handle
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Wind damage and fallen trees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Hail damage to roofs and siding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Hurricane and tornado damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Lightning strikes and electrical damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Flooding and water intrusion</span>
                  </li>
                </ul>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="bg-brand-dark-blue sticky top-24 rounded-lg p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">
                  Emergency Storm Response
                </h3>
                <p className="mb-6">
                  Available 24/7 for immediate storm damage assessment and
                  repairs.
                </p>
                <div className="space-y-4">
                  <Link
                    href={CTA_BUTTONS.freeAssessment.href}
                    className="block"
                  >
                    <Button className="w-full cursor-pointer">
                      {CTA_BUTTONS.freeAssessment.label}
                    </Button>
                  </Link>
                  <a href="tel:+123456789" className="block">
                    <Button className="w-full cursor-pointer">
                      {CTA_BUTTONS.emergency.label}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="relative">
        <CallToAction />
      </section>
    </main>
  );
}
