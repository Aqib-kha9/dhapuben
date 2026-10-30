/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1311wbk6unapo.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn-image.blitzshopdeck.in',
      },
      {
        protocol: 'https',
        hostname: 'cdn.zeplin.io',
      },
      {
        protocol: 'https',
        hostname: 'dhapubenwellness.com',
      },
      {
        protocol: 'https',
        hostname: 'dl1bocu0zkzhm.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

