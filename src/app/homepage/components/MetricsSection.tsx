"use client";

import { useEffect, useRef } from "react";

interface GuaranteeItem {
  id: string;
  title: string;
  description: string;
}

const guarantees: GuaranteeItem[] = [
  {
    id: "guarantee-ledger",
    title: "Ledger Integrity",
    description: "Double-entry balanced · Append-only",
  },
  {
    id: "guarantee-state",
    title: "State Enforcement",
    description: "No skipped lifecycle transitions",
  },
  {
    id: "guarantee-validation",
    title: "Pre-Lock Validation",
    description: "Compliance before financial commitment",
  },
  {
    id: "guarantee-currency",
    title: "Multi-Currency Isolation",
    description: "No cross-currency balance mixing",
  },
  {
    id: "guarantee-reconciliation",
    title: "Reconciliation Control",
    description: "External settlement verified",
  },
  {
    id: "guarantee-audit",
    title: "Audit Traceability",
    description: "Immutable history · Policy-versioned",
  },
];

function GuaranteeCard({ guarantee }: { guarantee: GuaranteeItem }) {
  return (
    <div
      className="guarantee-card p-6 md:p-8 border transition-all duration-150 hover:brightness-110"
      style={{ borderColor: "var(--color-border)" }}
    >
      <p
        className="font-semibold text-base mb-3"
        style={{ color: "var(--color-foreground)", fontWeight: 500, letterSpacing: "-0.005em", lineHeight: "1.3" }}
      >
        {guarantee.title}
      </p>
      <p
        className="text-xs leading-relaxed"
        style={{ color: "var(--color-muted-foreground)", fontWeight: 400, lineHeight: "1.5", opacity: 0.65 }}
      >
        {guarantee.description}
      </p>
    </div>
  );
}

export default function MetricsSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-40 border-b"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface-1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>02 / PROOF</span>
          </div>
          <div className="col-span-1 md:col-span-6">
            <h2
              className="tracking-tight leading-tight reveal reveal-delay-1"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--color-foreground)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: "1.15" }}
            >
              Financial control is structural.
              <br />
              <span style={{ color: "var(--color-primary)" }}>Not statistical.</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-5 flex items-end">
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)", fontWeight: 400, lineHeight: "1.6", opacity: 0.85 }}
            >
              <span style={{ fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontWeight: 600, color: "#4A90E2" }}>X</span> enforces ledger correctness, state discipline, and reconciliation integrity at the system layer. Financial guarantees are embedded — not measured after failure.
            </p>
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--color-border)" }}>
          {guarantees.map((guarantee, idx) => (
            <div key={guarantee.id} className={`reveal reveal-delay-${(idx % 4) + 1}`}>
              <GuaranteeCard guarantee={guarantee} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}