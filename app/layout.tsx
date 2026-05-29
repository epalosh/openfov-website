import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://openfov.com";
const SITE_TITLE = "OpenFOV — Webcam head tracking for iRacing";
const SITE_DESCRIPTION =
  "OpenFOV uses your webcam to control iRacing's in-game FOV. Unlocks VR-style functionality for your monitor!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — OpenFOV",
  },
  description: SITE_DESCRIPTION,
  applicationName: "OpenFOV",
  generator: "Next.js",
  keywords: [
    "OpenFOV",
    "iRacing head tracking",
    "head tracking for iRacing",
    "webcam head tracking iRacing",
    "iRacing webcam",
    "webcam head tracker iRacing",
    "track head with webcam iRacing",
    "iRacing FOV",
    "iRacing FOV control",
    "iRacing camera control",
    "iRacing mod",
    "iRacing mods",
    "open source iRacing",
    "open source iRacing mod",
    "VR mod iRacing",
    "VR-style iRacing",
    "TrackIR alternative",
    "TrackIR alternative free",
    "OpenTrack iRacing",
    "free head tracking iRacing",
    "iRacing immersion",
    "sim racing head tracking",
    "sim racing webcam",
    "head tracker for sim racing",
    "iRacing software",
    "iRacing Windows app",
  ],
  authors: [{ name: "Ethan Palosh", url: "https://github.com/epalosh" }],
  creator: "Ethan Palosh",
  publisher: "OpenFOV",
  category: "Software",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "OpenFOV",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/link-preview.png",
        width: 1280,
        height: 640,
        alt: "OpenFOV — Webcam head tracking for iRacing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/link-preview.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "OpenFOV",
      alternateName: "OpenFOV — Webcam head tracking for iRacing",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      applicationCategory: "GameApplication",
      applicationSubCategory: "Sim Racing Utility",
      operatingSystem: "Windows",
      softwareVersion: "0.2.1",
      license: "https://opensource.org/licenses/MIT",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Ethan Palosh",
        url: "https://github.com/epalosh",
      },
      downloadUrl: "https://github.com/epalosh/openfov/releases/latest",
      installUrl: "https://github.com/epalosh/openfov/releases/latest",
      codeRepository: "https://github.com/epalosh/openfov",
      sameAs: ["https://github.com/epalosh/openfov"],
      keywords:
        "iRacing, head tracking, webcam head tracking, OpenFOV, iRacing mod, open source iRacing, VR mod iRacing, TrackIR alternative, sim racing",
      featureList: [
        "Webcam-based head tracking for iRacing",
        "Real-time in-game FOV control",
        "VR-style immersion without a headset",
        "Open source, free, MIT licensed",
        "Windows native",
      ],
      image: `${SITE_URL}/link-preview.png`,
    },
    {
      "@type": "WebSite",
      name: "OpenFOV",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: {
        "@type": "Organization",
        name: "OpenFOV",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
    },
    {
      "@type": "Organization",
      name: "OpenFOV",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: ["https://github.com/epalosh/openfov"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="aurora" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
