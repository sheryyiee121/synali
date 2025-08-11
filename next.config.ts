import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "49.13.102.110",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },

      // Add more hostnames if you use other CDNs (e.g., "cdn.example.com")
    ],
  },
};

export default nextConfig;
