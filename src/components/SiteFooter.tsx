import React from 'react';
import { Mail, Phone, MapPin, Download, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
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
    <footer className="bg-[#050505] text-[#C2C6D0] border-t border-[#292D36]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#292D36]">
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
                <span className="text-[10px] font-semibold tracking-wider text-[#969DAA] uppercase -mt-0.5 block font-mono">
                  ELECTRONICS
                </span>
              </div>
            </div>

            <p className="text-xs text-[#969DAA] leading-relaxed max-w-sm">
              Industrial hardware and software solutions company based in Vadodara, Gujarat. Connecting physical equipment with intelligent monitoring, process control, reporting, and operational insights.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-[#969DAA]">
                <MapPin className="w-3.5 h-3.5 text-[#00E5E5] shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#969DAA]">
                <Mail className="w-3.5 h-3.5 text-[#00E5E5] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#00E5E5] transition-colors underline decoration-[#41434A] underline-offset-2"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#969DAA]">
                <Phone className="w-3.5 h-3.5 text-[#00E5E5] shrink-0" />
                <a
                  href={formatPhoneForHref(COMPANY_INFO.phone)}
                  className="hover:text-[#00E5E5] transition-colors font-mono"
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
                className="inline-flex items-center space-x-2 text-xs font-medium text-[#00E5E5] hover:text-white transition-colors bg-[#0B101B] hover:bg-[#111A2E] px-4 py-2.5 rounded-full border border-[#292D36]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Fluxora Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-medium mb-4">
              Products
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#969DAA] font-medium block mb-1.5">
                  Hardware
                </span>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/hardware/dcn-heat-controller/"
                      onClick={(e) => handleLinkClick(e, '/hardware/dcn-heat-controller/')}
                      className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                    >
                      DCN &amp; Heat Controller
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hardware/specification/"
                      onClick={(e) => handleLinkClick(e, '/hardware/specification/')}
                      className="text-[#969DAA] hover:text-[#00E5E5] transition-colors"
                    >
                      Datasheet &amp; Specs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hardware/"
                      onClick={(e) => handleLinkClick(e, '/hardware/')}
                      className="text-[#969DAA] hover:text-[#00E5E5] transition-colors"
                    >
                      All Hardware Catalogue
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#969DAA] font-medium block mb-1.5">
                  Software
                </span>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/software/fluxora/"
                      onClick={(e) => handleLinkClick(e, '/software/fluxora/')}
                      className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                    >
                      Fluxora (PID Monitor)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/software/smolder/"
                      onClick={(e) => handleLinkClick(e, '/software/smolder/')}
                      className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                    >
                      Smolder (Safety)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/software/"
                      onClick={(e) => handleLinkClick(e, '/software/')}
                      className="text-[#00E5E5] hover:underline font-medium transition-colors"
                    >
                      All Software (9) →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-medium mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/solutions/industrial-heating/"
                  onClick={(e) => handleLinkClick(e, '/solutions/industrial-heating/')}
                  className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                >
                  Industrial Heating &amp; PID
                </a>
              </li>
              <li>
                <a
                  href="/solutions/dynamic-balancing/"
                  onClick={(e) => handleLinkClick(e, '/solutions/dynamic-balancing/')}
                  className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                >
                  Dynamic Balancing &amp; Vibration
                </a>
              </li>
              <li>
                <a
                  href="/solutions/fire-suppression/"
                  onClick={(e) => handleLinkClick(e, '/solutions/fire-suppression/')}
                  className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                >
                  Fire Suppression &amp; Safety
                </a>
              </li>
              <li>
                <a
                  href="/solutions/cleanroom-interlocking/"
                  onClick={(e) => handleLinkClick(e, '/solutions/cleanroom-interlocking/')}
                  className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                >
                  Cleanroom Interlocking
                </a>
              </li>
              <li>
                <a
                  href="/solutions/"
                  onClick={(e) => handleLinkClick(e, '/solutions/')}
                  className="text-[#00E5E5] hover:underline font-medium transition-colors pt-1 inline-block"
                >
                  Explore All Solutions →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Services & Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/about/"
                  onClick={(e) => handleLinkClick(e, '/about/')}
                  className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services/"
                  onClick={(e) => handleLinkClick(e, '/services/')}
                  className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                >
                  Engineering Services
                </a>
              </li>
              <li>
                <a
                  href="/industries/"
                  onClick={(e) => handleLinkClick(e, '/industries/')}
                  className="text-[#C2C6D0] hover:text-[#00E5E5] transition-colors"
                >
                  Industries Served
                </a>
              </li>
              <li>
                <a
                  href="/demo/"
                  onClick={(e) => handleLinkClick(e, '/demo/')}
                  className="text-[#00E5E5] hover:underline font-medium transition-colors flex items-center justify-between"
                >
                  <span>Software Demo</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#00E5E5]/10 text-[#00E5E5] border border-[#00E5E5]/20 uppercase">
                    Preview
                  </span>
                </a>
              </li>
              <li className="pt-2 border-t border-[#292D36]">
                <a
                  href="/contact/"
                  onClick={(e) => handleLinkClick(e, '/contact/')}
                  className="text-[#F5F5F7] hover:text-[#00E5E5] transition-colors flex items-center"
                >
                  <span>Contact &amp; RFQ</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 text-[#00E5E5]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#969DAA] gap-4">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Vadodara, Gujarat, India.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <a
              href="/hardware/dcn-heat-controller/"
              onClick={(e) => handleLinkClick(e, '/hardware/dcn-heat-controller/')}
              className="hover:text-[#00E5E5] transition-colors"
            >
              Hardware Specification
            </a>
            <span className="text-[#41434A]">·</span>
            <a
              href="/software/"
              onClick={(e) => handleLinkClick(e, '/software/')}
              className="hover:text-[#00E5E5] transition-colors"
            >
              Software Suite
            </a>
            <span className="text-[#41434A]">·</span>
            <a
              href="/contact/"
              onClick={(e) => handleLinkClick(e, '/contact/')}
              className="hover:text-[#00E5E5] transition-colors"
            >
              Commercial RFQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
