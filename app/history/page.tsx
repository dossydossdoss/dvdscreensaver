import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "DVD Screensaver History – The Bouncing Logo Origin Story",
  description:
    "The history of the DVD screensaver: where it came from, why the logo bounces, why it changes colour, and how it became a cultural phenomenon.",
  alternates: { canonical: "/history/" },
  openGraph: {
    title: "DVD Screensaver History – The Bouncing Logo Origin Story",
    description:
      "Where the DVD screensaver came from, why the logo bounces, why it changes colour, and how it became a cultural phenomenon.",
    url: "https://dvdscreensaver.app/history/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "History of the DVD Screensaver",
  "description": "The origin, purpose, and cultural impact of the bouncing DVD logo screensaver.",
  "url": "https://dvdscreensaver.app/history/",
  "publisher": {
    "@type": "Organization",
    "name": "DVD Screensaver",
    "url": "https://dvdscreensaver.app",
  },
  "isPartOf": { "@type": "WebSite", "url": "https://dvdscreensaver.app" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "DVD Screensaver", "item": "https://dvdscreensaver.app" },
      { "@type": "ListItem", "position": 2, "name": "History", "item": "https://dvdscreensaver.app/history/" },
    ],
  },
};

export default function HistoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-4xl font-semibold tracking-tight">History of the DVD Screensaver</h1>
        <p className="mt-4 text-lg text-neutral-300">
          The DVD screensaver — a logo bouncing silently across a black screen — is one of the most
          recognised pieces of incidental software ever made. Here is where it came from, why it
          was built, and how it became a cultural icon.
        </p>

        <article className="mt-10 space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">The DVD Player Era</h2>
            <div className="mt-3 space-y-3">
              <p>
                DVD players became mainstream consumer electronics in the late 1990s and early
                2000s. Unlike VHS players, DVD players had built-in digital display outputs and
                could remain connected to a television indefinitely, even when not actively playing
                a disc.
              </p>
              <p>
                This created a problem. CRT televisions — the standard display technology at the
                time — were vulnerable to screen burn-in. If a static image was displayed for too
                long, a ghost of that image could become permanently etched onto the phosphor
                coating inside the screen. The DVD player needed a way to prevent this when idle.
              </p>
              <p>
                The solution was a screensaver: a simple animation that kept the screen active
                without displaying any static content. Most DVD manufacturers chose the same
                approach — a small version of the DVD logo, drifting across a black background,
                bouncing off the edges of the screen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Why the DVD Logo?</h2>
            <div className="mt-3 space-y-3">
              <p>
                The bouncing object was the DVD logo — the official trademark of the DVD format,
                administered by the DVD Format/Logo Licensing Corporation. Using the logo served
                two purposes simultaneously: it prevented burn-in and reinforced brand recognition
                for the DVD format itself.
              </p>
              <p>
                The logo was small enough not to dominate the screen but recognisable enough to
                identify the device and format. It was an elegant design choice — functional and
                promotional at the same time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Why the Colour Changes</h2>
            <div className="mt-3 space-y-3">
              <p>
                Each time the DVD logo bounced off a wall, it changed colour. This served both
                aesthetic and functional purposes.
              </p>
              <p>
                Functionally, the colour change ensured that no single colour was displayed in any
                fixed region of the screen for an extended period. Even a moving logo spends more
                time near the centre of the screen than the edges, so colour rotation provided an
                additional layer of burn-in protection.
              </p>
              <p>
                Aesthetically, the colour changes made the screensaver visually interesting —
                something worth glancing at rather than ignoring entirely. The specific colours and
                sequence varied by manufacturer and firmware version, but the behaviour was nearly
                universal across DVD players.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">From Hardware to Software</h2>
            <div className="mt-3 space-y-3">
              <p>
                As DVD playback moved to personal computers, software DVD players replicated the
                screensaver behaviour. Applications like Windows Media Player, PowerDVD, and
                WinDVD displayed versions of the bouncing DVD logo when playback was paused or the
                player was idle.
              </p>
              <p>
                This is when the DVD screensaver reached its cultural peak. It was now visible on
                computer monitors, office displays, public screens, and laptops worldwide — not
                just on dedicated DVD players connected to televisions.
              </p>
              <p>
                The screensaver became part of the background of early 2000s life. It appeared in
                offices, waiting rooms, classrooms, and living rooms. Anyone who used a computer
                or DVD player during this period almost certainly encountered it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">The Cultural Moment: The Office</h2>
            <div className="mt-3 space-y-3">
              <p>
                The DVD screensaver became genuinely famous through The Office (US). In Season 3,
                Episode 3 ("The Coup"), the character Kevin is shown watching the DVD screensaver
                during a meeting, intently waiting for the logo to hit the exact corner of the
                screen — and nearly missing the moment when it happens.
              </p>
              <p>
                The scene resonated because it captured something universally recognisable: the
                oddly compelling nature of the screensaver, and the specific satisfaction of
                watching it hit the corner. The clip spread widely online and became a defining
                internet meme of the era.
              </p>
              <p>
                The corner hit — when the DVD logo reaches the exact corner of the screen
                simultaneously on both axes — became the screensaver's defining event. Whether
                it would hit the corner, and when, became a source of genuine tension and
                satisfaction for viewers everywhere.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">The DVD Screensaver Today</h2>
            <div className="mt-3 space-y-3">
              <p>
                Physical DVD players have largely disappeared from homes, replaced by streaming
                services. Software DVD players have been retired from most operating systems.
                The original screensaver no longer appears on most people's screens.
              </p>
              <p>
                But the DVD screensaver lives on — in memes, in nostalgia, and in browser-based
                simulators that recreate the experience for a new generation. The bouncing DVD
                logo remains one of the most recognisable images in internet culture, decades
                after it was designed for a purely practical purpose.
              </p>
              <p>
                OLED and AMOLED screens — now found in nearly every modern phone and many
                televisions — are also vulnerable to burn-in, making the screensaver's original
                purpose newly relevant. The DVD screensaver simulator serves the same function it
                always did, now accessible to anyone with a browser.
              </p>
            </div>
          </section>
        </article>

        <section className="mt-10 rounded-xl border border-orange-500/40 bg-orange-500/10 p-6 text-center">
          <p className="text-lg font-semibold text-neutral-50">Try the DVD Screensaver</p>
          <p className="mt-1 text-sm text-neutral-400">Free, no download. Runs in any browser.</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-400 transition"
          >
            Open DVD Screensaver →
          </Link>
        </section>

        <nav className="mt-10 border-t border-neutral-800 pt-8">
          <p className="text-sm font-medium text-neutral-400 mb-4">Related pages</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/simulator/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              DVD Screensaver Simulator →
            </Link>
            <Link href="/will-it-hit-the-corner/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 transition">
              Will It Hit the Corner? →
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
