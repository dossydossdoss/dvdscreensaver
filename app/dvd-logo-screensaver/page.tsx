import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "DVD Logo Screensaver – Free Bouncing Logo Online",
  description:
    "The DVD logo screensaver: the classic bouncing DVD logo that changes colour on every hit. Three logo styles, custom colours, adjustable speed. Free online, no download.",
  alternates: { canonical: "/dvd-logo-screensaver/" },
  openGraph: {
    title: "DVD Logo Screensaver – Free Bouncing Logo Online",
    description:
      "The classic bouncing DVD logo screensaver. Three logo styles, custom colours, adjustable speed. Free online, no download.",
    url: "https://dvdscreensaver.app/dvd-logo-screensaver/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "DVD Logo Screensaver",
  "url": "https://dvdscreensaver.app/dvd-logo-screensaver/",
  "description": "Free DVD logo screensaver online. The classic bouncing DVD logo with colour change on every hit.",
  "isPartOf": { "@type": "WebSite", "url": "https://dvdscreensaver.app" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "DVD Screensaver", "item": "https://dvdscreensaver.app" },
      { "@type": "ListItem", "position": 2, "name": "DVD Logo Screensaver", "item": "https://dvdscreensaver.app/dvd-logo-screensaver/" },
    ],
  },
};

export default function DvdLogoScreensaverPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-4xl font-semibold tracking-tight">DVD Logo Screensaver</h1>
        <p className="mt-4 text-lg text-neutral-300">
          The DVD logo screensaver is the classic animation found on DVD players and DVD video
          software: a small DVD logo drifting across a black screen, bouncing off edges, and
          changing colour on every hit.
        </p>

        <section className="mt-10 rounded-xl border border-orange-500/40 bg-orange-500/10 p-6 text-center">
          <p className="text-lg font-semibold text-neutral-50">Try the DVD Logo Screensaver</p>
          <p className="mt-1 text-sm text-neutral-400">3 logo styles, custom colours, adjustable speed. Free, no download.</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-400 transition"
          >
            Open DVD Logo Screensaver →
          </Link>
        </section>

        <article className="mt-10 space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">The DVD Logo</h2>
            <div className="mt-3 space-y-3">
              <p>
                The DVD logo is the official trademark of the DVD format, administered by the
                DVD Format/Logo Licensing Corporation. The classic version — bold "DVD" lettering
                with a disc shadow beneath — was designed to be immediately recognisable at small
                sizes, which made it ideal for use as a screensaver element.
              </p>
              <p>
                When DVD players were idle, they displayed a small version of this logo drifting
                across the screen. The motion prevented screen burn-in on CRT televisions, while
                the logo itself served as constant brand reinforcement for the DVD format.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Three DVD Logo Styles</h2>
            <div className="mt-3 space-y-3">
              <p>This simulator includes three distinct DVD logo styles:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-neutral-200">Classic DVD Logo</strong> — the original bold
                  disc logo, most commonly seen on standalone DVD players. The most recognisable and
                  the version that became iconic through internet culture.
                </li>
                <li>
                  <strong className="text-neutral-200">DVD Video Logo</strong> — the rectangular badge
                  version used on DVD Video releases and packaging. A slightly different shape with
                  "VIDEO" text below the DVD mark.
                </li>
                <li>
                  <strong className="text-neutral-200">DVD Video Logo (Alt)</strong> — an alternate
                  treatment of the DVD Video badge, with a different internal layout. Seen on some
                  regional and alternative DVD releases.
                </li>
              </ul>
              <p>
                Each style can be used with any colour setting. Switch between them at any time
                without interrupting the animation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">How the Colour Works</h2>
            <div className="mt-3 space-y-3">
              <p>
                The DVD logo changes colour each time it bounces off a wall — exactly as the
                original hardware did. The default rotating mode cycles through seven colours:
                cyan, green, orange, purple, yellow, sky blue, and red. The order is randomised,
                so the same colour never appears consecutively.
              </p>
              <p>This simulator also offers additional colour modes not found on the original:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-neutral-200">Solid colour</strong> — pick any colour from the presets or use the custom colour picker. The logo stays that colour throughout.</li>
                <li><strong className="text-neutral-200">Continuous hue cycle</strong> — the logo smoothly shifts through the full colour spectrum in real time, regardless of bounces.</li>
                <li><strong className="text-neutral-200">Rotating (default)</strong> — colour changes on each wall hit, cycling through the classic palette.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">DVD Logo Screensaver Use Cases</h2>
            <div className="mt-3 space-y-3">
              <p>The DVD logo screensaver has practical and aesthetic uses beyond nostalgia:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-neutral-200">Burn-in prevention</strong> — OLED and AMOLED screens are vulnerable to static burn-in. The moving logo prevents this, just as it did on CRT televisions in the original DVD era.</li>
                <li><strong className="text-neutral-200">Display testing</strong> — the bouncing logo is useful for checking panel uniformity, motion blur, and pixel response across the full screen area.</li>
                <li><strong className="text-neutral-200">Background ambience</strong> — a dynamic, colourful background for events, streams, and offices. Nostalgic and visually engaging.</li>
                <li><strong className="text-neutral-200">Retro decoration</strong> — recreate the classic DVD era aesthetic on any screen.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Frequently Asked Questions</h2>
            <dl className="mt-3 space-y-5">
              <div>
                <dt className="font-semibold text-neutral-200">Is the DVD logo screensaver free?</dt>
                <dd className="mt-1">Yes. No download, no account, no cost. Works in any modern browser on desktop, laptop, TV, or projector.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-200">Can I change the DVD logo colour?</dt>
                <dd className="mt-1">Yes. Choose from 10 preset colours, use the custom colour picker for any colour, or enable the continuous hue cycle mode.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-200">Which DVD logo style is the most accurate to the original?</dt>
                <dd className="mt-1">The Classic DVD Logo is the closest to what appeared on most standalone DVD players. The DVD Video Logo appeared more commonly on computer software players.</dd>
              </div>
            </dl>
          </section>
        </article>

        <nav className="mt-10 border-t border-neutral-800 pt-8">
          <p className="text-sm font-medium text-neutral-400 mb-4">Related pages</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/simulator/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              DVD Screensaver Simulator →
            </Link>
            <Link href="/will-it-hit-the-corner/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              Will It Hit the Corner? →
            </Link>
            <Link href="/history/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              DVD Screensaver History →
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
