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
  dark = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {kicker && (
        <div
          className={`text-xs font-mono font-semibold uppercase tracking-widest mb-2 ${
            dark ? 'text-orange-400' : 'text-orange-600'
          }`}
        >
          {kicker}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-bold tracking-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
