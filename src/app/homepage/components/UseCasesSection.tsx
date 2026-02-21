'use client';

import { useEffect, useRef } from 'react';

const useCases = [
  {
    id: 'uc-defense',
    title: 'Financial Control Infrastructure',
    tag: 'CORE FINANCIAL LAYER',
    desc: 'A governed control layer positioned between application logic and external financial rails. Designed for deterministic state, ledger integrity, and compliance-gated execution.',
    icon: '◈',
    bg: 'rgba(26,42,58,0.9)',
    accent: '#4A90D9',
    size: 'large',
    stat: 'Zero uncontrolled movement',
    statLabel: 'by design',
  },
  {
    id: 'uc-financial',
    title: 'Regulated Financial Systems',
    tag: 'COMPLIANCE-READY',
    desc: 'Immutable audit history, jurisdiction-aware transaction logic, and policy-versioned enforcement embedded at the system layer.',
    icon: '⬡',
    bg: 'rgba(26,42,26,0.9)',
    accent: '#4ADE80',
    size: 'small',
    stat: 'Policy-gated',
    statLabel: 'execution',
  },
  {
    id: 'uc-cloud',
    title: 'Marketplace & Platform Infrastructure',
    tag: 'PLATFORM CONTROL',
    desc: 'Structured financial state management for platforms requiring deterministic transaction lifecycle and balance isolation.',
    icon: '⟐',
    bg: 'rgba(42,26,42,0.9)',
    accent: 'var(--color-primary)',
    size: 'small',
    stat: 'Multi-entity',
    statLabel: 'support',
  },
  {
    id: 'uc-edge',
    title: 'Provider Orchestration',
    tag: 'EXECUTION CONTROL',
    desc: 'Abstracted financial rail execution with deterministic routing, failure handling, and reconciliation-aware settlement.',
    icon: '▲',
    bg: 'rgba(42,34,16,0.9)',
    accent: '#F59E0B',
    size: 'small',
    stat: 'Provider-independent',
    statLabel: 'architecture',
  },
  {
    id: 'uc-research',
    title: 'Financial Integrity Framework',
    tag: 'AUDIT & RECONCILIATION',
    desc: 'Settlement validation, exception tracking, and immutable ledger history designed for audit-grade financial environments.',
    icon: '⊘',
    bg: 'rgba(16,32,42,0.9)',
    accent: '#38BDF8',
    size: 'small',
    stat: 'Exception-logged',
    statLabel: 'by design',
  },
];

export default function UseCasesSection() {
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
      { threshold: 0.08 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="usecases"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-40 border-b"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span
              className="section-label reveal"
              style={{ fontWeight: 500, letterSpacing: '0.1em' }}
            >
              03 / DEPLOY
            </span>
          </div>
          <div className="col-span-1 md:col-span-7">
            <h2
              className="tracking-tight leading-tight reveal reveal-delay-1"
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                color: 'var(--color-foreground)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: '1.15',
              }}
            >
              Financial infrastructure is governed.
              <br />
              <span style={{ color: 'var(--color-primary)' }}>Not improvised.</span>
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
              <span style={{ fontWeight: 600, color: '#4A90E2' }}>X</span> defines the financial
              control layer between application logic and external financial rails. Every
              transaction follows deterministic state, enforced compliance, and immutable ledger
              discipline.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Large card — Defense */}
          <div
            className={`bento-card reveal reveal-delay-1 md:col-span-2 cursor-pointer group`}
            style={{
              background: useCases?.[0]?.bg,
              border: `1px solid rgba(${useCases?.[0]?.accent === '#4A90D9' ? '74,144,217' : '200,169,110'},0.15)`,
              minHeight: '320px',
            }}
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden">
              {/* BG icon watermark */}
              <div
                className="absolute right-[-5%] bottom-[-10%] text-[200px] leading-none pointer-events-none opacity-5 font-serif-editorial"
                style={{ color: useCases?.[0]?.accent }}
              >
                {useCases?.[0]?.icon}
              </div>
              <div className="relative z-10">
                <span
                  className="text-[10px] uppercase tracking-ultra mb-4 block"
                  style={{
                    color: useCases?.[0]?.accent,
                    opacity: 0.8,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  {useCases?.[0]?.tag}
                </span>
                <h3
                  className="text-2xl md:text-3xl mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-300"
                  style={{
                    color: 'var(--color-foreground)',
                    fontWeight: 500,
                    letterSpacing: '-0.005em',
                    lineHeight: '1.3',
                  }}
                >
                  {useCases?.[0]?.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-md"
                  style={{
                    color: 'var(--color-muted-foreground)',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    opacity: 0.65,
                  }}
                >
                  {useCases?.[0]?.desc}
                </p>
              </div>
              <div className="relative z-10 flex items-end justify-between mt-8">
                <div>
                  <span
                    className="font-serif-editorial text-2xl font-light"
                    style={{ color: useCases?.[0]?.accent }}
                  >
                    {useCases?.[0]?.stat}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-ultra ml-2"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {useCases?.[0]?.statLabel}
                  </span>
                </div>
                <span
                  className="font-mono-label text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: useCases?.[0]?.accent }}
                >
                  Learn more →
                </span>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {useCases?.slice(1)?.map((uc, idx) => (
            <div
              key={uc?.id}
              className={`bento-card reveal reveal-delay-${idx + 2} cursor-pointer group`}
              style={{
                background: uc?.bg,
                border: '1px solid var(--color-border)',
                minHeight: '200px',
              }}
            >
              <div className="p-6 md:p-7 h-full flex flex-col justify-between relative overflow-hidden">
                <div
                  className="absolute right-[-8%] bottom-[-12%] text-[120px] leading-none pointer-events-none opacity-5 font-serif-editorial"
                  style={{ color: uc?.accent }}
                >
                  {uc?.icon}
                </div>
                <div className="relative z-10">
                  <span
                    className="text-[10px] uppercase tracking-ultra mb-3 block"
                    style={{
                      color: uc?.accent,
                      opacity: 0.7,
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {uc?.tag}
                  </span>
                  <h3
                    className="text-xl mb-2 leading-tight group-hover:translate-x-1 transition-transform duration-300"
                    style={{
                      color: 'var(--color-foreground)',
                      fontWeight: 500,
                      letterSpacing: '-0.005em',
                      lineHeight: '1.3',
                    }}
                  >
                    {uc?.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 400,
                      lineHeight: '1.5',
                      opacity: 0.65,
                    }}
                  >
                    {uc?.desc}
                  </p>
                </div>
                <div className="relative z-10 mt-4 flex items-center justify-between">
                  <span className="font-mono-label text-xs" style={{ color: uc?.accent }}>
                    {uc?.stat}{' '}
                    <span style={{ color: 'var(--color-muted-foreground)', opacity: 0.7 }}>
                      {uc?.statLabel}
                    </span>
                  </span>
                  <span
                    className="font-mono-label text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: uc?.accent }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
