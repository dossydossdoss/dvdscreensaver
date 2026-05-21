import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://dvdscreensaver.app"),
  title: {
    default: "DVD Screensaver – Free Bouncing DVD Logo Online | No Download",
    template: "%s | DVD Screensaver",
  },
  description:
    "Free DVD screensaver online. Watch the bouncing DVD logo hit the corner, change colour, and bounce off every edge. Classic DVD logo screensaver simulator — no download needed.",
  keywords: [
    "dvd screensaver",
    "bouncing dvd logo",
    "dvd screensaver simulator",
    "dvd logo screensaver",
    "dvd screensaver online",
    "dvd screensaver hits corner",
    "dvd video screensaver",
    "free screensaver",
    "tv screensaver",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DVD Screensaver – Free Bouncing DVD Logo Online",
    description:
      "Watch the classic bouncing DVD logo screensaver in your browser. Free, no download. Change colour, adjust speed, hit the corner.",
    url: "https://dvdscreensaver.app",
    siteName: "DVD Screensaver",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DVD Screensaver – Bouncing DVD Logo Simulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DVD Screensaver – Free Bouncing DVD Logo Online",
    description:
      "Watch the classic bouncing DVD logo screensaver in your browser. Free, no download. Change colour, adjust speed, hit the corner.",
  },
  applicationName: "DVD Screensaver",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')return;document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');})();` }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="9e5ee5ac-d7e5-4609-b66b-3826180a55e5"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
