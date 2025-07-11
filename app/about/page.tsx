'use client'


import AboutSection from "@/app/components/AboutSection";
import TestimonialBlock from "@/app/components/TestimonialBlock";
import CTASection from "@/app/components/CTASection";
import TestimonialsSection from "@/app/components/TestimonialsSection";


export default function AboutPage() {
  return (
    <>
      <div
        className="max-w-4xl mx-auto px-6 py-16 text-gray-900 text-base sm:text-lg px-4 sm:px-6 lg:px-8 
"
      >
        <AboutSection />

        <TestimonialBlock />
        <div className="bg-[#0e563d]">
          <TestimonialsSection />
        </div>
        <CTASection />
      </div>
    </>
  );
}

