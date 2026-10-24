import React from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Check, 
  ShieldCheck, 
  ArrowUpRight, 
  Layers, 
  Wrench, 
  Monitor, 
  FileText, 
  Zap, 
  Clock, 
  FileCheck,
  CheckCircle2,
  HardDrive,
  Radio,
  Sliders,
  Database,
  Wind,
  Flame,
  ShieldAlert,
  Factory
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { SoftwareCard } from '../components/SoftwareCard';
import { HARDWARE_PRODUCTS } from '../data/products';
import { SOFTWARE_PRODUCTS } from '../data/software';
import { getSoftwareIcon } from '../components/IndustrialSoftwareIcons';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // 9 Operational Challenges for Problem-Oriented Discovery
  const operationalChallenges = [
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
      challenge: "Emergency Exit Compliance & Panic Door Interlocks",
      symptom: "Unauthorized access through fire doors during normal shifts, with risks of locked doors trapping workers during true emergencies.",
      solution: "Postern",
      purpose: "Emergency Egress & Door Control",
      route: "/software/postern/",
      slug: "postern"
    },
    {
      challenge: "Uncontrolled Peak Power & Low Power Factor Penalty",
      symptom: "Unmonitored heavy induction loads trigger high peak-demand tariff penalties and avoidable energy losses.",
      solution: "Clime",
      purpose: "Plant Energy Monitoring & Demand Analytics",
      route: "/software/clime/",
      slug: "clime"
    },
    {
      challenge: "Shop-Floor Tool Misplacement & Calibration Drift",
      symptom: "Critical torque wrenches, crimpers, and calibration jigs get lost or operated beyond verified ISO/audit validity dates.",
      solution: "Manifest",
      purpose: "Industrial Asset & Tooling Tracking",
      route: "/software/manifest/",
      slug: "manifest"
    },
    {
      challenge: "Shop-Floor WIP Blindspots & Defect Traceability",
      symptom: "Paper traveler cards lose production lot genealogy, making QA defect containment and rework tracking slow and error-prone.",
      solution: "Foundry",
      purpose: "Shop-Floor ERP & Work-In-Progress Tracking",
      route: "/software/foundry/",
      slug: "foundry"
    },
    {
      challenge: "Dispersed Plant Equipment & Noisy Serial Lines",
      symptom: "Remote substations, pumps, and legacy serial equipment suffer telemetry gaps due to intense electromagnetic interference.",
      solution: "Herald",
      purpose: "Industrial Telemetry & Gateway Bridge",
      route: "/software/herald/",
      slug: "herald"
    },
    {
      challenge: "Loading Bay Congestion & PPE Safety Compliance",
      symptom: "Manual gate logs cause transport dock bottlenecks, and workers entering active fork-truck zones without mandatory hardhats.",
      solution: "Census",
      purpose: "Edge Video Analytics & Operational Safety",
      route: "/software/census/",
      slug: "census"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          Full-width industrial photography background with dark navy overlay
          ========================================================================= */}
      <HeroSection onNavigate={onNavigate} />

      {/* =========================================================================
          SECTION 2: WHAT EMERTECH DOES (Business Capabilities)
          Heading: "Connecting Industrial Equipment with Intelligent Operations"
          Supporting: "We bring industrial hardware and software together to support process visibility, control, reporting, and operational workflows."
          3 Clean Content Blocks: Industrial Connectivity, Monitoring & Control, Operational Information
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold block">
            What Emertech Does
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Connecting Industrial Equipment with Intelligent Operations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We bring industrial hardware and software together to support process visibility, control, reporting, and operational workflows.
          </p>
        </div>

        {/* Three Clean Business Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1: Industrial Connectivity */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-slate-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Industrial Connectivity
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connect relevant equipment and supported systems to collect and communicate operational data reliably across harsh industrial shop floors.
            </p>
          </div>

          {/* Block 2: Monitoring & Control */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-slate-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Monitoring &amp; Control
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Help operators understand process conditions and interact with supported systems through responsive browser HMIs, recipe locks, and alarm triggers.
            </p>
          </div>

          {/* Block 3: Operational Information */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs hover:border-slate-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Operational Information
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Make available records, reports, and process information easier to access where supported by the relevant product, delivering audit-ready batch records.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: HOW EMERTECH WORKS
          Simple, professional four-stage visual explaining the general relationship
          between industrial operations and connected systems
          ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="The Operational Journey"
            title="How Emertech Works"
            description="A structured, reliable approach connecting physical factory equipment to operational clarity and business decision-making."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 01 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded border border-orange-100">
                    Stage 01
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Understand the Operation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Identify the customer's process, equipment, and operational requirements, evaluating existing field instrumentation and plant floor constraints.
                </p>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded border border-orange-100">
                    Stage 02
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Connect the System
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Establish the appropriate hardware and connectivity approach based on the actual requirements, tapping into Modbus loops without rewiring panels.
                </p>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded border border-orange-100">
                    Stage 03
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Monitor and Manage
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use the relevant software and supported workflows to view, configure, and operate the connected system with multi-stage recipe locks.
                </p>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="bg-white rounded-xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded border border-orange-100">
                    Stage 04
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Act on Information
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide accessible logs, alerts, reports, and traceability records to inform operations, enforce quality assurance, and pass customer audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PROBLEM-ORIENTED DISCOVERY
          "Find the Right Solution for Your Operation"
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            kicker="Problem-Oriented Discovery"
            title="Find the Right Solution for Your Operation"
            description="Start from the specific operational, safety, or quality challenge your facility faces on the plant floor."
          />
          <a
            href="/solutions/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/solutions/');
            }}
            className="text-xs font-semibold uppercase tracking-wider text-orange-600 hover:text-orange-700 flex items-center space-x-1 shrink-0 pb-2"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operationalChallenges.map((item) => (
            <div
              key={item.challenge}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold border border-orange-100">
                    {getSoftwareIcon(item.slug, 'w-4 h-4')}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {item.solution}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.challenge}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.symptom}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  Addressed by <strong className="text-slate-800">{item.solution}</strong>
                </span>
                <a
                  href={item.route}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.route);
                  }}
                  className="inline-flex items-center text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOW EMERTECH IS ORGANISED (The 4 Pillars)
          ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Business Architecture"
            title="How Emertech Is Organised"
            description="A clear separation of operational problems, industrial hardware, localized software platforms, and verified engineering services."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 01: Solutions */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                  Pillar 01
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Problem-oriented application engineering across 9 manufacturing domains: blade curing, mass balancing, fire safety, egress, energy, tool tracking, ERP, telemetry, and edge video.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <a
                  href="/solutions/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/solutions/');
                  }}
                  className="inline-flex items-center text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Pillar 02: Hardware Products */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                  Pillar 02
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Hardware Products
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ruggedized industrial IoT edge hardware. The DCN &amp; Heat Controller features ESP32 processing, RS-485 Modbus RTU, 4 independent relay zones, and 1-second sampling.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <a
                  href="/hardware/dcn-heat-controller/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/hardware/dcn-heat-controller/');
                  }}
                  className="inline-flex items-center text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>Hardware Catalogue</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Pillar 03: Software Platforms */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                  <Monitor className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                  Pillar 03
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Software Platforms
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  9 purpose-built industrial software platforms designed for 100% offline local SBC execution, live dashboard telemetry, recipe enforcement, and audit batch reports.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <a
                  href="/software/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/software/');
                  }}
                  className="inline-flex items-center text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>View All 9 Platforms</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Pillar 04: Engineering Services */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                  Pillar 04
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Engineering Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified field engineering: site technical consultation, Autonics PID compatibility checks without panel rewiring, communication gateway integration, and pilot commissioning.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <a
                  href="/services/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/services/');
                  }}
                  className="inline-flex items-center text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TARGET INDUSTRIES (Supported Sectors)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
            className="text-xs font-semibold uppercase tracking-wider text-orange-600 hover:text-orange-700 flex items-center space-x-1 shrink-0 pb-2"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                Wind Blade Composites
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-zone mould heating, exothermic cure monitoring, and 3-blade rotor set center-of-gravity balancing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                Thermal &amp; Process Heating
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Non-intrusive telemetry tap-in for existing Autonics PID controllers and overcurrent protection on blanket zones.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                Plant Safety &amp; Egress
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralized fire alarm siren staging, automated ventilation dampers, and fail-safe magnetic door locks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold mb-4 border border-orange-100">
                <Factory className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                Discrete Manufacturing
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tool calibration expiry enforcement, production lot genealogy, submetering, and edge camera dock analytics.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="/industries/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/industries/');
                }}
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRODUCT PORTFOLIO (Separated Cleanly)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hardware Product */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <SectionHeading
              kicker="Field Hardware"
              title="Industrial Hardware Products"
              description="DCN & Heat Controller: Ruggedized edge monitoring and relay switching for high-current industrial processes."
            />
            <a
              href="/hardware/dcn-heat-controller/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/hardware/dcn-heat-controller/');
              }}
              className="text-xs font-semibold uppercase tracking-wider text-orange-600 hover:text-orange-700 flex items-center space-x-1 shrink-0 pb-2"
            >
              <span>Hardware Specification</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="max-w-3xl">
            <ProductCard product={HARDWARE_PRODUCTS[0]} onNavigate={onNavigate} />
          </div>
        </div>

        {/* Software Platforms */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <SectionHeading
              kicker="Operational Software"
              title="Software Platforms for Industrial Operations"
              description="Nine specialized software solutions built for shop-floor visibility, automated safety interlocks, and quality traceability."
            />
            <a
              href="/software/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/software/');
              }}
              className="text-xs font-semibold uppercase tracking-wider text-orange-600 hover:text-orange-700 flex items-center space-x-1 shrink-0 pb-2"
            >
              <span>View Software Catalogue (9)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SOFTWARE_PRODUCTS.map((software) => (
              <SoftwareCard
                key={software.slug}
                software={software}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PRODUCT EVIDENCE & CREDIBILITY
          ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            kicker="Engineering Evidence"
            title="Product Evidence &amp; Verification"
            description="Grounded in verified technical specifications, authentic brochure documentation, and actual batch inspection outputs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Verified Hardware Specifications */}
            <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    DCN Edge Hardware Specifications
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Verified against production brochure &amp; schematics
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Processing Core</span>
                  <span className="font-mono text-slate-900 font-semibold text-right">Dual-Core ESP32 Industrial MCU</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Field Communication</span>
                  <span className="font-mono text-slate-900 font-semibold text-right">RS-485 Modbus RTU / TCP (1000ms loop)</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Control Output Channels</span>
                  <span className="font-mono text-slate-900 font-semibold text-right">4 Independent Relay Switching Zones</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Current Monitoring</span>
                  <span className="font-mono text-slate-900 font-semibold text-right">Current Transformer (CT) overcurrent trip</span>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Instrument Compatibility</span>
                  <span className="font-mono text-slate-900 font-semibold text-right">Autonics PID, Selec, Modbus meters</span>
                </div>
                <div className="flex items-start justify-between py-1.5">
                  <span className="text-slate-500 font-medium">Operating Architecture</span>
                  <span className="font-mono text-slate-900 font-semibold text-right">100% Offline Local SBC (No Cloud)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/hardware/dcn-heat-controller/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/hardware/dcn-heat-controller/');
                  }}
                  className="inline-flex items-center text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>Read Full DCN Technical Brochure</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Right: Authentic Batch Inspection Artifact Sample */}
            <div className="lg:col-span-6 bg-slate-900 rounded-xl p-6 sm:p-7 text-white shadow-md space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-slate-200">Tamper-Resistant Report Sample</span>
                </div>
                <span className="text-[10px] bg-slate-800 text-orange-400 px-2 py-0.5 rounded border border-slate-700">
                  PDF / Excel Output
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2 text-[11px] text-slate-300">
                <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-1">
                  <span>BATCH ID: BLD-84M-2026-0418</span>
                  <span>STATUS: PASSED</span>
                </div>
                <div className="flex justify-between">
                  <span>Recipe: 3-Stage Epoxy Cure (75°C - 90°C)</span>
                  <span>Duration: 04h 32m</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Zones: 24 active / 0 faulted</span>
                  <span>Max Deviation: ±1.2°C</span>
                </div>
                <div className="flex justify-between">
                  <span>Overcurrent Alarm Count: 0</span>
                  <span>Sampling Interval: 1.0s</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-1 border-t border-slate-800">
                  <span>Supervisor: S. Verma (#1084)</span>
                  <span>Digital Hash: verified</span>
                </div>
              </div>

              <p className="text-slate-400 text-[11px] font-sans leading-relaxed">
                Every production cure cycle creates an encrypted, tamper-evident batch record formatted for ISO 9001 quality audits and prime turbine customer verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FINAL ENQUIRY CTA
          "Let's Discuss Your Industrial Requirements"
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-14 text-white text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">
            Direct Engineering Engagement
          </span>
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Let's Discuss Your Industrial Requirements
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you need to retrofit composite mould heating, connect factory telemetry, or pilot a localized software platform, our engineering team in Vadodara is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Talk to Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
