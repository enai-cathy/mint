"use client";
import { useState } from "react";
import BlogCard from "@/app/components/BlogCard";
import { PostMeta } from "@/app/lib/mdx";
import Navbar from "@/app/ui/nav-bar";
import Footer from "../components/Footer";

export default function BlogList({
  posts,
}: {
  posts: { meta: PostMeta; slug: string }[];
}) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.meta.title.toLowerCase().includes(query.toLowerCase()) ||
      post.meta.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (

      <div className="p-6 max-w-6xl mx-auto">
       
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full mb-6 p-2 border rounded-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(({ meta, slug }) => (
            <BlogCard key={slug} meta={meta} slug={slug} />
          ))}
        </div>
        <Footer/>
      </div>
    
  );
}
