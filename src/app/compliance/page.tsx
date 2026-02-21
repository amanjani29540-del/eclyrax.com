import type { Metadata } from "next";
import ComplianceContent from "./components/ComplianceContent";

export const metadata: Metadata = {
  title: "Compliance Alignment",
  description:
  "eclyraX is architected to align with regulatory and financial control expectations across jurisdictions and enterprise environments. Compliance-gated execution ensuring adherence to SOC 2, ISO 27001, and institutional financial control standards.",
  keywords: [
  "compliance",
  "regulatory alignment",
  "SOC 2",
  "ISO 27001",
  "financial control",
  "audit",
  "policy governance",
  "compliance-gated execution",
  "regulatory framework",
  "institutional compliance"],

  openGraph: {
    title: "Compliance Alignment | eclyraX",
    description:
    "Architected to align with regulatory and financial control expectations across jurisdictions and enterprise environments.",
    type: "website",
    url: "https://eclyrax.com/compliance",
    siteName: "eclyraX",
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_12b50d6d1-1766384236732.png",
      width: 1200,
      height: 630,
      alt: "eclyraX Compliance"
    }]

  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance Alignment | eclyraX",
    description:
    "Regulatory and financial control alignment across jurisdictions and enterprise environments.",
    images: ["https://eclyrax.com/og-image.jpg"],
    site: "@eclyraX",
    creator: "@eclyraX"
  },
  alternates: {
    canonical: "https://eclyrax.com/compliance"
  }
};

export default function CompliancePage() {
  return <ComplianceContent />;
}