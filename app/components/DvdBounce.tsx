"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const logoColors = [
  "#22d3ee",
  "#22c55e",
  "#f97316",
  "#a855f7",
  "#facc15",
  "#38bdf8",
  "#ef4444",
];

const PRESET_COLORS = [
  "#ef4444",
  "#f97316",
  "#facc15",
  "#22c55e",
  "#22d3ee",
  "#38bdf8",
  "#3b82f6",
  "#a855f7",
  "#ec4899",
  "#ffffff",
];

const LOGOS = [
  { id: "classic", src: "/dvd-logo.png",   label: "Classic", invertLuminance: false },
  { id: "alt",     src: "/dvd-2-logo.png", label: "Alt",     invertLuminance: true  },
  { id: "alt2",    src: "/dvd-3-logo.png", label: "Alt 2",   invertLuminance: true  },
];

function useProcessedMasks() {
  const [srcs, setSrcs] = useState<Record<string, string>>(
    () => Object.fromEntries(LOGOS.map((l) => [l.id, l.src]))
  );
  useEffect(() => {
    LOGOS.forEach((logo) => {
      if (!logo.invertLuminance) return;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          const lum = (0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]) / 255;
          d[i] = 255; d[i + 1] = 255; d[i + 2] = 255;
          d[i + 3] = Math.round((1 - lum) * (d[i + 3] / 255) * 255);
        }
        ctx.putImageData(imageData, 0, 0);
        setSrcs((prev) => ({ ...prev, [logo.id]: canvas.toDataURL("image/png") }));
      };
      img.src = logo.src;
    });
  }, []);
  return srcs;
}

function nextColor(current: string) {
  const candidates = logoColors.filter((c) => c !== current);
  return candidates[Math.floor(Math.random() * candidates.length)] ?? logoColors[0];
}

const BASE_WIDTH = 112;
const BASE_HEIGHT = 64;
const BASE_SPEED = 0.2;
const SPEED_MIN = 0.5;
const SPEED_MAX = 15;
const SPEED_STEP = 0.1;

export type DvdCopy = {
  h1: string;
  subtitle: string;
  labels: { logoSize: string; speed: string; logo: string; color: string };
  shortcutHint?: {
    enter?: string;
    exit?: string;
    enterKeys?: string;
    escapeKey?: string;
  };
  infoCards: Array<
    | { title: string; bullets: string[] }
    | { title: string; ordered: string[] }
    | { title: string; faqEntries: Array<{ q: string; a: string }> }
  >;
};

export function DvdBounce({ copy }: { copy: DvdCopy }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Rotating bounce color
  const [bounceColor, setBounceColor] = useState<string>(logoColors[0]);

  // Color mode: "rotate" = change on bounce, "solid" = fixed, "cycle" = continuous hue shift
  const [colorMode, setColorMode] = useState<"rotate" | "solid" | "cycle">("rotate");
  const [solidColor, setSolidColor] = useState<string>(logoColors[0]);
  const colorModeRef = useRef<"rotate" | "solid" | "cycle">("rotate");
  const [previewHue, setPreviewHue] = useState(0);

  useEffect(() => {
    colorModeRef.current = colorMode;
  }, [colorMode]);

  // Always-running hue loop — drives both the thumbnail and logo when in cycle mode
  useEffect(() => {
    let hue = 0;
    let frame = 0;
    const tick = () => {
      hue = (hue + 0.4) % 360;
      setPreviewHue(hue);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // The actual displayed color
  const activeColor =
    colorMode === "solid" ? solidColor
    : colorMode === "cycle" ? `hsl(${previewHue}, 100%, 55%)`
    : bounceColor;

  const [sizePercent, setSizePercent] = useState<number>(100);
  const [speedUnits, setSpeedUnits] = useState<number>(1);
  const speedRef = useRef<number>(BASE_SPEED);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [logoId, setLogoId] = useState<string>("classic");
  const colorInputRef = useRef<HTMLInputElement>(null);
  const maskSrcs = useProcessedMasks();

  const activeLogo = LOGOS.find((l) => l.id === logoId) ?? LOGOS[0];
  const activeMaskSrc = maskSrcs[activeLogo.id];

  // Is the custom picker active (solid mode + color not in presets)
  const customActive = colorMode === "solid" && !PRESET_COLORS.includes(solidColor);

  const sliderPercent = (value: number, min: number, max: number) =>
    Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const sizeSliderPos = sliderPercent(sizePercent, 60, 300);
  const speedSliderPos = sliderPercent(speedUnits, SPEED_MIN, SPEED_MAX);
  const speed = speedUnits * BASE_SPEED;

  const pageBg = isLight ? "bg-slate-50 text-slate-900" : "bg-neutral-950 text-neutral-50";
  const cardBase = isLight
    ? "rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]"
    : "rounded-xl border border-neutral-800 bg-neutral-900/60";
  const headingColor = isLight ? "text-slate-900" : "text-neutral-50";
  const bodyColor = isLight ? "text-slate-700" : "text-neutral-300";
  const enterKeysLabel = copy.shortcutHint?.enterKeys ?? "F / Space";
  const escapeKeyLabel = copy.shortcutHint?.escapeKey ?? "Esc";

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    if (!container || !logo) return;

    let x = container.clientWidth / 3;
    let y = container.clientHeight / 3;
    let vx = 2.4;
    let vy = 2.1;
    let frame = 0;

    logo.style.transform = `translate(${x}px, ${y}px)`;

    const step = () => {
      const maxX = container.clientWidth - logo.offsetWidth;
      const maxY = container.clientHeight - logo.offsetHeight;

      x += vx * speedRef.current;
      y += vy * speedRef.current;

      let bounced = false;
      if (x <= 0 || x >= maxX) {
        vx = -vx;
        x = Math.max(0, Math.min(x, maxX));
        bounced = true;
      }
      if (y <= 0 || y >= maxY) {
        vy = -vy;
        y = Math.max(0, Math.min(y, maxY));
        bounced = true;
      }

      logo.style.transform = `translate(${x}px, ${y}px)`;
      if (bounced && colorModeRef.current === "rotate") {
        setBounceColor((prev) => nextColor(prev));
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    const handleResize = () => {
      const maxX = container.clientWidth - logo.offsetWidth;
      const maxY = container.clientHeight - logo.offsetHeight;
      x = Math.min(x, maxX);
      y = Math.min(y, maxY);
      logo.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("resize", handleResize);
    const onFullscreenChange = () => {
      const entered = document.fullscreenElement === container;
      setIsFullscreen(entered);
      if (entered) {
        setShowScrollHint(true);
        setTimeout(() => setShowScrollHint(false), 2500);
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      el.requestFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!document.fullscreenElement) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? -1 : 1;
      if (e.shiftKey) {
        setSpeedUnits((prev) =>
          Math.min(SPEED_MAX, Math.max(SPEED_MIN, prev + delta * SPEED_STEP * 5))
        );
      } else {
        setSizePercent((prev) => Math.min(300, Math.max(60, prev + delta * 5)));
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "f" || e.key === "F" || e.code === "Space") {
        e.preventDefault();
        toggleFullscreen();
      }
      if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`flex min-h-screen flex-col ${pageBg}`}>
      <header
        className={`border-b px-4 py-3 text-sm ${
          isLight ? "border-slate-200 bg-white/80 shadow-sm" : "border-neutral-800"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-1 sm:px-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h1 className="text-base font-semibold">{copy.h1}</h1>
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <p className={`text-xs ${isLight ? "text-slate-500" : "text-neutral-400"}`}>
              {copy.subtitle}
            </p>
            <div className="text-xs text-neutral-400 leading-5 sm:text-right shrink-0">
              <div>
                <span className="font-semibold text-neutral-200">{enterKeysLabel}</span>{" "}
                – {copy.shortcutHint?.enter ?? "enter fullscreen"}
              </div>
              <div>
                <span className="font-semibold text-neutral-200">{escapeKeyLabel}</span>{" "}
                – {copy.shortcutHint?.exit ?? "exit fullscreen"}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full flex-1 flex-col gap-4 p-4 lg:max-w-6xl">
        {/* Canvas */}
        <div
          className={`relative w-full cursor-pointer overflow-hidden ${
            isFullscreen ? "rounded-none border-0" : `${cardBase} shadow-inner`
          } min-h-[320px] sm:min-h-[480px]`}
          ref={containerRef}
          onClick={toggleFullscreen}
          style={{ backgroundColor: "#000" }}
        >
          <div
            className="pointer-events-none absolute inset-0 flex items-end justify-center pb-10 z-10 transition-opacity duration-700"
            style={{ opacity: showScrollHint ? 1 : 0 }}
          >
            <div className="flex flex-col items-center gap-1 rounded-xl bg-black/60 px-5 py-3 text-xs text-white backdrop-blur-sm">
              <span><span className="font-semibold">Scroll</span> – resize logo</span>
              <span><span className="font-semibold">Shift + Scroll</span> – change speed</span>
            </div>
          </div>

          <div
            ref={logoRef}
            className="absolute left-0 top-0"
            style={{
              width: `${BASE_WIDTH * (sizePercent / 100)}px`,
              height: `${BASE_HEIGHT * (sizePercent / 100)}px`,
            }}
          >
            <div
              aria-label="DVD logo"
              role="img"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: activeColor,
                maskImage: `url('${activeMaskSrc}')`,
                WebkitMaskImage: `url('${activeMaskSrc}')`,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            />
          </div>
        </div>

        {/* Controls — 3 columns: logo | color | size+speed */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Logo picker */}
          <div className={`${cardBase} p-4 flex flex-col`}>
            <div className="mb-3 text-sm font-medium">{copy.labels.logo}</div>
            <div className="flex gap-2 flex-1">
              {LOGOS.map((logo) => {
                const active = logo.id === logoId;
                return (
                  <button
                    key={logo.id}
                    onClick={() => setLogoId(logo.id)}
                    title={logo.label}
                    className={`flex flex-1 items-center justify-center rounded-lg border p-3 transition min-w-0 ${
                      active
                        ? isLight
                          ? "border-sky-400 bg-sky-50 shadow-sm"
                          : "border-sky-500 bg-sky-950/40"
                        : isLight
                        ? "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        : "border-neutral-700 bg-neutral-800/50 hover:border-neutral-600"
                    }`}
                  >
                    <div
                      className="w-full h-12"
                      style={{
                        backgroundColor: activeColor,
                        maskImage: `url('${maskSrcs[logo.id]}')`,
                        WebkitMaskImage: `url('${maskSrcs[logo.id]}')`,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color picker */}
          <div className={`${cardBase} p-4 flex flex-col`}>
            <div className="mb-3 text-sm font-medium">{copy.labels.color}</div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex flex-wrap gap-3 justify-center">
                {/* Rotating (changes on bounce) */}
                <button
                  onClick={() => setColorMode("rotate")}
                  title="Rotating (changes on bounce)"
                  className={`h-9 w-9 rounded-full transition overflow-hidden ${
                    colorMode === "rotate"
                      ? "ring-2 ring-white ring-offset-2 ring-offset-neutral-900 scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  style={{
                    background:
                      "conic-gradient(#ef4444, #f97316, #facc15, #22c55e, #22d3ee, #3b82f6, #a855f7, #ec4899, #ef4444)",
                  }}
                />

                {/* Preset swatches */}
                {PRESET_COLORS.map((c) => {
                  const active = colorMode === "solid" && solidColor === c;
                  return (
                    <button
                      key={c}
                      onClick={() => { setColorMode("solid"); setSolidColor(c); }}
                      title={c}
                      className={`h-9 w-9 rounded-full transition ${
                        active
                          ? "ring-2 ring-white ring-offset-2 ring-offset-neutral-900 scale-110"
                          : "opacity-70 hover:opacity-100 hover:scale-105"
                      } ${c === "#ffffff" ? "shadow-[0_0_0_1px_rgba(255,255,255,0.3)]" : ""}`}
                      style={{ backgroundColor: c }}
                    />
                  );
                })}

                {/* Custom color picker */}
                <button
                  title="Custom color"
                  onClick={() => colorInputRef.current?.click()}
                  className={`h-9 w-9 rounded-full transition ${
                    customActive
                      ? "ring-2 ring-white ring-offset-2 ring-offset-neutral-900 scale-110"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                  style={{
                    background: customActive
                      ? solidColor
                      : "linear-gradient(135deg, #ef4444, #f97316, #facc15, #22c55e, #22d3ee, #3b82f6, #a855f7, #ec4899)",
                  }}
                />
                <input
                  ref={colorInputRef}
                  type="color"
                  value={customActive ? solidColor : "#888888"}
                  onChange={(e) => { setColorMode("solid"); setSolidColor(e.target.value); }}
                  style={{ position: "absolute", width: 0, height: 0, padding: 0, border: 0, opacity: 0 }}
                />

                {/* Cycle (continuous hue shift) */}
                <button
                  onClick={() => setColorMode("cycle")}
                  title="Cycle (continuous colour spectrum)"
                  className={`h-9 w-9 rounded-full transition ${
                    colorMode === "cycle"
                      ? "ring-2 ring-white ring-offset-2 ring-offset-neutral-900 scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: `hsl(${previewHue}, 100%, 55%)` }}
                />
              </div>
            </div>
          </div>

          {/* Logo size + Speed stacked */}
          <div className="flex flex-col gap-4">
            <div className={`${cardBase} p-4`}>
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="font-medium">{copy.labels.logoSize}</span>
                <span className={`text-xs ${isLight ? "text-slate-500" : "text-neutral-400"}`}>
                  {sizePercent}%
                </span>
              </div>
              <input
                type="range"
                min={60}
                max={300}
                value={sizePercent}
                onChange={(e) => setSizePercent(Number(e.target.value))}
                className="w-full slider-pill"
                style={{
                  ["--slider-accent" as string]: activeColor,
                  ["--slider-pos" as string]: `${sizeSliderPos}%`,
                } as React.CSSProperties}
              />
            </div>

            <div className={`${cardBase} p-4`}>
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="font-medium">{copy.labels.speed}</span>
                <span className={`text-xs ${isLight ? "text-slate-500" : "text-neutral-400"}`}>
                  {speed.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min={SPEED_MIN}
                max={SPEED_MAX}
                step={SPEED_STEP}
                value={speedUnits}
                onChange={(e) => setSpeedUnits(Number(e.target.value))}
                className="w-full slider-pill"
                style={{
                  ["--slider-accent" as string]: activeColor,
                  ["--slider-pos" as string]: `${speedSliderPos}%`,
                } as React.CSSProperties}
              />
            </div>
          </div>
        </div>

        {/* Info cards — same container as canvas/controls */}
        <div className="flex flex-col gap-4 text-sm pb-4">
          {copy.infoCards.map((card) => (
            <div key={card.title} className={`${cardBase} p-4`}>
              <h2 className={`text-lg font-semibold ${headingColor}`}>{card.title}</h2>
              <div className="mt-2 space-y-2">
                {"bullets" in card &&
                  card.bullets?.map((p) => (
                    <p key={p} className={bodyColor}>{p}</p>
                  ))}
                {"ordered" in card && card.ordered?.length ? (
                  <ol className={`list-decimal space-y-2 pl-5 ${bodyColor}`}>
                    {card.ordered.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : null}
                {"faqEntries" in card && card.faqEntries.length > 0 && (
                  <dl className="space-y-4">
                    {card.faqEntries.map(({ q, a }) => (
                      <div key={q}>
                        <dt className={`font-semibold ${headingColor}`}>{q}</dt>
                        <dd className={`mt-1 ${bodyColor}`}>{a}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
