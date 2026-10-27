import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-[#020610] text-[#F5F5F7] overflow-hidden py-18 sm:py-24 lg:py-28 border-b border-[#292D36]">
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00E5E5]/15 via-[#087BFF]/15 to-[#A855F7]/15 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00E5E5]/10 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#969DAA]">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
              className="hover:text-[#00E5E5] transition-colors"
            >
              Home
            </a>
            <span>&gt;</span>
            <span className="text-[#C2C6D0]">Industrial Solutions</span>
          </div>

          <h1
            className="home-hero-title text-4xl sm:text-5xl lg:text-[54px] font-light tracking-tight text-white leading-[1.14]"
            style={{ textWrap: 'balance' }}
          >
            Precision Hardware.
            <br />
            <span className="font-normal epam-gradient-text">Intelligent Software.</span>
            <br />
            Engineered for Industry.
          </h1>

          <p className="text-base sm:text-[17px] text-[#C2C6D0] leading-relaxed font-normal max-w-xl">
            We build industrial connectivity and process control systems that turn complex operations into clear, actionable intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <a
              href="/hardware/"
              onClick={(e) => { e.preventDefault(); onNavigate('/hardware/'); }}
              className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[#00E5E5]/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] transition-all duration-300 group-hover:opacity-90" />
              <span className="relative flex items-center justify-center px-7 py-3 rounded-full bg-[#050505] group-hover:bg-[#050505]/60 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200">
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#00E5E5] group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

          </div>

          <div className="pt-8 border-t border-[#292D36] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5E5] shrink-0" />
              <span className="font-medium text-[#F5F5F7]">Industrial Connectivity</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF] shrink-0" />
              <span className="font-medium text-[#F5F5F7]">Process Monitoring &amp; Control</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shrink-0" />
              <span className="font-medium text-[#F5F5F7]">Localized Industrial Software</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
