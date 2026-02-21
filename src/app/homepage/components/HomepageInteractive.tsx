"use client";

import { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ArchitectureSection from "./ArchitectureSection";
import MetricsSection from "./MetricsSection";
import UseCasesSection from "./UseCasesSection";
import ManifestoSection from "./ManifestoSection";
import CtaSection from "./CtaSection";
import FooterSection from "./FooterSection";

export default function HomepageInteractive() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax background
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Spotlight mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll(".spotlight-group").forEach((group) => {
        const rect = (group as HTMLElement).getBoundingClientRect();
        group.querySelectorAll(".spotlight-card").forEach((card) => {
          const cardRect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - cardRect.left;
          const y = e.clientY - cardRect.top;
          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "var(--color-background)" }}
    >
      {/* Parallax dot background */}
      <div ref={parallaxRef} id="parallax-bg" aria-hidden="true" />

      {/* Global subtle grid lines */}
      <div className="global-grid-overlay" aria-hidden="true">
        {[...Array(11)].map((_, i) => (
          <div key={`grid-line-${i}`} className="col-line" />
        ))}
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Page Sections */}
      <main className="relative z-10">
        <HeroSection />
        <ArchitectureSection />
        <MetricsSection />
        <UseCasesSection />
        <ManifestoSection />
        <CtaSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}