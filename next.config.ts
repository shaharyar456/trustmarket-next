import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  experimental: {
    // turboMode: false, // Ensure experimental features are set properly.
  },
};

export default nextConfig;
