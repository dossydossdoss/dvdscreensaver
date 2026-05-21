import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "DVD Screensaver – Bouncing DVD Logo Simulator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Colour dots suggesting the bounce colours */}
        <div style={{ display: "flex", gap: 16, marginBottom: 48 }}>
          {["#22d3ee", "#22c55e", "#f97316", "#a855f7", "#facc15", "#ef4444", "#38bdf8"].map(
            (c) => (
              <div
                key={c}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.8,
                }}
              />
            )
          )}
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
            display: "flex",
          }}
        >
          DVD
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: "#f97316",
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginTop: 8,
            display: "flex",
          }}
        >
          Screensaver
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#a3a3a3",
            marginTop: 32,
            display: "flex",
          }}
        >
          Free bouncing DVD logo simulator — no download needed
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#525252",
            display: "flex",
          }}
        >
          dvdscreensaver.app
        </div>
      </div>
    ),
    { ...size }
  );
}
