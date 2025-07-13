"use client";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import CoinsBackground from "./CoinBackground";

export default function Footer() {
  return (
  
      <footer className="w-full bg-[#f9fafb] dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
          <CoinsBackground/>
        <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 lg:grid-cols-4 text-sm relative">
          {/* Floating Lemon Mascot */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute right-6 top-[-50px] "
          >
            <Lottie
              animationData={require("@/public/animation/3D-Money-Icon.json")} // or use a remote JSON
              loop
              autoplay
              className="w-full h-auto"
              style={{ height: "60px", width: "60px" }}
            />
          </motion.div>

          {/* Brand Info */}
          <div>
            <h2 className="text-lg font-bold text-[#536c32] dark:text-green-300">
              Mint Mogul
            </h2>
            <p className="mt-2 leading-relaxed max-w-xs">
              Empowering smart spenders with tools, insights, and guides to make
              better money moves — daily.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Products
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/tools" className="hover:text-[#b3da67]">
                  Top Tools
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#b3da67]">
                  Smart Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#b3da67]">
                  Blog Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Company/Legal Links */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-[#536c32]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#536c32]">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/Privacy"
                  className="text-blue-600 underline hover:text-[#536c32]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/TermsPage"
                  className="text-blue-600 underline hover:text-[#536c32]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/AffliateDisclosure"
                  className="text-blue-600 underline hover:text-[#536c32]"
                >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Stay Smart
            </h3>
            <p className="mb-3 text-sm">No spam. Just juicy money tips 🥤</p>
            <form className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
              <button
                type="submit"
                className="bg-[#536c32] text-white px-4 py-2 rounded-md hover:bg-[#445828] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons with Hover Animations */}
            <div className="flex gap-4 mt-4 text-gray-500">
              <motion.a
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="text-center text-xs py-6 border-t border-gray-200 dark:border-gray-800 px-4">
          <p className="text-gray-500 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Mint Mogul. Smarter money starts
            here.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Built with 💻 + 💚 by Enaikato Cathy using Next.js & Tailwind CSS —
            modular, intuitive, and behaviorally sound.
          </p>
        </div>
      </footer>
 
  );
}
