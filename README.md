# CORPHUB SOLUTION

<div align="center">

![CORPHUB SOLUTION Logo](public/assets/logo/logo-horizontal.png)

### **Industrial Project Support Services — Palanpur, Banaskantha, Gujarat**
*Your Project. Our Responsibility.*

[![Website](https://img.shields.io/badge/Website-corphubsolution.in-FF6B00?style=for-the-badge&logo=google-chrome&logoColor=white)](https://corphubsolution.in)
[![React](https://img.shields.io/badge/React-19.2-071C3C?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-0A2E56?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-123B70?style=for-the-badge)](LICENSE)

[**Live Website**](https://corphubsolution.in) • [**Services**](https://corphubsolution.in/#services) • [**About Us**](https://corphubsolution.in/about) • [**Get a Quote**](https://corphubsolution.in/contact)

</div>

---

## 📌 About CORPHUB SOLUTION

**CORPHUB SOLUTION** is an integrated industrial project support partner headquartered in **Palanpur, Banaskantha District, Gujarat, India**. 

Large engineering, infrastructure, and industrial manufacturing projects often face major operational friction coordinating multiple regional vendors for workforce living, transport rosters, site consumables, and contractor compliance. CORPHUB SOLUTION eliminates this chaos by providing a **single-window execution model** across five critical operational services under one coordinated SLA.

---

## 🛠️ The 5 Core Specialized Services

| Service | Route | Overview |
| :--- | :--- | :--- |
| **🏢 Workforce Accommodation** | [`/services/accommodation`](https://corphubsolution.in/services/accommodation) | Turnkey corporate guest houses, fully furnished flats for engineers, and hygienic scalable technician housing near industrial sites. Includes lease management and utilities. |
| **🚐 Corporate & Site Transport** | [`/services/transport`](https://corphubsolution.in/services/transport) | 24/7 employee transit, airport transfers, executive car rentals, and rugged project-site vehicle fleets with commercially licensed drivers. |
| **📦 Industrial Material Supply** | [`/services/material-supply`](https://corphubsolution.in/services/material-supply) | On-demand procurement of construction consumables, PPE safety gear, industrial cables, pipes, and generator/machinery rentals. |
| **🤝 Vendor Management & Liaison** | [`/services/vendor-management`](https://corphubsolution.in/services/vendor-management) | Contractor vetting, commercial rate negotiation, SLA compliance tracking, dispute resolution, and local ground administration. |
| **🎉 Corporate Event Management** | [`/services/event-management`](https://corphubsolution.in/services/event-management) | Turnkey execution for plant inaugurations, Bhoomi Pujan ceremonies, corporate annual meets, vendor summits, and HSE safety workshops. |

---

## 🚀 Key Engineering & Technical Features

### 1. Ultra-Fast Core Web Vitals & Asset Optimization
- **Next-Gen WebP Photography**: All high-resolution industrial hero images converted to modern WebP with `<picture>` fallback tags, slashing total media transfer by **75.1%** (from ~7.4 MB to ~1.8 MB).
- **Sub-10 kB Main Entry**: Monolithic JavaScript entry bundle reduced from `251 KB` to **`34.7 KB`** (**`9.18 KB` gzipped**) via granular Rollup chunking (`vendor-react`, `vendor-router`, `vendor-icons`).
- **Zero Cumulative Layout Shift (CLS = 0.00)**: All image, logo, and container tags enforce intrinsic `width`, `height`, and aspect-ratio dimensions.
- **LCP Acceleration**: Primary above-the-fold hero image (`hero-home.webp`) preloaded in `<head>` with `fetchpriority="high"`.
- **Display=Swap Google Fonts**: Pruned down to essential weights (`Barlow Condensed:700,800`, `Barlow:500,600,700`, `Inter:400,500,600`) with preconnected Google CDN endpoints.

### 2. Advanced Technical SEO & Structured Data
- **Centralized SEO Architecture**: Dynamic per-route metadata powered by `react-helmet-async` through a type-safe [`<SEO />`](src/components/seo/SEO.tsx) component.
- **Valid JSON-LD Schemas**:
  - `LocalBusiness` base schema anchored to **Palanpur, Gujarat** (`24.1724° N, 72.4346° E`).
  - Dynamic `Service` schemas linking to the verified provider.
  - Dynamic `BreadcrumbList` schemas reflecting visible navigation hierarchy.
- **Production Directives**: Pre-configured [`robots.txt`](public/robots.txt), [`sitemap.xml`](public/sitemap.xml) with 10 canonical URLs, and OpenGraph/Twitter card previews.

### 3. Luxury B2B Aesthetic & Micro-Interactions
- Curated color palette: Deep Corporate Navy (`#071C3C`, `#0A2E56`), High-Energy Industrial Orange (`#FF6B00`), and Clean Off-White (`#F3F7FA`).
- **Interactive Header Navigation**: Instant hover detection on *Services* with a smooth 200ms debounce buffer and an ultra-premium glassmorphic dropdown card.
- **Sliding Gradient Indicators**: Nav links feature expanding orange-amber underline accents and glass pill hover states.
- **WhatsApp Instant RFP Flow**: Direct 1-click WhatsApp quote generator (`+91 9157060290`) with pre-structured inquiry templates.
- **Reduced Motion Support**: Built-in `@media (prefers-reduced-motion)` rules adhering to WCAG 2.2 accessibility standards.

---

## 📁 Repository Structure

```text
corphubsolution/
├── public/
│   ├── assets/
│   │   ├── images/          # WebP & JPEG optimized hero photographs
│   │   └── logo/            # 2x Retina cropped branding logos & emblems
│   ├── _headers             # Production Cache-Control (1-year immutable) & security headers
│   ├── _redirects           # SPA 200 rewrite fallback & 301 domain redirects
│   ├── favicon.ico          # Multi-size favicon
│   ├── favicon.svg          # Modern SVG icon
│   ├── robots.txt           # Crawl directives & sitemap pointer
│   └── sitemap.xml          # Canonical XML index of all 10 pages
├── src/
│   ├── assets/              # Static SVG and icons
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout wrapper
│   │   ├── sections/        # PageHero, EnquiryCTA, IndustriesGrid
│   │   ├── seo/             # SEO.tsx (Helmet, canonicals, JSON-LD schemas)
│   │   └── ui/              # Button, ServiceCard, ScrollReveal, Breadcrumb
│   ├── data/
│   │   ├── contact.ts       # Verified company contact details
│   │   └── services.ts      # Service descriptions, taglines, and icons
│   ├── hooks/               # useScrollReveal.ts
│   ├── pages/
│   │   ├── services/        # 5 Individual service showcase pages
│   │   ├── AboutPage.tsx    # Company origins & operational ethos
│   │   ├── ContactPage.tsx  # Operations desk inquiry form & direct phone
│   │   ├── HomePage.tsx     # Hero, core value propositions, and service matrix
│   │   ├── NotFoundPage.tsx # 404 handler with noindex directive
│   │   ├── PrivacyPage.tsx  # Privacy policy
│   │   └── TermsPage.tsx    # Commercial terms & conditions
│   ├── utils/
│   │   └── whatsapp.ts      # Structured WhatsApp inquiry link builder
│   ├── App.tsx              # Code-split router configuration
│   ├── index.css            # Design tokens, typography, and utility classes
│   └── main.tsx             # React application entry point
├── index.html               # Fallback metadata, font preconnects & LCP preloads
├── package.json             # Dependencies & build scripts
├── PERFORMANCE_AUDIT.md     # Initial baseline inspection & metrics
├── PERFORMANCE_REPORT.md    # Post-optimization benchmarks & audit
├── PROJECT_PLAN.md          # SEO keyword research & roadmap worksheet
├── tailwind.config.js       # Brand color palette & typography tokens
├── vercel.json              # Vercel SPA routing and caching configuration
└── vite.config.ts           # Rollup manualChunks & build optimization
```

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/corphubsolution/corphubsolution.git
   cd corphubsolution
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run static code analysis (Linter):**
   ```bash
   npm run lint
   ```

5. **Generate a production build:**
   ```bash
   npm run build
   ```

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Production Deployment

The project is pre-configured for automated deployment on all major static/serverless hosting platforms:

### Vercel
Deploy seamlessly via GitHub integration. The included [`vercel.json`](vercel.json) automatically enforces:
- Clean URLs and SPA single-page routing (`/* -> /index.html`).
- Long-term immutable caching (`max-age=31536000, immutable`) for `/assets/*`.
- HTTP Security Headers (`X-Frame-Options: SAMEORIGIN`, `nosniff`, `Referrer-Policy`).

### Netlify / Cloudflare Pages
The repository includes:
- [`public/_redirects`](public/_redirects): Handles deep-linking SPA route refreshes and 301 domain redirects to `https://corphubsolution.in`.
- [`public/_headers`](public/_headers): Applies production cache expiration and HTTP security headers.

---

## 📞 Company Contact & Verification

- **Legal Business Name**: CORPHUB SOLUTION
- **Official Domain**: [https://corphubsolution.in](https://corphubsolution.in)
- **Headquarters**: Palanpur, Banaskantha District, Gujarat, India
- **Operations Desk Phone**: [+91 9157060290](tel:+919157060290)
- **WhatsApp Inquiries**: [+91 9157060290](https://wa.me/919157060290)
- **Official Email**: [corphubsolution@gmail.com](mailto:corphubsolution@gmail.com)

---

<div align="center">
  <p>© 2026 CORPHUB SOLUTION. All Rights Reserved.</p>
</div>
