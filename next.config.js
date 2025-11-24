/** @type {import('next').NextConfig} */

const repo = 'adatna';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  basePath: basePath,
});

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = withPWA(nextConfig);
