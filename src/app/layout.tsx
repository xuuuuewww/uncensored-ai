import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const GA_ID = "G-KC7L5R9H8F";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://uncensored-ai.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Free Uncensored AI Generator – Unfiltered AI Chat, Image Generator & Image-to-Video Tool",
  description:
    "Use Uncensored AI for unfiltered AI chat, an uncensored AI image generator, and uncensored image-to-video AI—fewer refusals, fast creation, more control.",
  keywords: [
    "uncensored AI",
    "AI image generator",
    "AI video generator",
    "unfiltered AI chat",
    "image to video AI",
    "uncensored AI chat",
    "free AI generator",
  ],
  authors: [{ name: "Uncensored AI", url: siteUrl }],
  creator: "Uncensored AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Uncensored AI",
    title: "Free Uncensored AI Generator – Unfiltered AI Chat, Image Generator & Image-to-Video Tool",
    description:
      "Use Uncensored AI for unfiltered AI chat, an uncensored AI image generator, and uncensored image-to-video AI—fewer refusals, fast creation, more control.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Uncensored AI Generator – Unfiltered AI Chat, Image Generator & Image-to-Video Tool",
    description:
      "Use Uncensored AI for unfiltered AI chat, an uncensored AI image generator, and uncensored image-to-video AI—fewer refusals, fast creation, more control.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "mLytXPrB4Xo26R5ehxC62_EQrUHt1A7fT0dYVDBf4sI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark landing landing-scrollbar" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
