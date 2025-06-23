import Head from "next/head";
import Newsletter from "@/app/components/Newsletter";
import TestimonialsSection from "@/app/components/TestimonialsSection";


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

        <section className="text-[#1f2937] mt-5 px-6 py-6 md:py-5 text-center">
        
            <h2 className="text-3xl text-[#536c32] font-bold mb-4">
              Join Thousands of Smart Savers
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Get actionable money tips, free templates, and surprise drops in
              your inbox every week.
            </p>
        </section>
        <Newsletter />
        <TestimonialsSection/>
      </>
    );}