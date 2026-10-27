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
    <div className="space-y-16 pb-16 bg-[#050505] text-[#F5F5F7]">
      {/* Header */}
      <section className="bg-[#020610] border-b border-[#292D36] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            dark={true}
            items={[{ label: 'Contact & Enquiries' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-bold mb-2 block">
              Direct Engineering Engagement
            </span>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F7]">
              Contact &amp; Commercial Enquiries
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#C2C6D0] leading-relaxed font-light">
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
            <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E5E5] block mb-1">
                  Corporate Office
                </span>
                <h2 className="text-xl font-bold text-[#F5F5F7]">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-xs text-[#969DAA] mt-1">
                  Industrial hardware products &amp; software solutions
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#C2C6D0]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#00E5E5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#F5F5F7]">Manufacturing Facility &amp; Registered Office</span>
                    <span className="text-[#969DAA]">Vadodara, Gujarat, India</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#00E5E5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#F5F5F7]">Direct Email Enquiries</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#00E5E5] hover:underline underline-offset-2 font-mono"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#00E5E5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#F5F5F7]">Technical Support &amp; Sales</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/[\s-]/g, '')}`}
                      className="text-[#F5F5F7] hover:text-[#00E5E5] font-mono font-medium transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#00E5E5] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#F5F5F7]">Operating Hours</span>
                    <span className="text-[#969DAA]">{COMPANY_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#292D36]">
                <a
                  href={COMPANY_INFO.brochurePath}
                  download="Emertech_Fluxora_Brochure.pdf"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] hover:text-[#00E5E5] bg-[#050505] hover:bg-[#080D18] border border-[#41434A] hover:border-[#00E5E5] rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4 mr-2 text-[#00E5E5]" />
                  <span>Download Fluxora Brochure (PDF)</span>
                </a>
              </div>
            </div>

            {/* Static Integration Notice Card */}
            <div className="bg-[#080D18] text-[#F5F5F7] rounded-2xl p-6 border border-[#292D36] space-y-3">
              <div className="flex items-center space-x-2 text-[#00E5E5] font-bold text-xs uppercase tracking-wider font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Static Architecture Notice</span>
              </div>
              <p className="text-xs text-[#C2C6D0] leading-relaxed font-light">
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
