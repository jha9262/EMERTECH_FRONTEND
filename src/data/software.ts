export interface SoftwareWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface SoftwareApplication {
  title: string;
  industry: string;
  details: string;
}

export interface SoftwareTechSpec {
  label: string;
  value: string;
}

export interface SoftwareRelatedProduct {
  name: string;
  route: string;
  type: 'hardware' | 'software';
  purpose: string;
}

export interface SoftwareProduct {
  id: string;
  slug: string;
  name: string;
  purpose: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  route: string;
  problem: string;
  coreCapabilities: string[];
  howItWorks: string;
  workflow: SoftwareWorkflowStep[];
  applications: SoftwareApplication[];
  hardwareIntegration: string;
  technicalSpecifications: SoftwareTechSpec[];
  relatedProducts: SoftwareRelatedProduct[];
  brochureReference?: string;
}

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    id: "fluxora",
    slug: "fluxora",
    name: "Fluxora",
    purpose: "Industrial IoT Blade Heating System",
    tagline: "SOP-Locked Thermal Cycle Control & Traceability for Blade Moulds",
    shortDescription: "Monitors, controls, and records blade-heating cycles, with SOP-locked profiles and process traceability.",
    fullDescription: "Fluxora is Emertech's flagship Industrial IoT heating control and monitoring platform. Specifically engineered for wind turbine blade mould tooling and large-scale composite curing, Fluxora links shop-floor PID controllers to local servers, providing live multi-zone temperature tracking, locked heating recipe execution, automatic overheat current shut-off, and instant tamper-proof batch compliance certificates.",
    route: "/software/fluxora/",
    problem: "Across 70m to 100m+ wind turbine blade moulds, heating blankets were historically operated via isolated manual PID controllers with handwritten paper logbooks. In noisy plant environments, beeping alarms go unnoticed, blanket current draw is unmonitored until costly tooling burns occur, and unauthorized temperature changes by floor personnel cause severe blade cure defects and compliance audit rejections.",
    coreCapabilities: [
      "Real-time multi-zone temperature, setpoint, and heater current tracking on a unified dashboard",
      "SOP-locked heating recipe execution: once initiated, remote PID keypad parameter editing is strictly locked",
      "Per-blanket active current monitoring that halts heating immediately if an abnormal draw is detected",
      "Automated step and total cycle timer with timestamped power-interruption recovery",
      "Instant export of standardized batch inspection sheets to Microsoft Excel (.xlsx) and Adobe PDF (.pdf)",
      "Zero PID panel rewiring: retrofits existing Autonics TK4S and compatible Modbus RTU controllers"
    ],
    howItWorks: "Fluxora interfaces via RS485 Modbus RTU daisy-chained to plant PID temperature controllers through Emertech Data Collector Nodes (DCN). DCN edge units poll temperature, setpoint, and current every second, streaming encrypted telemetry over industrial Wi-Fi to a rugged on-premises Single Board Computer (SBC) server running 100% offline without cloud latency.",
    workflow: [
      {
        step: "01",
        title: "Recipe Selection & Keypad Lock",
        description: "Supervisor selects the validated blade heating profile. Fluxora transmits recipe parameters to all mould PIDs and locks physical keypads to prevent floor tampering."
      },
      {
        step: "02",
        title: "Synchronized Ramp & Soak Execution",
        description: "DCN edge hardware continuously reads thermocouple values and blanket currents, coordinating gradual ramp-up and target soak temperature across mould zones."
      },
      {
        step: "03",
        title: "Active Thermal & Current Guard",
        description: "If any heating blanket exceeds thermal limits or current draw thresholds, Fluxora halts heating to that section and triggers centralized visual and audible alerts."
      },
      {
        step: "04",
        title: "Automated QA Batch Certification",
        description: "Upon cycle completion, Fluxora compiles peak temperatures, soak durations, energy (kWh) consumed, and thermal curve graphs into tamper-resistant PDF/Excel reports."
      }
    ],
    applications: [
      {
        title: "Wind Turbine Blade Mould Tooling",
        industry: "Renewable Energy & Wind Power",
        details: "Precise multi-zone temperature control across 70m–100m+ blade moulds with distributed heating blanket monitoring."
      },
      {
        title: "Composite & Fiberglass Structural Curing",
        industry: "Aerospace & Marine Composites",
        details: "Guaranteed thermal soak adherence and permanent digital audit trails for structural composite laminates."
      },
      {
        title: "Multi-Zone Industrial Heating Blankets",
        industry: "Heavy Industrial Manufacturing",
        details: "Retrofitting existing plant PID panels to replace manual clipboards with centralized screen monitoring."
      }
    ],
    hardwareIntegration: "Emertech Data Collector Node (DCN) edge hardware, rugged local Single Board Computer (SBC) server, and Autonics TK4S/compatible Modbus RTU PID controllers.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "Local On-Premises SBC Server (100% Offline Capable)" },
      { label: "Edge Hardware", value: "Emertech DCN (ESP32 Microcontroller, RS485 Modbus RTU)" },
      { label: "Network Protocol", value: "Encrypted Industrial Wi-Fi (2.4 GHz) / Ethernet LAN" },
      { label: "Operator Security", value: "Role-Based Access Control (Operator, Supervisor, Admin)" },
      { label: "Report Formats", value: "Adobe PDF (.pdf) and Microsoft Excel (.xlsx)" },
      { label: "PID Compatibility", value: "Autonics TK4S, delta, and standard Modbus RTU controllers" }
    ],
    relatedProducts: [
      { name: "DCN & Heat Controller", route: "/hardware/dcn-heat-controller/", type: "hardware", purpose: "Edge Hardware & Industrial Heating Controller" },
      { name: "Equipoise", route: "/software/equipoise/", type: "software", purpose: "Blade Weight & Moment Balancing Software" },
      { name: "Clime", route: "/software/clime/", type: "software", purpose: "Energy Monitoring Solutions" }
    ],
    brochureReference: "Emertech Fluxora Heating System Technical Brochure"
  },
  {
    id: "equipoise",
    slug: "equipoise",
    name: "Equipoise",
    purpose: "Blade Weight and Moment Balancing Software",
    tagline: "Precision Blade Matching & Center-of-Gravity Balance for Wind Rotors",
    shortDescription: "Calculates blade weight and moment to help match wind turbine blade sets for balanced rotor assemblies.",
    fullDescription: "Equipoise is Emertech's specialized analytical software designed for wind turbine blade manufacturing plants. By acquiring calibrated load-cell measurements across blade root, pivot, and tip stations, Equipoise calculates exact static weight, longitudinal center-of-gravity (CG), and static moment. It then algorithmically pairs manufactured blades into aerodynamically and mechanically matched trios to eliminate rotor vibration.",
    route: "/software/equipoise/",
    problem: "During composite infusion and curing of wind turbine blades, slight variations in resin absorption and fiberglass consolidation cause weight and moment discrepancies between individual blades. Installing mismatched blades onto a three-bladed wind turbine rotor induces severe cyclic centrifugal unbalance, causing high bearing fatigue, yaw strain, and catastrophic gearbox wear.",
    coreCapabilities: [
      "Precision static weight and longitudinal center-of-mass moment calculation",
      "Three-blade rotor set pairing optimization to minimize aerodynamic and mass imbalance",
      "Counterweight correction guidance: calculates exact tip or root mass adjustment required",
      "Automated balance certificate generation documenting blade serials and moment differentials",
      "Comprehensive digital archive of historical blade geometry, weight distribution, and pairing logs",
      "Direct digital integration with industrial weighing scales and load-cell indicators"
    ],
    howItWorks: "Equipoise receives certified mass inputs from calibrated digital load-cell weighing fixtures located at designated blade root and pivot stations. The software executes static equilibrium equations to compute overall mass, longitudinal center of gravity, and moment about the rotor flange, outputting pairing recommendations for factory assembly.",
    workflow: [
      {
        step: "01",
        title: "Calibrated Weight Acquisition",
        description: "Manufactured blade is positioned on certified balance weigh fixtures. Digital load-cell readings are ingested directly into Equipoise."
      },
      {
        step: "02",
        title: "Center-of-Gravity & Moment Computation",
        description: "The software calculates exact total blade mass, distance from root chord to center of gravity, and the resulting static moment."
      },
      {
        step: "03",
        title: "Rotor Trio Matching Optimization",
        description: "Equipoise cross-references the batch inventory of cured blades to find the optimum 3-blade combination with the lowest moment spread."
      },
      {
        step: "04",
        title: "Correction & Certification Sign-Off",
        description: "Outputs required counterweight additions (if any) and produces the final wind turbine rotor balance inspection certificate."
      }
    ],
    applications: [
      {
        title: "Wind Turbine Blade Manufacturing",
        industry: "Renewable Energy Equipment",
        details: "End-of-line blade quality control, moment calculation, and matched set grouping before site dispatch."
      },
      {
        title: "Rotor Assembly & Hub Installation",
        industry: "Wind Farm Erection & Commissioning",
        details: "Verifying balanced blade trios to ensure smooth turbine operation and extended bearing life."
      },
      {
        title: "Blade Refurbishment & Balancing",
        industry: "Wind Asset Maintenance & Repair",
        details: "Recalibrating blade moment after structural repairs, leading-edge tape replacement, or re-coating."
      }
    ],
    hardwareIntegration: "Interfaces with industrial digital weighing indicators, precision load-cell benches, serial RS232/RS485 scale consoles, and plant Ethernet networks.",
    technicalSpecifications: [
      { label: "Deployment Mode", value: "Local Quality Station PC / Plant Intranet Server" },
      { label: "Data Input", value: "Direct Load-Cell Serial / Ethernet / Manual QA Override" },
      { label: "Calculated Outputs", value: "Total Mass (kg), Center of Gravity (mm), Static Moment (kNm)" },
      { label: "Pairing Logic", value: "3-Blade Rotor Set Optimization with Minimum Moment Differential" },
      { label: "Documentation", value: "Standardized Rotor Balancing QA Inspection Sheet (PDF/Excel)" },
      { label: "Audit Traceability", value: "Blade Serial Number, Mold ID, Infusion Batch ID" }
    ],
    relatedProducts: [
      { name: "Fluxora", route: "/software/fluxora/", type: "software", purpose: "Industrial IoT Blade Heating System" },
      { name: "Foundry", route: "/software/foundry/", type: "software", purpose: "Production ERP" },
      { name: "Manifest", route: "/software/manifest/", type: "software", purpose: "Asset Tracking Solutions" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  },
  {
    id: "smolder",
    slug: "smolder",
    name: "Smolder",
    purpose: "Fire & Siren Control",
    tagline: "Coordinated Early Fire Detection, Multi-Zone Siren Staging & Emergency Interlocks",
    shortDescription: "Coordinates fire alarms and sirens through a central control panel for fire detection and alerting.",
    fullDescription: "Smolder is an industrial fire and siren coordination management system designed for heavy manufacturing facilities, composite curing bays, and hazardous plant sectors. Smolder consolidates smoke, flame, and heat detector inputs into an intuitive centralized map, managing synchronized plant sirens, evacuation strobes, and automated safety interlocks.",
    route: "/software/smolder/",
    problem: "Expansive industrial plants often have high ambient machine noise, partitioned work bays, and isolated chemical or curing zones. Traditional standalone fire panels frequently struggle to cut through shop-floor acoustics or trigger coordinated evacuation procedures across multi-building industrial campuses.",
    coreCapabilities: [
      "Centralized monitoring and visual mapping of plant-wide smoke, flame, and thermal sensors",
      "Staged multi-zone siren sounding with distinct warning and full evacuation tone sequences",
      "Real-time visual alarm display on control room consoles and guard gate workstations",
      "High-priority safety interlock trigger to automatically signal Postern emergency door release",
      "Timestamped event recording logging detector activation, siren acknowledgement, and clear time",
      "Supervised dry-contact and network telemetry interface for standard industrial fire alarm panels"
    ],
    howItWorks: "Smolder communicates with plant fire alarm control panels (FACP) and distributed I/O modules over supervised RS485 or industrial Ethernet. Upon sensor activation, Smolder verifies zone status, illuminates the interactive floor plan, triggers high-decibel audible sirens in affected sectors, and sends emergency release triggers to perimeter exit systems.",
    workflow: [
      {
        step: "01",
        title: "Multi-Zone Sensor Ingestion",
        description: "Continuously monitors optical beam detectors, thermal sensors, and manual call boxes across plant sectors."
      },
      {
        step: "02",
        title: "Instant Verification & Floorplan Locating",
        description: "Pinpoints the exact bay location of the tripped sensor on the control room screen within milliseconds."
      },
      {
        step: "03",
        title: "Staged Siren & Strobe Activation",
        description: "Engages zone-specific high-power sirens and high-visibility flashing strobes to guide personnel away from danger."
      },
      {
        step: "04",
        title: "Automated Life-Safety Interlocking",
        description: "Dispatches automated emergency release commands to Postern door controllers and logs the complete event history."
      }
    ],
    applications: [
      {
        title: "Composite Tooling & Blade Manufacturing",
        industry: "Wind & Aerospace Manufacturing",
        details: "Rapid detection in resin-infusion and heated composite mould bays where combustible materials are handled."
      },
      {
        title: "Heavy Fabrication & Electrical Enclosures",
        industry: "Industrial Manufacturing",
        details: "Plant-wide siren coverage ensuring evacuation alerts are heard clearly over loud machining and cutting operations."
      },
      {
        title: "Chemical Storage & Material Warehouses",
        industry: "Process Industries",
        details: "Early thermal detection and rapid zone-specific alerting for specialized raw material storage bays."
      }
    ],
    hardwareIntegration: "Interfaces with industrial fire alarm control panels (FACP), siren driver relays, optical smoke/flame sensors, and digital I/O controllers.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "Dedicated Industrial Control PC / Hot-Standby Server" },
      { label: "Panel Interfacing", value: "Supervised Dry Contacts, Modbus RTU / TCP, Serial FACP link" },
      { label: "Siren Control", value: "Multi-Zone Staged Strobe & Horn Relay Modules" },
      { label: "Interlock Output", value: "Direct Hardware Relay & Encrypted Network Trigger to Postern" },
      { label: "Logging Resolution", value: "Millisecond-accurate timestamped alarm and reset logging" },
      { label: "User Interface", value: "High-contrast visual annunciator with interactive plant map" }
    ],
    relatedProducts: [
      { name: "Postern", route: "/software/postern/", type: "software", purpose: "Emergency Door Control" },
      { name: "Fluxora", route: "/software/fluxora/", type: "software", purpose: "Industrial IoT Blade Heating System" },
      { name: "Herald", route: "/software/herald/", type: "software", purpose: "Long-Range Communication Gateway" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  },
  {
    id: "postern",
    slug: "postern",
    name: "Postern",
    purpose: "Emergency Door Control",
    tagline: "Automated Fail-Safe Exit Release & Normal-Condition Access Governance",
    shortDescription: "Releases and manages emergency exit doors automatically during fire or disaster events and restrict the usages in normal operating conditions.",
    fullDescription: "Postern is Emertech's industrial emergency exit management system. It balances two critical plant requirements: strictly restricting unauthorized use of emergency exits during normal day-to-day operations, while guaranteeing instant, fail-safe magnetic release of all evacuation doors the moment a fire or disaster event is detected.",
    route: "/software/postern/",
    problem: "Manufacturing plants must prevent unauthorized entry, theft, and uncontrolled airflow through emergency exit doors during standard operating shifts. However, mechanical padlocks or non-integrated locks pose severe life-safety hazards if an emergency strikes and doors cannot be rapidly opened by fleeing personnel.",
    coreCapabilities: [
      "Automated fail-safe electromagnetic door release immediately upon verified alarm or emergency trigger",
      "Strict normal-state access restriction with unauthorized door-open detection and alarm sirens",
      "Door-prop warning alarms when emergency exits are left ajar during material transfers",
      "Centralized visual status dashboard indicating locked, released, open, and fault states of all plant doors",
      "Support for authorized RFID maintenance bypass badge access with full operator logging",
      "Complete historical audit log of every door release, open duration, and system reset event"
    ],
    howItWorks: "Postern connects to industrial digital I/O controllers driving 12V/24V fail-safe electromagnetic door locks (maglocks) and magnetic door position sensors. The software listens for emergency input signals from Smolder fire panels or manual break-glass buttons, immediately de-energizing locks to guarantee free egress.",
    workflow: [
      {
        step: "01",
        title: "Normal Secured State",
        description: "Doors remain held by electromagnetic locks. Position sensors monitor door alignment; badge readers allow authorized bypass."
      },
      {
        step: "02",
        title: "Tamper & Breach Detection",
        description: "If an exit door is pushed open without authorization, Postern sounds local buzzers and flags the breach on the security console."
      },
      {
        step: "03",
        title: "Emergency Evacuation Trigger",
        description: "Upon receiving an alarm from Smolder or emergency push-stations, Postern immediately cuts power to maglocks across the zone."
      },
      {
        step: "04",
        title: "Post-Incident Audit & Secure Reset",
        description: "Generates an auditable report of door opening times, durations, and requires authorized supervisor credential to re-lock."
      }
    ],
    applications: [
      {
        title: "Industrial Manufacturing & Clean Curing Halls",
        industry: "Wind & Industrial Fabrication",
        details: "Restricting dust and unauthorized access in clean curing bays while ensuring rapid evacuation routes."
      },
      {
        title: "High-Value Tooling & Inventory Warehouses",
        industry: "Logistics & Tool Storage",
        details: "Preventing perimeter shrinkage through emergency fire doors while maintaining safety code egress compliance."
      },
      {
        title: "Secure Chemical & Hazardous Material Enclosures",
        industry: "Process & Chemical Facilities",
        details: "Guaranteed panic release for personnel safety paired with immediate alarms if doors are breached."
      }
    ],
    hardwareIntegration: "Industrial digital I/O controllers, fail-safe electromagnetic locks (maglocks), magnetic reed position sensors, and emergency break-glass units.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "Industrial Controller Appliance / Plant Security PC" },
      { label: "Lock Compatibility", value: "12V / 24V DC Fail-Safe Electromagnetic Locks (Maglocks)" },
      { label: "Sensor Inputs", value: "Supervised Dry-Contact Reed Switches & Door Position Sensors" },
      { label: "Alarm Interlocks", value: "Direct Hardwired & LAN Signal from Smolder Fire Panel" },
      { label: "Fail-Safe Mechanism", value: "De-energize to open (power loss instantly unlocks exits)" },
      { label: "Access Control Support", value: "Wiegand / OSDP RFID Card Readers for Authorized Bypass" }
    ],
    relatedProducts: [
      { name: "Smolder", route: "/software/smolder/", type: "software", purpose: "Fire & Siren Control" },
      { name: "Manifest", route: "/software/manifest/", type: "software", purpose: "Asset Tracking Solutions" },
      { name: "Foundry", route: "/software/foundry/", type: "software", purpose: "Production ERP" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  },
  {
    id: "clime",
    slug: "clime",
    name: "Clime",
    purpose: "Energy Monitoring Solutions",
    tagline: "Submetering, Electrical Load Analysis & Energy Optimization for Plant Tooling",
    shortDescription: "An energy monitoring tool to monitor, analyse and optimise power consumption of small to large industrial loads.",
    fullDescription: "Clime is Emertech's comprehensive industrial energy monitoring and analytics software. It captures high-resolution electrical telemetry from multi-function meters across production machines, heating blankets, compressor banks, and plant sub-feeders, delivering actionable insights into energy efficiency, power factor, and peak demand charges.",
    route: "/software/clime/",
    problem: "Industrial plants face rising electricity tariffs, peak demand surcharges, and power factor penalty fees. Without machine-level submetering, plant managers cannot determine which production lines, heating cycles, or obsolete motors are wasting energy or causing costly peak utility demand spikes.",
    coreCapabilities: [
      "Real-time voltage, current, active power (kW), reactive power (kVAR), and power factor tracking",
      "Machine-level and feeder-level energy consumption (kWh) accounting and tariff calculation",
      "Peak demand threshold forecasting with proactive alert notifications to prevent utility penalties",
      "Specific Energy Consumption (SEC) tracking per production batch and manufactured blade",
      "Harmonic distortion (THD) and phase balance monitoring for electrical equipment health",
      "Automated daily, monthly, and shift-wise energy consumption audit reports in PDF and Excel"
    ],
    howItWorks: "Clime continuously polls digital power meters, smart energy analyzers, and current transformer (CT) modules via RS485 Modbus RTU and Modbus TCP. The collected time-series telemetry is processed on a local server, calculating load curves, power factor trends, and departmental cost allocations.",
    workflow: [
      {
        step: "01",
        title: "Submeter Telemetry Ingestion",
        description: "Streams continuous V, I, kW, kVAR, and kWh readings from multi-function digital energy meters across plant switchgear."
      },
      {
        step: "02",
        title: "Load Aggregation & Analysis",
        description: "Categorizes energy consumption by manufacturing department, machine cell, and specific mould heating tool."
      },
      {
        step: "03",
        title: "Peak Demand & Anomaly Alerting",
        description: "Triggers notifications when electrical loads approach contractual demand limits or when power factor dips below target."
      },
      {
        step: "04",
        title: "Batch Energy Audit Reporting",
        description: "Correlates energy consumed directly with production work orders (e.g. kWh per cured blade) for accurate product costing."
      }
    ],
    applications: [
      {
        title: "Blade Mould & Tooling Heating Monitoring",
        industry: "Wind & Composite Manufacturing",
        details: "Measuring electrical energy (kWh) consumed per heating cycle to optimize thermal blanket efficiency."
      },
      {
        title: "Industrial Plant Submetering",
        industry: "General Manufacturing",
        details: "Submetering heavy machinery, air compressor utilities, and industrial ovens to eliminate wasteful standby draw."
      },
      {
        title: "Peak Demand & Tariff Optimization",
        industry: "Heavy Fabrication & Processing",
        details: "Shift-based load rescheduling to minimize peak-hour electricity costs and eliminate utility power factor penalties."
      }
    ],
    hardwareIntegration: "Standard industrial multi-function energy meters, power quality analyzers, Rogowski coils/CTs, and RS485 Modbus Ethernet gateways.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "Local Plant Energy Server / Web-Based SCADA Portal" },
      { label: "Meter Communication", value: "Modbus RTU (RS485), Modbus TCP (Ethernet), Pulse Counting" },
      { label: "Tracked Metrics", value: "V (L-L, L-N), I (per phase), Active Power (kW), kVAR, PF, kWh, kVAh" },
      { label: "Reporting Engine", value: "Automated Daily/Monthly Shift & Batch Energy Summaries" },
      { label: "Alert Channels", value: "Visual Dashboard, Audio Alarms, Automated Email/SMS dispatch" },
      { label: "Data Retention", value: "High-resolution time-series storage with multi-year historical logs" }
    ],
    relatedProducts: [
      { name: "Fluxora", route: "/software/fluxora/", type: "software", purpose: "Industrial IoT Blade Heating System" },
      { name: "Foundry", route: "/software/foundry/", type: "software", purpose: "Production ERP" },
      { name: "DCN & Heat Controller", route: "/hardware/dcn-heat-controller/", type: "hardware", purpose: "Edge Hardware & Industrial Heating Controller" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  },
  {
    id: "manifest",
    slug: "manifest",
    name: "Manifest",
    purpose: "Asset Tracking Solutions",
    tagline: "Tooling Visibility, Location History & Preventative Maintenance Scheduling",
    shortDescription: "Tracks equipment, tools and inventory across the plant, from location and status to full history.",
    fullDescription: "Manifest is an industrial asset tracking and tooling management software engineered to bring complete visibility to factory floors. Manifest tracks the physical location, operating status, assignment history, and calibration validity of expensive production tools, heating blankets, calibration jigs, and testing instruments.",
    route: "/software/manifest/",
    problem: "In expansive manufacturing plants, specialized tools and heating blankets frequently move between multiple production bays, moulds, and repair shops. Without digital tracking, tools go missing, uncalibrated instruments are mistakenly used in production, and equipment maintenance schedules are missed.",
    coreCapabilities: [
      "Centralized asset register with unique QR code, barcode, or rugged RFID tag association",
      "Real-time status tracking: In Use, In Storage, In Maintenance, Under Calibration, Retired",
      "Tool check-out and check-in workflows linking assets to specific operators and mould stations",
      "Cumulative run-time hour tracking for proactive preventative maintenance scheduling",
      "Calibration expiration alerts preventing the use of out-of-spec testing equipment",
      "Complete historical audit log recording asset locations, custody transfers, and service notes"
    ],
    howItWorks: "Manifest assigns each physical tool a unique digital identity linked to an industrial tag. Plant technicians use rugged mobile tablets, handheld barcode/RFID scanners, or fixed doorway checkpoints to log asset handovers and inspection milestones directly into the central database.",
    workflow: [
      {
        step: "01",
        title: "Asset Digital Tagging",
        description: "Tooling, heating blankets, and instruments are enrolled with serial numbers, technical specs, and durable RFID/QR tags."
      },
      {
        step: "02",
        title: "Station Check-Out & Assignment",
        description: "Technician scans the asset tag and workstation barcode, instantaneously establishing custody and operating location."
      },
      {
        step: "03",
        title: "Runtime & Maintenance Tracking",
        description: "Logs operating hours and cycle counts, automatically scheduling preventative refurbishment before failures occur."
      },
      {
        step: "04",
        title: "Quality Audit Verification",
        description: "Verifies calibration validity at check-out, ensuring zero out-of-compliance tools enter the production line."
      }
    ],
    applications: [
      {
        title: "Heating Blanket & Tooling Management",
        industry: "Wind Turbine Manufacturing",
        details: "Tracking dozens of heating blankets across 100m moulds, ensuring serial numbers match batch compliance reports."
      },
      {
        title: "Precision Calibration Instrument Tracking",
        industry: "Quality Assurance & Metrology",
        details: "Enforcing strict calibration expiration governance on torque wrenches, load cells, and pyrometers."
      },
      {
        title: "Plant MRO Spare Parts & Tool Crib",
        industry: "Industrial Maintenance",
        details: "Managing tool checkout, return inspections, and maintenance history across plant technician teams."
      }
    ],
    hardwareIntegration: "Rugged industrial Android tablets, handheld 2D barcode/QR scanners, fixed RFID doorway readers, and durable metal-mount asset tags.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "Web-Based Plant Portal (Desktop, Mobile, Tablet Accessible)" },
      { label: "Identification Technologies", value: "QR Codes, 1D/2D Barcodes, Passive UHF RFID, NFC Tags" },
      { label: "Status Categories", value: "Available, Deployed, Maintenance, Calibration Expired, Scrapped" },
      { label: "Mobile Support", value: "Responsive Web App & Native Handheld Scanner Integration" },
      { label: "Audit Reports", value: "Asset Movement Logs, Calibration Due Registers, Utilization Sheets" },
      { label: "Integration Interface", value: "REST API & CSV Data Interchange for Foundry ERP" }
    ],
    relatedProducts: [
      { name: "Fluxora", route: "/software/fluxora/", type: "software", purpose: "Industrial IoT Blade Heating System" },
      { name: "Foundry", route: "/software/foundry/", type: "software", purpose: "Production ERP" },
      { name: "Equipoise", route: "/software/equipoise/", type: "software", purpose: "Blade Weight & Moment Balancing Software" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  },
  {
    id: "foundry",
    slug: "foundry",
    name: "Foundry",
    purpose: "Production ERP",
    tagline: "Connected Production Planning, WIP Tracking & End-to-End Batch Genealogy",
    shortDescription: "Plans, tracks and controls production from raw materials to finished product in one connected system.",
    fullDescription: "Foundry is Emertech's tailored manufacturing operations and production ERP platform. Designed specifically for industrial equipment builders and composite component manufacturers, Foundry unifies customer orders, multi-level Bills of Materials (BOM), shop-floor job routing, work-in-progress (WIP) tracking, and quality inspection sign-offs into one connected system.",
    route: "/software/foundry/",
    problem: "Custom industrial equipment fabrication often suffers from disconnected spreadsheets, missing material stock on the assembly line, untracked scrap rates, and delayed customer delivery commitments due to lack of real-time shop-floor visibility.",
    coreCapabilities: [
      "Dynamic work order scheduling and workstation dispatching based on real-time machine capacity",
      "Multi-level Bill of Materials (BOM) management with automated inventory allocation and shortage alerts",
      "Shop-floor Work-In-Progress (WIP) tracking with barcode station sign-offs and operation timing",
      "Scrap and defect logging with standardized defect categorization for continuous process improvement",
      "End-to-end batch genealogy linking raw material heat/lot numbers to finished product serial numbers",
      "Real-time production KPI dashboards displaying line throughput, cycle times, and on-time delivery rates"
    ],
    howItWorks: "Foundry translates sales contracts into engineering BOMs and structured work orders. Workstation operators log operations via touchscreen terminals or barcode scanners, updating inventory and order statuses in real time across the factory floor.",
    workflow: [
      {
        step: "01",
        title: "Sales Order to Work Order Dispatch",
        description: "Confirmed customer purchase orders generate production routings and allocate required electrical and mechanical inventory."
      },
      {
        step: "02",
        title: "Material Kitting & Verification",
        description: "Warehouse kits raw materials and scans lots to link specific component batches to the job number."
      },
      {
        step: "03",
        title: "Shop-Floor Execution & WIP Tracking",
        description: "Assembly technicians follow digital work instructions at line terminals, logging completions and QA checkpoints."
      },
      {
        step: "04",
        title: "Final QA Inspection & Dispatch Pack",
        description: "Performs final testing, binds factory certificates (e.g. Fluxora heating reports), and outputs dispatch documentation."
      }
    ],
    applications: [
      {
        title: "Industrial Electrical Panel & Equipment Assembly",
        industry: "Electrical Equipment Manufacturing",
        details: "Managing wiring harnesses, enclosures, and controller assembly routings with complete revision control."
      },
      {
        title: "Wind Turbine Blade & Composite Component Production",
        industry: "Renewable Energy Manufacturing",
        details: "Tracking resin lots, fiberglass cloth rolls, infusion times, and curing stages through to final delivery."
      },
      {
        title: "Custom Machinery & OEM Fabrication",
        industry: "Specialized Engineering",
        details: "Coordinating multi-stage machining, welding, assembly, and testing for customized industrial machinery."
      }
    ],
    hardwareIntegration: "Touchscreen shop-floor workstations, industrial barcode/label printers, warehouse handheld terminals, and inspection scales.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "On-Premises Factory Server / Dedicated Plant Intranet" },
      { label: "Supported Modules", value: "Orders, BOM Engineering, Inventory, WIP Routing, QA, Shipping" },
      { label: "Traceability Standard", value: "Lot-Level Raw Material to Finished Serial Genealogy" },
      { label: "Terminal Compatibility", value: "Industrial Touch Panel PCs, Android Tablets, Barcode Scanners" },
      { label: "Report Generation", value: "Job Travelers, Material Pick Lists, Dispatch Notes, QA Certificates" },
      { label: "Integration Ready", value: "Direct Link with Fluxora Batch Reports & Manifest Asset Records" }
    ],
    relatedProducts: [
      { name: "Manifest", route: "/software/manifest/", type: "software", purpose: "Asset Tracking Solutions" },
      { name: "Fluxora", route: "/software/fluxora/", type: "software", purpose: "Industrial IoT Blade Heating System" },
      { name: "Equipoise", route: "/software/equipoise/", type: "software", purpose: "Blade Weight & Moment Balancing Software" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  },
  {
    id: "herald",
    slug: "herald",
    name: "Herald",
    purpose: "Long-Range Communication Gateway",
    tagline: "Industrial Telemetry Transmission for Remote Machines & Dispersed Facilities",
    shortDescription: "Carries data from remote machines and sites over long distances to a central system.",
    fullDescription: "Herald is Emertech's industrial long-range communication gateway software. Engineered to bridge remote machinery, utility stations, and distant plant sectors to central monitoring systems, Herald ensures secure, uninterrupted data transmission across cellular, long-range radio (LoRa), and dedicated satellite networks with store-and-forward edge buffering.",
    route: "/software/herald/",
    problem: "Remote industrial installations—such as wind turbine towers, distant water pumping stations, and off-grid electrical substations—often operate without local Ethernet infrastructure. Communication dropouts result in blind spots, unrecorded alarms, and costly manual site inspections.",
    coreCapabilities: [
      "Reliable long-range data transfer over cellular 4G/LTE, long-range wireless, and serial links",
      "Store-and-forward local buffering: zero telemetry loss during transient network dropouts",
      "Data compression and packet optimization to conserve bandwidth on metered remote connections",
      "End-to-end encrypted packet transport protecting critical industrial telemetry from interception",
      "Device health monitoring: reporting signal strength (RSSI), battery voltage, and transmission latency",
      "Support for diverse industrial inputs: RS485 Modbus RTU, digital pulses, and analog sensors"
    ],
    howItWorks: "Herald runs on rugged edge gateway hardware at remote sites. It polls connected sensors and controllers via serial RS485 or local I/O, packages the telemetry into compact encrypted packets, and transmits the data over configured long-range wireless links to the central Emertech software platform.",
    workflow: [
      {
        step: "01",
        title: "Field Instrument Polling",
        description: "Gathers telemetry from remote meters, temperature nodes, and PLC controllers via local Modbus connections."
      },
      {
        step: "02",
        title: "Edge Serialization & Buffering",
        description: "Compresses and timestamps telemetry into non-volatile local memory, ensuring data safety if signals fade."
      },
      {
        step: "03",
        title: "Long-Range Encrypted Uplink",
        description: "Transmits packet bursts across cellular or long-range radio backbones using secure encrypted transport."
      },
      {
        step: "04",
        title: "Central System Re-assembly",
        description: "Central host receives, authenticates, and ingests telemetry into the plant SCADA and database engines."
      }
    ],
    applications: [
      {
        title: "Dispersed Wind Farm & Renewable Sites",
        industry: "Renewable Energy",
        details: "Streaming weather, blade heating, and electrical telemetry from distant turbine pads to the central control building."
      },
      {
        title: "Remote Water Intake & Pumping Stations",
        industry: "Water Utilities & Irrigation",
        details: "Monitoring remote pump stations, pipeline flow rates, and reservoir levels without physical trenching."
      },
      {
        title: "Perimeter Security & Environmental Stations",
        industry: "Industrial Plant Infrastructure",
        details: "Connecting perimeter air quality monitors, fence line sensors, and emergency stations to the central desk."
      }
    ],
    hardwareIntegration: "Rugged industrial IoT gateways, external high-gain antennas, solar-backed battery systems, and RS485 fieldbus devices.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "Embedded Edge Gateway Firmware & Central Receiver Service" },
      { label: "Supported Links", value: "Cellular (4G/LTE/GSM), Sub-GHz Long-Range Radio, Industrial Ethernet" },
      { label: "Field Protocols", value: "Modbus RTU / ASCII (RS485/RS232), Digital Inputs, Analog 4–20 mA" },
      { label: "Local Buffer Capacity", value: "Non-volatile flash buffer retaining weeks of offline telemetry" },
      { label: "Security & Encryption", value: "Hardware-accelerated AES encryption & authenticated packet keys" },
      { label: "Enclosure Compatibility", value: "IP65/IP66 weatherproof mast-mount and DIN-rail enclosures" }
    ],
    relatedProducts: [
      { name: "Census", route: "/software/census/", type: "software", purpose: "Video Analytics" },
      { name: "Smolder", route: "/software/smolder/", type: "software", purpose: "Fire & Siren Control" },
      { name: "Clime", route: "/software/clime/", type: "software", purpose: "Energy Monitoring Solutions" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  },
  {
    id: "census",
    slug: "census",
    name: "Census",
    purpose: "Video Analytics",
    tagline: "Edge Video Intelligence: Vehicle Logistics, Ingress Counting & PPE Compliance",
    shortDescription: "Detects, counts and classifies people and vehicles from camera feeds, turning video into usable data.",
    fullDescription: "Census is Emertech's edge-powered industrial video analytics platform. By analyzing live RTSP camera feeds from security cameras and gate monitors, Census converts raw video footage into structured, actionable operational data—detecting vehicles, counting personnel across virtual tripwires, and monitoring PPE compliance in restricted plant zones.",
    route: "/software/census/",
    problem: "Manual security logs, clipboard gate counts, and unmonitored CCTV monitors cannot keep pace with busy factory traffic. Security personnel cannot watch dozens of screens simultaneously, leading to unrecorded gate entries, safety gear non-compliance, and loading dock traffic jams.",
    coreCapabilities: [
      "Automated object classification: distinguishing commercial trucks, forklifts, passenger cars, and personnel",
      "Bi-directional virtual line-crossing counting at plant entry gates and warehouse portals",
      "PPE safety compliance alerting: detecting presence of required safety helmets and high-visibility vests",
      "Vehicle dwell time tracking at loading docks and raw material unloading bays",
      "Privacy-first video processing: generates numerical counts and event clips without external cloud uploads",
      "Searchable historical event archive with hourly traffic distribution and peak congestion reports"
    ],
    howItWorks: "Census connects to standard IP surveillance cameras using the ONVIF and RTSP video streaming protocols. Video frames are analyzed locally on dedicated edge inference appliances or local plant servers using optimized neural vision models, outputting event counts and alerts without requiring internet bandwidth.",
    workflow: [
      {
        step: "01",
        title: "Live Camera Stream Ingestion",
        description: "Connects to existing ONVIF/RTSP IP cameras positioned at factory gates, docks, and hazardous bays."
      },
      {
        step: "02",
        title: "Real-Time Detection & Classification",
        description: "Edge inference engine identifies objects (trucks, cars, workers) and tracks trajectory paths in real time."
      },
      {
        step: "03",
        title: "Virtual Boundary & Rule Evaluation",
        description: "Registers ingress/egress counts as objects cross defined line boundaries or flags missing PPE in safety zones."
      },
      {
        step: "04",
        title: "Actionable Intelligence & Reports",
        description: "Displays real-time occupancy counts on guardhouse screens and exports shift throughput reports."
      }
    ],
    applications: [
      {
        title: "Factory Gate & Logistics Yard Ingress/Egress",
        industry: "Logistics & Plant Security",
        details: "Automated counting and timestamp logging of incoming raw material trucks and outgoing dispatch trailers."
      },
      {
        title: "Hazardous Bay PPE Compliance Monitoring",
        industry: "Occupational Safety & Health",
        details: "Automated alerts when personnel enter heated mould curing bays or crane zones without mandatory safety helmets."
      },
      {
        title: "Loading Dock Occupancy & Dwell Time",
        industry: "Warehouse Operations",
        details: "Measuring bay utilization and turnaround times to eliminate truck idling and warehouse congestion."
      }
    ],
    hardwareIntegration: "Standard ONVIF/RTSP industrial IP cameras, on-premises edge AI compute boxes / GPU servers, and local security network switches.",
    technicalSpecifications: [
      { label: "Deployment Architecture", value: "Local On-Premises Edge Video Server (Zero Cloud Dependency)" },
      { label: "Camera Protocol", value: "ONVIF Profile S/T, RTSP video streams (H.264 / H.265)" },
      { label: "Detection Classes", value: "Commercial Trucks, Forklifts, Passenger Vehicles, Pedestrians" },
      { label: "Safety Rules", value: "Virtual Tripwire Counting, Zone Intrusion, Helmet / Vest Presence" },
      { label: "Processing Latency", value: "Real-time edge inference (<150ms event detection latency)" },
      { label: "Reporting Engine", value: "Hourly Ingress/Egress Summaries, Dwell Time Charts, CSV Exports" }
    ],
    relatedProducts: [
      { name: "Herald", route: "/software/herald/", type: "software", purpose: "Long-Range Communication Gateway" },
      { name: "Foundry", route: "/software/foundry/", type: "software", purpose: "Production ERP" },
      { name: "Smolder", route: "/software/smolder/", type: "software", purpose: "Fire & Siren Control" }
    ],
    brochureReference: "Emertech Industrial Solutions Portfolio"
  }
];

export function getSoftwareBySlug(slug: string): SoftwareProduct | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.replace(/^\/|\/$/g, '').replace(/^software\//, '');
  return SOFTWARE_PRODUCTS.find((s) => s.slug === cleanSlug);
}

export function getAllSoftware(): SoftwareProduct[] {
  return SOFTWARE_PRODUCTS;
}
