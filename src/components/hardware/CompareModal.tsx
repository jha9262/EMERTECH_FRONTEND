import React, { useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Cpu, Zap, Network, Flame, Sparkles } from 'lucide-react';
import { HARDWARE_PRODUCTS_DATA } from '../../data/hardware-specs';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export function CompareModal({ isOpen, onClose, onRequestQuote }: CompareModalProps) {
  const dcn = HARDWARE_PRODUCTS_DATA.dcn;
  const hc = HARDWARE_PRODUCTS_DATA['heat-controller'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const comparisonRows = [
    {
      label: 'Primary Role',
      dcn: 'Edge Data Collector & RS485 Gateway',
      hc: 'Multi-Zone Power & Thermal Safety Controller',
    },
    {
      label: 'Core Microcontroller',
      dcn: 'ESP32 Dual-Core (240 MHz)',
      hc: 'ESP32 Dual-Core + Hardware Watchdog',
    },
    {
      label: 'Relay Channels',
      dcn: 'Optional 2 or 4 Cutoff Relays (TBC)',
      hc: '4 Isolated Heavy-Duty Relays (230V / 10A each)',
    },
    {
      label: 'Field / Sensor Inputs',
      dcn: 'Up to 32 Modbus RTU Slaves (Autonics, Selec, Schneider)',
      hc: '4x Integrated Current Transformers + E-Stop Loop',
    },
    {
      label: 'Safety & Protection',
      dcn: 'Remote SOP keypad lock + telemetry alarms',
      hc: 'Sub-50ms active current & thermal runaway trip',
    },
    {
      label: 'Communication Interfaces',
      dcn: 'RS485 Half-Duplex, 2.4 GHz Wi-Fi (SMA), Ethernet (TBC)',
      hc: 'RS485 Modbus RTU Slave, 2.4 GHz Wi-Fi',
    },
    {
      label: 'Offline Buffer Storage',
      dcn: '48h Flash cache for telemetry during disconnects',
      hc: 'Last 1,000 fault events in non-volatile EEPROM',
    },
    {
      label: 'Power Input',
      dcn: '24V DC nominal (18–36V DC) / <5W',
      hc: '230V AC ± 10%, 50/60 Hz',
    },
    {
      label: 'Form Factor / Mounting',
      dcn: 'Compact 35mm DIN-rail / Wall Flange',
      hc: 'Heatsink chassis 35mm DIN-rail / Panel Baseplate',
    },
    {
      label: 'Best Plant Application',
      dcn: 'Mould tooling telemetry, energy monitoring, retrofit PIDs',
      hc: 'Heating blankets, composite curing plates, thermal zones',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] z-10 animate-fade-in">
        {/* Header */}
        <div className="px-6 py-5 bg-[#050816] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 font-semibold block">
              HARDWARE SPECIFICATION COMPARISON
            </span>
            <h2 className="text-xl font-bold tracking-tight text-white mt-0.5">
              DCN Edge Node vs Multi-Zone Heat Controller
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4 pb-2">
            <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                  {dcn.modelCode}
                </span>
                <span className="text-xs text-slate-500">Data Collector</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{dcn.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{dcn.shortDescription}</p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote(`${dcn.name} (${dcn.modelCode})`);
                }}
                className="w-full inline-flex items-center justify-center px-3 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Request DCN Quote
              </button>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">
                  {hc.modelCode}
                </span>
                <span className="text-xs text-slate-500">Power &amp; Safety</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{hc.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{hc.shortDescription}</p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote(`${hc.name} (${hc.modelCode})`);
                }}
                className="w-full inline-flex items-center justify-center px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Request Controller Quote
              </button>
            </div>
          </div>

          {/* Feature Matrix Rows */}
          <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs">
            {comparisonRows.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-12 p-3.5 items-center ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                }`}
              >
                <div className="col-span-4 font-bold text-slate-800 pr-2">
                  {row.label}
                </div>
                <div className="col-span-4 font-mono text-slate-700 pr-2 border-l border-slate-200 pl-3">
                  {row.dcn}
                </div>
                <div className="col-span-4 font-mono text-slate-700 border-l border-slate-200 pl-3">
                  {row.hc}
                </div>
              </div>
            ))}
          </div>

          {/* Recommendation Box */}
          <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs font-bold text-orange-400">
                <Sparkles className="w-4 h-4" />
                <span>Need both for complete blade heating automation?</span>
              </div>
              <p className="text-xs text-slate-300">
                The DCN Edge Node and Multi-Zone Heat Controller integrate directly via RS485 to form our complete turnkey Fluxora mould automation system.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote('Complete System: DCN Edge Node + Heat Controller Bundle');
              }}
              className="inline-flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-lg shrink-0 transition-colors"
            >
              Quote Both as Bundle
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Both units engineered and manufactured in Vadodara, Gujarat</span>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-semibold"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}
