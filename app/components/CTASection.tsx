// import Link from "next/link"
// import posthog from "posthog-js"

// export default function CTASection() {
//   return ( 
// <section className="text-center mt-16">
//   <h2 className="text-3xl font-bold text-[#536c32] mb-4">
//     Ready to Upgrade Your Money Game?
//   </h2>
//   <p className="text-base text-gray-600 leading-relaxed mb-6">
//     Join thousands of modern moguls using Mint Mogul to work smarter, spend
//     sharper, and build lasting wealth.
//   </p>

//   <Link href="./products">
//     <button
//       onClick={() => posthog.capture("cta_clicked")}
//       aria-label="Explore tools and templates"
//       className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
//     >
//       Explore Our Money Tools & Templates
//     </button>
//   </Link>
// </section>

//   )
// }


"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import posthog from "posthog-js";

export default function CTASection() {
  return (
    <section className="text-center mt-20 relative z-10">
      {/* Gradient headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0e563d] to-[#b3da67] text-transparent bg-clip-text mb-4"
      >
        Ready to Upgrade Your Money Game?
      </motion.h2>

      <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed mb-8">
        Join thousands of modern moguls using Mint Mogul to work smarter, spend
        sharper, and build lasting wealth.
      </p>

      {/* CTA Button with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/products">
          <button
            onClick={() => posthog.capture("cta_clicked")}
            aria-label="Explore tools and templates"
            className="bg-[#b3da67] hover:bg-[#fcd34d] text-charcoal font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            🚀 Explore Our Money Tools & Templates
          </button>
        </Link>
      </motion.div>

      {/* Background blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#84cc16]/20 blur-2xl rounded-full -z-10" />
    </section>
  );
}
