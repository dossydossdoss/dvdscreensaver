import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Will the DVD Screensaver Hit the Corner? – The Corner Hit Explained",
  description:
    "Will the DVD screensaver hit the corner? Yes — and here's the geometry behind it. The meme, The Office reference, and how to make it happen faster.",
  alternates: { canonical: "/will-it-hit-the-corner/" },
  openGraph: {
    title: "Will the DVD Screensaver Hit the Corner?",
    description:
      "Yes — and here's the geometry behind it. The meme, The Office reference, and how to make the DVD logo hit the corner faster.",
    url: "https://dvdscreensaver.app/will-it-hit-the-corner/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Will the DVD Screensaver Hit the Corner?",
    "url": "https://dvdscreensaver.app/will-it-hit-the-corner/",
    "description": "Explains why the bouncing DVD logo screensaver will hit the corner, with the geometry and cultural context.",
    "isPartOf": { "@type": "WebSite", "url": "https://dvdscreensaver.app" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "DVD Screensaver", "item": "https://dvdscreensaver.app" },
        { "@type": "ListItem", "position": 2, "name": "Will It Hit the Corner?", "item": "https://dvdscreensaver.app/will-it-hit-the-corner/" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will the DVD screensaver hit the corner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Given enough time and the right starting trajectory, the bouncing DVD logo will hit the exact corner of the screen. Because screens have integer pixel dimensions and the logo moves at consistent angles, a corner hit is mathematically guaranteed — but may take a while depending on starting position.",
        },
      },
      {
        "@type": "Question",
        "name": "How do you make the DVD logo hit the corner faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the speed slider to increase the movement speed. At maximum speed, a corner hit can happen within seconds. Each session starts with a randomised position and angle, so some runs reach the corner faster than others.",
        },
      },
      {
        "@type": "Question",
        "name": "What episode of The Office has the DVD screensaver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The DVD screensaver appears in Season 3, Episode 3 of The Office (US), titled 'The Coup'. Kevin is watching the DVD screensaver and waiting for the logo to hit the corner — and almost misses it.",
        },
      },
    ],
  },
];

export default function CornerHitPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-4xl font-semibold tracking-tight">Will the DVD Screensaver Hit the Corner?</h1>
        <p className="mt-4 text-lg text-neutral-300">
          Yes — given enough time and the right starting conditions, the bouncing DVD logo will hit
          the exact corner of the screen. Here is why it happens, and how to make it happen faster.
        </p>

        <section className="mt-10 rounded-xl border border-orange-500/40 bg-orange-500/10 p-6 text-center">
          <p className="text-lg font-semibold text-neutral-50">Watch the DVD Screensaver Hit the Corner</p>
          <p className="mt-1 text-sm text-neutral-400">Crank up the speed. Free, no download.</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-400 transition"
          >
            Open DVD Screensaver →
          </Link>
        </section>

        <article className="mt-10 space-y-8 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Why the Corner Hit Became Famous</h2>
            <div className="mt-3 space-y-3">
              <p>
                The DVD screensaver corner hit became an internet phenomenon, most famously through
                The Office (US). In Season 3, Episode 3 ("The Coup"), Kevin watches the DVD
                screensaver and waits — almost painfully — for the logo to hit the corner. He nearly
                misses it. The moment resonated because it captures something universally relatable:
                patiently waiting for a small, oddly satisfying event.
              </p>
              <p>
                The clip went viral and spawned countless memes. The bouncing DVD logo became one of
                the most recognisable images of early internet culture, symbolising boredom,
                patience, and the strange satisfaction of geometric perfection.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">The Geometry Behind the Corner Hit</h2>
            <div className="mt-3 space-y-3">
              <p>
                The DVD logo bounces at consistent angles. It moves diagonally — horizontally and
                vertically at the same time, with equal speed in both directions. A corner hit
                occurs when both the X and Y position reach their boundary simultaneously.
              </p>
              <p>
                Whether a corner hit occurs depends on three factors:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The starting position of the logo</li>
                <li>The starting velocity direction</li>
                <li>The ratio of the screen width to height (minus logo dimensions)</li>
              </ul>
              <p>
                If the ratio of the bounce distances is rational — which it always is on a screen
                with integer pixel dimensions — the logo will eventually reach every possible
                position, including the corners. A corner hit is mathematically guaranteed.
              </p>
              <p>
                In practice, the time to the first corner hit varies enormously depending on starting
                conditions. Some runs hit a corner in seconds. Others take many minutes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">How to Make the DVD Screensaver Hit the Corner Faster</h2>
            <div className="mt-3 space-y-3">
              <p>
                The fastest way: increase the speed using the speed slider. At maximum speed, a
                corner hit can happen within a few seconds. At minimum speed, it may take many minutes.
              </p>
              <p>
                Each session starts with a randomised starting position and angle, so some runs reach
                a corner faster than others. If you want a faster result, reload the page to get a
                new starting configuration.
              </p>
              <p>
                Making the logo smaller also increases the effective bounce area and changes the
                timing of corner hits, which can sometimes produce a corner hit more quickly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-50">Frequently Asked Questions</h2>
            <dl className="mt-3 space-y-5">
              <div>
                <dt className="font-semibold text-neutral-200">Does the DVD screensaver always hit the corner?</dt>
                <dd className="mt-1">Yes — eventually. The mathematical guarantee comes from the rational ratio of screen dimensions. It may take a long time at slow speed, but it will happen.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-200">What episode of The Office has the DVD screensaver?</dt>
                <dd className="mt-1">Season 3, Episode 3 — "The Coup". Kevin watches the DVD screensaver and almost misses the corner hit. A genuinely iconic television moment.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-200">Can I increase my chances of a corner hit?</dt>
                <dd className="mt-1">Yes: increase speed, try a smaller logo size, or reload for a new starting angle. All of these affect the timing of when a corner hit occurs.</dd>
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
