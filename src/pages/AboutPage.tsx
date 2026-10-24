import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { CallToAction } from '../components/CallToAction';
import { SimplifiedEcosystemDiagram } from '../components/IndustrialVisuals';
import { COMPANY_INFO } from '../data/products';
import { TEAM_MEMBERS, TOTAL_TEAM_SIZE } from '../data/team';
import { ShieldCheck, Cpu, Factory, MapPin, Mail, Phone, Server, Layers, Users, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            dark={false}
            items={[{ label: 'About Us' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-2 block">
              CORPORATE OVERVIEW
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              About Emertech Electronics
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Based in the industrial manufacturing hub of Vadodara, Gujarat, Emertech Electronics is an industrial hardware and software company delivering specialized hardware products and connected operational intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Narrative & Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
              Engineering Hardware. Connecting Intelligence.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Emertech Electronics, we focus on engineering hardware and software that solves real manufacturing friction. Founded with deep domain experience in industrial electronics, edge computing, and process automation, we believe in straightforward technology that works reliably without fragile external dependencies.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our engineering portfolio bridges two major business capabilities: <strong className="text-slate-900 font-semibold">Industrial Hardware</strong> centered on the DCN &amp; Heat Controller platform (featuring rugged ESP32 edge nodes and on-premises Single Board Computer servers), and <strong className="text-slate-900 font-semibold">Industrial Software Solutions</strong> spanning 9 dedicated platforms including Fluxora (IoT blade heating), Equipoise (blade balancing), Smolder (fire &amp; siren control), Postern (emergency door control), Clime (energy monitoring), Manifest (asset tracking), Foundry (production ERP), Herald (long-range gateway), and Census (video analytics).
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase block mb-1">
                  Offline-First Architecture
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shop-floor systems cannot halt when external networks fluctuate. Our local servers and DCN nodes run 100% autonomously on your plant LAN.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase block mb-1">
                  Non-Invasive Integration
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We design edge hardware that interfaces with existing plant PID controllers without requiring costly rewiring or scrap of working panels.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Vadodara Operations Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white text-lg">
                ET
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Emertech Electronics</h3>
                <span className="text-xs font-mono text-slate-400">Engineering &amp; Manufacturing Center</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span>Vadodara, Gujarat, India — Western India's premier heavy electrical and mechanical equipment hub.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[\s-]/g, '')}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
              <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wide block">
                Engineering Approach
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Grounding every specification in verified engineering performance, avoiding vendor lock-in, and delivering production-ready hardware and software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET OUR TEAM SECTION
          Heading: "Meet Our Team"
          Supporting text: "Our team brings together expertise in software development, embedded systems, hardware engineering, and IoT development to build industrial technology solutions."
          Subtle indicator: "15 Team Members"
          Six specified profile cards
          ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Our People
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200/80 text-slate-700 border border-slate-300">
                  <Users className="w-3 h-3 mr-1.5 text-orange-600" />
                  {TOTAL_TEAM_SIZE} Team Members
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Meet Our Team
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Our team brings together expertise in software development, embedded systems, hardware engineering, and IoT development to build industrial technology solutions.
              </p>
            </div>
          </div>

          {/* Clean Grid of 6 Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Tasteful Initials-Based Avatar */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-base tracking-wider border border-slate-800 shadow-2xs group-hover:border-orange-500 transition-colors">
                      <span className="text-orange-400 font-mono">{member.initials}</span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80">
                      {member.discipline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 mt-1">
                    {member.designation}
                  </p>
                </div>

                {/* Email link for CTO Dishant Shah */}
                {member.email ? (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-xs font-medium text-orange-600 hover:text-orange-700 transition-colors group"
                      title={`Send email to ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5 mr-1.5 text-orange-500 shrink-0" />
                      <span className="truncate underline underline-offset-2 decoration-orange-300 group-hover:decoration-orange-600 font-mono text-[11px]">
                        {member.email}
                      </span>
                    </a>
                  </div>
                ) : (
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-[11px] text-slate-400 font-mono">
                    <span>Emertech Electronics</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Note on overall team strength */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-xs text-slate-500 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>
                Backed by a dedicated <strong>15-member team</strong> across core engineering, firmware, shop-floor fabrication, and quality assurance in Vadodara.
              </span>
            </div>
            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact/');
              }}
              className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center"
            >
              <span>Get in Touch with Our Team</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* System Integration Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          kicker="System Synergy"
          title="Hardware &amp; Software Integration Architecture"
          description="How Emertech hardware and software combine to give plant operators complete operational control."
        />
        <SimplifiedEcosystemDiagram />
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallToAction
          title="Connect with Our Engineering Desk"
          subtitle="Learn more about our Vadodara manufacturing capabilities, schedule a technical consultation, or discuss custom product development."
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}
