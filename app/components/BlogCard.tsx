"use client";
import React from "react";
import Link from "next/link";
import { PostMeta } from "@/app/lib/mdx";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type BlogCardProps = {
  meta: PostMeta;
  slug: string;
  highlightedTitle: React.ReactNode;
  highlightedSummary: React.ReactNode;
};


export default function BlogCard({
  meta,
  slug,
  highlightedTitle,
  highlightedSummary,
}: BlogCardProps) {
  
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="group bg-[#f9fafb] shadow-md rounded-xl overflow-hidden border border-transparent hover:border-green-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <Image
          src={meta.coverImage || "/images/mint-mogul.jpg"}
          alt={typeof meta.title === "string" ? meta.title : "Post Cover Image"}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          width={400}
          height={200}
        />

        <div className="p-5">
          <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
            <span>
              {meta.date} • by {meta.author}
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-[10px]">
              {meta.readingTime}
            </span>
          </div>

          <h2 className="text-base font-semibold text-gray-800 group-hover:text-[#0e563d] transition-colors flex items-center gap-1">
            {highlightedTitle ?? meta.title}
            <ArrowRightIcon className="w-4 h-4 text-[#0e563d] hidden group-hover:inline" />
          </h2>

          <p className="mt-2 text-gray-600 text-sm leading-snug line-clamp-3">
            {highlightedSummary ?? meta.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
