import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
  };
}

const SITE_URL = 'https://corphubsolution.in';
const DEFAULT_IMAGE = '/assets/images/hero-home.jpg';
const LOGO_URL = `${SITE_URL}/assets/logo/logo-main.png`;

export default function SEO({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false,
  breadcrumbs,
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

  // Organization / LocalBusiness Schema (Always included as base)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'CORPHUB SOLUTION',
    legalName: 'CORPHUB SOLUTION',
    url: SITE_URL,
    logo: LOGO_URL,
    image: imageUrl,
    telephone: '+919157060290',
    email: 'corphubsolution@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palanpur',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.1724',
      longitude: '72.4346',
    },
    areaServed: [
      { '@type': 'City', name: 'Palanpur' },
      { '@type': 'AdministrativeArea', name: 'Banaskantha' },
      { '@type': 'AdministrativeArea', name: 'Gujarat' },
    ],
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

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large" />}

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
    </Helmet>
  );
}
