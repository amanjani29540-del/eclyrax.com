'use client';

import { useEffect, useRef } from 'react';

const permittedUseItems = [
  'Authorized deployment environments only',
  'No unauthorized system modification',
  'No circumvention of policy enforcement',
  'Compliance with governance controls required',
  'Usage subject to operational review',
];

const accessConditionsItems = [
  'Role-bound access privileges',
  'Administrative actions logged',
  'Controlled credential management',
  'Access subject to suspension upon violation',
];

const operationalBoundariesItems = [
  'Infrastructure provided within defined scope',
  'Enforcement layers remain system-governed',
  'No guarantee beyond documented controls',
  'Usage subject to jurisdictional law',
];

const termsModificationItems = [
  'Terms subject to governance revision',
  'Version history maintained',
  'Updates published through official channels',
  'Continued use implies acceptance of updated terms',
];

export default function TermsContent() {
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
                Terms of Use
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
                Use of{' '}
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
                infrastructure is governed by structured operational, access, and compliance
                conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 02: USAGE */}
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
                02 / USAGE
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
                Permitted Use
              </h2>
              <ul className="space-y-3">
                {permittedUseItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 400,
                      lineHeight: '1.6',
                      opacity: 0.85,
                    }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 03: ACCESS */}
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
                03 / ACCESS
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
                Access Conditions
              </h2>
              <ul className="space-y-3">
                {accessConditionsItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 400,
                      lineHeight: '1.6',
                      opacity: 0.85,
                    }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 04: LIABILITY */}
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
                04 / LIABILITY
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
                Operational Boundaries
              </h2>
              <ul className="space-y-3">
                {operationalBoundariesItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 400,
                      lineHeight: '1.6',
                      opacity: 0.85,
                    }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 05: MODIFICATION */}
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
                05 / MODIFICATION
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
                Terms Modification
              </h2>
              <ul className="space-y-3">
                {termsModificationItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 400,
                      lineHeight: '1.6',
                      opacity: 0.85,
                    }}
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
