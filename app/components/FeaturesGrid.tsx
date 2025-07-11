"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    title: "Tools/Resources",
    text: "Expertly vetted tools to help you manage finances stress-free.",
  },
  {
    title: "Goal-Based Saving Worksheets",
    text: "Set, track, and smash savings goals with visual progress and clarity.",
  },
  {
    title: "Wealth Snapshot",
    text: "With Net Worth Tracker – get a real-time view of your financial position.",
  },
  {
    title: "Smarter Budgeting Templates",
    text: "Track expenses and income effortlessly to stay in control of your money.",
  },
  {
    title: "No Fluff, Just Results",
    text: "Streamlined tools with zero overwhelm—focused on your next move.",
  },
  {
    title: "Savings & Debt Snowball Calculator",
    text: "Use it whether you’re starting out or scaling up your financial game.",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="relative z-10 bg-[#f9fafb] py-20 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto text-center">
      {/* Floating background blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#b3da67]/30 blur-2xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#84cc16]/20 blur-2xl rounded-full animate-spin-slow -z-10" />

      {/* Section badge */}
      <p className="text-sm uppercase tracking-widest font-medium text-[#84cc16] mb-2">
        What's Inside
      </p>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0e563d] to-[#84cc16] text-transparent bg-clip-text mb-12">
        Tools You Can Start Using Immediately
      </h1>

      {/* Feature Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 text-left">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2 text-[#0e563d]">
              <CheckCircleIcon className="h-6 w-6 text-[#b3da67]" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-14">
        <Link
          href={"/tools"}
          className="inline-block bg-[#b3da67] hover:bg-[#fcd34d] text-charcoal font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95"
        >
          🚀 Explore Our Free Tools Now!
        </Link>
      </div>

      {/* Image Preview */}
      <div className="mt-16">
        <Image
          src="/images/tablet-screen.png"
          width={900}
          height={600}
          alt="Dashboard screenshot"
          className="rounded-xl mx-auto shadow-xl"
        />
      </div>
    </div>
  );
}
