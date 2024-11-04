import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'export',
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
