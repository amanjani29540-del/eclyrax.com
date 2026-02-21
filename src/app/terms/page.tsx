import type { Metadata } from "next";
import TermsContent from "./components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
  "Use of eclyraX infrastructure is governed by structured operational, access, and compliance conditions. Terms of use defining permitted use, access conditions, liability, and operational governance for deterministic financial infrastructure.",
  keywords: [
  "terms of use",
  "permitted use",
  "access conditions",
  "liability",
  "terms modification",
  "operational governance",
  "compliance conditions",
  "infrastructure terms"],

  openGraph: {
    title: "Terms of Use | eclyraX",
    description:
    "Use of eclyraX infrastructure is governed by structured operational, access, and compliance conditions.",
    type: "website",
    url: "https://eclyrax.com/terms",
    siteName: "eclyraX",
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_17fe99f46-1765002520589.png",
      width: 1200,
      height: 630,
      alt: "eclyraX Terms of Use"
    }]

  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | eclyraX",
    description:
    "Structured operational, access, and compliance conditions governing infrastructure use.",
    images: ["https://eclyrax.com/og-image.jpg"],
    site: "@eclyraX",
    creator: "@eclyraX"
  },
  alternates: {
    canonical: "https://eclyrax.com/terms"
  }
};

export default function TermsPage() {
  return <TermsContent />;
}