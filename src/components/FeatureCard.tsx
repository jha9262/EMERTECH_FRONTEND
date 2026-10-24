import React from 'react';

interface FeatureCardProps {
  index?: string | number;
  title: string;
  description: string;
  subtext?: string;
  badge?: string;
}

export function FeatureCard({
  index,
  title,
  description,
  subtext,
  badge,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          {index !== undefined && (
            <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
              {typeof index === 'number' ? String(index).padStart(2, '0') : index}
            </span>
          )}
          {badge && (
            <span className="text-[11px] font-mono text-slate-500">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-base font-bold text-slate-900 leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {subtext && (
        <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-slate-400">
          {subtext}
        </div>
      )}
    </div>
  );
}
