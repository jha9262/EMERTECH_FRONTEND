import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SoftwareProduct } from '../data/software';
import { getSoftwareIcon } from './IndustrialSoftwareIcons';

interface SoftwareCardProps {
  software: SoftwareProduct;
  onNavigate: (path: string) => void;
}

export function SoftwareCard({ software, onNavigate }: SoftwareCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(software.route);
  };

  return (
    <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] overflow-hidden shadow-lg hover:border-[#41434A] transition-all flex flex-col justify-between group p-6">
      <div>
        {/* Top Header: Icon and Name */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#050505] text-[#00E5E5] flex items-center justify-center shrink-0 border border-[#292D36] group-hover:border-[#00E5E5]/40 transition-colors">
            {getSoftwareIcon(software.slug, 'w-6 h-6')}
          </div>
          <div className="min-w-0">
            <h3 
              onClick={handleClick}
              className="text-lg font-medium text-[#F5F5F7] group-hover:text-[#00E5E5] transition-colors cursor-pointer"
            >
              {software.name}
            </h3>
            <div className="text-xs font-mono font-medium text-[#00E5E5] mt-0.5 line-clamp-1">
              {software.purpose}
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
          {software.shortDescription}
        </p>
      </div>

      {/* Action Link */}
      <div className="mt-5 pt-4 border-t border-[#292D36] flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#969DAA]">
          Industrial IoT Module
        </span>
        <a
          href={software.route}
          onClick={handleClick}
          className="inline-flex items-center text-xs font-medium text-[#00E5E5] hover:underline transition-colors"
        >
          <span>Explore Platform</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
