import Head from "next/head";
import Newsletter from "@/app/components/Newsletter";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function NewsletterPage() {
    return (
      <>
        <Head>
          <title>Newsletter | Mint Mogul</title>
          <meta
            name="description"
            content="Discover Mint Mogul's premium financial eBooks designed to help you budget smarter, save faster, and grow your wealth."
          />
        </Head>
  
        <section className="bg-[#fefcf7] text-[#1f2937] px-6 py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Tools for Your Financial Empire
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Curated, expert-level eBooks to help you budget, save, and invest with
            clarity and confidence.
          </p>
          <div className="flex justify-center gap-4 mt-6 text-green-700">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-700" />
              Secure checkout
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-500" />
              Trusted by 1,000+ users
            </div>
          </div>
        </section>
        <Newsletter/>
        </>
        )}