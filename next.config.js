/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isGithubActions ? process.env.NEXT_PUBLIC_BASE_URL : '',
  assetPrefix: isGithubActions ? process.env.NEXT_PUBLIC_BASE_URL : '',
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
