// app/blog/[slug]/BlogPostClient.tsx
"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

type Props = {
  metadata: {
    title: string;
    date: string;
    coverImage?: string;
    readingTime?: string;
  };
  content: MDXRemoteSerializeResult;
};

export default function BlogPostClient({ metadata, content }: Props) {
  const imageSrc = metadata.coverImage?.trim()
    ? metadata.coverImage
    : "/images/mint-mogul.jpg";

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 font-sans">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0e563d] leading-tight mb-3">
          {metadata.title}
        </h1>
        <Image
          src={imageSrc}
          alt={metadata.title}
          className="w-full h-64 object-cover mb-5 rounded-xl"
          loading="lazy"
          width={800}
          height={300}
        />
        <p className="text-sm text-gray-500">
          Published on{" "}
          {new Date(metadata.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {metadata.readingTime && ` • ${metadata.readingTime}`}
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote {...content} />
      </div>
    </article>
  );
}
