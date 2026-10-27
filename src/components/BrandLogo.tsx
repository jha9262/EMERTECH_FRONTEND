import React from 'react';

interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="flex items-center space-x-3">
      <div
        className={`${compact ? 'w-7 h-7 rounded-lg' : 'w-9 h-9 rounded-xl'} bg-gradient-to-br from-[#00E5E5] via-[#087BFF] to-[#A855F7] flex items-center justify-center shadow-sm`}
        aria-hidden="true"
      >
        <span className="text-[0.7em] font-black tracking-tighter text-white">ET</span>
      </div>
      <div className="flex flex-col">
        <span className={`${compact ? 'text-xs' : 'text-base'} font-extrabold tracking-tight text-white uppercase`}>
          EMERTECH
        </span>
        <span className={`${compact ? 'text-[8px]' : 'text-[10px]'} font-semibold tracking-wider text-[#969DAA] uppercase -mt-1 font-mono`}>
          ELECTRONICS
        </span>
      </div>
    </div>
  );
}
