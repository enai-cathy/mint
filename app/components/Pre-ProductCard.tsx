"use client";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Product = {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  coverImage: string;
  link: string;
};

export default function PremiumCard({ product }: { product: Product }) {
  return (
    <div
      className="bg-white rounded-xl shadow hover:scale-[1.02] hover:shadow-lg transition-transform duration-300
 p-4 border border-gray-100"
    >
      <Image
        src={product.coverImage}
        alt={product.title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
      <p className="text-gray-600 mb-3">{product.description}</p>
      <div className="flex items-center justify-between">
        <div className="mt-6 flex items-center justify-between">
          {product.originalPrice && (
            <span className="bg-yellow-100 relative bottom-3 line-through text-yellow-800 px-2 py-1 text-xs font-medium rounded-full">
              {product.originalPrice}
            </span>
          )}
        </div>
        <span className="text-green-600 font-bold">{product.price}</span>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
        >
          <BookOpenIcon className="w-5 h-5" />
          Buy Now
        </a>
      </div>
    </div>
  );
}
