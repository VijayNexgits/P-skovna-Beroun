/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // enables static export
  trailingSlash: true, 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
