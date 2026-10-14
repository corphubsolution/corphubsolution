import Breadcrumb from '../ui/Breadcrumb';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  size?: 'sm' | 'md' | 'lg';
}

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumbs = [],
  size = 'md',
}: PageHeroProps) {
  const heightClass = size === 'sm' ? 'min-h-[280px]' : size === 'lg' ? 'min-h-[500px]' : 'min-h-[360px]';

  const webpImage = image.endsWith('.jpg') ? image.replace(/\.jpg$/, '.webp') : image;

  return (
    <section
      className={`relative flex items-end ${heightClass} overflow-hidden`}
      aria-labelledby="page-hero-title"
    >
      {/* Background image with modern WebP and JPEG fallback */}
      <picture className="absolute inset-0 w-full h-full">
        {webpImage !== image && <source srcSet={webpImage} type="image/webp" />}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          width={1376}
          height={768}
          fetchPriority="high"
        />
      </picture>
      {/* Overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="container-site relative z-10 py-12">
        {breadcrumbs.length > 0 && (
          <div className="mb-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}
        {subtitle && (
          <p
            className="section-label section-label--light mb-3"
            style={{ marginBottom: '0.75rem' }}
          >
            {subtitle}
          </p>
        )}
        <h1
          id="page-hero-title"
          className="font-display text-white"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
