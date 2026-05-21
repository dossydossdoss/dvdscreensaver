import DvdPage from "./DvdPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "DVD Screensaver",
  "url": "https://dvdscreensaver.app",
  "description": "Free online bouncing DVD logo screensaver simulator. Watch the DVD logo bounce off edges, hit the corner, and change colour. Adjust speed and size. No download needed.",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "DVD Screensaver",
    "email": "hello@dvdscreensaver.app"
  }
};

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
