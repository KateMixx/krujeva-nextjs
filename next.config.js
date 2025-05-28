/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "db9gna8cy",
    NEXT_PUBLIC_CLOUDINARY_API_KEY: "555747816857416",
    CLOUDINARY_API_SECRET: "P1V2bYA4oQeskZVpwv6D8-_BjMw",

    // NEXT_PUBLIC_CLOUDINARY_SECURE_DISTRIBUTION="<Your Secure Distribution / CNAME>",
    // NEXT_PUBLIC_CLOUDINARY_PRIVATE_CDN="<true|false>
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "false" },
          { key: "Access-Control-Allow-Origin", value: "https://localhost:3000" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig