"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const heroSlides = [
{
  id: "slide-1",
  src: "https://images.unsplash.com/photo-1577332215047-3712edf14808",
  alt: "Dark server room with glowing blue rack lights in a secure data center"
},
{
  id: "slide-2",
  src: "https://images.unsplash.com/photo-1610878785620-3ab2d3a2ae7b",
  alt: "Close up of circuit board with green traces and microchip components"
}];


const sideStats = [
{
  id: "stat-ledger",
  label: "Ledger Model",
  value: "Double-Entry Enforced"
},
{
  id: "stat-transaction",
  label: "Transaction State",
  value: "Deterministic Lifecycle"
},
{
  id: "stat-compliance",
  label: "Compliance Layer",
  value: "Pre-Execution Gate"
},
{
  id: "stat-reconciliation",
  label: "Reconciliation",
  value: "Exception-Logged"
},
{
  id: "stat-escrow",
  label: "Escrow Control",
  value: "Policy-Bound, Fund Locking"
}];

interface HeroSectionProps {
  onOpenModal: () => void;
}

function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 grid grid-cols-1 md:grid-cols-12 min-h-screen border-b"
      style={{ borderColor: "var(--color-border)" }}>
      
      {/* === MAIN VISUAL AREA === */}
      <div
        className="col-span-1 md:col-span-9 relative overflow-hidden"
        style={{ minHeight: "600px" }}>
        
        {/* Carousel Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, idx) =>
          <div
            key={slide.id}
            className={`hero-slide absolute inset-0 ${idx === activeSlide ? "active" : ""}`}
            suppressHydrationWarning>
            
              <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              quality={75}
              sizes="(max-width: 768px) 100vw, 75vw"
              className="object-cover"
              style={{ opacity: 0.35, mixBlendMode: "luminosity" }} />
            
            </div>
          )}
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
            "linear-gradient(to top, #080C10 0%, rgba(8,12,16,0.4) 50%, rgba(8,12,16,0.2) 100%)"
          }} />
        
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
            "linear-gradient(to right, rgba(8,12,16,0) 60%, #080C10 100%)"
          }} />
        

        {/* Section Label */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
          <span className="section-label opacity-40" style={{ fontWeight: 500, letterSpacing: "0.1em" }}>00 / INIT</span>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full z-20">
          {/* Status badge */}
          <div className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full"
              style={{
                borderColor: "rgba(200,169,110,0.25)",
                background: "rgba(200,169,110,0.06)"
              }}>
              
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ADE80" }} />
              
              <span
                className="text-[10px] uppercase tracking-ultra"
                style={{ color: "var(--color-muted-foreground)", fontWeight: 500, letterSpacing: "0.1em" }}>
                
                00 / FINANCIAL CONTROL
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1
            className="tracking-tight leading-none mb-6"
            suppressHydrationWarning
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              color: "#E8E4DC",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: "1.08",
              maxWidth: "900px",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              transform: "translateZ(0)",
              willChange: "transform"
            }}>
            
            <span className="block">
              <span>Financial Control Infrastructure.</span>
            </span>
            <span className="block" style={{ color: "#5A9FE5", fontSize: "0.65em", fontWeight: 400, opacity: 0.9 }}>
              <span>
                Deterministic Financial State.
              </span>
            </span>
          </h1>

          {/* Horizontal Rule */}
          <div
            style={{
              width: "70px",
              height: "1px",
              backgroundColor: "#4383D0",
              marginBottom: "24px",
              transform: "translateZ(0)"
            }} />


          {/* Sub */}
          <p
            className="max-w-lg text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "var(--color-muted-foreground)", fontWeight: 400, lineHeight: "1.6", opacity: 0.85 }}>
            
            A governed financial control layer positioned between application logic and external financial rails.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenModal}
              className="btn-primary transition-all duration-120 bg-[rgba(2,14,49,1)]"
              style={{
                borderRadius: "6px",
                filter: "brightness(1)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                transform: "translateZ(0)",
                willChange: "filter"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(1)";
              }}>ACCESS Control


            </button>
          </div>
        </div>
      </div>

      {/* === STATS SIDEBAR === */}
      <div
        className="col-span-1 md:col-span-3 flex flex-row md:flex-col border-t md:border-t-0 md:border-l spotlight-group overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "rgba(10, 18, 32, 0.72)",
          backdropFilter: "blur(6px)",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}>
        
        {sideStats.map((stat, idx) =>
        <div
          key={stat.id}
          className={`flex-shrink-0 w-[66.67%] md:w-auto md:flex-1 p-6 md:p-8 flex flex-col justify-center snap-start`}
          style={{
            borderBottom: "none",
            borderRight: idx < sideStats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            background: "transparent",
            minHeight: "120px",
            transform: "translateZ(0)"
          }}>
          
            <span
            className="text-[10px] uppercase tracking-ultra mb-2 z-10 relative"
            style={{ color: "rgba(200,169,110,0.5)", fontWeight: 500, letterSpacing: "0.06em", opacity: 0.7 }}>
            
              {stat.label}
            </span>
            <span
            className="text-sm font-light tracking-tight z-10 relative"
            style={{ color: "var(--color-foreground)", fontWeight: 500 }}>
            
              {stat.value}
            </span>
          </div>
        )}
      </div>
    </section>);

}

export default React.memo(HeroSection);