// next.config.ts
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // Solo in produzione per GitHub Pages
    ...(!isDev && {
        basePath: "/StudioDentisticoFanelli",
        assetPrefix: "/StudioDentisticoFanelli",
    }),
    async headers() {
        return [
            {
                source: "/videos/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
