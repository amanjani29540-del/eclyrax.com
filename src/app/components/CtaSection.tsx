'use client';

import { useEffect, useRef, memo } from 'react';

const marqueeItems = [
  { id: 'mq-kernel', label: 'LEDGER INTEGRITY' },
  { id: 'mq-zero', label: 'STATE ENFORCEMENT' },
  { id: 'mq-airgap', label: 'PRE-LOCK VALIDATION' },
  { id: 'mq-crypto', label: 'MULTI-CURRENCY ISOLATION' },
  { id: 'mq-tpm', label: 'PROVIDER ABSTRACTION' },
  { id: 'mq-repro', label: 'RECONCILIATION CONTROL' },
  { id: 'mq-audit', label: 'IMMUTABLE AUDIT TRAIL' },
  { id: 'mq-namespace', label: 'LEDGER INTEGRITY' },
  { id: 'mq-supply', label: 'STATE ENFORCEMENT' },
  { id: 'mq-selinux', label: 'PRE-LOCK VALIDATION' },
  { id: 'mq-secureboot', label: 'MULTI-CURRENCY ISOLATION' },
  { id: 'mq-memory', label: 'PROVIDER ABSTRACTION' },
];

function CtaSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative z-10 border-b"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-background)',
      }}
    >
      {/* Marquee Strip */}
      <div
        className="border-b py-5"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface-1)' }}
      >
        <div className="marquee-container">
          {[0, 1]?.map((trackIdx) => (
            <div
              key={`track-${trackIdx}`}
              className="marquee-track gap-16"
              aria-hidden={trackIdx === 1}
            >
              {marqueeItems?.map((item) => (
                <span
                  key={`${item?.id}-t${trackIdx}`}
                  className="text-[10px] uppercase tracking-ultra flex items-center gap-3 shrink-0"
                  style={{
                    color: 'var(--color-muted-foreground)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)', opacity: 0.6 }}>◈</span>
                  {item?.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* CTA Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Left: Copy */}
          <div className="col-span-1 md:col-span-7">
            <span
              className="section-label reveal block mb-8"
              style={{ fontWeight: 500, letterSpacing: '0.1em' }}
            >
              05 / ACCESS
            </span>
            <h2
              className="tracking-tight leading-tight reveal reveal-delay-1 mb-6"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 72px)',
                color: 'var(--color-foreground)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: '1.15',
              }}
            >
              Claim your financial control layer.{' '}
              <em style={{ color: 'var(--color-primary)' }}>Own the transaction state.</em>
            </h2>
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
              <span style={{ fontWeight: 600, color: '#4A90E2' }}>X</span> is deployed as a
              controlled financial infrastructure layer for platforms requiring deterministic state,
              ledger integrity, and compliance-gated execution. Architecture documentation available
              upon request.
            </p>

            {/* Trust signals */}
            <div
              className="reveal reveal-delay-4 flex flex-wrap gap-6 pt-8 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {[
                { id: 'trust-license', label: 'Ledger Enforced', icon: '◈' },
                { id: 'trust-audit', label: 'Policy Versioned', icon: '⬡' },
                { id: 'trust-airgap', label: 'Reconciliation Controlled', icon: '⊘' },
              ]?.map((trust) => (
                <div key={trust?.id} className="flex items-center gap-2">
                  <span style={{ color: 'var(--color-primary)', fontSize: '12px' }}>
                    {trust?.icon}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-wide-plus"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                    }}
                  >
                    {trust?.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal card */}
          <div className="col-span-1 md:col-span-5 reveal reveal-delay-2">
            <div
              className="rounded-xl overflow-hidden terminal-glow"
              style={{
                background: 'var(--color-surface-1)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-5 py-3 border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                <span
                  className="text-[10px] ml-3"
                  style={{
                    color: 'var(--color-muted-foreground)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  eclyraX-install.sh
                </span>
              </div>
              {/* Terminal lines */}
              <div className="p-6 space-y-3">
                {/* First command with eclyraX branding */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--color-foreground)', fontWeight: 400 }}
                >
                  $ <span style={{ fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span>
                  <span style={{ fontWeight: 600, color: '#4A90E2' }}>X</span> bootstrap
                  --mode=production
                </p>
                {[
                  {
                    id: 'cmd-2',
                    text: '→ Attaching governed control layer...',
                    color: 'var(--color-muted-foreground)',
                  },
                  {
                    id: 'cmd-3',
                    text: '→ Enforcing transaction lifecycle discipline...',
                    color: 'var(--color-muted-foreground)',
                  },
                  { id: 'cmd-4', text: '✓ Ledger: append-only', color: '#4ADE80' },
                  { id: 'cmd-5', text: '✓ State transitions: validated', color: '#4ADE80' },
                  { id: 'cmd-6', text: '✓ Compliance: pre-commit enforced', color: '#4ADE80' },
                  { id: 'cmd-7', text: '✓ Settlement: externally reconciled', color: '#4ADE80' },
                  { id: 'cmd-8', text: '✓ Audit: policy-versioned', color: '#4ADE80' },
                  {
                    id: 'cmd-9',
                    text: 'System integrity confirmed.',
                    color: 'var(--color-foreground)',
                  },
                ]?.map((line) => (
                  <p
                    key={line?.id}
                    className="text-xs leading-relaxed"
                    style={{ color: line?.color, fontWeight: 400 }}
                  >
                    {line?.text}
                  </p>
                ))}
                <div
                  className="inline-block w-2 h-4 mt-1"
                  style={{
                    background: 'var(--color-primary)',
                    animation: 'fadeIn 1s steps(1) infinite alternate',
                  }}
                />
              </div>
            </div>

            {/* Version note */}
            <p
              className="mt-4 text-center text-[10px] uppercase tracking-ultra"
              style={{ color: 'rgba(122,134,150,0.5)', fontWeight: 500, letterSpacing: '0.1em' }}
            >
              Build 1.0.0 · Multi-Arch · eclyraX infrastructure License
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CtaSection);
