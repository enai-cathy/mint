'use client'
import Head from "next/head";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { posthog } from "posthog-js";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"


const tools = [
  {
    title: "TradingView – Chart Your Wealth Journey",
    description:
      "Access beautiful financial charts, set investment alerts, and track market trends. Ideal for investors and data-driven savers.",
    link: "https://www.tradingview.com/affiliate-program/",
    cta: "Try TradingView",
    type: "Investment Tools",
  },
  {
    title: "Payoneer – Get Paid Internationally",
    description:
      "Receive payments from global companies and freelance platforms in USD, EUR, GBP. Withdraw to your Nigerian bank account.",
    link: "https://www.payoneer.com/partners/",
    cta: "Register Now",
    type: "Banking & Payments",
  },
  {
    title: "The Monthly Budget Tracker (Template)",
    description:
      "Ditch spreadsheets forever. Our plug-and-play Notion budget template helps you track income, expenses, and financial goals in minutes.",
    type: "Digital Product",
    link: "/products/monthly-budget-tracker",
    cta: "View Template",
  },
  {
    title: "Savings Goal Tracker Pack",
    description:
      "Gamify your saving habits. Use our printable and digital savings charts to stay on track and motivated — from emergency funds to big life goals.",
    type: "Digital Product",
    link: "/products/savings-goal-tracker",
    cta: "Start Saving",
  },
  {
    title: "Gumroad – Sell Digital Products Fast",
    description:
      "Sell eBooks, courses, or financial tools? Gumroad is a no-fuss platform for creators that gets you paid quickly. Perfect for side hustlers.",
    type: "Creator Platform",
    link: "https://gumroad.com?ref=your_affiliate_id",
    cta: "Try Gumroad",
    external: true,
  },
  {
    title: "Payhip – Sell eBooks & Templates Easily",
    description:
      "Upload your products, set your prices, and let Payhip handle VAT, hosting, and payments—even in Nigeria. Perfect for budget trackers & planners.",
    link: "https://payhip.com/affiliates",
    cta: "Join Payhip",
    type: "Digital Product",
  },
  {
    title: "ConvertKit – Build a Wealthy Email List",
    description:
      "If you sell anything online, ConvertKit helps you capture leads, automate emails, and boost your revenue while you sleep.",
    type: "Email Marketing",
    link: "https://convertkit.com?ref=your_affiliate_id",
    cta: "Grow With ConvertKit",
    external: true,
  },
  {
    title: "Lemon Squeezy – Sell Digital Goods Globally",
    description:
      "The easiest platform to sell Notion templates, finance courses, or digital downloads with built-in tax & payment support.",
    link: "https://www.lemonsqueezy.com/affiliates",
    cta: "Become a Partner",
    type: "Creator Platform",
  },
  {
    title: "Wise – Save Money on Global Transfers",
    description:
      "Send and receive money globally at real exchange rates. Perfect for freelancers and online entrepreneurs in Nigeria.",
    link: "https://wise.com/partners",
    cta: "Sign Up Free",
    type: "Banking & Payments",
  },
  {
    title: "NordVPN – Secure Your Digital Wallet",
    description:
      "Protect your browsing, avoid price discrimination, and stay anonymous while managing your finances online.",
    link: "https://nordvpn.com/affiliates/",
    cta: "Protect Yourself",
    type: "Privacy Tool",
  },
];

export default function ToolsPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);
  const filteredtools =
  selectedType ==="all"
  ?tools
  :tools.filter((p) => p.type === selectedType)

  useEffect(() => {
    posthog.capture("viewed_tools_page");
    const timeout = setTimeout(() => setLoading (false), 1000);
    return() =>clearTimeout(timeout)
  }, []);

  return (
    <>
      <Head>
        <title>Money Tools & Templates | Mint Mogul</title>
        <meta
          name="description"
          content="Explore trusted tools and templates for saving, investing, and growing your money — curated by Mint Mogul."
        />
      </Head>

      <div className="relative max-w-5xl mt-20 mx-auto px-6 py-16 text-gray-900">
        {/* Floating Blobs for Magic Beans feel */}
        <div className="absolute top-0 left-10 w-32 h-32 bg-[#b3da67]/30 blur-2xl rounded-full animate-pulse -z-10" />
        <div className="absolute bottom-0 right-20 w-40 h-40 bg-[#84cc16]/25 blur-2xl rounded-full animate-spin-slow -z-10" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl p-2 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0e563d] to-[#b3da67] text-center"
        >
          Tools & Templates for Money Moguls
        </motion.h1>
        <p className="text-lg mb-10 text-gray-700 text-center">
          Whether you're budgeting like a boss or scaling a side hustle, these
          are the tools that get you closer to wealth. Everything listed here is
          either made by us or hand‑picked for its value and credibility.
        </p>
        {/* <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {[
          { label: "All", value: "all" },
          { label: "Banking & Payment", value: "Banking & Payment" },
          { label: "Privacy Tool", value: "Privacy Tool" },
          { label: "Creator Platform", value: "Creator Platform" },
          { label: "Email Marketing", value: "Email Marketing" },
          { label: "Investment Tools", value: "Investment Tools" },
          { label: "Digital Products", value: "Digital Products" },
        ].map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedType(cat.value)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              selectedType === cat.value
                ? "bg-green-600 text-white"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div> */}

        <div className="mb-10">
          <label
            htmlFor="tool-type"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Filter by Tool Type
          </label>
          <select
            id="tool-type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="block w-full md:w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-[#b3da67] focus:border-[#b3da67]"
          >
            <option value="all">All</option>
            <option value="Banking & Payments">Banking & Payments</option>
            <option value="Privacy Tool">Privacy Tool</option>
            <option value="Creator Platform">Creator Platform</option>
            <option value="Email Marketing">Email Marketing</option>
            <option value="Investment Tools">Investment Tools</option>
            <option value="Digital Product">Digital Product</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 animate-pulse p-6 rounded-2xl h-48"
              ></div>
            ))
          ) : filteredtools.length > 0 ? (
            filteredtools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-500 uppercase mb-2">
                  {tool.type}
                </p>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {tool.title}
                </h2>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                {tool.external ? (
                  <a
                    href={tool.link}
                    aria-label={`Visit ${tool.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#b3da67] font-medium hover:underline"
                  >
                    {tool.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-1 text-[#b3da67]" />
                  </a>
                ) : (
                  <Link
                    href={tool.link ?? "/"}
                    className="inline-flex items-center text-[#b3da67] font-medium hover:underline"
                  >
                    {tool.cta}
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No tools found for this category.
            </p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#0e563d] rounded-3xl p-8 text-center text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold  mb-2">
            Want Exclusive Tools & Drops?
          </h3>
          <p className="mb-4">
            Get early access to premium planners, financial tech hacks, and
            smart money deals — straight to your inbox.
          </p>
          <Link href="./Newsletter">
            <button className="bg-[#b3da67] text-white px-6 py-3 rounded-full shadow hover:bg-green-200 transition text-lg">
              Join the Mogul List
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}

