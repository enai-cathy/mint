"use client";

import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import posthog from "posthog-js";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";

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
    <div className="relative h-full flex flex-col justify-between border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 mt-10 group focus-within:ring-2 focus-within:ring-blue-400">
      {/* 🎯 Coin Animation Overlay */}
      <div
        className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
        aria-hidden="true"
      >
        <Image
          src="/icons/coin.svg"
          alt="coin"
          width={40}
          height={40}
          className="animate-spin-slow"
        />
      </div>

      {/* 📸 Image */}
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-44 object-contain mb-5 rounded-xl"
          loading="lazy"
        />
      )}

      {/* 📝 Title & Description */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 flex-grow line-clamp-3">{description}</p>

      {/* 💸 Price + CTA */}
      <div className="mt-6 flex items-center justify-between">
  <div className="flex items-center gap-2">
    {/* 🎯 Original Price Badge (if applicable) */}
    {originalPrice && (
      <span className="text-xs line-through text-red-600 bg-red-100 px-2 py-1 rounded-full">
        {originalPrice}
      </span>
    )}

    {/* 🟡 Free Badge */}
    {price.toLowerCase() === "free" ? (
      <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
        Free
      </span>
    ) : (
      // 💚 Regular Price Badge
      <span className="text-sm font-semibold text-green-700">
        {price}
      </span>
    )}
  </div>

  {/* ✅ CTA Button */}
  <Tooltip.Provider delayDuration={100}>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => posthog.capture("clicked_product_card", { title })}
          aria-label={`Buy ${title}`}
          className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-2xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200"
        >
          Buy Now
          <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="bg-black text-white px-3 py-1 rounded-md text-sm"
          side="top"
          sideOffset={6}
        >
          Opens in new tab
          <Tooltip.Arrow className="fill-black" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
</div>


        {/* Button Tooltip
        <Tooltip.Provider delayDuration={100}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  posthog.capture("clicked_product_card", { title })
                }
                aria-label={`Buy ${title}`}
                className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-2xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Buy Now
                <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
              </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-black text-white px-3 py-1 rounded-md text-sm"
                side="top"
                sideOffset={6}
              >
                Open in new tab
                <Tooltip.Arrow className="fill-black" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div> */}
    </div>
  );
}
