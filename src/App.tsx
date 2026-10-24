import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { DcnHeatControllerPage } from './pages/DcnHeatControllerPage';
import { HardwareSpecPage } from './pages/HardwareSpecPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { SoftwareDetailPage } from './pages/SoftwareDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getSoftwareBySlug } from './data/software';

export default function App() {
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    if (window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    const pathname = window.location.pathname;
    return pathname || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Sync with browser popstate
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash.startsWith('#/')) {
        setCurrentPath(window.location.hash.slice(1));
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic document title and handle scroll to anchor
  useEffect(() => {
    const clean = currentPath.replace(/\/$/, '') || '/';
    let pageTitle = 'Emertech Electronics — Industrial Hardware & Software Solutions';

    if (
      clean === '/hardware' ||
      clean === '/hardware/specification' ||
      clean === '/hardware/specifications' ||
      clean === '/products/hardware' ||
      clean === '/products/hardware-specification'
    ) {
      pageTitle = 'Industrial Edge Hardware Specifications | Emertech Electronics, Vadodara';
    } else if (clean === '/products' || clean === '/hardware/catalogue') {
      pageTitle = 'Industrial Hardware Catalogue — Emertech Electronics';
    } else if (clean === '/hardware/dcn-heat-controller' || clean === '/products/dcn-heat-controller') {
      pageTitle = 'DCN & Heat Controller — Emertech Electronics';
    } else if (clean === '/software') {
      pageTitle = 'Software That Connects Industrial Operations — Emertech Electronics';
    } else if (clean.startsWith('/software/')) {
      const softwareSlug = clean.replace('/software/', '');
      const software = getSoftwareBySlug(softwareSlug);
      if (software) {
        pageTitle = `${software.name} (${software.purpose}) — Emertech Electronics`;
      }
    } else if (clean === '/solutions') {
      pageTitle = 'Industrial Solutions & Applications — Emertech Electronics';
    } else if (clean === '/services') {
      pageTitle = 'Industrial Engineering & Deployment Services — Emertech Electronics';
    } else if (clean === '/industries') {
      pageTitle = 'Supported Industries — Emertech Electronics';
    } else if (clean === '/about') {
      pageTitle = 'About Us — Emertech Electronics';
    } else if (clean === '/contact') {
      pageTitle = 'Contact & Engineering Enquiries — Emertech Electronics';
    } else if (clean === '/404') {
      pageTitle = '404 Page Not Found — Emertech Electronics';
    }

    document.title = pageTitle;

    // Scroll to top or anchor
    if (window.location.hash && !window.location.hash.startsWith('#/')) {
      const elem = document.querySelector(window.location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

  const handleNavigate = (newPath: string) => {
    const [pathOnly, hash] = newPath.split('#');
    const normalizedPath = pathOnly.endsWith('/') || pathOnly.includes('.') ? pathOnly : `${pathOnly}/`;

    if (window.location.pathname !== normalizedPath) {
      window.history.pushState({}, '', hash ? `${normalizedPath}#${hash}` : normalizedPath);
    } else if (hash) {
      window.location.hash = hash;
    }

    setCurrentPath(normalizedPath);

    if (hash) {
      setTimeout(() => {
        const elem = document.getElementById(hash);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  // Route matching
  const renderCurrentPage = () => {
    const normalized = currentPath.replace(/\/$/, '') || '/';

    // Home
    if (normalized === '/' || normalized === '') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    // Hardware Specification Page (Full engineering datasheet & interactive tools)
    if (
      normalized === '/hardware' ||
      normalized === '/hardware/specification' ||
      normalized === '/hardware/specifications' ||
      normalized === '/products/hardware' ||
      normalized === '/products/hardware-specification'
    ) {
      return <HardwareSpecPage onNavigate={handleNavigate} />;
    }

    // Hardware Catalogue
    if (normalized === '/products' || normalized === '/hardware/catalogue') {
      return <ProductsPage onNavigate={handleNavigate} />;
    }

    // DCN & Heat Controller Detail (also alias /products/dcn-heat-controller)
    if (normalized === '/hardware/dcn-heat-controller' || normalized === '/products/dcn-heat-controller') {
      return <DcnHeatControllerPage onNavigate={handleNavigate} />;
    }

    // Software Catalogue
    if (normalized === '/software') {
      return <SoftwarePage onNavigate={handleNavigate} />;
    }

    // Individual Software Detail Pages: /software/[slug]
    if (normalized.startsWith('/software/')) {
      const softwareSlug = normalized.replace('/software/', '');
      const software = getSoftwareBySlug(softwareSlug);
      if (software) {
        return <SoftwareDetailPage software={software} onNavigate={handleNavigate} />;
      }
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    // Solutions Route
    if (normalized === '/solutions') {
      return <SolutionsPage onNavigate={handleNavigate} />;
    }

    // Services Route
    if (normalized === '/services') {
      return <ServicesPage onNavigate={handleNavigate} />;
    }

    // Industries Route
    if (normalized === '/industries') {
      return <IndustriesPage onNavigate={handleNavigate} />;
    }

    // About Route
    if (normalized === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // Contact Route
    if (normalized === '/contact') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    // Fallback 404
    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      {/* Redesigned Clean Header */}
      <SiteHeader currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <SiteFooter onNavigate={handleNavigate} />
    </div>
  );
}
