// app/blog/[slug]/page.tsx

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import type { PostMeta } from "@/app/lib/mdx";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";



type PageProps = {
  params: { slug: string };
};

// Centralize the blog directory path
const BLOG_DIR = path.join(process.cwd(), "content/blog");



// Generate static params for static generation
export async function generateStaticParams() {
  const filenames = await fs.readdir(BLOG_DIR);

  return filenames
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx?$/, ""),
    }));
}

// Generate dynamic metadata per page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data } = matter(fileContent);
    const meta = data as PostMeta;
    

    return {
      title: "Mint Mogul | Smart Financial Insights",
      description:
        "Explore financial tools, tips, and guides for your money journey.",
      openGraph: {
        title: meta.title,
        description: meta.summary,
        images: [meta.coverImage],
      },
      alternates: {
        canonical: `https://www.mintmogul.com/blog/${params.slug}`,
      },
    };
  } catch {
    return {};
  }
}

// Page Component
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { content, data } = matter(fileContent);
    const meta = data as PostMeta;
    const readStats = readingTime(content);
    const mdxSource = await serialize(content);

    return (
      <article className="max-w-3xl mx-auto px-4 py-10 prose prose-blue">
        <h1>{meta.title}</h1>
        <p className="text-sm text-gray-500">
          {meta.date} • {meta.author}• {Math.ceil(readStats.minutes)} min read
        </p>
        {meta.coverImage && (
          <img
            src={meta.coverImage}
            alt={meta.title}
            className="w-full h-64 object-cover my-4 rounded-xl"
          />
        )}
        <MDXRemote source={mdxSource} />
      </article>
    );
  } catch {
    return notFound();
  }
}
