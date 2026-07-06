import type { NextConfig } from "next";

// Exportación estática para GitHub Pages con dominio propio
// (construcomp.site — ver public/CNAME). Sin basePath: el sitio
// se sirve desde la raíz del dominio.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // GitHub Pages no tiene servidor de optimización de imágenes
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
