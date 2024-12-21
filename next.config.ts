import { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: '/k-h-phillips.github.io'
};

module.exports = nextConfig;