/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    // Disable SWC entirely for WebContainer compatibility
    swcLoader: false,
    swcMinify: false,
  },
}

module.exports = nextConfig