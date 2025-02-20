import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
  },
  output: 'export', // Ensure the output is set to 'export'
}

export default nextConfig
