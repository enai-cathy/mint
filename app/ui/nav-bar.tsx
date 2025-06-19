"use client";

import Link from "next/link";
import { useState } from "react";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"; // example import from Heroicons

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#fffbf1] text-white shadow-md p-2 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-between px-4 py-2 gap-8">
            <Link
              href="/"
              className=" whitespace-nowrap text-lg font-bold text-[#536c32] font-sans-serif px-8"
            >
              Mint Mogul
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-4 items-center">
              <NavLinks />
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className=" lg:flex px-4 pb-4 space-y-2 pt-2 bg-[#fffbf1]">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}
