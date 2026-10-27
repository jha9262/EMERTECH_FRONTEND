import React from 'react';
import { ArrowRight, Download, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  onNavigate: (path: string) => void;
  showBrochure?: boolean;
}

export function CallToAction({
  title = "Ready to Discuss Your Industrial Engineering Requirements?",
  subtitle = "Contact our Vadodara engineering office for technical demonstrations, system architecture reviews, or commercial dispenser quotations.",
  onNavigate,
  showBrochure = true,
}: CallToActionProps) {
  return (
    <section className="dark-section bg-[#080D18] text-[#F5F5F7] py-16 border-t border-[#292D36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#050505] via-[#0B101B] to-[#050505] rounded-2xl p-8 sm:p-12 border border-[#292D36] shadow-2xl">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E5E5]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-semibold mb-3 block">
              Emertech Direct Engineering Engagement
            </span>
            <h3 
              className="text-2xl sm:text-3xl font-light tracking-tight text-[#F5F5F7] mb-4"
              style={{ textWrap: 'balance' }}
            >
              {title}
            </h3>
            <p className="text-sm sm:text-base text-[#C2C6D0] mb-8 leading-relaxed font-light">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact/');
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,229,0.3)] whitespace-nowrap"
              >
                <span>Request Quotation / Technical Discussion</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              {showBrochure && (
                <a
                  href={COMPANY_INFO.brochurePath}
                  download="Emertech_Fluxora_Brochure.pdf"
                  className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#0B101B] hover:bg-[#050505] border border-[#41434A] hover:border-[#00E5E5] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4 mr-2 text-[#00E5E5]" />
                  <span>Download Brochure (PDF)</span>
                </a>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#292D36] flex flex-wrap gap-6 text-xs text-[#969DAA]">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[\s-]/g, '')}`}
                className="flex items-center space-x-2 hover:text-[#00E5E5] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00E5E5]" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-2 hover:text-[#00E5E5] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00E5E5]" />
                <span>Email: {COMPANY_INFO.email}</span>
              </a>
              <span className="text-[#969DAA] font-mono">Vadodara, Gujarat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
