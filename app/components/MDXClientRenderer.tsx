// app/components/MDXClientRenderer.tsx
"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  source: MDXRemoteSerializeResult;
};

export default function MDXClientRenderer({ source }: Props) {
  return <MDXRemote {...source} />;
}
