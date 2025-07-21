

// BlogContent.tsx
import { compileMDX } from 'next-mdx-remote/rsc';


interface BlogContentProps {
   mdxSource: string; // raw MDX string
}

export default async function BlogContent({ mdxSource }: BlogContentProps) {
  const { content } = await compileMDX({
   source: mdxSource,
    components: {}, // You can pass custom MDX components here
    options: {
      parseFrontmatter: false,
    },
  });

  return <>{content}</>;
}
