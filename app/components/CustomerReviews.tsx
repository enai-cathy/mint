import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Amina O.",
    review:
      "Absolutely love Mint Mogul! It’s my go-to for finance tools. Super helpful!",
    avatar: "/avatars/amina.jpg",
    rating: 5,
  },
  {
    name: "Tunde B.",
    review:
      "Great design and really intuitive. Helped me save smarter in just a week.",
    avatar: "/avatars/tunde.jpg",
    rating: 4,
  },
  {
    name: "Chiamaka E.",
    review: "Clean interface and insightful recommendations. Highly recommend!",
    avatar: "/avatars/chiamaka.jpg",
    rating: 5,
  },
];

function CustomerReviewCard({ name, review, avatar, rating }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-[#1f1f1f] p-6 rounded-2xl shadow-md dark:shadow-none border dark:border-[#333] flex flex-col items-start gap-4"
    >
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">{name}</p>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < rating
                    ? "text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{review}</p>
    </motion.div>
  );
}

export default function CustomerReviewsSection() {
  return (
    <section className="bg-[#fffbf1] dark:bg-[#121212] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-[#536c32] dark:text-green-200">
          What Our Users Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Trusted by smart savers and money moguls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <CustomerReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}
