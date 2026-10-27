import React from 'react';
import { Database, Layers, Radio } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export function DcnHardwareVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Ambient Electric Cyan Glow */}
      <div className="absolute -inset-4 bg-[#00E5E5]/15 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Enclosure Body */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#111A3A] to-[#0A1128] border border-[#41434A] p-6 shadow-2xl backdrop-blur-md">
        {/* Top 35mm DIN-Rail Latch Bracket */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-48 h-3.5 bg-slate-800 rounded-t-md border-t border-x border-slate-600 flex items-center justify-between px-4">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700" />
          <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            35MM DIN-RAIL CLIP
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700" />
        </div>

        {/* Top Terminal Block: 24V Power & RS485 Bus */}
        <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 mb-5">
          <div className="flex items-center justify-between text-[9px] font-mono uppercase text-slate-400 font-bold mb-2">
            <span>POWER INPUT (18–36V DC)</span>
            <span className="text-[#00E5E5]">RS485 MODBUS BUS</span>
          </div>

          <div className="grid grid-cols-6 gap-1.5 text-center">
            {[
              { label: '+24V', color: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80' },
              { label: '0V / GND', color: 'bg-slate-900 text-slate-300 border-slate-700' },
              { label: 'EARTH', color: 'bg-amber-950/60 text-amber-400 border-amber-800/80' },
              { label: 'DATA A+', color: 'bg-[#00E5E5]/10 text-[#00E5E5] border-[#00E5E5]/40' },
              { label: 'DATA B-', color: 'bg-[#00E5E5]/10 text-[#00E5E5] border-[#00E5E5]/40' },
              { label: 'SHIELD', color: 'bg-slate-900 text-slate-300 border-slate-700' },
            ].map((term, i) => (
              <div
                key={i}
                className={`py-1 px-0.5 rounded border ${term.color} font-mono text-[9px] font-bold shadow-xs`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mx-auto mb-0.5 border border-slate-600 flex items-center justify-center">
                  <div className="w-1 h-0.5 bg-slate-400 rotate-45" />
                </div>
                <span>{term.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Section: Emertech Brand Badge & Live OLED Telemetry Display */}
        <div className="grid grid-cols-12 gap-4 items-center mb-5">
          {/* Brand Mark Column */}
          <div className="col-span-5 space-y-1">
            <div className="flex items-center space-x-2">
              <BrandLogo compact />
            </div>

            <div className="pt-1.5">
              <span className="text-[9px] font-mono font-bold text-[#00E5E5] bg-[#00E5E5]/10 border border-[#00E5E5]/30 px-2 py-0.5 rounded">
                DCN-4R-W-24V
              </span>
              <span className="text-[8px] text-slate-400 font-mono block mt-1">
                EDGE DATA NODE · VADODARA
              </span>
            </div>
          </div>

          {/* Mini OLED High-Contrast Telemetry Display */}
          <div className="col-span-7 bg-[#02040A] rounded-xl p-3 border border-slate-800 text-left font-mono space-y-1 shadow-inner">
            <div className="flex items-center justify-between text-[9px] text-slate-500 border-b border-slate-800/80 pb-1">
              <span className="flex items-center text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                SYSTEM RUNNING
              </span>
              <span className="text-slate-400">FW 2.4.1</span>
            </div>

            <div className="text-[10px] text-white font-bold leading-tight pt-0.5">
              POLL: 32 NODES OK (100ms)
            </div>
            <div className="text-[9px] text-[#00E5E5] leading-tight">
              AUTONICS PID · RS485 ACTIVE
            </div>
            <div className="text-[8px] text-slate-400 flex items-center justify-between pt-0.5 border-t border-slate-900">
              <span>SOP LOCK: ARMED</span>
              <span className="text-emerald-400">48H CACHE READY</span>
            </div>
          </div>
        </div>

        {/* LED Diagnostic Row & SMA Antenna Section */}
        <div className="flex items-center justify-between bg-slate-950/60 rounded-xl p-3 border border-slate-800/80 mb-5">
          {/* Diagnostic LEDs */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
              <span className="text-[9px] font-mono font-semibold text-slate-300">PWR</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
              <span className="text-[9px] font-mono font-semibold text-slate-300">RUN</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00E5E5] animate-ping shadow-sm shadow-[#00E5E5]" />
              <span className="text-[9px] font-mono font-semibold text-[#00E5E5]">MODBUS</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#087BFF] shadow-sm shadow-[#087BFF]" />
              <span className="text-[9px] font-mono font-semibold text-[#087BFF]">WI-FI</span>
            </div>
          </div>

          {/* SMA Antenna Port Callout */}
          <div className="flex items-center space-x-1 text-[9px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 px-2 py-1 rounded">
            <Radio className="w-3 h-3 text-[#00E5E5]" />
            <span>SMA 2.4GHz</span>
          </div>
        </div>

        {/* Bottom Section: 4 Relay Channel Output Terminals */}
        <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80">
          <div className="flex items-center justify-between text-[9px] font-mono uppercase text-slate-400 font-bold mb-2">
            <span>4-ZONE RELAY OUTPUTS (230V / 10A)</span>
            <span className="text-emerald-400">ACTIVE CURRENT GUARD</span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            {['ZONE 1 (NO/C)', 'ZONE 2 (NO/C)', 'ZONE 3 (NO/C)', 'ZONE 4 (NO/C)'].map((zone, i) => (
              <div
                key={i}
                className="py-1 px-1 rounded border border-slate-800 bg-slate-900/90 font-mono text-[8px] font-bold text-slate-300 shadow-xs"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 mx-auto mb-1" />
                <span>{zone}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 35mm DIN-Rail Latch Bracket */}
        <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-48 h-3.5 bg-slate-800 rounded-b-md border-b border-x border-slate-600 flex items-center justify-between px-4">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700" />
          <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            QUICK RELEASE LATCH
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700" />
        </div>
      </div>

      {/* 3 Glassmorphism Feature Chips Pointing to Components */}
      {/* Chip 1: Pointing to Top RS485 Terminal */}
      <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#0B101B]/95 backdrop-blur-md border border-[#41434A] rounded-xl px-3.5 py-2 shadow-xl flex items-center space-x-2 text-xs text-white z-20">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono font-semibold">RS485 Modbus RTU</span>
      </div>

      {/* Chip 2: Pointing to Offline Edge Memory */}
      <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#0B101B]/95 backdrop-blur-md border border-[#41434A] rounded-xl px-3.5 py-2 shadow-xl flex items-center space-x-2 text-xs text-white z-20">
        <Database className="w-3.5 h-3.5 text-[#00E5E5]" />
        <span className="font-mono font-semibold">100% Offline-Capable</span>
      </div>

      {/* Chip 3: Pointing to DIN-Rail Mount */}
      <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-[#0B101B]/95 backdrop-blur-md border border-[#41434A] rounded-xl px-3.5 py-2 shadow-xl flex items-center space-x-2 text-xs text-white z-20">
        <Layers className="w-3.5 h-3.5 text-[#00E5E5]" />
        <span className="font-mono font-semibold">35mm DIN-Rail</span>
      </div>
    </div>
  );
}
