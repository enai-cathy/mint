// /app/blog/[slug]/page.tsx

// import { blogPosts } from "@/app/data/blogPosts";
// import { notFound } from "next/navigation";

// export default function BlogPost({ params }: { params: { slug: string } }) {
//   const post = blogPosts.find((p) => p.slug === params.slug);

//   if (!post) return notFound();

//   return (
//     <main className="max-w-3xl mx-auto px-6 py-16">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
//       <div className="text-sm text-gray-400 mb-6">
//         {post.author} • {new Date(post.date).toLocaleDateString()}
//       </div>
//       <img
//         src={post.coverImage}
//         alt={post.title}
//         className="rounded-xl w-full h-64 object-cover mb-8"
//       />

//       <article className="prose max-w-none prose-blue prose-lg">
//         <p>
//           This is where you’d write or import your actual blog post content. You
//           can use MDX, Markdown, or even pull from a CMS later.
//         </p>
//         <p>
//           If you'd like to save or earn in dollars — especially in Nigeria —
//           this is the kind of blog that guides you with real steps.
//         </p>
//       </article>
//     </main>
//   );
// }
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "@/app/components/BlogCard";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content", "blog"));
  return files.map((filename) => ({ slug: filename.replace(".mdx", "") }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const fileContent = fs.readFileSync(
    path.join("content", "blog", `${slug}.mdx`),
    "utf-8"
  );
  const { content, data } = matter(fileContent);

  return (
    <BlogLayout meta={data} slug={slug}>
      <MDXRemote {...mdxSource} />
    </BlogLayout>
  );
}