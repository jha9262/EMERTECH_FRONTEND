import React from 'react';
import { Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  dark?: boolean;
}

export function Breadcrumbs({ items, onNavigate, dark = true }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-2 text-xs text-[#969DAA]">
      <ol className="flex items-center space-x-2 flex-wrap">
        <li className="flex items-center space-x-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="transition-colors flex items-center space-x-1 text-[#969DAA] hover:text-[#00E5E5]"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </a>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <span className="text-[#41434A]" aria-hidden="true">
                /
              </span>
              {isLast || !item.path ? (
                <span
                  className="font-semibold text-[#F5F5F7]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.path) onNavigate(item.path);
                  }}
                  className="transition-colors text-[#969DAA] hover:text-[#00E5E5]"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
