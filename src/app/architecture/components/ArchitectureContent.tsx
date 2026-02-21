"use client";



export default function ArchitectureContent() {
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
            Architecture
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
            Enterprise-grade infrastructure architecture designed for institutional finance.
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
              Infrastructure Overview
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
              eclyraX is built on a multi-layered architecture that ensures security, scalability, and compliance with institutional standards.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
              Our infrastructure leverages distributed systems, redundant failovers, and real-time monitoring to deliver 99.99% uptime.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
              Core Components
            </h2>
            <ul className="space-y-3">
              {[
                "Distributed ledger technology with Byzantine fault tolerance",
                "Multi-region data replication and disaster recovery",
                "Zero-trust security model with end-to-end encryption",
                "Real-time transaction processing and settlement",
                "API-first design for seamless integration"
              ]?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
                  <span style={{ color: "#4A90E2", marginTop: "2px" }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
              Scalability & Performance
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted-foreground)", opacity: 0.85 }}>
              Our architecture is designed to handle institutional-scale transaction volumes with sub-second latency. Horizontal scaling ensures seamless growth as your operations expand.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}