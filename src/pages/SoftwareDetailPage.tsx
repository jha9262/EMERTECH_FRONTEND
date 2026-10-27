import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { CallToAction } from '../components/CallToAction';
import { SoftwareProduct } from '../data/software';
import { getSoftwareIcon } from '../components/IndustrialSoftwareIcons';
import { SoftwareArchitectureVisual, BatchReportVisual } from '../components/IndustrialVisuals';
import { ArrowRight, Check, ShieldCheck, Cpu, HardDrive, Layers, ArrowUpRight } from 'lucide-react';

interface SoftwareDetailPageProps {
  software: SoftwareProduct;
  onNavigate: (path: string) => void;
}

export function SoftwareDetailPage({ software, onNavigate }: SoftwareDetailPageProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Breadcrumbs & Hero Section */}
      <section className="bg-[#020610] border-b border-[#292D36] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            dark={true}
            items={[
              { label: 'Software', path: '/software/' },
              { label: software.name },
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#050505] text-[#00E5E5] flex items-center justify-center shrink-0 border border-[#292D36]">
                  {getSoftwareIcon(software.slug, 'w-5 h-5')}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#00E5E5] font-semibold block">
                    {software.purpose}
                  </span>
                  <span className="text-xs text-[#969DAA]">
                    Emertech Industrial IoT Solutions
                  </span>
                </div>
              </div>

              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F5F5F7] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                <span className="epam-gradient-text font-normal">{software.name}</span>
              </h1>

              <div className="text-base sm:text-lg font-normal text-[#C2C6D0]">
                {software.tagline}
              </div>

              <p className="text-sm sm:text-base text-[#969DAA] leading-relaxed max-w-2xl">
                {software.fullDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact/');
                  }}
                  className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#00E5E5] hover:bg-[#00E5E5]/90 rounded-lg transition-colors font-medium shadow-sm whitespace-nowrap"
                >
                  <span>Request a Demo / Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>

                {software.brochureReference && (
                  <span className="inline-flex items-center text-xs font-mono text-[#969DAA] bg-[#050505] px-3 py-2 rounded-lg border border-[#292D36]">
                    Source: {software.brochureReference}
                  </span>
                )}
              </div>
            </div>

            {/* Hero Right Visual Slot: Schema or Diagram */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#292D36]">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono uppercase text-[#00E5E5] font-semibold">
                      {software.name} Core Specs
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#969DAA] bg-[#050505] px-2 py-0.5 rounded border border-[#292D36]">
                    Industrial Ready
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {software.technicalSpecifications.slice(0, 4).map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-start py-1 border-b border-[#292D36]">
                      <span className="text-[#969DAA] font-medium">{spec.label}</span>
                      <span className="text-[#F5F5F7] font-semibold text-right max-w-[200px]">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-[#969DAA] leading-relaxed font-mono">
                  Hardware: {software.hardwareIntegration}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Addressed & How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Problem */}
          <div className="bg-[#0B101B] rounded-2xl p-8 border border-[#292D36] flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#00E5E5] font-semibold tracking-wider block mb-1">
                Operational Challenge
              </span>
              <h3 className="text-xl font-bold text-[#F5F5F7] mb-3">
                The Problem It Addresses
              </h3>
              <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
                {software.problem}
              </p>
            </div>
            <div className="pt-4 border-t border-[#292D36] flex items-center text-xs text-[#969DAA] space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5E5] shrink-0" />
              <span>Engineered specifically to eliminate manual friction and compliance failure.</span>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-[#0B101B] rounded-2xl p-8 border border-[#292D36] flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#00E5E5] font-semibold tracking-wider block mb-1">
                Engineering Mechanism
              </span>
              <h3 className="text-xl font-bold text-[#F5F5F7] mb-3">
                How It Works
              </h3>
              <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
                {software.howItWorks}
              </p>
            </div>
            <div className="pt-4 border-t border-[#292D36] flex items-center text-xs text-[#969DAA] space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#087BFF] shrink-0" />
              <span>Grounded in actual physical sensors, relays, and field protocols.</span>
            </div>
          </div>
        </div>

        {/* Dynamic Architectural Visual if available */}
        <SoftwareArchitectureVisual slug={software.slug} />
      </section>

      {/* 3. Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="Functional Scope"
          title={`Core Capabilities of ${software.name}`}
          description="Documented features and functional workflows supported by the software platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {software.coreCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] hover:border-[#41434A] transition-colors flex items-start space-x-3.5"
            >
              <div className="w-7 h-7 rounded-lg bg-[#050505] text-[#00E5E5] border border-[#292D36] flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed font-normal">
                {cap}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Typical Workflow (Step-by-Step) */}
      <section className="bg-[#080D18] border-y border-[#292D36] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="Process Execution"
            title="Typical Operational Workflow"
            description="How the software coordinates data collection, execution, and reporting across shop-floor teams."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {software.workflow.map((st) => (
              <div
                key={st.step}
                className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#00E5E5] bg-[#050505] px-2 py-0.5 rounded border border-[#00E5E5]/30">
                      Step {st.step}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F5F5F7] mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-[#969DAA] leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supported Applications & Hardware Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          kicker="Industry Focus"
          title="Supported Applications &amp; Hardware Interfacing"
          description="Target industries and physical device interfacing for plant deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {software.applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] hover:border-[#41434A] transition-colors"
            >
              <span className="text-[10px] font-mono uppercase text-[#00E5E5] font-semibold block mb-1">
                {app.industry}
              </span>
              <h4 className="text-sm font-bold text-[#F5F5F7] mb-2">
                {app.title}
              </h4>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                {app.details}
              </p>
            </div>
          ))}
        </div>

        {/* Hardware Integration Callout */}
        <div className="bg-[#0B101B] rounded-2xl p-6 sm:p-8 border border-[#292D36]">
          <div className="flex items-center space-x-3 mb-3">
            <Cpu className="w-5 h-5 text-[#00E5E5]" />
            <h4 className="text-sm font-bold text-[#F5F5F7]">
              Hardware &amp; Infrastructure Integration
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
            {software.hardwareIntegration}
          </p>
        </div>
      </section>

      {/* 6. Technical Specifications Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          kicker="Architecture Specs"
          title="Technical Specifications"
          description="Verified runtime environments, communication interfaces, and security protocols."
        />

        <div className="bg-[#0B101B] rounded-xl border border-[#292D36] overflow-hidden">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#080D18] border-b border-[#292D36] text-[#F5F5F7] font-bold uppercase text-[11px]">
                <th className="py-3 px-4 w-1/3">Parameter</th>
                <th className="py-3 px-4">Specification &amp; Implementation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292D36]">
              {software.technicalSpecifications.map((spec, idx) => (
                <tr key={idx} className="hover:bg-[#080D18]/70">
                  <td className="py-3 px-4 font-semibold text-[#F5F5F7]">{spec.label}</td>
                  <td className="py-3 px-4 text-[#00E5E5] font-mono text-[11px]">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Related Products */}
      {software.relatedProducts && software.relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SectionHeading
            kicker="System Synergy"
            title="Related Hardware &amp; Software Solutions"
            description="Complementary systems designed to interoperate within the plant ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {software.relatedProducts.map((rel) => (
              <div
                key={rel.route}
                className="bg-[#0B101B] rounded-xl p-5 border border-[#292D36] hover:border-[#41434A] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#00E5E5] font-semibold block mb-1">
                    {rel.type === 'hardware' ? 'Hardware System' : 'Software Solution'}
                  </span>
                  <h4 className="text-sm font-bold text-[#F5F5F7] mb-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#969DAA] leading-relaxed">
                    {rel.purpose}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#292D36]">
                  <a
                    href={rel.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(rel.route);
                    }}
                    className="inline-flex items-center text-xs font-semibold text-[#00E5E5] hover:text-[#00E5E5]/80"
                  >
                    <span>View Product</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Call To Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallToAction
          title={`Deploy ${software.name} in Your Facility`}
          subtitle="Speak with our engineering team in Vadodara to evaluate technical requirements, schedule a demonstration, or request a custom quote."
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}
