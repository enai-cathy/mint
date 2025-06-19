'use client'
import React from "react";
import { motion } from "framer-motion";
import { ChartBarIcon, BriefcaseIcon, RocketLaunchIcon, EyeIcon } from "@heroicons/react/24/solid"; 


export default function TestimonialBlock() {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 mt-12 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Why Our Users Stick Around (and Brag About Us)
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <li className="flex gap-3 text-md space-y-2 ">
            <EyeIcon className="w-5 h-5 text-yellow-600" /> Built on psychology
            & behavioral finance principles
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <li className="flex gap-3 text-md">
            <ChartBarIcon className="w-5 h-5 text-blue-700" /> Real-time
            insights, not outdated advice
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <li className="flex gap-3 text-md">
            <BriefcaseIcon className="w-5 h-5 text-green-700" /> Perfect for
            solopreneurs, side hustlers & money geeks
          </li>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <li className="flex gap-3 text-md">
            <RocketLaunchIcon className="w-5 h-5 text-red-700" /> Designed to
            turn browsers into moguls — fast
          </li>
        </motion.div>
      </ul>
    </div>
  );
}

