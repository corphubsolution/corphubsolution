import SEO from '../../components/seo/SEO';
import { 
  CalendarCheck, 
  Sparkles, 
  Award, 
  Users2, 
  Mic2, 
  CheckCircle2, 
  MapPin, 
  Coffee 
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import SectionLabel from '../../components/ui/SectionLabel';
import ScrollReveal from '../../components/ui/ScrollReveal';
import FeatureItem from '../../components/ui/FeatureItem';
import Button from '../../components/ui/Button';
import EnquiryCTA from '../../components/sections/EnquiryCTA';
import { buildEnquiryLink } from '../../utils/whatsapp';

const EVENT_TYPES = [
  {
    icon: Award,
    title: 'Plant Inaugurations & Groundbreakings',
    tag: 'Flagship Milestone',
    desc: 'Flawless arrangements for Bhoomi Pujan, foundation stone laying, facility ribbon-cutting, and plant commissioning ceremonies attended by VIPs and government dignitaries.',
    features: ['Waterproof German hanger marquees & stages', 'Traditional ceremony & ritual coordination', 'VIP protocol, ribbon-cutting & plaque reveals', 'Press, media & high-definition photography/video'],
  },
  {
    icon: Users2,
    title: 'Vendor Meets & Stakeholder Conferences',
    tag: 'Corporate B2B',
    desc: 'Structured business conferences, annual vendor conventions, and client appreciation gatherings designed to convey your company’s institutional strength and vision.',
    features: ['Conference venue scouting across North Gujarat', 'Digital registration desks & custom delegate kits', 'Premium LED backdrops & professional audio setups', 'High-end corporate luncheon & dinner catering'],
  },
  {
    icon: Mic2,
    title: 'Safety Training Workshops & Seminars',
    tag: 'Technical & HSE',
    desc: 'Turnkey venue and logistical management for multi-day HSE (Health, Safety & Environment) workshops, technical induction programs, and compliance certification seminars.',
    features: ['Acoustically sound training halls & breakout rooms', 'Projectors, digital whiteboards & AV systems', 'Continuous refreshment & tea/coffee service', 'Participant transport coordination & accommodation'],
  },
  {
    icon: Coffee,
    title: 'VIP Hospitality & Outstation Logistics',
    tag: 'Hospitality',
    desc: 'Complete hospitality management for visiting corporate boards, international technical partners, and audit delegations arriving in Gujarat for project reviews.',
    features: ['Luxury hotel block bookings & suite allocations', 'Coordinated airport meet-and-greet transfers', 'Customized executive dining & regional cuisine', 'Curated sightseeing & cultural tours (e.g. Ambaji, Mount Abu)'],
  },
];

export default function EventManagementPage() {
  const whatsappUrl = buildEnquiryLink('Corporate Event Management');

  return (
    <>
      <SEO
        title="Corporate Event Management & Industrial Ceremonies | Palanpur, Gujarat | CORPHUB SOLUTION"
        description="End-to-end event management in Palanpur & Gujarat for plant inaugurations, Bhoomi Pujan, corporate annual meets, vendor summits, and HSE safety workshops."
        canonicalPath="/services/event-management"
        ogImage="/assets/images/event-management-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Event Management', href: '/services/event-management' },
        ]}
        serviceSchema={{
          name: 'Corporate Event Management & Industrial Ceremonies',
          description: 'Full-scope corporate event management including plant inaugurations, foundation ceremonies, safety summits, and corporate hospitality in Gujarat.',
          serviceType: 'Corporate Event Management',
        }}
      />

      {/* Hero */}
      <PageHero
        title="Corporate & Industrial Event Management"
        subtitle="End-to-End Event Logistics"
        image="/assets/images/event-management-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Event Management' },
        ]}
      />

      {/* Overview */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionLabel text="Corporate Occasions Executed with Polish" />
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#071C3C',
                    lineHeight: 1.15,
                  }}
                >
                  Memorable Milestone Events Without the Logistical Distraction
                </h2>
                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  Industrial inaugurations, shareholder visits, and vendor conferences are high-stakes occasions. When AV systems fail, catering falls short, or transport arrives late, it damages corporate reputation. Yet assigning technical engineers to arrange stage sound and flower decor wastefully diverts engineering hours.
                </p>
                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  <strong className="text-navy-900">CORPHUB SOLUTION</strong> assumes 100% turnkey responsibility. Based in Palanpur, our events team manages stage fabrication, audiovisual setups, catering, dignitary protocols, and attendee transit so your leadership can focus entirely on connecting with stakeholders.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <FeatureItem text="Turnkey Stage & AV Production" description="High-definition LED screens, crisp audio, and ambient lighting." />
                  <FeatureItem text="Hygienic Corporate Catering" description="Curated multi-cuisine menus prepared under high hygiene standards." />
                  <FeatureItem text="Dignitary & VIP Protocols" description="Red carpet reception, seating protocol, and security coordination." />
                  <FeatureItem text="Integrated Transit & Stay" description="Hotels and transit synchronized smoothly through our other verticals." />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={whatsappUrl} external>
                    Enquire on WhatsApp
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Plan an Event
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #052447 0%, #071C3C 100%)' }}
                >
                  <h3
                    className="font-heading font-bold text-xl mb-4 border-b border-white/10 pb-3 text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    The CORPHUB Event Edge
                  </h3>
                  <div className="space-y-4 text-sm text-white/80">
                    <div className="flex items-start gap-3">
                      <Sparkles className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Seamless Synergy:</strong> Because we already provide transport and accommodation, guest logistics are seamlessly connected.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CalendarCheck className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Punctual Timelines:</strong> Detailed run-of-show cue sheets ensure every speaker and ceremonial step happens like clockwork.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Regional Venue Knowledge:</strong> Best access to convention centers, hotel banquets, and scenic retreats across Palanpur and North Gujarat.
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <p className="text-xs text-white/60">
                      Planning a foundation stone laying or annual vendor meet? Talk to our creative team today.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Event Verticals */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Occasions We Manage" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              Corporate & Industrial Gatherings Handled End-to-End
            </h2>
            <p className="text-sm mt-3 text-gray-500">
              Four specialized event domains tailored to commercial enterprises and project developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENT_TYPES.map((evt, idx) => {
              const Icon = evt.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(5, 36, 71, 0.08)', color: '#052447' }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-50 text-navy-800">
                          {evt.tag}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3 text-navy-950">
                        {evt.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {evt.desc}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                        Included Logistics:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {evt.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                            <span>{feat}</span>
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
        title="Planning a corporate ceremony or project milestone?"
        subtitle="Contact our Palanpur event coordinators to discuss concepts, guest counts, dates, and budget parameters."
        serviceName="Event Management Services"
      />
    </>
  );
}
