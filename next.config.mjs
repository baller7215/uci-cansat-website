/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.licdn.com', 'cdn.sanity.io'],
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
