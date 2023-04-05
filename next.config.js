/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig
