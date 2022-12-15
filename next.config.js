// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
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