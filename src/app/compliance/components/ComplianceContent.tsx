'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const regulatoryItems = [
  'Financial record integrity enforcement',
  'Jurisdiction-aware execution gating',
  'Pre-commit compliance validation',
  'Structured audit traceability',
  'Deterministic state transition control',
];

const controlItems = [
  'Double-entry ledger enforcement',
  'Append-only transaction records',
  'No cross-currency balance mixing',
  'Policy-versioned execution layer',
  'External reconciliation validation',
];

const operationalItems = [
  'Deployment approval governance',
  'Access boundary enforcement',
  'Change logging and traceability',
  'Role-defined administrative structure',
  'Segregation of operational environments',
];

export default function ComplianceContent() {
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
                Compliance Alignment
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed reveal"
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
                is architected to align with regulatory and financial control expectations across
                jurisdictions and enterprise environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: REGULATORY */}
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
                02 / REGULATORY
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
                Regulatory Framework Alignment
              </h2>
              <ul className="space-y-3">
                {regulatoryItems.map((item, idx) => (
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

      {/* SECTION 03: CONTROL */}
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
                03 / CONTROL
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
                Financial Control Architecture
              </h2>
              <ul className="space-y-3">
                {controlItems.map((item, idx) => (
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

      {/* SECTION 04: OPERATIONAL */}
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
                04 / OPERATIONAL
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
                Operational Compliance Controls
              </h2>
              <ul className="space-y-3">
                {operationalItems.map((item, idx) => (
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

      {/* SECTION 05: ASSURANCE */}
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
                05 / ASSURANCE
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
                Control Assurance
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed reveal"
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
                embeds financial correctness and policy enforcement at the system layer.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed reveal mt-4"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                Controls are structural, not observational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 border-t"
        style={{
          borderColor: 'var(--color-border)',
          paddingTop: 'clamp(40px, 6vw, 80px)',
          paddingBottom: 'clamp(40px, 6vw, 80px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <Link
                href="/documentation"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                DOCUMENTATION
              </Link>
              <Link
                href="/manifesto"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                MANIFESTO
              </Link>
              <Link
                href="/governance"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                GOVERNANCE
              </Link>
              <Link
                href="/compliance"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                COMPLIANCE
              </Link>
              <Link
                href="/security"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                SECURITY
              </Link>
              <Link
                href="#"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                RESPONSIBLE DISCLOSURE
              </Link>
              <Link
                href="#"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                PRIVACY
              </Link>
              <Link
                href="#"
                className="text-xs uppercase tracking-wide transition-opacity duration-120"
                style={{
                  color: 'var(--color-muted-foreground)',
                  opacity: 0.6,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6';
                }}
              >
                TERMS
              </Link>
            </nav>
            <p
              className="font-mono-label text-xs"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              © 2026{' '}
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.005em',
                  color: 'var(--color-foreground)',
                }}
              >
                eclyra
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#4A90E2' }}>
                X
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
