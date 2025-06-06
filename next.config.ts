import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mi-primera-homepage',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
