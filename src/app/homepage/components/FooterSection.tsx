import Link from "next/link";

const footerLinks = [
  { id: "fl-docs", label: "Documentation", href: "/documentation" },
  { id: "fl-manifesto", label: "Manifesto", href: "/manifesto" },
  { id: "fl-governance", label: "Governance", href: "/governance" },
  { id: "fl-compliance", label: "Compliance", href: "/compliance" },
  { id: "fl-security", label: "Security", href: "/security" },
  { id: "fl-disclosure", label: "Responsible Disclosure", href: "/responsible-disclosure" },
  { id: "fl-privacy", label: "Privacy", href: "/privacy" },
  { id: "fl-terms", label: "Terms", href: "/terms" },
];

export default function FooterSection() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo with eclyraX branding */}
          <div className="flex items-center">
            <span className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>
              <span style={{ fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontWeight: 600, color: "#4A90E2" }}>X</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-[11px] uppercase tracking-wide-plus transition-colors duration-200"
                style={{ color: "var(--color-muted-foreground)", fontWeight: 500, letterSpacing: "0.06em" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-foreground)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted-foreground)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright micro-text */}
        <div className="mt-8 text-center">
          <span
            className="text-xs"
            style={{ color: "rgba(122,134,150,0.4)", fontWeight: 400 }}
          >
            © 2026 <span style={{ fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontWeight: 600, color: "#4A90E2" }}>X</span>. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}