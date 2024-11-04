import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'export',
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
