import type { Metadata } from "next";
import DvdPage from "./DvdPage";

export const metadata: Metadata = {
  title: "DVD Screensaver – Classic Bouncing DVD Logo Animation",
  description:
    "The classic DVD screensaver with the bouncing DVD logo. Adjust speed, size, and fullscreen mode. Great for nostalgic ambience, vibe lighting, and pixel response tests.",
};

export default function Page() {
  return <DvdPage />;
}
