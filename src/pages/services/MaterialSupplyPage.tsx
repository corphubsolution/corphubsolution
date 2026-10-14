import SEO from '../../components/seo/SEO';
import { 
  Package, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  HardHat, 
  Wrench, 
  Zap, 
  Boxes 
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import SectionLabel from '../../components/ui/SectionLabel';
import ScrollReveal from '../../components/ui/ScrollReveal';
import FeatureItem from '../../components/ui/FeatureItem';
import Button from '../../components/ui/Button';
import EnquiryCTA from '../../components/sections/EnquiryCTA';
import { buildEnquiryLink } from '../../utils/whatsapp';

const SUPPLY_CATEGORIES = [
  {
    icon: HardHat,
    title: 'Safety Equipment & PPE Essentials',
    tag: 'Safety & Compliance',
    desc: 'Supply of certified personal protective equipment to ensure strict on-site safety compliance. Fast dispatch for immediate workforce onboarding and site audits.',
    items: ['ISI-certified safety helmets & goggles', 'High-visibility reflective jackets & vests', 'Steel-toe safety footwear & gumboots', 'Safety harnesses, gloves & respiratory masks'],
  },
  {
    icon: Boxes,
    title: 'Construction & Civil Consumables',
    tag: 'Civil & Infra',
    desc: 'Local procurement and reliable truckload coordination of building materials, civil construction supplies, and site infrastructure consumables across Gujarat.',
    items: ['Scaffolding pipes, couplers & clamps', 'Aggregates, sand, and cement liaison', 'Binding wire, shuttering plywood & tarpaulins', 'Curing chemicals & waterproofing additives'],
  },
  {
    icon: Zap,
    title: 'Electrical & Plumbing Supplies',
    tag: 'MEP Infrastructure',
    desc: 'Rapid sourcing of critical electrical cables, lighting towers, industrial switchgear, conduits, and heavy-duty plumbing fittings from verified distributors.',
    items: ['Industrial armored cables & distribution panels', 'LED floodlights & temporary site lighting towers', 'HDPE, PVC & GI pipes and high-pressure valves', 'Earthing materials & circuit protection devices'],
  },
  {
    icon: Wrench,
    title: 'Industrial Tools & Equipment Rental',
    tag: 'Tools & Machinery',
    desc: 'Supply of industrial power tools, pneumatic equipment, and liaison for heavy machinery rentals (silent DG generator sets, cranes, earthmovers, and scissor lifts).',
    items: ['Heavy-duty welding machines & cutting torches', 'Rotary hammers, angle grinders & power tools', 'Silent diesel generators (15 kVA to 250 kVA)', 'Material handling equipment & hydra crane support'],
  },
];

export default function MaterialSupplyPage() {
  const whatsappUrl = buildEnquiryLink('Material Supply & Equipment Sourcing');

  return (
    <>
      <SEO
        title="Industrial Material Supply & Site Procurement | Palanpur, Gujarat | CORPHUB SOLUTION"
        description="Reliable procurement of industrial construction consumables, PPE safety gear, electrical items, and project machinery across Palanpur and Gujarat."
        canonicalPath="/services/material-supply"
        ogImage="/assets/images/material-supply-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Material Supply', href: '/services/material-supply' },
        ]}
        serviceSchema={{
          name: 'Industrial Material & Equipment Supply',
          description: 'On-demand site procurement of construction consumables, safety equipment, electrical supplies, and equipment rentals in Gujarat.',
          serviceType: 'Industrial Procurement & Material Supply',
        }}
      />

      {/* Hero */}
      <PageHero
        title="Industrial Material & Equipment Supply"
        subtitle="On-Demand Site Procurement"
        image="/assets/images/material-supply-hero.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Material Supply' },
        ]}
      />

      {/* Overview */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionLabel text="Procurement Without Bottlenecks" />
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#071C3C',
                    lineHeight: 1.15,
                  }}
                >
                  Reliable Material Sourcing Direct to Your Project Site
                </h2>
                <p className="text-base leading-relaxed mb-4 text-gray-600">
                  Unanticipated material shortages can halt an entire construction or commissioning crew, turning minor procurement delays into thousands of rupees in lost productivity. Finding dependable local suppliers in unfamiliar districts is often a trial-and-error gamble.
                </p>
                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  <strong className="text-navy-900">CORPHUB SOLUTION</strong> bridges this gap. With a deep supplier network centered around Palanpur and extending throughout Gujarat, we source and deliver verified industrial equipment, construction consumables, safety gear, and tools directly to your site coordinates.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <FeatureItem text="Verified Quality Standards" description="Supplies matching required ISI, ISO, and project specs." />
                  <FeatureItem text="Direct Gate Delivery" description="Coordinated transport to your exact site storage yard." />
                  <FeatureItem text="Emergency Dispatches" description="Fast turnarounds for urgent project site requirements." />
                  <FeatureItem text="Transparent GST Invoicing" description="Clear billing that integrates easily with ERP & accounts." />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={whatsappUrl} external>
                    Enquire on WhatsApp
                  </Button>
                  <Button variant="secondary" href="/contact">
                    Submit Material BoQ
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1A4D8F 0%, #071C3C 100%)' }}
                >
                  <h3
                    className="font-heading font-bold text-xl mb-4 border-b border-white/10 pb-3 text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    Our Procurement Advantage
                  </h3>
                  <div className="space-y-4 text-sm text-white/80">
                    <div className="flex items-start gap-3">
                      <Truck className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Local Stock Access:</strong> Direct connections with regional stockists in Palanpur, Mehsana, and Ahmedabad.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>No Counterfeits:</strong> Genuine brand materials with warranty certificates and test reports where specified.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Package className="shrink-0 text-orange-400 mt-1" size={18} />
                      <div>
                        <strong>Consolidated Shipments:</strong> Combine multiple consumable categories into a single delivery vehicle.
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <p className="text-xs text-white/60">
                      Have a specific Bill of Quantities (BoQ)? Send it over for competitive local vendor quote matching.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Categories */}
      <section className="section-py" style={{ background: '#F8FAFC' }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel text="Material Verticals" />
            <h2
              className="font-display mt-2"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#071C3C',
              }}
            >
              What We Source & Coordinate
            </h2>
            <p className="text-sm mt-3 text-gray-500">
              Essential industrial categories handled through our verified regional supplier network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPPLY_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(26, 77, 143, 0.08)', color: '#1A4D8F' }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-50 text-navy-800">
                          {cat.tag}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3 text-navy-950">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                        Common Items Sourced:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                            <span>{item}</span>
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
        title="Need urgent material sourcing for your project site?"
        subtitle="Send your requirement list or BoQ. Our sourcing team in Palanpur will respond with availability, lead times, and rates."
        serviceName="Material Supply Services"
      />
    </>
  );
}
