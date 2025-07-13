"use client";
import { useState, useEffect} from "react";
import BlogCard from "@/app/components/BlogCard";
import { PostMeta } from "@/app/lib/mdx";
import { motion } from "framer-motion";
import { posthog } from "posthog-js";


export default function BlogList({
  posts,
}: {
  posts: { meta: PostMeta; slug: string }[];
}) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.meta.title.toLowerCase().includes(query.toLowerCase()) ||
      post.meta.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <input
        type="text"
        aria-label="Search blog posts"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          posthog.capture("searched_blog", { query: e.target.value });
        }}
        className="w-full mb-6 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#b3da67] focus:outline-none placeholder:text-gray-400"
      />
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="animate-pulse bg-white rounded-xl shadow p-4 space-y-4 border border-dashed border-gray-300"
            >
              <div className="h-40 bg-gray-200 rounded-md" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
              <div className="h-3 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No blog posts found. Try a different keyword!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(({ meta, slug }, index) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() =>
                posthog.capture("viewed_blog_card", { title: meta.title })
              }
            >
              <BlogCard meta={meta} slug={slug} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

