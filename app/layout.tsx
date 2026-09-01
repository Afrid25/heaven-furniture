import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3F0E9",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${site.name} | Bespoke Luxury Furniture & Interior Styling in Chattogram`,
  description:
    "Discover bespoke luxury furniture, solid seasoned hardwood dining, master bedroom suites, and architectural interior styling by Heaven Furniture Mart. Visit our flagship showroom on Agrabad Access Road, Chattogram.",
  keywords: [
    "Heaven Furniture Mart",
    "Luxury Furniture Chattogram",
    "Bespoke Furniture Bangladesh",
    "Custom Solid Teak Furniture",
    "Agrabad Access Road Showroom",
    "Luxury Sofa Sets Chattogram",
    "Master Bedroom Furniture",
    "Executive Office Furniture",
  ],
  authors: [{ name: site.md, url: site.maps }],
  creator: site.name,
  publisher: site.name,
  metadataBase: new URL("https://heavenfurnituremart.com"),
  openGraph: {
    title: `${site.name} — Designed. Crafted. Customized.`,
    description:
      "Crafting bespoke luxury furniture for inspired living in Chattogram, Bangladesh. Explore living suites, dining collections, and custom interior cabinetry.",
    url: "https://heavenfurnituremart.com",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1920,
        height: 1440,
        alt: "Heaven Furniture Mart Luxury Showroom Living Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Luxury Bespoke Furniture`,
    description: "Crafting bespoke luxury for inspired living. Flagship showroom on Agrabad Access Road, Chattogram.",
    images: ["/images/hero.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon-256.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-ivory text-charcoal font-sans min-h-screen antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
