// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc"; // RSC-friendly MDX

const postsDir = path.join(process.cwd(), "content", "blog");

// Get all post slugs (for dynamic routing)
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((filename) => filename.replace(/\.mdx?$/, ""));
}

// Get a single post by slug and serialize MDX
export async function getPostBySlug(slug: string) {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);

  let filePath = "";
  if (fs.existsSync(mdxPath)) filePath = mdxPath;
  else if (fs.existsSync(mdPath)) filePath = mdPath;
  else return null;

  const rawFile = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(rawFile);
  const stats = readingTime(content);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
  });

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    excerpt: data.summary || "",
    author: data.author ?? "Mint Mogul",
    coverImage: data.coverImage?.trim() || null,
    readingTime: stats.text,
    mdxContent, // ✅ compiled RSC-ready content
  };
}

