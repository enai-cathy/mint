// components/TestimonialCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  name: string;
  persona: string;
  feedback: string;
  rating: number;
  avatar: string;
  index: number;
};

export default function TestimonialCard({
  name,
  persona,
  feedback,
  rating,
  avatar,
  index,
}: Props) {
  return (
    <motion.div
      className="h-full flex flex-col justify-between min-w-[280px] max-w-[320px] md:min-w-0 md:max-w-full bg-white p-6 rounded-xl shadow-md text-left snap-center shrink-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Header: Avatar + Name */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-[#0e563d]">{name}</p>
          <p className="text-sm text-[#5e8071]">{persona}</p>
        </div>
      </div>

      {/* Feedback with flex-grow to fill space */}
      <p className="italic text-[#0e563d] mb-4 flex-grow">“{feedback}”</p>

      {/* Rating at the bottom */}
      <div className="flex items-center text-yellow-500 text-sm mt-auto">
        {Array(rating)
          .fill("★")
          .map((_, i) => (
            <span key={i}>★</span>
          ))}
        {Array(5 - rating)
          .fill("☆")
          .map((_, i) => (
            <span key={i}>☆</span>
          ))}
      </div>
    </motion.div>
  );
}
