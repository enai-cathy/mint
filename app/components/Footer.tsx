import { EnvelopeIcon } from "@heroicons/react/24/outline"; // or /solid
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800" >
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4 text-sm">
        {/* Brand + Mission */}
        <div>
          <h2 className="text-lg font-bold text-[#536c32] dark:text-green-300">
            Mint Mogul
          </h2>
          <p className="mt-2 leading-relaxed">
            Empowering smart spenders with tools, insights, and guides to make
            better money moves — daily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Explore
          </h3>
          <ul className="space-y-1">
            <li>
              <Link href="./tools" className="hover:text-[#b3da67]">
                Top Tools
              </Link>
            </li>
            <li>
              <Link href="./products" className="hover:text-[#b3da67]">
                Smart Products
              </Link>
            </li>
            <li>
              <Link href="../blog" className="hover:text-[#b3da67]">
                Blog Insights
              </Link>
            </li>
            <li>
              <Link href="./about" className="hover:text-[#b3da67]">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Trust & Policies */}
        <div>
          <h3 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Trust & Legal
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="./Privacy"
                className="hover:text-[#536c32] text-blue-600 underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="./TermsPage"
                className="hover:text-[#536c32] text-blue-600 underline"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="./AffliateDisclosure"
                className="hover:text-[#536c32] text-blue-600 underline"
              >
                Affliate Disclosure
              </Link>
            </li>
            <li>
              <Link
                href="/pages/contact"
                className="hover:text-[#536c32] text-blue-600 underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Stay Smart
          </h3>
          <p className="mb-3">
            Get financial tools, smart tips, and exclusive offers in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
            />
            <button
              type="submit"
              className="bg-[#536c32] text-white px-4 py-2 rounded-md hover:bg-[#445828]"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-4 text-gray-500">
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 hover:text-[#536c32]" />
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter className="w-5 h-5 hover:text-[#536c32]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 hover:text-[#536c32]" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-500 dark:text-gray-600">
          &copy; {new Date().getFullYear()} Mint Mogul. Smarter money starts
          here.
        </p>
        <p className="text-center text-sm text-gray-500 mt-8">
          Built from scratch by Ige-Edaba Enaikato Cathy using Next.js &
          Tailwind CSS – focused on intuitive design, modular code, and
          real-world usability. Crafted with clarity, trust, and behavioral
          design in mind
        </p>
      </div>
    </footer>
  );
}
