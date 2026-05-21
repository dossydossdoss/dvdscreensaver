import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dvdscreensaver.app",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
