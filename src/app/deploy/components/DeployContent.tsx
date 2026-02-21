'use client';

export default function DeployContent() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      {/* Header with Back Button on LEFT */}
      <div
        className="border-b"
        style={{
          background: 'var(--color-surface-1)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
          <div className="flex items-center gap-4 mb-6">{/* Back button on LEFT */}</div>
          <h1
            className="text-4xl md:text-5xl font-light mb-4"
            style={{
              color: 'var(--color-foreground)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            Deploy
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--color-muted-foreground)', opacity: 0.85 }}
          >
            Enterprise deployment options and integration pathways.
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--color-foreground)', letterSpacing: '-0.01em' }}
            >
              Deployment Overview
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--color-muted-foreground)', opacity: 0.85 }}
            >
              eclyraX offers flexible deployment options tailored to institutional requirements,
              from cloud-hosted solutions to on-premise installations.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--color-foreground)', letterSpacing: '-0.01em' }}
            >
              Deployment Options
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Cloud-Hosted',
                  description:
                    'Fully managed infrastructure with automatic scaling, updates, and 24/7 monitoring.',
                },
                {
                  title: 'Hybrid',
                  description:
                    'Combine cloud flexibility with on-premise control for sensitive operations.',
                },
                {
                  title: 'On-Premise',
                  description:
                    'Complete control over infrastructure with dedicated support and custom configurations.',
                },
              ]?.map((option, index) => (
                <div
                  key={index}
                  className="border p-6"
                  style={{
                    background: 'var(--color-surface-1)',
                    borderColor: 'var(--color-border)',
                    borderRadius: '6px',
                  }}
                >
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--color-foreground)', letterSpacing: '-0.01em' }}
                  >
                    {option?.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--color-muted-foreground)', opacity: 0.85 }}
                  >
                    {option?.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--color-foreground)', letterSpacing: '-0.01em' }}
            >
              Integration Support
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--color-muted-foreground)', opacity: 0.85 }}
            >
              Our team provides comprehensive integration support including:
            </p>
            <ul className="space-y-3">
              {[
                'API documentation and SDKs',
                'Dedicated technical account management',
                'Custom integration development',
                'Training and onboarding programs',
                'Ongoing technical support',
              ]?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ color: 'var(--color-muted-foreground)', opacity: 0.85 }}
                >
                  <span style={{ color: '#4A90E2', marginTop: '2px' }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
