/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/dashboard',
            destination: '/dashboard/members',
            permanent: true,
          },
          // temporary redirect
          {
            source: '/',
            destination: '/dashboard/members',
            permanent: true,
          },
        ]
    },
}

module.exports = nextConfig
