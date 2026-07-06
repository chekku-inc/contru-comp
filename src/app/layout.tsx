import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/config/site";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../../public/satoshi-webfont/Satoshi-Regular.woff", weight: "400" },
    { path: "../../public/satoshi-webfont/Satoshi-Medium.woff", weight: "500" },
    { path: "../../public/satoshi-webfont/Satoshi-Bold.woff", weight: "700" },
    { path: "../../public/satoshi-webfont/Satoshi-Black.woff", weight: "900" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const title = `${site.name} | Materiales de construcción en ${site.address.city}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "materiales de construcción",
    "ferretería",
    "cemento",
    "varilla",
    "bloque",
    "láminas",
    site.address.city,
    site.address.country,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    // La imagen (og:image y twitter:image) sale automáticamente de
    // src/app/opengraph-image.png — reemplace ese archivo para cambiarla.
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.openingHoursSpecification,
    sameAs: [site.social.facebook],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${satoshi.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
