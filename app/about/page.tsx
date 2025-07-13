"use client";

import AboutSection from "@/app/components/AboutSection";
import TestimonialBlock from "@/app/components/TestimonialBlock";
import CTASection from "@/app/components/CTASection";
import TestimonialsSection from "@/app/components/TestimonialsSection";

export default function AboutPage() {
  return (
    <>
      <div
        className="max-w-4xl bg-[#f9fafb] mx-auto px-6 py-16 text-gray-900 text-base sm:text-lg px-4 sm:px-6 lg:px-8 
"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#b3da67]/30 blur-2xl rounded-full animate-pulse -z-10" />
        <AboutSection />

        <TestimonialBlock />
        <div className="mt-10">
          <TestimonialsSection />
        </div>

        <CTASection />
      </div>
    </>
  );
}
