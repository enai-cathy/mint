import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/app/lib/posts";
import Image from "next/image";
import MDXClientRenderer from "@/app/components/MDXClientRenderer";


interface BlogPostPageProps {
  params: {
    slug: string;
  };
}


// ✅ generateStaticParams
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ✅ generateMetadata with inline types
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Mint Mogul Blog`,
    description: post.excerpt || "",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage ?? "/default-og.png"],
    },
  };
}

// ✅ Page with inline types
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 font-sans">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0e563d] leading-tight mb-3">
          {post.title}
        </h1>
        <Image
          src={post.coverImage || "/image/mint-mogul.jpg"}
          alt={`${post.title} preview`}
          className="w-full h-64 object-cover mb-5 rounded-xl"
          loading="lazy"
          width={800}
          height={300}
        />
        <p className="text-sm text-gray-500">
          Published on{" "}
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {post.readingTime}
        </p>
      </header>

      <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-a:text-[#0e563d] hover:prose-a:text-[#b3da67]">
        <MDXClientRenderer source={post.content} />
      </div>
    </article>
  );
}
