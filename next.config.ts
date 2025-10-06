import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  distDir: '.next',
  /* config options here */
};

export default nextConfig;
