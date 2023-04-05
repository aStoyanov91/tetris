/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/aStoyanov91/tetris",
  assetPrefix: "/aStoyanov91/tetris",
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig
