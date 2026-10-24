import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/TI" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/TI/" : "",
};

export default nextConfig;
