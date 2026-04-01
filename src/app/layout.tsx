import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Amélioration Habitat Conseil | Panneaux solaires Occitanie",
    template: "%s | AHC",
  },
  description:
    "Installateur local spécialiste en Occitanie. Panneaux photovoltaïques, batterie virtuelle, jusqu'à 95% d'autoconsommation. Devis gratuit.",
  metadataBase: new URL("https://amelioration-habitat-conseil.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Amélioration Habitat Conseil",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "https://storage.googleapis.com/gpt-engineer-file-uploads/7rDKIzga4GcmwRvVJVEGPVPlTpC3/uploads/1770743442326-ahc_logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://geo.api.gouv.fr"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://ipapi.co"
          crossOrigin="anonymous"
        />
      </head>
      <GoogleTagManager gtmId="GTM-M5S7K9S" />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5S7K9S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>{children}</Providers>
        {/* Google Ads gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11176357292"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11176357292');
        `}</Script>
        {/* CNVTR script */}
        <Script
          src="//cdn.cnvtr.app/clients/amelioration-habitat-conseil/iframe-prepopulator.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
