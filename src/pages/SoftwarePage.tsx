import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { CallToAction } from '../components/CallToAction';
import { SoftwareGrid } from '../components/SoftwareGrid';
import { SOFTWARE_PRODUCTS } from '../data/software';
import { ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

interface SoftwarePageProps {
  onNavigate: (path: string) => void;
}

export function SoftwarePage({ onNavigate }: SoftwarePageProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* Top Header & Breadcrumbs */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            dark={false}
            items={[{ label: 'Software' }]}
            onNavigate={onNavigate}
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
              SOFTWARE PLATFORMS &amp; INDUSTRIAL IOT
            </span>

            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Software That Connects Industrial Operations
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore Emertech's software solutions for industrial monitoring, process control, safety, energy, asset visibility, communication, and production management.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact/');
                }}
                className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                <span>Request Software Demo</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/solutions/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/solutions/');
                }}
                className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>View Operational Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Software Catalogue: All 9 Products in Exact Order */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          kicker="Product Catalogue"
          title="Industrial Software Solutions"
          description="Each software application is engineered to solve specific operational, safety, or manufacturing challenges with local processing and robust connectivity."
        />

        {/* 3 columns desktop, 2 tablets, 1 mobile */}
        <SoftwareGrid softwareList={SOFTWARE_PRODUCTS} onNavigate={onNavigate} />
      </section>

      {/* Architecture Synergy Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-orange-400 font-bold block">
                Edge Architecture
              </span>
              <h3 className="text-lg font-bold text-white">
                Offline-First Reliability &amp; Plant LAN Deployment
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Emertech's software platforms are designed for the realities of industrial plants. Where cloud connectivity can be unpredictable or prohibited due to data sovereignty, platforms like Fluxora run on local, ruggedized Single Board Computers (SBC) directly on your plant LAN—guaranteeing continuous operation, zero latency, and local cryptographic security.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-2 text-orange-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Cloud Dependency</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Local database and application runtime ensure 100% manufacturing uptime during internet outages.
              </p>
            </div>
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-2 text-orange-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Role-Based Permissions</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Operator, Supervisor, and Maintenance tiers with password-protected recipe and override authority.
              </p>
            </div>
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-2 text-orange-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Standardized Export</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Direct export to Microsoft Excel (.xlsx) and Adobe PDF (.pdf) for QA inspection and certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallToAction
          title="Looking for a Customized Software Solution?"
          subtitle="Speak with our software engineering desk in Vadodara to evaluate integration with your plant equipment, PLC controllers, and SCADA infrastructure."
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}
