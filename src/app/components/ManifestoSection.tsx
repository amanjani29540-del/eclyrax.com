'use client';

import { useEffect, useRef, memo } from 'react';

const manifestoLines = [
  {
    main: 'We engineer the financial control layer between application and execution.',
    subtext: 'Financial state is not a byproduct — it is enforced.',
  },
  {
    main: 'Transaction flow is not a request. It is a governed lifecycle.',
    subtext: 'No skipped states. No undefined transitions.',
  },
  {
    main: 'Compliance is not an afterthought — it precedes financial commitment.',
    subtext: 'Funds do not lock without validation.',
  },
  {
    main: 'Ledger history is not editable. It is append-only.',
    subtext: 'Every movement leaves an immutable trace.',
  },
  {
    main: 'Financial control is not a feature — it is infrastructure.',
    subtext: 'Deterministic. Auditable. Enforced by design.',
  },
];

function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    const text = textRef?.current;
    if (!section || !text) return;

    // Reveal observer
    observerRef.current = new IntersectionObserver(
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
    observerRef?.current?.observe(section);

    // Scroll scrub
    const handleScroll = () => {
      if (!section || !text) return;
      const rect = section?.getBoundingClientRect();
      const winH = window.innerHeight;
      let pct = (winH - rect?.top) / (winH + rect?.height * 0.6);
      pct = Math.max(0, Math.min(1, pct));
      const pos = 100 - pct * 100;
      requestAnimationFrame(() => {
        text.style.backgroundPosition = `${pos}% 0`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef?.current?.disconnect();
    };
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative z-10 border-b"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-surface-1)',
        paddingTop: 'clamp(80px, 12vw, 180px)',
        paddingBottom: 'clamp(80px, 12vw, 180px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="mb-12 reveal">
          <span className="section-label" style={{ fontWeight: 500, letterSpacing: '0.1em' }}>
            04 / MANIFESTO
          </span>
        </div>

        {/* Scrub headline */}
        <div className="max-w-5xl sticky top-24">
          <h2
            ref={textRef}
            className="scroll-scrub-text leading-tight tracking-tight reveal"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 64px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: '1.15',
            }}
          >
            We engineer the financial control layer between application and financial rails.
            Integrity is not monitored after failure — it is enforced before execution.
          </h2>
        </div>

        {/* Manifesto lines */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-y-8">
          <div className="col-span-1 md:col-span-1" />
          <div className="col-span-1 md:col-span-10 space-y-0">
            {manifestoLines?.map((line, idx) => (
              <div
                key={`manifesto-line-${idx}`}
                className={`reveal reveal-delay-${(idx % 4) + 1} flex items-start gap-6 py-6 border-b`}
                style={{ borderColor: 'var(--color-border)' }}
              >
                <span
                  className="text-[10px] pt-1 shrink-0 w-8"
                  style={{
                    color: 'rgba(200,169,110,0.35)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  {String(idx + 1)?.padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <p
                    className="text-lg md:text-xl leading-relaxed mb-2"
                    style={{
                      color: 'var(--color-foreground)',
                      fontWeight: 400,
                      lineHeight: '1.6',
                      opacity: 0.85,
                    }}
                  >
                    {line?.main}
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: 'var(--color-muted-foreground)',
                      fontWeight: 400,
                      lineHeight: '1.5',
                      opacity: 0.65,
                    }}
                  >
                    <span style={{ fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span>
                    <span style={{ fontWeight: 600, color: '#4A90E2' }}>X</span> is designed on the
                    premise that financial correctness must be enforced at the system layer — not
                    observed after failure.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-20 flex justify-center">
          <div className="divider" />
        </div>
      </div>
    </section>
  );
}

export default memo(ManifestoSection);
