// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import readingTime from "reading-time";

const postsDir = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  author?: string;
  content: MDXRemoteSerializeResult;
  readingTime: string;
};

// Get all post slugs (for dynamic routing)
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((filename) => filename.replace(/\.mdx?$/, ""));
}

// Get a single post by slug and serialize MDX
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
 

  let filePath = "";
  if (fs.existsSync(mdxPath)) filePath = mdxPath;
  else if (fs.existsSync(mdPath)) filePath = mdPath;
  else return null;

  const rawFile = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(rawFile);
   const readingStats = readingTime(content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    excerpt: data.summary || "",
    author: data.author || "Mint Mogul",
    coverImage: data.coverImage || null,
    content: mdxSource,
    readingTime: readingStats.text,
  };
}
