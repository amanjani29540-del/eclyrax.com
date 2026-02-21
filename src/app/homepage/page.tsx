import type { Metadata } from "next";
import HomepageInteractive from "./components/HomepageInteractive";

export const metadata: Metadata = {
  title: "eclyraX | Financial control Infrastructure",
  description:
  "Deterministic financial state infrastructure for institutional control. Policy-enforced execution, ledger integrity.",
  keywords: [
  "financial infrastructure",
  "deterministic execution",
  "financial control layer",
  "ledger integrity",
  "compliance infrastructure",
  "policy enforcement",
  "institutional financial systems",
  "financial state management",
  "compliance-gated execution",
  "enterprise finance stack"],

  openGraph: {
    title: "eclyraX | Financial control Infrastructure",
    description:
    "Deterministic financial state infrastructure for institutional control. Policy-enforced execution, ledger integrity.",
    type: "website",
    url: "https://eclyrax.com",
    siteName: "eclyraX",
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_12b7f78e6-1767048391708.png",
      width: 1200,
      height: 630,
      alt: "eclyraX - Financial Control Infrastructure"
    }]

  },
  twitter: {
    card: "summary_large_image",
    title: "eclyraX | Financial Control Infrastructure",
    description:
    "Deterministic financial state infrastructure. Policy-enforced execution. Institutional-grade financial control layer.",
    images: ["https://eclyrax.com/og.jpg"],
    site: "@eclyraX",
    creator: "@eclyraX"
  },
  alternates: {
    canonical: "https://eclyrax.com"
  }
};

export default function Page() {
  return <HomepageInteractive />;
}