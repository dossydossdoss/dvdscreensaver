"use client";

import dynamic from "next/dynamic";
import type { DvdCopy } from "./components/DvdBounce";

const DvdBounce = dynamic(
  () => import("./components/DvdBounce").then((m) => m.DvdBounce),
  { ssr: false }
);

const copy: DvdCopy = {
  h1: "DVD Screensaver – Classic Bouncing DVD Logo",
  subtitle:
    "A fullscreen version of the iconic DVD screensaver, complete with adjustable speed and logo size. Smooth motion, edge-bounce behaviour, and full nostalgic charm. Directly in your browser.",
  labels: { logoSize: "Logo size", speed: "Speed", logo: "Logo style", color: "Color" },
  shortcutHint: {
    enterKeys: "F / Space",
    escapeKey: "Esc",
    enter: "enter fullscreen",
    exit: "exit fullscreen",
  },
  infoCards: [
    {
      title: "What the DVD Screensaver Does",
      bullets: [
        "Displays the classic bouncing DVD logo screensaver",
        "Choose from 3 different DVD logo styles using the logo picker",
        "Lets you change movement speed (slow → fast)",
        "Lets you change the logo size (small → large)",
        "Bounces off screen edges with smooth directional changes",
        "Works on any desktop, laptop, TV, or projector",
        "Perfect for ambience, fun, and display testing",
      ],
    },
    {
      title: "Use Cases",
      bullets: [
        "Burn-In Prevention: constant motion helps prevent static-image burn-in on OLED/AMOLED screens.",
        "Motion & Display Testing: check panel uniformity, motion blur, refresh rate issues, and pixel response.",
        "Background Ambience: fun, dynamic background for parties, offices, events, and streams.",
        "Retro Aesthetic: recreate the classic DVD screensaver feel. Nostalgic and satisfying.",
        "Entertainment: see if the logo will hit the corner (life's small joy).",
      ],
    },
    {
      title: "How to Use",
      ordered: [
        "Choose your logo style from the 3 options.",
        "Choose your speed (slow / medium / fast).",
        "Choose your logo size (small / medium / large).",
        "Animation runs automatically; adjust any option anytime.",
        "Enter fullscreen with F / Space or click the canvas.",
        "Press Esc to exit fullscreen at any time.",
      ],
    },
    {
      title: "Frequently Asked Questions",
      faqEntries: [
        {
          q: "What is the DVD screensaver?",
          a: "The DVD screensaver displays the classic bouncing DVD logo, the same animation found on DVD players and early Windows Media Player. The logo moves around the screen and changes color each time it bounces off an edge.",
        },
        {
          q: "Can the DVD logo hit the corner?",
          a: "Yes. Given enough time (and the right trajectory), the logo will land exactly in a corner. A famously satisfying moment. Adjust the speed slider to make it happen faster or slower.",
        },
        {
          q: "Does the DVD screensaver prevent screen burn-in?",
          a: "Yes. Constant motion prevents any single image from being static long enough to cause burn-in, making it useful for OLED and AMOLED displays.",
        },
        {
          q: "Is the DVD screensaver free to use?",
          a: "Yes, completely free. No download or account required. Works in any modern browser on desktop, laptop, TV, or projector.",
        },
        {
          q: "Can I adjust the speed and logo size?",
          a: "Yes. Use the sliders to control movement speed (slow to fast) and logo size (small to large) at any time during the animation.",
        },
      ],
    },
  ],
};

export default function DvdPage() {
  return <DvdBounce copy={copy} />;
}
