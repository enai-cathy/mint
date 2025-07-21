import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string | undefined;
  coverImage?: string | null;
  content: MDXRemoteSerializeResult;
  readingTime?: string;
   mdxSource: string; 
};
