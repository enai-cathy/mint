// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/app/lib/posts"; // Adjust the import paths based on your project

// Define PageProps correctly: params is a plain object, not a Promise
type PageProps = {
  params: { slug: string };
};

// Generate static paths for dynamic routes (SSG)
export async function generateStaticParams() {
  const slugs = await getAllSlugs(); // This should return an array of slugs: string[]
  return slugs.map((slug) => ({ slug }));
}

// Generate page metadata (SEO) for each post
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt || "", // Adjust if your data has an excerpt
  };
}

// The main page component for individual blog posts
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound(); // Trigger 404 page
  }

  return (
    <article className="prose mx-auto py-12">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} // Adjust based on your data
      />
    </article>
  );
}
