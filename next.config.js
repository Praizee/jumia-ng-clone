// renamed file from 'next.config.mjs'  to  'next.config.js'

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ng.jumia.is",
        port: "",
        pathname: "/cms/**",
      },
    ],
  },
};

module.exports = nextConfig;
