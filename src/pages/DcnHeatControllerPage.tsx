import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { FeatureCard } from '../components/FeatureCard';
import { SpecificationTable } from '../components/SpecificationTable';
import { CallToAction } from '../components/CallToAction';
import { BladeHeatingSchematic, BatchReportVisual } from '../components/IndustrialVisuals';
import { PRODUCTS, COMPANY_INFO } from '../data/products';
import { Download, ArrowRight, Cpu, HardDrive, ShieldAlert, CheckCircle2, Lock, Flame } from 'lucide-react';

interface DcnHeatControllerPageProps {
  onNavigate: (path: string) => void;
}

export function DcnHeatControllerPage({ onNavigate }: DcnHeatControllerPageProps) {
  const product = PRODUCTS.find((p) => p.slug === 'dcn-heat-controller')!;

  return (
    <div className="space-y-16 pb-16 bg-[#050505] text-[#F5F5F7]">
      {/* Product Hero Section */}
      <section className="bg-[#020610] border-b border-[#292D36] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            dark={true}
            items={[
              { label: 'Hardware', path: '/hardware/' },
              { label: 'DCN & Heat Controller' },
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#00E5E5] uppercase tracking-wider font-semibold">
                <span>Fluxora by Emertech</span>
                <span className="text-[#41434A]">·</span>
                <span>Industrial IoT Heating System</span>
              </div>

              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F5F5F7] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Connect · Control · Optimize
              </h1>

              <p className="text-sm sm:text-base text-[#C2C6D0] leading-relaxed max-w-2xl font-light">
                One connected platform of sensors, controllers, and software that monitors, controls, and records every blade heating cycle — with <strong className="text-[#F5F5F7] font-semibold">no change to your existing PID panels</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact/');
                  }}
                  className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] rounded-lg transition-all shadow-[0_0_20px_rgba(0,229,229,0.25)] hover:shadow-[0_0_25px_rgba(0,229,229,0.4)] whitespace-nowrap"
                >
                  <span>Request Technical Demo / RFQ</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>

                <a
                  href={COMPANY_INFO.brochurePath}
                  download="Emertech_Fluxora_Brochure.pdf"
                  className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#0B101B] hover:bg-[#050505] border border-[#41434A] hover:border-[#00E5E5] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4 mr-2 text-[#00E5E5]" />
                  <span>Download Official Brochure (PDF)</span>
                </a>
              </div>

              {/* 4 Pillars from Brochure Page 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#292D36] text-xs">
                <div>
                  <div className="font-mono text-[#00E5E5] font-bold">01. Live Monitoring</div>
                  <div className="text-[#969DAA] mt-0.5">Every blanket on one screen</div>
                </div>
                <div>
                  <div className="font-mono text-[#00E5E5] font-bold">02. SOP-Locked</div>
                  <div className="text-[#969DAA] mt-0.5">Keypad locked on profile</div>
                </div>
                <div>
                  <div className="font-mono text-[#00E5E5] font-bold">03. Overheat Watch</div>
                  <div className="text-[#969DAA] mt-0.5">Stops heating on fault</div>
                </div>
                <div>
                  <div className="font-mono text-[#00E5E5] font-bold">04. Full Traceability</div>
                  <div className="text-[#969DAA] mt-0.5">Operator-wise batch reports</div>
                </div>
              </div>
            </div>

            {/* Architecture Graphic */}
            <div className="lg:col-span-5">
              <BladeHeatingSchematic />
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Step-by-Step Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="System Architecture"
          title="Wireless Control, Compatible with Multiple PID Panels"
          description="A simple, scalable architecture that works with existing Autonics and Modbus PID controllers along wind turbine blade moulds."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {product.architecturePoints?.map((pt) => (
            <div key={pt.step} className="bg-[#0B101B] rounded-xl p-5 border border-[#292D36] shadow-sm space-y-2">
              <span className="text-xs font-mono font-bold text-[#00E5E5] bg-[#00E5E5]/10 px-2 py-0.5 rounded border border-[#00E5E5]/20">
                Step {pt.step}
              </span>
              <h4 className="text-sm font-bold text-[#F5F5F7]">
                {pt.title}
              </h4>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                {pt.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Edge Hardware: DCN & Local Server SBC (Brochure Page 5 & 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          kicker="Hardware &amp; Server"
          title="Secure, Plant-Ready Edge Hardware and Local Server"
          description="Rugged, reliable, and built specifically for harsh shop-floor manufacturing environments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Data Collector Node (DCN) Card */}
          <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#292D36] pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#00E5E5]/10 text-[#00E5E5] border border-[#00E5E5]/20 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    Data Collector Node (DCN)
                  </h3>
                  <span className="text-xs text-[#969DAA] font-mono">
                    Joins legacy industrial systems to modern IoT
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono bg-[#050505] text-[#00E5E5] px-2.5 py-1 rounded border border-[#292D36]">
                ESP32 Core
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
              The DCN is the shop-floor workhorse that links existing Autonics or compatible PID controllers to the central plant network without changing wiring.
            </p>

            <ul className="space-y-2.5 text-xs text-[#C2C6D0]">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">Microcontroller:</strong> Built on the ESP32 microcontroller with industrial hardware watchdog.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">Multi-Protocol:</strong> Speaks Modbus, PROFIBUS, TCP/IP, UDP, and other industrial protocols.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">Daisy-Chain:</strong> Connects many machines and controllers on one looped RS485 port.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">Security:</strong> Encrypted wireless data transmission and authenticated device registration.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">Offline Data Buffer:</strong> Standalone backup server and local data storage if Wi-Fi network is down.</span>
              </li>
            </ul>
          </div>

          {/* Local Server (SBC) Card */}
          <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#292D36] pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#050505] text-[#00E5E5] border border-[#292D36] flex items-center justify-center font-bold">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    Local Server (SBC)
                  </h3>
                  <span className="text-xs text-[#969DAA] font-mono">
                    The engine behind continuous operation
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono bg-[#050505] text-[#00E5E5] px-2.5 py-1 rounded border border-[#292D36]">
                100% On-Premise
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
              Hosts the application and database, manages DCNs, and provides a secure, reliable, and completely offline-capable environment for shop-floor use.
            </p>

            <ul className="space-y-2.5 text-xs text-[#C2C6D0]">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">Application &amp; Database:</strong> Hosts system software, heating recipe profiles, and historical cycles.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">User Management:</strong> Identifies and authenticates every DCN and shop-floor operator role.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">System Control:</strong> Manages SSL/TLS certificates, encryption keys, and real-time graphs and reports.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
                <span><strong className="text-[#F5F5F7]">Reliable Rugged Hardware:</strong> Local offline storage, automatic reconnection, and metal heatsink housing.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overheat Protection & SOP Locks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-[#080D18] rounded-2xl border border-[#00E5E5]/30 p-8 space-y-4">
          <div className="flex items-center space-x-3 text-[#00E5E5] font-bold text-sm">
            <ShieldAlert className="w-5 h-5 text-[#00E5E5]" />
            <span>Overheat Protection &amp; SOP-Locked Operational Integrity</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#C2C6D0] leading-relaxed">
            <div>
              <strong className="block text-[#F5F5F7] font-semibold mb-1">Active Overheat Protection (Auto-Halt + Alert):</strong>
              Per-blanket energy and current monitoring continuously measures heater load at every profile stage. If abnormal electrical current, short circuit, or thermocouple deviation is detected, the system <strong className="text-[#00E5E5]">automatically halts heating to that blanket</strong> and dispatches immediate audible/visual alerts to operators.
            </div>
            <div>
              <strong className="block text-[#F5F5F7] font-semibold mb-1">SOP-Locked Keypad Governance:</strong>
              Heating recipes strictly follow quality standard operating procedures. Once an operator initiates a profile on the dashboard, the local PID keypads are automatically locked out to prevent unauthorized set-temperature tampering on the floor.
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="Functional Capabilities"
          title="Software &amp; Traceability: Every Cycle. Every Detail."
          description="Live monitoring, process trends, and batch records consolidated in one connected plant platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              index={idx + 1}
              title={feature.title}
              description={feature.description}
              subtext={feature.brochureReference}
            />
          ))}
        </div>
      </section>

      {/* Batch Inspection Report Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="Traceability Output"
          title="Audit-Ready Batch Reports (PDF &amp; Excel)"
          description="Directly generated from the Local Server database at any time, eliminating messy paper clipboards."
        />
        <BatchReportVisual />
      </section>

      {/* Related Software Platform: Fluxora */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00E5E5] block">
              Related Software Platform
            </span>
            <h3 className="text-xl font-bold text-[#F5F5F7]">
              Fluxora — Industrial IoT Blade Heating System
            </h3>
            <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed max-w-2xl font-light">
              Fluxora is the official software console for the DCN &amp; Heat Controller hardware. It monitors, controls, and records blade-heating cycles with SOP-locked profiles, real-time temperature curves, active current protection, and audit-ready PDF/Excel report exports.
            </p>
          </div>
          <a
            href="/software/fluxora/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/software/fluxora/');
            }}
            className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#050505] hover:bg-[#080D18] border border-[#41434A] hover:border-[#00E5E5] rounded-lg transition-colors whitespace-nowrap shadow-xs shrink-0"
          >
            <span>Explore Fluxora Platform</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#00E5E5]" />
          </a>
        </div>
      </section>

      {/* Verified Technical Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="specifications">
        <SectionHeading
          kicker="Technical Specifications"
          title="System Architecture Specifications"
          description="All parameters below are drawn directly from Emertech Electronics official engineering documentation."
        />

        <SpecificationTable sections={product.specifications} />
      </section>

      {/* Call To Action */}
      <CallToAction
        title="Deploy Fluxora on Your Manufacturing Floor"
        subtitle="Contact Emertech for an on-site technical demonstration, PID panel compatibility check, or detailed pilot plan."
        onNavigate={onNavigate}
        showBrochure={true}
      />
    </div>
  );
}
