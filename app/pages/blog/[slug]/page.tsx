// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const files = fs.readdirSync("posts");
  return files.map((filename) => ({ slug: filename.replace(".md", "") }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join("posts", `${params.slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  const { data, content: markdownContent } = matter(content);

  const processedContent = await remark().use(html).process(markdownContent);
  const htmlContent = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-gold text-3xl font-bold">{data.title}</h1>
      <p className="text-slate-500 mt-1 mb-6">{data.date}</p>
      <div
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
