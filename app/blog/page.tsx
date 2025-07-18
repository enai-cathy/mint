

import { getAllPosts } from "@/app/lib/mdx";
import BlogList from "../components/BlogList";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
}
