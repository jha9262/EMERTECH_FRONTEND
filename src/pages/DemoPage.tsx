import React, { useState } from 'react';
import {
  Activity,
  Layers,
  LineChart,
  FileSpreadsheet,
  ZoomIn,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Info,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  DEMO_GALLERY_SECTIONS,
  DemoScreenshot,
} from '../data/demo-screenshots';
import { ImageLightbox } from '../components/demo/ImageLightbox';

interface DemoPageProps {
  onNavigate: (path: string) => void;
}

export function DemoPage({ onNavigate }: DemoPageProps) {
  // Flatten all screenshots for continuous lightbox navigation
  const allScreenshots: DemoScreenshot[] = DEMO_GALLERY_SECTIONS.flatMap(
    (sec) => sec.items
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const openLightboxForScreenshot = (screenshotId: string) => {
    const idx = allScreenshots.findIndex((s) => s.id === screenshotId);
    if (idx !== -1) {
      setCurrentLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F7] selection:bg-[#00E5E5] selection:text-black">
      {/* 1. HERO SECTION (EPAM Dark Theme) */}
      <section className="relative bg-[#020610] text-[#F5F5F7] overflow-hidden pt-12 pb-16 sm:pb-20 border-b border-[#292D36]">
        {/* Subtle Ambient Texture & Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0, 229, 229, 0.25) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E5E5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-8">
          {/* Breadcrumb */}
          <div>
            <Breadcrumbs
              dark={true}
              items={[
                { label: 'Home', path: '/' },
                { label: 'Software Demo' },
              ]}
              onNavigate={onNavigate}
            />
          </div>

          <div className="max-w-3xl space-y-5">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00E5E5]/10 border border-[#00E5E5]/30 text-[#00E5E5] font-mono text-xs uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5E5] animate-pulse" />
              <span>SOFTWARE DEMO</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F5F5F7] leading-[1.15]">
              See Industrial Monitoring{' '}
              <span className="epam-gradient-text font-normal">
                in Action
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#C2C6D0] leading-relaxed font-light">
              Explore the Fluxora monitoring interface for PID controllers, heating processes, temperature trends, batch operations, and telemetry reporting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/contact/')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(0,229,229,0.25)] hover:shadow-[0_0_25px_rgba(0,229,229,0.4)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5E5] cursor-pointer"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/hardware/')}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#41434A] hover:border-[#00E5E5] text-[#F5F5F7] hover:text-[#00E5E5] bg-[#0B101B] hover:bg-[#050505] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <span>Explore Paired Hardware</span>
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-[#0B101B] border border-[#292D36] rounded-xl p-4 flex items-start space-x-3 text-xs text-[#C2C6D0] max-w-4xl">
            <Info className="w-4 h-4 text-[#00E5E5] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-[#F5F5F7] font-semibold">Production Interface Preview:</strong> The screenshots below showcase the actual Fluxora supervisory software deployed in operational manufacturing environments. Click on any screen to inspect high-resolution telemetry, PID cards, step timers, and audit logs.
            </div>
          </div>

          {/* Quick Jump Links to the 4 Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {DEMO_GALLERY_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="p-3 rounded-lg bg-[#0B101B] hover:bg-[#080D18] border border-[#292D36] hover:border-[#00E5E5] transition-colors flex items-center space-x-2.5 text-xs text-[#C2C6D0] group"
              >
                <div className="w-6 h-6 rounded bg-[#00E5E5]/10 text-[#00E5E5] border border-[#00E5E5]/20 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                  {sec.letter}
                </div>
                <span className="font-semibold group-hover:text-white transition-colors truncate">
                  {sec.shortHeading}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MAIN GALLERY SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {DEMO_GALLERY_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="space-y-8 scroll-mt-24"
          >
            {/* Section Header */}
            <div className="border-b border-[#292D36] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-[#00E5E5] uppercase tracking-widest">
                  <div className="w-6 h-6 rounded-md bg-[#00E5E5]/10 text-[#00E5E5] border border-[#00E5E5]/30 flex items-center justify-center">
                    {section.letter}
                  </div>
                  <span>SECTION {section.letter}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-[#F5F5F7] tracking-tight flex items-center space-x-3">
                  <span>{section.title}</span>
                </h2>
                <p className="text-sm text-[#C2C6D0] max-w-3xl leading-relaxed font-light">
                  {section.description}
                </p>
              </div>

              <div className="shrink-0 text-xs font-mono text-[#969DAA] bg-[#0B101B] border border-[#292D36] px-3 py-1.5 rounded-lg">
                {section.items.length} Screens Available
              </div>
            </div>

            {/* Screenshots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item) => {
                const isFullSpan = item.layoutSpan === 'full';

                return (
                  <div
                    key={item.id}
                    className={`bg-[#0B101B] rounded-2xl border border-[#292D36] hover:border-[#00E5E5]/60 transition-all duration-200 overflow-hidden flex flex-col shadow-lg ${
                      isFullSpan ? 'md:col-span-2' : 'md:col-span-1'
                    }`}
                  >
                    {/* Image Workspace Card with Click to Enlarge */}
                    <div
                      className="relative bg-[#050505] group cursor-pointer overflow-hidden flex items-center justify-center border-b border-[#292D36]"
                      onClick={() => openLightboxForScreenshot(item.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          openLightboxForScreenshot(item.id);
                        }
                      }}
                      aria-label={`Enlarge ${item.title}`}
                    >
                      <img
                        src={item.imagePath}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover max-h-[580px] group-hover:scale-[1.015] transition-transform duration-300 ease-out"
                      />

                      {/* Hover Overlay with Enlarge Badge */}
                      <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] text-black text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ZoomIn className="w-4 h-4 mr-2" />
                          <span>Click to Inspect Fullscreen</span>
                        </div>
                      </div>

                      {/* Static Badge in Corner */}
                      <div className="absolute top-3 right-3 bg-[#0B101B]/90 backdrop-blur-md text-[#00E5E5] border border-[#292D36] rounded-lg px-2.5 py-1 text-[11px] font-mono font-medium shadow-sm">
                        {item.badge}
                      </div>
                    </div>

                    {/* Image Captions & Feature Details */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-[#F5F5F7] tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs font-mono text-[#00E5E5] font-semibold">
                          {item.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
                          {item.caption}
                        </p>
                      </div>

                      {/* Key Features Bullets */}
                      <div className="pt-3 border-t border-[#292D36] space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#969DAA] font-bold block">
                          Key Interface Capabilities
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C2C6D0]">
                          {item.keyFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5E5] mt-0.5 shrink-0" />
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* 3. FINAL CTA SECTION */}
      <section className="bg-[#080D18] text-[#F5F5F7] py-16 sm:py-20 border-t border-[#292D36]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00E5E5]/10 border border-[#00E5E5]/30 text-[#00E5E5] font-mono text-xs uppercase tracking-widest font-semibold">
            <span>ENGINEER-TO-ENGINEER DEMONSTRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light text-[#F5F5F7] tracking-tight leading-tight">
            Interested in This Monitoring Solution?
          </h2>

          <p className="text-sm sm:text-base text-[#C2C6D0] max-w-2xl mx-auto leading-relaxed font-light">
            Contact Emertech Electronics to discuss your industrial monitoring and process requirements. Our engineering team in Vadodara configures custom register maps, PID gateways, and thermal cure reports.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contact/')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(0,229,229,0.25)] hover:shadow-[0_0_25px_rgba(0,229,229,0.4)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5E5] cursor-pointer"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/hardware/')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-[#41434A] hover:border-[#00E5E5] text-[#F5F5F7] hover:text-[#00E5E5] bg-[#0B101B] hover:bg-[#050505] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Request a Quote</span>
            </button>
          </div>

          <div className="pt-8 border-t border-[#292D36] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#969DAA]">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#00E5E5]" />
              <span>+91 83208 45947</span>
            </div>
            <span>·</span>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#00E5E5]" />
              <span>emertechelectronics@gmail.com</span>
            </div>
            <span>·</span>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#00E5E5]" />
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULLSCREEN IMAGE LIGHTBOX */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={allScreenshots}
        currentIndex={currentLightboxIndex}
        onNavigateIndex={(idx) => setCurrentLightboxIndex(idx)}
      />
    </div>
  );
}
