/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'res.cloudinary.com',//updated on 19-05-2024 (shanto)
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
