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
    <div className="bg-[#0B101B] rounded-xl border border-[#292D36] p-6 shadow-sm hover:border-[#00E5E5]/50 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          {index !== undefined && (
            <span className="text-xs font-mono font-bold text-[#00E5E5] bg-[#00E5E5]/10 px-2 py-0.5 rounded border border-[#00E5E5]/20">
              {typeof index === 'number' ? String(index).padStart(2, '0') : index}
            </span>
          )}
          {badge && (
            <span className="text-[11px] font-mono text-[#969DAA]">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-base font-bold text-[#F5F5F7] leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[#C2C6D0] leading-relaxed">
          {description}
        </p>
      </div>

      {subtext && (
        <div className="mt-4 pt-3 border-t border-[#292D36] text-xs font-mono text-[#969DAA]">
          {subtext}
        </div>
      )}
    </div>
  );
}
