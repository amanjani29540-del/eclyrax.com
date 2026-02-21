import type { Metadata } from "next";
import HomepageInteractive from "./components/HomepageInteractive";

export const metadata: Metadata = {
  title: "eclyraX - Financial Infrastructure",
  description:
  "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
  openGraph: {
    title: "eclyraX - Financial Infrastructure",
    description:
    "Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.",
    url: "https://eclyrax.com",
    siteName: "eclyraX",
    images: [
    {
      url: "https://eclyrax.com/og.jpg",
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
    images: ["https://eclyrax.com/og.jpg"]
  }
};

export default function Page() {
  return <HomepageInteractive />;
}