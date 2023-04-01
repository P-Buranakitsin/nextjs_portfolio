/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Enable ESLint during production builds
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
