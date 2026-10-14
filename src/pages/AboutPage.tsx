import SEO from '../components/seo/SEO';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Car, 
  Package, 
  Users, 
  CalendarCheck,
  ArrowRight
} from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import ScrollReveal from '../components/ui/ScrollReveal';
import EnquiryCTA from '../components/sections/EnquiryCTA';
import Button from '../components/ui/Button';
import { buildEnquiryLink } from '../utils/whatsapp';

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Operational Accountability',
    desc: 'When we take on a project requirement, we own the delivery end-to-end so your project management team never has to follow up multiple vendors.',
  },
  {
    icon: Target,
    title: 'Single-Window Execution',
    desc: 'Eliminate chaotic multi-vendor coordination. We unify accommodation, transport, material supply, vendor liaison, and event logistics under one roof.',
  },
  {
    icon: MapPin,
    title: 'Deep Local Ground Network',
    desc: 'Headquartered in Palanpur, Banaskantha, our established vendor, transport, and real estate relationships across North Gujarat and beyond give you rapid turnaround.',
  },
  {
    icon: Compass,
    title: 'Integrity & Transparency',
    desc: 'Transparent commercial terms, prompt response times, and dependable verified suppliers that match demanding corporate standards.',
  },
];

const CAPABILITIES = [
  {
    icon: Building2,
    title: 'Workforce Accommodation',
    desc: 'Turnkey housing, guest houses, and rental arrangements for project staff, engineers, and executive teams close to site locations.',
    href: '/services/accommodation',
  },
  {
    icon: Car,
    title: 'Corporate & Site Transport',
    desc: 'Daily staff transit, site-to-city shuttles, airport transfers, and VIP vehicle fleets ensuring punctuality and safety.',
    href: '/services/transport',
  },
  {
    icon: Package,
    title: 'Material & Equipment Supply',
    desc: 'Direct sourcing of critical consumables, safety materials, construction supplies, and equipment without supply chain bottlenecks.',
    href: '/services/material-supply',
  },
  {
    icon: Users,
    title: 'Vendor Ecosystem Management',
    desc: 'Supervision, screening, SLA follow-up, and paperwork coordination for local contractors and specialty service providers.',
    href: '/services/vendor-management',
  },
  {
    icon: CalendarCheck,
    title: 'Corporate Event Management',
    desc: 'Complete logistics for project milestones, stakeholder conferences, vendor meets, safety training seminars, and launch ceremonies.',
    href: '/services/event-management',
  },
];

export default function AboutPage() {
  const whatsappUrl = buildEnquiryLink('General Discussion / Corporate Partnership');

  return (
    <>
      <SEO
        title="About Us | CORPHUB SOLUTION — Industrial Support Partner Palanpur, Gujarat"
        description="About CORPHUB SOLUTION in Palanpur, Gujarat: dedicated operations partner providing turnkey workforce housing, transport, material supply & site liaison."
        canonicalPath="/about"
        ogImage="/assets/images/about-team.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* Hero */}
      <PageHero
        title="Empowering Industrial Projects Across Gujarat"
        subtitle="About CORPHUB SOLUTION"
        image="/assets/images/about-team.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Intro Story */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionLabel text="Who We Are" />
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#071C3C',
                    lineHeight: 1.15,
                  }}
                >
                  Your On-Ground Operations Partner in Western India
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                  At <strong style={{ color: '#071C3C' }}>CORPHUB SOLUTION</strong>, we recognize that large industrial and infrastructure projects succeed or stumble on ground-level logistics. Mobilising engineers, sourcing materials on tight deadlines, managing vehicle rosters, and tracking dozens of suppliers takes vital focus away from core engineering objectives.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                  Headquartered in Palanpur (Banaskantha District, Gujarat), CORPHUB SOLUTION was established to eliminate this friction. We act as an integrated extension of your administration and project management teams, taking complete ownership of site support services so your deliverables stay on schedule and within budget.
                </p>

                {/* Tagline Callout */}
                <div
                  className="p-6 rounded-xl border-l-4 mb-8"
                  style={{
                    background: '#F3F7FA',
                    borderColor: '#FF6B00',
                  }}
                >
                  <p className="font-heading font-bold text-lg mb-1" style={{ color: '#071C3C' }}>
                    "Your Project. Our Responsibility."
                  </p>
                  <p className="text-sm" style={{ color: '#6B7A8D' }}>
                    Not just a slogan, but our operational commitment to deliver dependable ground support from mobilisation through plant commissioning.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={whatsappUrl} external>
                    Speak With Our Team
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Send Project RFP
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-8 relative overflow-hidden shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #071C3C 0%, #123B70 100%)',
                    color: '#FFFFFF',
                  }}
                >
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-20"
                    style={{ background: '#FF6B00' }}
                  />

                  <h3
                    className="font-heading font-bold text-xl mb-6 text-white border-b border-white/10 pb-4"
                    style={{ color: '#FFFFFF' }}
                  >
                    Key Highlights
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">5 Core Service Verticals</h4>
                        <p className="text-xs text-white/70 mt-1">One consolidated partner for accommodation, transport, materials, vendors, and events.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">Rapid Response Mobilisation</h4>
                        <p className="text-xs text-white/70 mt-1">Quick turnarounds for immediate accommodation leases or emergency material dispatches.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">Verified Regional Suppliers</h4>
                        <p className="text-xs text-white/70 mt-1">Audited local vendors, licensed drivers, and checked accommodation properties.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">Corporate Compliance & GST</h4>
                        <p className="text-xs text-white/70 mt-1">Transparent documentation, structured invoicing, and standard commercial compliance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Our Values" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              Built on Trust, Delivered with Precision
            </h2>
            <p className="text-sm mt-3" style={{ color: '#6B7A8D' }}>
              Every engagement is governed by four core operating standards designed to ensure zero downtime for your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div
                    className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                        style={{ background: 'rgba(10, 46, 86, 0.08)', color: '#0A2E56' }}
                      >
                        <Icon size={24} />
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#071C3C' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B7A8D' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 Core Capabilities Matrix */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="What We Deliver" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              5 Dedicated Project Service Verticals
            </h2>
            <p className="text-sm mt-3" style={{ color: '#6B7A8D' }}>
              Select a service vertical to view dedicated service scopes, fleet options, and past delivery frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={i} delay={i * 80}>
                  <Link
                    to={cap.href}
                    className="group block p-8 rounded-2xl border border-gray-100 bg-white hover:border-navy-300 hover:shadow-lg transition-all h-full"
                    style={{ position: 'relative' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                      style={{ background: '#071C3C', color: '#FF6B00' }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2 text-navy-950 group-hover:text-primary-orange transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 mb-6">
                      {cap.desc}
                    </p>
                    <div className="flex items-center text-xs font-bold text-navy-900 group-hover:text-primary-orange uppercase tracking-wider gap-1.5 mt-auto">
                      Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Reach & Hubs */}
      <section className="section-py" style={{ background: '#071C3C', color: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <span className="section-label section-label--light mb-3 inline-block">
                  Regional Focus
                </span>
                <h2
                  className="font-display text-white mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                  }}
                >
                  Based in Palanpur, Serving Gujarat’s Key Industrial Belts
                </h2>
                <p className="text-sm leading-relaxed text-white/80 mb-6">
                  Palanpur sits as a prime logistical hub bridging Northern Gujarat with Rajasthan and Western freight corridors. We actively support operations across industrial clusters including:
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border border-white/10 rounded-lg p-3 bg-white/5">
                    <p className="font-bold text-white text-sm">Banaskantha & Patan</p>
                    <p className="text-xs text-white/60">Solar parks, agricultural processing, dairy & roads</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-3 bg-white/5">
                    <p className="font-bold text-white text-sm">Mehsana & Chhatral</p>
                    <p className="text-xs text-white/60">Engineering, oil & gas, manufacturing estates</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-3 bg-white/5">
                    <p className="font-bold text-white text-sm">Sanand & Mandal-Becharaji</p>
                    <p className="text-xs text-white/60">Automotive hubs and electronics parks</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-3 bg-white/5">
                    <p className="font-bold text-white text-sm">Ahmedabad & Beyond</p>
                    <p className="text-xs text-white/60">Corporate headquarters & multi-site project corridors</p>
                  </div>
                </div>

                <Button variant="orange" href={whatsappUrl} external>
                  Discuss Your Project Location
                </Button>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal delay={200}>
                <div className="rounded-2xl border border-white/15 p-8 bg-white/5 backdrop-blur-sm">
                  <h3
                    className="font-heading font-bold text-xl text-white mb-4"
                    style={{ color: '#FFFFFF' }}
                  >
                    Our Direct Commitment to You
                  </h3>
                  <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                    <p>
                      <strong>1. Clear Scope & Transparent Pricing:</strong> We believe in clear quotes without hidden operational surcharges.
                    </p>
                    <p>
                      <strong>2. Dedicated Project Coordinator:</strong> Every client is assigned a designated coordinator accessible 24/7 during critical project phases.
                    </p>
                    <p>
                      <strong>3. Safety & Compliance First:</strong> We only work with vetted transport drivers, certified equipment, and secure accommodation facilities.
                    </p>
                    <p>
                      <strong>4. Flexible Durations:</strong> Need accommodations or transport for two weeks, six months, or two years? We adapt to your contract length.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA Section */}
      <EnquiryCTA
        title="Ready to streamline your project support in Gujarat?"
        subtitle="Speak directly with our team in Palanpur to receive tailored quotes for accommodation, transport, materials, and vendor management."
      />
    </>
  );
}
