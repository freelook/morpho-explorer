import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.morpho.org',
        port: '',
        pathname: '/v2/assets/images/**'
      }
    ]
  }
}

export default nextConfig
