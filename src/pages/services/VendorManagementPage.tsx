import SEO from '../../components/seo/SEO';
import { 
  Users, 
  ShieldCheck, 
  FileCheck, 
  ClipboardCheck, 
  Search, 
  CheckCircle2, 
  MessageSquareCheck, 
  AlertCircle 
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import SectionLabel from '../../components/ui/SectionLabel';
import ScrollReveal from '../../components/ui/ScrollReveal';
import FeatureItem from '../../components/ui/FeatureItem';
import Button from '../../components/ui/Button';
import EnquiryCTA from '../../components/sections/EnquiryCTA';
import { buildEnquiryLink } from '../../utils/whatsapp';

const VENDOR_SERVICES = [
  {
    icon: Search,
    title: 'Vendor Sourcing & Qualification',
    badge: 'Due Diligence',
    desc: 'Identifying and vetting regional trade contractors, equipment hirers, and service providers. We review their track record, equipment condition, safety compliance, and financial stability.',
    deliverables: ['Detailed background & credibility checks', 'Review of past project references in Gujarat', 'Statutory compliance verification (GST, PAN, PF)', 'Comparative quotation evaluation matrix'],
  },
  {
    icon: ClipboardCheck,
    title: 'Milestone Tracking & SLA Enforcement',
    badge: 'Operations',
    desc: 'Bridging the distance between your corporate office and site contractors. We ensure vendors adhere strictly to agreed delivery schedules, quality specifications, and turnaround deadlines.',
    deliverables: ['Daily / weekly progress site inspections', 'Active follow-up on delayed deliverables', 'Non-conformance notification and escalation', 'Transparent status reporting to project managers'],
  },
  {
    icon: FileCheck,
    title: 'Documentation & Invoice Clearance',
    badge: 'Admin & Finance',
    desc: 'Preventing billing discrepancies and audit delays. We review measurement sheets, delivery challans, and completion certificates before invoices reach your finance department.',
    deliverables: ['Verification of physical delivery challans', 'Scrutiny of measurement & timesheet logs', 'Alignment with purchase order terms', 'Clean audit-ready billing packages'],
  },
  {
    icon: MessageSquareCheck,
    title: 'Ground Liaison & Conflict Resolution',
    badge: 'On-Site Liaison',
    desc: 'Managing real-world field situations with local vendors, community dynamics, and contract laborers. Our Palanpur-based team bridges linguistic and cultural nuances smoothly.',
    deliverables: ['Native language communication (Gujarati/Hindi)', 'Fair dispute mediation and resolution', 'Community and local authority liaison', 'Continuity protection during contractor disputes'],
  },
];

export default function VendorManagementPage() {
  const whatsappUrl = buildEnquiryLink('Vendor Management Support');

  return (
    <>
      <SEO
        title="Vendor Management & Site Liaison Services | Palanpur, Gujarat | CORPHUB SOLUTION"
        description="End-to-end vendor vetting, contract administration, SLA compliance tracking, and dispute management for industrial and engineering sites in Gujarat."
        canonicalPath="/services/vendor-management"
        ogImage="/assets/images/vendor-management-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Vendor Management', href: '/services/vendor-management' },
        ]}
        serviceSchema={{
          name: 'Vendor Management & Site Liaison',
          description: 'Comprehensive vendor vetting, contract administration, rate negotiation, and local ground liaison in Gujarat.',
          serviceType: 'Vendor Management & Ground Liaison Services',
        }}
      />

      {/* Hero */}
      <PageHero
        title="Industrial Vendor Management & Site Liaison"
        subtitle="Operational Oversight"
        image="/assets/images/vendor-management-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Vendor Management' },
        ]}
      />

      {/* Overview */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionLabel text="Your Eyes & Ears on the Ground" />
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#071C3C',
                    lineHeight: 1.15,
                  }}
                >
                  Streamline Your Supplier Ecosystem with Dedicated Local Management
                </h2>
                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  Managing multiple local sub-contractors, transport operators, and material vendors from a corporate headquarters hundreds of kilometers away is difficult and fraught with miscommunication. Missed commitments, billing friction, and slow turnaround can silently derail your commissioning schedules.
                </p>
                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  <strong className="text-navy-900">CORPHUB SOLUTION</strong> acts as your dedicated local coordination layer in Gujarat. We establish accountability, monitor progress directly at the work front, handle documentation verification, and solve friction before it escalates into operational delays.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <FeatureItem text="Single Point of Contact" description="Deal with our coordination desk rather than 20 individual vendors." />
                  <FeatureItem text="Local Language Fluency" description="Native fluency in Gujarati and Hindi ensures crystal-clear instructions." />
                  <FeatureItem text="Strict SLA Enforcement" description="Deadlines and milestone penalties tracked rigorously on site." />
                  <FeatureItem text="Audit-Ready Paperwork" description="Clean delivery notes, tax invoices, and verification logs." />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={whatsappUrl} external>
                    Enquire on WhatsApp
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Discuss Vendor Retainer
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #071C3C 0%, #0A2E56 100%)' }}
                >
                  <h3
                    className="font-heading font-bold text-xl mb-4 border-b border-white/10 pb-3 text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    Problems We Solve
                  </h3>
                  <div className="space-y-4 text-sm text-white/80">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Unaccountable Local Contractors:</strong> We enforce documented scopes, work schedules, and physical verification.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Inflated Invoicing:</strong> Independent physical count and cross-referencing against delivery gate passes.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Vendor Disputes:</strong> Fast mediation backed by deep understanding of local market practices.
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <p className="text-xs text-white/60">
                      Need on-site coordination for an upcoming installation phase? Inquire about our monthly project retainer options.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Vendor Management Pillars" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              Comprehensive Contractor & Supplier Supervision
            </h2>
            <p className="text-sm mt-3 text-gray-500">
              Four specialized capabilities to maintain high contractor performance and cost control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VENDOR_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(7, 28, 60, 0.08)', color: '#071C3C' }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-50 text-navy-800">
                          {srv.badge}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3 text-navy-950">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                        Scope Deliverables:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {srv.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <EnquiryCTA
        title="Want dedicated oversight for your Gujarat project vendors?"
        subtitle="Contact our Palanpur coordination office to discuss full-time or project-based vendor management services."
        serviceName="Vendor Management Services"
      />
    </>
  );
}
