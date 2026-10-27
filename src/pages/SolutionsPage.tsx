import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { CallToAction } from '../components/CallToAction';
import { getSoftwareIcon } from '../components/IndustrialSoftwareIcons';
import { ArrowRight, Cpu, ShieldCheck } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const solutions = [
    {
      id: 'blade-heating',
      title: 'Industrial Blade-Heating Monitoring and Control',
      subtitle: 'Multi-zone heating control with SOP recipe locks across 70m–100m+ wind turbine moulds',
      softwareSlug: 'fluxora',
      softwareName: 'Fluxora & DCN Hardware',
      route: '/software/fluxora/',
      hardwareLink: '/hardware/dcn-heat-controller/',
      problem: 'In composite manufacturing, heating blankets across long moulds require precise ramp, soak, and cooling curves. Manual PID adjustments cause cure defects, while unmonitored blanket currents risk costly mold burns.',
      howItWorks: 'DCN edge nodes poll Autonics PID controllers over RS485 Modbus RTU without panel rewiring. Fluxora locks PID keypads, halts heating immediately upon abnormal current draw, and exports audit-ready PDF/Excel certificates.'
    },
    {
      id: 'blade-balancing',
      title: 'Blade Weight and Moment Balancing',
      subtitle: 'Static moment computation and matched 3-blade rotor set pairing',
      softwareSlug: 'equipoise',
      softwareName: 'Equipoise',
      route: '/software/equipoise/',
      problem: 'Slight resin infusion weight variations between cured wind turbine blades create dynamic rotor unbalance, causing high bearing fatigue and gearbox wear.',
      howItWorks: 'Calculates total blade mass, longitudinal center of gravity, and static moment from load-cell readings, pairing manufactured blades into balanced 3-blade sets with minimum moment differential.'
    },
    {
      id: 'fire-siren',
      title: 'Fire Alarm and Siren Coordination',
      subtitle: 'Centralized multi-zone detector mapping and staged plant evacuation sirens',
      softwareSlug: 'smolder',
      softwareName: 'Smolder',
      route: '/software/smolder/',
      problem: 'Loud machinery noise in industrial halls makes isolated smoke alarms hard to hear, delaying evacuation and emergency team intervention.',
      howItWorks: 'Centralizes inputs from optical and thermal detectors, activating zone-specific sirens and strobe relays, and dispatching an immediate emergency signal to release emergency doors.'
    },
    {
      id: 'emergency-doors',
      title: 'Emergency Door Management',
      subtitle: 'Day-to-day access restrictions with fail-safe magnetic release in emergencies',
      softwareSlug: 'postern',
      softwareName: 'Postern',
      route: '/software/postern/',
      problem: 'Emergency exits must stay shut against unauthorized perimeter access and climate loss, but must never trap personnel during evacuation.',
      howItWorks: 'Manages electromagnetic door locks via industrial digital I/O. Automatically de-energizes magnetic locks upon receiving a fire or disaster trigger from Smolder, guaranteeing immediate egress.'
    },
    {
      id: 'energy-monitoring',
      title: 'Industrial Energy Monitoring',
      subtitle: 'Submetering, peak demand forecasting, and specific energy consumption accounting',
      softwareSlug: 'clime',
      softwareName: 'Clime',
      route: '/software/clime/',
      problem: 'High electricity tariffs, peak demand penalties, and unmonitored motor loads drive up plant operating costs without visibility into which machines are wasting energy.',
      howItWorks: 'Polls multi-function energy meters over Modbus RTU/TCP, tracking active power (kW), power factor, and harmonics. Correlates energy (kWh) directly with production work orders.'
    },
    {
      id: 'asset-tracking',
      title: 'Plant Asset & Tooling Tracking',
      subtitle: 'Location history, tool check-out workflows, and calibration expiration alerts',
      softwareSlug: 'manifest',
      softwareName: 'Manifest',
      route: '/software/manifest/',
      problem: 'Heating blankets, calibration instruments, and expensive fixtures move across expansive plant bays, leading to lost tools and uncalibrated equipment being used in production.',
      howItWorks: 'Associates assets with QR or RFID tags. Technicians scan assets at checkout stations; Manifest logs usage hours, station assignments, and alerts when calibration dates expire.'
    },
    {
      id: 'production-management',
      title: 'Production ERP & Work Tracking',
      subtitle: 'BOM management, workstation WIP routing, and raw-material-to-product genealogy',
      softwareSlug: 'foundry',
      softwareName: 'Foundry',
      route: '/software/foundry/',
      problem: 'Disconnected spreadsheets cause material shortages on assembly lines, untracked scrap rates, and delayed deliveries in custom equipment manufacturing.',
      howItWorks: 'Connects sales orders to engineering BOMs, dispatches digital work instructions to line terminals, and tracks batch genealogy from raw materials to finished dispatch inspection.'
    },
    {
      id: 'long-range-communication',
      title: 'Long-Range Communication Gateway',
      subtitle: 'Industrial telemetry transmission across cellular and radio links with store-and-forward',
      softwareSlug: 'herald',
      softwareName: 'Herald',
      route: '/software/herald/',
      problem: 'Remote substations, wind towers, and dispersed pump sites lack local Ethernet, causing communication dropouts and unmonitored equipment alarms.',
      howItWorks: 'Gathers telemetry from field Modbus devices, buffers data locally in non-volatile flash memory, and transmits encrypted packets across cellular or long-range radio backbones.'
    },
    {
      id: 'video-analytics',
      title: 'Industrial Video Analytics & Safety',
      subtitle: 'Automated vehicle/personnel counting, loading dock occupancy, and PPE compliance',
      softwareSlug: 'census',
      softwareName: 'Census',
      route: '/software/census/',
      problem: 'Security personnel cannot watch dozens of live CCTV cameras simultaneously; manual vehicle counting and safety gear enforcement is prone to errors.',
      howItWorks: 'Analyzes live RTSP video feeds on local edge servers to classify vehicles, count line crossings at gates, and flag missing safety helmets in hazardous plant bays.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-[#020610] border-b border-[#292D36] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            dark={true}
            items={[{ label: 'Solutions' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-semibold mb-2 block">
              OPERATIONAL ENGINEERING
            </span>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F7]">
              Industrial <span className="epam-gradient-text font-normal">Solutions</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#C2C6D0] leading-relaxed">
              Explore how Emertech's hardware and software products address core operational challenges across industrial manufacturing, safety, process monitoring, and telemetry.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-8">
          {solutions.map((sol, idx) => (
            <div
              key={sol.id}
              className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-6 sm:p-8 hover:border-[#41434A] transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#050505] text-[#00E5E5] flex items-center justify-center shrink-0 border border-[#292D36]">
                      {getSoftwareIcon(sol.softwareSlug, 'w-5 h-5')}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#00E5E5] font-semibold block">
                        Application 0{idx + 1}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-[#F5F5F7]">
                        {sol.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#969DAA] font-medium font-mono">
                    {sol.subtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs text-[#C2C6D0] leading-relaxed">
                    <div className="bg-[#050505] p-4 rounded-xl border border-[#292D36]">
                      <strong className="text-[#F5F5F7] block mb-1">Operational Challenge:</strong>
                      {sol.problem}
                    </div>
                    <div className="bg-[#050505] p-4 rounded-xl border border-[#292D36]">
                      <strong className="text-[#F5F5F7] block mb-1">How It Works:</strong>
                      {sol.howItWorks}
                    </div>
                  </div>
                </div>

                {/* Right Action Links */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 pt-2 lg:pt-0">
                  <a
                    href={sol.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(sol.route);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#00E5E5] hover:bg-[#00E5E5]/90 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                  >
                    <span>Explore {sol.softwareName}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>

                  {sol.hardwareLink && (
                    <a
                      href={sol.hardwareLink}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(sol.hardwareLink);
                      }}
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#050505] hover:bg-[#080D18] border border-[#41434A] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <Cpu className="w-3.5 h-3.5 mr-1.5 text-[#00E5E5]" />
                      <span>View DCN Hardware</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <CallToAction
          title="Discuss Your Operational Requirements"
          subtitle="Our engineering desk in Vadodara is available to review your shop-floor parameters, sensor networks, or custom integration needs."
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}
