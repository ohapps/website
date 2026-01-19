import type { NextConfig } from "next";

const getStrapiConfig = () => {
    try {
        const url = new URL(process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337');
        return {
            protocol: url.protocol.replace(':', '') as 'http' | 'https',
            hostname: url.hostname,
            port: url.port || '',
            pathname: '**',
        };
    } catch {
        return {
            protocol: 'http' as const,
            hostname: 'localhost',
            port: '1337',
            pathname: '**',
        };
    }
};

const strapiConfig = getStrapiConfig();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            strapiConfig,
            { protocol: 'https', hostname: 'res.cloudinary.com' },
            { protocol: 'https', hostname: '**.amazonaws.com' },
            { protocol: 'https', hostname: '**.strapi.io' },
            { protocol: 'https', hostname: '**.strapiapp.com' },
        ],
    },
};

export default nextConfig;
