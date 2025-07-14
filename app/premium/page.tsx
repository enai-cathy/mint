"use client";
import Head from "next/head";
import PremiumCard from "@/app/components/Pre-ProductCard";
import {
  CheckCircleIcon,
  StarIcon,
  LockClosedIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import CTASection from "../components/CTASection";
import TestimonialsSection from "../components/TestimonialsSection";


const premiumProducts = [
  {
    id: 1,
    title: "The Ultimate Budget Blueprint",
    description:
      "Master your monthly income, expenses, and goals with this actionable eBook.",
    price: "$250",
    originalPrice: "USD $450",
    coverImage: "/images/mint-mogul.png",
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
// const features = [
//   {
//     icon: <LockClosedIcon className="w-6 h-6 text-[#3b82f6]" />,
//     title: " 100% secure checkout with Gumroad",
   
//   },
//   {
//     icon: <StarIcon className="w-6 h-6 text-[#facc15]" />,
//     title: "Premium Products That Pay for Themselves",
//    },
//   {
//     icon: <CheckCircleIcon className="w-6 h-6 text-[#22c55e]" />,
//     title: "Curated Picks You Can Actually Trust",
//      },
// ];

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

      <main className="max-w-4xl mx-auto mt-5 px-6 py-16 text-gray-900 text-base sm:text-lg px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#b3da67]/30 blur-2xl rounded-full animate-pulse -z-10" />
        <section className="relative px-6 py-12 md:py-20 text-center overflow-hidden">
          {/* Floating visuals behind heading */}
          <div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-[#b3da67]/20 blur-2xl rounded-full animate-pulse -z-10" />
          <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 bg-[#84cc16]/20 blur-2xl rounded-full animate-spin-slow -z-10" />

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl py-2 md:text-5xl font-bold font-serif bg-gradient-to-r from-[#0e563d] to-[#b3da67] text-transparent bg-clip-text mb-4"
          >
            Premium Tools for Your Financial Empire
          </motion.h1>

          {/* 🪄 Emotional Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg max-w-2xl mx-auto text-gray-700 mb-4"
          >
            Built for high-achievers who want more than just budgeting basics.
          </motion.p>

          {/* Supporting line */}
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Curated, expert-level eBooks to help you budget, save, and invest
            with clarity and confidence.
          </p>

          {/* Icon Feature Row */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap text-green-700 text-sm">
            <div className="flex items-center gap-2">
              <LockClosedIcon className="w-5 h-5 text-blue-500 animate-pulse" />
              100% Secure Checkout
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-500 animate-bounce" />
              Trusted by 1,000+ Users
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              Curated + Actionable Picks
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gay-y-8 max-w-6xl mx-auto px-6 py-12">
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

        <motion.div
          className="mt-12 grid sm:grid-cols-3 gap-6 text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-lg px-4 py-6 shadow-md flex items-start gap-3"
          >
            <LockClosedIcon className="w-6 h-6 text-yellow-500 animate-pulse shrink-0" />
            <p className="text-gray-700">100% secure checkout with Gumroad</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-lg px-4 py-6 shadow-md flex items-start gap-3"
          >
            <CheckCircleIcon className="w-6 h-6 text-green-600 shrink-0" />
            <p className="text-gray-700">7-day satisfaction guarantee</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-lg px-4 py-6 shadow-md flex items-start gap-3"
          >
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-500 animate-bounce shrink-0" />
            <p className="text-gray-700">Lifetime access and email support</p>
          </motion.div>
        </motion.div>
        {/* <section className="bg-white text-gray-800 py-12 px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            What Readers Are Saying
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="!h-auto flex py-4"
          >
            <p className="max-w-xl mx-auto text-gray-600">
              “I bought the Budget Blueprint and finally tracked every naira. I
              saved over ₦150k in 2 months!” – <em>Chidera A., Abuja</em>
            </p>
          </motion.div>
        </section> */}
        <TestimonialsSection/>
        <CTASection />
       
      </main>
    </>
  );
}
