import DvdPage from "./DvdPage";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DVD Screensaver",
    "url": "https://dvdscreensaver.app",
    "description": "Free online bouncing DVD logo screensaver simulator. Watch the DVD logo bounce off edges, hit the corner, and change colour. Adjust speed and size. No download needed.",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "featureList": [
      "Bouncing DVD logo animation",
      "Color change on each bounce",
      "3 DVD logo styles",
      "Adjustable speed",
      "Adjustable logo size",
      "Fullscreen mode",
      "Custom color picker",
      "Continuous color cycle mode",
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "creator": {
      "@type": "Organization",
      "name": "DVD Screensaver",
      "url": "https://dvdscreensaver.app",
      "email": "hello@dvdscreensaver.app",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DVD Screensaver",
    "url": "https://dvdscreensaver.app",
    "description": "Free bouncing DVD logo screensaver simulator. No download needed.",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Any",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the DVD screensaver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The DVD screensaver is the classic bouncing DVD logo animation found on DVD players, DVD video players, and early Windows Media Player. The logo moves around the screen and changes colour each time it bounces off an edge. This site is a free online DVD screensaver simulator — no download needed.",
        },
      },
      {
        "@type": "Question",
        "name": "Can the DVD screensaver hit the corner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Given enough time (and the right trajectory), the bouncing DVD logo screensaver will hit the corner exactly. A famously satisfying moment. Adjust the speed slider to make it happen faster or slower.",
        },
      },
      {
        "@type": "Question",
        "name": "Does the DVD screensaver prevent screen burn-in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Constant motion prevents any single image from being static long enough to cause burn-in, making it useful for OLED and AMOLED displays.",
        },
      },
      {
        "@type": "Question",
        "name": "Is this DVD screensaver website free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely free. No download or account required. Works in any modern browser on desktop, laptop, TV, or projector.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I adjust the speed and logo size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Use the sliders to control movement speed (slow to fast) and logo size (small to large) at any time during the animation.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the DVD Screensaver",
    "description": "How to run the free online DVD screensaver simulator.",
    "totalTime": "PT1M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose a logo style",
        "text": "Choose your DVD logo style from the 3 options available in the Logo style panel.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Set the speed",
        "text": "Adjust the Speed slider to set the movement speed from slow to fast.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Set the logo size",
        "text": "Adjust the Logo size slider to set the bouncing logo size from small to large.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Watch the animation",
        "text": "The DVD logo animation runs automatically. Adjust any option at any time.",
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Enter fullscreen",
        "text": "Press F or Space, or click the canvas, to enter fullscreen mode.",
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Exit fullscreen",
        "text": "Press Esc to exit fullscreen at any time.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "DVD Screensaver",
        "item": "https://dvdscreensaver.app",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DvdPage />
    </>
  );
}
