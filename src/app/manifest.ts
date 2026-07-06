import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Requerido por la exportación estática (output: "export")
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#edece8",
    theme_color: "#f05a28",
    icons: [{ src: "/images/logo.png", sizes: "500x500", type: "image/png" }],
  };
}
