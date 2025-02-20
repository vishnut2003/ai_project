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
        hostname: 'wordpress.ailawgpt.com',
      }
    ]
  },
  // www to non-www redirect
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.ailawgpt.com' }],
      destination: 'https://ailawgpt.com/:path*',
      permanent: true,
    }
  ]
};

export default nextConfig;
