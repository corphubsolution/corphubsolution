import SEO from '../../components/seo/SEO';
import { 
  Search, 
  ClipboardCheck, 
  CalendarClock, 
  FileText, 
  ArrowRight, 
  MessageCircle, 
  ExternalLink 
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import { buildEnquiryLink } from '../../utils/whatsapp';

const CAPABILITIES = [
  {
    icon: Search,
    title: 'Vendor Sourcing',
    desc: 'Identify suitable local suppliers and service providers based on project needs.',
  },
  {
    icon: ClipboardCheck,
    title: 'Site Coordination',
    desc: 'Coordinate site visits, vendor communication and project follow-ups.',
  },
  {
    icon: CalendarClock,
    title: 'Milestone Tracking',
    desc: 'Track agreed timelines, pending activities and reported progress.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    desc: 'Coordinate delivery records, supporting documents and reporting.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share',
    desc: 'Project needs',
  },
  {
    step: '02',
    title: 'Source',
    desc: 'Suitable vendors',
  },
  {
    step: '03',
    title: 'Coordinate',
    desc: 'Follow-ups',
  },
  {
    step: '04',
    title: 'Review',
    desc: 'Status & records',
  },
];

export default function VendorManagementPage() {
  const whatsappUrl = buildEnquiryLink('Vendor Management & Site Liaison Support');

  return (
    <>
      <SEO
        title="Industrial Vendor Management & Site Liaison Services in Gujarat | CORPHUB SOLUTION"
        description="CORPHUB SOLUTION provides end-to-end vendor management, local supplier coordination, contractor follow-ups & on-site progress support for industrial and manufacturing projects across Gujarat. Vendor sourcing, milestone tracking & documentation for EPC firms, factories & infrastructure projects."
        canonicalPath="/services/vendor-management"
        ogImage="/assets/images/vender.png"
        keywords={[
          'CORPHUB SOLUTION vendor management',
          'vendor management services Gujarat',
          'vendor management services for manufacturing plants Gujarat',
          'industrial site liaison Palanpur',
          'on-site contractor management services Gujarat',
          'contractor follow-up coordination Banaskantha',
          'local supplier coordination Gujarat',
          'EPC project vendor tracking Gujarat',
          'site milestone tracking Palanpur',
          'multi-vendor coordination services manufacturing plants',
          'industrial site coordination contractors Gujarat',
          'third party site coordination contractors Gujarat',
          'vendor sourcing and vetting services Gujarat',
          'delivery documentation and invoice coordination',
          'on-site ground liaison communication Gujarat',
          'turnkey industrial project site coordination',
          'vendor compliance site safety coordination Gujarat',
          'industrial subcontracting vendor alignment Gujarat',
          'cost-effective vendor management solutions Gujarat',
          'end-to-end vendor management industrial projects',
          'contractor supervision services Ahmedabad',
          'vendor management for chemical process plants Gujarat',
          'heavy engineering vendor coordination Gujarat',
          'EPC contractor coordination Gujarat',
          'CorpHub Solution vendor management services'
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Vendor Management', href: '/services/vendor-management' },
        ]}
        serviceSchema={{
          name: 'Industrial Vendor Management & Site Liaison',
          description: 'CORPHUB SOLUTION provides local supplier coordination, contractor follow-ups, milestone tracking, and on-site progress management for industrial, manufacturing, and EPC projects across Gujarat.',
          serviceType: 'Vendor Management & Ground Liaison Services',
        }}
        faqSchema={[
          {
            question: 'What is Vendor Management by CORPHUB SOLUTION?',
            answer: 'CORPHUB SOLUTION acts as your dedicated local coordination layer on the ground in Gujarat, handling vendor identification, site visits, contractor follow-ups, timeline tracking, delivery documentation, and communication liaison for industrial and manufacturing projects.',
          },
          {
            question: 'How is Vendor Management different from Material Supply at CORPHUB SOLUTION?',
            answer: 'Vendor Management focuses purely on operational coordination, supervision, communication follow-ups, and paperwork liaison for contractors and service providers. Material Supply involves physical product procurement and delivery. Both services can be combined for complete project support.',
          },
          {
            question: 'Which areas does CORPHUB SOLUTION provide on-site vendor liaison for?',
            answer: 'CORPHUB SOLUTION provides active on-site vendor liaison across Palanpur, Banaskantha, Mehsana, Sanand GIDC, Ahmedabad, Gandhinagar, Vadodara, Bharuch, and key industrial belts across Gujarat.',
          },
          {
            question: 'Can CORPHUB SOLUTION manage multiple contractors on a single industrial site?',
            answer: 'Yes. CORPHUB SOLUTION specializes in multi-vendor coordination for complex industrial projects, managing simultaneous contractor activities, milestone tracking, delivery schedules, and documentation for factories and EPC projects.',
          },
          {
            question: 'Does CORPHUB SOLUTION handle vendor compliance and documentation?',
            answer: 'Yes. CORPHUB SOLUTION coordinates delivery records, supporting documents, invoice reconciliation, contractor compliance verification, and progress reporting to ensure transparent and accountable vendor management.',
          },
        ]}
      />

      {/* Hero Header */}
      <PageHero
        title="Reliable Vendors. Better Project Coordination."
        subtitle="Industrial Vendor Management & Site Liaison"
        image="/assets/images/vender.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Vendor Management' },
        ]}
      />

      {/* ── HERO CARD SECTION (Matching Reference UI Mockup) ────────────────── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-site max-w-5xl">
          <ScrollReveal>
            <div 
              className="rounded-3xl p-6 md:p-10 overflow-hidden shadow-2xl border border-gray-100"
              style={{ background: '#071C3C', color: '#FFFFFF' }}
            >
              {/* Top Industrial Team Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 border border-white/10 group">
                <img
                  src="/assets/images/vender.png"
                  alt="Industrial project team and engineers coordinating vendor management on site"
                  className="w-full h-[260px] sm:h-[340px] md:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C3C]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="font-semibold bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                    On-Site Project Coordination
                  </span>
                  <span className="text-[#FF6B00] font-bold bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Palanpur & Gujarat
                  </span>
                </div>
              </div>

              {/* Text & Action Area */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2.5 inline-block">
                  Industrial Vendor Management
                </span>

                <h1
                  className="font-display font-extrabold text-white mb-3"
                  style={{
                    fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                    lineHeight: 1.15,
                  }}
                >
                  Reliable Vendors. Better Project Coordination.
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-2xl">
                  Local supplier coordination, contractor follow-ups and on-site progress support for industrial projects across Gujarat.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider"
                  >
                    <MessageCircle size={17} />
                    <span>Enquire on WhatsApp</span>
                    <ExternalLink size={14} />
                  </a>

                  <Button
                    to="/contact"
                    variant="outline-white"
                    size="lg"
                    className="border-white/20 hover:bg-white/10 text-xs sm:text-sm"
                  >
                    Discuss Your Requirements
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OUR CAPABILITIES (2x2 Cards Grid) ─────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container-site max-w-5xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Our Capabilities
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              Complete Vendor Coordination
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-500">
              One coordination partner for your project requirements.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-[#FF6B00] flex items-center justify-center mb-4 shadow-2xs group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>

                      <h3 className="font-heading font-extrabold text-lg text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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

      {/* ── HOW IT WORKS (4 Circular Steps) ───────────────────────────────────── */}
      <section className="py-14 md:py-18 bg-[#F3F7FA] border-t border-gray-200/60">
        <div className="container-site max-w-5xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Workflow
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              How It Works
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 90}>
                <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200 text-center flex flex-col items-center shadow-2xs hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 rounded-full bg-[#071C3C] text-white font-extrabold text-sm flex items-center justify-center shadow-md mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-[#071C3C] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEED LOCAL PROJECT SUPPORT? (Bottom CTA Banner) ──────────────────── */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container-site max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2
              className="font-display font-extrabold text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              }}
            >
              Need Local Project Support?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Share your project location, requirements and coordination needs with CorpHub Solution.
            </p>
          </div>

          <div className="text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-8 sm:px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base uppercase tracking-wider w-full sm:w-auto"
            >
              <span>Discuss Your Project Requirements</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER BANNER ─────────────────────────────────────────────────────── */}
      <section className="py-8 bg-[#071C3C] text-white border-t border-white/10 text-center">
        <div className="container-site">
          <p className="font-heading font-extrabold text-lg tracking-wider text-white">
            CORPHUB <span className="text-[#FF6B00]">SOLUTION</span>
          </p>
          <p className="text-xs text-white/70 mt-1 uppercase tracking-widest">
            — Your Project. Our Responsibility. —
          </p>
        </div>
      </section>
    </>
  );
}
