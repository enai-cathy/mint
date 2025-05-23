"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { PostMeta } from "@/app/lib/mdx";

type BlogCardProps = {
  meta: PostMeta;
  slug: string;
};

export default function BlogCard({ meta, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={meta.coverImage}
          alt={meta.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
            {meta.title}
          </h2>
          <p className="text-sm text-gray-500">
            {meta.date} • {meta.author}
          </p>
          <p className="mt-2 text-gray-700">{meta.summary}</p>
        </div>
      </div>
    </Link>
  );
}
