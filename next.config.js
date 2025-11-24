/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is the crucial fix. It ensures that static assets are served correctly on GitHub Pages.
  trailingSlash: true,
};

module.exports = nextConfig;
