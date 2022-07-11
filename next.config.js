/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig;
