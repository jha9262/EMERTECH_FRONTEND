export interface SpecificationItem {
  label: string;
  value: string;
  isPlaceholder?: boolean;
  notes?: string;
}

export interface SpecificationSection {
  title: string;
  items: SpecificationItem[];
}

export interface ProductFamily {
  name: string;
  slug: string;
  category: string;
  badge?: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  brochureUrl?: string;
  brochureLabel?: string;
  publicationStatus: 'published' | 'development' | 'archived';
  specificationsNotice?: string;
  heroHighlights: string[];
  features: {
    title: string;
    description: string;
    brochureReference?: string;
  }[];
  specifications: SpecificationSection[];
  applications: {
    title: string;
    description: string;
    industry: string;
  }[];
  architecturePoints?: {
    step: string;
    title: string;
    details: string;
  }[];
  shopFloorComparison?: {
    problem: string;
    todayIssue: string;
    emertechSolution: string;
  }[];
}

export const DCN_HEAT_CONTROLLER: ProductFamily = {
  name: "DCN & Heat Controller",
  slug: "dcn-heat-controller",
  category: "Industrial IoT & Process Automation",
  badge: "Industrial Hardware",
  tagline: "Industrial IoT Blade Heating Monitoring & Control System",
  shortDescription: "An industrial data collection and heating-control system designed for supported blade-heating applications.",
  longDescription: "The Emertech DCN & Heat Controller is an industrial monitoring and automation solution engineered specifically for wind turbine blade heating moulds and precision composite thermal processing. It seamlessly connects shop-floor PID temperature controllers to a localized industrial edge infrastructure—delivering real-time multi-zone temperature tracking, standard operating procedure (SOP) locked profiles, automated overheat current protection, and audit-ready batch inspection certificates without rewiring existing PID panels.",
  brochureUrl: "/assets/aistudio/Emertech_Brochure_881bad62.pdf",
  brochureLabel: "Download Fluxora Technical Brochure (PDF)",
  publicationStatus: "published",
  specificationsNotice: "All technical parameters and functional claims are grounded in verified engineering documentation for the Emertech DCN and Local SBC Server platform.",
  heroHighlights: [
    "Zero PID panel rewiring: connects to existing Autonics TK4S & compatible Modbus RTU panels",
    "SOP-locked keypad execution prevents unauthorized floor parameter adjustments",
    "Active blanket-level current monitoring halts heating and alerts supervisors upon abnormal draw",
    "Rugged Single Board Computer (SBC) local engine operates 100% offline without cloud latency"
  ],
  features: [
    {
      title: "Zero PID Panel Rewiring Retrofit",
      description: "Integrates with existing Autonics TK4S and compatible temperature controllers via RS485 Modbus RTU daisy-chain, preserving existing factory control cabinets without downtime.",
      brochureReference: "Page 3: Smart Retrofit — Keep your existing PID panels"
    },
    {
      title: "SOP-Locked Recipe Control",
      description: "Once a heating recipe is initiated from the central supervisory dashboard, physical PID keypads are automatically locked to eliminate unauthorized setpoint modifications.",
      brochureReference: "Page 2, 7: SOP-Locked Profiles"
    },
    {
      title: "Active Blanket-Level Overheat Protection",
      description: "Continuously tracks electrical current to each individual heating blanket; immediately halts heating and triggers software alerts if abnormal current or thermal runaway is detected.",
      brochureReference: "Page 2, 8: Overheat Monitoring & Protection"
    },
    {
      title: "Data Collector Node (DCN) Edge Hardware",
      description: "Rugged plant-ready edge node built on the ESP32 microcontroller. Connects multiple PID controllers via looped RS485 Modbus RTU, featuring encrypted wireless data, external high-gain antenna, and standalone local buffer storage.",
      brochureReference: "Page 4, 5: Data Collector Node"
    },
    {
      title: "Local Server (SBC) Offline Engine",
      description: "Rugged Single Board Computer server operating completely on-premises. Hosts local database, manages DCN authentication and SSL/TLS encryption keys, ensuring 100% operation even if wider enterprise networks fail.",
      brochureReference: "Page 4, 6: Local Server (SBC)"
    },
    {
      title: "Operator-Linked Batch Traceability",
      description: "Every heating cycle logs operator identity, blanket serial, start/end timestamps, peak temperatures, soak durations, energy (kWh), and thermal curves into indelible records.",
      brochureReference: "Page 7, 8: Software & Traceability"
    },
    {
      title: "Automated Report Export",
      description: "Generate compliant quality inspection reports in PDF and Microsoft Excel format for QA records, customer audits, and certification bodies at any time.",
      brochureReference: "Page 8: Batch Report PDF/Excel"
    }
  ],
  specifications: [
    {
      title: "Edge Hardware (Data Collector Node - DCN)",
      items: [
        { label: "Core Processing Unit", value: "ESP32 Microcontroller", notes: "Per manufacturer documentation" },
        { label: "Industrial Bus Protocols", value: "Modbus RTU over RS485, looped daisy-chain architecture", notes: "Optional PROFIBUS support" },
        { label: "Network Connectivity", value: "Industrial Wi-Fi (2.4 GHz) with external high-gain antenna", notes: "CAT 5+ Ethernet access point extension" },
        { label: "Data Security", value: "Encrypted wireless transmission & authenticated device handshakes", notes: "Per manufacturer documentation" },
        { label: "Offline Resilience", value: "Standalone backup buffer & onboard data storage", notes: "Retains data during network dropouts" },
        { label: "Device Enclosure", value: "Rugged industrial weather-resistant sealed enclosure with external antennas", notes: "Plant-ready construction" }
      ]
    },
    {
      title: "Central Controller (Local Server / SBC)",
      items: [
        { label: "Hardware Class", value: "Industrial rugged Single Board Computer (SBC)", notes: "Fanless metal chassis with heatsink fins" },
        { label: "Software Stack", value: "Local application engine & database server", notes: "On-premises deployment" },
        { label: "Security & Keys", value: "SSL/TLS certificates, encrypted communication, role-based user management", notes: "Per manufacturer documentation" },
        { label: "Operation Mode", value: "100% On-premises offline capable with auto-reconnection", notes: "No external cloud dependency required" },
        { label: "Client Access", value: "Web-based responsive UI accessible via Desktop (Office), Laptop (Maintenance), and Mobile (Shop Floor)", notes: "LAN access" }
      ]
    },
    {
      title: "Monitoring, Protection & Reporting",
      items: [
        { label: "Sensor & Controller Interfacing", value: "Existing plant PID temperature controllers (Autonics TK4S and compatible)", notes: "No replacement of existing PID panels needed" },
        { label: "Safety Controls", value: "Blanket-level current monitoring, auto shutdown on overcurrent/fault, audible/visual software alarms", notes: "Active safety shutdown" },
        { label: "Profile Enforcement", value: "SOP-locked keypad prevents unauthorized manual temperature override", notes: "Factory SOP compliance" },
        { label: "Data Export Formats", value: "Microsoft Excel (.xlsx) and Adobe PDF (.pdf) batch reports", notes: "Includes temperature curve graphs & zone metrics" }
      ]
    }
  ],
  applications: [
    {
      title: "Wind Turbine Blade Mould Heating",
      description: "Precise multi-zone temperature ramp-up, soak, and cooling across 70m to 100m+ wind turbine blade moulds with distributed blanket monitoring.",
      industry: "Renewable Energy & Wind Power"
    },
    {
      title: "Advanced Composite Curing",
      description: "Enforcing strict thermal cure profiles for aerospace and structural fiberglass/carbon-fiber composite components without manual logbooks.",
      industry: "Aerospace & Composite Materials"
    },
    {
      title: "Industrial Multi-Zone Blanket Heating",
      description: "Retrofit existing PID control panels across large manufacturing lines to eliminate manual log entries and noise-obscured shop-floor alarms.",
      industry: "Industrial Manufacturing"
    }
  ],
  architecturePoints: [
    {
      step: "01",
      title: "Field PIDs & Heating Blankets",
      details: "Existing PID controllers regulate heating blankets along the mould tooling."
    },
    {
      step: "02",
      title: "Data Collector Node (DCN)",
      details: "ESP32-based DCN interfaces via RS485 Modbus RTU daisy-chain to multiple PIDs, collecting temp, setpoint, and current."
    },
    {
      step: "03",
      title: "Industrial Wi-Fi Backbone",
      details: "Encrypted wireless transmission with Ethernet-linked access points spaced up to 100m apart along the blade length."
    },
    {
      step: "04",
      title: "Local SBC Server & Dashboard",
      details: "On-site rugged SBC runs local database, enforces SOP profiles, manages user roles, and generates QA reports."
    }
  ],
  shopFloorComparison: [
    {
      problem: "Visibility",
      todayIssue: "Temperature is shown only on the local PID display and manually noted on paper.",
      emertechSolution: "Monitor and control every panel and blanket from any desktop or mobile device on the plant network."
    },
    {
      problem: "Alarms & Overheating",
      todayIssue: "Beeping alarms are easily missed on a loud shop floor; current is unmonitored until a blanket burns.",
      emertechSolution: "Active per-blanket current tracking halts heating if abnormal draw occurs and triggers centralized screen alerts."
    },
    {
      problem: "Process Integrity",
      todayIssue: "Operators adjust PID set temperatures manually with no record of who changed parameters.",
      emertechSolution: "SOP-locked profiles automatically lock PID keypads; parameters cannot be altered on the floor."
    },
    {
      problem: "Power Outages",
      todayIssue: "Power blips cause lost cycle tracking and force unreliable manual time recalculations.",
      emertechSolution: "Automated step and total cycle time calculation resumes seamlessly with timestamped interruption logging."
    },
    {
      problem: "Traceability & Audits",
      todayIssue: "Paper log sheets are prone to errors, missing records, and painful customer compliance audits.",
      emertechSolution: "Instant PDF and Excel batch reports with zone-by-zone peak temps, soak durations, and thermal curves."
    }
  ]
};

export const HARDWARE_PRODUCTS: ProductFamily[] = [DCN_HEAT_CONTROLLER];

// Alias for backwards compatibility
export const PRODUCTS = HARDWARE_PRODUCTS;

export const COMPANY_INFO = {
  name: "Emertech Electronics",
  brandMark: "EMERTECH",
  tagline: "Industrial Hardware & Software Solutions",
  location: "Vadodara, Gujarat, India",
  email: "emertechelectronics@gmail.com",
  phone: "+91-8320845947",
  operatingHours: "Monday to Saturday: 9:00 AM – 6:30 PM IST",
  brochurePath: "/assets/aistudio/Emertech_Brochure_881bad62.pdf"
};
