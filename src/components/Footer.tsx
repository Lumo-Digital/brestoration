import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 pb-6 lg:gap-0">
        <div className="col-span-12 flex items-start justify-between md:col-span-3 lg:col-span-3">
          <Image
            height={40}
            width={143}
            src="/logo-white.svg"
            alt="Blue Restoration Logo"
          />
        </div>

        <div className="col-span-6 text-sm text-white md:col-span-3 lg:col-span-3">
          <h3 className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase">
            Sitemap
          </h3>
          <ul className="flex flex-col gap-2 p-0">
            <li>
              <Link href={"/"}>Link 1</Link>
            </li>
            <li>
              <Link href={"/"}>Link 2</Link>
            </li>
            <li>
              <Link href={"/"}>Link 3</Link>
            </li>
            <li>
              <Link href={"/"}>Link 4</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 text-sm text-white md:col-span-3 lg:col-span-3">
          <h3 className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase">
            Social
          </h3>
          <ul className="flex flex-col gap-2 p-0">
            <li>
              <Link href={"/"}>Social 1</Link>
            </li>
            <li>
              <Link href={"/"}>Social 2</Link>
            </li>
            <li>
              <Link href={"/"}>Social 3</Link>
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
              <Link href="/" className="transition-colors hover:text-gray-300">
                info@brestorations.com
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-gray-300">
                +1 305 497 9125
              </Link>
            </li>
            <li>
              <Link href="#">
                3625 NW 82nd Ave Suite 111
                <br />
                Doral, FL
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 text-sm text-white sm:col-span-6 sm:hidden md:order-1 md:mt-4 lg:mt-16 lg:justify-self-end">
          <h3 className="mb-8 text-sm font-semibold tracking-[0.25rem] uppercase md:hidden">
            Legal
          </h3>
          <ul className="flex flex-col gap-2 p-0 md:flex-row md:justify-end md:gap-5">
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Cookie Policy</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 flex justify-between">
          <p className="text-sm text-white md:col-span-6 md:mt-4 lg:mt-16">
            © {new Date().getFullYear()} Blue Restoration Services
          </p>
          <ul className="hidden p-0 text-sm text-white sm:flex sm:gap-6 md:mt-4 lg:mt-16">
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
