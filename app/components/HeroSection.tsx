// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function HeroSection(){
//     return (
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
//           <span>
//             <h1 className="text-4xl font-extrabold text-[#0e563d] leading-tight">
//               Money moves made{" "}
//               <span className="text-[#b3da67]">minty fresh 🍋</span>
//             </h1>
//             <br /> <p className="text-2xl">with Our Wealth Builder's Toolkit</p>{" "}
//             <br />
//             Build your financial empire with our smart wallet tools,
//             expert-backed templates, and minty-fresh strategies designed for
//             modern wealth builders.
//             <br /> <br />
//             <Link
//               href={"/products"}
//               className="bg-[#b3da67] mt-10 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
//             >
//               Get Yours Now!
//             </Link>
//           </span>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           <Image
//             src="/images/hero.png"
//             width={1000}
//             height={760}
//             className="hidden md:block"
//             alt="illustration of Hands, one with piggybank and the other hand with money"
//             loading="lazy"
//           />
//           <Image
//             src="/images/hero.png"
//             width={560}
//             height={620}
//             className="block md:hidden"
//             alt="illustration of Hands, one with piggybank and the other hand with money"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     );
// }

"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";

export default function HeroSection() {
const { scrollY } = useScroll();

  const yTransform = useTransform(scrollY, [0, 300], [0, -50]);
  const scaleTransform = useTransform(scrollY, [0, 300], [1, 1.1]);
  return (
    <div className="mt-8 w-full flex grow flex-col gap-8 md:flex-row items-center px-4 md:px-16">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center gap-6 rounded-lg px-4 py-8 md:w-2/5 md:px-5"
      >
        <h1 className="text-4xl font-extrabold text-[#0e563d] leading-tight">
          Money moves made{" "}
          <span className="text-[#b3da67]">minty fresh 🍋</span>
        </h1>

        <p className="text-lg text-gray-700">
          Build your financial empire with our smart wallet tools, expert-backed
          templates, and minty-fresh strategies designed for modern wealth
          builders.
        </p>

        <Link
          href="/products"
          className="inline-block bg-[#b3da67] text-[#0e563d] font-bold px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-400 hover:text-black transition-all duration-300 w-fit"
        >
          Get Yours Now!
        </Link>
      </motion.div>

      {/* Animation Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ y: yTransform, scale: scaleTransform }}
        className="relative md:w-3/5 flex items-center justify-center"
      >
        {/* Lottie animation */}
        <div className="w-full max-w-[480px] md:max-w-[600px]">
          <Lottie
            animationData={require("@/public/animation/Retail-Trading-App.json")} // or use a remote JSON
            loop
            autoplay
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
}
