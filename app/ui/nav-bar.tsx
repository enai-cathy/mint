"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#fffbf1]/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Nav */}
          <div className="flex items-center justify-between gap-8">
            <Link
              href="/"
              className="text-lg font-bold text-[#536c32] px-2 transition-transform hover:scale-105 hover:text-[#88c057]"
            >
              <span className="transition-transform duration-300 hover:animate-bounce">
                Mint Mogul
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex gap-6 items-center">
              <NavLinks />
              <Link
                href="/get-started"
                className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#88c057] hover:bg-[#a6e88e] hover:text-[#2f4321] transition-shadow duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#536c32]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {mobileMenuOpen && (
        <div className="absolute top-16 right-4 w-64 bg-[#fffbf1]/90  shadow-lg border border-[#dfe6d4] z-50 p-4 space-y-3">
          <NavLinks />
          <Link
            href="/Newsletter"
            className="block w-full text-center mt-2 px-4 py-2 rounded-md bg-[#88c057] text-white font-medium hover:bg-[#a6e88e] transition duration-300"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
