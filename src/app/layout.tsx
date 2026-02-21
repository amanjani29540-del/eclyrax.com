import type { Metadata, Viewport } from "next";
import "@/styles/index.css";
import "@/styles/tailwind.css";

import LayoutWrapper from "./components/LayoutWrapper";
import LayoutContent from "./components/LayoutContent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eclyrax.vercel.app"),

  title: "eclyraX - Financial Infrastructure",
  description:
    "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
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
        alt: "eclyraX - Financial Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "eclyraX - Financial Infrastructure",
    description:
      "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          <LayoutContent>{children}</LayoutContent>
        </LayoutWrapper>
      </body>
    </html>
  );
}