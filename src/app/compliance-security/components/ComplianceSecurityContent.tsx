"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const controlEnforcementColumn1 = [
  "Deterministic state validation",
  "Pre-execution compliance gate",
  "Policy-versioned enforcement",
];

const controlEnforcementColumn2 = [
  "Append-only ledger",
  "Reconciliation verification",
  "Immutable audit trail",
];

const regulatoryItems = [
  "SOC 2 aligned controls",
  "ISO 27001 compatible practices",
  "Segregation of duties enforced",
  "Multi-entity isolation support",
  "Jurisdiction-aware validation logic",
];

const securityArchitectureItems = [
  "No outbound telemetry",
  "Kernel isolation boundaries",
  "Cryptographic integrity validation",
  "Access-controlled deployment",
  "Signed build verification",
];

export default function ComplianceSecurityContent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("active");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="relative z-10"
      style={{ background: "var(--color-background)" }}
    >
      {/* SECTION 01: Title & Subtext */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(80px, 12vw, 180px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal">01 / OVERVIEW</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h1
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-6"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  color: "var(--color-foreground)",
                }}
              >
                Compliance & Security
              </h1>
              <p
                className="text-base leading-relaxed reveal reveal-delay-2 max-w-3xl"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Operational controls, enforcement guarantees, and audit architecture governing <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: "#4A90E2" }}>X</span> deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Control Enforcement Model */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal">02 / CONTROL</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Control Enforcement Model
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Column 1 */}
                <div className="reveal reveal-delay-2">
                  <ul className="space-y-4">
                    {controlEnforcementColumn1.map((item, idx) => (
                      <li
                        key={`col1-${idx}`}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="font-mono-label text-[10px] pt-1 shrink-0"
                          style={{ color: "rgba(200,169,110,0.35)" }}
                        >
                          –
                        </span>
                        <span
                          className="font-serif-editorial text-base md:text-lg leading-relaxed"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="reveal reveal-delay-3">
                  <ul className="space-y-4">
                    {controlEnforcementColumn2.map((item, idx) => (
                      <li
                        key={`col2-${idx}`}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="font-mono-label text-[10px] pt-1 shrink-0"
                          style={{ color: "rgba(200,169,110,0.35)" }}
                        >
                          –
                        </span>
                        <span
                          className="font-serif-editorial text-base md:text-lg leading-relaxed"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Regulatory & Governance Alignment */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal">03 / REGULATORY</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Regulatory & Governance Alignment
              </h2>
              <ul className="space-y-4 max-w-3xl reveal reveal-delay-2">
                {regulatoryItems.map((item, idx) => (
                  <li
                    key={`reg-${idx}`}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="font-mono-label text-[10px] pt-1 shrink-0"
                      style={{ color: "rgba(200,169,110,0.35)" }}
                    >
                      –
                    </span>
                    <span
                      className="font-serif-editorial text-base md:text-lg leading-relaxed"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: Security Architecture */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal">04 / SECURITY</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Security Architecture
              </h2>
              <ul className="space-y-4 max-w-3xl reveal reveal-delay-2">
                {securityArchitectureItems.map((item, idx) => (
                  <li
                    key={`sec-${idx}`}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="font-mono-label text-[10px] pt-1 shrink-0"
                      style={{ color: "rgba(200,169,110,0.35)" }}
                    >
                      –
                    </span>
                    <span
                      className="font-serif-editorial text-base md:text-lg leading-relaxed"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: Security Reporting */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(80px, 12vw, 180px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal">05 / REPORTING</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-8"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Security Reporting
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed reveal reveal-delay-2 max-w-3xl"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Security concerns may be submitted through official governance channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 border-t"
        style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <span className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: "#4A90E2" }}>X</span>
              </span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <Link
                href="/"
                className="font-mono-label text-[11px] uppercase tracking-wide-plus transition-colors duration-200"
                style={{ color: "var(--color-muted-foreground)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-foreground)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted-foreground)";
                }}
              >
                Home
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center">
            <span
              className="text-xs"
              style={{ color: "rgba(122,134,150,0.4)" }}
            >
              © 2026 <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: "#4A90E2" }}>X</span>. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}