import SEO from '../components/seo/SEO';
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Headphones, MapPin } from 'lucide-react';
import { SERVICES } from '../data/services';
import { buildEnquiryLink } from '../utils/whatsapp';
import ServiceCard from '../components/ui/ServiceCard';
import SectionLabel from '../components/ui/SectionLabel';
import ScrollReveal from '../components/ui/ScrollReveal';
import IndustriesGrid from '../components/sections/IndustriesGrid';
import EnquiryCTA from '../components/sections/EnquiryCTA';
import Button from '../components/ui/Button';

const WHY_US = [
  {
    icon: ShieldCheck,
    title: 'Single-Window Solutions',
    desc: 'All five project support services through one coordinated partner — less overhead for your team.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    desc: 'Operating out of Palanpur, we understand the regional supplier landscape, transport routes, and accommodation markets.',
  },
  {
    icon: Clock,
    title: 'Project-Stage Focus',
    desc: 'Flexible arrangements matched to your project timeline — from mobilisation through to completion.',
  },
  {
    icon: Headphones,
    title: 'Responsive Coordination',
    desc: 'A dedicated point of contact to handle requirements and follow-ups so you can focus on the project.',
  },
];

export default function HomePage() {
  const whatsappLink = buildEnquiryLink();

  return (
    <>
      <SEO
        title="CORPHUB SOLUTION — Industrial Support Services | Palanpur, Gujarat"
        description="Industrial project support in Palanpur, Gujarat: workforce housing, site transport, material supply, vendor management & corporate event logistics."
        canonicalPath="/"
        ogImage="/assets/images/hero-home.jpg"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="home-hero-heading"
      >
        {/* Background with WebP and JPG fallback */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/assets/images/hero-home.webp" type="image/webp" />
          <img
            src="/assets/images/hero-home.jpg"
            alt="Industrial facility at sunset representing CORPHUB SOLUTION's project support services"
            className="w-full h-full object-cover"
            width={1376}
            height={768}
            fetchPriority="high"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true" />

        {/* Hero content */}
        <div className="container-site relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="section-label section-label--light mb-6 inline-block">
              Industrial Project Support
            </span>

            <h1
              id="home-hero-heading"
              className="font-display text-white mb-4"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
              }}
            >
              Your Project.
              <br />
              <span style={{ color: '#FF6B00' }}>Our Responsibility.</span>
            </h1>

            <p
              className="text-lg mb-3 font-heading font-medium"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              One Partner. Five Essential Solutions.
            </p>
            <p
              className="mb-10 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.7 }}
            >
              We handle accommodation, transport, material supply, vendor management, and event coordination for industrial projects across Gujarat — so your team can stay focused on the work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={whatsappLink}
                variant="whatsapp"
                size="lg"
                external
                id="hero-whatsapp-btn"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Enquire on WhatsApp
              </Button>
              <Button to="/services/accommodation" variant="outline-white" size="lg" id="hero-explore-btn">
                Explore Services
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div
            className="w-px h-10 animate-pulse"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,107,0,0.8))' }}
          />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: '#F3F7FA' }}
        aria-labelledby="services-heading"
      >
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Our Services</SectionLabel>
              <h2
                id="services-heading"
                className="font-heading mt-2"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#071C3C' }}
              >
                Five Services. One Partner.
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: '#6B7A8D' }}>
                From the moment your project mobilises to the final handover, CORPHUB SOLUTION is your integrated support partner.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <ServiceCard
                  icon={service.icon}
                  name={service.name}
                  description={service.tagline}
                  slug={service.slug}
                  index={i}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CORPHUB ──────────────────────────────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: '#071C3C' }}
        aria-labelledby="why-heading"
      >
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <ScrollReveal>
              <SectionLabel variant="light">Why Choose Us</SectionLabel>
              <h2
                id="why-heading"
                className="font-heading text-white mt-2 mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 700 }}
              >
                Built for Industrial Projects. Focused on Reliability.
              </h2>
              <p className="mb-8" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Industrial projects demand reliable, coordinated support. CORPHUB SOLUTION provides a single point of accountability across your key project infrastructure needs.
              </p>
              <Button
                to="/about"
                variant="outline"
                id="why-learn-more-btn"
              >
                About CORPHUB SOLUTION
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
            </ScrollReveal>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US.map(({ icon: Icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 80}>
                  <div
                    className="p-5 rounded-md"
                    style={{ background: '#0A2E56', border: '1px solid #123B70' }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center mb-3"
                      style={{ background: 'rgba(255,107,0,0.12)' }}
                      aria-hidden="true"
                    >
                      <Icon size={20} style={{ color: '#FF6B00' }} />
                    </div>
                    <h3
                      className="font-heading font-bold text-white text-sm mb-1"
                    >
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────────── */}
      <IndustriesGrid dark={true} />

      {/* ── ABOUT SNAPSHOT ───────────────────────────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'white' }}
        aria-labelledby="about-snap-heading"
      >
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal>
              <div className="relative rounded-md overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <picture className="w-full h-full block">
                  <source srcSet="/assets/images/about-team.webp" type="image/webp" />
                  <img
                    src="/assets/images/about-team.jpg"
                    alt="CORPHUB SOLUTION team reviewing project plans"
                    className="w-full h-full object-cover"
                    width={1376}
                    height={768}
                    loading="lazy"
                  />
                </picture>
                {/* Orange corner accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: '#FF6B00' }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={100}>
              <SectionLabel>About Us</SectionLabel>
              <h2
                id="about-snap-heading"
                className="font-heading mt-2 mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 700, color: '#071C3C' }}
              >
                Your Project Support Partner in Gujarat
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: '#6B7A8D', fontSize: '0.95rem' }}>
                CORPHUB SOLUTION is a Gujarat-based company providing integrated project support services for industrial and infrastructure projects. We coordinate accommodation, transport, material supply, vendor management, and event arrangements — so project teams can focus on what matters most.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: '#6B7A8D', fontSize: '0.95rem' }}>
                Operating from Palanpur, Banaskantha, we bring local knowledge and a coordinated approach to every project we support.
              </p>
              <Button to="/about" variant="navy" id="about-learn-more-btn">
                Learn About Us
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ─────────────────────────────────────────────────────── */}
      <EnquiryCTA
        heading="Ready to Support Your Project?"
        subtext="Reach out today — we'll respond within 1 business day."
      />
    </>
  );
}
