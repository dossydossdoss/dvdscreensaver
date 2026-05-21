import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact – DVD Screensaver",
  description: "Get in touch with feedback or questions about DVD Screensaver.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-4 text-neutral-50">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8">
        <h1 className="mb-2 text-2xl font-semibold">Contact</h1>
        <p className="mb-6 text-sm text-neutral-400">
          Got feedback, a bug to report, or just want to say hi? Send us an email.
        </p>
        <a
          href="mailto:hello@dvdscreensaver.app"
          className="block w-full rounded-xl bg-neutral-800 px-4 py-3 text-center text-sm font-medium text-neutral-50 transition hover:bg-neutral-700"
        >
          hello@dvdscreensaver.app
        </a>
        <Link
          href="/"
          className="mt-4 block text-center text-xs text-neutral-500 hover:text-neutral-300 transition"
        >
          ← Back to screensaver
        </Link>
      </div>
    </div>
  );
}
