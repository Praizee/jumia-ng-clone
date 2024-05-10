// renamed file from 'next.config.mjs'  to  'next.config.js'

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  // disable: process.env.NODE_ENV === "development",
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ng.jumia.is",
        port: "",
        pathname: "/cms/**",
      },
      {
        protocol: "https",
        hostname: "ng.jumia.is",
        port: "",
        pathname: "/unsafe/**",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
