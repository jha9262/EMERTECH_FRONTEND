import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, HardDrive } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-24 sm:py-32 lg:py-36 border-b border-slate-800">
      {/* Real Industrial Machinery Background with Dark Navy Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=2400&q=85')`,
        }}
        aria-hidden="true"
      >
        {/* Dark Navy / Charcoal High-Contrast Industrial Overlay with subtle ambient depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />
        {/* Subtle Industrial Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-orange-400 uppercase">
            <span>INDUSTRIAL HARDWARE &amp; SOFTWARE</span>
            <span className="text-slate-600">·</span>
            <span>VADODARA, INDIA</span>
          </div>

          {/* Headline with strictly one phrase in orange */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Industrial Solutions.{' '}
            <span className="text-orange-500">Connected Intelligence.</span>{' '}
            Engineered for Operations.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Emertech Electronics develops industrial hardware and software solutions that help businesses connect equipment, monitor processes, manage operations, and access meaningful operational information.
          </p>

          {/* Contrasting CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="/solutions/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/solutions/');
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shadow-xs backdrop-blur-sm"
            >
              <span>Talk to Our Team</span>
            </a>
          </div>

          {/* Restrained Engineering Assurances */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap gap-y-2.5 gap-x-8 text-xs text-slate-400">
            <span className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero PID Panel Rewiring</span>
            </span>
            <span className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Plant-Ready Edge Hardware</span>
            </span>
            <span className="flex items-center space-x-2">
              <HardDrive className="w-4 h-4 text-slate-400 shrink-0" />
              <span>100% Offline Local Engine</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
