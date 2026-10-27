import React from 'react';
import { ArrowRight, ExternalLink, Cpu, Sliders, ShieldCheck } from 'lucide-react';
import { getSoftwareIcon } from './IndustrialSoftwareIcons';

export type MegaMenuType = 'products' | 'services' | 'solutions' | 'industries' | null;

interface MegaMenuProps {
  activeMenu: MegaMenuType;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface CategoryGroup {
  category: string;
  items: {
    label: string;
    route: string;
    isExternal?: boolean;
    badge?: string;
  }[];
}

interface MenuData {
  heading: string;
  columns: CategoryGroup[][];
}

const SOFTWARE_CATALOGUE = [
  { name: 'Fluxora', slug: 'fluxora', purpose: 'Blade Heating & Thermal Curing' },
  { name: 'Equipoise', slug: 'equipoise', purpose: 'Rotor Blade Dynamic Balancing' },
  { name: 'Smolder', slug: 'smolder', purpose: 'Fire Alarm & Siren Staging' },
  { name: 'Postern', slug: 'postern', purpose: 'Emergency Egress & Door Control' },
  { name: 'Clime', slug: 'clime', purpose: 'Plant Energy & Demand Analytics' },
  { name: 'Manifest', slug: 'manifest', purpose: 'Tool Calibration & Asset Tracking' },
  { name: 'Foundry', slug: 'foundry', purpose: 'Production Batch Genealogy & ERP' },
  { name: 'Herald', slug: 'herald', purpose: 'Long-Range Telemetry Gateway' },
  { name: 'Census', slug: 'census', purpose: 'Edge Video Analytics & Safety' },
];

const MEGA_MENUS_DATA: Record<Exclude<MegaMenuType, null | 'products'>, MenuData> = {
  services: {
    heading: 'Services',
    columns: [
      // Column 1: Engineering & Integration
      [
        {
          category: 'Engineering & Integration',
          items: [
            { label: 'Industrial System Integration', route: '/services/' },
            { label: 'Communication Gateway Integration', route: '/services/' },
            { label: 'SCADA & Local Telemetry Setup', route: '/services/' },
          ],
        },
      ],
      // Column 2: Field Engineering
      [
        {
          category: 'Field Engineering',
          items: [
            { label: 'Site Technical Consultation', route: '/services/' },
            { label: 'Hardware Installation & Commissioning', route: '/services/' },
            { label: 'Pilot Testing & Deployment', route: '/services/' },
          ],
        },
      ],
      // Column 3: Technical Support
      [
        {
          category: 'Technical Support',
          items: [
            { label: 'Autonics PID Compatibility Verification', route: '/services/' },
            { label: 'System Configuration & Calibration', route: '/services/' },
            { label: 'Engineering Support & RFQ', route: '/contact/' },
            { label: 'All Engineering Services Overview', route: '/services/' },
          ],
        },
      ],
    ],
  },
  solutions: {
    heading: 'Solutions',
    columns: [
      // Column 1: Heating & Process Control + Industrial Safety
      [
        {
          category: 'Heating & Process Control',
          items: [
            { label: 'Blade Heating & Thermal Uniformity (Fluxora)', route: '/solutions/fluxora/' },
            { label: 'PID Multi-Zone Relay Control', route: '/hardware/dcn-heat-controller/' },
          ],
        },
        {
          category: 'Industrial Safety',
          items: [
            { label: 'Fire Alarm Integration & Sirens (Smolder)', route: '/solutions/smolder/' },
            { label: 'Emergency Exit & Door Control (Postern)', route: '/solutions/postern/' },
          ],
        },
      ],
      // Column 2: Energy & Monitoring
      [
        {
          category: 'Energy & Monitoring',
          items: [
            { label: 'Plant Energy & Demand Analytics (Clime)', route: '/solutions/clime/' },
            { label: 'Industrial Telemetry & Modbus Loops (Herald)', route: '/solutions/herald/' },
          ],
        },
      ],
      // Column 3: Manufacturing Operations
      [
        {
          category: 'Manufacturing Operations',
          items: [
            { label: 'Rotor Blade Dynamic Balancing (Equipoise)', route: '/solutions/equipoise/' },
            { label: 'Tool & Asset Calibration Tracking (Manifest)', route: '/solutions/manifest/' },
            { label: 'Shop-Floor ERP & Batch Genealogy (Foundry)', route: '/solutions/foundry/' },
            { label: 'Edge Video Analytics & Safety (Census)', route: '/solutions/census/' },
          ],
        },
      ],
    ],
  },
  industries: {
    heading: 'Industries',
    columns: [
      // Column 1: Manufacturing & Processing + Thermal
      [
        {
          category: 'Wind Blade Composites',
          items: [
            { label: 'Blade Heating & Mould Curing', route: '/software/fluxora/' },
            { label: 'Rotor Blade Mass Balancing', route: '/software/equipoise/' },
          ],
        },
        {
          category: 'Thermal & Process Heating',
          items: [
            { label: 'Autonics PID Telemetry Tap-In', route: '/hardware/dcn-heat-controller/' },
            { label: 'Heating Blanket Relay Control', route: '/hardware/specification/' },
          ],
        },
      ],
      // Column 2: Safety & Discrete
      [
        {
          category: 'Plant Safety & Egress',
          items: [
            { label: 'Fire Alarm Integration & Sirens', route: '/software/smolder/' },
            { label: 'Emergency Door Interlocks', route: '/software/postern/' },
          ],
        },
        {
          category: 'Discrete Manufacturing',
          items: [
            { label: 'Tool & Calibration Tracking', route: '/software/manifest/' },
            { label: 'Production Traceability & WIP', route: '/software/foundry/' },
          ],
        },
      ],
      // Column 3: Energy & Connectivity
      [
        {
          category: 'Energy Monitoring',
          items: [
            { label: 'Plant Energy & Peak Demand', route: '/software/clime/' },
          ],
        },
        {
          category: 'Industrial Connectivity',
          items: [
            { label: 'Equipment Telemetry & RS-485', route: '/software/herald/' },
            { label: 'Communication Gateways', route: '/hardware/' },
            { label: 'Supported Industries Overview', route: '/industries/' },
          ],
        },
      ],
    ],
  },
};

export function MegaMenu({ activeMenu, onClose, onNavigate, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!activeMenu) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: string, isExternal?: boolean) => {
    if (isExternal || route.endsWith('.pdf')) {
      return;
    }
    e.preventDefault();
    onClose();
    onNavigate(route);
  };

  // Bespoke, premium layout for Products Mega Menu (2 Columns: Hardware Products + Software Platforms)
  if (activeMenu === 'products') {
    return (
      <div 
        className="absolute top-full left-0 w-full bg-[#050505] border-b border-[#41434A] z-50 shadow-2xl transition-all duration-200 animate-fadeIn"
        role="region"
        aria-label="Products Mega Menu"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Header Column */}
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#00E5E5] font-semibold block">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-white leading-tight">
                <span className="epam-gradient-text font-normal">Products</span>
              </h2>
              <p className="text-xs text-[#969DAA] leading-relaxed pt-2">
                Engineered edge hardware and modular localized software built for demanding manufacturing floors.
              </p>
            </div>

            {/* 2 Focused Columns: Hardware Products (5 Cols) + Software Platforms (4 Cols) */}
            <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Column 1: Hardware Products (Primary Focus: DCN & Heat Controller) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-base sm:text-lg font-medium text-[#00E5E5] tracking-tight">
                    Hardware Products
                  </h3>
                  <span className="text-[10px] font-mono text-[#969DAA] uppercase">
                    Field Hardware
                  </span>
                </div>

                {/* Primary Hardware Featured Card */}
                <div className="bg-[#0B101B] rounded-xl border border-[#292D36] p-5 shadow-lg hover:border-[#00E5E5]/50 transition-all duration-200 space-y-4 group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5E5] bg-[#00E5E5]/10 px-2.5 py-0.5 rounded border border-[#00E5E5]/20 font-semibold">
                      Primary Hardware
                    </span>
                    <span className="text-[10px] font-mono text-[#969DAA]">
                      MODEL: EM-DCN-01
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-[#F5F5F7] group-hover:text-[#00E5E5] transition-colors">
                      DCN &amp; Heat Controller
                    </h4>
                    <p className="text-xs text-[#C2C6D0] leading-relaxed mt-1.5 font-normal">
                      Ruggedized edge telemetry gateway &amp; multi-zone heating blanket controller. RS-485 Modbus RTU tap-in with 4x 250V/10A relays and CT protection.
                    </p>
                  </div>

                  {/* 4 Quick Spec Badges */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="bg-[#050505] px-2.5 py-1.5 rounded border border-[#292D36] text-[#C2C6D0]">
                      <span className="text-[#969DAA] block text-[9px]">MCU:</span>
                      Dual-Core ESP32
                    </div>
                    <div className="bg-[#050505] px-2.5 py-1.5 rounded border border-[#292D36] text-[#C2C6D0]">
                      <span className="text-[#969DAA] block text-[9px]">RELAYS:</span>
                      4x 250V / 10A
                    </div>
                    <div className="bg-[#050505] px-2.5 py-1.5 rounded border border-[#292D36] text-[#C2C6D0]">
                      <span className="text-[#969DAA] block text-[9px]">PROTOCOL:</span>
                      Modbus RTU
                    </div>
                    <div className="bg-[#050505] px-2.5 py-1.5 rounded border border-[#292D36] text-[#C2C6D0]">
                      <span className="text-[#969DAA] block text-[9px]">NETWORK:</span>
                      100% Offline
                    </div>
                  </div>

                  {/* Primary Link Button */}
                  <div className="pt-1">
                    <a
                      href="/hardware/dcn-heat-controller/"
                      onClick={(e) => handleLinkClick(e, '/hardware/dcn-heat-controller/')}
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#00E5E5] hover:bg-[#00E5E5]/90 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                    >
                      <span>Explore DCN Controller</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>

                {/* Secondary Hardware Link: Specifications & Datasheet */}
                <a
                  href="/hardware/specification/"
                  onClick={(e) => handleLinkClick(e, '/hardware/specification/')}
                  className="bg-[#0B101B]/60 hover:bg-[#0B101B] border border-[#292D36] hover:border-[#41434A] rounded-xl p-3.5 flex items-center justify-between transition-all group"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-medium text-[#F5F5F7] group-hover:text-[#00E5E5] transition-colors block">
                      Hardware Specifications &amp; Datasheet
                    </span>
                    <span className="text-[11px] text-[#969DAA] block">
                      Pinouts, terminal wiring diagrams, and build options
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#969DAA] group-hover:text-[#00E5E5] group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                </a>
              </div>

              {/* Column 2: Software Platforms (All 9 Platforms Neatly Listed) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <h3 className="text-base sm:text-lg font-medium text-[#00E5E5] tracking-tight">
                    Software Platforms
                  </h3>
                  <span className="text-[10px] font-mono text-[#969DAA] uppercase">
                    9 Modular Platforms
                  </span>
                </div>

                {/* Neatly Listed Software Grid (3x3 Tiles) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {SOFTWARE_CATALOGUE.map((item) => (
                    <a
                      key={item.slug}
                      href={`/software/${item.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/software/${item.slug}/`)}
                      className="bg-[#0B101B] hover:bg-[#0E1524] border border-[#292D36] hover:border-[#00E5E5]/50 rounded-lg p-3 transition-all group flex items-start space-x-2.5"
                    >
                      <div className="w-7 h-7 rounded-md bg-[#050505] border border-[#292D36] text-[#00E5E5] group-hover:border-[#00E5E5]/40 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        {getSoftwareIcon(item.slug, 'w-3.5 h-3.5')}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#F5F5F7] group-hover:text-[#00E5E5] transition-colors truncate">
                            {item.name}
                          </span>
                          <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#00E5E5] shrink-0 ml-1" />
                        </div>
                        <p className="text-[10px] text-[#969DAA] leading-tight truncate mt-0.5">
                          {item.purpose}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Bottom Navigation Links */}
                <div className="pt-2 border-t border-[#292D36] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <a
                    href="/software/"
                    onClick={(e) => handleLinkClick(e, '/software/')}
                    className="text-[#00E5E5] hover:underline font-medium inline-flex items-center"
                  >
                    <span>View All Software Suite (9 Modules)</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>

                  <a
                    href="/demo/"
                    onClick={(e) => handleLinkClick(e, '/demo/')}
                    className="text-[#969DAA] hover:text-[#00E5E5] transition-colors inline-flex items-center"
                  >
                    <span>Software Demo Gallery →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard 3-column layout for Services, Solutions, and Industries
  const data = MEGA_MENUS_DATA[activeMenu];
  if (!data) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-[#050505] border-b border-[#41434A] z-50 shadow-2xl transition-all duration-200 animate-fadeIn"
      role="region"
      aria-label={`${data.heading} Mega Menu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Huge Heading with EPAM Gradient */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-tight">
              <span className="epam-gradient-text">{data.heading}</span>
            </h2>
          </div>

          {/* 3 Content Columns with Cyan Categories and Clean Links */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {data.columns.map((columnGroups, colIdx) => (
              <div key={colIdx} className="space-y-8 sm:space-y-10">
                {columnGroups.map((group, grpIdx) => (
                  <div key={grpIdx} className="space-y-3.5">
                    {/* Category Title in Electric Cyan */}
                    <h3 className="text-[17px] sm:text-[19px] font-medium text-[#00E5E5] tracking-tight">
                      {group.category}
                    </h3>

                    {/* Subcategory Links */}
                    <ul className="space-y-2.5">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href={item.route}
                            onClick={(e) => handleLinkClick(e, item.route, item.isExternal)}
                            target={item.isExternal ? '_blank' : undefined}
                            rel={item.isExternal ? 'noopener noreferrer' : undefined}
                            className="text-[14px] text-[#C2C6D0] hover:text-[#00E5E5] transition-colors duration-150 inline-flex items-center group leading-snug"
                          >
                            <span>{item.label}</span>
                            {item.isExternal && (
                              <ExternalLink className="w-3 h-3 ml-1.5 opacity-60 group-hover:opacity-100" />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
