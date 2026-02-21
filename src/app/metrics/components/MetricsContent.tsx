"use client";



export default function MetricsContent() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-background)" }}>
      {/* Header with Back Button on LEFT */}
      <div
        className="border-b"
        style={{
          background: "var(--color-surface-1)",
          borderColor: "var(--color-border)"
        }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
          <div className="flex items-center gap-4 mb-6">
            {/* Back button on LEFT */}
            
          </div>
          <h1
            className="text-4xl md:text-5xl font-light mb-4"
            style={{
              color: "var(--color-foreground)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: "1.1"
            }}>
            Metrics
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
            Real-time performance metrics and operational transparency.
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
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
              Performance Overview
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
              eclyraX maintains institutional-grade performance standards with continuous monitoring and optimization.
            </p>
          </section>

          {/* Metrics Grid */}
          <section>
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
              Key Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Uptime", value: "99.99%", description: "Annual availability" },
                { label: "Latency", value: "<50ms", description: "Average response time" },
                { label: "Throughput", value: "10,000+ TPS", description: "Transactions per second" },
                { label: "Security", value: "Zero breaches", description: "Since inception" }
              ]?.map((metric, index) => (
                <div
                  key={index}
                  className="border p-6"
                  style={{
                    background: "var(--color-surface-1)",
                    borderColor: "var(--color-border)",
                    borderRadius: "6px"
                  }}>
                  <div
                    className="text-xs uppercase tracking-wide mb-2"
                    style={{ color: "var(--color-muted-foreground)", opacity: 0.6 }}>
                    {metric?.label}
                  </div>
                  <div
                    className="text-3xl font-semibold mb-1"
                    style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>
                    {metric?.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--color-muted-foreground)", opacity: 0.75 }}>
                    {metric?.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
              Monitoring & Reporting
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
              All metrics are monitored in real-time with automated alerting and incident response. Detailed performance reports are available to institutional clients.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}