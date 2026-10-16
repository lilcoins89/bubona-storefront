import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com" }],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 768, 1024, 1440],
    imageSizes: [320, 480, 640],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
