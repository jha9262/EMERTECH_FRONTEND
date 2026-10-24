import React from 'react';
import { Mail, Phone, MapPin, Download, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { SOFTWARE_PRODUCTS } from '../data/software';
import { formatPhoneForHref } from '../utils/product-utils';

interface SiteFooterProps {
  onNavigate?: (path: string) => void;
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('http') || path.endsWith('.pdf')) {
      return;
    }
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                ET
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-white uppercase block">
                  EMERTECH
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase -mt-0.5 block font-mono">
                  ELECTRONICS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Industrial hardware and software solutions company based in Vadodara, Gujarat. Connecting physical equipment with intelligent monitoring, process control, reporting, and operational insights.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-2"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a
                  href={formatPhoneForHref(COMPANY_INFO.phone)}
                  className="hover:text-white transition-colors font-mono"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Fluxora Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Industrial Hardware */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold mb-4">
              Hardware
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/hardware/"
                  onClick={(e) => handleLinkClick(e, '/hardware/')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  All Hardware
                </a>
              </li>
              <li>
                <a
                  href="/hardware/dcn-heat-controller/"
                  onClick={(e) => handleLinkClick(e, '/hardware/dcn-heat-controller/')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  DCN &amp; Heat Controller
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Software Solutions (Part 1) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold mb-4">
              Software (1–5)
            </h4>
            <ul className="space-y-2 text-xs">
              {SOFTWARE_PRODUCTS.slice(0, 5).map((prod) => (
                <li key={prod.slug}>
                  <a
                    href={prod.route}
                    onClick={(e) => handleLinkClick(e, prod.route)}
                    className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-orange-400 transition-colors">
                      {prod.slug === 'fluxora' ? 'Heating' : prod.slug === 'equipoise' ? 'Balancing' : prod.slug === 'smolder' ? 'Fire' : prod.slug === 'postern' ? 'Doors' : 'Energy'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Software Solutions (Part 2) & Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold mb-4">
              Software (6–9) &amp; Info
            </h4>
            <ul className="space-y-2 text-xs">
              {SOFTWARE_PRODUCTS.slice(5).map((prod) => (
                <li key={prod.slug}>
                  <a
                    href={prod.route}
                    onClick={(e) => handleLinkClick(e, prod.route)}
                    className="text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-orange-400 transition-colors">
                      {prod.slug === 'manifest' ? 'Assets' : prod.slug === 'foundry' ? 'ERP' : prod.slug === 'herald' ? 'Gateway' : 'Video'}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <a
                  href="/solutions/"
                  onClick={(e) => handleLinkClick(e, '/solutions/')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="/demo/"
                  onClick={(e) => handleLinkClick(e, '/demo/')}
                  className="text-orange-400 hover:text-orange-300 font-semibold transition-colors flex items-center justify-between"
                >
                  <span>Software Demo</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 uppercase">
                    Preview
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/services/"
                  onClick={(e) => handleLinkClick(e, '/services/')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/industries/"
                  onClick={(e) => handleLinkClick(e, '/industries/')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="/about/"
                  onClick={(e) => handleLinkClick(e, '/about/')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => handleLinkClick(e, '/contact/')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact &amp; Quotes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Vadodara, Gujarat, India.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <a
              href="/hardware/dcn-heat-controller/"
              onClick={(e) => handleLinkClick(e, '/hardware/dcn-heat-controller/')}
              className="hover:text-slate-300 transition-colors"
            >
              Hardware Specification
            </a>
            <span className="text-slate-700">·</span>
            <a
              href="/software/"
              onClick={(e) => handleLinkClick(e, '/software/')}
              className="hover:text-slate-300 transition-colors"
            >
              Software Suite
            </a>
            <span className="text-slate-700">·</span>
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className="hover:text-slate-300 transition-colors"
            >
              Commercial RFQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
