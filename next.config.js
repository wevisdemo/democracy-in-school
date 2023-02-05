/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_URL,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  env: {
    BASE_URL: process.env.BASE_URL || '',
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || ''
  }
}

module.exports = nextConfig
