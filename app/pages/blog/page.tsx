// app/blog/page.tsx
import { getSortedPostsData } from "@/app/lib/posts";
import BlogCard from "@/app/components/BlogCard";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Mint Mogul Blog</h1>
      <div className="grid gap-6">
        {posts.map(({ slug, title, excerpt, date }) => (
          <BlogCard
            key={slug}
            slug={slug}
            title={title}
            excerpt={excerpt}
            date={date}
          />
        ))}
      </div>
    </div>
  );
}
