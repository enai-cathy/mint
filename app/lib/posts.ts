// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content", "blog");

// Define a Post type for consistency
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  contentHtml: string; // We'll convert MDX/Markdown to HTML later if needed
};

// Get all post metadata (for listing pages, etc.)
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .map((filename) => filename.replace(/\.mdx?$/, ""));
}

// Get full post data by slug
export function getPostBySlug(slug: string): Post | null {
  const fullPathMdx = path.join(postsDir, `${slug}.mdx`);
  const fullPathMd = path.join(postsDir, `${slug}.md`);

  let filePath = "";
  if (fs.existsSync(fullPathMdx)) {
    filePath = fullPathMdx;
  } else if (fs.existsSync(fullPathMd)) {
    filePath = fullPathMd;
  } else {
    return null; // Handle missing file gracefully
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  // For now, we pass raw Markdown as contentHtml
  // In the future, you can process MDX here if needed
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    excerpt: data.excerpt || "",
    contentHtml: content, // Or process to HTML/MDX if desired
  };
}
