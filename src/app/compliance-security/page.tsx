import type { Metadata } from "next";
import ComplianceSecurityContent from "./components/ComplianceSecurityContent";

export const metadata: Metadata = {
  title: "Compliance & Security — eclyraX",
  description:
    "Operational controls, enforcement guarantees, and audit architecture governing eclyraX deployments.",
  keywords: [
    "compliance",
    "security",
    "audit architecture",
    "SOC 2",
    "ISO 27001",
    "control enforcement",
    "regulatory alignment",
  ],
  openGraph: {
    title: "Compliance & Security — eclyraX",
    description:
      "Operational controls, enforcement guarantees, and audit architecture governing eclyraX deployments.",
    type: "website",
  },
};

export default function ComplianceSecurityPage() {
  return <ComplianceSecurityContent />;
}