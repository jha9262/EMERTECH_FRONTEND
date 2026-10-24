import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Custom SVG icons precisely matching the official Emertech Industrial IoT Solutions brochure
 */

// 1. Fluxora: Thermometer in rounded capsule
export function FluxoraIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      <path d="M24 13v12a5 5 0 1 0 0 8 5 5 0 0 0 0-8V13a2 2 0 1 0-4 0v12a5 5 0 0 0-2 4 5 5 0 1 0 10 0 5 5 0 0 0-2-4V13a2 2 0 0 0-2-2z" className="stroke-orange-600 fill-orange-50" strokeWidth="2.5" />
      <circle cx="24" cy="29" r="2.5" className="fill-orange-600 stroke-none" />
    </svg>
  );
}

// 2. Equipoise: Balance Scale
export function EquipoiseIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      {/* Central pillar */}
      <path d="M24 13v20M19 33h10" className="stroke-orange-600" strokeWidth="2.5" />
      {/* Beam */}
      <path d="M14 17h20" className="stroke-orange-600" strokeWidth="2.5" />
      {/* Left pan */}
      <path d="M14 17l-4 8h8l-4-8z" className="stroke-orange-600 fill-orange-50" strokeWidth="2" />
      {/* Right pan */}
      <path d="M34 17l-4 8h8l-4-8z" className="stroke-orange-600 fill-orange-50" strokeWidth="2" />
    </svg>
  );
}

// 3. Smolder: Flame
export function SmolderIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      <path
        d="M26 13c1 4 4 6 4 10 0 4.418-3.134 8-7 8s-7-3.582-7-8c0-5 5-9 6-12 1 3 2 4 4 2z"
        className="stroke-orange-600 fill-orange-50"
        strokeWidth="2.5"
      />
      <path
        d="M23 26c0 1.657 1.343 3 3 3s2-1 2-2.5c0-2-2-3-2-4.5-1 1-3 2.5-3 4z"
        className="fill-orange-600 stroke-orange-600"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// 4. Postern: Emergency Exit Door
export function PosternIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      {/* Door frame */}
      <path d="M15 33V14h18v19" className="stroke-orange-600" strokeWidth="2.5" />
      {/* Door panel open perspective */}
      <path d="M19 33V16l11 3v14H19z" className="stroke-orange-600 fill-orange-50" strokeWidth="2.5" />
      {/* Door handle / latch */}
      <circle cx="28" cy="24" r="1.5" className="fill-orange-600 stroke-none" />
      {/* Ground threshold */}
      <path d="M12 33h24" className="stroke-orange-600" strokeWidth="2" />
    </svg>
  );
}

// 5. Clime: Energy Lightning Bolt
export function ClimeIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      <path
        d="M26 13L16 26h8l-2 9 12-14h-8l2-8z"
        className="stroke-orange-600 fill-orange-50"
        strokeWidth="2.5"
      />
    </svg>
  );
}

// 6. Manifest: 3D Isometric Cube / Asset Box
export function ManifestIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      {/* Isometric cube */}
      <path d="M24 14l10 5.5v11L24 36l-10-5.5v-11L24 14z" className="stroke-orange-600 fill-orange-50" strokeWidth="2.5" />
      <path d="M24 14v11m0 0l10-5.5m-10 5.5l-10-5.5" className="stroke-orange-600" strokeWidth="2.5" />
    </svg>
  );
}

// 7. Foundry: Factory Production ERP
export function FoundryIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      {/* Industrial factory profile with sawtooth roofs */}
      <path
        d="M14 33V23l6 4v-4l6 4v-7l8 3v10H14z"
        className="stroke-orange-600 fill-orange-50"
        strokeWidth="2.5"
      />
      {/* Factory baseline and windows */}
      <circle cx="19" cy="30" r="1" className="fill-orange-600 stroke-none" />
      <circle cx="26" cy="30" r="1" className="fill-orange-600 stroke-none" />
      <circle cx="31" cy="30" r="1" className="fill-orange-600 stroke-none" />
    </svg>
  );
}

// 8. Herald: Long-Range Communication Gateway / Tower
export function HeraldIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      {/* Central tower */}
      <path d="M24 18v15M20 33l4-15 4 15M21 28h6" className="stroke-orange-600" strokeWidth="2.5" />
      <circle cx="24" cy="17" r="2.5" className="fill-orange-600 stroke-orange-600" />
      {/* Radio waves left and right */}
      <path d="M19 14a7 7 0 0 0 0 8M29 14a7 7 0 0 1 0 8" className="stroke-orange-600" strokeWidth="2" />
      <path d="M16 11a11 11 0 0 0 0 14M32 11a11 11 0 0 1 0 14" className="stroke-orange-600" strokeWidth="2" />
    </svg>
  );
}

// 9. Census: Video Analytics / Camera & Eye
export function CensusIcon({ className = 'w-6 h-6', size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="6" y="6" width="36" height="36" rx="8" className="stroke-slate-200" strokeWidth="1.5" />
      {/* Viewfinder brackets */}
      <path d="M14 19v-4h4M34 19v-4h-4M14 29v4h4M34 29v4h-4" className="stroke-orange-600" strokeWidth="2.5" />
      {/* Eye center */}
      <ellipse cx="24" cy="24" rx="7" ry="4.5" className="stroke-orange-600 fill-orange-50" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" className="fill-orange-600 stroke-none" />
    </svg>
  );
}

export function getSoftwareIcon(slug: string, className = 'w-6 h-6') {
  switch (slug) {
    case 'fluxora':
      return <FluxoraIcon className={className} />;
    case 'equipoise':
      return <EquipoiseIcon className={className} />;
    case 'smolder':
      return <SmolderIcon className={className} />;
    case 'postern':
      return <PosternIcon className={className} />;
    case 'clime':
      return <ClimeIcon className={className} />;
    case 'manifest':
      return <ManifestIcon className={className} />;
    case 'foundry':
      return <FoundryIcon className={className} />;
    case 'herald':
      return <HeraldIcon className={className} />;
    case 'census':
      return <CensusIcon className={className} />;
    default:
      return <FluxoraIcon className={className} />;
  }
}
