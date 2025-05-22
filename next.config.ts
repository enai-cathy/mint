import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

export default nextConfig;
