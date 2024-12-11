import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'workoscdn.com',
      },
      {
        protocol: 'https',
        hostname: 'ailawgpt.webspidersolutions.com',
      }
    ]
  }
};

export default nextConfig;
