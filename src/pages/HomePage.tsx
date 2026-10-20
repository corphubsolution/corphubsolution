import SEO from '../components/seo/SEO';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Users, 
  Building2,
  Check
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { buildEnquiryLink } from '../utils/whatsapp';
import ServiceCard from '../components/ui/ServiceCard';
import SectionLabel from '../components/ui/SectionLabel';
import ScrollReveal from '../components/ui/ScrollReveal';
import IndustriesGrid from '../components/sections/IndustriesGrid';
import RegionalHubs from '../components/sections/RegionalHubs';
import EnquiryCTA from '../components/sections/EnquiryCTA';
import Button from '../components/ui/Button';

const PILL_FEATURES = [
  { icon: Users, label: 'Single Point of Contact' },
  { icon: Building2, label: 'Project Based Support' },
  { icon: MapPin, label: 'Local Expertise (Gujarat)' },
  { icon: ShieldCheck, label: 'Reliable Coordination' },
  { icon: CheckCircle2, label: 'Cost-Effective Solutions' },
];

export default function HomePage() {
  const whatsappLink = buildEnquiryLink('General Discussion / Corporate Partnership');

  return (
    <>
      <SEO
        title="CORPHUB SOLUTION — Industrial & Corporate Support Services | Gujarat"
        description="Your Project. Our Responsibility. One Partner for Multiple Industrial Requirements. Corporate accommodation, customized transport, material supply, vendor management, and event logistics across Gujarat."
        canonicalPath="/"
        ogImage="/assets/images/home.png"
        keywords={[
          'CorpHub Solution Gujarat',
          'Industrial project support Sanand',
          'Corporate accommodation Ahmedabad',
          'Staff transportation Gandhinagar GIFT City',
          'Industrial material supply Vadodara',
          'Vendor management services Mehsana',
          'Corporate support services Palanpur',
          'Industrial contractor liaison Gujarat',
          'Workforce housing Sanand GIDC',
          'Corporate fleet hire Ahmedabad'
        ]}
        faqSchema={[
          {
            question: 'What services does CorpHub Solution provide for industrial projects in Gujarat?',
            answer: 'CorpHub Solution coordinates corporate accommodation, customized staff transportation, industrial material supply, vendor management, and event management for industrial and corporate projects through a single point of contact.',
          },
          {
            question: 'Which industrial cities and hubs does CorpHub Solution cover in Gujarat?',
            answer: 'We provide active on-ground support across Gujarat’s premier industrial corridors including Sanand (Automotive & Semiconductor GIDC), Ahmedabad (Commercial Centers & Naroda/Changodar), Gandhinagar (GIFT City & IT Parks), Vadodara (Heavy Engineering & Chemical Zones), Mehsana, and Northern Gujarat (Palanpur, Deesa).',
          },
          {
            question: 'How does CorpHub Solution help project managers and visiting engineers?',
            answer: 'We eliminate multi-vendor coordination friction by taking end-to-end accountability for employee housing, project fleet transport, equipment and material sourcing, and vendor compliance.',
          },
        ]}
      />

      {/* ── HERO SECTION (Matching Recommended AFTER Design) ───────────────────── */}
      <section 
        className="pt-24 md:pt-28 pb-12 md:pb-16 bg-white overflow-hidden border-b border-gray-100"
        aria-labelledby="home-hero-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-6 z-10">
              <ScrollReveal>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-3 inline-block">
                  Corporate & Industrial Project Support
                </span>

                <h1
                  id="home-hero-heading"
                  className="font-display text-[#071C3C] mb-3"
                  style={{
                    fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Your Project. <br />
                  <span className="text-[#FF6B00]">Our Responsibility.</span>
                </h1>

                <p className="text-base md:text-lg font-heading font-extrabold text-[#071C3C] mb-3">
                  One Partner for Multiple Industrial Requirements.
                </p>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-8 max-w-xl">
                  We coordinate accommodation, transportation, material supply, vendor management, and event management for industrial projects across Gujarat — so your team can stay focused on what matters most.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="lg"
                    id="hero-quote-btn"
                  >
                    Get a Quote
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>
                  
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
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Industrial Hero Image with Engineers on Right */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={150}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <img
                    src="/assets/images/home.png"
                    alt="CorpHub Solution — Industrial petrochemical complex with engineers coordinating project logistics"
                    className="w-full h-[340px] sm:h-[400px] lg:h-[460px] object-cover object-right group-hover:scale-105 transition-transform duration-700"
                    width={1920}
                    height={800}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Stats Badge on Bottom Right */}
                  <div className="absolute bottom-4 right-4 bg-[#071C3C]/95 backdrop-blur-md text-white border border-white/15 rounded-2xl px-4 py-3 shadow-xl inline-flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">3+ Years</p>
                      <p className="text-[10px] text-white/70">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Feature Pill Strip directly under the hero */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {PILL_FEATURES.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] border border-gray-200/70 hover:border-orange-300 rounded-xl p-3 flex items-center gap-2.5 text-center sm:text-left transition-colors"
                  >
                    <div className="text-[#FF6B00] shrink-0">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-bold text-[#071C3C] leading-snug">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE ESSENTIAL SERVICES SECTION ───────────────────────────────────── */}
      <section
        className="section-py bg-[#F8FAFC]"
        aria-labelledby="services-heading"
      >
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Our Services</SectionLabel>
              <h2
                id="services-heading"
                className="font-heading mt-2 text-[#071C3C]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800 }}
              >
                Five Essential Services. One Trusted Partner.
              </h2>
              <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
              <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto">
                Integrated support for industrial and corporate requirements, customised for your project needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 70}>
                <ServiceCard
                  icon={service.icon}
                  name={service.name}
                  description={service.tagline}
                  slug={service.slug}
                  image={service.heroImage}
                  index={i}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SUPPORT (8 SECTORS) ─────────────────────────────────── */}
      <IndustriesGrid dark={false} />

      {/* ── REGIONAL HUBS (Sanand, Ahmedabad, Gandhinagar, Vadodara, Mehsana) ──── */}
      <RegionalHubs />

      {/* ── ABOUT CORPHUB SOLUTION ───────────────────────────────────────────── */}
      <section
        className="section-py bg-white border-t border-gray-100"
        aria-labelledby="about-snap-heading"
      >
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group aspect-4/3">
                  <img
                    src="/assets/images/home.png"
                    alt="CorpHub Solution engineers coordinating industrial site operations"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ background: '#FF6B00' }}
                    aria-hidden="true"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
                  About CorpHub Solution
                </span>
                
                <h2
                  id="about-snap-heading"
                  className="font-display mb-4 text-[#071C3C]"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800 }}
                >
                  Your Project Support Partner in Gujarat
                </h2>

                <p className="mb-4 leading-relaxed text-gray-600 text-sm md:text-base">
                  We provide integrated project support services for industrial and infrastructure projects, with a focus on reliable coordination, customised solutions and long-term business relationships.
                </p>

                <p className="mb-6 leading-relaxed text-gray-600 text-sm">
                  Headquartered in Palanpur, Banaskantha, our established vendor and logistics network across Gujarat ensures seamless workforce housing, transport, material procurement, and site coordination.
                </p>

                {/* 3 Checkpoint Bullets */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-800">
                      3+ Years of Industry Experience
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-800">
                      Trained & Professional Coordination
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-800">
                      Client-Focused Approach
                    </span>
                  </div>
                </div>

                <Button to="/about" variant="navy" size="lg" id="about-learn-more-btn">
                  Learn More About Us
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CONTACT CTA STRIP (Matching Recommended AFTER Design) ─────────── */}
      <EnquiryCTA
        title="Ready to Support Your Project?"
        subtitle="Reach out today — we'll respond within 1 business day."
        showQuoteBtn={true}
      />
    </>
  );
}
