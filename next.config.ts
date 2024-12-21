import { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: '/'
};

module.exports = nextConfig;