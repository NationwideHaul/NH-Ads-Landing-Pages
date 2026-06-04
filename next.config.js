/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Assets in /public/images are already pre-optimized (resized + compressed),
    // so we skip the on-demand optimizer. This also avoids Vercel image-
    // optimization usage and keeps <Image> rendering plain, cacheable files.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
