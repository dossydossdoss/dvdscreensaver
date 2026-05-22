import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "DVD Screensaver Simulator – Free Online Bouncing Logo",
  description:
    "Free DVD screensaver simulator online. Real-time bouncing DVD logo with adjustable speed, size, and colour. No download needed — runs in any browser.",
  alternates: { canonical: "/simulator/" },
  openGraph: {
    title: "DVD Screensaver Simulator – Free Online Bouncing Logo",
    description:
      "Real-time DVD screensaver simulator. Bouncing DVD logo with adjustable speed, size, and colour. Free, no download.",
    url: "https://dvdscreensaver.app/simulator/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "DVD Screensaver Simulator",
  "url": "https://dvdscreensaver.app/simulator/",
  "description": "Free DVD screensaver simulator online. Real-time bouncing DVD logo simulation.",
  "isPartOf": { "@type": "WebSite", "url": "https://dvdscreensaver.app" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "DVD Screensaver", "item": "https://dvdscreensaver.app" },
      { "@type": "ListItem", "position": 2, "name": "Simulator", "item": "https://dvdscreensaver.app/simulator/" },
    ],
  },
};

export default function SimulatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-4xl font-semibold tracking-tight">DVD Screensaver Simulator</h1>
        <p className="mt-4 text-lg text-neutral-300">
          A real-time DVD screensaver simulator that replicates the exact behaviour of the original
          DVD player screensaver — the bouncing DVD logo that drifted across the screen of every
          DVD player from the early 2000s.
        </p>

        <section className="mt-10 rounded-xl border border-orange-500/40 bg-orange-500/10 p-6 text-center">
          <p className="text-lg font-semibold text-neutral-50">Try the DVD Screensaver Simulator</p>
          <p className="mt-1 text-sm text-neutral-400">Free, no download. Runs in any browser.</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-400 transition"
          >
            Open Simulator →
          </Link>
        </section>

        <article className="mt-10 space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">How the Simulation Works</h2>
            <div className="mt-3 space-y-3">
              <p>
                Unlike a video or GIF, this is a genuine real-time simulation. The bouncing DVD logo
                obeys consistent physics: it moves at a constant speed along both X and Y axes
                simultaneously, and reflects off walls at equal angles — just like the original hardware.
              </p>
              <p>
                When the logo hits a horizontal wall, the vertical velocity reverses. When it hits a
                vertical wall, the horizontal velocity reverses. This produces the characteristic
                diagonal bounce pattern. Each session starts with a slightly different angle and
                position, making every run unique.
              </p>
              <p>
                Colour changes on every wall hit. The simulator cycles through seven colours —
                cyan, green, orange, purple, yellow, sky blue, and red — in random order, always
                avoiding repeating the same colour consecutively.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">What You Can Customise</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-neutral-200">Logo style</strong> — 3 DVD logo variants: Classic DVD Logo, DVD Video Logo, and DVD Video Logo (Alt)</li>
              <li><strong className="text-neutral-200">Speed</strong> — slow drift to fast bounce, adjustable at any time</li>
              <li><strong className="text-neutral-200">Size</strong> — small to large, adjustable during animation</li>
              <li><strong className="text-neutral-200">Colour</strong> — rotating (changes on bounce), solid presets, custom picker, or continuous hue cycle</li>
              <li><strong className="text-neutral-200">Fullscreen</strong> — press F or Space, or click the canvas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Why Use a DVD Screensaver Simulator?</h2>
            <div className="mt-3 space-y-3">
              <p>
                The original screensaver is no longer accessible to most people — DVD players have
                been largely replaced by streaming services. This simulator brings it back, running
                entirely in your browser with no download, no install, and no account required.
              </p>
              <p>
                It also goes further than the original: you can control speed, size, colour, and logo
                style. And unlike a physical DVD player, this DVD screensaver simulator works on any
                screen — desktop, laptop, TV, projector, or tablet.
              </p>
              <p>
                Common uses include burn-in prevention on OLED/AMOLED screens, display testing,
                background ambience for events and streams, and plain nostalgia.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Simulator vs. the Original</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="py-2 pr-4 text-left text-neutral-400 font-medium">Feature</th>
                    <th className="py-2 pr-4 text-left text-neutral-400 font-medium">Original DVD Player</th>
                    <th className="py-2 text-left text-neutral-400 font-medium">This Simulator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {[
                    ["Bouncing DVD logo", "✓", "✓"],
                    ["Colour change on bounce", "✓", "✓"],
                    ["Adjustable speed", "✗", "✓"],
                    ["Adjustable size", "✗", "✓"],
                    ["Multiple logo styles", "✗", "✓"],
                    ["Custom colour", "✗", "✓"],
                    ["Fullscreen mode", "✗", "✓"],
                    ["Works on any screen", "✗", "✓"],
                    ["No hardware required", "✗", "✓"],
                  ].map(([feat, orig, sim]) => (
                    <tr key={feat}>
                      <td className="py-2 pr-4 text-neutral-300">{feat}</td>
                      <td className="py-2 pr-4 text-neutral-400">{orig}</td>
                      <td className="py-2 text-orange-400">{sim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </article>

        <nav className="mt-10 border-t border-neutral-800 pt-8">
          <p className="text-sm font-medium text-neutral-400 mb-4">Related pages</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/will-it-hit-the-corner/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              Will It Hit the Corner? →
            </Link>
            <Link href="/history/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              DVD Screensaver History →
            </Link>
            <Link href="/dvd-logo-screensaver/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              DVD Logo Screensaver →
            </Link>
          </div>
        </nav>
      </main>

      <footer className="border-t border-neutral-800 px-4 py-6 text-center text-xs text-neutral-500">
        <p>Questions or feedback? <a href="/contact/" className="underline hover:text-neutral-300 transition">Contact us</a></p>
      </footer>
    </div>
  );
}
