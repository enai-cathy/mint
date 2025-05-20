// components/BlogCard.tsx
import Link from "next/link";

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
}: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition">
      <h3 className="text-gold font-bold text-lg">{title}</h3>
      <p className="text-slate-300 mt-1">{excerpt}</p>
      <p className="text-slate-500 text-sm mt-2">{date}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-skyblue mt-3 inline-block font-bold"
      >
        Read More →
      </Link>
    </div>
  );
}
