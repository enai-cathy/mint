"use client";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";
import Head from "next/head";
import { useEffect, useState } from "react";
import { posthog } from "posthog-js";
import Tilt from "react-parallax-tilt";

// Add at top


const products = [
  {
    id: "monthly-budget-tracker",
    title: "Monthly Budget Tracker",
    category: "budget",
    description:
      "Track your monthly income and expenses effortlessly with a simple, clear layout designed for everyone worldwide.",
    price: "Free",
    originalPrice: "USD $8",
    link: "https://cathyspark262.gumroad.com/l/rseip",
    image: "/free-template.png",
  },
  {
    id: "debt-crusher-toolkit",
    title: "Debt Crusher Toolkit",
    category: "debt",
    description:
      "Organize and eliminate your debt faster with this globally trusted set of tools and strategies.",
    price: "USD $20",
    link: "https://lemonsqueezy.com/products/debt-crusher-toolkit?ref=your_affiliate_id",
    image: "/debt.png",
  },
  {
    id: "savings-goal-planner",
    title: "Savings Goal Planner",
    category: "savings",
    description:
      "Set and track realistic savings goals, stay motivated, and watch your wealth grow — no matter where you live.",
    price: "USD $8",
    originalPrice: "USD $20",
    link: "https://gumroad.com/l/savings-goal-planner?ref=your_affiliate_id",
    image: "/savings-planner.png",
  },
  {
    id: "net-worth-builder",
    title: "Net Worth & Wealth Builder",
    category: "wealth",
    description:
      "Monitor assets and liabilities in one place, helping you confidently build wealth across borders.",
    price: "USD $150",
    link: "https://gumroad.com/l/net-worth-builder?ref=your_affiliate_id",
    image: "/net-worth.png",
  },
  {
    id: "small-biz-bookkeeping-kit",
    title: "Small Business Bookkeeping Kit",
    category: "business",
    description:
      "Ideal for entrepreneurs everywhere — track expenses, revenue, and taxes with ease.",
    price: "USD $40",
    link: "https://lemonsqueezy.com/products/small-biz-bookkeeping-kit?ref=your_affiliate_id",
    image: "/small-business.png",
  },
  {
    id: "subscription-tracker",
    title: "Subscription Tracker",
    category: "budget",
    description:
      "Manage recurring payments and subscriptions effortlessly to save money monthly, wherever you are.",
    price: "USD $10",
    originalPrice: "USD $15",
    link: "https://gumroad.com/l/subscription-tracker?ref=your_affiliate_id",
    image: "/subscription.png",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProducts = 
  selectedCategory === "all"
  ?products
  :products.filter((p) => p.category === selectedCategory)


  useEffect(() => {
    posthog.capture("viewed_products_page");
  }, []);
  
  return (
    <>
      <Head>
        <title>Products | Mint Mogul</title>
        <meta
          name="description"
          content="Explore high-impact digital tools to master your budget, crush debt, track savings, and grow your wealth from anywhere in the world."
        />
        <meta
          property="og:title"
          content="Mint Mogul – Financial Tools & Templates"
        />
        <meta
          property="og:description"
          content="Explore premium templates and planners to budget better, save smarter, and grow your net worth."
        />
        <meta property="og:image" content="/og-products.jpg" />
        <meta property="og:url" content="https://mintmogul.com/products" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="px-6 py-12 max-w-7xl mx-auto">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#0e563d]">
            Explore Our Financial Templates
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
            Trusted, flexible, and globally friendly tools to help you budget
            better, save smarter, and reach your money goals.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {[
              { label: "All", value: "all" },
              { label: "Budget", value: "budget" },
              { label: "Debt", value: "debt" },
              { label: "Savings", value: "savings" },
              { label: "Wealth", value: "wealth" },
              { label: "Business", value: "business" },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                  selectedCategory === cat.value
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.02}
                transitionSpeed={250}
              >
                <ProductCard {...product} />
              </Tilt>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
