'use client';

import { useEffect, useRef } from 'react';

const ownershipItems = [
  'Architecture governance authority defined',
  'Deployment approval structure enforced',
  'Administrative access restricted by role',
  'Policy modification requires structured review',
  'Ledger mutation pathways restricted by design',
];

const riskItems = [
  'Pre-deployment review controls',
  'Change impact validation procedures',
  'Execution boundary enforcement',
  'Operational anomaly escalation framework',
  'Controlled rollback mechanisms',
];

const policyItems = [
  'Version-controlled policy enforcement',
  'Deterministic state validation',
  'Pre-commit compliance gating',
  'Audit-layer verification',
  'Structured reconciliation monitoring',
];

const accountabilityItems = [
  'Immutable audit trace',
  'Administrative event logging',
  'Financial state transition traceability',
  'Governance-level review capability',
  'Defined operational responsibility mapping',
];

export default function GovernanceContent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('active');
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
      style={{ background: 'var(--color-background)' }}
    >
      {/* SECTION 01: OVERVIEW */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: 'var(--color-border)',
          paddingTop: 'clamp(80px, 12vw, 180px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span
                className="section-label reveal"
                style={{ fontWeight: 500, letterSpacing: '0.1em' }}
              >
                01 / OVERVIEW
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="text-4xl md:text-5xl mb-6 reveal"
                style={{
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.05',
                }}
              >
                Governance Framework
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.005em',
                  }}
                >
                  eclyra
                </span>
                <span
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#4A90E2' }}
                >
                  X
                </span>{' '}
                operates under a defined control structure governing policy enforcement, operational
                integrity, and accountability across financial state transitions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 02: OWNERSHIP */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: 'var(--color-border)',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span
                className="section-label reveal"
                style={{ fontWeight: 500, letterSpacing: '0.1em' }}
              >
                02 / OWNERSHIP
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="text-3xl md:text-4xl mb-6 reveal"
                style={{
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Control Ownership
              </h2>
              <ul className="space-y-3">
                {ownershipItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 03: RISK */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: 'var(--color-border)',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span
                className="section-label reveal"
                style={{ fontWeight: 500, letterSpacing: '0.1em' }}
              >
                03 / RISK
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="text-3xl md:text-4xl mb-6 reveal"
                style={{
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Risk Supervision
              </h2>
              <ul className="space-y-3">
                {riskItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 04: POLICY */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: 'var(--color-border)',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span
                className="section-label reveal"
                style={{ fontWeight: 500, letterSpacing: '0.1em' }}
              >
                04 / POLICY
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="text-3xl md:text-4xl mb-6 reveal"
                style={{
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Policy Governance
              </h2>
              <ul className="space-y-3">
                {policyItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 05: ACCOUNTABILITY */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: 'var(--color-border)',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span
                className="section-label reveal"
                style={{ fontWeight: 500, letterSpacing: '0.1em' }}
              >
                05 / ACCOUNTABILITY
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="text-3xl md:text-4xl mb-6 reveal"
                style={{
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Accountability & Oversight
              </h2>
              <ul className="space-y-3">
                {accountabilityItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
