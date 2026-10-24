import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[] | string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faqSchema?: FAQItem[];
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
  };
}

const SITE_URL = 'https://corphubsolution.vercel.app';
const DEFAULT_IMAGE = '/assets/images/home.png';
const LOGO_URL = `${SITE_URL}/assets/logo/logo-main.png`;

export default function SEO({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false,
  breadcrumbs,
  faqSchema,
  serviceSchema,
}: SEOProps) {
  // Canonical strictly points to the preferred production domain to prevent duplicate indexing across Vercel preview URLs
  const canonicalUrl = canonicalPath.startsWith('http')
    ? canonicalPath
    : `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  // Dynamic host adaptation: allows share previews to work on Vercel preview URLs even before DNS is pointed
  const activeOrigin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : SITE_URL;

  const imageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${activeOrigin}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // WebSite Schema for Brand Recognition & Search Sitelinks across Gujarat
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'CORPHUB SOLUTION',
    alternateName: [
      'CorpHub Solution',
      'CorpHub',
      'Corp Hub Solution',
      'Corphub Solution Gujarat',
      'CORPHUB SOLUTION GUJARAT',
      'CorpHub Solution Palanpur'
    ],
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  // Organization / LocalBusiness Schema (Always included as base)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'CORPHUB SOLUTION',
    legalName: 'CORPHUB SOLUTION',
    alternateName: [
      'CorpHub Solution',
      'CorpHub',
      'Corp Hub Solution',
      'Corphub Solution Gujarat'
    ],
    slogan: 'Your Project. Our Responsibility.',
    description: 'Premier B2B corporate and industrial project support partner across Gujarat. We coordinate accommodation, transportation, material supply, vendor management, and event management for industrial companies, EPC firms, and contractors.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: imageUrl,
    telephone: '+919157060290',
    email: 'corphubsolution@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Bank Transfer, Cheque, Online',
    sameAs: [
      'https://www.instagram.com/corphub_solution/'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palanpur',
      addressRegion: 'Gujarat',
      postalCode: '385001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.1724',
      longitude: '72.4346',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Gujarat' },
      // 1. Ahmedabad - Sanand Belt
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Sanand' },
      { '@type': 'City', name: 'Changodar' },
      { '@type': 'City', name: 'Bavla' },
      { '@type': 'City', name: 'Naroda' },
      { '@type': 'City', name: 'Odhav' },
      { '@type': 'City', name: 'Vatva' },
      { '@type': 'City', name: 'Kadi' },
      { '@type': 'City', name: 'Chhatral' },
      { '@type': 'City', name: 'Kalol' },
      { '@type': 'City', name: 'Dholka' },
      { '@type': 'City', name: 'Becharaji' },
      { '@type': 'City', name: 'Mandal' },
      // 2. Vadodara - Halol Belt
      { '@type': 'City', name: 'Vadodara' },
      { '@type': 'City', name: 'Halol' },
      { '@type': 'City', name: 'Makarpura' },
      { '@type': 'City', name: 'Nandesari' },
      { '@type': 'City', name: 'Savli' },
      { '@type': 'City', name: 'Manjusar' },
      { '@type': 'City', name: 'Waghodia' },
      { '@type': 'City', name: 'Padra' },
      // 3. Bharuch - Ankleshwar - Dahej Belt
      { '@type': 'City', name: 'Bharuch' },
      { '@type': 'City', name: 'Ankleshwar' },
      { '@type': 'City', name: 'Dahej' },
      { '@type': 'City', name: 'Panoli' },
      { '@type': 'City', name: 'Jhagadia' },
      { '@type': 'City', name: 'Vilayat' },
      { '@type': 'City', name: 'Palej' },
      { '@type': 'City', name: 'Saykha' },
      // 4. Surat - Vapi Belt
      { '@type': 'City', name: 'Surat' },
      { '@type': 'City', name: 'Vapi' },
      { '@type': 'City', name: 'Hazira' },
      { '@type': 'City', name: 'Sachin' },
      { '@type': 'City', name: 'Pandesara' },
      { '@type': 'City', name: 'Palsana' },
      { '@type': 'City', name: 'Kadodara' },
      { '@type': 'City', name: 'Sarigam' },
      { '@type': 'City', name: 'Umbergaon' },
      // 5. Rajkot - Morbi - Jamnagar Belt
      { '@type': 'City', name: 'Rajkot' },
      { '@type': 'City', name: 'Morbi' },
      { '@type': 'City', name: 'Jamnagar' },
      { '@type': 'City', name: 'Wankaner' },
      { '@type': 'City', name: 'Gondal' },
      { '@type': 'City', name: 'Jetpur' },
      // 6. Kutch - Gandhidham Belt
      { '@type': 'City', name: 'Kutch' },
      { '@type': 'City', name: 'Gandhidham' },
      { '@type': 'City', name: 'Mundra' },
      { '@type': 'City', name: 'Kandla' },
      { '@type': 'City', name: 'Anjar' },
      { '@type': 'City', name: 'Bhuj' },
      { '@type': 'City', name: 'Bhachau' },
      // 7. North Gujarat Belt
      { '@type': 'AdministrativeArea', name: 'Banaskantha' },
      { '@type': 'City', name: 'Palanpur' },
      { '@type': 'City', name: 'Mehsana' },
      { '@type': 'City', name: 'Deesa' },
      { '@type': 'City', name: 'Visnagar' },
      { '@type': 'City', name: 'Himatnagar' },
      { '@type': 'City', name: 'Idar' },
      { '@type': 'City', name: 'Gandhinagar' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial Support Services in Gujarat',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate & Industrial Accommodation Solutions',
            url: `${SITE_URL}/services/accommodation`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Customized Corporate Transportation Solutions',
            url: `${SITE_URL}/services/transport`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Material Sourcing & Supply',
            url: `${SITE_URL}/services/material-supply`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Vendor Management & Site Liaison',
            url: `${SITE_URL}/services/vendor-management`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate & Industrial Event Management',
            url: `${SITE_URL}/services/event-management`,
          },
        },
      ],
    },
  };

  // Breadcrumbs Schema if provided
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.label,
        item: crumb.href
          ? crumb.href.startsWith('http')
            ? crumb.href
            : `${SITE_URL}${crumb.href.startsWith('/') ? crumb.href : `/${crumb.href}`}`
          : canonicalUrl,
      })),
    };
  }

  // Service Schema if provided
  let serviceJsonLd = null;
  if (serviceSchema) {
    serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceSchema.name,
      description: serviceSchema.description,
      serviceType: serviceSchema.serviceType,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Gujarat',
      },
    };
  }

  // FAQPage Schema if provided
  let faqJsonLd = null;
  if (faqSchema && faqSchema.length > 0) {
    faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqSchema.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="CORPHUB SOLUTION" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* WebSite Brand JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Base Organization / LocalBusiness JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Optional Breadcrumb JSON-LD */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Optional Service JSON-LD */}
      {serviceJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(serviceJsonLd)}
        </script>
      )}

      {/* Optional FAQPage JSON-LD */}
      {faqJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      )}
    </Helmet>
  );
}
