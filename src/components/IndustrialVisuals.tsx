import React from 'react';
import { Cpu, Server, Wifi, FileSpreadsheet, ShieldCheck, Activity, Scale, Bell, DoorClosed, Zap, Box, Factory, Radio, Camera } from 'lucide-react';

export function SimplifiedEcosystemDiagram() {
  return (
    <div className="relative w-full rounded-2xl bg-[#0B101B] border border-[#292D36] p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between border-b border-[#292D36] pb-4 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00E5E5]">
            System Integration
          </span>
          <span className="text-[#41434A]">·</span>
          <span className="text-xs text-[#969DAA] font-medium">Hardware &amp; Software Ecosystem</span>
        </div>
        <span className="text-[10px] font-mono text-[#969DAA] bg-[#050505] px-2 py-0.5 rounded border border-[#292D36]">
          On-Premise &amp; Connected
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Step 1: Industrial Hardware */}
        <div className="bg-[#050505] rounded-xl p-4 border border-[#292D36] flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#0B101B] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-[#00E5E5] font-bold uppercase block mb-1">
              01. Hardware
            </span>
            <h4 className="text-sm font-bold text-[#F5F5F7] mb-1">
              DCN Edge Hardware
            </h4>
            <p className="text-xs text-[#C2C6D0] leading-relaxed">
              ESP32-based Data Collector Nodes interfacing with Autonics &amp; Modbus RTU PID controllers.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#292D36] text-[11px] font-mono text-[#969DAA]">
            Zero PID Rewiring
          </div>
        </div>

        {/* Step 2: Local Server / SBC */}
        <div className="bg-[#050505] rounded-xl p-4 border border-[#292D36] flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#0B101B] border border-[#292D36] text-[#087BFF] flex items-center justify-center font-bold mb-3">
              <Server className="w-4 h-4 text-[#087BFF]" />
            </div>
            <span className="text-[10px] font-mono text-[#969DAA] font-bold uppercase block mb-1">
              02. Edge Engine
            </span>
            <h4 className="text-sm font-bold text-[#F5F5F7] mb-1">
              Local Server / SBC
            </h4>
            <p className="text-xs text-[#C2C6D0] leading-relaxed">
              Industrial Single Board Computer running local database, device authentication, and SOP recipe locks 100% offline.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#292D36] text-[11px] font-mono text-[#969DAA]">
            Zero Cloud Latency
          </div>
        </div>

        {/* Step 3: Software Platform */}
        <div className="bg-[#050505] rounded-xl p-4 border border-[#292D36] flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#0B101B] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold mb-3">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-[#00E5E5] font-bold uppercase block mb-1">
              03. Software
            </span>
            <h4 className="text-sm font-bold text-[#F5F5F7] mb-1">
              Fluxora SCADA
            </h4>
            <p className="text-xs text-[#C2C6D0] leading-relaxed">
              Multi-client browser UI for office PCs, maintenance laptops, and shop-floor tablets across the plant LAN.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#292D36] text-[11px] font-mono text-[#969DAA]">
            SOP-Locked Profiles
          </div>
        </div>

        {/* Step 4: Reports & Insights */}
        <div className="bg-[#050505] rounded-xl p-4 border border-[#292D36] flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-lg bg-[#0B101B] border border-[#292D36] text-[#00E5E5] flex items-center justify-center font-bold mb-3">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-[#00E5E5] font-bold uppercase block mb-1">
              04. Insights
            </span>
            <h4 className="text-sm font-bold text-[#F5F5F7] mb-1">
              Compliance QA
            </h4>
            <p className="text-xs text-[#C2C6D0] leading-relaxed">
              Tamper-resistant PDF and Microsoft Excel batch inspection sheets with thermal curve graphs and energy metrics.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#292D36] text-[11px] font-mono text-[#969DAA]">
            Audit-Ready Records
          </div>
        </div>
      </div>

      {/* Connection Protocol Footer */}
      <div className="mt-6 pt-4 border-t border-[#292D36] flex flex-wrap items-center justify-between text-xs text-[#969DAA] gap-2">
        <div className="flex items-center space-x-2">
          <Wifi className="w-4 h-4 text-[#00E5E5] shrink-0" />
          <span className="text-[#C2C6D0]">Encrypted Industrial Wi-Fi &amp; Looped RS485 Modbus RTU</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#00E5E5] shrink-0" />
          <span className="text-[#C2C6D0]">Role-Based Access &amp; SOP Keypad Lockout</span>
        </div>
      </div>
    </div>
  );
}

export function BladeHeatingSchematic() {
  return (
    <div className="rounded-2xl bg-[#0B101B] p-6 sm:p-8 text-[#F5F5F7] border border-[#292D36] shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5E5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#292D36] gap-2 mb-6">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5E5] font-semibold block mb-1">
            Blade Tooling Architecture
          </span>
          <h3 className="text-lg font-bold text-[#F5F5F7]">
            Distributed Heating Mould with DCN Retrofit
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono text-[#969DAA] bg-[#050505] px-2.5 py-1 rounded border border-[#292D36]">
            Length: 70m – 100m+ Mould Tooling
          </span>
        </div>
      </div>

      {/* Blade Mould SVG Graphic */}
      <div className="bg-[#050505] rounded-xl p-4 sm:p-6 border border-[#292D36] mb-6">
        <svg viewBox="0 0 800 180" className="w-full h-auto" fill="none">
          {/* Blade Contour Outline */}
          <path
            d="M 50 110 C 150 110, 300 95, 500 75 C 650 60, 720 45, 750 40 C 740 55, 680 80, 500 115 C 300 150, 150 135, 50 110 Z"
            fill="#0B101B"
            stroke="#41434A"
            strokeWidth="2"
          />

          {/* Heating Blanket Zones along Mould */}
          <g opacity="0.9">
            {/* Zone 1 (Root) */}
            <path d="M 70 110 C 120 110, 160 108, 190 105 L 190 130 C 160 132, 120 130, 70 120 Z" fill="#00E5E5" opacity="0.25" stroke="#00E5E5" strokeWidth="1.5" />
            <text x="130" y="122" fill="#00E5E5" fontSize="10" fontFamily="monospace" textAnchor="middle">Zone 1 (Root)</text>

            {/* Zone 2 (Mid-Span) */}
            <path d="M 210 103 C 280 98, 360 90, 420 83 L 420 115 C 360 125, 280 130, 210 127 Z" fill="#087BFF" opacity="0.3" stroke="#087BFF" strokeWidth="1.5" />
            <text x="315" y="112" fill="#087BFF" fontSize="10" fontFamily="monospace" textAnchor="middle">Zone 2 (Mid-Span)</text>

            {/* Zone 3 (Outer) */}
            <path d="M 440 81 C 510 73, 580 64, 630 56 L 630 88 C 580 98, 510 107, 440 113 Z" fill="#A855F7" opacity="0.3" stroke="#A855F7" strokeWidth="1.5" />
            <text x="535" y="90" fill="#A855F7" fontSize="10" fontFamily="monospace" textAnchor="middle">Zone 3 (Outer)</text>

            {/* Zone 4 (Tip) */}
            <path d="M 650 54 C 685 49, 715 44, 735 41 L 730 65 C 710 71, 680 78, 650 84 Z" fill="#00E5E5" opacity="0.25" stroke="#00E5E5" strokeWidth="1.5" />
            <text x="690" y="62" fill="#00E5E5" fontSize="9" fontFamily="monospace" textAnchor="middle">Zone 4 (Tip)</text>
          </g>

          {/* DCN Edge Nodes along the mould */}
          <g>
            {/* DCN 1 */}
            <rect x="115" y="30" width="30" height="24" rx="4" fill="#0B101B" stroke="#00E5E5" strokeWidth="2" />
            <circle cx="130" cy="42" r="3" fill="#00E5E5" />
            <line x1="130" y1="54" x2="130" y2="105" stroke="#00E5E5" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="130" y="24" fill="#F5F5F7" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">DCN #1</text>

            {/* DCN 2 */}
            <rect x="300" y="30" width="30" height="24" rx="4" fill="#0B101B" stroke="#087BFF" strokeWidth="2" />
            <circle cx="315" cy="42" r="3" fill="#087BFF" />
            <line x1="315" y1="54" x2="315" y2="92" stroke="#087BFF" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="315" y="24" fill="#F5F5F7" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">DCN #2</text>

            {/* DCN 3 */}
            <rect x="520" y="20" width="30" height="24" rx="4" fill="#0B101B" stroke="#A855F7" strokeWidth="2" />
            <circle cx="535" cy="32" r="3" fill="#A855F7" />
            <line x1="535" y1="44" x2="535" y2="72" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="535" y="14" fill="#F5F5F7" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">DCN #3</text>
          </g>

          {/* Central Local Server (SBC) */}
          <rect x="350" y="142" width="100" height="32" rx="4" fill="#020610" stroke="#00E5E5" strokeWidth="1.5" />
          <text x="400" y="162" fill="#00E5E5" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">LOCAL SBC SERVER</text>

          {/* Wireless links from DCN to SBC */}
          <path d="M 130 30 C 130 15, 380 15, 380 142" stroke="#00E5E5" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
          <path d="M 315 30 C 315 20, 395 20, 395 142" stroke="#087BFF" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
          <path d="M 535 20 C 535 15, 415 15, 415 142" stroke="#A855F7" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="bg-[#050505] p-3 rounded-lg border border-[#292D36]">
          <span className="font-mono text-[#00E5E5] font-bold block mb-1">01. Autonics PID Panel Link</span>
          <p className="text-[#C2C6D0] text-[11px] leading-relaxed">
            RS485 daisy-chain loop polls existing PID controllers without panel rewiring or sensor modifications.
          </p>
        </div>
        <div className="bg-[#050505] p-3 rounded-lg border border-[#292D36]">
          <span className="font-mono text-[#087BFF] font-bold block mb-1">02. Blanket Current Guard</span>
          <p className="text-[#C2C6D0] text-[11px] leading-relaxed">
            Detects overcurrent or thermal runaway per blanket, automatically halting heating to protect the mould.
          </p>
        </div>
        <div className="bg-[#050505] p-3 rounded-lg border border-[#292D36]">
          <span className="font-mono text-[#A855F7] font-bold block mb-1">03. SOP Keypad Lockout</span>
          <p className="text-[#C2C6D0] text-[11px] leading-relaxed">
            Locks local controller keypads during cycle execution to prevent unauthorized parameter overrides.
          </p>
        </div>
      </div>
    </div>
  );
}

export function BatchReportVisual() {
  return (
    <div className="rounded-2xl bg-[#0B101B] border border-[#292D36] shadow-sm p-6 text-[#F5F5F7]">
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-[#292D36] gap-2 mb-4">
        <div>
          <div className="text-xs font-mono uppercase text-[#00E5E5] font-bold tracking-wide">
            Official Batch Certificate Sample
          </div>
          <div className="text-base font-bold text-[#F5F5F7]">
            Fluxora Thermal Cycle Inspection Report
          </div>
        </div>
        <div className="text-right">
          <span className="inline-block text-[11px] font-mono bg-[#050505] text-[#00E5E5] border border-[#00E5E5]/30 px-2.5 py-1 rounded font-semibold">
            RESULT: COMPLETED (PASS)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#050505] p-3.5 rounded-xl border border-[#292D36] text-xs mb-4">
        <div>
          <span className="text-[#969DAA] block text-[11px]">Batch ID</span>
          <span className="font-mono font-semibold text-[#F5F5F7]">24C001</span>
        </div>
        <div>
          <span className="text-[#969DAA] block text-[11px]">Blanket No.</span>
          <span className="font-mono font-semibold text-[#F5F5F7]">W16G001</span>
        </div>
        <div>
          <span className="text-[#969DAA] block text-[11px]">Operator</span>
          <span className="font-medium text-[#F5F5F7]">Ramesh Kumar</span>
        </div>
        <div>
          <span className="text-[#969DAA] block text-[11px]">Profile</span>
          <span className="font-mono font-semibold text-[#F5F5F7]">BLADE_HEAT_V1</span>
        </div>
        <div>
          <span className="text-[#969DAA] block text-[11px]">Start Time</span>
          <span className="font-mono text-[#C2C6D0]">12 Mar 09:25</span>
        </div>
        <div>
          <span className="text-[#969DAA] block text-[11px]">End Time</span>
          <span className="font-mono text-[#C2C6D0]">12 Mar 12:40</span>
        </div>
        <div>
          <span className="text-[#969DAA] block text-[11px]">Export Format</span>
          <span className="font-medium text-[#C2C6D0]">PDF &amp; Microsoft Excel</span>
        </div>
        <div>
          <span className="text-[#969DAA] block text-[11px]">Traceability Hash</span>
          <span className="font-mono text-[#C2C6D0]">#EES-21000501</span>
        </div>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-[#080D18] border-y border-[#292D36] text-[#F5F5F7] font-semibold uppercase text-[10px]">
              <th className="py-2 px-3">Zone</th>
              <th className="py-2 px-3">Start (°C)</th>
              <th className="py-2 px-3">Peak (°C)</th>
              <th className="py-2 px-3">Soak (min)</th>
              <th className="py-2 px-3">Energy (kWh)</th>
              <th className="py-2 px-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#292D36] font-mono">
            {[
              { zone: 'Z1', start: '25.1', peak: '45.2', soak: '60', energy: '12.5', status: 'OK' },
              { zone: 'Z2', start: '24.8', peak: '45.0', soak: '60', energy: '12.7', status: 'OK' },
              { zone: 'Z3', start: '25.0', peak: '45.1', soak: '60', energy: '12.6', status: 'OK' },
              { zone: 'Z4', start: '25.2', peak: '45.3', soak: '60', energy: '12.8', status: 'OK' }
            ].map((row) => (
              <tr key={row.zone} className="hover:bg-[#080D18]/80">
                <td className="py-2 px-3 font-bold text-[#F5F5F7]">{row.zone}</td>
                <td className="py-2 px-3 text-[#969DAA]">{row.start}</td>
                <td className="py-2 px-3 text-[#00E5E5] font-semibold">{row.peak}</td>
                <td className="py-2 px-3 text-[#969DAA]">{row.soak}</td>
                <td className="py-2 px-3 text-[#969DAA]">{row.energy}</td>
                <td className="py-2 px-3 text-right">
                  <span className="inline-block text-[10px] text-[#00E5E5] bg-[#050505] px-1.5 py-0.5 rounded font-bold border border-[#00E5E5]/30">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#050505] p-4 rounded-xl border border-[#292D36] text-[#F5F5F7]">
        <div className="flex items-center justify-between text-[11px] text-[#969DAA] mb-2">
          <span className="font-mono">DCN Temperature Ramp &amp; Soak Curve</span>
          <span className="font-mono text-[#00E5E5] font-semibold">Peak Achieved: 45.3°C</span>
        </div>
        <div className="h-14 w-full flex items-end space-x-1 pt-2">
          {[15, 20, 26, 35, 45, 58, 70, 80, 88, 90, 91, 91, 90, 90, 91, 90, 89, 75, 60, 48].map((val, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gradient-to-t from-[#087BFF] to-[#00E5E5] rounded-t-xs"
              style={{ height: `${val}%` }}
              title={`Stage ${idx + 1}: ${val}% target temperature`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-[#969DAA] font-mono mt-1.5">
          <span>09:25 Start (Ambient 25.1°C)</span>
          <span>SOP Soak Phase (45.0°C)</span>
          <span>12:40 Cool-down</span>
        </div>
      </div>
    </div>
  );
}

// Software Architecture Schema Component
export function SoftwareArchitectureVisual({ slug }: { slug: string }) {
  switch (slug) {
    case 'fluxora':
      return <BladeHeatingSchematic />;
    case 'equipoise':
      return (
        <div className="rounded-2xl bg-[#0B101B] p-6 sm:p-8 text-[#F5F5F7] border border-[#292D36] shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#292D36] mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-semibold">
              Rotor Balancing Matrix
            </span>
            <span className="text-[11px] font-mono text-[#969DAA] bg-[#050505] px-2.5 py-0.5 rounded border border-[#292D36]">
              3-Blade Matching Engine
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-3 bg-[#050505] rounded-lg border border-[#292D36]">
              <span className="text-[11px] text-[#969DAA] block">Blade A (Root: 0°)</span>
              <span className="text-sm font-bold font-mono text-[#00E5E5]">12,450 kg · 21.4m CG</span>
            </div>
            <div className="p-3 bg-[#050505] rounded-lg border border-[#292D36]">
              <span className="text-[11px] text-[#969DAA] block">Blade B (120°)</span>
              <span className="text-sm font-bold font-mono text-[#00E5E5]">12,448 kg · 21.4m CG</span>
            </div>
            <div className="p-3 bg-[#050505] rounded-lg border border-[#292D36]">
              <span className="text-[11px] text-[#969DAA] block">Blade C (240°)</span>
              <span className="text-sm font-bold font-mono text-[#00E5E5]">12,452 kg · 21.4m CG</span>
            </div>
          </div>
          <div className="p-3 bg-[#050505] border border-[#00E5E5]/40 rounded-lg text-[#00E5E5] text-xs flex items-center justify-between">
            <span>Rotor Imbalance Differential: <strong>&lt;0.08%</strong></span>
            <span className="font-mono uppercase font-semibold">Status: Balanced Set Passed</span>
          </div>
        </div>
      );
    case 'smolder':
      return (
        <div className="rounded-2xl bg-[#0B101B] p-6 sm:p-8 text-[#F5F5F7] border border-[#292D36] shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#292D36] mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00E5E5] font-semibold">
              Fire Alarm Staging &amp; Siren Network
            </span>
            <span className="text-[11px] font-mono text-[#00E5E5] bg-[#050505] px-2.5 py-0.5 rounded border border-[#00E5E5]/30">
              Supervised System
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#050505] rounded-lg border border-[#292D36]">
              <span className="font-mono text-[#00E5E5] font-bold block mb-1">Optical &amp; Thermal</span>
              <p className="text-[#C2C6D0] text-[11px]">Continuous sensor polling across moulding bays and chemical storage areas.</p>
            </div>
            <div className="p-3 bg-[#050505] rounded-lg border border-[#292D36]">
              <span className="font-mono text-[#00E5E5] font-bold block mb-1">Central Siren Staging</span>
              <p className="text-[#C2C6D0] text-[11px]">Synchronized horn relays and high-visibility evacuation strobes.</p>
            </div>
            <div className="p-3 bg-[#050505] rounded-lg border border-[#292D36]">
              <span className="font-mono text-[#00E5E5] font-bold block mb-1">Postern Interlock</span>
              <p className="text-[#C2C6D0] text-[11px]">Immediate emergency signal dispatch to release perimeter magnetic exit locks.</p>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
