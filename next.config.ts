import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      async rewrites() {
        return [
          {
            source: "/api/our-program",
            destination: "http://apidev.tvku.tv/api/our-program",
          },
        ];
      },
  };

export default nextConfig;
