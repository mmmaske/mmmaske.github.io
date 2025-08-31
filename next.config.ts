import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    root: '.'
  }
};

export default nextConfig;
