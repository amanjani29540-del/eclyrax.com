'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic imports with loading states for code splitting
const HeroSection = dynamic(() => import('./HeroSection'), {
  loading: () => <div style={{ minHeight: '100vh', background: 'var(--color-background)' }} />,
});

const ArchitectureSection = dynamic(() => import('./ArchitectureSection'), {
  loading: () => <div style={{ minHeight: '400px', background: 'var(--color-background)' }} />,
});

const MetricsSection = dynamic(() => import('./MetricsSection'), {
  loading: () => <div style={{ minHeight: '400px', background: 'var(--color-surface-1)' }} />,
});

const UseCasesSection = dynamic(() => import('./UseCasesSection'), {
  loading: () => <div style={{ minHeight: '400px', background: 'var(--color-background)' }} />,
});

const ManifestoSection = dynamic(() => import('./ManifestoSection'), {
  loading: () => <div style={{ minHeight: '400px', background: 'var(--color-surface-1)' }} />,
});

const CtaSection = dynamic(() => import('./CtaSection'), {
  loading: () => <div style={{ minHeight: '400px', background: 'var(--color-background)' }} />,
});

const FooterSection = dynamic(() => import('./FooterSection'), {
  loading: () => <div style={{ minHeight: '200px', background: 'var(--color-background)' }} />,
});

export default function HomepageInteractive() {
  return (
    <main>
      <Suspense
        fallback={<div style={{ minHeight: '100vh', background: 'var(--color-background)' }} />}
      >
        <HeroSection onOpenModal={() => {}} />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <ArchitectureSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <MetricsSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <UseCasesSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <ManifestoSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <CtaSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <FooterSection />
      </Suspense>
    </main>
  );
}
