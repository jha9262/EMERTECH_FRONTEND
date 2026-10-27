import React, { useState } from 'react';
import { Copy, Check, Box, Truck, Shield, Headphones, ArrowRight } from 'lucide-react';
import { MODEL_CODE_OPTIONS } from '../../data/hardware-specs';

interface ModelCodeBuilderProps {
  onRequestQuoteWithCode: (code: string) => void;
}

export function ModelCodeBuilder({ onRequestQuoteWithCode }: ModelCodeBuilderProps) {
  const [family, setFamily] = useState('DCN');
  const [relays, setRelays] = useState('4R');
  const [comm, setComm] = useState('W');
  const [power, setPower] = useState('24V');
  const [copied, setCopied] = useState(false);

  const fullCode = `${family}-${relays}-${comm}-${power}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedFamilyObj = MODEL_CODE_OPTIONS.family.find((f) => f.code === family);
  const selectedRelaysObj = MODEL_CODE_OPTIONS.relays.find((r) => r.code === relays);
  const selectedCommObj = MODEL_CODE_OPTIONS.comm.find((c) => c.code === comm);
  const selectedPowerObj = MODEL_CODE_OPTIONS.power.find((p) => p.code === power);

  return (
    <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] p-6 sm:p-8 space-y-8 text-[#F5F5F7]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292D36] pb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5E5] font-semibold block">
            PROCUREMENT &amp; ORDERING SPECIFICATION
          </span>
          <h3 className="text-xl sm:text-2xl font-light text-[#F5F5F7] tracking-tight mt-1">
            Interactive Model Code Configurator
          </h3>
          <p className="text-xs sm:text-sm text-[#C2C6D0] mt-1 max-w-2xl leading-relaxed">
            Select your required hardware options below to generate the exact factory ordering code for quotation and purchase requisitions.
          </p>
        </div>
      </div>

      {/* Code Display Bar */}
      <div className="bg-[#050505] text-[#F5F5F7] rounded-xl p-5 border border-[#292D36] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-[#00E5E5] uppercase tracking-widest font-semibold block">
            CONFIGURED FACTORY PART NUMBER
          </span>
          <div className="flex items-center space-x-2 font-mono text-2xl sm:text-3xl font-medium tracking-wider">
            <span className="text-[#00E5E5]">{family}</span>
            <span className="text-[#41434A]">-</span>
            <span className="text-[#F5F5F7]">{relays}</span>
            <span className="text-[#41434A]">-</span>
            <span className="text-[#087BFF]">{comm}</span>
            <span className="text-[#41434A]">-</span>
            <span className="text-[#A855F7]">{power}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2.5 bg-[#0B101B] hover:bg-[#151D2E] text-[#C2C6D0] hover:text-[#F5F5F7] text-xs font-mono font-medium rounded-lg transition-colors border border-[#41434A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5E5]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1.5 text-[#00E5E5]" />
                <span className="text-[#00E5E5]">Copied ✓</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1.5 text-[#969DAA]" />
                <span>Copy Code</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => onRequestQuoteWithCode(fullCode)}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2.5 bg-[#00E5E5] hover:bg-[#00E5E5]/90 text-black text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5E5]"
          >
            <span>Quote This Code</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>

      {/* Segment Selector Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Family */}
        <div className="space-y-2.5">
          <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide">
            1. Hardware Family
          </label>
          <div className="space-y-1.5">
            {MODEL_CODE_OPTIONS.family.map((opt) => (
              <button
                key={opt.code}
                type="button"
                onClick={() => setFamily(opt.code)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors ${
                  family === opt.code
                    ? 'border-[#00E5E5] bg-[#00E5E5]/10 text-[#00E5E5] font-semibold ring-1 ring-[#00E5E5]'
                    : 'border-[#292D36] bg-[#050505] hover:border-[#41434A] text-[#C2C6D0] hover:text-[#F5F5F7]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#00E5E5]">{opt.code}</span>
                  {family === opt.code && <Check className="w-3 h-3 text-[#00E5E5]" />}
                </div>
                <div className="text-[11px] text-[#969DAA] mt-0.5 font-normal">{opt.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Relays */}
        <div className="space-y-2.5">
          <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide">
            2. Relay Channels
          </label>
          <div className="space-y-1.5">
            {MODEL_CODE_OPTIONS.relays.map((opt) => (
              <button
                key={opt.code}
                type="button"
                onClick={() => setRelays(opt.code)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors ${
                  relays === opt.code
                    ? 'border-[#00E5E5] bg-[#00E5E5]/10 text-[#00E5E5] font-semibold ring-1 ring-[#00E5E5]'
                    : 'border-[#292D36] bg-[#050505] hover:border-[#41434A] text-[#C2C6D0] hover:text-[#F5F5F7]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#00E5E5]">{opt.code}</span>
                  {relays === opt.code && <Check className="w-3 h-3 text-[#00E5E5]" />}
                </div>
                <div className="text-[11px] text-[#969DAA] mt-0.5 font-normal">{opt.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Connectivity */}
        <div className="space-y-2.5">
          <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide">
            3. Network Interface
          </label>
          <div className="space-y-1.5">
            {MODEL_CODE_OPTIONS.comm.map((opt) => (
              <button
                key={opt.code}
                type="button"
                onClick={() => setComm(opt.code)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors ${
                  comm === opt.code
                    ? 'border-[#00E5E5] bg-[#00E5E5]/10 text-[#00E5E5] font-semibold ring-1 ring-[#00E5E5]'
                    : 'border-[#292D36] bg-[#050505] hover:border-[#41434A] text-[#C2C6D0] hover:text-[#F5F5F7]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#00E5E5]">{opt.code}</span>
                  {comm === opt.code && <Check className="w-3 h-3 text-[#00E5E5]" />}
                </div>
                <div className="text-[11px] text-[#969DAA] mt-0.5 font-normal">{opt.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Power */}
        <div className="space-y-2.5">
          <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide">
            4. Power Supply
          </label>
          <div className="space-y-1.5">
            {MODEL_CODE_OPTIONS.power.map((opt) => (
              <button
                key={opt.code}
                type="button"
                onClick={() => setPower(opt.code)}
                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors ${
                  power === opt.code
                    ? 'border-[#00E5E5] bg-[#00E5E5]/10 text-[#00E5E5] font-semibold ring-1 ring-[#00E5E5]'
                    : 'border-[#292D36] bg-[#050505] hover:border-[#41434A] text-[#C2C6D0] hover:text-[#F5F5F7]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#00E5E5]">{opt.code}</span>
                  {power === opt.code && <Check className="w-3 h-3 text-[#00E5E5]" />}
                </div>
                <div className="text-[11px] text-[#969DAA] mt-0.5 font-normal">{opt.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Code Breakdown Table */}
      <div className="bg-[#050505] border border-[#292D36] rounded-xl p-4 text-xs space-y-2">
        <span className="text-[10px] font-mono text-[#969DAA] uppercase tracking-wider block font-semibold">
          Configured Code Breakdown
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[#C2C6D0]">
          <div>
            <span className="font-mono font-medium text-[#00E5E5]">{family}</span>: {selectedFamilyObj?.name}
          </div>
          <div>
            <span className="font-mono font-medium text-[#F5F5F7]">{relays}</span>: {selectedRelaysObj?.description}
          </div>
          <div>
            <span className="font-mono font-medium text-[#087BFF]">{comm}</span>: {selectedCommObj?.name}
          </div>
          <div>
            <span className="font-mono font-medium text-[#A855F7]">{power}</span>: {selectedPowerObj?.name}
          </div>
        </div>
      </div>

      {/* Commercial Ordering Info Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="p-4 rounded-xl border border-[#292D36] bg-[#050505] space-y-1">
          <div className="flex items-center space-x-2 text-[#F5F5F7] font-medium text-xs">
            <Truck className="w-4 h-4 text-[#00E5E5]" />
            <span>Lead Time</span>
          </div>
          <div className="text-sm font-semibold text-[#F5F5F7]">
            2–3 Weeks <span className="text-[10px] text-[#00E5E5] font-mono bg-[#00E5E5]/10 border border-[#00E5E5]/30 px-1 rounded">TBC</span>
          </div>
          <p className="text-[11px] text-[#969DAA]">Ships directly from Vadodara facility</p>
        </div>

        <div className="p-4 rounded-xl border border-[#292D36] bg-[#050505] space-y-1">
          <div className="flex items-center space-x-2 text-[#F5F5F7] font-medium text-xs">
            <Box className="w-4 h-4 text-[#00E5E5]" />
            <span>Minimum Order</span>
          </div>
          <div className="text-sm font-semibold text-[#F5F5F7]">
            1 Unit <span className="text-xs font-normal text-[#969DAA]">(Prototyping)</span>
          </div>
          <p className="text-[11px] text-[#969DAA]">Volume tiered discounts from 10+ units</p>
        </div>

        <div className="p-4 rounded-xl border border-[#292D36] bg-[#050505] space-y-1">
          <div className="flex items-center space-x-2 text-[#F5F5F7] font-medium text-xs">
            <Shield className="w-4 h-4 text-[#00E5E5]" />
            <span>Warranty</span>
          </div>
          <div className="text-sm font-semibold text-[#F5F5F7]">
            1-Year Replacement <span className="text-[10px] text-[#00E5E5] font-mono bg-[#00E5E5]/10 border border-[#00E5E5]/30 px-1 rounded">TBC</span>
          </div>
          <p className="text-[11px] text-[#969DAA]">Full factory warranty on manufacturing</p>
        </div>

        <div className="p-4 rounded-xl border border-[#292D36] bg-[#050505] space-y-1">
          <div className="flex items-center space-x-2 text-[#F5F5F7] font-medium text-xs">
            <Headphones className="w-4 h-4 text-[#00E5E5]" />
            <span>Technical Support</span>
          </div>
          <div className="text-sm font-semibold text-[#F5F5F7]">
            Direct Engineers
          </div>
          <p className="text-[11px] text-[#969DAA]">Call &amp; email support from Vadodara team</p>
        </div>
      </div>
    </div>
  );
}
