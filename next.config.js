/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // assetPrefix is used to configure the CDN path for public assets.
  // This is required for GitHub Pages deployment.
  assetPrefix: isProd ? '/adatna/' : '',
  // basePath is used to configure the base path for the application.
  // This is required for GitHub Pages deployment.
  basePath: isProd ? '/adatna' : '',
  images: {
    unoptimized: true,
  },
  // This is the crucial fix. It ensures that static assets are served correctly on GitHub Pages.
  trailingSlash: true,
  /* config options here */
};

module.exports = nextConfig;
