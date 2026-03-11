import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Blue Restoration",
  description:
    "We are expert consultants to give your home the solution it requires, from expert damage assessments to sustainable restoration solutions.",
};

export default function CookiePolicy() {
  return (
    <main className="mb-20 flex flex-col gap-20 bg-white lg:gap-38">
      <section className="mx-auto mt-40 max-w-[800px] px-4">
        <h1 className="mb-4 text-4xl font-bold text-[var(--color-default-font)] lg:text-5xl">
          Cookie Policy
        </h1>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Last Updated:</strong> December 22, 2025
        </p>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          1. What Are Cookies?
        </h2>

        <p className="mb-4 leading-snug text-gray-700">
          Cookies are small text files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used to
          make websites work more efficiently and provide information to website
          owners.
        </p>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          2. How We Use Cookies
        </h2>

        <p className="mb-4 leading-snug text-gray-700">
          We use cookies and similar tracking technologies to track activity on
          our Website and store certain information. The tracking technologies
          we use include beacons, tags, and scripts to collect and track
          information and to improve and analyze our Website.
        </p>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          3. Types of Cookies We Use
        </h2>

        <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
          3.1 Essential Cookies
        </h3>

        <p className="mb-4 leading-snug text-gray-700">
          These cookies are necessary for the Website to function properly. They
          enable basic functions like page navigation and access to secure areas
          of the Website.
        </p>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Examples:</strong>
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            Session cookies that maintain your connection during your visit
          </li>
          <li className="text-gray-700">
            Security cookies that help identify and prevent security risks
          </li>
        </ul>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Duration:</strong> Session-based (deleted when you close your
          browser)
        </p>

        <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
          3.2 Analytics Cookies
        </h3>

        <p className="mb-4 leading-snug text-gray-700">
          We use analytics cookies to understand how visitors interact with our
          Website. These cookies help us improve the user experience by
          providing insights into which pages are visited most frequently and
          how users navigate our site.
        </p>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Services We Use:</strong>
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            <strong>Google Analytics</strong> (via Google Tag Manager): Tracks
            website traffic, user behavior, and demographics. We use this
            service to understand how visitors use our Website and to improve
            our services.
          </li>
          <li className="text-gray-700">
            <strong>Google Tag Manager:</strong> Manages various marketing and
            analytics tags on our Website
          </li>
        </ul>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Information Collected:</strong>
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">Pages visited</li>
          <li className="text-gray-700">Time spent on pages</li>
          <li className="text-gray-700">Browser type and version</li>
          <li className="text-gray-700">Device information</li>
          <li className="text-gray-700">
            Geographic location (city/state level)
          </li>
          <li className="text-gray-700">Referring websites</li>
        </ul>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Duration:</strong> Varies by specific cookie, typically 30
          days to 2 years
        </p>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Third-Party Privacy Policies:</strong>
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            Google Analytics:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/privacy
            </a>
          </li>
          <li className="text-gray-700">
            Google Tag Manager:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/privacy
            </a>
          </li>
        </ul>

        <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
          3.3 Marketing/Advertising Cookies
        </h3>

        <p className="mb-4 leading-snug text-gray-700">
          These cookies are set through Google Tag Manager to track your
          browsing habits and build a profile of your interests. They are used
          to deliver advertisements more relevant to you and measure the
          effectiveness of advertising campaigns.
        </p>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Services We Use:</strong>
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            <strong>Google Ads:</strong> For remarketing and conversion tracking
          </li>
          <li className="text-gray-700">
            <strong>Facebook Pixel (Meta Pixel):</strong> Tracks conversions
            from Facebook ads, optimizes ads, builds targeted audiences for
            future campaigns, and enables remarketing to people who have already
            taken action on our Website
          </li>
        </ul>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Information Collected:</strong>
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            Pages visited and actions taken on our Website
          </li>
          <li className="text-gray-700">Device and browser information</li>
          <li className="text-gray-700">Ad interactions and conversions</li>
          <li className="text-gray-700">
            Custom audiences for advertising purposes
          </li>
        </ul>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Duration:</strong> Varies, typically 30 days to 2 years
        </p>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Third-Party Privacy Policies:</strong>
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            Meta/Facebook:{" "}
            <a
              href="https://www.facebook.com/privacy/explanation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.facebook.com/privacy/explanation
            </a>
          </li>
          <li className="text-gray-700">
            Google Ads:{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/technologies/ads
            </a>
          </li>
        </ul>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          4. Third-Party Cookies
        </h2>

        <p className="mb-4 leading-snug text-gray-700">
          Please note that third-party service providers, such as Google and
          Meta/Facebook, may also place cookies on your device through our
          Website. We do not control these cookies and recommend reviewing the
          privacy policies of these third parties:
        </p>

        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            <strong>Google:</strong>{" "}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/technologies/cookies
            </a>
          </li>
          <li className="text-gray-700">
            <strong>Meta/Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/privacy/policies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.facebook.com/privacy/policies/cookies
            </a>
          </li>
          <li className="text-gray-700">
            <strong>GoHighLevel:</strong>{" "}
            <a
              href="https://www.gohighlevel.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.gohighlevel.com/privacy-policy
            </a>
          </li>
        </ul>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          5. How to Manage Cookies
        </h2>

        <p className="mb-4 leading-snug text-gray-700">
          You have the right to decide whether to accept or reject cookies. Most
          web browsers automatically accept cookies, but you can usually modify
          your browser settings to decline cookies if you prefer.
        </p>

        <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
          5.1 Browser Settings
        </h3>

        <p className="mb-4 leading-snug text-gray-700">
          You can manage cookies through your browser settings:
        </p>

        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li className="text-gray-700">
            <strong>Chrome:</strong> Settings &gt; Privacy and security &gt;
            Cookies and other site data
          </li>
          <li className="text-gray-700">
            <strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt;
            Cookies and Site Data
          </li>
          <li className="text-gray-700">
            <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and
            website data
          </li>
          <li className="text-gray-700">
            <strong>Edge:</strong> Settings &gt; Cookies and site permissions
          </li>
        </ul>

        <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
          5.2 Opt-Out Tools
        </h3>

        <p className="mb-4 leading-snug text-gray-700">
          You can opt out of Google Analytics tracking by installing the Google
          Analytics Opt-out Browser Add-on:
          <br />
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>

        <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
          5.3 Impact of Disabling Cookies
        </h3>

        <p className="mb-4 leading-snug text-gray-700">
          If you disable cookies, some features of our Website may not function
          properly. Essential cookies cannot be disabled if you wish to use the
          Website.
        </p>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          6. Do Not Track Signals
        </h2>

        <p className="mb-4 leading-snug text-gray-700">
          Some browsers include a &quot;Do Not Track&quot; (DNT) feature that
          signals to websites that you do not want your online activities
          tracked. Our Website does not currently respond to DNT signals.
        </p>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          7. Updates to This Cookie Policy
        </h2>

        <p className="mb-4 leading-snug text-gray-700">
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. Please check this page periodically for updates.
        </p>

        <h2 className="mt-6 mb-3 text-2xl font-semibold text-gray-900">
          8. Contact Us
        </h2>

        <p className="mb-4 leading-snug text-gray-700">
          If you have questions about our use of cookies, please contact us:
        </p>

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Blue Restoration LLC</strong>
          <br />
          Address: 3625 NW 82nd Ave Suite 111, Doral, FL.
          <br />
          Email:{" "}
          <a
            href="mailto:info@brestorations.com"
            className="text-blue-600 hover:underline"
          >
            info@brestorations.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+13053974966" className="text-blue-600 hover:underline">
            Tel: +1&nbsp;305-397-4966
          </a>
        </p>

        <hr className="my-8 border-gray-300" />

        <p className="mb-4 leading-snug text-gray-700">
          <strong>Your Consent</strong>
        </p>

        <p className="mb-4 leading-snug text-gray-700">
          By using our Website, you consent to our use of cookies as described
          in this Cookie Policy.
        </p>
      </section>
    </main>
  );
}
