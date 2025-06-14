/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    // Disable SWC and use Babel instead
  },
  webpack: (config, { dev, isServer }) => {
    // Fallback to Babel for transformation
    if (dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;