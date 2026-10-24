import React from 'react';
import { SoftwareProduct } from '../data/software';
import { SoftwareCard } from './SoftwareCard';

interface SoftwareGridProps {
  softwareList: SoftwareProduct[];
  onNavigate: (path: string) => void;
}

export function SoftwareGrid({ softwareList, onNavigate }: SoftwareGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {softwareList.map((software) => (
        <SoftwareCard
          key={software.slug}
          software={software}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}
