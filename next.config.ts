import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.buildvolume.co.za',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
  },
};

export default nextConfig;
