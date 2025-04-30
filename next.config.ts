import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apidev.tvku.tv',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'storage.tvku.tv',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
    domains: ['apidev.tvku.tv'], // Tambahkan properti domains di sini
  },
};

export default nextConfig;
