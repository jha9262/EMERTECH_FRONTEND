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
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group p-6">
      <div>
        {/* Top Header: Icon and Name */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100 group-hover:scale-105 transition-transform">
            {getSoftwareIcon(software.slug, 'w-6 h-6')}
          </div>
          <div className="min-w-0">
            <h3 
              onClick={handleClick}
              className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors cursor-pointer"
            >
              {software.name}
            </h3>
            <div className="text-xs font-semibold text-orange-600 mt-0.5 line-clamp-1 font-mono">
              {software.purpose}
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {software.shortDescription}
        </p>
      </div>

      {/* Action Link */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400">
          Industrial IoT Module
        </span>
        <a
          href={software.route}
          onClick={handleClick}
          className="inline-flex items-center text-xs font-semibold text-orange-600 group-hover:text-orange-500 hover:underline transition-colors"
        >
          <span>Explore Solution</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
