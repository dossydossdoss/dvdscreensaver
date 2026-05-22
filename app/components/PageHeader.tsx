import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export function PageHeader() {
  return (
    <header className="border-b border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="text-base font-semibold text-slate-900 hover:text-slate-600 transition dark:text-neutral-50 dark:hover:text-neutral-300">
          DVD Screensaver
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-200 transition dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            ← Open Screensaver
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
