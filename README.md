# Emertech Electrical Systems — Industrial Hardware & Software Solutions

A professional, responsive static corporate website for **Emertech Electrical Systems**, an industrial technology company engineering hardware products and software solutions based in Vadodara, Gujarat, India.

---

## 🛠️ Technology Stack & Architecture

- **Framework**: Static React 19 & TypeScript SPA (pre-configured for static hosting on Cloudflare Pages, Netlify, Vercel, GitHub Pages, Apache, or Nginx).
- **Styling**: Tailwind CSS v4 with an elegant, modern industrial design system:
  - Primary Background: Warm white / light grey (`#FFFFFF` / `bg-slate-50`).
  - Primary Text: Deep navy / charcoal (`text-slate-900` / `#0F172A`).
  - Brand Accent: Emertech Orange (`#EA580C` / `#F97316`).
  - Secondary Text: Muted slate grey (`text-slate-600`).
  - Borders: Subtle light grey (`border-slate-200`).
  - Dark Navy Sections: Selectively applied for deep feature panels and footers.
- **Icons**: Lucide React & Custom Branded SVG Icons matching official Emertech Industrial IoT documentation.
- **Routing**: Static client-side routing supporting deep links, dynamic document titles, and anchor scrolling.
- **Zero Heavy Backend**: Pure static site with zero database dependency. Forms integrate via native RFC-compliant pre-filled email client links (`mailto:`) or optional external webhook endpoints (e.g. Formspree, HubSpot, CRM).

---

## 🧭 Implemented Routes

### Hardware Routes
| Route | Page | Description |
|---|---|---|
| `/hardware/` | **Hardware Catalogue** | Catalogue featuring Emertech's industrial hardware platform: DCN & Heat Controller. |
| `/hardware/dcn-heat-controller/` | **DCN & Heat Controller** | Industrial IoT blade heating system detailed directly from the official manufacturer brochure: ESP32 edge DCN hardware, local SBC server, SOP-locked keypad security, per-blanket current monitoring for active overheat shut-off, and automated PDF/Excel batch report generator. |

### Software Routes (All 9 Solutions in Exact Order)
| Route | Solution | Purpose | Description |
|---|---|---|---|
| `/software/` | **Software Catalogue** | Master overview of all 9 industrial software platforms in a responsive 3-column grid. |
| `/software/fluxora/` | **Fluxora** | Industrial IoT Blade Heating System | Monitors, controls, and records blade-heating cycles with SOP-locked profiles and full traceability. |
| `/software/equipoise/` | **Equipoise** | Blade Weight and Moment Balancing Software | Calculates blade weight and moment to help match wind turbine blade sets for balanced rotor assemblies. |
| `/software/smolder/` | **Smolder** | Fire & Siren Control | Coordinates fire alarms and sirens through a central control panel for fire detection and alerting. |
| `/software/postern/` | **Postern** | Emergency Door Control | Releases and manages emergency exit doors automatically during fire or disaster events and restricts usage in normal conditions. |
| `/software/clime/` | **Clime** | Energy Monitoring Solutions | Monitors and analyses electricity consumption across industrial loads to support energy management. |
| `/software/manifest/` | **Manifest** | Asset Tracking Solutions | Tracks equipment, tools, and inventory across the plant, from location and status to full history. |
| `/software/foundry/` | **Foundry** | Production ERP | Connects production planning, tracking, and control from raw materials to finished products. |
| `/software/herald/` | **Herald** | Long-Range Communication Gateway | Transfers data from remote equipment and sites to a central system over supported communication links. |
| `/software/census/` | **Census** | Video Analytics | Analyses camera feeds to detect, count, and classify people or vehicles where supported. |

### Corporate & Support Routes
| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero with company positioning, two CTAs (`Explore Products` & `Discover Our Solutions`), featured hardware, 9 software solutions, hardware/software synergy matrix, 9 industrial applications, and final RFQ call to action. |
| `/solutions/` | **Solutions & Applications** | Comprehensive mapping of all 9 operational engineering applications to their corresponding software and hardware products. |
| `/about/` | **About Us** | Emertech corporate narrative, Vadodara manufacturing operations, engineering philosophy, and verifiable quality standards. |
| `/contact/` | **Contact & Enquiries** | Validated enquiry form supporting DCN & Heat Controller, all 9 software solutions, and General Enquiry with direct mailto generation and configurable CRM webhook. |
| `/404` | **Custom 404** | Accessible fallback page with direct navigation back to core catalogue routes. |

---

## 📝 How to Add or Edit Content

### 1. Hardware Product
All hardware content is located in `src/data/products.ts` under `DCN_HEAT_CONTROLLER`. Specifications, features, and applications can be edited directly.

### 2. Software Products
All 9 software solutions are structured in `src/data/software.ts` under `SOFTWARE_PRODUCTS`. Each product supports:
- `slug` & `route`
- `name` & `purpose`
- `problem` statement
- `coreCapabilities`
- `howItWorks` & `workflow` (steps 01 to 04)
- `applications`
- `hardwareIntegration`
- `technicalSpecifications`
- `relatedProducts`

---

## 📬 Contact Form Configuration

The website is 100% static:

1. **Default Mode (Zero Setup)**: Clicking submit validates the inputs and opens the user's default email client (Outlook, Apple Mail, Gmail) pre-addressed to `emertechelectronics@gmail.com` with formatted parameters.
2. **Automated Webhook / CRM Mode**: To connect to a lead capture webhook (Formspree, HubSpot, Make, Zapier):
   - Click the **"Settings"** icon on the contact form.
   - Enter your endpoint URL (e.g. `https://formspree.io/f/your_form_id`).
   - The form will asynchronously POST JSON data directly to the endpoint.

---

## 🚀 Installation & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Starts local server on `http://localhost:3000`.

### 3. Run Unit Tests
```bash
npx --yes tsx --test src/utils/product-utils.test.ts
```

### 4. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in `dist/`.

---

## 🏢 Company Contact Information

- **Company**: Emertech Electrical Systems
- **Location**: Vadodara, Gujarat, India
- **Email**: `emertechelectronics@gmail.com`
- **Phone**: `+91-8320845947`
- **Operating Hours**: Monday – Saturday, 9:00 AM – 6:30 PM IST
- **Official Brochure**: Attached in `/public/assets/aistudio/Emertech_Brochure_881bad62.pdf`
