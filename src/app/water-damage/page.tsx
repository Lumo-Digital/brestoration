import Link from "next/link";
import Button from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import { CTA_BUTTONS } from "@/constants";
import { Droplets } from "lucide-react";

export default function WaterDamage() {
  return (
    <main>
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <Droplets className="text-brand-dark-blue h-12 w-12" />
            <h1 className="text-4xl font-semibold md:text-5xl">
              Water Damage Restoration
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Complete Water Damage Restoration Services
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  Water damage can occur from various sources including floods,
                  burst pipes, leaking roofs, or appliance malfunctions. Our
                  experienced team provides fast, effective water damage
                  restoration to minimize damage and prevent secondary issues
                  like mold growth.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  We use state-of-the-art water extraction equipment, industrial
                  dehumidifiers, and advanced drying techniques to restore your
                  property quickly and thoroughly. Our comprehensive services
                  include water removal, structural drying, and complete
                  restoration.
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
                      <h4 className="font-semibold">Emergency Response</h4>
                      <p className="text-gray-700">
                        Rapid response to stop water source and assess the
                        extent of damage
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-dark-blue flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold">
                        Water Extraction & Drying
                      </h4>
                      <p className="text-gray-700">
                        Complete water removal and strategic drying using
                        professional equipment
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-dark-blue flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold">
                        Restoration & Rebuilding
                      </h4>
                      <p className="text-gray-700">
                        Full restoration of affected areas to pre-loss condition
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">
                  Common Causes of Water Damage
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Burst or frozen pipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Roof leaks and storm damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Appliance failures and overflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Sewage backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Foundation cracks and seepage</span>
                  </li>
                </ul>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="bg-brand-dark-blue sticky top-24 rounded-lg p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">
                  Emergency Water Removal
                </h3>
                <p className="mb-6">
                  Don&apos;t wait! Fast response is critical to minimize water
                  damage.
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
