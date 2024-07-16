/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'res.cloudinary.com' },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.resolve.fallback = {
      fs: false,
    }
    return config
  },
}

export default nextConfig
