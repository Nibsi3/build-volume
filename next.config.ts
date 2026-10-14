import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: { turbopackUseSystemTlsCerts: true },
  reactCompiler: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
  },
};

export default nextConfig;
