import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { CallToAction } from '../components/CallToAction';
import { HARDWARE_PRODUCTS } from '../data/products';
import { Cpu, ShieldCheck } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const dcnProduct = HARDWARE_PRODUCTS[0];

  return (
    <div className="space-y-12 pb-16 bg-[#050505] text-[#F5F5F7]">
      {/* Top Header & Breadcrumbs */}
      <section className="bg-[#020610] border-b border-[#292D36] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            dark={true}
            items={[{ label: 'Hardware' }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-bold mb-2 block">
              HARDWARE CATALOGUE
            </span>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F7]">
              Industrial Hardware
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#C2C6D0] leading-relaxed font-light">
              Explore Emertech's industrial hardware for data collection, heating monitoring, and process control.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Exactly One Hardware Family */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div>
          <SectionHeading
            kicker="Edge Hardware &amp; Controller"
            title="Featured Industrial Hardware"
            description="Our documented hardware platform engineered for precision thermal curing and multi-zone mould tooling."
          />
          
          <div className="max-w-2xl mt-6">
            <ProductCard product={dcnProduct} onNavigate={onNavigate} />
          </div>
        </div>

        {/* Technical Architecture Overview Card */}
        <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-8 shadow-xl space-y-5">
          <div className="flex items-center space-x-3 text-[#F5F5F7] font-bold text-base">
            <div className="w-8 h-8 rounded-lg bg-[#00E5E5]/10 text-[#00E5E5] border border-[#00E5E5]/20 flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <span>Hardware Engineering Highlights</span>
          </div>
          <p className="text-xs sm:text-sm text-[#C2C6D0] leading-relaxed">
            The DCN &amp; Heat Controller platform combines shop-floor edge nodes with an on-premises Single Board Computer (SBC). Built on the ESP32 microcontroller, DCN units loop multiple PID controllers over RS485 Modbus RTU, providing encrypted wireless data transmission and standalone offline buffer storage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-[#050505] p-4 rounded-xl border border-[#292D36]">
              <div className="flex items-center space-x-2 text-[#F5F5F7] font-bold text-xs mb-1">
                <ShieldCheck className="w-4 h-4 text-[#00E5E5]" />
                <span>Zero Rewiring</span>
              </div>
              <p className="text-[11px] text-[#969DAA]">
                Preserves existing Autonics TK4S panels without cabinet rebuilding.
              </p>
            </div>

            <div className="bg-[#050505] p-4 rounded-xl border border-[#292D36]">
              <div className="flex items-center space-x-2 text-[#F5F5F7] font-bold text-xs mb-1">
                <ShieldCheck className="w-4 h-4 text-[#00E5E5]" />
                <span>Current Guard</span>
              </div>
              <p className="text-[11px] text-[#969DAA]">
                Active blanket load current monitoring halts heating on abnormal draw.
              </p>
            </div>

            <div className="bg-[#050505] p-4 rounded-xl border border-[#292D36]">
              <div className="flex items-center space-x-2 text-[#F5F5F7] font-bold text-xs mb-1">
                <ShieldCheck className="w-4 h-4 text-[#00E5E5]" />
                <span>Offline Engine</span>
              </div>
              <p className="text-[11px] text-[#969DAA]">
                100% on-premises database and SOP recipe locks with zero cloud latency.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CallToAction onNavigate={onNavigate} />
      </div>
    </div>
  );
}
