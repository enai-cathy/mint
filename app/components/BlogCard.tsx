"use client";

import React from "react";
import { useEffect } from "react";
import  {trackView}  from "@/app/lib/analytic";

export default function BlogCard({
  children,
  meta,
  slug,
}: {
  children: React.ReactNode;
  meta: any;
  slug: string;
}) {
  useEffect(() => {
    trackView(slug);
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{meta.date}</p>

      <div className="prose prose-lg mb-10">{children}</div>

      {/* Newsletter CTA */}
      <div className="bg-[#536c32]/10 p-6 rounded-xl text-center mt-16">
        <h3 className="text-xl font-semibold">
          📬 Get smarter with money every week
        </h3>
        <p className="text-gray-700 mt-2 mb-4">
          Join our newsletter to receive weekly tips, tools & guides for
          earning, saving & growing smarter — in any currency.
        </p>
        <form
          className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          onSubmit={(event) => {
            event.preventDefault();
            // Add submit logic here
          }}
        >
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
