// components/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amaka O.",
    feedback:
      "Mint Mogul completely transformed how I track my money. The templates are so easy to use and helped me save ₦300k in 3 months!",
    title: "Marketing Manager, Lagos",
  },
  {
    name: "David A.",
    feedback:
      "The debt tracker was a game-changer. I’ve paid off 40% of my loans thanks to the tools I got here!",
    title: "Software Developer, Abuja",
  },
  {
    name: "Chidera N.",
    feedback:
      "I love how the tools are designed—super intuitive and results-focused. I recommend Mint Mogul to all my friends now!",
    title: "Entrepreneur, London",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          What Users Are Saying 
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#f7f3eb] p-6 rounded-xl shadow-md text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg italic text-[#0e563d]">“{item.feedback}”</p>
              <div className="mt-4">
                <p className="font-semibold text-[#0e563d]">{item.name}</p>
                <p className="text-sm text-[#5e8071]">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
