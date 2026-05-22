import Link from "next/link";

export function PageHeader() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-base font-semibold text-neutral-50 hover:text-neutral-300 transition">
          DVD Screensaver
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-200 hover:bg-neutral-700 transition"
        >
          ← Open Screensaver
        </Link>
      </div>
    </header>
  );
}
