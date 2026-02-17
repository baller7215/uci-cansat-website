/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns is required for Next.js Image to allow Sanity CDN in production
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
            { protocol: 'https', hostname: 'media.licdn.com', pathname: '/**' },
        ],
    },
    // Exclude studio directory from Next.js build
    typescript: {
        ignoreBuildErrors: false,
    },
    // Exclude studio from webpack processing
    webpack: (config, { isServer }) => {
        config.watchOptions = {
            ...config.watchOptions,
            ignored: ['**/studio-uci-cansat-website/**'],
        };
        return config;
    },
};

export default nextConfig;
