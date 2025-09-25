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
};

export default nextConfig;
