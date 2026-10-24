export interface DemoScreenshot {
  id: string;
  sectionId: 'live-monitoring' | 'batch-management' | 'temperature-graphs' | 'telemetry-reports';
  title: string;
  subtitle: string;
  caption: string;
  badge: string;
  imagePath: string;
  keyFeatures: string[];
  layoutSpan?: 'full' | 'half';
}

export interface DemoGallerySection {
  id: 'live-monitoring' | 'batch-management' | 'temperature-graphs' | 'telemetry-reports';
  letter: string;
  title: string;
  shortHeading: string;
  description: string;
  iconName: string;
  items: DemoScreenshot[];
}

export const DEMO_GALLERY_SECTIONS: DemoGallerySection[] = [
  {
    id: 'live-monitoring',
    letter: 'A',
    title: 'Live PID Monitoring Dashboard',
    shortHeading: 'Multi-Gateway & PID Status',
    description: 'View the monitoring interface for controller status, process values, temperature readings, and batch progress.',
    iconName: 'Activity',
    items: [
      {
        id: 'dashboard-01',
        sectionId: 'live-monitoring',
        title: 'Multi-DCN Gateway & Multi-Controller Grid',
        subtitle: 'DCN-SIM-001 & DCN-SIM-002 with Dual 4-Zone PID Cards',
        caption: 'Central supervisory overview monitoring multiple DCN gateways simultaneously. Each Autonics TK4S controller card displays real-time Process Value (PV), Setpoint Value (SV), current heating step, elapsed time, and instant ALARM status.',
        badge: 'Gateway Grid',
        imagePath: '/assets/aistudio/dashboard01_a8298731.png',
        keyFeatures: [
          'Dual DCN gateway grouping (DCN-SIM-001 & DCN-SIM-002)',
          'Autonics TK4S 4-zone card visualization with large PV displays',
          'Live connection indicator: Gateway Connected / Role: Operator',
          'Left sidebar tree showing quick-status temperatures for all networked PIDs',
        ],
        layoutSpan: 'full',
      },
      {
        id: 'dashboard-02',
        sectionId: 'live-monitoring',
        title: 'Simultaneous Multi-Gateway Heating Overview',
        subtitle: 'Expanded Multi-Zone Supervisory View Across 8+ PIDs',
        caption: 'High-density supervisory screen displaying DCN-SIM-002 and DCN-SIM-003 alongside active batch progress and global alarm indicators. Designed for plant operators and shift supervisors.',
        badge: 'Plant Overview',
        imagePath: '/assets/aistudio/dashboard02_741bf402.png',
        keyFeatures: [
          'Multi-panel layout with dedicated alarm cutoff toggles',
          'Step duration countdown and percentage progress bars',
          'Integrated fullscreen and dark mode toggle controls',
          'Quick gateway diagnostics and channel status counters',
        ],
        layoutSpan: 'full',
      },
      {
        id: 'available-slave-dashboard',
        sectionId: 'live-monitoring',
        title: 'Available Controller Standby & Pre-Batch View',
        subtitle: 'Standby Status with Real-Time PV/SV Readings',
        caption: 'Displays unassigned controller channels ready for new recipe deployment, showing current ambient thermal readings (33.0°C – 45.6°C) and standby PID state.',
        badge: 'Standby Grid',
        imagePath: '/assets/aistudio/available_slave_dashboard_dfeb2f54.png',
        keyFeatures: [
          'Pre-recipe validation of sensor loops and thermocouple inputs',
          'Channel-by-channel setpoint initialization',
          'Live ambient baseline temperature check before recipe start',
        ],
        layoutSpan: 'half',
      },
    ],
  },
  {
    id: 'batch-management',
    letter: 'B',
    title: 'Controller & Batch Management',
    shortHeading: 'Batch States & Device Allocation',
    description: 'Explore how the interface organizes devices, controllers, batch states, and process progress.',
    iconName: 'Layers',
    items: [
      {
        id: 'running-batch',
        sectionId: 'batch-management',
        title: 'Active Curing Batch in Execution (TESTBATCH001)',
        subtitle: 'Active 60°C Thermal Cure with SOP Keypad Lockdown',
        caption: 'Real-time execution of recipe TESTBATCH001 across 40 running controllers. Displays vibrant green active glowing status cards, 60.0°C target setpoints, 60.1°C current PVs, synchronized elapsed times, and emergency stop overrides.',
        badge: 'Active Batch',
        imagePath: '/assets/aistudio/running_batch_52a29bb8.png',
        keyFeatures: [
          'Visual green halo indicating synchronized active heating zone',
          'SOP-locked keypad state preventing manual floor adjustments',
          'Step execution timer: Step 2/2 at 45% completion',
          'Emergency individual channel and batch-level STOP controls',
        ],
        layoutSpan: 'full',
      },
      {
        id: 'running-slave-devices',
        sectionId: 'batch-management',
        title: 'Running Slave Devices & Zone Assignment',
        subtitle: 'Targeted Multi-Zone Execution on DCN-260407-21000501',
        caption: 'Granular view of a single DCN hardware node running a synchronized thermal batch across 3 active PID controllers (PID-1, PID-2, PID-4) targeting 40.0°C with automated ramp tracking.',
        badge: 'Hardware Node',
        imagePath: '/assets/aistudio/running_slave_devices_626ba4d1.png',
        keyFeatures: [
          'Targeted DCN serial mapping: DCN-260407-21000501',
          'Dynamic step progression with elapsed soak timestamps',
          'Sub-zone current feedback and individual alarm triggers',
        ],
        layoutSpan: 'half',
      },
      {
        id: 'idle-slaves',
        sectionId: 'batch-management',
        title: 'Idle Slave Allocation & Ready-to-Assign Matrix',
        subtitle: 'DCN-SIM-002 & DCN-SIM-003 Standby Allocation',
        caption: 'Matrix of 43 available controller channels displaying NO_BATCH status, ready to be grouped into custom curing recipes or zone profiles with one click.',
        badge: 'Idle Allocation',
        imagePath: '/assets/aistudio/idle_slaves_85fe1754.png',
        keyFeatures: [
          'One-click multi-channel recipe assignment',
          'Disabled safety state ensuring zero unintended heating',
          'Channel-level manual test and calibration verification',
        ],
        layoutSpan: 'half',
      },
      {
        id: 'idle-slave-devices',
        sectionId: 'batch-management',
        title: 'Slave Device Configuration & Channel Mapping',
        subtitle: 'Physical Hardware Port Mapping & Modbus Address Allocation',
        caption: 'Device-level configuration screen showing physical RS485 slave addresses, PID hardware model assignments (Autonics TK4S), and channel routing.',
        badge: 'Device Mapping',
        imagePath: '/assets/aistudio/idleSlaveDevices_b3863abb.png',
        keyFeatures: [
          'RS485 Modbus RTU address mapping ([1], [2], [3], [4])',
          'Quick navigation to Blanket Settings and Batch Profiles',
          'Hardware loop verification without rewiring cabinets',
        ],
        layoutSpan: 'half',
      },
    ],
  },
  {
    id: 'temperature-graphs',
    letter: 'C',
    title: 'Process Timeline & Temperature Graphs',
    shortHeading: 'Visual PV/SV Curves & Ramp Tracking',
    description: 'Explore temperature trends and process timelines through visual representations of controller measurements and setpoint data.',
    iconName: 'LineChart',
    items: [
      {
        id: 'batch-graph',
        sectionId: 'temperature-graphs',
        title: 'Multi-Controller Process Timeline Graph',
        subtitle: 'Comparative PV Curves vs Planned SV Setpoints Across 3 Zones',
        caption: 'High-resolution interactive process timeline plotting actual Process Value (PV solid lines) alongside Setpoint Value (SV dashed curves) across PID-1 (blue), PID-2 (green), and PID-4 (orange). Includes chip-based curve isolation and timeline scrubbers.',
        badge: 'Multi-Zone Graph',
        imagePath: '/assets/aistudio/batch_Graph_e8ed9950.png',
        keyFeatures: [
          'Simultaneous multi-controller ramp, soak, and cooling comparison',
          'Clickable PID chip legend to isolate individual thermal zones',
          'SV Curves toggle (ON/OFF) and dynamic temperature range scaling (0°C – 61°C)',
          'Precise time-axis telemetry correlating heating steps to timestamps',
        ],
        layoutSpan: 'full',
      },
      {
        id: 'single-pid-graph',
        sectionId: 'temperature-graphs',
        title: 'Single PID Step-Ramp Temperature Curve',
        subtitle: 'Step 1 (40°C) and Step 2 (45°C) Thermal Cure Validation',
        caption: 'Detailed single-zone thermal validation certificate graph displaying PID-2 ramping from start temperature 32.3°C through Step 1 (40.0°C at 3:30 PM) to Step 2 (45.0°C achieved peak 49.5°C at 4:30 PM). Highlights strict compliance with composite cure profiles.',
        badge: 'Step Profile',
        imagePath: '/assets/aistudio/SinglePidGraph_3bae95a6.png',
        keyFeatures: [
          'Clear multi-step ramp and soak visual threshold overlays',
          'Automatic detection and display of Start (32.3°C), Last, and Max achieved temperatures',
          'Audit-ready visual curve suitable for direct inclusion in client QA certificates',
        ],
        layoutSpan: 'full',
      },
    ],
  },
  {
    id: 'telemetry-reports',
    letter: 'D',
    title: 'Telemetry Logs & Reports',
    shortHeading: 'Audit Records, Exports & Historical Logs',
    description: 'Preview the interface for historical telemetry, controller readings, records, and reporting workflows.',
    iconName: 'FileSpreadsheet',
    items: [
      {
        id: 'report-section',
        sectionId: 'telemetry-reports',
        title: 'Curing Batch Management & Telemetry Log View',
        subtitle: 'Filterable Multi-Channel Telemetry Stream with Export Tools',
        caption: 'Batch telemetry analysis interface showing 256 high-density records for batch testbatch001. Operators can filter by gateway, controller, or drift highlights, with instant one-click export to CSV, Hardware XLS, and Adobe PDF.',
        badge: 'Batch Telemetry',
        imagePath: '/assets/aistudio/reportSection_2105dc1f.png',
        keyFeatures: [
          'High-density 15-second telemetry sampling interval',
          'Synchronized side-by-side SV (°C) and PV (°C) data columns for all zones',
          'Single-click export buttons: Export CSV, Hardware XLS, and Download PDF',
          'Gateway connection monitor, offline badge count, and operator role indicator',
        ],
        layoutSpan: 'full',
      },
      {
        id: 'report-logs',
        sectionId: 'telemetry-reports',
        title: 'Continuous Historical Telemetry Audit Trail',
        subtitle: 'Per-Second Historical Database Records with Timestamp Integrity',
        caption: 'Chronological raw telemetry ledger recording precise 15-second thermal snapshots per controller channel (PID-1, PID-2, PID-4). Forms the indelible empirical record required for wind-blade warranty audits.',
        badge: 'Audit Trail',
        imagePath: '/assets/aistudio/report_logs_5f82278f.png',
        keyFeatures: [
          'Cryptographically verifiable batch record timestamps',
          'Exact decimal precision (°C) for both target setpoint and achieved process value',
          'Searchable and filterable by DCN hardware serial number',
        ],
        layoutSpan: 'full',
      },
    ],
  },
];
