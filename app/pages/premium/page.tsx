'use client'
import Head from "next/head";
import PremiumCard from "@/app/components/Pre-ProductCard";
import { CheckCircleIcon, StarIcon, LockClosedIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import posthog from "posthog-js";

const premiumProducts = [
  {
    id: 1,
    title: "The Ultimate Budget Blueprint",
    description:
      "Master your monthly income, expenses, and goals with this actionable eBook.",
    price: "$250",
    originalPrice: "USD $450",
    coverImage: "/ebooks/budget-blueprint.jpg",
    link: "https://gumroad.com/l/budget-blueprint", // Replace with actual link
  },
  {
    id: 2,
    title: "Smart Savings Playbook",
    description:
      "Step-by-step savings strategy for real-life goals, big or small.",
    price: "$120",
    originalPrice: "USD $350",
    coverImage: "/ebooks/savings-playbook.png",
    link: "https://gumroad.com/l/savings-playbook",
  },
];

export default function PremiumPage() {
  return (
    <>
      <Head>
        <title>Premium Products | Mint Mogul</title>
        <meta
          name="description"
          content="Discover Mint Mogul's premium financial eBooks designed to help you budget smarter, save faster, and grow your wealth."
        />
        <meta property="og:title" content="Premium Tools | Mint Mogul" />
        <meta
          property="og:description"
          content="Expert financial eBooks to budget smarter, save faster, and grow wealth with confidence."
        />
        <meta property="og:image" content="/og-premium.jpg" />
        <meta property="og:url" content="https://mintmogul.com/premium" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="bg-[#fefcf7] text-[#1f2937] px-6 py-12 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
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
        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left text-sm text-gray-600">
          <div className="flex gap-2">
            {" "}
            <LockClosedIcon className="w-5 h-5 text-yellow-600" /> 100% secure
            checkout with Gumroad
          </div>
          <div className="flex gap-2">
            <CheckCircleIcon className="w-5 h-5 text-green-700" /> 7-day
            satisfaction guarantee
          </div>
          <div className="flex gap-2">
            {" "}
            <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-white-100" />{" "}
            Lifetime access and email support
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 py-12">
        {premiumProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <PremiumCard product={product} />
          </motion.div>
        ))}
      </section>
      <section className="bg-white text-gray-800 py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">What Readers Are Saying</h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-xl mx-auto text-gray-600">
            “I bought the Budget Blueprint and finally tracked every naira. I
            saved over ₦150k in 2 months!” – <em>Chidera A., Abuja</em>
          </p>
        </motion.div>
      </section>

      <section className="bg-[#1f2937] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to level up your finances?
        </h2>
        <p className="mb-6">
          Grab your copy and take the first step toward smarter money moves.
        </p>
        <Link
          href="/premium"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
          onClick={() => posthog.capture("clicked_cta_explore_premium_ebooks")}
          aria-label="Explore Premium eBooks"
        >
          Explore Premium eBooks
        </Link>
        <p className="text-center text-sm text-gray-500 mt-10">
          Designed and built with 💻 Next.js 14, Tailwind CSS, and Headless UI.
          Fully responsive and optimized for performance. Product images and
          payments powered by Gumroad.
        </p>
      </section>
    </>
  );
}
