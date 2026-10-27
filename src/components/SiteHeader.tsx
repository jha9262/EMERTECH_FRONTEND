import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, X, Moon, Sun } from 'lucide-react';
import { MegaMenu, MegaMenuType } from './MegaMenu';
import { BrandLogo } from './BrandLogo';

interface SiteHeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export function SiteHeader({ currentPath = '/', onNavigate }: SiteHeaderProps) {
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuType>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('emertech-theme');
    const lightMode = savedTheme === 'light';
    setIsLightMode(lightMode);
    document.documentElement.classList.toggle('theme-light', lightMode);
  }, []);

  const toggleTheme = () => {
    const nextIsLightMode = !isLightMode;
    setIsLightMode(nextIsLightMode);
    window.localStorage.setItem('emertech-theme', nextIsLightMode ? 'light' : 'dark');
    document.documentElement.classList.toggle('theme-light', nextIsLightMode);
  };

  // Close mega menu when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const handleMenuMouseEnter = (menuType: MegaMenuType) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveMegaMenu(menuType);
  };

  const handleMenuMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
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
    <header 
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#050505] border-b border-[#41434A] transition-all duration-200"
      onMouseLeave={handleMenuMouseLeave}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-6">
          {/* Left: Mobile/Drawer Toggle & Emertech Brand Logo */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* Minimal EPAM-style two-bar hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#00E5E5] transition-colors focus:outline-none focus:ring-1 focus:ring-[#00E5E5]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <div className="w-5 flex flex-col space-y-1.5 py-1">
                  <span className="block h-[2px] w-5 bg-white" />
                  <span className="block h-[2px] w-3.5 bg-white" />
                </div>
              )}
            </button>

            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center space-x-3 group shrink-0"
              aria-label="Emertech Electronics Home"
            >
              <BrandLogo />
            </a>
          </div>

          {/* Desktop Navigation Links — Exact Order Requested: Home, Products, Services, Solutions, Demo, Industries, About Us, Contact */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-wide">
            {/* 1. Home */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              onMouseEnter={() => setActiveMegaMenu(null)}
              className={`whitespace-nowrap transition-colors py-2 relative ${
                isCurrent('/') && !currentPath.startsWith('/solutions') && !currentPath.startsWith('/hardware') && !currentPath.startsWith('/software') && !currentPath.startsWith('/products') && !currentPath.startsWith('/demo') && !currentPath.startsWith('/services') && !currentPath.startsWith('/industries') && !currentPath.startsWith('/about') && !currentPath.startsWith('/contact')
                  ? 'text-[#00E5E5] font-semibold'
                  : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Home
              {isCurrent('/') && !currentPath.startsWith('/solutions') && !currentPath.startsWith('/hardware') && !currentPath.startsWith('/software') && !currentPath.startsWith('/products') && !currentPath.startsWith('/demo') && !currentPath.startsWith('/services') && !currentPath.startsWith('/industries') && !currentPath.startsWith('/about') && !currentPath.startsWith('/contact') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
              )}
            </a>

            {/* 2. Products (Mega Menu Trigger) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'products' ? null : 'products')}
                onMouseEnter={() => handleMenuMouseEnter('products')}
                className={`flex items-center space-x-1 whitespace-nowrap transition-colors py-2 relative cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5E5] rounded px-1 ${
                  isProductsActive || activeMegaMenu === 'products'
                    ? 'text-[#00E5E5] font-semibold'
                    : 'text-[#F5F5F7] hover:text-[#00E5E5]'
                }`}
                aria-expanded={activeMegaMenu === 'products'}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeMegaMenu === 'products' ? 'rotate-180 text-[#00E5E5]' : ''}`} />
                {isProductsActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
                )}
              </button>
            </div>

            {/* 3. Services (Mega Menu Trigger) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'services' ? null : 'services')}
                onMouseEnter={() => handleMenuMouseEnter('services')}
                className={`flex items-center space-x-1 whitespace-nowrap transition-colors py-2 relative cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5E5] rounded px-1 ${
                  isCurrent('/services') || activeMegaMenu === 'services'
                    ? 'text-[#00E5E5] font-semibold'
                    : 'text-[#F5F5F7] hover:text-[#00E5E5]'
                }`}
                aria-expanded={activeMegaMenu === 'services'}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180 text-[#00E5E5]' : ''}`} />
                {isCurrent('/services') && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
                )}
              </button>
            </div>

            {/* 4. Solutions (Mega Menu Trigger) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'solutions' ? null : 'solutions')}
                onMouseEnter={() => handleMenuMouseEnter('solutions')}
                className={`flex items-center space-x-1 whitespace-nowrap transition-colors py-2 relative cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5E5] rounded px-1 ${
                  isCurrent('/solutions') || activeMegaMenu === 'solutions'
                    ? 'text-[#00E5E5] font-semibold'
                    : 'text-[#F5F5F7] hover:text-[#00E5E5]'
                }`}
                aria-expanded={activeMegaMenu === 'solutions'}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeMegaMenu === 'solutions' ? 'rotate-180 text-[#00E5E5]' : ''}`} />
                {isCurrent('/solutions') && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
                )}
              </button>
            </div>

            {/* 5. Demo */}
            <a
              href="/demo/"
              onClick={(e) => handleLinkClick(e, '/demo/')}
              onMouseEnter={() => setActiveMegaMenu(null)}
              className={`whitespace-nowrap transition-colors py-2 relative ${
                isCurrent('/demo')
                  ? 'text-[#00E5E5] font-semibold'
                  : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Demo
              {isCurrent('/demo') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
              )}
            </a>

            {/* 6. Industries (Mega Menu Trigger — Matches EPAM Reference Screenshot 1) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'industries' ? null : 'industries')}
                onMouseEnter={() => handleMenuMouseEnter('industries')}
                className={`flex items-center space-x-1 whitespace-nowrap transition-colors py-2 relative cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5E5] rounded px-1 ${
                  isCurrent('/industries') || activeMegaMenu === 'industries'
                    ? 'text-[#00E5E5] font-semibold'
                    : 'text-[#F5F5F7] hover:text-[#00E5E5]'
                }`}
                aria-expanded={activeMegaMenu === 'industries'}
                aria-haspopup="true"
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeMegaMenu === 'industries' ? 'rotate-180 text-[#00E5E5]' : ''}`} />
                {isCurrent('/industries') && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
                )}
              </button>
            </div>

            {/* 7. About Us */}
            <a
              href="/about/"
              onClick={(e) => handleLinkClick(e, '/about/')}
              onMouseEnter={() => setActiveMegaMenu(null)}
              className={`whitespace-nowrap transition-colors py-2 relative ${
                isCurrent('/about')
                  ? 'text-[#00E5E5] font-semibold'
                  : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              About Us
              {isCurrent('/about') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
              )}
            </a>

            {/* 8. Contact */}
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              onMouseEnter={() => setActiveMegaMenu(null)}
              className={`whitespace-nowrap transition-colors py-2 relative ${
                isCurrent('/contact')
                  ? 'text-[#00E5E5] font-semibold'
                  : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Contact
              {isCurrent('/contact') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E5E5]" />
              )}
            </a>
          </nav>

          {/* Right Controls: EPAM-style Theme Pill & Search Icon (No Request a Quote button) */}
          <div className="flex items-center space-x-4 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden sm:flex items-center w-11 h-6 rounded-full border border-[#41434A] bg-[#0B101B] p-0.5 transition-colors hover:border-[#00E5E5] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5E5]"
              title={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
              aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
              aria-pressed={isLightMode}
            >
              <span className={`flex items-center justify-center w-4 h-4 rounded-full bg-[#00E5E5] text-[#050505] shadow-xs transition-transform ${isLightMode ? 'translate-x-5' : ''}`}>
                {isLightMode ? <Sun className="w-2.5 h-2.5" /> : <Moon className="w-2.5 h-2.5" />}
              </span>
            </button>

            {/* Search Icon */}
            <button
              type="button"
              onClick={() => {
                const elem = document.getElementById('products');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors p-1.5 focus:outline-none"
              aria-label="Search catalogue"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Width Reusable Mega Menu Component */}
      <MegaMenu 
        activeMenu={activeMegaMenu} 
        onClose={() => setActiveMegaMenu(null)} 
        onNavigate={(path) => {
          setActiveMegaMenu(null);
          setMobileMenuOpen(false);
          if (onNavigate) {
            onNavigate(path);
          } else {
            window.location.href = path;
          }
        }}
      />

      {/* Mobile Responsive Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#41434A] bg-[#050505] px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="space-y-2">
            {/* 1. Home */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isCurrent('/') ? 'text-[#00E5E5] bg-[#0B101B]' : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Home
            </a>

            {/* 2. Products Accordion */}
            <div className="pt-1">
              <div className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-bold">
                Products
              </div>
              <div className="pl-4 space-y-1.5 border-l border-[#292D36] ml-3 mt-1">
                <a
                  href="/hardware/dcn-heat-controller/"
                  onClick={(e) => handleLinkClick(e, '/hardware/dcn-heat-controller/')}
                  className="block px-2 py-1 text-xs text-[#C2C6D0] hover:text-[#00E5E5]"
                >
                  · DCN &amp; Heat Controller
                </a>
                <a
                  href="/hardware/specification/"
                  onClick={(e) => handleLinkClick(e, '/hardware/specification/')}
                  className="block px-2 py-1 text-xs text-[#C2C6D0] hover:text-[#00E5E5]"
                >
                  · Hardware Specifications &amp; Datasheet
                </a>
                <a
                  href="/software/fluxora/"
                  onClick={(e) => handleLinkClick(e, '/software/fluxora/')}
                  className="block px-2 py-1 text-xs text-[#C2C6D0] hover:text-[#00E5E5]"
                >
                  · Fluxora PID Monitor
                </a>
                <a
                  href="/software/"
                  onClick={(e) => handleLinkClick(e, '/software/')}
                  className="block px-2 py-1 text-xs text-[#00E5E5] font-medium"
                >
                  · All Software Platforms (9) →
                </a>
              </div>
            </div>

            {/* 3. Services */}
            <a
              href="/services/"
              onClick={(e) => handleLinkClick(e, '/services/')}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isCurrent('/services') ? 'text-[#00E5E5] bg-[#0B101B]' : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Services
            </a>

            {/* 4. Solutions */}
            <a
              href="/solutions/"
              onClick={(e) => handleLinkClick(e, '/solutions/')}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isCurrent('/solutions') ? 'text-[#00E5E5] bg-[#0B101B]' : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Solutions
            </a>

            {/* 5. Demo */}
            <a
              href="/demo/"
              onClick={(e) => handleLinkClick(e, '/demo/')}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isCurrent('/demo') ? 'text-[#00E5E5] bg-[#0B101B]' : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Demo
            </a>

            {/* 6. Industries */}
            <a
              href="/industries/"
              onClick={(e) => handleLinkClick(e, '/industries/')}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isCurrent('/industries') ? 'text-[#00E5E5] bg-[#0B101B]' : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Industries
            </a>

            {/* 7. About Us */}
            <a
              href="/about/"
              onClick={(e) => handleLinkClick(e, '/about/')}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isCurrent('/about') ? 'text-[#00E5E5] bg-[#0B101B]' : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              About Us
            </a>

            {/* 8. Contact */}
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isCurrent('/contact') ? 'text-[#00E5E5] bg-[#0B101B]' : 'text-[#F5F5F7] hover:text-[#00E5E5]'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
