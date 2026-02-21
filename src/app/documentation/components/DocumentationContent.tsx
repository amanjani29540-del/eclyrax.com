"use client";

import { useEffect, useRef } from "react";


const architectureItems = [
  "Core infrastructure design specifications",
  "Ledger enforcement model documentation",
  "Deterministic state transition definitions",
  "Policy-bound execution architecture",
  "Integration structure mapping",
];

const controlItems = [
  "Deployment governance procedures",
  "Access authorization structure",
  "Administrative control protocols",
  "Change logging standards",
  "Review and approval workflow documentation",
];

const auditItems = [
  "Immutable financial state records",
  "Policy version tracking",
  "Exception reporting logs",
  "Reconciliation validation records",
  "Governance review documentation",
];

export default function DocumentationContent() {
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
      {/* SECTION 01: Overview */}
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
                Documentation Framework
              </h1>
              <p
                className="text-base leading-relaxed reveal reveal-delay-2 max-w-3xl"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: "#4A90E2" }}>X</span> maintains structured architectural and operational documentation governing infrastructure behavior, execution controls, and financial state integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 02: Architecture */}
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
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>02 / ARCHITECTURE</span>
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
                System Architecture Records
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {architectureItems?.map((item, idx) => (
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
      {/* SECTION 03: Control */}
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
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>03 / CONTROL</span>
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
                Operational Control Documentation
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {controlItems?.map((item, idx) => (
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
      {/* SECTION 04: Audit */}
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
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>04 / AUDIT</span>
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
                Audit & Trace Records
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {auditItems?.map((item, idx) => (
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
      {/* SECTION 05: Access */}
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
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>05 / ACCESS</span>
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
                Documentation Access
              </h2>
              <p
                className="text-base leading-relaxed reveal reveal-delay-2 max-w-3xl"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Architecture and control documentation is available through structured governance review channels. Access is granted based on operational relevance and control alignment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}