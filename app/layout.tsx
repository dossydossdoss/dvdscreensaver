import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "DVD Screensaver – Classic Bouncing DVD Logo",
  description:
    "The classic DVD screensaver with the bouncing DVD logo. Adjust speed, size, and fullscreen mode.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
