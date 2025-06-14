/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Completely disable SWC to avoid WebContainer compatibility issues
  swcMinify: false,
}

module.exports = nextConfig