import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  ArrowRight,
  Cpu,
  Zap,
  Network,
  Database,
  Wifi,
  ShieldCheck,
  Layers,
  Lock,
  Thermometer,
  Box,
  Sliders,
  Award,
  Flame,
  ShieldAlert,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Search,
  FileText,
  FileDown,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  HelpCircle,
  Sparkles,
  Scale,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  HARDWARE_PRODUCTS_DATA,
  COMPATIBLE_DEVICES,
  HARDWARE_DOWNLOADS,
  HARDWARE_FAQS,
  HardwareProduct,
} from '../data/hardware-specs';
import { QuoteDrawer } from '../components/hardware/QuoteDrawer';
import { CompareModal } from '../components/hardware/CompareModal';
import { ConnectivityDiagram } from '../components/hardware/ConnectivityDiagram';
import { ModelCodeBuilder } from '../components/hardware/ModelCodeBuilder';
import { SOFTWARE_PRODUCTS } from '../data/software';
import { getSoftwareIcon } from '../components/IndustrialSoftwareIcons';

interface HardwareSpecPageProps {
  onNavigate: (path: string) => void;
}

export function HardwareSpecPage({ onNavigate }: HardwareSpecPageProps) {
  // Query param sync (?product=dcn | heat-controller | all)
  const getInitialProduct = (): 'dcn' | 'heat-controller' | 'all' => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const prod = params.get('product');
      if (prod === 'heat-controller' || prod === 'hc') return 'heat-controller';
      if (prod === 'all') return 'all';
    }
    return 'dcn';
  };

  const [selectedProductKey, setSelectedProductKey] = useState<'dcn' | 'heat-controller' | 'all'>(
    getInitialProduct
  );

  const activeProduct: HardwareProduct =
    selectedProductKey === 'heat-controller'
      ? HARDWARE_PRODUCTS_DATA['heat-controller']
      : HARDWARE_PRODUCTS_DATA.dcn;

  // Sync URL when product changes without full reload
  const handleProductSwitch = (key: 'dcn' | 'heat-controller' | 'all') => {
    setSelectedProductKey(key);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('product', key);
      window.history.replaceState({}, '', url.toString());
    }
  };

  // Quote Drawer State
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState(
    'DCN Edge Node (DCN-4R-W-24V)'
  );
  const [quoteInitialDevice, setQuoteInitialDevice] = useState('');

  // Compare Modal State
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  // Accordion open groups for Spec Table
  const [openSpecGroups, setOpenSpecGroups] = useState<Record<string, boolean>>({
    electrical: true,
    communication: false,
    io: false,
    processing: false,
    mechanical: false,
    environmental: false,
    compliance: false,
  });

  const toggleSpecGroup = (groupId: string) => {
    setOpenSpecGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const handleExpandAllSpecs = (expand: boolean) => {
    const updated: Record<string, boolean> = {};
    activeProduct.specGroups.forEach((g) => {
      updated[g.id] = expand;
    });
    setOpenSpecGroups(updated);
  };

  // Copy Group Specs to clipboard
  const [copiedGroupId, setCopiedGroupId] = useState<string | null>(null);

  const handleCopyGroup = (groupId: string, title: string, items: { name: string; value: string }[]) => {
    const formatted = `${activeProduct.name} - ${title}\n` + items.map((i) => `${i.name}: ${i.value}`).join('\n');
    navigator.clipboard.writeText(formatted);
    setCopiedGroupId(groupId);
    setTimeout(() => setCopiedGroupId(null), 2000);
  };

  // Compatibility Search
  const [compatQuery, setCompatQuery] = useState('');
  const filteredDevices = COMPATIBLE_DEVICES.filter((d) => {
    const q = compatQuery.toLowerCase();
    return (
      d.deviceType.toLowerCase().includes(q) ||
      d.testedModels.toLowerCase().includes(q) ||
      d.protocol.toLowerCase().includes(q) ||
      d.notes.toLowerCase().includes(q)
    );
  });

  // FAQ Accordion State (only one open at a time)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sticky sub-nav scroll spy
  const [activeSection, setActiveSection] = useState('overview');
  const [isSubNavSticky, setIsSubNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'key-specs',
        'spec-table',
        'architecture',
        'compatibility',
        'software-pairing',
        'ordering',
        'downloads',
        'faq',
      ];

      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }

      const overviewElem = document.getElementById('overview');
      if (overviewElem) {
        setIsSubNavSticky(window.scrollY > overviewElem.offsetTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -80; // 80px sticky header offset
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const openQuoteForProduct = (prodName: string, deviceNote = '') => {
    setQuoteInitialProduct(prodName);
    setQuoteInitialDevice(deviceNote);
    setQuoteDrawerOpen(true);
  };

  // JSON-LD Structured Data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: 'Emertech DCN Edge Node',
          image: 'https://emertechelectronics.in/assets/aistudio/image_d6d2a19a.png',
          description:
            'Industrial RS485 Modbus RTU edge data collector with Dual-Core ESP32 processor, 48h offline buffer, and plant-floor DIN-rail enclosure.',
          brand: {
            '@type': 'Brand',
            name: 'Emertech Electronics',
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Emertech Electronics',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Vadodara',
              addressRegion: 'Gujarat',
              addressCountry: 'India',
            },
          },
          model: 'DCN-4R-W-24V',
        },
        {
          '@type': 'Organization',
          name: 'Emertech Electronics',
          url: 'https://emertechelectronics.in',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-8320845947',
            contactType: 'technical support',
            email: 'emertechelectronics@gmail.com',
            areaServed: 'IN',
          },
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const pairedSoftware = SOFTWARE_PRODUCTS.filter((s) =>
    ['fluxora', 'equipoise', 'smolder', 'postern', 'clime'].includes(s.slug)
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-orange-500 selection:text-white">
      {/* 1. HERO SECTION (Dark ~85vh, industrial background) */}
      <section
        id="overview"
        className="relative min-h-[85vh] flex flex-col justify-center bg-[#050816] text-white overflow-hidden pt-12 pb-16"
      >
        {/* Background Image & Texture Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,8,22,.97) 0%, rgba(5,8,22,.88) 45%, rgba(5,8,22,.50) 100%)',
          }}
        />
        {/* Faint Dot Grid Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255, 106, 0, 0.4) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-10">
          {/* Breadcrumb */}
          <div>
            <Breadcrumbs
              dark={true}
              items={[
                { label: 'Products', path: '/products' },
                { label: 'Hardware', path: '/hardware' },
                { label: 'Specifications' },
              ]}
              onNavigate={onNavigate}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span>HARDWARE SPECIFICATIONS</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Industrial Edge Hardware, Built for the{' '}
                <span className="text-orange-500 underline decoration-orange-500/40 decoration-4 underline-offset-6">
                  Plant Floor
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Plug-in edge nodes and controllers that connect your existing equipment, with{' '}
                <strong className="text-white font-semibold">no panel rewiring</strong> and{' '}
                <strong className="text-white font-semibold">no cloud dependency</strong>.
              </p>

              {/* Action Buttons: 1 Orange + 1 Outline (Strict 1 Primary Rule) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="/assets/aistudio/Emertech_Brochure_881bad62.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg shadow-orange-600/30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Datasheet (PDF)</span>
                </a>

                <button
                  type="button"
                  onClick={() => openQuoteForProduct('DCN Edge Node (DCN-4R-W-24V)')}
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-600 hover:border-orange-500 text-white hover:text-orange-400 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Quick Specs Pill Row */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">Quick Specs:</span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                  ESP32 240MHz
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                  32 Modbus Nodes
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                  48h Offline Buffer
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                  24V DC / &lt;5W
                </span>
              </div>
            </div>

            {/* Right Hero Visual (5 Cols) with Floating DCN render & 3 Glass Chips */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Subtle orange backlight glow */}
              <div className="absolute w-72 h-72 bg-orange-600/25 rounded-full blur-2xl pointer-events-none" />

              {/* Floating Hardware Image container with 6s CSS float */}
              <div className="relative z-10 w-full max-w-md animate-[float_6s_ease-in-out_infinite]">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-md">
                  <img
                    src="/assets/aistudio/image_d6d2a19a.png"
                    alt="Emertech DCN Edge Node Industrial Hardware"
                    className="w-full h-auto object-cover rounded-xl shadow-inner brightness-95 contrast-105"
                  />
                  {/* Subtle edge highlight */}
                  <div className="absolute inset-0 rounded-2xl border border-orange-500/20 pointer-events-none" />
                </div>

                {/* 3 Glassmorphism Feature Chips */}
                {/* Chip 1: Top-Left */}
                <div className="absolute -top-3 -left-3 sm:-left-6 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl px-3.5 py-2 shadow-lg flex items-center space-x-2 text-xs text-white">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono font-semibold">RS485 Modbus RTU</span>
                </div>

                {/* Chip 2: Bottom-Left */}
                <div className="absolute -bottom-3 -left-2 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl px-3.5 py-2 shadow-lg flex items-center space-x-2 text-xs text-white">
                  <Database className="w-3.5 h-3.5 text-orange-400" />
                  <span className="font-mono font-semibold">100% Offline-Capable</span>
                </div>

                {/* Chip 3: Right Side */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl px-3.5 py-2 shadow-lg flex items-center space-x-2 text-xs text-white">
                  <Layers className="w-3.5 h-3.5 text-orange-400" />
                  <span className="font-mono font-semibold">35mm DIN-Rail</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Bottom 4 Glass Stat Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                COMMUNICATION INTERFACES
              </span>
              <div className="text-sm font-bold text-white font-mono flex items-center">
                <span>RS485 Modbus RTU · Wi-Fi</span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                Ethernet RJ45 option <span className="text-orange-400 font-mono text-[9px] bg-orange-950/80 px-1 rounded">TBC</span>
              </span>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                OPERATING TEMPERATURE
              </span>
              <div className="text-sm font-bold text-orange-400 font-mono">
                0°C to +60°C
              </div>
              <span className="text-[11px] text-slate-400 block">Continuous plant floor rated</span>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                POWER INPUT
              </span>
              <div className="text-sm font-bold text-white font-mono">
                24V DC <span className="text-xs font-normal text-slate-400">(18–36V)</span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                100–240V AC option <span className="text-orange-400 font-mono text-[9px] bg-orange-950/80 px-1 rounded">TBC</span>
              </span>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                ENCLOSURE &amp; MOUNTING
              </span>
              <div className="text-sm font-bold text-white font-mono">
                35mm DIN-Rail / Wall
              </div>
              <span className="text-[11px] text-slate-400 block">Flame-retardant industrial chassis</span>
            </div>
          </div>

          {/* Trust Row */}
          <div className="text-center sm:text-left text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-orange-400 font-semibold">Made in Vadodara</span>
              <span>·</span>
              <span>Plant-Ready</span>
              <span>·</span>
              <span>100% Offline Local Engine</span>
              <span>·</span>
              <span>Audit-Ready QA Exports</span>
            </div>
            <button
              type="button"
              onClick={() => setCompareModalOpen(true)}
              className="text-xs font-mono text-orange-400 hover:text-orange-300 underline underline-offset-4 flex items-center"
            >
              <Scale className="w-3.5 h-3.5 mr-1" />
              <span>Compare Hardware Models →</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAV (Scroll-Spy) */}
      <nav
        className={`sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 ${
          isSubNavSticky ? 'shadow-sm' : ''
        }`}
        aria-label="Hardware page sections"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-4">
            {/* Horizontal Scrollable Chips on Mobile, Clean row on Desktop */}
            <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar py-2 text-xs font-semibold">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'key-specs', label: 'Key Specs' },
                { id: 'spec-table', label: 'Datasheet' },
                { id: 'architecture', label: 'Architecture' },
                { id: 'compatibility', label: 'Compatibility' },
                { id: 'software-pairing', label: 'Software' },
                { id: 'ordering', label: 'Ordering' },
                { id: 'downloads', label: 'Downloads' },
                { id: 'faq', label: 'FAQ' },
              ].map((tab) => {
                const isActive = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => scrollToSection(tab.id)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors relative cursor-pointer ${
                      isActive
                        ? 'text-orange-600 font-bold bg-orange-50/80'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-orange-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Persistent Compact Request Quote Button */}
            <div className="shrink-0 flex items-center space-x-2">
              <button
                type="button"
                onClick={() => openQuoteForProduct(`${activeProduct.name} (${activeProduct.modelCode})`)}
                className="inline-flex items-center justify-center px-3.5 py-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs"
              >
                <span>Request Quote</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. PRODUCT SWITCHER (Segmented control) */}
      <section className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 bg-white rounded-2xl border border-slate-200 shadow-xs">
          {/* Segmented Buttons */}
          <div className="flex items-center space-x-1.5 p-1 bg-slate-100 rounded-xl w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleProductSwitch('dcn')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedProductKey === 'dcn'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              DCN Edge Node
            </button>
            <button
              type="button"
              onClick={() => handleProductSwitch('heat-controller')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedProductKey === 'heat-controller'
                  ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Heat Controller
            </button>
            <button
              type="button"
              onClick={() => {
                handleProductSwitch('all');
                setCompareModalOpen(true);
              }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedProductKey === 'all'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Hardware (Compare)
            </button>
          </div>

          {/* Model Code & Action */}
          <div className="flex items-center justify-between sm:justify-end space-x-3 px-2 text-xs">
            <span className="text-slate-500">Active Model:</span>
            <span className="font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              {activeProduct.modelCode}
            </span>
            <button
              type="button"
              onClick={() => setCompareModalOpen(true)}
              className="text-xs font-semibold text-slate-700 hover:text-orange-600 flex items-center ml-2"
            >
              <Scale className="w-3.5 h-3.5 mr-1" />
              <span>Side-by-side</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. KEY SPECS GRID ("5-second scan") */}
      <section id="key-specs" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
            5-SECOND ENGINEERING SCAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Specifications · {activeProduct.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            {activeProduct.shortDescription}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {activeProduct.keySpecs.map((spec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-orange-500 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-3 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {idx === 0 && <Cpu className="w-5 h-5" />}
                {idx === 1 && <Network className="w-5 h-5" />}
                {idx === 2 && <Wifi className="w-5 h-5" />}
                {idx === 3 && <Database className="w-5 h-5" />}
                {idx === 4 && <Zap className="w-5 h-5" />}
                {idx === 5 && <Thermometer className="w-5 h-5" />}
                {idx === 6 && <Layers className="w-5 h-5" />}
                {idx === 7 && <Lock className="w-5 h-5" />}
              </div>

              <div className="font-mono text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                {spec.value}
              </div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">
                {spec.label}
              </div>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                {spec.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FULL SPECIFICATION TABLE (Core Datasheet) */}
      <section id="spec-table" className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
                ENGINEERING DATASHEET
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Full Technical Specifications
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Verified hardware parameters for <strong className="text-slate-900">{activeProduct.name}</strong> ({activeProduct.modelCode}). Unconfirmed parameters marked with orange <span className="font-mono text-orange-600 bg-orange-100 px-1 py-0.5 rounded text-[10px]">TBC</span>.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                type="button"
                onClick={() => handleExpandAllSpecs(true)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={() => handleExpandAllSpecs(false)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
              >
                Collapse All
              </button>
              <a
                href="/assets/aistudio/Emertech_Brochure_881bad62.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-orange-600 hover:text-orange-500 flex items-center pl-2"
              >
                <span>Full Spec PDF →</span>
              </a>
            </div>
          </div>

          {/* Accordion Specification Groups */}
          <div className="space-y-4">
            {activeProduct.specGroups.map((group) => {
              const isOpen = !!openSpecGroups[group.id];
              const isCopied = copiedGroupId === group.id;

              return (
                <div
                  key={group.id}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs"
                >
                  {/* Group Header Button */}
                  <div className="flex items-center justify-between p-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleSpecGroup(group.id)}
                      className="flex-1 flex items-center space-x-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                        {group.id === 'electrical' && <Zap className="w-4 h-4" />}
                        {group.id === 'communication' && <Network className="w-4 h-4" />}
                        {group.id === 'io' && <Sliders className="w-4 h-4" />}
                        {group.id === 'processing' && <Cpu className="w-4 h-4" />}
                        {group.id === 'mechanical' && <Box className="w-4 h-4" />}
                        {group.id === 'environmental' && <Thermometer className="w-4 h-4" />}
                        {group.id === 'compliance' && <Award className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {group.title}
                        </h3>
                        <span className="text-[11px] text-slate-500">
                          {group.items.length} engineering parameters
                        </span>
                      </div>
                    </button>

                    <div className="flex items-center space-x-2">
                      {/* Copy Group Data Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyGroup(group.id, group.title, group.items);
                        }}
                        className="inline-flex items-center text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                        title="Copy section data for procurement"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500 mr-1" />
                            <span className="text-emerald-600">Copied ✓</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-400 mr-1" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      {/* Expand/Collapse Toggle */}
                      <button
                        type="button"
                        onClick={() => toggleSpecGroup(group.id)}
                        className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 flex items-center justify-center"
                        aria-label={isOpen ? 'Collapse section' : 'Expand section'}
                      >
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Group Table Content */}
                  {isOpen && (
                    <div className="divide-y divide-slate-100 border-t border-slate-200 text-xs">
                      {group.items.map((item, rowIdx) => (
                        <div
                          key={item.name}
                          className={`grid grid-cols-12 p-3 sm:p-4 items-center gap-2 ${
                            rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                          }`}
                        >
                          {/* Parameter Name */}
                          <div className="col-span-12 sm:col-span-4 font-semibold text-slate-800">
                            {item.name}
                          </div>

                          {/* Value in Monospace font */}
                          <div className="col-span-12 sm:col-span-5 font-mono font-bold text-slate-900 flex items-center flex-wrap gap-2">
                            <span>{item.value}</span>
                            {item.isTbc && (
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 border border-orange-200">
                                TBC
                              </span>
                            )}
                          </div>

                          {/* Notes / Conditions */}
                          <div className="col-span-12 sm:col-span-3 text-[11px] text-slate-500">
                            {item.notes || '—'}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CONNECTIVITY & SYSTEM ARCHITECTURE DIAGRAM */}
      <section id="architecture" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ConnectivityDiagram />
      </section>

      {/* 7. COMPATIBILITY MATRIX */}
      <section id="compatibility" className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
                INTEROPERABILITY &amp; INTEGRATION MATRIX
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Equipment &amp; Protocol Compatibility
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Tested and verified shop-floor instruments, PID controllers, and energy meters supported out-of-the-box.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={compatQuery}
                onChange={(e) => setCompatQuery(e.target.value)}
                placeholder="Search controller model..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Compatibility Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-200 text-xs">
            {/* Table Header */}
            <div className="grid grid-cols-12 p-3.5 bg-slate-100 font-bold text-slate-700 uppercase tracking-wider text-[11px]">
              <div className="col-span-12 sm:col-span-3">Device Category</div>
              <div className="col-span-12 sm:col-span-4">Tested Models &amp; Hardware</div>
              <div className="col-span-12 sm:col-span-3">Bus Protocol</div>
              <div className="col-span-12 sm:col-span-2 text-right">Support Status</div>
            </div>

            {filteredDevices.length > 0 ? (
              filteredDevices.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-4 items-center gap-2 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                  }`}
                >
                  <div className="col-span-12 sm:col-span-3 font-bold text-slate-900">
                    {item.deviceType}
                  </div>
                  <div className="col-span-12 sm:col-span-4 space-y-1">
                    <span className="font-mono text-slate-800 font-medium">{item.testedModels}</span>
                    <p className="text-[11px] text-slate-500 leading-snug">{item.notes}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-3 font-mono text-slate-600">
                    {item.protocol}
                  </div>
                  <div className="col-span-12 sm:col-span-2 sm:text-right">
                    {item.status === 'Verified' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <Check className="w-3 h-3 mr-1 text-emerald-600" />
                        Verified
                      </span>
                    )}
                    {item.status === 'Supported on request' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        On Request
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center space-y-2">
                <p className="text-xs text-slate-500">
                  No devices matched "{compatQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => openQuoteForProduct('DCN Edge Node', compatQuery)}
                  className="text-xs font-bold text-orange-600 hover:text-orange-500 underline"
                >
                  Ask our engineering team to verify "{compatQuery}" →
                </button>
              </div>
            )}
          </div>

          {/* Ask Engineer Trigger */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center space-x-2 text-slate-700">
              <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
              <span>
                Don't see your specific PID controller or energy meter listed?
              </span>
            </div>
            <button
              type="button"
              onClick={() => openQuoteForProduct('DCN Edge Node', 'Custom Controller Inquiry')}
              className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Ask Our Engineers About Your Device
            </button>
          </div>
        </div>
      </section>

      {/* 8. SOFTWARE PAIRING */}
      <section id="software-pairing" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
            INTEGRATED SOFTWARE SUITE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Designed to Run Seamlessly with Emertech Software
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Emertech edge nodes are plug-and-play with our full suite of local industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pairedSoftware.map((soft) => (
            <a
              key={soft.slug}
              href={soft.route}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(soft.route);
              }}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-orange-500 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {getSoftwareIcon(soft.slug, 'w-4 h-4')}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {soft.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    {soft.purpose}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-3">
                  {soft.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-orange-600 font-semibold">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 9. ORDERING & MODEL CODES */}
      <section id="ordering" className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ModelCodeBuilder
            onRequestQuoteWithCode={(code) =>
              openQuoteForProduct(`Configured Code: ${code}`)
            }
          />
        </div>
      </section>

      {/* 10. DOWNLOADS & RESOURCES */}
      <section id="downloads" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
            TECHNICAL DOCUMENTATION &amp; SCHEMATICS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Downloads &amp; Engineering Resources
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Access genuine datasheets, wiring diagrams, register maps, and dimensional drawings.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs divide-y divide-slate-100 text-xs">
          {HARDWARE_DOWNLOADS.map((doc) => (
            <div
              key={doc.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      {doc.title}
                    </h3>
                    <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.fileFormat} · {doc.fileSize}
                    </span>
                    {doc.status === 'tbc' && (
                      <span className="font-mono text-[10px] font-bold text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded">
                        TBC
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {doc.subtitle}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center space-x-2">
                {doc.status === 'available' && doc.url ? (
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    <span>Download PDF</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      openQuoteForProduct(
                        'Documentation Request',
                        `Requested document: ${doc.title}`
                      )
                    }
                    className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-semibold rounded-lg transition-colors"
                  >
                    <span>Request File →</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section id="faq" className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block">
              PRACTICAL SHOP-FLOOR CLARIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear engineering answers for plant managers, maintenance heads, and procurement teams.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            {HARDWARE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      {faq.badge && (
                        <span className="text-[10px] font-mono uppercase font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded shrink-0">
                          {faq.badge}
                        </span>
                      )}
                      <span className="text-sm font-bold text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-slate-400 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-orange-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA BAND (Dark navy-950) */}
      <section className="bg-[#050816] text-white py-16 sm:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span>ENGINEERING TEAM IN VADODARA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Need help choosing the right hardware for your plant?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Talk directly with the engineers who design and build it in Vadodara. We review your controller pinouts, estimate cable runs, and provide turnkey quotes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openQuoteForProduct('Hardware Consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg shadow-orange-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <span>Request Quotation / Technical Discussion</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <a
              href="tel:+918320845947"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white bg-slate-900/60 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-orange-500" />
              <span>Call +91-8320845947</span>
            </a>

            <a
              href="mailto:emertechelectronics@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white bg-slate-900/60 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4 mr-2 text-orange-500" />
              <span>Email Engineering</span>
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>Vadodara, Gujarat, India · Response within 1 business day</span>
          </div>
        </div>
      </section>

      {/* Floating Bottom Comparison Drawer Bar */}
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40">
        <div className="bg-[#0A1128] text-white border border-slate-700 rounded-xl px-4 py-2.5 shadow-2xl flex items-center space-x-3 text-xs">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="font-medium text-slate-300">Compare Hardware Models</span>
          <button
            type="button"
            onClick={() => setCompareModalOpen(true)}
            className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            Compare (2)
          </button>
        </div>
      </div>

      {/* Interactive Slide-Over Quote Drawer */}
      <QuoteDrawer
        isOpen={quoteDrawerOpen}
        onClose={() => setQuoteDrawerOpen(false)}
        initialProduct={quoteInitialProduct}
        initialDeviceNotes={quoteInitialDevice}
      />

      {/* Side-by-Side Comparison Modal */}
      <CompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        onRequestQuote={(productName) => openQuoteForProduct(productName)}
      />
    </div>
  );
}
