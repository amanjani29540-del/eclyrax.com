'use client';

import { useEffect, useRef } from 'react';

const modules = [
  {
    id: 'module-ledger',
    title: 'Ledger Core',
    desc: 'Double-entry enforced · Append-only · Multi-currency isolated',
  },
  {
    id: 'module-state',
    title: 'Transaction State Machine',
    desc: 'Lifecycle-controlled · Deterministic transitions',
  },
  {
    id: 'module-compliance',
    title: 'Compliance Gate',
    desc: 'Pre-lock validation · Risk and jurisdiction enforcement',
  },
  {
    id: 'module-execution',
    title: 'Execution Orchestration',
    desc: 'Provider abstraction · Failover sequencing',
  },
  {
    id: 'module-reconciliation',
    title: 'Reconciliation Engine',
    desc: 'Settlement validation · Exception-logged',
  },
  {
    id: 'module-audit',
    title: 'Audit Layer',
    desc: 'Immutable history · Policy-versioned decisions',
  },
];

export default function ArchitectureSection() {
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
    <section
      id="architecture"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-40 border-b"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-1">
            <span
              className="section-label reveal"
              style={{ fontWeight: 500, letterSpacing: '0.1em' }}
            >
              01 / ARCH
            </span>
          </div>
          <div className="col-span-1 md:col-span-7">
            <h2
              className="tracking-tight leading-tight reveal reveal-delay-1"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: 'var(--color-foreground)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: '1.15',
              }}
            >
              Built from financial first principles.{' '}
              <span style={{ color: 'var(--color-primary)' }}>Not layered on gateways.</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-4 flex items-end">
            <p
              className="text-base leading-relaxed"
              style={{
                color: 'var(--color-muted-foreground)',
                fontWeight: 400,
                lineHeight: '1.6',
                opacity: 0.85,
              }}
            >
              <span style={{ fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span>
              <span style={{ fontWeight: 600, color: '#4A90E2' }}>X</span> enforces ledger
              integrity, state-controlled execution, and compliance-gated commitment at the system
              layer. Financial correctness is structural — not assumed.
            </p>
          </div>
        </div>

        {/* Financial Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules?.map((module, idx) => (
            <div
              key={module?.id}
              className={`reveal reveal-delay-${idx + 1} rounded p-6 transition-all duration-150 hover:brightness-110`}
              style={{
                background: 'var(--color-surface-1)',
                border: '1px solid var(--color-border)',
              }}
            >
              {module?.label && (
                <span
                  className="font-mono-label text-xs uppercase mb-2 block"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  {module.label}
                </span>
              )}
              <h3
                className="font-semibold text-base mb-3"
                style={{
                  color: 'var(--color-foreground)',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  lineHeight: '1.3',
                }}
              >
                {module?.title}
              </h3>
              {module?.desc && (
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: 'var(--color-muted-foreground)',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    opacity: 0.65,
                  }}
                >
                  {module?.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
