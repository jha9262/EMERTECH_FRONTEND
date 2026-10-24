import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Cpu, ArrowRight } from 'lucide-react';
import { SOFTWARE_PRODUCTS } from '../data/software';
import { getSoftwareIcon } from './IndustrialSoftwareIcons';

interface SiteHeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export function SiteHeader({ currentPath = '/', onNavigate }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const productsDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target as Node)
      ) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);

    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const isCurrent = (path: string) => {
    if (path === '/' && (currentPath === '/' || currentPath === '')) return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const isProductsActive =
    currentPath.startsWith('/hardware') ||
    currentPath.startsWith('/software') ||
    currentPath.startsWith('/products');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center space-x-3 group shrink-0"
            aria-label="Emertech Electronics Home"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-orange-500 transition-colors">
              ET
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors uppercase">
                EMERTECH
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase -mt-1 font-mono">
                ELECTRONICS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links — Exact Order Requested */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wide">
            {/* 1. Home */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`whitespace-nowrap transition-colors py-1 relative ${
                isCurrent('/') && !currentPath.startsWith('/solutions') && !currentPath.startsWith('/hardware') && !currentPath.startsWith('/software') && !currentPath.startsWith('/services') && !currentPath.startsWith('/industries') && !currentPath.startsWith('/about') && !currentPath.startsWith('/contact')
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Home
              {isCurrent('/') && !currentPath.startsWith('/solutions') && !currentPath.startsWith('/hardware') && !currentPath.startsWith('/software') && !currentPath.startsWith('/demo') && !currentPath.startsWith('/services') && !currentPath.startsWith('/industries') && !currentPath.startsWith('/about') && !currentPath.startsWith('/contact') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </a>

            {/* 2. Solutions */}
            <a
              href="/solutions/"
              onClick={(e) => handleLinkClick(e, '/solutions/')}
              className={`whitespace-nowrap transition-colors py-1 relative ${
                isCurrent('/solutions')
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Solutions
              {isCurrent('/solutions') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </a>

            {/* 3. Products with Dropdown (Hardware & Software) */}
            <div
              className="relative"
              ref={productsDropdownRef}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`flex items-center space-x-1 whitespace-nowrap transition-colors py-1 relative cursor-pointer ${
                  isProductsActive
                    ? 'text-orange-600 font-semibold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                aria-expanded={productsDropdownOpen}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200" />
                {isProductsActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              {/* Products Dropdown Menu — Grouped Hardware & Software */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white rounded-xl border border-slate-200 shadow-xl p-4 mt-1 z-50">
                  <div className="grid grid-cols-12 gap-5">
                    {/* Hardware Column */}
                    <div className="col-span-5 border-r border-slate-100 pr-4">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold">
                          Hardware
                        </span>
                        <a
                          href="/hardware/specification/"
                          onClick={(e) => handleLinkClick(e, '/hardware/specification/')}
                          className="text-[10px] text-slate-500 hover:text-orange-600 font-medium"
                        >
                          Specs &amp; Datasheet →
                        </a>
                      </div>

                      <a
                        href="/hardware/"
                        onClick={(e) => handleLinkClick(e, '/hardware/')}
                        className="block p-3 rounded-lg hover:bg-slate-50 transition-colors border border-slate-100 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-2">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                          DCN &amp; Heat Controller
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Dual-core ESP32 edge processing with 4-zone relay control for heating blankets.
                        </div>
                        <div className="text-[10px] font-mono text-orange-600 font-medium mt-2 flex items-center">
                          <span>View Hardware Specs &amp; Datasheet</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </a>
                    </div>

                    {/* Software Column (All 9 Modules) */}
                    <div className="col-span-7">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold">
                          Software (9 Modules)
                        </span>
                        <a
                          href="/software/"
                          onClick={(e) => handleLinkClick(e, '/software/')}
                          className="text-[10px] text-slate-500 hover:text-orange-600"
                        >
                          All Software →
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-1">
                        {SOFTWARE_PRODUCTS.map((prod) => (
                          <a
                            key={prod.slug}
                            href={prod.route}
                            onClick={(e) => handleLinkClick(e, prod.route)}
                            className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-6 h-6 rounded bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                              {getSoftwareIcon(prod.slug, 'w-3.5 h-3.5')}
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                                {prod.name}
                              </div>
                              <div className="text-[10px] text-slate-500 truncate lowercase font-normal">
                                {prod.purpose}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Demo (Software Screenshots & Telemetry Gallery) */}
            <a
              href="/demo/"
              onClick={(e) => handleLinkClick(e, '/demo/')}
              className={`whitespace-nowrap transition-colors py-1 relative ${
                isCurrent('/demo')
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Demo
              {isCurrent('/demo') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </a>

            {/* 5. Services */}
            <a
              href="/services/"
              onClick={(e) => handleLinkClick(e, '/services/')}
              className={`whitespace-nowrap transition-colors py-1 relative ${
                isCurrent('/services')
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Services
              {isCurrent('/services') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </a>

            {/* 5. Industries */}
            <a
              href="/industries/"
              onClick={(e) => handleLinkClick(e, '/industries/')}
              className={`whitespace-nowrap transition-colors py-1 relative ${
                isCurrent('/industries')
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Industries
              {isCurrent('/industries') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </a>

            {/* 6. About Us */}
            <a
              href="/about/"
              onClick={(e) => handleLinkClick(e, '/about/')}
              className={`whitespace-nowrap transition-colors py-1 relative ${
                isCurrent('/about')
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              About Us
              {isCurrent('/about') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </a>

            {/* 7. Contact */}
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className={`whitespace-nowrap transition-colors py-1 relative ${
                isCurrent('/contact')
                  ? 'text-orange-600 font-semibold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Contact
              {isCurrent('/contact') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </a>
          </nav>

          {/* 8. Primary CTA: Request a Quote */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="space-y-1">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Home
            </a>

            <a
              href="/solutions/"
              onClick={(e) => handleLinkClick(e, '/solutions/')}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Solutions
            </a>

            {/* Products Accordion in Mobile */}
            <div className="pt-1">
              <div className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-orange-600 font-bold">
                Products
              </div>
              <div className="pl-4 space-y-1 border-l-2 border-slate-200 ml-3">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold pt-1">
                  Hardware
                </div>
                <a
                  href="/hardware/"
                  onClick={(e) => handleLinkClick(e, '/hardware/')}
                  className="block px-2 py-1 text-xs text-slate-700 hover:text-orange-600 font-medium"
                >
                  · Hardware Specifications &amp; Datasheet
                </a>
                <a
                  href="/hardware/dcn-heat-controller/"
                  onClick={(e) => handleLinkClick(e, '/hardware/dcn-heat-controller/')}
                  className="block px-2 py-1 text-xs text-slate-500 hover:text-orange-600 font-medium"
                >
                  · DCN &amp; Heat Controller Overview
                </a>

                <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold pt-2">
                  Software (9 Modules)
                </div>
                {SOFTWARE_PRODUCTS.map((prod) => (
                  <a
                    key={prod.slug}
                    href={prod.route}
                    onClick={(e) => handleLinkClick(e, prod.route)}
                    className="block px-2 py-1 text-xs text-slate-600 hover:text-orange-600 font-medium truncate"
                  >
                    · {prod.name} ({prod.purpose})
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/demo/"
              onClick={(e) => handleLinkClick(e, '/demo/')}
              className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isCurrent('/demo')
                  ? 'text-orange-600 bg-orange-50/70 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Demo
            </a>

            <a
              href="/services/"
              onClick={(e) => handleLinkClick(e, '/services/')}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Services
            </a>

            <a
              href="/industries/"
              onClick={(e) => handleLinkClick(e, '/industries/')}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Industries
            </a>

            <a
              href="/about/"
              onClick={(e) => handleLinkClick(e, '/about/')}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              About Us
            </a>

            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className="w-full flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-sm"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
