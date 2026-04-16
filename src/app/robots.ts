import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://elevate-pest-control-tn.vercel.app/sitemap.xml",
  };
}
