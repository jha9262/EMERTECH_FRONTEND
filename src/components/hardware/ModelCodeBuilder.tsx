import React, { useState } from 'react';
import { Copy, Check, Info, Box, Truck, Shield, Headphones, ArrowRight } from 'lucide-react';
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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
            PROCUREMENT &amp; ORDERING SPECIFICATION
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Interactive Model Code Configurator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Select your required hardware options below to generate the exact factory ordering code for quotation and purchase requisitions.
          </p>
        </div>
      </div>

      {/* Code Display Bar */}
      <div className="bg-[#050816] text-white rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-semibold block">
            CONFIGURED FACTORY PART NUMBER
          </span>
          <div className="flex items-center space-x-2 font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-wider">
            <span className="text-orange-400">{family}</span>
            <span className="text-slate-500">-</span>
            <span className="text-white">{relays}</span>
            <span className="text-slate-500">-</span>
            <span className="text-emerald-400">{comm}</span>
            <span className="text-slate-500">-</span>
            <span className="text-amber-300">{power}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold rounded-lg transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                <span className="text-emerald-400">Copied ✓</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                <span>Copy Code</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => onRequestQuoteWithCode(fullCode)}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
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
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
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
                    ? 'border-orange-500 bg-orange-50/60 text-orange-950 font-bold ring-1 ring-orange-500'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-orange-600">{opt.code}</span>
                  {family === opt.code && <Check className="w-3 h-3 text-orange-600" />}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-normal">{opt.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Relays */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
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
                    ? 'border-orange-500 bg-orange-50/60 text-orange-950 font-bold ring-1 ring-orange-500'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-orange-600">{opt.code}</span>
                  {relays === opt.code && <Check className="w-3 h-3 text-orange-600" />}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-normal">{opt.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Connectivity */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
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
                    ? 'border-orange-500 bg-orange-50/60 text-orange-950 font-bold ring-1 ring-orange-500'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-orange-600">{opt.code}</span>
                  {comm === opt.code && <Check className="w-3 h-3 text-orange-600" />}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-normal">{opt.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Power */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
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
                    ? 'border-orange-500 bg-orange-50/60 text-orange-950 font-bold ring-1 ring-orange-500'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-orange-600">{opt.code}</span>
                  {power === opt.code && <Check className="w-3 h-3 text-orange-600" />}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-normal">{opt.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Code Breakdown Breakdown Table */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
          Configured Code Breakdown
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-700">
          <div>
            <span className="font-mono font-bold text-orange-600">{family}</span>: {selectedFamilyObj?.name}
          </div>
          <div>
            <span className="font-mono font-bold text-slate-900">{relays}</span>: {selectedRelaysObj?.description}
          </div>
          <div>
            <span className="font-mono font-bold text-slate-900">{comm}</span>: {selectedCommObj?.name}
          </div>
          <div>
            <span className="font-mono font-bold text-slate-900">{power}</span>: {selectedPowerObj?.name}
          </div>
        </div>
      </div>

      {/* Commercial Ordering Info Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs">
            <Truck className="w-4 h-4 text-orange-600" />
            <span>Lead Time</span>
          </div>
          <div className="text-sm font-bold text-slate-800">
            2–3 Weeks <span className="text-[10px] text-orange-600 font-mono bg-orange-100 px-1 rounded">TBC</span>
          </div>
          <p className="text-[11px] text-slate-500">Ships directly from Vadodara facility</p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs">
            <Box className="w-4 h-4 text-orange-600" />
            <span>Minimum Order</span>
          </div>
          <div className="text-sm font-bold text-slate-800">
            1 Unit <span className="text-xs font-normal text-slate-500">(Prototyping)</span>
          </div>
          <p className="text-[11px] text-slate-500">Volume tiered discounts from 10+ units</p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs">
            <Shield className="w-4 h-4 text-orange-600" />
            <span>Warranty</span>
          </div>
          <div className="text-sm font-bold text-slate-800">
            1-Year Replacement <span className="text-[10px] text-orange-600 font-mono bg-orange-100 px-1 rounded">TBC</span>
          </div>
          <p className="text-[11px] text-slate-500">Full factory warranty on manufacturing</p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs">
            <Headphones className="w-4 h-4 text-orange-600" />
            <span>Technical Support</span>
          </div>
          <div className="text-sm font-bold text-slate-800">
            Direct Engineers
          </div>
          <p className="text-[11px] text-slate-500">Call &amp; email support from Vadodara team</p>
        </div>
      </div>
    </div>
  );
}
