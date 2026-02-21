'use client';

import { useEffect, useRef } from 'react';

const integrityItems = [
  'Ledger correctness precedes throughput',
  'Deterministic state transitions eliminate ambiguity',
  'Policy enforcement occurs before execution',
  'Reconciliation is structural, not reactive',
  'Auditability is embedded, not appended',
];

const accountabilityItems = [
  'Clear ownership of control layers',
  'Structured review before change',
  'Versioned policy enforcement',
  'Logged administrative activity',
  'Traceable financial transitions',
];

export default function ManifestoContent() {
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
      {/* SECTION 01: PRINCIPLE */}
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
                01 / PRINCIPLE
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h1
                className="tracking-tight leading-tight reveal reveal-delay-1 mb-6"
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.05',
                }}
              >
                Financial Infrastructure Is Structural
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed reveal reveal-delay-2 max-w-3xl"
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
                is designed on the premise that financial correctness must be enforced at the system
                layer — not observed after failure.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 02: INTEGRITY */}
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
                02 / INTEGRITY
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Integrity Before Scale
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {integrityItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base leading-relaxed"
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
      {/* SECTION 03: ACCOUNTABILITY */}
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
                03 / ACCOUNTABILITY
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="tracking-tight leading-tight reveal reveal-delay-1 mb-12"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Traceable Governance
              </h2>
              <ul className="space-y-3 max-w-3xl reveal reveal-delay-2">
                {accountabilityItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base leading-relaxed"
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
      {/* SECTION 05: POSITION */}
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
                05 / POSITION
              </span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="tracking-tight leading-tight reveal reveal-delay-1 mb-8"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Infrastructure Over Interface
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed reveal reveal-delay-2 max-w-3xl mb-6"
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
                is not positioned as an application layer product.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed reveal reveal-delay-2 max-w-3xl"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                It operates as a financial control substrate for platforms requiring deterministic
                execution and structural enforcement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
