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
    <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] overflow-hidden shadow-lg hover:border-[#41434A] transition-all flex flex-col justify-between group">
      <div>
        {/* Visual Preview Banner */}
        <div 
          onClick={handleCardClick}
          className="relative h-56 bg-[#050505] border-b border-[#292D36] overflow-hidden cursor-pointer flex items-center justify-center p-6 transition-colors group-hover:bg-[#080D18]"
        >
          <div className="w-full text-center space-y-2">
            <div className="w-14 h-14 rounded-xl bg-[#0B101B] border border-[#292D36] text-[#00E5E5] flex items-center justify-center mx-auto mb-2 font-bold shadow-xs">
              <Cpu className="w-7 h-7" />
            </div>
            <div className="text-xs font-mono font-medium text-[#00E5E5] uppercase tracking-wider">
              Industrial IoT Platform
            </div>
            <div className="text-[#F5F5F7] text-lg font-medium">
              {product.name}
            </div>
            <div className="text-[11px] font-mono text-[#969DAA]">
              ESP32 Edge Node · Looped RS485 Modbus · Local SBC Server
            </div>
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-6">
          <div className="text-xs font-medium text-[#00E5E5] mb-1.5 font-mono">
            {product.category}
          </div>

          <h3 
            onClick={handleCardClick}
            className="text-xl font-medium text-[#F5F5F7] group-hover:text-[#00E5E5] transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          <p className="mt-3 text-sm text-[#C2C6D0] leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-5 pt-4 border-t border-[#292D36] space-y-2 text-xs text-[#C2C6D0]">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#00E5E5] shrink-0" />
              <span>Zero PID rewiring on existing Autonics panels</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#00E5E5] shrink-0" />
              <span>SOP-locked recipe execution &amp; keypad lockdown</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#00E5E5] shrink-0" />
              <span>Per-blanket active overcurrent heating halt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 border-t border-[#292D36] mt-4 flex items-center justify-between gap-3">
        <a
          href={`/hardware/${product.slug}/`}
          onClick={handleCardClick}
          className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7]" />
          <span className="relative flex items-center justify-center px-5 py-2 rounded-full bg-[#050505] group-hover:bg-[#050505]/70 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200">
            <span>View Product</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#00E5E5]" />
          </span>
        </a>

        <a
          href={`/hardware/${product.slug}/#specifications`}
          onClick={handleSpecsClick}
          className="inline-flex items-center text-xs font-medium text-[#C2C6D0] hover:text-white bg-[#050505] hover:bg-[#111A2E] px-4 py-2 rounded-full border border-[#41434A] transition-colors whitespace-nowrap"
        >
          <FileText className="w-3.5 h-3.5 mr-1 text-[#00E5E5]" />
          <span>Specifications</span>
        </a>
      </div>
    </div>
  );
}
