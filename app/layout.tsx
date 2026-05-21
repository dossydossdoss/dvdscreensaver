import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Bouncing DVD Logo Screensaver – Free Online Simulator",
  description:
    "Free bouncing DVD logo screensaver simulator. Watch the DVD logo bounce around your screen, hit the corner, and change colour. Adjust speed and size. Works in any browser.",
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
