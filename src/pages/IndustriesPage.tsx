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
      icon: <Wind className="w-6 h-6 text-orange-600" />,
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
      icon: <Flame className="w-6 h-6 text-orange-600" />,
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
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
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
      icon: <Factory className="w-6 h-6 text-orange-600" />,
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
      <div className="bg-white border-b border-slate-200 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Industries' }
            ]}
            onNavigate={onNavigate}
            dark={false}
          />

          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold block mb-2">
              Supported Industrial Sectors
            </span>
            <h1 
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Engineered for Demanding Industrial Operations
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
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
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Overview & Scope */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                      {ind.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {ind.title}
                      </h2>
                      <p className="text-xs text-orange-600 font-medium mt-0.5">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                      Operational Applications &amp; Focus
                    </h4>
                    <ul className="space-y-2">
                      {ind.operationalFocus.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Associated Solutions & Hardware */}
                <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-6 border border-slate-200/80 space-y-5">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-3">
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
                          className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-orange-500 hover:shadow-2xs transition-all group"
                        >
                          <div>
                            <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors block">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {p.type}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <a
                      href="/contact/"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/contact/');
                      }}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-xs"
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
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold block">
            Direct Engineering Support
          </span>
          <h3 
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-2xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Looking for an Engineered Solution for Your Facility?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Contact our engineering team in Vadodara to evaluate your plant's instrumentation, control loops, and software requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
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
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <span>View Engineering Services</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
