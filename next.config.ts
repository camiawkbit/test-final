import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/-root-2',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
