"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const trackClasses = isLight
    ? "bg-slate-100 border-slate-300 shadow-inner"
    : "bg-neutral-800 border-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";
  const thumbClasses = isLight
    ? "bg-white/30 border border-slate-300/80 shadow-[0_4px_10px_rgba(15,23,42,0.12)] backdrop-blur"
    : "bg-white/10 border border-neutral-500/80 shadow-[0_4px_12px_rgba(0,0,0,0.4)] backdrop-blur";
  const thumbTranslate = isLight ? "38px" : "0px";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLight ? "true" : "false"}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={`relative inline-flex h-10 w-20 items-center rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ${
        isLight ? "focus-visible:ring-offset-slate-100" : "focus-visible:ring-offset-neutral-900"
      } ${trackClasses}`}
    >
      <span
        className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none transition transform ${thumbClasses}`}
        style={{ transform: `translateX(${thumbTranslate})` }}
      />
      <div className="pointer-events-none absolute inset-0 grid grid-cols-2 place-items-center text-xs">
        <span className={isLight ? "text-slate-500" : "text-slate-300"} aria-hidden>🌙</span>
        <span className={`drop-shadow-sm ${isLight ? "text-amber-400" : "text-amber-300"}`} aria-hidden>☀️</span>
      </div>
    </button>
  );
}
