import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 768, 1024, 1280, 1440],
    imageSizes: [64, 128, 256, 384, 512],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
