import React from 'react';
import { SpecificationSection } from '../data/products';
import { Info, HelpCircle } from 'lucide-react';

interface SpecificationTableProps {
  sections: SpecificationSection[];
  notice?: string;
}

export function SpecificationTable({ sections, notice }: SpecificationTableProps) {
  return (
    <div className="space-y-8" id="specifications">
      {notice && (
        <div className="p-4 bg-[#0B101B] rounded-lg border border-[#00E5E5]/30 text-xs text-[#C2C6D0] flex items-start space-x-3">
          <Info className="w-4 h-4 text-[#00E5E5] mt-0.5 shrink-0" />
          <div className="leading-relaxed">
            <span className="font-semibold text-[#F5F5F7] block mb-0.5">Engineering Notice &amp; Specification Scope</span>
            {notice}
          </div>
        </div>
      )}

      {sections.map((section, sIdx) => (
        <div key={sIdx} className="bg-[#0B101B] rounded-xl border border-[#292D36] overflow-hidden shadow-sm">
          <div className="bg-[#080D18] px-6 py-3.5 border-b border-[#292D36] flex items-center justify-between">
            <h4 className="text-sm font-bold text-[#F5F5F7] tracking-wide">
              {section.title}
            </h4>
            <span className="text-[11px] font-mono text-[#969DAA]">
              {section.items.length} Parameters
            </span>
          </div>

          <div className="divide-y divide-[#292D36]">
            {section.items.map((item, iIdx) => (
              <div
                key={iIdx}
                className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 hover:bg-[#080D18]/80 transition-colors gap-2 items-start"
              >
                <div className="sm:col-span-5 text-xs font-semibold text-[#C2C6D0] flex items-center space-x-1.5">
                  <span>{item.label}</span>
                  {item.isPlaceholder && (
                    <span 
                      className="text-[10px] font-mono text-[#00E5E5] bg-[#00E5E5]/10 px-1.5 py-0.5 rounded border border-[#00E5E5]/20"
                      title="Placeholder: Parameter subject to final client project engineering order"
                    >
                      Pending Release
                    </span>
                  )}
                </div>

                <div className="sm:col-span-7">
                  <div className="text-xs font-medium text-[#00E5E5] font-mono">
                    {item.value}
                  </div>
                  {item.notes && (
                    <div className="text-[11px] text-[#969DAA] mt-0.5 font-sans">
                      {item.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
