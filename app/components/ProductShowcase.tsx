// 'use client'
// import React from "react";
// import ProductCard from "./ProductCard";
// import {motion } from 'framer-motion'

// export default function ProductShowcase(){
//      const products = [
//         {
//           title: "Wealth Tracker",
//           description: "Monitor your income, expenses, and net worth.",
//           price: "$9.99",
//           image: "/images/wealth-tracker.png",
//           link: "/products/wealth-tracker",
//         },
//         {
//           title: "Debt Crusher Toolkit",
//           description: "Strategies to reduce and manage debt effectively.",
//           price: "$14.99",
//           image: "/images/debt-crusher.png",
//           link: "/products/debt-crusher-toolkit",
//         },
//         {
//           title: "Savings Goal Tracker",
//           description: "Stay on track with your savings goals easily.",
//           price: "$7.99",
//           image: "/images/savings-goal.png",
//           link: "/products/savings-goal-tracker",
//         },
//       ];
    
//     return (
//       <>
//         <div className="mt-4 flex grow flex-col gap-4">
         
//             <span>
//               {" "}
//               <h1 className="text-4xl text-center text-[#0e563d] font-bold">
//                 Curated for Any Stage of Wealth Building
//               </h1>{" "}
//               <br />
//               <p className="text-xl text-center text-[#0e563d]">
//                 Whether you're starting out or scaling up, Mint Mogul equips you
//                 with what you need to build real wealth and
//                  <span className="font-bold"> meet your needs. </span>
//               </p>{" "}
//             </span>
//           </div>
        
//         <div className="mt-12 flex grow gap-4 md:flex-row">
//           <main className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <ProductCard {...product} />
//               </motion.div>
//             ))}
//           </main>
//         </div>
//       </>
//     );
// }

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";

const categories = ["All", "Save", "Spend", "Track"];

const allProducts = [
  {
    title: "Wealth Tracker",
    description: "Monitor your income, expenses, and net worth.",
    tooltip: "Auto-track means less stress 💆🏽‍♀️",
    category: "Track",
    price: "$9.99",
    image: "/net-worth.png",
    link: "/products/wealth-tracker",
  },
  {
    title: "Debt Crusher Toolkit",
    description: "Strategies to reduce and manage debt effectively.",
    tooltip: "Pay it down faster 🚀",
    category: "Spend",
    price: "$14.99",
    image: "/debt.png",
    link: "/products/debt-crusher-toolkit",
  },
  {
    title: "Savings Goal Tracker",
    description: "Stay on track with your savings goals easily.",
    tooltip: "Save with purpose 🧠",
    category: "Save",
    price: "$7.99",
    image: "/savings-planner.png",
    link: "/products/savings-goal-tracker",
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeTab);

  return (
    <section className="w-full px-4 md:px-16 mt-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl text-[#0e563d] font-bold">
          Curated for Any Stage of Wealth Building
        </h1>
        <p className="text-xl text-[#0e563d] mt-4">
          Whether you're starting out or scaling up, Mint Mogul equips you with
          what you need to build real wealth and{" "}
          <span className="font-bold">meet your goals.</span>
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === cat
                ? "bg-[#b3da67] text-[#0e563d]"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}

      <div className=" grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-white border rounded-2xl shadow-md p-4 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            {/* Tooltip */}
            <div className="absolute z-10 top-2 right-2 bg-[#0e563d] text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
              {product.tooltip}
            </div>

            {/* Image with slight tilt */}
            <motion.div
              whileHover={{ rotateZ: 1, y: -4 }}
              className="mb-4 flex justify-center"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>

            {/* Text */}
            <h3 className="text-lg font-bold text-[#0e563d] mb-2">
              {product.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>

            {/* Price + CTA */}
            <div className="flex justify-between items-center">
              <span className="text-md font-semibold text-[#0e563d]">
                {product.price}
              </span>
              <Link
                href={product.link}
                className="text-sm font-medium text-[#b3da67] hover:text-yellow-500"
              >
                View →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
