import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "DVD Screensaver – Free Bouncing Logo Simulator Online",
  description:
    "Free DVD screensaver online. Watch the bouncing DVD logo hit the corner, change colour, and bounce off every edge. Classic DVD logo screensaver simulator — no download needed.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
