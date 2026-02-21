import type { Metadata } from "next";
import PrivacyContent from "./components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy",
  description:
  "eclyraX maintains structured data handling boundaries and controlled access governance across operational environments. Privacy policy governing data collection, usage, retention, and access control in deterministic financial infrastructure.",
  keywords: [
  "privacy",
  "data collection",
  "data usage",
  "access control",
  "data retention",
  "privacy policy",
  "data handling",
  "controlled access governance",
  "operational environments"],

  openGraph: {
    title: "Privacy | eclyraX",
    description:
    "Structured data handling boundaries and controlled access governance across operational environments.",
    type: "website",
    url: "https://eclyrax.com/privacy",
    siteName: "eclyraX",
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1123a7243-1764783240184.png",
      width: 1200,
      height: 630,
      alt: "eclyraX Privacy Policy"
    }]

  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy | eclyraX",
    description:
    "Data handling boundaries and controlled access governance across operational environments.",
    images: ["https://eclyrax.com/og-image.jpg"],
    site: "@eclyraX",
    creator: "@eclyraX"
  },
  alternates: {
    canonical: "https://eclyrax.com/privacy"
  }
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}