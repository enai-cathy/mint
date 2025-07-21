// // components/TestimonialsSection.tsx
// "use client";

// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Amaka O.",
//     feedback:
//       "Mint Mogul completely transformed how I track my money. The templates are so easy to use and helped me save ₦300k in 3 months!",
//     title: "Marketing Manager, Lagos",
//   },
//   {
//     name: "David A.",
//     feedback:
//       "The debt tracker was a game-changer. I’ve paid off 40% of my loans thanks to the tools I got here!",
//     title: "Software Developer, Abuja",
//   },
//   {
//     name: "Chidera N.",
//     feedback:
//       "I love how the tools are designed—super intuitive and results-focused. I recommend Mint Mogul to all my friends now!",
//     title: "Entrepreneur, London",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="py-10 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
//           What Users Are Saying 
//         </h2>
//         <div className="grid gap-10 md:grid-cols-3">
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#f7f3eb] p-6 rounded-xl shadow-md text-left"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <p className="text-lg italic text-[#0e563d]">“{item.feedback}”</p>
//               <div className="mt-4">
//                 <p className="font-semibold text-[#0e563d]">{item.name}</p>
//                 <p className="text-sm text-[#5e8071]">{item.title}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Chinedu E.",
    persona: "Freelancer, Lagos 🇳🇬",
    feedback:
      "As a freelancer with unpredictable income, Mint Lemon helped me budget monthly without stress. I now track my savings and expenses in under 5 minutes a week!",
    rating: 5,
    avatar: "/persona/chinedu.jpg",
  },
  {
    name: "Amaka O.",
    persona: "Marketing Manager, Lagos 🇳🇬",
    feedback:
      "Mint Mogul completely transformed how I track my money. The templates are so easy to use and helped me save ₦300k in 3 months!",
    rating: 5,
    avatar: "/persona/Amaka.jpg",
  },
  {
    name: "David A.",
    persona: "Software Developer, Abuja 🇳🇬",
    feedback:
      "The debt tracker was a game-changer. I’ve paid off 40% of my loans thanks to the tools I got here!",
    rating: 4,
    avatar: "/persona/david-A.jpg",
  },
  {
    name: "Chidera N.",
    persona: "Entrepreneur, London 🇬🇧",
    feedback:
      "I love how the tools are designed—super intuitive and results-focused. I recommend Mint Mogul to all my friends now!",
    rating: 5,
    avatar: "/persona/chidera.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className=" py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0e563d]  mb-8">
          What People Like You Are Saying
        </h2>
        <p className="text-[#5e8071] text-lg mb-10">
          Real stories from real people building better money habits 💸
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto flex py-4">
              <div className="h-full w-full">
                <TestimonialCard {...item} index={index} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
