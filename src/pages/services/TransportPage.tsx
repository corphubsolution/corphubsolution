import SEO from '../../components/seo/SEO';
import { 
  Car, 
  Plane, 
  MapPin, 
  Navigation, 
  CalendarClock, 
  CalendarDays, 
  Users2, 
  SlidersHorizontal, 
  Check, 
  Phone, 
  Mail, 
  ArrowRight,
  Building2
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import { buildEnquiryLink } from '../../utils/whatsapp';
import { CONTACT } from '../../data/contact';

const SERVICES = [
  {
    icon: Users2,
    title: 'CORPORATE STAFF TRANSPORTATION',
    desc: 'Daily pickup-drop and fixed transportation for project staff, engineers and employees.',
  },
  {
    icon: Plane,
    title: 'AIRPORT / RAILWAY TRANSFERS',
    desc: 'Guest and visiting team pickup and drop arrangements with on-time flight & train coordination.',
  },
  {
    icon: Car,
    title: 'LOCAL TRANSPORTATION',
    desc: 'City meetings, site visits, hotel-to-project site transfers and official business travel.',
  },
  {
    icon: Navigation,
    title: 'OUTSTATION TRAVEL',
    desc: 'Connecting Palanpur, Ahmedabad, Mumbai, Surat, Vadodara, Rajkot, Nashik and other regional locations.',
  },
  {
    icon: CalendarClock,
    title: 'LONG-TERM VEHICLE ARRANGEMENT',
    desc: 'Monthly dedicated contracts and fixed-period arrangements for 4, 5, 10 months or full project cycles.',
  },
  {
    icon: CalendarDays,
    title: 'SHORT-TERM / DAILY BOOKING',
    desc: 'Executive cars, tempo travellers and other vehicles available for one day or a few days on-demand.',
  },
  {
    icon: Building2,
    title: 'EMPLOYEE / TEAM TRANSPORTATION',
    desc: 'Suitable, comfortable vehicles configured for small technical teams to large project workforce teams.',
  },
  {
    icon: SlidersHorizontal,
    title: 'CUSTOMIZED TRANSPORTATION',
    desc: 'Tailored solutions planned entirely based on your route, timing, passenger capacity and project requirements.',
  },
];

const TRAVEL_OPTIONS = [
  { icon: Car, label: 'DAILY PICKUP-DROP' },
  { icon: Plane, label: 'AIRPORT TRANSFER' },
  { icon: MapPin, label: 'LOCAL SITE VISIT' },
  { icon: Navigation, label: 'OUTSTATION TRAVEL' },
  { icon: CalendarClock, label: 'MONTHLY VEHICLE CONTRACT' },
  { icon: Users2, label: 'CAR / TEMPO TRAVELLER' },
  { icon: SlidersHorizontal, label: 'CUSTOMIZED PACKAGE' },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Share Your Requirement',
    desc: 'Tell us your route, schedule, vehicle type, and transportation needs.',
  },
  {
    step: '02',
    title: 'Customized Planning',
    desc: 'We coordinate a suitable vehicle, verified chauffeur, and service arrangement.',
  },
  {
    step: '03',
    title: 'Requirement-Based Quotation',
    desc: 'Pricing is calculated according to the actual requirement and agreed commercial terms.',
  },
  {
    step: '04',
    title: 'Transportation Coordination',
    desc: 'We coordinate the transportation service seamlessly according to the agreed schedule.',
  },
];

export default function TransportPage() {
  const whatsappUrl = buildEnquiryLink('Corporate Transportation Services');

  return (
    <>
      <SEO
        title="Customized Corporate Transportation Solutions | CORPHUB SOLUTION"
        description="Safe. Reliable. Flexible. Complete Coordination. Corporate staff transportation, outstation business travel, airport transfers, and long-term vehicle arrangements."
        canonicalPath="/services/transport"
        ogImage="/assets/images/Transport.png"
        keywords={[
          'Corporate transportation services Gujarat',
          'Industrial staff commute shuttle Palanpur',
          'Project team vehicle rental Banaskantha',
          'Airport transfers Ahmedabad to Palanpur',
          'Tempo traveller hire industrial sites Gujarat',
          'Long term corporate car rental Palanpur',
          'Customized employee transportation without km limit'
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Transport', href: '/services/transport' },
        ]}
        serviceSchema={{
          name: 'Customized Corporate Transportation Solutions',
          description: 'Corporate staff pickup & drop, airport transfers, outstation travel, and long-term vehicle contracts in Palanpur and Gujarat.',
          serviceType: 'Corporate Transportation Services',
        }}
        faqSchema={[
          {
            question: 'Does CorpHub Solution offer corporate transportation without fixed kilometre limits?',
            answer: 'Yes, CorpHub Solution does not follow fixed standard packages or predefined kilometre limits. Each quote is planned specifically according to the company’s actual route, schedule, and passenger requirements.',
          },
          {
            question: 'What types of vehicles can be arranged for project teams?',
            answer: 'Vehicles include executive sedans, Toyota Innova Crysta MPVs, SUVs, 12 to 26-seater Tempo Travellers, and workforce buses with verified professional drivers.',
          },
          {
            question: 'Can companies hire vehicles on long-term monthly contracts?',
            answer: 'Yes, CorpHub Solution offers fixed-period and long-term monthly transportation contracts for 4, 5, 10 months, or full project lifecycles.',
          },
        ]}
      />

      {/* Hero */}
      <PageHero
        title="CORPORATE STAFF TRANSPORTATION & TRAVEL SOLUTIONS"
        subtitle="Safe. Reliable. Flexible. Complete Coordination."
        image="/assets/images/Transport.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Transport' },
        ]}
      />

      {/* Hero Visual Card Section (Matching Flyer Structure) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="container-site">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6">
                <ScrollReveal>
                  {/* Angled Ribbon / Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#071C3C] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider mb-4 border border-orange-500/30">
                    <span className="text-[#FF6B00]">SAFE. RELIABLE. FLEXIBLE. COMPLETE COORDINATION.</span>
                  </div>

                  <h1
                    className="font-display mb-4 text-[#071C3C]"
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                    }}
                  >
                    CORPORATE STAFF TRANSPORTATION & TRAVEL <span className="text-[#FF6B00]">SOLUTIONS</span>
                  </h1>

                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    At <strong className="text-[#071C3C]">CorpHub Solution</strong>, we arrange reliable transportation solutions for project staff, engineers, employees, guests and visiting teams. From daily pickup-drop to outstation travel and long-term vehicle arrangements, we coordinate every requirement according to route, timing, passenger capacity and project schedule.
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    We do not follow fixed standard packages or predefined daily and monthly kilometre limits. Each quotation is prepared according to the actual transportation requirements of the company.
                  </p>

                  {/* Highlights Box */}
                  <div className="bg-[#FFF7ED] border-l-4 border-[#FF6B00] p-4 rounded-r-xl mb-6">
                    <p className="font-heading font-extrabold text-sm text-[#071C3C]">
                      No Fixed Packages. No Standard Kilometre Limits.
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Just transportation solutions designed specifically around your requirements.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="primary" href={whatsappUrl} external>
                      Enquire on WhatsApp
                    </Button>
                    <Button variant="secondary" href="/contact">
                      Request Custom Quote
                    </Button>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Hero Image (Transport.png) */}
              <div className="lg:col-span-6">
                <ScrollReveal delay={200}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                    <img 
                      src="/assets/images/Transport.png" 
                      alt="Corporate Transportation Fleet — Sedans, SUVs & Tempo Travellers" 
                      className="w-full h-[320px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-[#071C3C]/90 backdrop-blur-md text-white border border-white/20 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-pulse" />
                      <span className="text-xs font-bold tracking-wider">YOUR PROJECT, OUR RESPONSIBILITY</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-lg flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#071C3C]">Executive Cars, Shuttles & Tempo Travellers</p>
                        <p className="text-[11px] text-gray-500">Verified commercial vehicles with professional chauffeurs</p>
                      </div>
                      <span className="text-xs font-bold text-[#FF6B00] bg-orange-50 px-2.5 py-1 rounded-md">
                        24x7 Fleet Support
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* OUR TRANSPORTATION SERVICES INCLUDE (8 Grid Cards with Navy Circular Icons) */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Dedicated Logistics
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              OUR <span className="text-[#FF6B00]">TRANSPORTATION SERVICES</span> INCLUDE
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-navy-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-[#071C3C] text-white flex items-center justify-center mb-5 group-hover:bg-[#FF6B00] transition-colors shadow-md shrink-0">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-heading font-extrabold text-sm text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLEXIBLE TRAVEL OPTIONS (Dark Navy Horizontal Strip) */}
      <section className="py-10 bg-[#071C3C] text-white">
        <div className="container-site">
          <div className="text-center mb-8">
            <h3 className="font-heading font-extrabold text-base md:text-lg tracking-wider text-[#FF6B00] uppercase">
              FLEXIBLE TRAVEL OPTIONS
            </h3>
            <div className="w-12 h-0.5 bg-white/20 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {TRAVEL_OPTIONS.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-colors"
                >
                  <div className="text-[#FF6B00] mb-2.5">
                    <Icon size={24} />
                  </div>
                  <p className="text-[11px] font-extrabold text-white tracking-wider leading-tight">
                    {opt.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW OUR SERVICE WORKS (4 Steps) */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Transparent Coordination
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              How Our Service Works
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-[#071C3C] text-white font-bold flex items-center justify-center text-sm shadow-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-[#071C3C] mb-2">
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

      {/* WHY CHOOSE US (Warm Cream/Tan Box Matching Flyer) */}
      <section className="py-8 bg-[#F8FAFC]">
        <div className="container-site max-w-4xl">
          <div className="bg-[#FFF8F0] border border-[#FED7AA] rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="font-heading font-extrabold text-lg text-[#071C3C] mb-4 uppercase tracking-wider">
              Why Choose Us
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Reliable vehicles and professional coordination
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Flexible routes, timings and passenger capacity
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  One requirement. One point of Contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT FOOTER STRIP (Matching Bottom of Flyer) */}
      <section className="py-10 bg-[#071C3C] text-white border-t border-white/10">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-heading font-extrabold text-xl text-white tracking-wider">
                CORPHUB <span className="text-[#FF6B00]">SOLUTION</span>
              </p>
              <p className="text-xs text-white/70 mt-1">
                Corporate Accommodation, Project Support, Transportation & Industrial Solutions
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a 
                href={`tel:${CONTACT.phoneRaw}`} 
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl border border-white/15 transition-colors text-sm font-bold text-white"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white">
                  <Phone size={14} />
                </div>
                <span>{CONTACT.phone}</span>
              </a>

              <a 
                href={`mailto:${CONTACT.email}`} 
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl border border-white/15 transition-colors text-sm font-bold text-white"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
                <span>{CONTACT.email}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm"
              >
                Book Vehicle <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-extrabold tracking-widest text-[#FF6B00] uppercase">
              — YOUR PROJECT, OUR RESPONSIBILITY —
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
