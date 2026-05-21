import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DVD Screensaver",
    short_name: "DVD Screensaver",
    description:
      "Free bouncing DVD logo screensaver simulator. Watch the DVD logo hit the corner, change colour, and bounce off every edge. No download needed.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
