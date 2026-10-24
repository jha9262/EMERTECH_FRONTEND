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
    <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-3 block">
              Emertech Direct Engineering Engagement
            </span>
            <h3 
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4"
              style={{ textWrap: 'balance' }}
            >
              {title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact/');
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-md whitespace-nowrap"
              >
                <span>Request Quotation / Technical Discussion</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              {showBrochure && (
                <a
                  href={COMPANY_INFO.brochurePath}
                  download="Emertech_Fluxora_Brochure.pdf"
                  className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4 mr-2 text-orange-400" />
                  <span>Download Brochure (PDF)</span>
                </a>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-6 text-xs text-slate-400">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[\s-]/g, '')}`}
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>Email: {COMPANY_INFO.email}</span>
              </a>
              <span className="text-slate-500 font-mono">Vadodara, Gujarat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
