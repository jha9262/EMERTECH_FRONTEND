import React from 'react';
import { ArrowRight, Play, Cpu, ShieldCheck, Database } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-[#020610] text-[#F5F5F7] overflow-hidden py-18 sm:py-24 lg:py-28 border-b border-[#292D36]">
      {/* EPAM-style Ambient Cyan-Blue-Purple Light Aura in Background */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00E5E5]/15 via-[#087BFF]/15 to-[#A855F7]/15 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00E5E5]/10 rounded-full blur-[110px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Breadcrumb, Light Headline, Description, Gradient CTAs, Indicators */}
          <div className="lg:col-span-7 space-y-6">
            {/* Breadcrumb matching EPAM screenshot 2 */}
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

            {/* Headline with Light Weight & Gradient Accent */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-[54px] font-light tracking-tight text-white leading-[1.14]"
              style={{ textWrap: 'balance' }}
            >
              Industrial Solutions.{' '}
              <span className="font-normal epam-gradient-text">
                Connected Intelligence.
              </span>{' '}
              Engineered for Operations.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-[17px] text-[#C2C6D0] leading-relaxed font-normal max-w-xl">
              Emertech Electronics develops industrial hardware and localized software solutions for equipment connectivity, process monitoring, control, and operational reporting.
            </p>

            {/* Primary & Secondary CTAs with EPAM Gradient Outline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              {/* Primary: Explore Products with Gradient Border Outline */}
              <a
                href="/hardware/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/hardware/');
                }}
                className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[#00E5E5]/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] transition-all duration-300 group-hover:opacity-90" />
                <span className="relative flex items-center justify-center px-7 py-3 rounded-full bg-[#050505] group-hover:bg-[#050505]/60 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200">
                  <span>Explore Products</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#00E5E5] group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Secondary: View Demo */}
              <a
                href="/demo/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/demo/');
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-medium uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#0B101B] hover:bg-[#111A2E] border border-[#41434A] hover:border-[#00E5E5] transition-all duration-200"
              >
                <Play className="w-3 h-3 mr-2 text-[#00E5E5] fill-[#00E5E5]/20" />
                <span>View Demo</span>
              </a>
            </div>

            {/* Compact Capability Indicators */}
            <div className="pt-8 border-t border-[#292D36] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center space-x-2 text-[#C2C6D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5E5] shrink-0" />
                <span className="font-medium text-[#F5F5F7]">Industrial Connectivity</span>
              </div>
              <div className="flex items-center space-x-2 text-[#C2C6D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF] shrink-0" />
                <span className="font-medium text-[#F5F5F7]">Process Monitoring &amp; Control</span>
              </div>
              <div className="flex items-center space-x-2 text-[#C2C6D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shrink-0" />
                <span className="font-medium text-[#F5F5F7]">Localized Industrial Software</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Glass Frame with Authentic Shop-Floor Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0B101B] border border-[#292D36] hover:border-[#41434A] p-3 shadow-2xl transition-all duration-300 group">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#292D36] mb-3 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#00E5E5] animate-pulse" />
                  <span className="font-mono text-[11px] text-[#C2C6D0] font-medium tracking-wider uppercase">
                    Field Deployment
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00E5E5] bg-[#00E5E5]/10 px-2 py-0.5 rounded border border-[#00E5E5]/30">
                  DCN Node + Fluxora
                </span>
              </div>

              {/* Real Photograph with Dark Frame */}
              <div className="relative rounded-xl overflow-hidden bg-[#050505] aspect-[4/3] border border-[#292D36]">
                <img
                  src="/assets/aistudio/image_d6d2a19a.png"
                  alt="Emertech DCN Hardware Node and Fluxora Touch HMI deployed in wind blade heating shop floor"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] text-[#F5F5F7] bg-[#050505]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-[#41434A] flex items-center justify-between">
                  <span className="font-mono text-[#C2C6D0]">PID Blanket Heating Station</span>
                  <a
                    href="/demo/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/demo/');
                    }}
                    className="text-[#00E5E5] hover:underline font-medium flex items-center"
                  >
                    <span>Telemetry</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Bottom Specs Ticker */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-[#292D36] text-[10px] text-[#969DAA] font-mono text-center">
                <div className="bg-[#050505] py-1.5 px-2 rounded border border-[#292D36]">
                  <span className="text-[#969DAA] block text-[9px]">CORE</span>
                  <span className="text-[#F5F5F7] font-medium">Dual-Core ESP32</span>
                </div>
                <div className="bg-[#050505] py-1.5 px-2 rounded border border-[#292D36]">
                  <span className="text-[#969DAA] block text-[9px]">OUTPUTS</span>
                  <span className="text-[#F5F5F7] font-medium">4x 250V / 10A</span>
                </div>
                <div className="bg-[#050505] py-1.5 px-2 rounded border border-[#292D36]">
                  <span className="text-[#969DAA] block text-[9px]">LOOP</span>
                  <span className="text-[#F5F5F7] font-medium">Modbus RS485</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
