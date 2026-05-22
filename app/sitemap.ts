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
    {
      url: "https://dvdscreensaver.app/simulator/",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dvdscreensaver.app/will-it-hit-the-corner/",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dvdscreensaver.app/history/",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://dvdscreensaver.app/dvd-logo-screensaver/",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dvdscreensaver.app/about/",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://dvdscreensaver.app/contact/",
      lastModified: new Date("2025-05-22"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
