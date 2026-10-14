import SEO from '../../components/seo/SEO';
import { 
  Building2, 
  CheckCircle2, 
  Home, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Key, 
  Sparkles 
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import SectionLabel from '../../components/ui/SectionLabel';
import ScrollReveal from '../../components/ui/ScrollReveal';
import FeatureItem from '../../components/ui/FeatureItem';
import Button from '../../components/ui/Button';
import EnquiryCTA from '../../components/sections/EnquiryCTA';
import { buildEnquiryLink } from '../../utils/whatsapp';

const ACCOMMODATION_TYPES = [
  {
    icon: Sparkles,
    title: 'Executive & Management Guest Houses',
    tag: 'Premium',
    description: 'Fully-furnished, air-conditioned apartments and standalone bungalows designed for senior management, visiting auditors, and technical consultants. Includes high-speed broadband, housekeeping, and quiet work environments.',
    features: ['High-speed Wi-Fi & AC', 'Dedicated housekeeping options', 'Executive furnishings & appliances', 'Gated security & parking'],
  },
  {
    icon: Home,
    title: 'Engineers & Supervisors Shared Flats',
    tag: 'Long-term / Project',
    description: 'Well-maintained 2 BHK and 3 BHK residential units located within easy commuting distance of your industrial plant or construction site. Fully setup with bedding, water purifiers, kitchen appliances, and power backup.',
    features: ['Furnished bedrooms & living spaces', 'Operational kitchen & refrigerator', 'Reliable water & electricity supply', 'Proximity to major transit routes'],
  },
  {
    icon: Building2,
    title: 'Workforce & Technician Housing',
    tag: 'Scalable',
    description: 'Clean, safe, and regulated accommodation complexes capable of housing large technical and contract teams. Structured to meet high hygiene, safety, and labor welfare standards.',
    features: ['Adequate sanitation & bathing units', 'Ventilated, hygienic sleeping quarters', 'Proximity to project shuttles', 'Periodic maintenance & sanitisation'],
  },
  {
    icon: Key,
    title: 'Turnkey Lease & Facility Management',
    tag: 'End-to-End',
    description: 'We manage landlord negotiations, lease agreements, security deposits, utility billing, and maintenance repairs so your HR and procurement departments are never burdened with rental hassles.',
    features: ['Direct landlord liaison', 'Standard corporate lease agreements', 'Electricity & utility bill management', '24/7 emergency maintenance support'],
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Team Requirements',
    desc: 'Tell us team size, tier (executives, engineers, technicians), preferred radius to site, and expected tenure.',
  },
  {
    step: '02',
    title: 'Shortlisted Property Visits',
    desc: 'We curate vetted properties in Palanpur / North Gujarat and provide photo tours or on-site inspections.',
  },
  {
    step: '03',
    title: 'Fast Furnishing & Setup',
    desc: 'We arrange furniture, bedding, appliances, utilities, and internet connections before your team arrives.',
  },
  {
    step: '04',
    title: 'Continuous Support',
    desc: 'Our local coordination team handles ongoing maintenance, repairs, and landlord coordination throughout.',
  },
];

export default function AccommodationPage() {
  const whatsappUrl = buildEnquiryLink('Accommodation Services');

  return (
    <>
      <SEO
        title="Industrial Accommodation & Corporate Guest Houses | Palanpur, Gujarat | CORPHUB SOLUTION"
        description="Turnkey corporate accommodation, engineer flats, and managed workforce housing in Palanpur, Banaskantha, and Gujarat. Complete lease & facility management."
        canonicalPath="/services/accommodation"
        ogImage="/assets/images/accommodation-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodation', href: '/services/accommodation' },
        ]}
        serviceSchema={{
          name: 'Industrial Accommodation & Corporate Guest Houses',
          description: 'Turnkey project staff accommodation, executive guest houses, and managed engineer flats in Palanpur and Gujarat.',
          serviceType: 'Corporate Accommodation Services',
        }}
      />

      {/* Hero */}
      <PageHero
        title="Project Accommodation & Housing Solutions"
        subtitle="Industrial Accommodation"
        image="/assets/images/accommodation-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Accommodation' },
        ]}
      />

      {/* Overview */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionLabel text="Corporate Living Support" />
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#071C3C',
                    lineHeight: 1.15,
                  }}
                >
                  Comfortable, Verified Living Spaces for Your Industrial Workforce
                </h2>
                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  Securing quality housing in industrial belts like Banaskantha, Mehsana, and rural project zones across Gujarat can be frustrating. Long search cycles, substandard living conditions, unclear landlord terms, and absent maintenance directly impact your team's morale and productivity.
                </p>
                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  <strong className="text-navy-900">CORPHUB SOLUTION</strong> acts as your ground partner. We maintain relationships with verified property owners across the region, allowing us to rapidly deploy furnished guest houses, executive bungalows, and team apartments tailored to your project schedule.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <FeatureItem text="Proximity to project sites" description="Minimize transit time and daily commute fatigue." />
                  <FeatureItem text="Turnkey ready-to-move units" description="Equipped with bedding, appliances, and power backup." />
                  <FeatureItem text="Flexible lease terms" description="From short-term project sprints to multi-year contracts." />
                  <FeatureItem text="Single unified billing" description="Clean GST billing without tracking dozens of landlords." />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={whatsappUrl} external>
                    Enquire on WhatsApp
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Request Housing Proposal
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #0A2E56 0%, #071C3C 100%)' }}
                >
                  <h3
                    className="font-heading font-bold text-xl mb-4 border-b border-white/10 pb-3 text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    Why Companies Rely on Our Housing
                  </h3>
                  <ul className="space-y-4 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="shrink-0 text-orange-400 mt-1" size={18} />
                      <span><strong>Safety Verified:</strong> Safe neighborhoods, secure compounds, and reliable infrastructure.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="shrink-0 text-orange-400 mt-1" size={18} />
                      <span><strong>Fast Turnaround:</strong> Accommodations ready for occupancy within 24 to 72 hours of approval.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="shrink-0 text-orange-400 mt-1" size={18} />
                      <span><strong>Hyper-Local Reach:</strong> Active listings throughout Palanpur, Deesa, Mehsana, and Banaskantha.</span>
                    </li>
                  </ul>

                  <div className="mt-8 p-4 rounded-xl bg-white/10 border border-white/15">
                    <p className="text-xs uppercase tracking-wider text-orange-300 font-bold mb-1">
                      Need custom configuration?
                    </p>
                    <p className="text-xs text-white/70">
                      We furnish properties to meet specific multinational corporate safety and accommodation guidelines.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Tiers Grid */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Housing Categories" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              Accommodation Tailored to Every Team Tier
            </h2>
            <p className="text-sm mt-3 text-gray-500">
              Whether you need an executive suite for corporate directors or housing for a 50-member technical team, we have ready configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACCOMMODATION_TYPES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(10, 46, 86, 0.08)', color: '#0A2E56' }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-50 text-navy-800">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3 text-navy-950">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                        Included Features:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.features.map((feat, fIdx) => (
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

      {/* How it works */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Seamless Setup" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              How We Mobilise Your Accommodation
            </h2>
            <p className="text-sm mt-3 text-gray-500">
              Our structured 4-step deployment gets your team comfortably settled without administrative drag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 relative h-full">
                  <span className="font-display text-4xl font-extrabold text-navy-200 block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-navy-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <EnquiryCTA
        title="Need workforce housing or executive guest houses?"
        subtitle="Contact our Palanpur office for immediate availability, pricing estimates, and property site visits across Gujarat."
        serviceName="Accommodation Services"
      />
    </>
  );
}
