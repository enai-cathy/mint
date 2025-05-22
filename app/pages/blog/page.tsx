// /app/blog/page.tsx

import { blogPosts } from "@/app/data/blogPosts";
import BlogCard from "@/app/components/BlogCard";
import { serialize } from "next-mdx-remote/serialize";

const fileContent = fs.readFileSync(
  path.join("content", "blog", `${slug}.mdx`),
  "utf8"
);
const { data, content } = matter(fileContent);

const mdxSource = await serialize(content);


export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Mint Mogul Blog</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Insights, strategies, and smart money guides to help you build wealth
        globally — especially if you earn or save in foreign currencies.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard meta={data} slug={slug}>
            <MDXRemote {...mdxSource} />
          </BlogCard>
        ))}
      </div>
    </main>
  );
}
