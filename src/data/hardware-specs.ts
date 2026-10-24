export interface HardwareSpecItem {
  name: string;
  value: string;
  isTbc?: boolean;
  notes?: string;
}

export interface HardwareSpecGroup {
  id: string;
  title: string;
  iconName: string;
  items: HardwareSpecItem[];
}

export interface HardwareProduct {
  id: 'dcn' | 'heat-controller';
  name: string;
  modelCode: string;
  tagline: string;
  shortDescription: string;
  category: string;
  formFactor: string;
  bestFor: string;
  coreMcu: string;
  keySpecs: {
    icon: string;
    value: string;
    label: string;
    detail: string;
  }[];
  specGroups: HardwareSpecGroup[];
}

export const HARDWARE_PRODUCTS_DATA: Record<'dcn' | 'heat-controller', HardwareProduct> = {
  dcn: {
    id: 'dcn',
    name: 'DCN Edge Node',
    modelCode: 'DCN-4R-W-24V',
    tagline: 'Multi-Drop Industrial RS485 Edge Data Collector',
    shortDescription: 'Industrial edge gateway that polls shop-floor PID controllers and energy meters over RS485 Modbus RTU, caching telemetry and streaming securely to on-premises software without cloud dependency.',
    category: 'Edge Data Collector & Retrofit Gateway',
    formFactor: '35mm DIN-rail / Surface Flange Mount',
    bestFor: 'Retrofitting existing PID cabinets, multi-zone thermal monitoring, and energy meter logging',
    coreMcu: 'ESP32 Dual-Core Xtensa LX6 (240 MHz)',
    keySpecs: [
      {
        icon: 'Cpu',
        value: 'Dual-Core 240MHz',
        label: 'Compute Engine',
        detail: 'ESP32 32-bit Xtensa LX6 microprocessor',
      },
      {
        icon: 'Network',
        value: '32 Nodes',
        label: 'RS485 Daisy-Chain',
        detail: 'Multi-drop Modbus RTU bus capacity',
      },
      {
        icon: 'Wifi',
        value: '2.4 GHz + SMA',
        label: 'Industrial Wi-Fi',
        detail: 'High-gain external antenna extension',
      },
      {
        icon: 'Database',
        value: '48h Buffer',
        label: 'Offline Fallback',
        detail: 'Zero data loss during network dropouts',
      },
      {
        icon: 'Zap',
        value: '24V DC / <5W',
        label: 'Power Input',
        detail: 'Industrial 18–36V DC wide range',
      },
      {
        icon: 'ShieldCheck',
        value: '0–60°C',
        label: 'Operating Range',
        detail: 'Plant-floor industrial rating',
      },
      {
        icon: 'Layers',
        value: 'Zero Rewiring',
        label: 'Panel Retrofit',
        detail: 'Connects to existing PID terminals',
      },
      {
        icon: 'Lock',
        value: 'SOP Keypad Lock',
        label: 'Tamper Protection',
        detail: 'Enforces software recipe controls',
      },
    ],
    specGroups: [
      {
        id: 'electrical',
        title: 'Electrical & Power',
        iconName: 'Zap',
        items: [
          { name: 'Supply Voltage', value: '24V DC (18V – 36V DC range)', notes: 'Standard industrial panel supply' },
          { name: 'Power Consumption', value: '< 5 W (typical: 2.8 W)', notes: 'Energy-efficient continuous edge compute' },
          { name: 'Reverse Polarity Protection', value: 'Integrated hardware diode clamp', notes: 'Guards against wiring polarity reversal' },
          { name: 'Isolation Voltage', value: '1.5 kV RMS Galvanic Isolation', isTbc: true, notes: 'Field port isolation to prevent ground loops' },
          { name: 'Power Supply Option (AC)', value: '100–240V AC (50/60 Hz)', isTbc: true, notes: 'Optional integrated AC-DC converter variant' },
        ],
      },
      {
        id: 'communication',
        title: 'Communication & Protocols',
        iconName: 'Network',
        items: [
          { name: 'Fieldbus Interface', value: 'RS485 Half-Duplex (2-wire A/B)', notes: 'Screw terminal block, 120Ω termination' },
          { name: 'Protocol Support', value: 'Modbus RTU Master / Slave', notes: 'Configurable polling intervals 100ms–10s' },
          { name: 'Baud Rates', value: '9600, 19200, 38400, 57600, 115200 bps', notes: 'Software configurable parity (None, Even, Odd)' },
          { name: 'Maximum Multidrop Nodes', value: 'Up to 32 nodes per RS485 loop', notes: 'Daisy-chained topology' },
          { name: 'Wireless Communication', value: 'Wi-Fi 802.11 b/g/n (2.4 GHz)', notes: 'WPA2/WPA3 Enterprise security' },
          { name: 'Antenna Interface', value: 'Standard SMA Female connector', notes: 'Includes 3dBi external omnidirectional whip antenna' },
          { name: 'Wired Ethernet (Optional)', value: '10/100 Mbps RJ45 Base-T', isTbc: true, notes: 'Available on DCN-E model variant' },
        ],
      },
      {
        id: 'io',
        title: 'Inputs & Outputs',
        iconName: 'Sliders',
        items: [
          { name: 'Digital / Relay Outputs', value: 'Optional 2 or 4 Relay Channels', isTbc: true, notes: 'Available on DCN-4R configuration' },
          { name: 'Status Indicators', value: '4x Front-panel LEDs (Power, Run, RS485 Tx/Rx, Wi-Fi)', notes: 'Instant diagnostic feedback on plant floor' },
          { name: 'Configuration Port', value: 'USB Type-C / Internal Serial UART', notes: 'For technician diagnostics & firmware flashes' },
          { name: 'Keypad Lock Trigger', value: 'Digital SOP signal over RS485 bus', notes: 'Remotely disables Autonics front keypad' },
        ],
      },
      {
        id: 'processing',
        title: 'Processing & Local Storage',
        iconName: 'Cpu',
        items: [
          { name: 'Microprocessor', value: 'Espressif ESP32 Dual-Core Xtensa LX6', notes: 'Operating clock up to 240 MHz' },
          { name: 'Onboard Flash Memory', value: '16 MB SPI Flash', isTbc: true, notes: 'Stores firmware + configuration' },
          { name: 'Internal SRAM', value: '520 KB SRAM', notes: 'Ultra-low latency thread execution' },
          { name: 'Local Offline Buffer', value: 'Up to 48 hours continuous telemetry', notes: 'Non-volatile logging buffer during disconnects' },
          { name: 'Real-Time Clock (RTC)', value: 'Internal RTC with NTP sync', isTbc: true, notes: 'Microsecond precision batch timestamping' },
        ],
      },
      {
        id: 'mechanical',
        title: 'Mechanical & Enclosure',
        iconName: 'Box',
        items: [
          { name: 'Mounting Style', value: '35 mm DIN-rail (EN 50022) / Wall Flange', notes: 'Snap-on DIN latch mechanism' },
          { name: 'Enclosure Material', value: 'Flame-retardant ABS / Polycarbonate blend', notes: 'UL94 V-0 flame rating (TBC)' },
          { name: 'Dimensions (W x H x D)', value: '120 mm x 85 mm x 45 mm', isTbc: true, notes: 'Fits standard 150mm depth electrical cabinets' },
          { name: 'Weight', value: 'Approx. 280 g', isTbc: true, notes: 'Compact lightweight form factor' },
          { name: 'Terminal Blocks', value: 'Pluggable 3.81 mm / 5.08 mm screw terminals', notes: 'Fast field replacement without recabling' },
        ],
      },
      {
        id: 'environmental',
        title: 'Environmental & Reliability',
        iconName: 'Thermometer',
        items: [
          { name: 'Operating Temperature', value: '0°C to +60°C (32°F to 140°F)', notes: 'Tested for continuous plant operation' },
          { name: 'Storage Temperature', value: '-20°C to +70°C (-4°F to 158°F)', notes: 'Resistant to warehouse storage extremes' },
          { name: 'Operating Humidity', value: '10% to 90% RH (non-condensing)', notes: 'Suitable for composite curing environments' },
          { name: 'Ingress Protection', value: 'IP40 standard (IP65 enclosure available)', isTbc: true, notes: 'Dust protection for enclosed control panels' },
          { name: 'MTBF (Calculated)', value: '> 100,000 hours', isTbc: true, notes: 'Based on industrial grade component selection' },
        ],
      },
      {
        id: 'compliance',
        title: 'Certifications & Compliance',
        iconName: 'Award',
        items: [
          { name: 'CE Compliance', value: 'Engineered in accordance with CE directives', isTbc: true, notes: 'EMC 2014/30/EU & LVD 2014/35/EU' },
          { name: 'RoHS Status', value: 'Lead-free, RoHS 3 compliant materials', isTbc: true, notes: 'Directive 2015/863' },
          { name: 'Manufacturing Origin', value: 'Vadodara, Gujarat, India', notes: '100% indigenous engineering & assembly' },
          { name: 'Quality Standard', value: 'ISO 9001 aligned manufacturing procedures', isTbc: true, notes: 'Factory QA acceptance test on every unit' },
        ],
      },
    ],
  },
  'heat-controller': {
    id: 'heat-controller',
    name: 'Multi-Zone Heat Controller',
    modelCode: 'HC-4Z-230V-SOP',
    tagline: '4-Zone Isolated Blanket Heating & Overheat Protection Controller',
    shortDescription: 'Industrial closed-loop thermal regulation module engineered to power heating blankets and moulds. Features 4 heavy-duty relay outputs, continuous per-zone current draw monitoring, and instant hardware cut-off upon overheat or thermal runaway.',
    category: 'Multi-Zone Power & Thermal Safety Controller',
    formFactor: 'Internal Cabinet DIN-rail / Rugged Enclosure',
    bestFor: 'Wind turbine blade mould heating, composite curing tables, and multi-zone heating blankets',
    coreMcu: 'Dual-Core ESP32 + Hardware Watchdog',
    keySpecs: [
      {
        icon: 'Flame',
        value: '4 Isolated Zones',
        label: 'Heating Channels',
        detail: 'Independent multi-zone thermal loops',
      },
      {
        icon: 'Zap',
        value: '230V / 10A Each',
        label: 'Power Rating',
        detail: 'Heavy-duty relay contacts (40A total capacity)',
      },
      {
        icon: 'ShieldAlert',
        value: '< 50ms Trip',
        label: 'Overheat Cutoff',
        detail: 'Active blanket current & runaway protection',
      },
      {
        icon: 'Lock',
        value: 'Hardware Lock',
        label: 'SOP Protection',
        detail: 'Blocks unauthorized temperature manipulation',
      },
      {
        icon: 'Cpu',
        value: 'Dual-Core 240MHz',
        label: 'Control Engine',
        detail: 'Dedicated fail-safe watchdog timer',
      },
      {
        icon: 'Network',
        value: 'Modbus Slave',
        label: 'Bus Interconnect',
        detail: 'Streams current & duty cycle to DCN node',
      },
      {
        icon: 'Thermometer',
        value: '0–55°C',
        label: 'Operating Temp',
        detail: 'Heatsink-ventilated industrial chassis',
      },
      {
        icon: 'CheckCircle2',
        value: '100% Local',
        label: 'Offline Safety',
        detail: 'Local shutdown logic independent of network',
      },
    ],
    specGroups: [
      {
        id: 'electrical',
        title: 'Electrical & Power',
        iconName: 'Zap',
        items: [
          { name: 'Input Mains Voltage', value: '230V AC ± 10% (50/60 Hz)', notes: 'Single phase industrial supply' },
          { name: 'Relay Channels', value: '4x Heavy-duty mechanical / SSR relays', notes: 'Independent zone switching' },
          { name: 'Maximum Load Per Zone', value: '10 A at 230V AC (2.3 kW per zone)', notes: 'Sized for industrial heating blankets' },
          { name: 'Total Module Capacity', value: '40 A aggregate switching capacity', notes: 'Equipped with heavy copper bus tracks' },
          { name: 'Current Sensing Accuracy', value: '± 1.5% Full Scale', isTbc: true, notes: 'Hall-effect / shunt current monitoring' },
        ],
      },
      {
        id: 'communication',
        title: 'Communication & Protocols',
        iconName: 'Network',
        items: [
          { name: 'Upstream Bus', value: 'RS485 Modbus RTU Slave', notes: 'Connects directly to DCN or plant PLC' },
          { name: 'Reporting Interval', value: '500 ms per-zone telemetry', notes: 'Streams actual amps, duty cycle, and fault codes' },
          { name: 'Wireless Backup', value: 'Wi-Fi 802.11 b/g/n (2.4 GHz)', notes: 'Direct maintenance connection' },
          { name: 'Hardware Emergency Input', value: 'Dry-contact E-Stop loop', isTbc: true, notes: 'Instant mechanical power kill' },
        ],
      },
      {
        id: 'io',
        title: 'Inputs & Outputs',
        iconName: 'Sliders',
        items: [
          { name: 'Power Outputs', value: '4x Industrial screw terminal pairs (L/N/PE)', notes: 'Heavy gauge wire up to 4mm²' },
          { name: 'Current Sensor Inputs', value: '4x Internal integrated current transformers', notes: 'Non-invasive active current sensing' },
          { name: 'Audible / Visual Alarms', value: 'Piezo buzzer + Multi-color Zone Fault LEDs', notes: 'Instant shop-floor audible & visual alarm' },
          { name: 'External Relay Interlock', value: 'Form-C fault contact (NO/NC)', isTbc: true, notes: 'Can trip main upstream contactor' },
        ],
      },
      {
        id: 'processing',
        title: 'Processing & Local Storage',
        iconName: 'Cpu',
        items: [
          { name: 'Microprocessor', value: 'ESP32 Dual-Core + Hardware Watchdog', notes: 'Failsafe lockup recovery' },
          { name: 'Trip Decision Time', value: '< 50 ms upon thermal runaway', notes: 'Hardcoded firmware safety loop' },
          { name: 'Event History Buffer', value: 'Last 1,000 fault & trip records logged', notes: 'Stored in non-volatile EEPROM' },
        ],
      },
      {
        id: 'mechanical',
        title: 'Mechanical & Enclosure',
        iconName: 'Box',
        items: [
          { name: 'Mounting Style', value: '35 mm DIN-rail / Internal Panel Baseplate', notes: 'Rigid DIN clip with ground earthing' },
          { name: 'Chassis Material', value: 'Powder-coated mild steel / Extruded Aluminum heatsink', isTbc: true, notes: 'Efficient heat dissipation under load' },
          { name: 'Dimensions (W x H x D)', value: '180 mm x 120 mm x 75 mm', isTbc: true, notes: 'Generous terminal wiring space' },
          { name: 'Weight', value: 'Approx. 850 g', isTbc: true, notes: 'Robust industrial grade construction' },
        ],
      },
      {
        id: 'environmental',
        title: 'Environmental & Reliability',
        iconName: 'Thermometer',
        items: [
          { name: 'Operating Temperature', value: '0°C to +55°C (32°F to 131°F)', notes: 'Under continuous full 40A load' },
          { name: 'Storage Temperature', value: '-20°C to +70°C', notes: 'Rugged component tolerance' },
          { name: 'Operating Humidity', value: '10% to 90% non-condensing', notes: 'Industrial curing plant rated' },
          { name: 'Cooling Method', value: 'Natural convection with passive heatsink fins', notes: 'Fanless design eliminates filter clogging' },
        ],
      },
      {
        id: 'compliance',
        title: 'Certifications & Compliance',
        iconName: 'Award',
        items: [
          { name: 'Electrical Safety', value: 'Designed to IEC 61010-1 standards', isTbc: true, notes: 'Safety requirements for electrical equipment' },
          { name: 'Manufacturing Origin', value: 'Vadodara, Gujarat, India', notes: 'Engineered & assembled by Emertech' },
          { name: 'Factory QA Verification', value: '100% full-load burn-in tested for 4 hours', notes: 'Supplied with calibration test report' },
        ],
      },
    ],
  },
};

export interface CompatibleDevice {
  deviceType: string;
  testedModels: string;
  protocol: string;
  status: 'Verified' | 'Supported on request' | 'In Development';
  notes: string;
}

export const COMPATIBLE_DEVICES: CompatibleDevice[] = [
  {
    deviceType: 'PID Temperature Controllers',
    testedModels: 'Autonics TK4S, TX4S, TCN4, TC4S Series',
    protocol: 'RS485 Modbus RTU (9600–115200 bps)',
    status: 'Verified',
    notes: 'Full bidirectional support: remote setpoint, process temp polling, and SOP keypad lockout.',
  },
  {
    deviceType: 'Multi-Function Energy Meters',
    testedModels: 'Schneider Electric EM6400, EM6436, Conzerv Series',
    protocol: 'RS485 Modbus RTU',
    status: 'Verified',
    notes: 'Real-time 3-phase voltage, current, active power, and cumulative kWh monitoring.',
  },
  {
    deviceType: 'Digital Power Meters',
    testedModels: 'Selec MFM384, EM306, EM368-C',
    protocol: 'RS485 Modbus RTU',
    status: 'Verified',
    notes: 'Accurate energy consumption records linked to blade batch curing certificates.',
  },
  {
    deviceType: 'Industrial Heating Blankets',
    testedModels: 'Silicon Rubber & Heating Fabric Mats (230V / up to 10A/zone)',
    protocol: 'Direct Relay & Current Feedback',
    status: 'Verified',
    notes: 'Active blanket-level current monitoring with instant automatic thermal runaway trip.',
  },
  {
    deviceType: 'Industrial PLCs',
    testedModels: 'Siemens S7-1200 / S7-300 (via CM 1241 RS485 module)',
    protocol: 'Modbus RTU / Modbus TCP (TBC)',
    status: 'Supported on request',
    notes: 'Integration via pre-mapped Modbus holding registers. Contact our engineering team for sample DB blocks.',
  },
  {
    deviceType: 'Delta Industrial PLCs',
    testedModels: 'Delta DVP-14SS2, DVP-28SV2, AS Series',
    protocol: 'RS485 Modbus RTU (COM2/COM3)',
    status: 'Verified',
    notes: 'Native RS485 polling using standard MODRD/MODWR function registers.',
  },
  {
    deviceType: 'Precision Temperature Controllers',
    testedModels: 'Eurotherm 2000 & 3000 Series (2216e, 3216)',
    protocol: 'Modbus RTU / EI-Bisynch',
    status: 'Supported on request',
    notes: 'Custom register mapping supported through Fluxora software configuration in under 15 minutes.',
  },
  {
    deviceType: 'Analog Input Transmitters',
    testedModels: 'Standard 4-20mA & PT100 RTD Modbus Slave Modules',
    protocol: 'RS485 Modbus RTU',
    status: 'Verified',
    notes: 'Ambient temperature, humidity, and mould surface probe aggregation.',
  },
];

export interface ModelCodeSegment {
  code: string;
  name: string;
  description: string;
}

export const MODEL_CODE_OPTIONS = {
  family: [
    { code: 'DCN', name: 'Data Collector Node', description: 'Industrial RS485 Edge Gateway' },
    { code: 'HC', name: 'Heat Controller', description: '4-Zone Blanket Power & Safety Module' },
  ],
  relays: [
    { code: '0R', name: '0 Relays', description: 'Pure data logging & controller polling' },
    { code: '2R', name: '2 Relays', description: 'Dual auxiliary cutoff relays (230V/10A)' },
    { code: '4R', name: '4 Relays', description: 'Full 4-zone heavy-duty relay controls' },
  ],
  comm: [
    { code: 'W', name: 'Wi-Fi 2.4 GHz', description: 'Industrial Wi-Fi with external SMA antenna' },
    { code: 'E', name: 'Ethernet RJ45', description: '10/100 Mbps wired industrial Base-T (TBC)' },
    { code: 'WE', name: 'Dual Wi-Fi + Ethernet', description: 'Redundant dual network links' },
  ],
  power: [
    { code: '24V', name: '24V DC', description: 'Standard 18–36V DC industrial plant power' },
    { code: '230V', name: '100–240V AC', description: 'Universal mains power input' },
  ],
};

export interface DownloadItem {
  id: string;
  title: string;
  subtitle: string;
  fileFormat: string;
  fileSize: string;
  url?: string;
  status: 'available' | 'request' | 'tbc';
}

export const HARDWARE_DOWNLOADS: DownloadItem[] = [
  {
    id: 'datasheet',
    title: 'Emertech Hardware & Fluxora System Brochure',
    subtitle: 'Comprehensive technical datasheet, architecture diagrams, and application notes.',
    fileFormat: 'PDF',
    fileSize: '1.4 MB',
    url: '/assets/aistudio/Emertech_Brochure_881bad62.pdf',
    status: 'available',
  },
  {
    id: 'dimensions',
    title: 'DCN Edge Node 2D CAD & Enclosure Dimensions',
    subtitle: 'Mounting drill templates, 35mm DIN-rail clearance, and cable routing footprint.',
    fileFormat: 'PDF / DXF',
    fileSize: '420 KB',
    status: 'request',
  },
  {
    id: 'registers',
    title: 'Modbus Register Map & Protocol Specification v2.4',
    subtitle: 'Holding register addresses, function codes, baud rates, and error code definitions.',
    fileFormat: 'PDF',
    fileSize: '680 KB',
    status: 'request',
  },
  {
    id: 'wiring',
    title: 'Field Wiring & Panel Retrofit Manual',
    subtitle: 'Step-by-step connection guide for Autonics TK4S daisy-chains and 24V DC wiring.',
    fileFormat: 'PDF',
    fileSize: '1.1 MB',
    status: 'request',
  },
  {
    id: 'compliance-doc',
    title: 'CE & RoHS Declaration of Conformity',
    subtitle: 'Formal statement of compliance with applicable EU low voltage and EMC directives.',
    fileFormat: 'PDF',
    fileSize: '210 KB',
    status: 'tbc',
  },
];

export interface HardwareFaq {
  question: string;
  answer: string;
  badge?: string;
}

export const HARDWARE_FAQS: HardwareFaq[] = [
  {
    question: 'Do we need to rewire or replace our existing control panels?',
    answer: 'No. The DCN edge node connects non-intrusively to the existing RS485 communication terminals (A and B lines) on your current Autonics or compatible PID controllers. Your existing contactors, emergency stops, safety relays, and line wiring remain completely untouched with zero plant downtime.',
    badge: 'Retrofit',
  },
  {
    question: 'Does the hardware require an active internet connection to function?',
    answer: 'Absolutely not. Emertech hardware is designed for 100% on-premises offline industrial reliability. All temperature logging, SOP keypad locking, active overheat cutoff, and batch report generation run on the local edge node and on-site Single Board Computer (SBC). It operates uninterrupted even in completely air-gapped factories.',
    badge: 'Reliability',
  },
  {
    question: 'Which PID controllers and energy meters are supported out of the box?',
    answer: 'Autonics TK4S, TX4S, and TCN4 PID controllers are verified out of the box with automated SOP keypad locking. Multi-function power meters from Schneider (EM6400/EM6436) and Selec (MFM384/EM306) are pre-configured. Any standard Modbus RTU device can be mapped in under 15 minutes using our register configuration interface.',
    badge: 'Compatibility',
  },
  {
    question: 'How is the device mounted and powered inside our panels?',
    answer: 'The DCN edge node features an integrated industrial latch for standard 35mm DIN-rail (EN 50022) mounting, as well as wall screw flange holes. It is powered by 24V DC (18–36V DC range) drawing less than 5W, or via an optional universal 100–240V AC variant.',
    badge: 'Installation',
  },
  {
    question: 'What happens if the local Wi-Fi or factory LAN goes down during a batch?',
    answer: 'The DCN incorporates a standalone non-volatile Flash buffer that holds up to 48 hours of time-stamped heating data. The hardware continues polling and executing all safety trip thresholds locally. When the network reconnects, the device automatically syncs all buffered data to the local server with zero loss.',
    badge: 'Resilience',
  },
  {
    question: 'What is the warranty and technical support coverage?',
    answer: 'Emertech provides a 1-year standard replacement warranty (TBC) covering all manufacturing defects. Support is provided directly by our hardware and firmware engineering team based in Vadodara, Gujarat via phone and email. On-site commissioning and custom firmware adaptations are available.',
    badge: 'Support',
  },
  {
    question: 'Can you customize the firmware or protocol for proprietary factory machinery?',
    answer: 'Yes. Because all embedded firmware and electronics are designed and assembled in-house by Emertech Electronics in Vadodara, we can develop custom protocol drivers, specific baud rates, or custom digital I/O behaviors tailored to your plant machinery.',
    badge: 'Customization',
  },
];
