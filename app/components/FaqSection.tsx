"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "🤔 What is Mint Mogul?",
    answer:
      "Mint Mogul is a toolkit of beautifully designed digital templates that help you manage your money smarter — from budgeting to debt payoff to wealth tracking.",
  },
  {
    question: "📉 Will this help me pay off debt?",
    answer:
      "Yes! Our Debt Crusher Toolkit is built to help you plan, track, and crush your debt using proven payoff methods like avalanche and snowball.",
  },
  {
    question: "🧾 Are the templates editable?",
    answer:
      "Absolutely. You’ll get Google Sheets versions that are fully customizable to your needs. Plug and play!",
  },
  {
    question: "🌍 Can I use it outside Nigeria?",
    answer:
      "Yes, Mint Mogul works globally. Our tools are currency-flexible and useful whether you're in Lagos, London, or Los Angeles.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9fafb] py-14 px-4 sm:px-8 w-full">
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#009F82] text-center mb-8">
          FAQs — We Thought You Might Ask!
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left text-[#0e563d] font-semibold text-lg sm:text-xl"
              >
                <span className="pr-2">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-[#0e563d]" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="text-[#5e8071] text-base sm:text-lg pt-4 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
