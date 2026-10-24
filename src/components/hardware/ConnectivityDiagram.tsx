import React, { useState } from 'react';
import { Cpu, Server, FileCheck, Layers, ArrowDown, ArrowRight, Info, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  step: string;
  title: string;
  badge: string;
  subtitle: string;
  protocol: string;
  dataRate: string;
  role: string;
  specs: string[];
}

export function ConnectivityDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>('dcn');

  const nodes: ArchitectureNode[] = [
    {
      id: 'field',
      step: '01',
      title: 'Field PID & Heating Blankets',
      badge: 'Shop Floor Machine',
      subtitle: 'Autonics TK4S / TX4S & Silicon Heating Elements',
      protocol: 'RS485 Half-Duplex (2-wire A/B)',
      dataRate: '19,200 baud (100ms poll cycle)',
      role: 'Measures mold surface thermocouple inputs (0–200°C) and powers heating blankets without panel rewiring.',
      specs: [
        'No replacement of existing PID controllers required',
        'Daisy-chained RS485 loop with up to 32 multidrop controllers',
        'Keypad lock signal blocks unauthorized setpoint adjustments',
      ],
    },
    {
      id: 'dcn',
      step: '02',
      title: 'Emertech DCN Edge Node',
      badge: 'Edge Processing Layer',
      subtitle: 'Dual-Core ESP32 Industrial Gateway (DIN-rail)',
      protocol: 'Industrial Wi-Fi (2.4 GHz) / RJ45 Ethernet',
      dataRate: 'Sub-second real-time telemetry stream',
      role: 'Continuous edge polling engine, active blanket current sensing, fail-safe trip logic, and 48-hour offline flash backup.',
      specs: [
        'Dual-Core ESP32 running dedicated real-time acquisition loops',
        'Built-in non-volatile buffer holds 48h of time-series data during dropouts',
        'High-gain external SMA whip antenna transmits through metal cabinets',
      ],
    },
    {
      id: 'server',
      step: '03',
      title: 'Fluxora On-Premises Server',
      badge: 'Local Control Layer',
      subtitle: 'Rugged Single Board Computer (SBC) On-Site Engine',
      protocol: 'Encrypted LAN / Local WebSocket & REST',
      dataRate: 'Zero-latency local network transactions',
      role: '100% on-premises offline control engine. Enforces recipe SOPs, hosts local database, and serves shop-floor dashboards.',
      specs: [
        'Zero cloud dependency: works in 100% air-gapped industrial facilities',
        'Centralized dashboard accessible from plant tablets, laptops, and PCs',
        'Automated real-time anomaly detection and supervisory alarms',
      ],
    },
    {
      id: 'export',
      step: '04',
      title: 'Audit-Ready Batch Certificate',
      badge: 'QA & Compliance Output',
      subtitle: 'Indelible PDF & Microsoft Excel Batch Reports',
      protocol: 'PDF / XLSX Secure Cryptographic Export',
      dataRate: 'Instantly compiled per blade heating cycle',
      role: 'Generates tamper-evident thermal cure reports with full cycle curves, peak soak durations, operator IDs, and kWh totals.',
      specs: [
        'Meets global wind turbine blade OEM audit compliance standards',
        'Full temperature trace graph with high/low threshold overlays',
        'Single-click automated email dispatch to quality assurance directors',
      ],
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-orange-600 uppercase tracking-widest font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM CONNECTIVITY &amp; DATA FLOW ARCHITECTURE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            From Shop-Floor PID to Compliance Certificate
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Hover or tap each stage to inspect the hardware bus, transmission protocol, latency, and engineering specs.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Data Flow: Active</span>
        </div>
      </div>

      {/* Interactive Diagram Pipeline (Desktop Horizontal / Mobile Vertical) */}
      <div className="relative">
        {/* Animated Connecting Track (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-100 -z-0">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,#FF6A00_50%,transparent_100%)] bg-[length:200%_100%] animate-[shimmer_2.5s_infinite_linear]" />
        </div>

        {/* 4 Stage Interactive Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {nodes.map((node, index) => {
            const isActive = activeNodeId === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={() => setActiveNodeId(node.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveNodeId(node.id);
                  }
                }}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isActive
                    ? 'bg-orange-50/50 border-orange-500 shadow-md -translate-y-1 ring-1 ring-orange-500'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isActive
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    STAGE {node.step}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {node.badge}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors">
                  {node.id === 'field' && (
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                      <Zap className="w-5 h-5" />
                    </div>
                  )}
                  {node.id === 'dcn' && (
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'}`}>
                      <Cpu className="w-5 h-5" />
                    </div>
                  )}
                  {node.id === 'server' && (
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                      <Server className="w-5 h-5" />
                    </div>
                  )}
                  {node.id === 'export' && (
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-orange-600 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
                      <FileCheck className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 leading-snug">
                  {node.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {node.subtitle}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-orange-600 font-semibold truncate">
                    {node.protocol.split(' ')[0]}
                  </span>
                  <span className="text-slate-400">
                    {isActive ? 'Selected' : 'Click to inspect'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Detailed Tooltip / Inspection Card */}
      <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 shadow-lg space-y-4 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <span className="w-7 h-7 rounded-lg bg-orange-600 text-white flex items-center justify-center font-mono font-bold text-xs">
              {activeNode.step}
            </span>
            <div>
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block font-semibold">
                STAGE INSPECTOR · {activeNode.badge}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {activeNode.title}
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <div className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-slate-300">
              <span className="text-slate-400">Protocol:</span> <strong className="text-orange-400">{activeNode.protocol}</strong>
            </div>
            <div className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-md text-slate-300">
              <span className="text-slate-400">Telemetry Rate:</span> <strong className="text-white">{activeNode.dataRate}</strong>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {activeNode.role}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {activeNode.specs.map((item, idx) => (
            <div key={idx} className="bg-slate-800/80 rounded-lg p-3 border border-slate-700/60 flex items-start space-x-2 text-xs text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
