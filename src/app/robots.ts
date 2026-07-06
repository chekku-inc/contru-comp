import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Requerido por la exportación estática (output: "export")
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
