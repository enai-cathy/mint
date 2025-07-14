"use client";
import React from "react";
import {
  CheckCircleIcon,
  CogIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-8 lg:px-20 max-w-6xl mx-auto">
      {/* Background floating blobs */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#b3da67]/20 blur-2xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-[#84cc16]/20 blur-2xl rounded-full animate-spin-slow -z-10" />

      {/* Title & Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl py-2 md:text-5xl font-bold font-serif bg-gradient-to-r from-[#0e563d] to-[#b3da67] text-transparent bg-clip-text mb-6">
          Meet Mint Mogul
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We&apos;re not just another money blog. Mint Mogul is your all-in-one
          playground for financial domination — built for big dreamers and smart
          savers who want more from their money <strong>now</strong>.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="mt-14 space-y-10">
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="p-2 bg-white rounded-full shadow-md">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    icon: <CogIcon className="w-6 h-6 text-[#3b82f6]" />,
    title: "Tools That Think (So You Don’t Have To)",
    content:
      "From investment trackers to savings calculators and daily money hacks — our free insight-powered tools do the heavy lifting so you can make moves like a mogul.",
  },
  {
    icon: <StarIcon className="w-6 h-6 text-[#facc15]" />,
    title: "Premium Products That Pay for Themselves",
    content:
      "Digital planners, income-boosting templates, financial vision boards — crafted to turn your mindset (and wallet) into a wealth-building machine.",
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6 text-[#22c55e]" />,
    title: "Curated Picks You Can Actually Trust",
    content:
      "We only recommend tools we’d use ourselves. Think top-tier software, finance hacks, and subscription-worthy deals — all designed to 10x your money life.",
  },
];
