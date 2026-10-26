import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {kicker && (
        <div className="text-xs font-mono font-medium uppercase tracking-widest mb-2.5 text-[#00E5E5]">
          {kicker}
        </div>
      )}
      <h2
        className="text-2xl sm:text-3xl lg:text-[38px] font-light tracking-tight text-[#F5F5F7] leading-tight"
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-[17px] leading-relaxed text-[#C2C6D0] font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
