import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Wrench, 
  Cpu, 
  Network, 
  Layers, 
  GraduationCap, 
  ShieldCheck, 
  FileText, 
  MapPin, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { VERIFIED_SERVICES, IndustrialService } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Engineering', 'Integration', 'Deployment', 'Support'];

  const filteredServices = selectedCategory === 'All'
    ? VERIFIED_SERVICES
    : VERIFIED_SERVICES.filter(s => s.category === selectedCategory);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'Engineering':
        return <Wrench className="w-5 h-5 text-[#00E5E5]" />;
      case 'Integration':
        return <Cpu className="w-5 h-5 text-[#00E5E5]" />;
      case 'Deployment':
        return <Layers className="w-5 h-5 text-[#00E5E5]" />;
      case 'Support':
        return <GraduationCap className="w-5 h-5 text-[#00E5E5]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#00E5E5]" />;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-[#020610] border-b border-[#292D36] pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Services' }
            ]}
            onNavigate={onNavigate}
            dark={true}
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-semibold block mb-2">
              Verified Industrial Services
            </span>
            <h1 
              className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F7] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Engineering, Interfacing &amp; <span className="epam-gradient-text font-normal">Deployment Services</span>
            </h1>
            <p className="mt-4 text-base text-[#C2C6D0] leading-relaxed">
              We provide focused engineering and integration services to help industrial plants deploy, interface, and maintain physical monitoring hardware and localized software without disturbing production lines.
            </p>
          </div>

          {/* Quick Stats / Assurance Bar */}
          <div className="pt-6 flex flex-wrap gap-6 text-xs text-[#C2C6D0] border-t border-[#292D36]">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#00E5E5] shrink-0" />
              <span>Zero PID Panel Rewiring Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Network className="w-4 h-4 text-[#087BFF] shrink-0" />
              <span>Modbus RTU / RS-485 Daisy Chain Verification</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#A855F7] shrink-0" />
              <span>Engineered in Vadodara, Gujarat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#292D36] pb-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00E5E5] text-black font-bold'
                    : 'bg-[#0B101B] text-[#C2C6D0] hover:text-[#F5F5F7] hover:bg-[#080D18] border border-[#292D36]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#969DAA] font-mono">
            Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
          </div>
        </div>

        {/* Services Cards List */}
        <div className="space-y-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0B101B] rounded-xl border border-[#292D36] p-6 sm:p-8 hover:border-[#41434A] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Overview & Scope */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#292D36] flex items-center justify-center shrink-0">
                      {getServiceIcon(service.category)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5E5] font-semibold bg-[#050505] px-2 py-0.5 rounded border border-[#00E5E5]/30">
                        {service.category}
                      </span>
                      <h2 className="text-xl font-bold text-[#F5F5F7] mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#00E5E5] italic">
                    "{service.tagline}"
                  </p>

                  <p className="text-sm text-[#C2C6D0] leading-relaxed">
                    {service.overview}
                  </p>

                  {/* 3-Step Scope Timeline */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#969DAA] font-bold mb-3">
                      Scope of Engagement
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {service.scopeSteps.map((st) => (
                        <div key={st.step} className="p-3 rounded-lg bg-[#050505] border border-[#292D36]">
                          <span className="text-[10px] font-mono font-bold text-[#00E5E5] block mb-1">
                            Phase {st.step}
                          </span>
                          <span className="text-xs font-bold text-[#F5F5F7] block mb-1">
                            {st.title}
                          </span>
                          <p className="text-[11px] text-[#969DAA] leading-snug">
                            {st.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-[#969DAA]">
                    <span className="font-semibold text-[#C2C6D0]">Recommended for: </span>
                    {service.targetAudience}
                  </div>
                </div>

                {/* Right: Deliverables, Key Benefits, and CTA */}
                <div className="lg:col-span-5 bg-[#080D18] rounded-xl p-6 border border-[#292D36] space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-bold mb-3">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-[#C2C6D0]">
                          <Check className="w-4 h-4 text-[#00E5E5] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#292D36]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-bold mb-3">
                      Operational Impact
                    </h4>
                    <ul className="space-y-2">
                      {service.keyBenefits.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-[#969DAA]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5E5] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href="/contact/"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/contact/');
                      }}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#00E5E5] hover:bg-[#00E5E5]/90 rounded-lg transition-colors font-medium shadow-xs"
                    >
                      <span>Enquire About This Service</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Philosophy / Why Emertech Services */}
      <section className="bg-[#080D18] border-y border-[#292D36] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="Our Practical Philosophy"
            title="How We Deliver Engineering Engagements"
            description="We build industrial hardware and software with deep respect for plant floor realities, production schedules, and operator trust."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36]">
              <div className="w-10 h-10 rounded-lg bg-[#050505] text-[#00E5E5] flex items-center justify-center font-bold mb-4 border border-[#292D36]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#F5F5F7] mb-2">
                Non-Intrusive Integration
              </h3>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                We never require rewiring your safety loops, replacing functional PID controllers, or stopping active production lines. Our hardware taps into existing telemetry signals cleanly and safely.
              </p>
            </div>

            <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36]">
              <div className="w-10 h-10 rounded-lg bg-[#050505] text-[#087BFF] flex items-center justify-center font-bold mb-4 border border-[#292D36]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#F5F5F7] mb-2">
                100% Offline-First Architecture
              </h3>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                Industrial plants cannot tolerate internet dropouts halting heating cycles or batch logs. All software platforms run on local single-board computers (SBC) with full local persistence.
              </p>
            </div>

            <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36]">
              <div className="w-10 h-10 rounded-lg bg-[#050505] text-[#A855F7] flex items-center justify-center font-bold mb-4 border border-[#292D36]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#F5F5F7] mb-2">
                Audit-Ready Documentation
              </h3>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                Every service ends with tangible documentation: controller register tables, wiring blueprints, calibrated threshold logs, and tamper-resistant digital batch export setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B101B] border border-[#292D36] rounded-2xl p-8 sm:p-12 text-[#F5F5F7] text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-semibold block">
            Direct Engineering Support
          </span>
          <h3 
            className="text-2xl sm:text-3xl font-light tracking-tight text-[#F5F5F7] max-w-2xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Have a Specific Process or <span className="epam-gradient-text font-normal">Interfacing Challenge?</span>
          </h3>
          <p className="text-sm text-[#C2C6D0] max-w-xl mx-auto leading-relaxed">
            Contact our engineering team in Vadodara to discuss site visits, loop feasibility testing, or pilot deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#00E5E5] hover:bg-[#00E5E5]/90 rounded-lg transition-colors font-medium shadow-sm"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href="/hardware/dcn-heat-controller/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/hardware/dcn-heat-controller/');
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#050505] hover:bg-[#080D18] border border-[#41434A] rounded-lg transition-colors"
            >
              <span>View Hardware Specification</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
