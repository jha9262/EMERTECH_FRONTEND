import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { COMPANY_INFO } from '../data/products';
import { MapPin, Mail, Phone, Clock, Download, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* Header (Clean Light Palette) */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            dark={false}
            items={[{ label: 'Contact & Enquiries' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-2 block">
              Direct Engineering Engagement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Contact &amp; Commercial Enquiries
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Connect directly with our engineering and commercial teams for technical consultations, live product demonstrations, or custom quotations for industrial hardware, automation, and software platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Corporate Office
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Industrial hardware products &amp; software solutions
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Manufacturing Facility &amp; Registered Office</span>
                    <span className="text-slate-600">Vadodara, Gujarat, India</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Direct Email Enquiries</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-orange-600 hover:text-orange-700 underline underline-offset-2 font-mono"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Technical Support &amp; Sales</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/[\s-]/g, '')}`}
                      className="text-slate-900 hover:text-orange-600 font-mono font-medium"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Operating Hours</span>
                    <span className="text-slate-600">{COMPANY_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.brochurePath}
                  download="Emertech_Fluxora_Brochure.pdf"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4 mr-2 text-orange-600" />
                  <span>Download Fluxora Brochure (PDF)</span>
                </a>
              </div>
            </div>

            {/* Static Integration Notice Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-wider font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Static Architecture Notice</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                This website is built with a pure static frontend architecture. Submissions generate an RFC-compliant pre-filled email addressed directly to our engineering desk, or post to a designated external CRM webhook without intermediate database logging.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
