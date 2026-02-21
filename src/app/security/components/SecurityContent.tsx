"use client";

import { useEffect, useRef } from "react";


const infrastructureItems = [
  "Environment isolation (production / staging segregation)",
  "Access-controlled deployment pipeline",
  "Signed build verification",
  "Restricted administrative access",
  "Deployment change logging",
];

const dataProtectionItems = [
  "Encryption in transit (TLS 1.2+)",
  "Encryption at rest",
  "No plaintext credential storage",
  "Controlled key management practices",
  "Strict access boundary enforcement",
];

const executionIntegrityItems = [
  "Deterministic transaction state validation",
  "No direct ledger mutation",
  "Append-only financial records",
  "Policy-bound state transitions",
  "Reconciliation exception monitoring",
];

const monitoringItems = [
  "Structured event logging",
  "Exception escalation protocols",
  "Access anomaly detection framework",
  "Governance-level review process",
];

export default function SecurityContent() {
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
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>01 / OVERVIEW</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h1
                className="tracking-tight leading-tight reveal reveal-delay-1 mb-6"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  color: "var(--color-foreground)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: "1.05"
                }}
              >
                Security Architecture
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed reveal reveal-delay-2 max-w-3xl"
                style={{ color: "var(--color-muted-foreground)", fontWeight: 400, lineHeight: "1.6", opacity: 0.85 }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: "#4A90E2" }}>X</span> enforces structured system integrity across infrastructure, execution layers, and operational access controls.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 02: Infrastructure Security */}
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
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>02 / INFRASTRUCTURE</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  lineHeight: "1.15"
                }}
              >
                Infrastructure Controls
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {infrastructureItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 03: Data Protection */}
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
              <span className="section-label reveal">03 / DATA</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Data Security Controls
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {dataProtectionItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 04: Execution Integrity */}
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
              <span className="section-label reveal">04 / EXECUTION</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Execution Safeguards
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {executionIntegrityItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 05: Security Monitoring */}
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
              <span className="section-label reveal">05 / MONITORING</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Monitoring & Incident Management
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {monitoringItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 06: Responsible Disclosure */}
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
              <span className="section-label reveal">06 / REPORTING</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial font-light tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--color-foreground)",
                }}
              >
                Security Reporting
              </h2>
              <p
                className="text-base leading-relaxed reveal reveal-delay-2 max-w-3xl"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Security concerns may be submitted through official governance channels for structured review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}