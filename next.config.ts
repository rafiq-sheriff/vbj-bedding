import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(dirname),
  },
  enablePrerenderSourceMaps: false,
  experimental: {
    cpus: 2,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
}

export default nextConfig
