import type { Metadata, Viewport } from "next";
import "@/styles/index.css";
import "@/styles/tailwind.css";
import React, { useState } from "react";
import LayoutWrapper from "./components/LayoutWrapper";
import AccessInfrastructureModal from "./components/AccessInfrastructureModal";
import NavBar from '@/app/components/NavBar';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  title: "eclyraX - Financial Infrastructure",
  description:
  "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
  metadataBase: new URL("https://eclyrax.com"),
  icons: {
    icon: [
    { url: '/favicon.svg', type: 'image/svg+xml' },
    { url: '/icon.svg', type: 'image/svg+xml' }],

    apple: '/apple-icon.png'
  },
  openGraph: {
    title: "eclyraX - Financial Infrastructure",
    description:
    "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
    url: "https://eclyrax.vercel.app",
    siteName: "eclyraX",
    images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "eclyraX - Financial Infrastructure"
    }],

    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "eclyraX - Financial Infrastructure",
    description:
    "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children

}: {children: React.ReactNode;}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "eclyraX",
    url: "https://eclyrax.com",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15c90ab09-1771598644375.png",
    description:
    "Deterministic financial state infrastructure for institutional control. Policy-enforced execution, ledger integrity.",
    sameAs: []
  };

  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Optimized font loading with display swap */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 100 900;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }} />
</head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
</body>
    </html>);

}

function LayoutContent({ children }: {children: React.ReactNode;}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <NavBar onOpenModal={() => setIsModalOpen(true)} />
      {children}
      <AccessInfrastructureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>);

}