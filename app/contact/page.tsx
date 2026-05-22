import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Contact – DVD Screensaver",
  description: "Get in touch with the DVD Screensaver team. Questions, feedback, and bug reports welcome.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact – DVD Screensaver",
    description: "Get in touch with the DVD Screensaver team. Questions, feedback, and bug reports welcome.",
    url: "https://dvdscreensaver.app/contact/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact – DVD Screensaver",
  "url": "https://dvdscreensaver.app/contact/",
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
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://dvdscreensaver.app/contact/" },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg text-neutral-300">
          Questions, feedback, bug reports, or anything else — we'd love to hear from you.
        </p>

        <section className="mt-10 rounded-xl border border-neutral-800 bg-neutral-900/60 p-8">
          <h2 className="text-xl font-semibold text-neutral-50">Email</h2>
          <p className="mt-2 text-neutral-400">For all enquiries:</p>
          <a
            href="mailto:hello@dvdscreensaver.app"
            className="mt-3 inline-block text-lg font-medium text-neutral-100 underline underline-offset-4 hover:text-white transition"
          >
            hello@dvdscreensaver.app
          </a>

          <div className="mt-8 space-y-3 text-sm text-neutral-400">
            <p>We welcome:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bug reports and technical issues</li>
              <li>Feature requests and suggestions</li>
              <li>General feedback</li>
              <li>Business enquiries</li>
            </ul>
          </div>
        </section>

        <p className="mt-8 text-sm text-neutral-500">
          Want to know more about the site?{" "}
          <Link href="/about/" className="underline underline-offset-2 text-neutral-400 hover:text-neutral-200 transition">
            Read the About page
          </Link>
          .
        </p>
      </main>

      <footer className="border-t border-neutral-800 px-4 py-6 text-center text-xs text-neutral-500">
        <Link href="/" className="underline hover:text-neutral-300 transition">← Back to DVD Screensaver</Link>
      </footer>
    </div>
  );
}
