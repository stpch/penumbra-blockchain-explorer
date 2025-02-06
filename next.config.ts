import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // Populated when deploying
  images: {
    unoptimized: true, // Not supported when exporting
  },
};

export default nextConfig;
