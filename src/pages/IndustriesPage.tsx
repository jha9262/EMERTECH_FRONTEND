import React from 'react';
import { 
  ArrowRight, 
  Wind, 
  Flame, 
  ShieldAlert, 
  Factory, 
  ArrowUpRight, 
  Check, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
}

export function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const industries = [
    {
      id: 'wind-composites',
      title: 'Wind Turbine Blade Manufacturing & Composites',
      icon: <Wind className="w-6 h-6 text-[#00E5E5]" />,
      tagline: 'Precision thermal cure cycles and dynamic 3-blade rotor balancing',
      description: 'Wind turbine blade fabrication requires stringent quality assurance during exothermic resin curing and precise physical balancing of completed blades before dispatch to installation towers.',
      operationalFocus: [
        'Multi-zone mould heating blanket monitoring across 60m–100m+ blade moulds',
        'SOP-locked ramp and soak temperature recipe execution without hot-spots',
        'Independent heater zone overcurrent detection and rapid thermal cutoff',
        'Blade mass, center-of-gravity, and moment-weight balancing for 3-blade rotor sets'
      ],
      associatedProducts: [
        { name: 'DCN & Heat Controller', type: 'Hardware', route: '/hardware/dcn-heat-controller/' },
        { name: 'Fluxora', type: 'Software', route: '/software/fluxora/' },
        { name: 'Equipoise', type: 'Software', route: '/software/equipoise/' }
      ]
    },
    {
      id: 'thermal-processing',
      title: 'Thermal Processing & Industrial Heating Systems',
      icon: <Flame className="w-6 h-6 text-[#00E5E5]" />,
      tagline: 'Non-intrusive telemetry tap-in for existing PID temperature loops',
      description: 'Continuous and batch thermal processes (curing ovens, industrial drying blankets, heat-treatment tunnels) demand constant temperature surveillance without disrupting certified safety circuits.',
      operationalFocus: [
        'Non-intrusive Modbus RTU telemetry collection from existing Autonics or Selec PID controllers',
        'Zero rewiring of primary contactor or SSR heating control cabinets',
        '1000ms loop polling of multi-point thermocouples and current transformers (CT)',
        '100% offline-first local SBC architecture eliminating cloud downtime'
      ],
      associatedProducts: [
        { name: 'DCN & Heat Controller', type: 'Hardware', route: '/hardware/dcn-heat-controller/' },
        { name: 'Fluxora', type: 'Software', route: '/software/fluxora/' }
      ]
    },
    {
      id: 'plant-safety',
      title: 'Industrial Facilities & Plant Safety Management',
      icon: <ShieldAlert className="w-6 h-6 text-[#00E5E5]" />,
      tagline: 'Centralized evacuation sirens, emergency egress, and hazard interlocking',
      description: 'Large manufacturing plants and chemical process facilities require coordinated fire alarm staging, automated ventilation shut-offs, and fail-safe emergency egress management.',
      operationalFocus: [
        'Centralized early fire alarm monitoring with staged siren alerts across production zones',
        'Automated fan and ventilation damper trip interlocks to retard smoke propagation',
        'Electromagnetic emergency door locks with instant fail-safe release upon alarm',
        'Normal-shift access control to prevent unauthorized use of emergency exits'
      ],
      associatedProducts: [
        { name: 'Smolder', type: 'Software', route: '/software/smolder/' },
        { name: 'Postern', type: 'Software', route: '/software/postern/' }
      ]
    },
    {
      id: 'discrete-manufacturing',
      title: 'Discrete Manufacturing, Tooling & Energy Operations',
      icon: <Factory className="w-6 h-6 text-[#00E5E5]" />,
      tagline: 'End-to-end shop-floor visibility, tool calibration, and energy analytics',
      description: 'Heavy fabrication, electrical panel assembly, and precision machining shops need unified tracking for work-in-progress, critical tooling calibration, and energy demand charges.',
      operationalFocus: [
        'Real-time feeder submetering and peak-demand penalty management',
        'Calibration validity date enforcement and custody logging for torque and crimp tooling',
        'Shop-floor traveler cards, batch lot traceability, and defect containment routing',
        'Long-range telemetry gateways bridging dispersed machinery across electrically noisy plants',
        'Edge camera analytics for loading dock vehicle turnaround and PPE helmet compliance'
      ],
      associatedProducts: [
        { name: 'Clime', type: 'Software', route: '/software/clime/' },
        { name: 'Manifest', type: 'Software', route: '/software/manifest/' },
        { name: 'Foundry', type: 'Software', route: '/software/foundry/' },
        { name: 'Herald', type: 'Software', route: '/software/herald/' },
        { name: 'Census', type: 'Software', route: '/software/census/' }
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Top Banner / Breadcrumbs */}
      <div className="bg-[#020610] border-b border-[#292D36] pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Industries' }
            ]}
            onNavigate={onNavigate}
            dark={true}
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-semibold block mb-2">
              Supported Industrial Sectors
            </span>
            <h1 
              className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F7] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Engineered for <span className="epam-gradient-text font-normal">Demanding Industrial Operations</span>
            </h1>
            <p className="mt-4 text-base text-[#C2C6D0] leading-relaxed">
              Emertech provides robust industrial hardware and software solutions specifically suited to manufacturing, composite processing, process heating, and plant safety environments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-10">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#0B101B] rounded-xl border border-[#292D36] p-6 sm:p-8 hover:border-[#41434A] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Overview & Scope */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#292D36] flex items-center justify-center shrink-0">
                      {ind.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#F5F5F7]">
                        {ind.title}
                      </h2>
                      <p className="text-xs text-[#00E5E5] font-medium mt-0.5">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#C2C6D0] leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#969DAA] font-bold mb-3">
                      Operational Applications &amp; Focus
                    </h4>
                    <ul className="space-y-2">
                      {ind.operationalFocus.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-[#C2C6D0]">
                          <Check className="w-4 h-4 text-[#00E5E5] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Associated Solutions & Hardware */}
                <div className="lg:col-span-5 bg-[#080D18] rounded-xl p-6 border border-[#292D36] space-y-5">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-bold mb-3">
                      Applicable Products &amp; Platforms
                    </h4>
                    <div className="space-y-2">
                      {ind.associatedProducts.map((p) => (
                        <a
                          key={p.name}
                          href={p.route}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(p.route);
                          }}
                          className="flex items-center justify-between p-3 rounded-lg bg-[#050505] border border-[#292D36] hover:border-[#00E5E5] transition-all group"
                        >
                          <div>
                            <span className="text-xs font-bold text-[#F5F5F7] group-hover:text-[#00E5E5] transition-colors block">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-[#969DAA] font-mono">
                              {p.type}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#969DAA] group-hover:text-[#00E5E5] transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#292D36]">
                    <a
                      href="/contact/"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/contact/');
                      }}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#00E5E5] hover:bg-[#00E5E5]/90 rounded-lg transition-colors font-medium shadow-xs"
                    >
                      <span>Discuss Your Industry Application</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B101B] border border-[#292D36] rounded-2xl p-8 sm:p-12 text-[#F5F5F7] text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-semibold block">
            Direct Engineering Support
          </span>
          <h3 
            className="text-2xl sm:text-3xl font-light tracking-tight text-[#F5F5F7] max-w-2xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Looking for an <span className="epam-gradient-text font-normal">Engineered Solution</span> for Your Facility?
          </h3>
          <p className="text-sm text-[#C2C6D0] max-w-xl mx-auto leading-relaxed">
            Contact our engineering team in Vadodara to evaluate your plant's instrumentation, control loops, and software requirements.
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
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href="/services/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/services/');
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#050505] hover:bg-[#080D18] border border-[#41434A] rounded-lg transition-colors"
            >
              <span>View Engineering Services</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
