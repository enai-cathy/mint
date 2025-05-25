import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/app/lib/posts"; 



// Generate static paths for dynamic routes (SSG)
export async function generateStaticParams() {
  const slugs = await getAllSlugs(); // Returns string[]
  return slugs.map((slug) => ({ slug }));
}

// Generate page metadata (SEO) for each post
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt || "",
  };
}

// The main page component for individual blog posts
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose mx-auto py-12">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
