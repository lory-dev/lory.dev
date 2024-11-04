import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  output: "export",
  basePath: "/lory.dev",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
