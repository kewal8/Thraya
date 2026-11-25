import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Serve AVIF where the browser supports it, else WebP.
    formats: ["image/avif", "image/webp"],
    // Keep resized images for 31 days (default 4 hours). There is no purge, so to replace a
    // photo, save it under a new file name (e.g. globules-spoon-v2.webp).
    minimumCacheTTL: 2678400,
    // Stock photography placeholders. Remove once clinic photos live in /public.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  /*
    Files in public/ have fixed names, so browsers would otherwise recheck them on every visit.
    Cache them for 30 days. To change one of these files, give it a new name.
  */
  async headers() {
    const longCache = [
      { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
    ];
    return [
      { source: "/fonts/:path*", headers: longCache },
      { source: "/brand/:path*", headers: longCache },
      { source: "/images/:path*", headers: longCache },
    ];
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
