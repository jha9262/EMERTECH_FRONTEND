export interface IndustrialService {
  id: string;
  title: string;
  tagline: string;
  category: 'Engineering' | 'Integration' | 'Deployment' | 'Support';
  shortDescription: string;
  overview: string;
  deliverables: string[];
  keyBenefits: string[];
  scopeSteps: { step: string; title: string; detail: string }[];
  targetAudience: string;
}

export const VERIFIED_SERVICES: IndustrialService[] = [
  {
    id: 'consultation-architecture',
    title: 'Technical Consultation & Architecture Review',
    tagline: 'Field-tested feasibility and instrumentation sizing before commitment',
    category: 'Engineering',
    shortDescription: 'Comprehensive site assessment of existing control panels, heating zones, sensor lines, and networking topology.',
    overview: 'Our engineering team reviews your plant floor layout, electrical control cabinets, heating element zones, and network constraints. We establish a verified bill of materials, determine whether RS-485 Modbus RTU or TCP is optimal, and verify electrical safety boundaries before you commit to hardware procurement.',
    deliverables: [
      'Site instrumentation & loop topology audit report',
      'Recommended edge node (DCN) distribution map',
      'Power supply and RS-485 termination impedance calculations',
      'Local server (SBC) hardware sizing recommendations'
    ],
    keyBenefits: [
      'Eliminates over-engineering and costly hardware mismatches',
      'Identifies potential signal noise or ground loop issues before installation',
      'Guarantees 100% offline local operating capability'
    ],
    scopeSteps: [
      { step: '01', title: 'Telemetry Audit', detail: 'Evaluate existing sensors, PID controllers, and power relays.' },
      { step: '02', title: 'Topology Mapping', detail: 'Draft RS-485 daisy chain routes and calculate maximum cable runs.' },
      { step: '03', title: 'Architecture Proposal', detail: 'Deliver verified hardware schematic, SBC host specs, and bill of materials.' }
    ],
    targetAudience: 'Plant engineering managers, automation leads, and OEM equipment retrofitting teams.'
  },
  {
    id: 'pid-interfacing',
    title: 'Plant Floor PID Interfacing & Compatibility Check',
    tagline: 'Zero-downtime integration without altering existing panel wiring',
    category: 'Integration',
    shortDescription: 'Seamless polling of existing Autonics, Selec, or standard Modbus temperature controllers over non-intrusive RS-485 loops.',
    overview: 'Industrial production lines cannot afford weeks of panel rewiring or PLC reprogramming. Emertech specializes in non-intrusive hardware interfacing: our Data Collector Nodes (DCN) interface with existing Autonics and third-party PID controllers over standard Modbus RTU, reading temperature probes and current sensor data in parallel without disturbing existing safety interlocks.',
    deliverables: [
      'Controller address mapping table & register configuration',
      'Non-intrusive parallel signal tap-in verification',
      'Cycle time benchmarking (1-second multi-zone loop polling test)',
      'Signal isolation check to prevent common-mode noise'
    ],
    keyBenefits: [
      'Zero rewiring of existing heater relay or contactor panels',
      'Leaves certified safety relays and emergency stops intact',
      'Preserves OEM warranty on existing heating blankets and moulds'
    ],
    scopeSteps: [
      { step: '01', title: 'Register Mapping', detail: 'Catalog Modbus slave addresses, baud rates, and register layouts.' },
      { step: '02', title: 'Loop Wiring & Termination', detail: 'Connect twisted-pair RS-485 with matched 120Ω line terminations.' },
      { step: '03', title: 'Polling Verification', detail: 'Validate 1000ms loop latency and 0% packet drop across all controller zones.' }
    ],
    targetAudience: 'Operations directors, composite mould operators, and thermal process engineers.'
  },
  {
    id: 'gateway-telemetry',
    title: 'Custom Telemetry & Communication Gateway Integration',
    tagline: 'Resilient industrial communication across electrically noisy environments',
    category: 'Integration',
    shortDescription: 'Hardened communication routing spanning RS-485, industrial Ethernet, isolated serial converters, and local Wi-Fi.',
    overview: 'High-power industrial equipment (thyristor drives, heating elements, contactors) generates intense electromagnetic interference. Emertech provides engineering support for galvanic signal isolation, shielded twisted-pair cabling schemes, optical converters, and local Wi-Fi access point setups to ensure rock-solid data streaming.',
    deliverables: [
      'Galvanically isolated USB-to-RS485 interface integration',
      'Local industrial Wi-Fi access point configuration for tablet/operator HMI',
      'Network segmentation guide separating machine telemetry from corporate LAN',
      'Electromagnetic shielding and earthing compliance check'
    ],
    keyBenefits: [
      'Immunity against voltage transients and inductive switching spikes',
      'Local tablet access for roaming operators without internet dependence',
      'Complete air-gap isolation for plants with strict cybersecurity policies'
    ],
    scopeSteps: [
      { step: '01', title: 'Noise Profile Check', detail: 'Measure ground potential differences across plant zones.' },
      { step: '02', title: 'Gateway Deployment', detail: 'Install isolated interfaces and configure local subnet routers.' },
      { step: '03', title: 'Stress & Latency Testing', detail: 'Run 24-hour continuous packet transmission under full machine load.' }
    ],
    targetAudience: 'Industrial network engineers, IT/OT systems managers, and electrical maintenance teams.'
  },
  {
    id: 'pilot-deployment',
    title: 'On-Premises Pilot Evaluation & Deployment Support',
    tagline: 'Assisted commissioning of local SBC server, recipes, and QA compliance',
    category: 'Deployment',
    shortDescription: 'Turnkey on-site or guided pilot installation of the DCN hardware and Fluxora thermal software on local SBC hardware.',
    overview: 'We support your team through initial commissioning on a single mould or production cell. We configure the rugged Linux single-board computer, install the Fluxora software platform, program multi-stage ramp-and-soak heating recipes, set current alarm limits, and calibrate automated PDF/Excel batch certificate outputs.',
    deliverables: [
      'Full Linux SBC environment installation and daemon configuration',
      'Pre-loaded standard operating procedure (SOP) recipe profiles',
      'Overcurrent threshold configuration and trip simulation test',
      'Automated shift-end PDF report generation with signature sign-off'
    ],
    keyBenefits: [
      'Rapid proof-of-value on your active production line within days',
      'Verified zero-cloud requirement: all data stays within your plant perimeter',
      'Standardized batch records accepted by QA and prime contractors'
    ],
    scopeSteps: [
      { step: '01', title: 'Host Staging', detail: 'Flash and harden Linux SBC with offline database and Fluxora core.' },
      { step: '02', title: 'Recipe Commissioning', detail: 'Enter thermal curves, tolerance bands, and operator access roles.' },
      { step: '03', title: 'Batch Trial Run', detail: 'Execute full production cure cycle and generate compliance certificate.' }
    ],
    targetAudience: 'Quality assurance managers, manufacturing engineers, and production line heads.'
  },
  {
    id: 'training-onboarding',
    title: 'Operator & Quality Team Training',
    tagline: 'Empowering plant staff to operate, calibrate, and verify with confidence',
    category: 'Support',
    shortDescription: 'Structured hands-on training for line operators, shift leads, and quality audit inspectors.',
    overview: 'New technology succeeds only when shop floor operators understand and trust it. Emertech conducts hands-on training covering digital recipe selection, real-time temperature zone monitoring, handling alarm deviations, and retrieving tamper-resistant PDF audit records for client inspections.',
    deliverables: [
      'Illustrated operator quick-reference guide (laminated for shop floor)',
      'Supervisor recipe authorization and change management procedure',
      'Alarm acknowledgement & corrective action playbook',
      'Quality auditor compliance extraction training'
    ],
    keyBenefits: [
      'Reduces operator entry errors and eliminates unauthorized recipe modifications',
      'Faster response time to localized heater overcurrent or thermocouple faults',
      'Smoother customer audits with instant digital batch traceability'
    ],
    scopeSteps: [
      { step: '01', title: 'Operator Walkthrough', detail: 'Review daily startup, batch selection, and live dashboard monitoring.' },
      { step: '02', title: 'Scenario Drills', detail: 'Simulate zone alarm triggers, sensor disconnects, and power recovery.' },
      { step: '03', title: 'Handover Certification', detail: 'Provide laminated cheat-sheets and digital documentation package.' }
    ],
    targetAudience: 'Shop floor supervisors, line technicians, and quality compliance inspectors.'
  }
];
