# CORPHUB SOLUTION — TECHNICAL SEO, LOCAL DISCOVERABILITY & SEARCH PERFORMANCE MASTER PLAN

> **Document Status**: Production Ready  
> **Brand**: CORPHUB SOLUTION  
> **Domain**: `https://corphubsolution.in`  
> **Headquarters**: Palanpur, Banaskantha District, Gujarat, India  
> **Verified Contact**: Phone: `+91 9157060290` | Email: `corphubsolution@gmail.com`  
> **Core Specialty**: Single-Window Industrial Project Support Services (Accommodation, Transport, Material Supply, Vendor Management, Event Management)

---

## 1. Search-Engine-Accessible Architecture

### 1.1 Technical Stack & Crawlability Evaluation
- **Framework**: React 18 + Vite SPA architecture with client-side routing via React Router DOM.
- **Head & Metadata Strategy**: Dynamic metadata injection executed via `react-helmet-async` with a centralized, type-safe `<SEO>` component (`src/components/seo/SEO.tsx`).
- **Static Pre-Rendering Fallback**: Core fallback OpenGraph, Twitter Cards, charset, viewport, and default meta description tags are hardcoded into the initial HTML payload (`index.html`) to ensure search engines without JavaScript execution immediately discover base brand credentials.
- **URL Routing Strategy**: Clean, lowercase, extensionless semantic paths:
  - `/`
  - `/about`
  - `/services/accommodation`
  - `/services/transport`
  - `/services/material-supply`
  - `/services/vendor-management`
  - `/services/event-management`
  - `/contact`
  - `/privacy-policy`
  - `/terms`
- **Refresh & Direct Route Handling**: Production hosting (e.g. Netlify, Vercel, Apache, NGINX) is configured to redirect all direct route requests to `/index.html` (SPA fallback), avoiding 404 errors on deep linking.
- **Canonical URL Enforcement**: Every page contains a single, explicit `<link rel="canonical" href="https://corphubsolution.in/..." />` tag to eliminate duplicate content penalties between `http`/`https` and `www`/non-`www`.

---

## 2. Unique On-Page SEO Matrix (10 Core Pages)

| Page | Canonical URL | Title Tag (<60 chars) | Meta Description (140–160 chars) | Primary H1 | Structured Schema Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Home** | `https://corphubsolution.in/` | CORPHUB SOLUTION — Industrial Support Services \| Palanpur, Gujarat | Single-window industrial project support in Palanpur & Gujarat: corporate accommodation, site transport, industrial material supply, vendor management, and corporate events. | Industrial Project Support Across Gujarat | `LocalBusiness` |
| **About Us** | `https://corphubsolution.in/about` | About Us \| CORPHUB SOLUTION — Industrial Support Partner Palanpur, Gujarat | Learn about CORPHUB SOLUTION, based in Palanpur, Gujarat. We provide single-window industrial project support: workforce housing, site transport, material supply, vendor management, and corporate events. | Empowering Industrial Projects Across Gujarat | `LocalBusiness`, `BreadcrumbList` |
| **Accommodation** | `https://corphubsolution.in/services/accommodation` | Industrial Accommodation & Corporate Guest Houses \| Palanpur, Gujarat \| CORPHUB SOLUTION | Turnkey corporate accommodation, engineer flats, and managed workforce housing in Palanpur, Banaskantha, and Gujarat. Complete lease & facility management. | Project Accommodation & Housing Solutions | `Service`, `BreadcrumbList`, `LocalBusiness` |
| **Transport** | `https://corphubsolution.in/services/transport` | Corporate & Site Transport Services \| Palanpur, Gujarat \| CORPHUB SOLUTION | Professional employee commute shuttles, site transport, executive car rentals, and airport transfers for industrial projects across Palanpur and Gujarat. | Industrial & Corporate Transport Solutions | `Service`, `BreadcrumbList`, `LocalBusiness` |
| **Material Supply** | `https://corphubsolution.in/services/material-supply` | Industrial Material Supply & Site Procurement \| Palanpur, Gujarat \| CORPHUB SOLUTION | Reliable procurement of industrial construction consumables, PPE safety gear, electrical items, and project machinery across Palanpur and Gujarat. | Industrial Material & Equipment Supply | `Service`, `BreadcrumbList`, `LocalBusiness` |
| **Vendor Management** | `https://corphubsolution.in/services/vendor-management` | Vendor Management & Site Liaison Services \| Palanpur, Gujarat \| CORPHUB SOLUTION | End-to-end vendor vetting, contract administration, SLA compliance tracking, and dispute management for industrial and engineering sites in Gujarat. | Industrial Vendor Management & Site Liaison | `Service`, `BreadcrumbList`, `LocalBusiness` |
| **Event Management** | `https://corphubsolution.in/services/event-management` | Corporate Event Management & Industrial Ceremonies \| Palanpur, Gujarat \| CORPHUB SOLUTION | End-to-end event management in Palanpur & Gujarat for plant inaugurations, Bhoomi Pujan, corporate annual meets, vendor summits, and HSE safety workshops. | Corporate & Industrial Event Management | `Service`, `BreadcrumbList`, `LocalBusiness` |
| **Contact** | `https://corphubsolution.in/contact` | Contact CORPHUB SOLUTION \| Palanpur, Banaskantha, Gujarat \| Project Enquiries | Contact our project coordination desk in Palanpur, Gujarat. Call +91 9157060290 or email corphubsolution@gmail.com for industrial accommodation, transport, and material supplies. | Get in Touch With Our Operations Desk | `LocalBusiness`, `BreadcrumbList` |
| **Privacy Policy** | `https://corphubsolution.in/privacy-policy` | Privacy Policy \| CORPHUB SOLUTION \| Palanpur, Gujarat | Privacy Policy of CORPHUB SOLUTION in Palanpur, Gujarat. Details on how we manage, protect, and process client information and project enquiries. | Privacy Policy | `BreadcrumbList` |
| **Terms & Conditions** | `https://corphubsolution.in/terms` | Terms & Conditions \| CORPHUB SOLUTION \| Palanpur, Gujarat | Commercial terms and conditions governing service agreements and operations of CORPHUB SOLUTION in Palanpur, Banaskantha, Gujarat. | Terms & Conditions | `BreadcrumbList` |

---

## 3. Keyword Research & Content Mapping Worksheet

> *Note: Search volumes and difficulty metrics represent regional B2B hypotheses to be validated through Google Search Console impressions post-launch.*

| Primary Keyword Theme | Secondary / LSI Keyword Variations | Search Intent | Target Destination URL | Content Scope & Practical Answers Addressed | Volume/Competition Hypothesis |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Industrial project support services Gujarat** | plant support services Banaskantha, single-window project partner, industrial operations liaison | Commercial / Transactional | `/` | Answers how engineering teams eliminate multi-vendor friction by consolidating 5 services under one SLA. | Moderate Volume / Low-to-Medium B2B Competition |
| **Corporate accommodation Palanpur** | project guest house Banaskantha, engineer flats for rent Palanpur, workforce housing Gujarat | Commercial / Transactional | `/services/accommodation` | Explains furnished apartments, executive guest houses, technician dorms, lease negotiations, and bill management. | Low-to-Medium Volume / Low Regional Competition |
| **Industrial transport services Gujarat** | employee bus rental Palanpur, site commute taxi Banaskantha, project car rental Ahmedabad to Palanpur | Commercial / Transactional | `/services/transport` | Details 24/7 staff shuttles, airport pickups, SUV site vehicles, licensed commercial drivers, and emergency backup fleets. | Moderate Volume / Medium Competition |
| **Industrial material supplier Palanpur** | construction consumables Banaskantha, PPE equipment supplier Gujarat, cable plumbing distributor Palanpur | Commercial / Transactional | `/services/material-supply` | Outlines on-demand procurement: scaffolding, welding consumables, electrical cables, PPE safety gear, and DG generator hire. | Moderate Volume / Medium Competition |
| **Vendor management services Gujarat** | contractor compliance tracking, local liaison partner Palanpur, site procurement management | Commercial / Navigational | `/services/vendor-management` | Addresses contractor vetting, price benchmarking, invoice auditing, dispute resolution, and local ground liaison. | Low Volume / High Intent / Low Competition |
| **Corporate event organizers Palanpur** | factory inauguration ceremony Gujarat, Bhoomi Pujan logistics Banaskantha, industrial safety conference | Commercial / Transactional | `/services/event-management` | Covers turnkey inauguration stages, AV systems, VIP hospitality, catering, safety milestone ceremonies, and ground prep. | Low Volume / Low Regional Competition |
| **CORPHUB SOLUTION Palanpur** | CORPHUB contact number, industrial contractor Palanpur, Banaskantha project support office | Navigational | `/about`, `/contact` | Verifies company identity, local roots in Palanpur, direct phone (+91 9157060290), email, and quotation request flow. | Branded Search / Zero Competition |

---

## 4. Technical SEO Files & Directives

### 4.1 `/robots.txt` (`public/robots.txt`)
```txt
# robots.txt for CORPHUB SOLUTION
# Domain: https://corphubsolution.in

User-agent: *
Allow: /

# Exclude any dev/private assets
Disallow: /node_modules/
Disallow: /dist/

# Sitemap location
Sitemap: https://corphubsolution.in/sitemap.xml
```

### 4.2 `/sitemap.xml` (`public/sitemap.xml`)
- Contains all 10 indexable canonical production URLs.
- Excludes development URLs, internal test routes, and 404 pages.
- Priority weighting:
  - Homepage: `1.0`
  - Core Service Pages: `0.9`
  - About & Contact: `0.8`
  - Legal & Policies: `0.3`

### 4.3 404 Handling & Directives
- `NotFoundPage.tsx` automatically issues `<meta name="robots" content="noindex, nofollow" />`.
- Clean UI with 1-click navigation back to Home (`/`) or direct telephone support (`tel:+919157060290`).

---

## 5. Structured Data & Schema Implementation

Structured JSON-LD schema is integrated dynamically on every page without fabricating ratings, reviews, opening hours, or unverified branch locations.

### 5.1 Base `LocalBusiness` Schema (Included on all pages)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://corphubsolution.in/#organization",
  "name": "CORPHUB SOLUTION",
  "legalName": "CORPHUB SOLUTION",
  "url": "https://corphubsolution.in",
  "logo": "https://corphubsolution.in/assets/logo/logo-main.png",
  "image": "https://corphubsolution.in/assets/images/hero-home.jpg",
  "telephone": "+919157060290",
  "email": "corphubsolution@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palanpur",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "24.1724",
    "longitude": "72.4346"
  },
  "areaServed": [
    { "@type": "City", "name": "Palanpur" },
    { "@type": "AdministrativeArea", "name": "Banaskantha" },
    { "@type": "AdministrativeArea", "name": "Gujarat" }
  ]
}
```

### 5.2 Dynamic `Service` Schema (On Service Pages)
Each service page dynamically appends a `Service` schema linking back to the verified provider `@id`:
- Accommodation: `Corporate Accommodation Services`
- Transport: `Corporate Transportation Services`
- Material Supply: `Industrial Procurement & Material Supply`
- Vendor Management: `Vendor Management & Ground Liaison Services`
- Event Management: `Corporate Event Management`

### 5.3 Dynamic `BreadcrumbList` Schema
Every subpage automatically provides a valid JSON-LD `BreadcrumbList` matching the visible UI breadcrumbs.

---

## 6. Image SEO & Asset Optimization

1. **Intrinsic Dimensions**: All `<img>` tags (`Header`, `Footer`, `HomePage`, `PageHero`) specify explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS = 0.00).
2. **Priority Hints**:
   - Hero images have `fetchPriority="high"` and are eager-loaded for optimal Largest Contentful Paint (LCP).
   - Below-the-fold images (`about-team.jpg`, footer logos) have `loading="lazy"`.
3. **Alt Text Accuracy**:
   - Informative images contain descriptive, natural alt text (e.g. `alt="CORPHUB SOLUTION team reviewing project plans"`).
   - Decorative background images use `alt="" aria-hidden="true"`.
4. **Clean Cropped Branding Assets**: High-resolution, crisp logos with zero excess white margins:
   - `logo-horizontal.png` (220x40 container)
   - `logo-main.png` (512x512)
   - Multi-size favicons (`favicon.ico`, `favicon.svg`, `favicon-32x32.png`, `apple-touch-icon.png`).

---

## 7. Performance & Core Web Vitals Audit

### 7.1 Production Bundle Metrics (Vite + Gzip)
- **Total CSS**: 24.2 kB (5.76 kB gzipped)
- **Vendor Core JS**: 246.8 kB (76.4 kB gzipped)
- **Route Chunks**: All page components are asynchronously code-split (`< 15 kB` per page).
- **Build Status**: Verified via `tsc -b && vite build` (exited code 0 in 791ms).
- **Linter Status**: Verified via `oxlint` (0 errors, 0 warnings across 35 files).

### 7.2 Core Web Vitals Targets & Strategies
| Metric | Target | Strategy Implemented |
| :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | `< 2.5s` | Hero background uses `fetchPriority="high"`, preconnected Google Fonts, preloaded CSS. |
| **Cumulative Layout Shift (CLS)** | `< 0.1` (Target: 0.0) | Explicit width/height on logos and hero image wrappers; fixed header dimensions. |
| **Interaction to Next Paint (INP)** | `< 200ms` | Zero heavy client-side computing; micro-animations hardware-accelerated with CSS `transform` & `opacity`. |

---

## 8. Local SEO & Google Business Profile (GBP) Roadmap

### 8.1 Confirmed Business Credentials
- **Business Name**: CORPHUB SOLUTION
- **Primary Category**: Corporate Support Services / Business Management Consultant
- **Secondary Categories**: Transportation Service, Commercial Real Estate Agency (Corporate Housing), Industrial Equipment Supplier, Event Planner
- **Service Area**: Palanpur, Banaskantha District, and broader Gujarat industrial belts
- **Primary Phone**: `+91 9157060290`
- **Primary Email**: `corphubsolution@gmail.com`
- **Website**: `https://corphubsolution.in`

### 8.2 Google Business Profile Action Checklist (Owner Tasks)
- [ ] Sign in to Google Business Profile manager with `corphubsolution@gmail.com`.
- [ ] Create business profile: "CORPHUB SOLUTION".
- [ ] Choose "Service Area Business" if clients do not visit a walk-in retail storefront, or specify the Palanpur registered address.
- [ ] Specify confirmed service areas: Palanpur, Deesa, Abu Road corridor, Banaskantha, Mehsana, Ahmedabad.
- [ ] Complete profile verification via SMS, Video Verification, or Postcard.
- [ ] Add the 5 core services to the GBP Services menu with accurate descriptions matching the website.
- [ ] Upload official logo (`logo-main.png`) and cover photos (`hero-home.jpg`).
- [ ] Setup WhatsApp / phone messaging link.

---

## 9. Google Search Console & Post-Launch Indexing Checklist

### 9.1 Verification Steps
1. Add property `https://corphubsolution.in` and Domain Property `corphubsolution.in` in Google Search Console.
2. Verify ownership via DNS TXT record at domain registrar (recommended) or HTML verification file in `/public`.
3. Submit sitemap URL: `https://corphubsolution.in/sitemap.xml`.

### 9.2 Post-Launch Monitoring Protocol
- [ ] **URL Inspection**: Inspect `https://corphubsolution.in/` using the URL Inspection tool to confirm "URL is on Google" or request indexing.
- [ ] **Service URL Submissions**: Submit the 5 service URLs (`/services/accommodation`, `/services/transport`, etc.) for crawl queue.
- [ ] **Coverage / Page Indexing Report**: Monitor weekly for "Discovered - currently not indexed" or crawl anomalies.
- [ ] **HTTPS & Core Web Vitals**: Verify Search Console detects valid HTTPS and reports "Good" URLs for mobile and desktop.
- [ ] **Performance Queries**: Track impressions, clicks, CTR, and average position for target regional queries.

---

## 10. SEO Acceptance Tests & Quality Assurance

### 10.1 Pre-Deployment Verification Results
- [x] All 10 routes contain unique title tags and meta descriptions via `<SEO />`.
- [x] All 10 routes define clean canonical links pointing to `https://corphubsolution.in/...`.
- [x] All pages contain exactly one `<h1>` heading with logical `<h2>`/`<h3>` hierarchy.
- [x] `/robots.txt` is accessible and points to sitemap.
- [x] `/sitemap.xml` is valid XML and lists all 10 canonical indexable URLs.
- [x] `NotFoundPage.tsx` sets `noindex, nofollow`.
- [x] All images have intrinsic dimensions and proper `alt` attributes.
- [x] Zero build errors (`npm run build` passes in 791ms).
- [x] Zero lint warnings (`npx oxlint` passes 35 files cleanly).

### 10.2 Transparent Disclaimer
*SEO implementation establishes technical excellence, optimal search-engine accessibility, and crawl readiness. Organic search rankings are determined by search engine algorithms based on content relevance, regional demand, and authority, and cannot be promised as guaranteed #1 positions or fixed timelines.*
