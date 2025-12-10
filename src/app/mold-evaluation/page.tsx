import Link from "next/link";
import Button from "@/components/Button";
import CallToAction from "@/components/CallToAction";
import { CTA_BUTTONS } from "@/constants";
import { BrickWall } from "lucide-react";

export default function MoldEvaluation() {
  return (
    <main>
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <BrickWall className="text-brand-dark-blue h-12 w-12" />
            <h1 className="text-4xl font-semibold md:text-5xl">
              Mold Evaluation & Remediation
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Expert Mold Inspection and Evaluation Services
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  Mold can pose serious health risks and cause significant
                  damage to your property. Our certified mold inspectors use
                  advanced techniques and equipment to detect, evaluate, and
                  remediate mold issues in your home or business.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  We provide comprehensive mold evaluation services including
                  air quality testing, surface sampling, moisture detection, and
                  detailed remediation plans. Our goal is to ensure your
                  property is safe and mold-free.
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
                      <h4 className="font-semibold">Initial Inspection</h4>
                      <p className="text-gray-700">
                        Thorough visual inspection and moisture mapping of
                        affected areas
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-dark-blue flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold">Testing & Analysis</h4>
                      <p className="text-gray-700">
                        Air quality and surface sampling sent to certified
                        laboratories
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-dark-blue flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold">
                        Remediation & Prevention
                      </h4>
                      <p className="text-gray-700">
                        Safe removal and prevention strategies to keep mold from
                        returning
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">
                  Signs You May Need Mold Evaluation
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Visible mold growth or discoloration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Musty or earthy odors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Recent water damage or leaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>Allergic reactions or respiratory issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-dark-blue mt-1">✓</span>
                    <span>High humidity levels in your property</span>
                  </li>
                </ul>
              </section>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="bg-brand-dark-blue sticky top-24 rounded-lg p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">
                  Schedule an Evaluation
                </h3>
                <p className="mb-6">
                  Get a professional mold evaluation from our certified
                  inspectors.
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
