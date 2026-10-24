import React from 'react';
import { ArrowRight, FileText, Cpu, ShieldCheck } from 'lucide-react';
import { ProductFamily } from '../data/products';

interface ProductCardProps {
  product: ProductFamily;
  onNavigate: (path: string) => void;
}

export function ProductCard({ product, onNavigate }: ProductCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(`/hardware/${product.slug}/`);
  };

  const handleSpecsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onNavigate(`/hardware/${product.slug}/#specifications`);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
      <div>
        {/* Visual Preview Banner */}
        <div 
          onClick={handleCardClick}
          className="relative h-56 bg-slate-50 border-b border-slate-100 overflow-hidden cursor-pointer flex items-center justify-center p-6 transition-colors group-hover:bg-slate-100/60"
        >
          <div className="w-full text-center space-y-2">
            <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-2 font-bold shadow-xs">
              <Cpu className="w-7 h-7" />
            </div>
            <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
              Industrial IoT Platform
            </div>
            <div className="text-slate-900 text-lg font-bold">
              {product.name}
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              ESP32 Edge Node · Looped RS485 Modbus · Local SBC Server
            </div>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-6">
          <div className="text-xs font-medium text-orange-600 mb-1.5 font-mono">
            {product.category}
          </div>

          <h3 
            onClick={handleCardClick}
            className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero PID rewiring on existing Autonics panels</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>SOP-locked recipe execution &amp; keypad lockdown</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Per-blanket active overcurrent heating halt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
        <a
          href={`/hardware/${product.slug}/`}
          onClick={handleCardClick}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-xs"
        >
          <span>View Product</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </a>

        <a
          href={`/hardware/${product.slug}/#specifications`}
          onClick={handleSpecsClick}
          className="inline-flex items-center text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          <FileText className="w-3.5 h-3.5 mr-1 text-slate-500" />
          <span>Specifications</span>
        </a>
      </div>
    </div>
  );
}
