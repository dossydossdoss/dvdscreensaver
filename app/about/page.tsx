import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "About – DVD Screensaver",
  description:
    "About DVD Screensaver — a free browser-based simulator of the classic bouncing DVD logo screensaver. No download, no account, no cost.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About – DVD Screensaver",
    description: "About DVD Screensaver — a free browser-based simulator of the classic bouncing DVD logo screensaver.",
    url: "https://dvdscreensaver.app/about/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About DVD Screensaver",
  "url": "https://dvdscreensaver.app/about/",
  "description": "About DVD Screensaver — a free browser-based simulator of the classic bouncing DVD logo screensaver.",
  "isPartOf": { "@type": "WebSite", "url": "https://dvdscreensaver.app" },
  "publisher": {
    "@type": "Organization",
    "name": "DVD Screensaver",
    "url": "https://dvdscreensaver.app",
    "email": "hello@dvdscreensaver.app",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "DVD Screensaver", "item": "https://dvdscreensaver.app" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://dvdscreensaver.app/about/" },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-neutral-950 dark:text-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-neutral-50">About DVD Screensaver</h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-neutral-300">
          DVD Screensaver is a free browser-based simulator of the classic bouncing DVD logo
          screensaver. No download, no account, no cost.
        </p>

        <article className="mt-10 space-y-8 text-slate-700 dark:text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-neutral-50">What It Is</h2>
            <div className="mt-3 space-y-3">
              <p>
                This site recreates the bouncing DVD logo screensaver that appeared on DVD players
                and DVD software throughout the early 2000s. It runs entirely in your browser —
                no plugin, no extension, no install required.
              </p>
              <p>
                The simulation is real-time: the logo moves at a consistent speed, bounces off
                edges at equal angles, and changes colour on every hit — exactly as the original
                hardware did. It works on any screen: desktop, laptop, TV, or projector.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-neutral-50">Features</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700 dark:text-neutral-300">
              <li>Three DVD logo styles — Classic, DVD Video, and DVD Video (Alt)</li>
              <li>Adjustable speed and logo size, changeable during animation</li>
              <li>Colour modes: rotating (changes on bounce), solid presets, custom picker, continuous hue cycle</li>
              <li>Fullscreen mode — press F, Space, or click the canvas</li>
              <li>Scroll to resize, Shift + Scroll to change speed in fullscreen</li>
              <li>Light and dark theme</li>
              <li>No download, no account, no ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-neutral-50">Why It Was Built</h2>
            <div className="mt-3 space-y-3">
              <p>
                The original DVD screensaver is no longer accessible to most people. DVD players
                have been replaced by streaming, and software DVD players have been retired from
                most operating systems. But the screensaver — and especially the corner hit — still
                holds a place in internet culture.
              </p>
              <p>
                This site brings it back in the simplest possible form: open a browser, and the
                screensaver is running. It also goes further than the original with adjustable
                speed, size, and colour, and fullscreen support for any display.
              </p>
              <p>
                OLED and AMOLED screens — now standard in most phones and many televisions — are
                also vulnerable to burn-in, making the screensaver's original purpose newly
                relevant. This tool serves the same function it always did.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-neutral-50">Contact</h2>
            <p className="mt-3">
              Questions, feedback, or anything else —{" "}
              <Link
                href="/contact/"
                className="underline underline-offset-2 text-slate-700 hover:text-slate-900 dark:text-neutral-200 dark:hover:text-white transition"
              >
                visit the contact page
              </Link>
              .
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-slate-200 px-4 py-6 text-center text-xs text-slate-500 dark:border-neutral-800 dark:text-neutral-500">
        <Link href="/" className="underline hover:text-slate-700 dark:hover:text-neutral-300 transition">← Back to DVD Screensaver</Link>
      </footer>
    </div>
  );
}
