import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export type MegaMenuType = 'products' | 'services' | 'solutions' | 'industries' | null;

interface MegaMenuProps {
  activeMenu: MegaMenuType;
  onClose: () => void;
  onNavigate: (path: string) => void;
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

const MEGA_MENUS_DATA: Record<Exclude<MegaMenuType, null>, MenuData> = {
  products: {
    heading: 'Products',
    columns: [
      // Column 1: Hardware Products
      [
        {
          category: 'Hardware Products',
          items: [
            { label: 'DCN & Heat Controller', route: '/hardware/dcn-heat-controller/' },
            { label: 'Hardware Specifications', route: '/hardware/specification/' },
            { label: 'All Hardware Catalogue', route: '/hardware/' },
            { label: 'Fuel Dispenser Interface (Custom)', route: '/contact/' },
            { label: 'Water Meter System (Custom)', route: '/contact/' },
          ],
        },
      ],
      // Column 2: Software Platforms
      [
        {
          category: 'Software Platforms',
          items: [
            { label: 'Fluxora (Blade Heating & PID)', route: '/software/fluxora/' },
            { label: 'Equipoise (Blade Balancing)', route: '/software/equipoise/' },
            { label: 'Smolder (Fire Alarm & Siren)', route: '/software/smolder/' },
            { label: 'Postern (Emergency Egress)', route: '/software/postern/' },
            { label: 'Clime (Energy Monitoring)', route: '/software/clime/' },
            { label: 'Manifest (Tool & Asset Tracking)', route: '/software/manifest/' },
            { label: 'Foundry (Shop-Floor ERP)', route: '/software/foundry/' },
            { label: 'Herald (Industrial Telemetry)', route: '/software/herald/' },
            { label: 'Census (Edge Video Analytics)', route: '/software/census/' },
          ],
        },
      ],
      // Column 3: Product Resources
      [
        {
          category: 'Product Resources',
          items: [
            { label: 'Hardware Specifications & Pinouts', route: '/hardware/specification/' },
            { label: 'Product Brochure (PDF)', route: '/assets/aistudio/Emertech_Brochure_881bad62.pdf', isExternal: true },
            { label: 'Software Demo Gallery', route: '/demo/' },
            { label: 'All Software Suite (9 Modules)', route: '/software/' },
            { label: 'Commercial RFQ & Quotes', route: '/contact/' },
          ],
        },
      ],
    ],
  },
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
            { label: 'Blade Heating & Thermal Uniformity (Fluxora)', route: '/software/fluxora/' },
            { label: 'PID Multi-Zone Relay Control', route: '/hardware/dcn-heat-controller/' },
          ],
        },
        {
          category: 'Industrial Safety',
          items: [
            { label: 'Fire Alarm Integration & Sirens (Smolder)', route: '/software/smolder/' },
            { label: 'Emergency Exit & Door Control (Postern)', route: '/software/postern/' },
          ],
        },
      ],
      // Column 2: Energy & Monitoring
      [
        {
          category: 'Energy & Monitoring',
          items: [
            { label: 'Plant Energy & Demand Analytics (Clime)', route: '/software/clime/' },
            { label: 'Industrial Telemetry & Modbus Loops (Herald)', route: '/software/herald/' },
            { label: 'Autonomous Modbus Gateway Integration', route: '/services/' },
          ],
        },
      ],
      // Column 3: Manufacturing Operations
      [
        {
          category: 'Manufacturing Operations',
          items: [
            { label: 'Rotor Blade Dynamic Balancing (Equipoise)', route: '/software/equipoise/' },
            { label: 'Tool & Asset Calibration Tracking (Manifest)', route: '/software/manifest/' },
            { label: 'Shop-Floor ERP & Batch Genealogy (Foundry)', route: '/software/foundry/' },
            { label: 'Edge Video Analytics & Safety (Census)', route: '/software/census/' },
            { label: 'Explore All 9 Solutions →', route: '/solutions/' },
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

export function MegaMenu({ activeMenu, onClose, onNavigate }: MegaMenuProps) {
  if (!activeMenu) return null;

  const data = MEGA_MENUS_DATA[activeMenu];
  if (!data) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: string, isExternal?: boolean) => {
    if (isExternal || route.endsWith('.pdf')) {
      return;
    }
    e.preventDefault();
    onClose();
    onNavigate(route);
  };

  return (
    <div 
      className="absolute top-full left-0 w-full bg-[#050505] border-b border-[#41434A] z-50 shadow-2xl transition-all duration-200 animate-fadeIn"
      role="region"
      aria-label={`${data.heading} Mega Menu`}
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
