import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    WORDPRESS_BASE_URL: process.env.WORDPRESS_BASE_URL,
  },
};

export default nextConfig;
