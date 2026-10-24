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
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-orange-500 selection:text-white">
      {/* 1. HERO SECTION (Dark Corporate Industrial Palette) */}
      <section className="relative bg-[#050816] text-white overflow-hidden pt-12 pb-16 sm:pb-20 border-b border-slate-800">
        {/* Subtle Ambient Texture & Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255, 106, 0, 0.35) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span>SOFTWARE DEMO</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              See Industrial Monitoring{' '}
              <span className="text-orange-500 underline decoration-orange-500/40 decoration-4 underline-offset-8">
                in Action
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the Fluxora monitoring interface for PID controllers, heating processes, temperature trends, batch operations, and telemetry reporting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/contact/')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg shadow-orange-600/30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/hardware/')}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white bg-slate-900/60 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <span>Explore Paired Hardware</span>
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-slate-400 max-w-4xl">
            <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-white font-semibold">Production Interface Preview:</strong> The screenshots below showcase the actual Fluxora supervisory software deployed in operational manufacturing environments. Click on any screen to inspect high-resolution telemetry, PID cards, step timers, and audit logs.
            </div>
          </div>

          {/* Quick Jump Links to the 4 Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {DEMO_GALLERY_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="p-3 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800 hover:border-orange-500/50 transition-colors flex items-center space-x-2.5 text-xs text-slate-300 group"
              >
                <div className="w-6 h-6 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
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
            <div className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                  <div className="w-6 h-6 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center">
                    {section.letter}
                  </div>
                  <span>SECTION {section.letter}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-3">
                  <span>{section.title}</span>
                </h2>
                <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {section.description}
                </p>
              </div>

              <div className="shrink-0 text-xs font-mono text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
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
                    className={`bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-orange-500/80 transition-all duration-200 overflow-hidden flex flex-col ${
                      isFullSpan ? 'md:col-span-2' : 'md:col-span-1'
                    }`}
                  >
                    {/* Image Workspace Card with Click to Enlarge */}
                    <div
                      className="relative bg-slate-950 group cursor-pointer overflow-hidden flex items-center justify-center border-b border-slate-100"
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
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <div className="inline-flex items-center px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ZoomIn className="w-4 h-4 mr-2" />
                          <span>Click to Inspect Fullscreen</span>
                        </div>
                      </div>

                      {/* Static Badge in Corner */}
                      <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-white border border-slate-700/80 rounded-lg px-2.5 py-1 text-[11px] font-mono font-medium shadow-sm">
                        {item.badge}
                      </div>
                    </div>

                    {/* Image Captions & Feature Details */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs font-mono text-orange-600 font-semibold">
                          {item.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.caption}
                        </p>
                      </div>

                      {/* Key Features Bullets */}
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          Key Interface Capabilities
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {item.keyFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 mt-0.5 shrink-0" />
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
      <section className="bg-[#050816] text-white py-16 sm:py-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span>ENGINEER-TO-ENGINEER DEMONSTRATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Interested in This Monitoring Solution?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact Emertech Electronics to discuss your industrial monitoring and process requirements. Our engineering team in Vadodara configures custom register maps, PID gateways, and thermal cure reports.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contact/')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg shadow-orange-600/30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/hardware/')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white bg-slate-900/60 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Request a Quote</span>
            </button>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>+91 83208 45947</span>
            </div>
            <span>·</span>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>emertechelectronics@gmail.com</span>
            </div>
            <span>·</span>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
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
