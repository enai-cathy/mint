import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  link: string;
  image?: string;
}

export default function ProductCard({
  title,
  description,
  price,
  originalPrice,
  link,
  image,
}: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition p-6 flex flex-col">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-contain mb-5 rounded-xl"
          loading="lazy"
        />
      )}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="mt-6 flex items-center justify-between">
        {originalPrice && (
          <span className="text-sm line-through text-gray-400 mr-2">
            {originalPrice}
          </span>
        )}
        <span className="text-xl font-bold text-green-700">{price}</span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-2xl text-sm font-semibold hover:bg-blue-700 transition"
        >
          Buy Now
          <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
