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
        <div className="p-4 bg-amber-50/80 rounded-lg border border-amber-200/90 text-xs text-amber-900 flex items-start space-x-3">
          <Info className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
          <div className="leading-relaxed">
            <span className="font-semibold block mb-0.5">Engineering Notice &amp; Specification Scope</span>
            {notice}
          </div>
        </div>
      )}

      {sections.map((section, sIdx) => (
        <div key={sIdx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-900 px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <h4 className="text-sm font-bold text-white tracking-wide">
              {section.title}
            </h4>
            <span className="text-[11px] font-mono text-slate-400">
              {section.items.length} Parameters
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {section.items.map((item, iIdx) => (
              <div
                key={iIdx}
                className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 hover:bg-slate-50/70 transition-colors gap-2 items-start"
              >
                <div className="sm:col-span-5 text-xs font-semibold text-slate-700 flex items-center space-x-1.5">
                  <span>{item.label}</span>
                  {item.isPlaceholder && (
                    <span 
                      className="text-[10px] font-mono text-amber-700 bg-amber-100/70 px-1.5 py-0.2 rounded"
                      title="Placeholder: Parameter subject to final client project engineering order"
                    >
                      Pending Release
                    </span>
                  )}
                </div>

                <div className="sm:col-span-7">
                  <div className="text-xs font-medium text-slate-900 font-mono">
                    {item.value}
                  </div>
                  {item.notes && (
                    <div className="text-[11px] text-slate-500 mt-0.5 font-sans">
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
