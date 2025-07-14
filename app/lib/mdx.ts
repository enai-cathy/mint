
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";


const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  title: string;
  summary: string;
  date: string;
  author: string;
  coverImage: string;
  readingTime?: string; // optional field for reading time
};


export async function getAllPosts(): Promise<
  { slug: string; meta: PostMeta }[]
> {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");

        const { content, data } = matter(fileContent);

        // Calculate reading time here
        const stats = readingTime(content);

        return {
          slug: filename.replace(/\.mdx?$/, ""),
          meta: {
            ...(data as PostMeta),
            readingTime: stats.text,
          },
        };
      })
  );

  return posts;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const mdxSource = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(mdxSource);

  const compiled = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return {
    meta: data as PostMeta,
    content: compiled.content,
  };
}
