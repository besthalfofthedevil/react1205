const nextConfig = {
  distDir: "./dist",
  async redirects() {
    return [
      // Wildcard path matching
      {
        source: '/restaurants/:slug',
        destination: '/restaurants/:slug/menu',
        permanent: true,
      },
      {
        source: '/restaurants',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;