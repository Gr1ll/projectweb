import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hosts the /projects API serves screenshots from.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "static.vecteezy.com" },
    ],
  },
};

export default nextConfig;
