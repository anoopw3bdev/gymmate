/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/dashboard',
            destination: '/dashboard/members',
            permanent: true,
          },
        ]
    },
}

module.exports = nextConfig
