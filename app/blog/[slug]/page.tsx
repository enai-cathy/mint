// app/blog/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { PostMeta } from "@/app/lib/mdx";
import { Metadata } from "next";


export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDir);

  return filenames
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx?$/, ""),
    }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${params.slug}.mdx`
  );
  if (!fs.existsSync(filePath)) return {};

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  const meta = data as PostMeta;

  return {
    title: `${meta.title} | Mint Mogul`,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      images: [meta.coverImage],
    },
  };
}
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const meta = data as PostMeta;

  return (
    <article className="max-w-3xl mx-auto px-4 py-10 prose prose-blue">
      <h1>{meta.title}</h1>
      <p className="text-sm text-gray-500">
        {meta.date} • {meta.author}
      </p>
      <img
        src={meta.coverImage}
        alt={meta.title}
        className="w-full h-64 object-cover my-4 rounded-xl"
      />
      <MDXRemote source={content} />
    </article>
  );
}
