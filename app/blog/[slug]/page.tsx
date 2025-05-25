import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/app/lib/posts";

// Type for page params
type PageProps = {
  params: { slug: string };
};

// Static params (SSG)
export async function generateStaticParams() {
  const slugs = await getAllSlugs(); // string[]
  return slugs.map((slug) => ({ slug }));
}

// Metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt || "",
  };
}

// Page component
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound(); // 404 page
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
