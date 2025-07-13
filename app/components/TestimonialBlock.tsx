"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    icon: <EyeIcon className="w-5 h-5 text-yellow-500" />,
    text: "Built on psychology & behavioral finance principles",
  },
  {
    icon: <ChartBarIcon className="w-5 h-5 text-blue-500" />,
    text: "Real-time insights, not outdated advice",
  },
  {
    icon: <BriefcaseIcon className="w-5 h-5 text-green-500" />,
    text: "Perfect for solopreneurs, side hustlers & money geeks",
  },
  {
    icon: <RocketLaunchIcon className="w-5 h-5 text-red-500" />,
    text: "Designed to turn browsers into moguls — fast",
  },
];

export default function TestimonialBlock() {
  return (
    <section className="relative z-10 bg-[#f9fafb] rounded-2xl p-10 mt-10 shadow-xl max-w-4xl mx-auto">
      {/* background blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#b3da67]/30 blur-2xl rounded-full animate-pulse -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-[#0e563d] mb-8 text-center"
      >
        Why Our Users Stick Around (and Brag About Us)
      </motion.h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="p-2 rounded-full bg-[#f0fdf4]">{item.icon}</span>
              <p className="text-gray-700 text-base">{item.text}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
