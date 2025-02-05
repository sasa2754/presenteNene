import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home"
      },
      {
        source: "/timeline",
        destination: "/timeline"
      },
      {
        source: "/quiz",
        destination: "/quiz1"
      }
    ]
  },
};

export default nextConfig;
