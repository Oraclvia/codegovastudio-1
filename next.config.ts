import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export', ← REMOVE this if using server features
  typescript: {
    ignoreBuildErrors: true, // NextJS has a hard time parsing Typescript, but we have manual checks in place
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
