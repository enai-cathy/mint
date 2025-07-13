import Head from "next/head";
import Newsletter from "@/app/components/Newsletter";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CTABlock from "../components/CTABlock";

export default function NewsletterPage() {
  return (
    <>
      <Head>
        <title>Newsletter | Mint Mogul</title>
        <meta
          name="description"
          content="Join the Mint Mogul newsletter for smart money hacks, early access to financial templates, and exclusive discounts delivered weekly."
        />
      </Head>

      <main className="relative text-[#1f2937] mt-10 px-6 py-16 md:py-20 max-w-4xl mx-auto overflow-hidden">
        {/* 💌 Floating Emoji */}
        <div className="absolute left-8 top-10 text-4xl animate-bounce select-none">
          💌
        </div>

        {/* Soft floating blob */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#b3da67]/30 rounded-full blur-2xl animate-pulse -z-10" />

        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#536c32] mb-4">
            Join Thousands of Smart Savers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Get actionable money tips, free templates, and surprise drops in
            your inbox every week.
          </p>

          {/*  Bouncing Arrow */}
          <div className="mt-6 animate-bounce text-[#b3da67] flex justify-center">
            <ChevronDownIcon className="w-8 h-8" />
          </div>
        </section>

        <section>
          <Newsletter />
        </section>

        <section className="mt-16">
          <TestimonialsSection />
        </section>
        {/* 🎯 CTA Section */}
        <section className="mt-24">
          <CTABlock
            heading="Ready to Master Your Money?"
            subheading="Explore our curated products or dive into our latest blogs for practical money wins."
            primaryCta={{ href: "/products", label: "Browse Products" }}
            secondaryCta={{ href: "/blog", label: "Read Blog" }}
          />
        </section>
      </main>
    </>
  );
}
