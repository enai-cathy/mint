
// import { notFound } from "next/navigation";
// import { getPostBySlug } from "@/app/lib/posts";
// import Image from "next/image";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";



// export async function generateStaticParams() {
//   const postsDir = path.join(process.cwd(), "content", "blog");
//   const files = fs.readdirSync(postsDir);

//   const slugs = files
//     .filter((file) => file.endsWith(".mdx"))
//     .map((file) => {
//       const filePath = path.join(postsDir, file);
//       const fileContent = fs.readFileSync(filePath, "utf8");
//       const { data: metadata } = matter(fileContent); // optional if you want to validate metadata

//       return {
//         slug: file.replace(/\.mdx$/, ""),
//       };
//     });

//   return slugs;
// }
// export const dynamicParams = false;

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const post = await getPostBySlug(slug);
//   if (!post) return { title: "Post Not Found" };

//   return {
//     title: `${post.title} | Mint Mogul Blog`,
//     description: post.excerpt || "",
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       images: [post.coverImage ?? "/default-og.png"],
//     },
//   };
// }


// export default async function BlogPostPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   try {
//    const { slug } = await params;
//    const post = await getPostBySlug(slug);
//    if (!post) return { title: "Post Not Found" };

//     // Dynamically import the MDX post using slug
//     const postModule = await import(`@/content/blog/${slug}.mdx`);
//     const { metadata } = postModule;
//     const Post = postModule.default;
// const imageSrc =
//   metadata?.coverImage && metadata.coverImage.trim() !== ""
//     ? metadata.coverImage
//     : "/images/mint-mogul.jpg";
//     return (
//       <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 font-sans">
//         <header className="mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#0e563d] leading-tight mb-3">
//             {metadata?.title || "Untitled"}
//           </h1>
//           <Image
//             src={imageSrc}
//             alt={`${metadata?.title || "Post"} preview`}
//             className="w-full h-64 object-cover mb-5 rounded-xl"
//             loading="lazy"
//             width={800}
//             height={300}
//           />
//           <p className="text-sm text-gray-500">
//             Published on{" "}
//             {new Date(metadata?.date || Date.now()).toLocaleDateString(
//               undefined,
//               {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               }
//             )}
//             {metadata?.readingTime && ` • ${metadata.readingTime}`}
//           </p>
//         </header>

//         <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-a:text-[#0e563d] hover:prose-a:text-[#b3da67]">
//           <Post />
//         </div>
//       </article>
//     );
//   } catch {
//     notFound();
//   }
// }





import { getPostBySlug } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }
const imageSrc =
  post?.coverImage && post.coverImage.trim() !== ""
    ? post.coverImage
    : "/images/mint-mogul.jpg";
  return (
    <>
      <article className="mt-20 text-gray-900 prose prose-invert max-w-none px-6 py-12 md:px-20 font-sans-serif">
         <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0e563d] leading-tight mb-3">
           {post?.title || "Untitled"}
           </h1>
          <Image
            src={imageSrc}
            alt={`${post?.title || "Post"} preview`}
            className="w-full h-64 object-cover mb-5 rounded-xl"
            loading="lazy"
            width={800}
            height={300}
          />
          <p className="text-sm text-gray-500">
            Published on{" "}
            {new Date(post?.date || Date.now()).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
            {post?.readingTime && ` • ${post.readingTime}`}
          </p>
        </header>

        <br />
        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-a:text-[#0e563d] hover:prose-a:text-[#b3da67]">
         {post.mdxContent}

        </div>
    
      </article>
      <Footer />
    </>
  );
}
