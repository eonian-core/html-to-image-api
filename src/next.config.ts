// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/old-path/:slug*',
                destination: '/new-path/:slug*',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/api/:path*',
            },
        ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = { fs: false };
        }
        return config;
    },
    sassOptions: {
        includePaths: ['./styles'],
    },
};

export default nextConfig;