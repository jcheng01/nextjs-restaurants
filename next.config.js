// next.config.js
module.exports = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'it-363-restaurants.local',
            },
            {
                protocol: 'https',
                hostname: 'restaurants.ist363.xyz',
            }
        ]
    }
}