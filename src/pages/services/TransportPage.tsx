import SEO from '../../components/seo/SEO';
import { 
  ShieldCheck, 
  Clock, 
  Navigation, 
  CheckCircle2, 
  Users2, 
  Briefcase, 
  Plane 
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import SectionLabel from '../../components/ui/SectionLabel';
import ScrollReveal from '../../components/ui/ScrollReveal';
import FeatureItem from '../../components/ui/FeatureItem';
import Button from '../../components/ui/Button';
import EnquiryCTA from '../../components/sections/EnquiryCTA';
import { buildEnquiryLink } from '../../utils/whatsapp';

const TRANSPORT_SOLUTIONS = [
  {
    icon: Briefcase,
    title: 'Executive & Client VIP Movement',
    badge: 'Premium Fleet',
    desc: 'Top-tier sedans and premium MPVs (Innova Crysta) driven by experienced, professionally attired chauffeurs. Tailored for visiting executives, foreign delegates, auditors, and leadership.',
    specs: ['Immaculately maintained Innova & Sedans', 'Courteous, verified professional drivers', 'Complimentary bottled water & chargers', '24/7 dedicated availability on retainer'],
  },
  {
    icon: Clock,
    title: 'Daily Site-to-Living Shuttles',
    badge: 'Scheduled',
    desc: 'Guaranteed, punctual daily transport connecting employee accommodations and guest houses directly to plant gates and project sites. Eliminates worker absenteeism and commuting delays.',
    specs: ['Strict adherence to shift timings', 'Fixed-route and on-demand pickups', 'Dedicated vehicles assigned to your contract', 'Monthly reporting & roster management'],
  },
  {
    icon: Plane,
    title: 'Airport & Transit Hub Transfers',
    badge: 'Regional Transit',
    desc: 'Seamless pick-up and drop-off coordination with major regional airports and railway junctions including Ahmedabad (SVPIA), Udaipur (UDR), Abu Road, and Palanpur Junction.',
    specs: ['Real-time flight & train tracking', 'Meet & greet station assistance', 'Luggage support for heavy baggage', 'Emergency standby vehicle arrangements'],
  },
  {
    icon: Users2,
    title: 'Workforce Transit & Team Movement',
    badge: 'High-Capacity',
    desc: 'Tempo Travellers (12 to 26 seaters) and executive buses for project team transfers, technical team rotations, site visits, and team-building events.',
    specs: ['Commercial passenger licensing & permits', 'High safety compliance standards', 'Seatbelts and emergency exits verified', 'All-weather, highway-ready vehicles'],
  },
];

export default function TransportPage() {
  const whatsappUrl = buildEnquiryLink('Corporate Transport Services');

  return (
    <>
      <SEO
        title="Corporate & Site Transport Services | Palanpur, Gujarat | CORPHUB SOLUTION"
        description="Professional employee commute shuttles, site transport, executive car rentals, and airport transfers for industrial projects across Palanpur and Gujarat."
        canonicalPath="/services/transport"
        ogImage="/assets/images/transport-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Transport', href: '/services/transport' },
        ]}
        serviceSchema={{
          name: 'Industrial & Corporate Transport Solutions',
          description: 'Employee shuttles, site-to-city transport, executive car rentals, and project vehicle fleets across Palanpur and Gujarat.',
          serviceType: 'Corporate Transportation Services',
        }}
      />

      {/* Hero */}
      <PageHero
        title="Industrial & Corporate Transport Solutions"
        subtitle="Professional Fleet & Logistics"
        image="/assets/images/transport-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Transport' },
        ]}
      />

      {/* Intro Overview */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionLabel text="Punctual Fleet Operations" />
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#071C3C',
                    lineHeight: 1.15,
                  }}
                >
                  Reliable Passenger Logistics Tailored to Project Demands
                </h2>
                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  Industrial operations run on precise schedules. When transport fails or drivers are unvetted, engineers are delayed, safety records are compromised, and valuable project hours are lost.
                </p>
                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  <strong className="text-navy-900">CORPHUB SOLUTION</strong> delivers dependable corporate passenger transit across Northern Gujarat and surrounding industrial corridors. We manage verified fleets, licensed professional drivers, scheduled routes, and 24/7 backup vehicles so your team never faces a transit bottleneck.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <FeatureItem text="100% Verified Drivers" description="Background-checked, experienced on regional highways." />
                  <FeatureItem text="Vehicle Fitness & Permits" description="Fully insured, valid commercial RTO registration & permits." />
                  <FeatureItem text="Punctual Shift Alignment" description="Rosters synchronized with your plant work shifts." />
                  <FeatureItem text="Flexible Commercial Billing" description="Kilometer-based, monthly retainer, or per-trip packages." />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={whatsappUrl} external>
                    Enquire on WhatsApp
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Request Transport Rate Card
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #123B70 0%, #071C3C 100%)' }}
                >
                  <h3
                    className="font-heading font-bold text-xl mb-4 border-b border-white/10 pb-3 text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    Key Transport Guarantees
                  </h3>
                  <div className="space-y-4 text-sm text-white/80">
                    <div className="flex items-start gap-3">
                      <Clock className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Punctuality First:</strong> Vehicles arrive 15 minutes before scheduled departure for guaranteed on-time transit.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Safety Standards:</strong> Speed limit compliance, functional seatbelts, and mandatory breathalyzer checks for large fleets.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Standby Replacement:</strong> Rapid replacement vehicle dispatched immediately in the rare event of mechanical failure.
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <p className="text-xs text-white/60">
                      Need long-term dedicated fleet contracts for 6+ months? Contact our logistics desk for bulk corporate tariffs.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Our Fleet Verticals" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              Comprehensive Passenger Transportation
            </h2>
            <p className="text-sm mt-3 text-gray-500">
              Explore our four dedicated passenger transit solutions designed for industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSPORT_SOLUTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(18, 59, 112, 0.08)', color: '#123B70' }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-50 text-navy-800">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3 text-navy-950">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                        Service Features:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                            <span>{spec}</span>
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
        title="Require reliable corporate transport for your team?"
        subtitle="Let us know your daily routes, vehicle requirements, and crew sizes. We'll provide customized corporate fleet pricing within hours."
        serviceName="Transport Services"
      />
    </>
  );
}
