import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Fixes CSS order: https://nextjs.org/docs/app/api-reference/config/next-config-js/cssChunking
    cssChunking: 'strict',
  },
};

export default nextConfig;
