"use client";

import { useEffect, useRef } from "react";


const reportingItems = [
  "Provide structured technical detail",
  "Include reproduction steps where applicable",
  "Avoid exploitation of discovered vulnerabilities",
  "Allow reasonable time for investigation",
  "Maintain confidentiality during review",
];

const reviewItems = [
  "Governance-level technical assessment",
  "Structured validation of reported issue",
  "Documented response procedure",
  "Coordinated resolution planning",
  "Controlled disclosure timeline",
];

const boundariesItems = [
  "No public disclosure before coordinated review",
  "No unauthorized access testing",
  "No data extraction or misuse",
  "All submissions subject to governance review",
];

export default function ResponsibleDisclosureContent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("active");
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
      style={{ background: "var(--color-background)" }}
    >
      {/* SECTION 01: OVERVIEW */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(80px, 12vw, 180px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>01 / OVERVIEW</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="text-4xl md:text-5xl mb-6 reveal"
                style={{ color: "var(--color-foreground)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: "1.05" }}
              >
                Responsible Disclosure
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted-foreground)", fontWeight: 400, lineHeight: "1.6", opacity: 0.85 }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.005em' }}>eclyra</span><span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: "#4A90E2" }}>X</span> supports structured vulnerability reporting and
                responsible communication of security concerns affecting
                infrastructure integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 02: REPORTING */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>02 / REPORTING</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="text-3xl md:text-4xl mb-6 reveal"
                style={{ color: "var(--color-foreground)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: "1.15" }}
              >
                Reporting Guidelines
              </h2>
              <ul className="space-y-3">
                {reportingItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{ color: "var(--color-muted-foreground)", fontWeight: 400, lineHeight: "1.6", opacity: 0.85 }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 03: REVIEW */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal">03 / REVIEW</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial text-3xl md:text-4xl font-light mb-6 reveal"
                style={{ color: "var(--color-foreground)" }}
              >
                Review Process
              </h2>
              <ul className="space-y-3">
                {reviewItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    – {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 04: BOUNDARIES */}
      <section
        className="relative z-10 border-b"
        style={{
          borderColor: "var(--color-border)",
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(60px, 10vw, 120px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-1">
              <span className="section-label reveal">04 / BOUNDARIES</span>
            </div>
            <div className="col-span-1 md:col-span-11">
              <h2
                className="font-serif-editorial text-3xl md:text-4xl font-light mb-6 reveal"
                style={{ color: "var(--color-foreground)" }}
              >
                Disclosure Boundaries
              </h2>
              <ul className="space-y-3">
                {boundariesItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base md:text-lg leading-relaxed reveal"
                    style={{ color: "var(--color-muted-foreground)" }}
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