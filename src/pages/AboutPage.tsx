import SEO from '../components/seo/SEO';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  Building2, 
  Car, 
  Package, 
  Users, 
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import ScrollReveal from '../components/ui/ScrollReveal';
import EnquiryCTA from '../components/sections/EnquiryCTA';
import Button from '../components/ui/Button';
import { buildEnquiryLink } from '../utils/whatsapp';

const CAPABILITIES = [
  {
    icon: Building2,
    title: 'Accommodation Management',
    desc: 'Rental property arrangements, hotels, guest houses, and fully managed stays for project engineers and executive teams.',
    href: '/services/accommodation',
  },
  {
    icon: Car,
    title: 'Transport Management',
    desc: 'Customized corporate staff transit, site-to-city shuttles, airport transfers, and long-term project vehicle contracts.',
    href: '/services/transport',
  },
  {
    icon: Package,
    title: 'Material Supply Management',
    desc: 'Direct sourcing of critical consumables, safety materials, construction supplies, and equipment without supply chain bottlenecks.',
    href: '/services/material-supply',
  },
  {
    icon: Users,
    title: 'Vendor Management',
    desc: 'Supervision, screening, SLA follow-up, and paperwork coordination for local contractors and specialty service providers.',
    href: '/services/vendor-management',
  },
  {
    icon: CalendarCheck,
    title: 'Event Management',
    desc: 'Complete logistics for project milestones, stakeholder conferences, vendor meets, safety training seminars, and launch ceremonies.',
    href: '/services/event-management',
  },
];

export default function AboutPage() {
  const whatsappUrl = buildEnquiryLink('General Discussion / Corporate Partnership');

  return (
    <>
      <SEO
        title="About Us | CORPHUB SOLUTION — Industrial & Corporate Solutions"
        description="At CorpHub Solution, we have been serving the industry for the past 3 years, providing integrated corporate and industrial support services tailored to project-based companies."
        canonicalPath="/about"
        ogImage="/assets/images/about-team.jpg"
        keywords={[
          'CorpHub Solution Palanpur',
          'Industrial project support company Gujarat',
          'Corporate solutions partner India',
          'Single point contact industrial services',
          'Vendor coordination partner Banaskantha',
          'Project logistics Gujarat'
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
        faqSchema={[
          {
            question: 'What is CorpHub Solution’s background and experience?',
            answer: 'CorpHub Solution has been serving the industrial and corporate sector for over 3 years, specializing in turnkey support for project-based companies executing operations outside their home locations across Gujarat.',
          },
          {
            question: 'What core services does CorpHub Solution provide?',
            answer: 'CorpHub Solution provides Accommodation Management, Transport Management, Material Supply Management, Vendor Management, and Event Management through a single point of contact.',
          },
        ]}
      />

      {/* Hero */}
      <PageHero
        title="ABOUT US — CORPHUB SOLUTION"
        subtitle="Your Trusted Partner for Industrial & Corporate Solutions"
        image="/assets/images/about-team.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Main Story / Who We Are */}
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
                  Your Trusted Partner for Industrial & Corporate Solutions
                </h2>
                
                <p className="text-base leading-relaxed mb-4 text-gray-700">
                  At <strong className="text-navy-950 font-bold">CorpHub Solution</strong>, we have been serving the industry for the past <strong className="text-primary-orange font-bold">3 years</strong>, providing integrated corporate and industrial support services tailored to the needs of project-based companies.
                </p>

                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  We specialize in supporting companies executing projects outside their usual operating locations by coordinating essential services for their engineers, project managers, site teams, and corporate departments.
                </p>

                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  We understand that every project has unique requirements, budgets, timelines, documentation procedures, and terms and conditions. Our goal is to simplify these challenges by providing multiple services through a single point of contact, ensuring efficient coordination and customized solutions according to each client's needs.
                </p>

                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  Our services include <strong className="text-navy-900 font-semibold">Accommodation Management, Transport Management, Material Supply Management, Vendor Management, and Event Management</strong>. We focus on delivering reliable, cost-effective, and timely solutions that align with our clients' requirements and agreed terms and conditions.
                </p>

                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  At CorpHub Solution, we aim to build long-term business relationships through professional coordination, dependable service, and a commitment to customer satisfaction.
                </p>

                {/* Tagline Callout */}
                <div
                  className="p-6 rounded-xl border-l-4 mb-8 shadow-sm"
                  style={{
                    background: '#F3F7FA',
                    borderColor: '#FF6B00',
                  }}
                >
                  <p className="font-heading font-extrabold text-xl mb-1" style={{ color: '#071C3C' }}>
                    "CorpHub Solution — Your Requirements, Our Responsibility."
                  </p>
                  <p className="text-sm text-gray-600">
                    Not just a slogan, but our operational commitment to deliver dependable ground support from mobilisation through completion.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={whatsappUrl} external>
                    Connect With Us
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Share Requirements
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

                  <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white">
                        3+ Years of Service
                      </h3>
                      <p className="text-xs text-white/70">Trusted by Industrial Project Teams</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <Building2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">Single Point of Contact</h4>
                        <p className="text-xs text-white/70 mt-1">One channel for housing, transport, material supply, vendor liaisons, and events.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">Budget & Timeline Focused</h4>
                        <p className="text-xs text-white/70 mt-1">Customized solutions tailored to project budgets, timelines, and documentation.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">Verified Partner Network</h4>
                        <p className="text-xs text-white/70 mt-1">Dependable, verified service providers delivering right services at the right place and time.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}
                      >
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">Long-Term Relationships</h4>
                        <p className="text-xs text-white/70 mt-1">Commitment to customer satisfaction, professional coordination, and dependable service.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Purpose & Aspiration" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              Our Mission & Vision
            </h2>
            <p className="text-sm mt-3 text-gray-500">
              Guiding our operations, client partnerships, and continuous pursuit of excellence across Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <ScrollReveal delay={100}>
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00' }}
                >
                  <Target size={28} />
                </div>
                <h3 className="font-heading font-extrabold text-2xl mb-4" style={{ color: '#071C3C' }}>
                  OUR MISSION
                </h3>
                <p className="text-base font-semibold mb-3 text-navy-900 leading-snug">
                  Our mission is to fulfil diverse industrial and corporate requirements through a single, reliable, and efficient service partner.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 mt-auto">
                  We strive to provide suitable solutions according to our clients' budgets, requirements, documentation, and agreed terms and conditions. By coordinating with companies, engineers, project managers, and suitable service providers, we aim to simplify operations, reduce coordination challenges, and deliver the right services at the right place and time.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal delay={200}>
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(10, 46, 86, 0.1)', color: '#0A2E56' }}
                >
                  <Compass size={28} />
                </div>
                <h3 className="font-heading font-extrabold text-2xl mb-4" style={{ color: '#071C3C' }}>
                  OUR VISION
                </h3>
                <p className="text-base font-semibold mb-3 text-navy-900 leading-snug">
                  Our vision is to become a trusted corporate solutions partner for businesses across Gujarat by building a strong network of reliable and verified vendors.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 mt-auto">
                  We aspire to create a seamless coordination experience where companies, engineers, and project managers can access the services they need at their project locations, according to their budgets, specifications, and requirements. Through transparency, efficient coordination, and customized solutions, we aim to make industrial and corporate operations simpler, smoother, and more efficient.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5 Core Capabilities Matrix */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Our Services" />
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
            <p className="text-sm mt-3 text-gray-500">
              Multiple industrial and corporate services managed through a single point of contact.
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

      {/* Enquiry CTA Section */}
      <EnquiryCTA
        title="CorpHub Solution — Your Requirements, Our Responsibility."
        subtitle="Speak directly with our team in Palanpur to receive customized solutions according to your budget, timeline, and project requirements."
      />
    </>
  );
}
