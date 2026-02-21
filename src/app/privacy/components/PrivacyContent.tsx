'use client';

import { useEffect, useRef } from 'react';

const dataCollectionItems = [
  'Limited collection of operational contact information',
  'No unnecessary financial data retention',
  'Structured logging of access-related events',
  'Minimal metadata storage required for governance review',
];

const dataUsageItems = [
  'Operational communication only',
  'Governance and compliance review',
  'Security incident assessment',
  'No sale of data',
  'No third-party marketing usage',
];

const accessControlItems = [
  'Role-based access enforcement',
  'Administrative privilege boundaries',
  'Audit-logged access events',
  'Segregated environment permissions',
];

const retentionItems = [
  'Retention aligned with operational necessity',
  'Governance-reviewed data lifecycle',
  'Structured deletion procedures',
  'Controlled archival practices',
];

export default function PrivacyContent() {
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
                Privacy Policy
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
                maintains structured data handling boundaries and controlled access governance
                across operational environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 02: DATA COLLECTION */}
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
                02 / DATA COLLECTION
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
                Data Collection Scope
              </h2>
              <ul className="space-y-3">
                {dataCollectionItems?.map((item, idx) => (
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
      {/* SECTION 03: DATA USAGE */}
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
              <span className="section-label reveal">03 / DATA USAGE</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial text-3xl md:text-4xl font-light mb-6 reveal"
                style={{ color: 'var(--color-foreground)' }}
              >
                Data Usage Principles
              </h2>
              <ul className="space-y-3">
                {dataUsageItems?.map((item, idx) => (
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
      {/* SECTION 04: ACCESS CONTROL */}
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
              <span className="section-label reveal">04 / ACCESS CONTROL</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial text-3xl md:text-4xl font-light mb-6 reveal"
                style={{ color: 'var(--color-foreground)' }}
              >
                Access Governance
              </h2>
              <ul className="space-y-3">
                {accessControlItems?.map((item, idx) => (
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
      {/* SECTION 05: RETENTION */}
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
              <span className="section-label reveal">05 / RETENTION</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial text-3xl md:text-4xl font-light mb-6 reveal"
                style={{ color: 'var(--color-foreground)' }}
              >
                Data Retention & Deletion
              </h2>
              <ul className="space-y-3">
                {retentionItems?.map((item, idx) => (
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
