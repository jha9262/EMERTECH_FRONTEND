import React from 'react';
import {
  ArrowRight,
  Cpu,
  ArrowUpRight,
  Radio,
  Sliders,
  Database,
  FileCheck,
  Wind,
  Flame,
  ShieldAlert,
  Factory,
  Download,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { getSoftwareIcon } from '../components/IndustrialSoftwareIcons';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // 4 Featured Solutions (reduced from 9 for scannability and clear focus)
  const featuredSolutions = [
    {
      challenge: "Blade Mould Heating & Thermal Uniformity",
      symptom: "Manual thermostat adjustments cause hot-spots, uneven composite resin curing, and risk heater overcurrent burnouts.",
      solution: "Fluxora",
      purpose: "Industrial IoT Blade Heating System",
      route: "/software/fluxora/",
      slug: "fluxora"
    },
    {
      challenge: "Rotor Blade Weight & Center-of-Gravity Deviation",
      symptom: "Unbalanced 3-blade sets generate severe hub vibrations, accelerated bearing wear, and dangerous turbine aerodynamic imbalance.",
      solution: "Equipoise",
      purpose: "Blade Balancing & Mass Distribution",
      route: "/software/equipoise/",
      slug: "equipoise"
    },
    {
      challenge: "Factory Fire Alarm Integration & Siren Staging",
      symptom: "Dispersed smoke detectors lack coordinated siren evacuation alerts, emergency lighting triggers, or ventilation fan cutoffs.",
      solution: "Smolder",
      purpose: "Fire Alarm & Siren Automation",
      route: "/software/smolder/",
      slug: "smolder"
    },
    {
      challenge: "Uncontrolled Peak Power & Low Power Factor Penalty",
      symptom: "Unmonitored heavy induction loads trigger high peak-demand tariff penalties and avoidable energy losses.",
      solution: "Clime",
      purpose: "Plant Energy Monitoring & Demand Analytics",
      route: "/software/clime/",
      slug: "clime"
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-24 pb-20 bg-[#050505] text-[#F5F5F7]">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          EPAM-style layout with dark ambient aura and gradient accent
          ========================================================================= */}
      <HeroSection onNavigate={onNavigate} />

      {/* =========================================================================
          SECTION 2: CORE CAPABILITIES (Immediately Following Hero)
          3 compact blocks: Industrial Connectivity, Process Monitoring & Control, Localized Software
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-medium block">
            Core Capabilities
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-[38px] font-light tracking-tight text-[#F5F5F7] leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Connecting Industrial Equipment with Intelligent Operations
          </h2>
          <p className="text-base sm:text-[17px] text-[#C2C6D0] leading-relaxed font-normal">
            We bring industrial hardware and software together to support process visibility, control, reporting, and operational workflows.
          </p>
        </div>

        {/* Three Clean Business Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Block 1: Industrial Connectivity */}
          <div className="bg-[#0B101B] rounded-xl border border-[#292D36] p-7 shadow-sm hover:border-[#00E5E5]/50 transition-all duration-200 space-y-4 group">
            <div className="w-11 h-11 rounded-lg bg-[#050505] border border-[#292D36] flex items-center justify-center text-[#00E5E5] group-hover:border-[#00E5E5]/40 transition-colors">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-[#F5F5F7]">
              Industrial Connectivity
            </h3>
            <p className="text-sm text-[#C2C6D0] leading-relaxed font-normal">
              Connect plant-floor machinery, Modbus RTU sensors, and legacy PID instruments reliably across harsh industrial environments without rewiring.
            </p>
          </div>

          {/* Block 2: Monitoring & Control */}
          <div className="bg-[#0B101B] rounded-xl border border-[#292D36] p-7 shadow-sm hover:border-[#087BFF]/50 transition-all duration-200 space-y-4 group">
            <div className="w-11 h-11 rounded-lg bg-[#050505] border border-[#292D36] flex items-center justify-center text-[#087BFF] group-hover:border-[#087BFF]/40 transition-colors">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-[#F5F5F7]">
              Monitoring &amp; Control
            </h3>
            <p className="text-sm text-[#C2C6D0] leading-relaxed font-normal">
              Equip operators with responsive browser HMIs, multi-zone temperature regulation, recipe locks, and automated emergency alarm triggers.
            </p>
          </div>

          {/* Block 3: Operational Information */}
          <div className="bg-[#0B101B] rounded-xl border border-[#292D36] p-7 shadow-sm hover:border-[#A855F7]/50 transition-all duration-200 space-y-4 group">
            <div className="w-11 h-11 rounded-lg bg-[#050505] border border-[#292D36] flex items-center justify-center text-[#A855F7] group-hover:border-[#A855F7]/40 transition-colors">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-[#F5F5F7]">
              Operational Information
            </h3>
            <p className="text-sm text-[#C2C6D0] leading-relaxed font-normal">
              Self-hosted, 100% offline edge processing that logs telemetry at 1-second intervals and generates audit-ready PDF batch records.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED HARDWARE PRODUCTS (Moved Near Top)
          Card background #0B101B, border #292D36, Cyan accents, product image
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="products">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            kicker="Field Hardware"
            title="Featured Industrial Hardware"
            description="Production-tested edge nodes and control hardware built for high-reliability factory deployment."
          />
          <a
            href="/hardware/specification/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/hardware/specification/');
            }}
            className="text-xs font-medium uppercase tracking-wider text-[#00E5E5] hover:underline flex items-center space-x-1 shrink-0 pb-2"
          >
            <span>View Full Datasheet &amp; Specs</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Featured Hardware Showcase Card */}
        <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-6 sm:p-8 lg:p-10 shadow-xl hover:border-[#41434A] transition-all">
          <div className="space-y-6">
            {/* Technical Highlights & Direct Actions */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-wider text-[#00E5E5] uppercase mb-2">
                  <span>MODEL: EM-DCN-01</span>
                  <span className="text-[#41434A]">|</span>
                  <span>DUAL-CORE ESP32</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#F5F5F7] tracking-tight">
                  DCN &amp; Heat Controller
                </h3>
                <p className="text-sm sm:text-[15px] text-[#C2C6D0] leading-relaxed mt-2.5 font-normal">
                  Ruggedized edge telemetry gateway and multi-zone heating blanket controller. Taps directly into existing Autonics PID controllers over RS-485 Modbus RTU without panel rewiring, providing 4 independent 250V/10A relay channels and CT overcurrent protection.
                </p>
              </div>

              {/* 4 Verified Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#050505] p-3 rounded-lg border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase font-mono block">Processing</span>
                  <span className="font-medium text-[#F5F5F7]">ESP32 240MHz</span>
                </div>
                <div className="bg-[#050505] p-3 rounded-lg border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase font-mono block">Switching</span>
                  <span className="font-medium text-[#F5F5F7]">4x 250V / 10A</span>
                </div>
                <div className="bg-[#050505] p-3 rounded-lg border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase font-mono block">Bus Protocol</span>
                  <span className="font-medium text-[#F5F5F7]">Modbus RTU</span>
                </div>
                <div className="bg-[#050505] p-3 rounded-lg border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase font-mono block">Network Mode</span>
                  <span className="font-medium text-[#F5F5F7]">100% Offline</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="/hardware/dcn-heat-controller/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/hardware/dcn-heat-controller/');
                  }}
                  className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7]" />
                  <span className="relative flex items-center justify-center px-6 py-2.5 rounded-full bg-[#050505] group-hover:bg-[#050505]/70 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200">
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#00E5E5]" />
                  </span>
                </a>

                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact/');
                  }}
                  className="text-xs text-[#969DAA] hover:text-[#00E5E5] transition-colors ml-auto flex items-center"
                >
                  <span>Inquire for Custom Hardware (Water/Fuel/Sensors) →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FEATURED SOLUTIONS (Reduced to 4 Core Applications)
          Problem-oriented, focused discovery with clear symptoms and solution links
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            kicker="Problem-Oriented Discovery"
            title="Featured Industrial Solutions"
            description="Start from the specific operational challenge your facility faces on the plant floor."
          />
          <a
            href="/solutions/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/solutions/');
            }}
            className="text-xs font-medium uppercase tracking-wider text-[#00E5E5] hover:underline flex items-center space-x-1 shrink-0 pb-2"
          >
            <span>Explore All 9 Solutions</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredSolutions.map((item) => (
            <div
              key={item.challenge}
              className="bg-[#0B101B] rounded-xl border border-[#292D36] p-6 sm:p-7 shadow-sm hover:border-[#41434A] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold">
                    {getSoftwareIcon(item.slug, 'w-5 h-5')}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#00E5E5] bg-[#00E5E5]/10 px-2.5 py-1 rounded border border-[#00E5E5]/20">
                    {item.solution}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-[#F5F5F7] mb-2 group-hover:text-[#00E5E5] transition-colors">
                  {item.challenge}
                </h3>

                <p className="text-sm text-[#C2C6D0] leading-relaxed mb-4 font-normal">
                  {item.symptom}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292D36] flex items-center justify-between text-xs">
                <span className="text-[#969DAA]">
                  Platform: <strong className="text-[#F5F5F7] font-medium">{item.purpose}</strong>
                </span>
                <a
                  href={item.route}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.route);
                  }}
                  className="inline-flex items-center text-[#00E5E5] hover:underline font-medium"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Software Suite Banner */}
        <div className="bg-[#080D18] rounded-xl border border-[#292D36] p-6 text-[#F5F5F7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-medium text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#00E5E5]" />
              <span>Looking for the complete industrial software catalogue?</span>
            </h4>
            <p className="text-xs text-[#969DAA]">
              Explore all 9 modular software platforms including Postern (Doors), Manifest (Tooling), and Census (Edge Video).
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/demo/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/demo/');
              }}
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#C2C6D0] hover:text-white bg-[#0B101B] hover:bg-[#111A2E] rounded-full border border-[#41434A] transition-colors"
            >
              See Demo
            </a>
            <a
              href="/software/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/software/');
              }}
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-white bg-gradient-to-r from-[#00E5E5]/80 to-[#087BFF]/80 hover:from-[#00E5E5] hover:to-[#087BFF] rounded-full transition-colors"
            >
              All Software (9) →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INDUSTRIES WE SUPPORT (Supported Sectors)
          Compact sector cards linking to /industries/
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            kicker="Supported Sectors"
            title="Industries We Support"
            description="Tailored engineering applications grounded in real operational constraints across core manufacturing sectors."
          />
          <a
            href="/industries/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/industries/');
            }}
            className="text-xs font-medium uppercase tracking-wider text-[#00E5E5] hover:underline flex items-center space-x-1 shrink-0 pb-2"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] hover:border-[#41434A] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-[#F5F5F7] mb-1.5">
                Wind Blade Composites
              </h4>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                Multi-zone mould heating, exothermic cure monitoring, and 3-blade rotor set center-of-gravity balancing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292D36]">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-medium text-[#00E5E5] hover:underline inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] hover:border-[#41434A] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#292D36] text-[#087BFF] flex items-center justify-center font-bold mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-[#F5F5F7] mb-1.5">
                Thermal &amp; Process Heating
              </h4>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                Non-intrusive telemetry tap-in for existing Autonics PID controllers and overcurrent protection on blanket zones.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292D36]">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-medium text-[#00E5E5] hover:underline inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] hover:border-[#41434A] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#292D36] text-[#A855F7] flex items-center justify-center font-bold mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-[#F5F5F7] mb-1.5">
                Plant Safety &amp; Egress
              </h4>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                Centralized fire alarm siren staging, automated ventilation dampers, and fail-safe magnetic door locks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292D36]">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-medium text-[#00E5E5] hover:underline inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] hover:border-[#41434A] transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-[#F5F5F7] mb-1.5">
                Discrete Manufacturing
              </h4>
              <p className="text-xs text-[#C2C6D0] leading-relaxed">
                Tool calibration expiry enforcement, production lot genealogy, submetering, and edge camera dock analytics.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292D36]">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-medium text-[#00E5E5] hover:underline inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW WE WORK (The 4 Stages)
          Horizontal desktop layout, shortened to 1 crisp sentence per stage
          ========================================================================= */}
      <section className="bg-[#080D18] border-y border-[#292D36] py-16 sm:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="The Operational Journey"
            title="How We Works"
            description="A four-stage engineering workflow connecting physical equipment to actionable operational insights."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Stage 01 */}
            <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-medium text-[#00E5E5] bg-[#00E5E5]/10 px-2.5 py-0.5 rounded border border-[#00E5E5]/20 inline-block mb-3">
                  Stage 01
                </span>
                <h3 className="text-base font-medium text-[#F5F5F7] mb-2">
                  Understand Operation
                </h3>
                <p className="text-xs text-[#C2C6D0] leading-relaxed">
                  Identify process constraints, field sensors, and machinery interfaces across your plant floor.
                </p>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-medium text-[#087BFF] bg-[#087BFF]/10 px-2.5 py-0.5 rounded border border-[#087BFF]/20 inline-block mb-3">
                  Stage 02
                </span>
                <h3 className="text-base font-medium text-[#F5F5F7] mb-2">
                  Connect Equipment
                </h3>
                <p className="text-xs text-[#C2C6D0] leading-relaxed">
                  Deploy non-intrusive Modbus RTU/RS485 taps and industrial edge nodes with zero panel rewiring.
                </p>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-medium text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-0.5 rounded border border-[#A855F7]/20 inline-block mb-3">
                  Stage 03
                </span>
                <h3 className="text-base font-medium text-[#F5F5F7] mb-2">
                  Monitor &amp; Manage
                </h3>
                <p className="text-xs text-[#C2C6D0] leading-relaxed">
                  Access live browser-based telemetry, multi-zone recipe locks, and localized control workflows.
                </p>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="bg-[#0B101B] rounded-xl p-6 border border-[#292D36] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-medium text-[#00E5E5] bg-[#00E5E5]/10 px-2.5 py-0.5 rounded border border-[#00E5E5]/20 inline-block mb-3">
                  Stage 04
                </span>
                <h3 className="text-base font-medium text-[#F5F5F7] mb-2">
                  Act on Information
                </h3>
                <p className="text-xs text-[#C2C6D0] leading-relaxed">
                  Generate tamper-evident batch reports, digital certificates, and actionable audit records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ENGINEERING PROOF
          Verified DCN specs + authentic demonstration batch report
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          kicker="Engineering Evidence"
          title="Engineering Proof"
          description="Production-verified hardware specifications and real batch inspection data from active plant deployments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Verified Hardware Specifications */}
          <div className="lg:col-span-6 bg-[#0B101B] rounded-xl border border-[#292D36] p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#292D36]">
              <div className="w-9 h-9 rounded-lg bg-[#050505] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-medium text-[#F5F5F7]">
                  DCN Edge Hardware Specifications
                </h4>
                <p className="text-[11px] text-[#969DAA] font-mono">
                  Verified against production brochure &amp; schematics
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between py-1.5 border-b border-[#292D36]">
                <span className="text-[#969DAA]">Processing Core</span>
                <span className="font-mono text-[#F5F5F7] font-medium text-right">Dual-Core ESP32 Industrial MCU</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-[#292D36]">
                <span className="text-[#969DAA]">Field Communication</span>
                <span className="font-mono text-[#F5F5F7] font-medium text-right">RS-485 Modbus RTU / TCP</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-[#292D36]">
                <span className="text-[#969DAA]">Control Output Channels</span>
                <span className="font-mono text-[#F5F5F7] font-medium text-right">4 Independent Relay Switching Zones</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-[#292D36]">
                <span className="text-[#969DAA]">Current Monitoring</span>
                <span className="font-mono text-[#F5F5F7] font-medium text-right">CT overcurrent trip protection</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-[#292D36]">
                <span className="text-[#969DAA]">Instrument Compatibility</span>
                <span className="font-mono text-[#F5F5F7] font-medium text-right">Autonics PID, Selec, Modbus meters</span>
              </div>
              <div className="flex items-start justify-between py-1.5">
                <span className="text-[#969DAA]">Operating Architecture</span>
                <span className="font-mono text-[#F5F5F7] font-medium text-right">100% Offline Local SBC (No Cloud)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href="/hardware/specification/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/hardware/specification/');
                }}
                className="inline-flex items-center text-xs font-medium text-[#00E5E5] hover:underline"
              >
                <span>Read Full Technical Datasheet</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href="/assets/aistudio/Emertech_Brochure_881bad62.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#969DAA] hover:text-[#00E5E5] inline-flex items-center gap-1 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#00E5E5]" />
                <span>Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Demonstration Report Output (Simplified) */}
          <div className="lg:col-span-6 bg-[#0B101B] rounded-xl p-6 sm:p-7 text-[#F5F5F7] border border-[#292D36] shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#292D36]">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#050505] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-[#F5F5F7]">
                    Demonstration Report Output
                  </h4>
                  <p className="text-[11px] text-[#969DAA] font-mono">
                    Batch inspection telemetry record
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-medium bg-[#050505] text-[#00E5E5] px-2.5 py-1 rounded border border-[#292D36]">
                Fluxora PDF / CSV
              </span>
            </div>

            {/* Simplified Report Preview */}
            <div className="bg-[#050505] p-4 sm:p-5 rounded-lg border border-[#292D36] space-y-4">
              {/* Batch ID & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#292D36]">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-[#969DAA] uppercase font-mono block">Batch ID</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#F5F5F7] tracking-wider">
                    BLD-84M-2026-0418
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00E5E5]/15 text-[#00E5E5] border border-[#00E5E5]/30 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-[#00E5E5]" />
                  <span>PASSED</span>
                </div>
              </div>

              {/* 4 Key Metrics */}
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="bg-[#0B101B] p-2.5 rounded-md border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase block">Max Thermal Deviation</span>
                  <span className="text-[#00E5E5] font-semibold text-sm">±1.2°C</span>
                </div>
                <div className="bg-[#0B101B] p-2.5 rounded-md border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase block">Total Zones</span>
                  <span className="text-[#F5F5F7] font-semibold text-sm">24 active <span className="text-[#969DAA] font-normal text-xs">/ 0 fault</span></span>
                </div>
                <div className="bg-[#0B101B] p-2.5 rounded-md border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase block">Duration</span>
                  <span className="text-[#F5F5F7] font-semibold text-sm">04h 32m</span>
                </div>
                <div className="bg-[#0B101B] p-2.5 rounded-md border border-[#292D36]">
                  <span className="text-[#969DAA] text-[10px] uppercase block">Overcurrent Trips</span>
                  <span className="text-[#00E5E5] font-semibold text-sm">0 alarms</span>
                </div>
              </div>

              {/* Recipe */}
              <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-[#292D36]">
                <span className="text-[#969DAA]">Recipe:</span>
                <span className="text-[#F5F5F7] font-medium">3-Stage Epoxy Cure (75°C – 90°C)</span>
              </div>
            </div>

            {/* Footer note */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-[#00E5E5] font-sans font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5E5] shrink-0" />
                <span>Sample from actual production run – October 2026</span>
              </div>
              <p className="text-[#969DAA] text-[11px] font-sans leading-relaxed">
                Tamper-evident batch record formatted for ISO 9001 audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FINAL ENQUIRY CTA
          "Let's Discuss Your Industrial Requirements"
          ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark-section relative rounded-2xl bg-gradient-to-b from-[#080D18] to-[#0B101B] border border-[#292D36] p-8 sm:p-14 text-[#F5F5F7] text-center space-y-6 overflow-hidden">
          {/* Subtle Ambient Light Aura in CTA card */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00E5E5]/10 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-medium block">
              Direct Engineering Engagement
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[40px] font-light tracking-tight text-white max-w-2xl mx-auto leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Let's Discuss Your Industrial Requirements
            </h2>
            <p className="text-base sm:text-[17px] text-[#C2C6D0] max-w-xl mx-auto leading-relaxed font-normal">
              Whether you need to retrofit composite mould heating, connect factory telemetry, or pilot a localized software platform, our engineering team in Vadodara is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact/');
                }}
                className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[#00E5E5]/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7]" />
                <span className="relative flex items-center justify-center px-8 py-3 rounded-full bg-[#050505] group-hover:bg-[#050505]/70 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200">
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#00E5E5] group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact/');
                }}
                className="inline-flex items-center justify-center px-7 py-3 text-xs font-medium uppercase tracking-wider text-[#C2C6D0] hover:text-white bg-[#050505] hover:bg-[#111A2E] border border-[#41434A] rounded-full transition-colors"
              >
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
