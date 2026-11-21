import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hashmi Car Recovery & Towing | Sahianwala Interchange",
  description:
    "Professional car recovery and Towing from Sahianwala Interchange. Call 0300 1658231 or WhatsApp for fast roadside recovery across Pakistan.",
  icons: {
    icon: "/images/mylogo.jpg",
    apple: "/images/mylogo.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Hashmi Car Recovery & Vehicle Transport",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dar-ul-Ahsan Toll Plaza, Sahianwala Interchange",
    addressLocality: "Sahianwala",
    addressCountry: "PK",
  },
  telephone: [
    "+923001658231",
    "+923450096028",
    "+923014012700",
    "+923714451352",
  ],
  url: "[TO CONFIRM]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
