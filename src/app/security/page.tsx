import type { Metadata } from "next";
import SecurityContent from "./components/SecurityContent";

export const metadata: Metadata = {
  title: "Security - eclyraX",
  description:
  "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
  openGraph: {
    title: "Security - eclyraX",
    description:
    "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
    url: "https://eclyrax.com/security",
    siteName: "eclyraX",
    images: [
    {
      url: "https://eclyrax.com/og.jpg",
      width: 1200,
      height: 630,
      alt: "eclyraX Security - Financial Infrastructure"
    }],

    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Security - eclyraX",
    description:
    "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
    images: ["https://eclyrax.com/og.jpg"]
  }
};

export default function SecurityPage() {
  return <SecurityContent />;
}