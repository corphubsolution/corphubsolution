import SEO from '../../components/seo/SEO';
import { 
  Calendar,
  Sparkles, 
  Award, 
  Users2, 
  MapPin, 
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Scissors,
  Building2,
  UtensilsCrossed,
  Laptop,
  BedDouble,
  Sliders,
  Check,
  Clock,
  Target,
  Layers,
  FileCheck2,
  Presentation
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import { buildEnquiryLink } from '../../utils/whatsapp';

const HERO_PILLS = [
  { icon: Calendar, label: 'Conferences & Meetings' },
  { icon: Award, label: 'Inaugurations & Groundbreakings' },
  { icon: Building2, label: 'Corporate Events' },
  { icon: Layers, label: 'End-to-End Coordination' },
];

const EDGE_FEATURES = [
  {
    icon: Layers,
    title: 'Seamless Coordination',
    desc: 'We connect all key services — venue, transport, accommodation, catering and more — through one coordinated channel.',
  },
  {
    icon: Clock,
    title: 'On-Time Execution',
    desc: 'Detailed run-of-show, vendor follow-ups and real-time coordination support.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    desc: 'Access to reliable venues and service providers across Palanpur, Banaskantha, Gujarat and other locations.',
  },
  {
    icon: Target,
    title: 'Focus on Your Objectives',
    desc: 'We handle logistics and coordination so your team can focus on the event experience and key stakeholders.',
  },
];

const EVENT_SERVICES = [
  {
    title: 'Plant Inaugurations & Groundbreakings',
    desc: 'Coordinate industrial plant launches, facility openings and project milestone events.',
    icon: Scissors,
    image: '/assets/images/events/plant-inauguration.jpg',
    tag: 'Industrial Milestone',
  },
  {
    title: 'Vendor Meets & Stakeholder Conferences',
    desc: 'Plan and coordinate business conferences, annual meets and client appreciation events.',
    icon: Users2,
    image: '/assets/images/events/vendor-conference.jpg',
    tag: 'B2B Summit',
  },
  {
    title: 'Corporate Events & Gala Dinners',
    desc: 'Manage corporate gatherings, award ceremonies, networking events and more.',
    icon: UtensilsCrossed,
    image: '/assets/images/events/gala-dinner.jpg',
    tag: 'Celebration & Awards',
  },
  {
    title: 'Training Workshops & Seminars',
    desc: 'End-to-end coordination for technical workshops, HSE programs and induction sessions.',
    icon: Laptop,
    image: '/assets/images/events/training-seminar.jpg',
    tag: 'Technical & HSE',
  },
  {
    title: 'VIP Hospitality & Guest Management',
    desc: 'Accommodation coordination, airport transfers and hospitality support for visiting guests and senior management.',
    icon: BedDouble,
    image: '/assets/images/events/vip-hospitality.jpg',
    tag: 'Executive Travel',
  },
  {
    title: 'Event Logistics & Technical Support',
    desc: 'Venue setup, audiovisual systems, stage design, branding, seating arrangements and on-site coordination.',
    icon: Sliders,
    image: '/assets/images/events/event-logistics.jpg',
    tag: 'Turnkey AV & Stage',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    icon: FileCheck2,
    title: 'Share Your Requirements',
    desc: 'Tell us about your event type, date, location, guest count and key requirements.',
  },
  {
    step: '02',
    icon: Calendar,
    title: 'Plan & Coordinate',
    desc: 'We suggest suitable options and coordinate with vendors as per your needs.',
  },
  {
    step: '03',
    icon: Users2,
    title: 'Execute the Event',
    desc: 'On-site coordination and vendor management for a smooth event experience.',
  },
  {
    step: '04',
    icon: Presentation,
    title: 'Post-Event Support',
    desc: 'Final reporting and support for any follow-up requirements.',
  },
];

const AUDIENCES = [
  'Industrial & Manufacturing Companies',
  'Engineering, EPC & Project Companies',
  'Corporate Offices & Business Groups',
  'Government & Institutional Events',
];

const GALLERY_PHOTOS = [
  { src: '/assets/images/events/event-hero.jpg', alt: 'Grand Corporate Auditorium' },
  { src: '/assets/images/events/plant-inauguration.jpg', alt: 'Plant Inauguration Ribbon Cutting' },
  { src: '/assets/images/events/gala-dinner.jpg', alt: 'Corporate Gala Dinner Banquet' },
  { src: '/assets/images/events/training-seminar.jpg', alt: 'Corporate Workshop & Seminar' },
  { src: '/assets/images/events/vip-hospitality.jpg', alt: 'VIP Guest Executive Suite' },
  { src: '/assets/images/events/event-logistics.jpg', alt: 'AV Setup & Stage Production' },
];

export default function EventManagementPage() {
  const whatsappUrl = buildEnquiryLink('Corporate & Industrial Event Management');

  return (
    <>
      <SEO
        title="Corporate & Industrial Event Management in Gujarat | Plant Inauguration, Conferences | CORPHUB SOLUTION"
        description="CORPHUB SOLUTION coordinates corporate & industrial events from planning to execution in Gujarat. Plant inaugurations, foundation stone ceremonies, vendor meets, B2B conferences, gala dinners, training workshops & VIP hospitality across Palanpur, Ahmedabad, Sanand, Gandhinagar & Vadodara."
        canonicalPath="/services/event-management"
        ogImage="/assets/images/events/event-hero.jpg"
        keywords={[
          'CORPHUB SOLUTION event management',
          'corporate event management Gujarat',
          'corporate event management company Ahmedabad',
          'industrial plant inauguration Gujarat',
          'factory inauguration event planners Gujarat',
          'plant inauguration ceremony organizers Palanpur',
          'groundbreaking ceremony organizers Banaskantha',
          'factory opening ceremony organizers Vadodara',
          'B2B vendor conference organizers Gujarat',
          'corporate gala dinner planning Mehsana',
          'industrial milestone event coordinator Gujarat',
          'ribbon cutting ceremony planners Gujarat',
          'foundation stone laying ceremony organizers',
          'VIP management and hospitality for industrial events',
          'corporate conference and seminar organizers Gujarat',
          'technical training workshop coordination Gujarat',
          'large-scale corporate event management manufacturing India',
          'turnkey event production company for factory inauguration',
          'end-to-end corporate event planners Gujarat',
          'AV lighting LED wall setup for factory openings',
          'venue setup stage design corporate events Gujarat',
          'corporate hospitality and logistics for inaugurations',
          'government vetted industrial inauguration events Gujarat',
          'annual meet and client appreciation event organizers',
          'safety training HSE workshop organizers Gujarat',
          'CorpHub Solution events Gujarat'
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Event Management', href: '/services/event-management' },
        ]}
        serviceSchema={{
          name: 'Corporate & Industrial Event Management',
          description: 'CORPHUB SOLUTION provides turnkey event planning and logistical coordination for industrial plant inaugurations, corporate summits, vendor meets, training workshops, and executive gatherings across Gujarat.',
          serviceType: 'Corporate & Industrial Event Management',
        }}
        faqSchema={[
          {
            question: 'What types of events does CORPHUB SOLUTION manage?',
            answer: 'CORPHUB SOLUTION coordinates industrial plant inaugurations, foundation stone ceremonies, factory openings, vendor meets, annual corporate conferences, technical training seminars, HSE workshops, VIP delegations, and corporate gala dinners across Gujarat.',
          },
          {
            question: 'Can CORPHUB SOLUTION handle guest accommodation and airport transfers along with event setup?',
            answer: 'Yes. Because CORPHUB SOLUTION also manages corporate accommodation and transportation services, guest transfers, hotel bookings, VIP hospitality, and venue staging are handled under one seamless coordination contract.',
          },
          {
            question: 'Which locations does CORPHUB SOLUTION serve for event management in Gujarat?',
            answer: 'CORPHUB SOLUTION provides on-ground event management across Palanpur, Banaskantha, Mehsana, Sanand, Ahmedabad, Gandhinagar, Vadodara, Bharuch, and major industrial centers across Gujarat.',
          },
          {
            question: 'Does CORPHUB SOLUTION manage large-scale industrial plant inauguration ceremonies?',
            answer: 'Yes. CORPHUB SOLUTION handles complete coordination for large-scale plant inaugurations including venue setup, stage design, AV and lighting, VIP protocol management, catering, ribbon-cutting arrangements, and on-site logistics.',
          },
          {
            question: 'Can CORPHUB SOLUTION organize corporate training workshops and safety seminars?',
            answer: 'Yes. CORPHUB SOLUTION coordinates end-to-end logistics for corporate training workshops, HSE safety programs, induction sessions, and technical seminars including venue, AV setup, participant accommodation, and transport.',
          },
        ]}
      />

      {/* ── 1. HERO SECTION (Grand Auditorium Visual with Floating Badge & Dual CTA) ── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#071C3C] text-white overflow-hidden pt-24 pb-16">
        {/* Background Image with Deep Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/events/event-hero.jpg"
            alt="Corporate and Industrial Event Auditorium"
            className="w-full h-full object-cover object-center brightness-90"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(7, 28, 60, 0.95) 0%, rgba(7, 28, 60, 0.85) 50%, rgba(7, 28, 60, 0.65) 100%)'
            }}
          />
        </div>

        <div className="container-site relative z-10 max-w-6xl">
          <div className="max-w-3xl">
            <ScrollReveal>
              {/* Top Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-400/40 bg-orange-500/10 backdrop-blur-xs mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-[#FF6B00] uppercase">
                  Corporate & Industrial Events
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="font-display font-extrabold tracking-tight mb-4 leading-tight"
                style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}
              >
                Corporate & Industrial <br />
                <span className="text-[#FF6B00]">Event Management</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl font-light">
                From planning to execution, we coordinate every detail so you can focus on what matters most.
              </p>

              {/* 4 Feature Icon Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {HERO_PILLS.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white/90 hover:bg-white/15 transition-colors"
                    >
                      <Icon size={16} className="text-[#FF6B00] shrink-0" />
                      <span className="truncate">{pill.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-orange-500/25 transition-all text-sm uppercase tracking-wider"
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                  <ExternalLink size={15} />
                </a>

                <Button
                  to="/contact"
                  variant="outline-white"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 text-sm font-bold"
                >
                  <span>Plan Your Event</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. LOGISTICAL DISTRACTION & CORPHUB EDGE (2-Column Grid) ─────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Story + Highlights */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="inline-block px-3 py-1 rounded-md bg-orange-50 text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest mb-3 border border-orange-100">
                  Events Executed With Professional Coordination
                </div>

                <h2
                  className="font-display font-extrabold text-[#071C3C] mb-6 leading-tight"
                  style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)' }}
                >
                  Memorable Milestone Events <br />
                  <span className="text-[#071C3C]">Without the Logistical Distraction</span>
                </h2>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                  Industrial inaugurations, shareholder visits, vendor conferences and corporate gatherings require detailed planning, coordination and execution. <strong className="text-[#071C3C] font-extrabold">CORPHUB SOLUTION</strong> manages event logistics, venue coordination, catering, audiovisual setups, travel and accommodation support so your teams can focus on their guests, agenda and business objectives.
                </p>

                {/* 4 Feature Checkmark Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Single Point of Contact</h4>
                      <p className="text-xs text-gray-500 mt-0.5">for complete event coordination</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Experienced Local Coordination</h4>
                      <p className="text-xs text-gray-500 mt-0.5">across Gujarat</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Vendor Management</h4>
                      <p className="text-xs text-gray-500 mt-0.5">for venues, catering, AV, transport and more</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Customised Solutions</h4>
                      <p className="text-xs text-gray-500 mt-0.5">as per your event type and budget</p>
                    </div>
                  </div>
                </div>

                {/* Dual Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>

                  <Button
                    to="/contact"
                    variant="outline"
                    size="md"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50 text-xs sm:text-sm font-extrabold"
                  >
                    <span>Discuss Your Event Plan</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Navy Card "The CORPHUB Event Edge" */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={150}>
                <div 
                  className="rounded-3xl p-7 sm:p-9 text-white shadow-xl relative overflow-hidden"
                  style={{ background: '#071C3C', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                >
                  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                    <Sparkles className="text-[#FF6B00]" size={22} />
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      The CORPHUB Event Edge
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {EDGE_FEATURES.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#FF6B00]">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h4 className="font-heading font-extrabold text-sm text-white mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-white/70 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Micro reassurance footer */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                    <span>100% Turnkey Execution</span>
                    <span className="text-[#FF6B00] font-bold">Palanpur & Gujarat</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. COMPREHENSIVE EVENT SOLUTIONS (6 Cards with Photos & Modal details) ── */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container-site max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Our Event Management Services
            </span>
            <h2
              className="font-display font-extrabold text-[#071C3C]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
            >
              Comprehensive Event Solutions
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              From plant inaugurations to corporate conferences, we coordinate events tailored to your requirements, guests and project objectives.
            </p>
          </div>

          {/* 6 Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {EVENT_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 70}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xs hover:shadow-xl hover:border-orange-200 transition-all duration-300 h-full flex flex-col group">
                    {/* Image Header with Badge */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-xs text-[#071C3C] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                          {srv.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-[#071C3C] text-white flex items-center justify-center shadow-md border border-white/20">
                        <Icon size={20} className="text-[#FF6B00]" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-2.5 leading-snug">
                          {srv.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                          {srv.desc}
                        </p>
                      </div>

                      {/* Footer Link / WhatsApp Action */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <a
                          href={buildEnquiryLink(`Enquiry regarding ${srv.title}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-[#FF6B00] hover:text-[#071C3C] transition-colors flex items-center gap-1.5"
                        >
                          <span>Enquire Now</span>
                          <ArrowRight size={14} />
                        </a>

                        <a
                          href={buildEnquiryLink(`Enquiry regarding ${srv.title}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-orange-200 text-[#FF6B00] flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-all shadow-2xs"
                          aria-label={`Enquire for ${srv.title}`}
                        >
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. A SIMPLE AND STRUCTURED PROCESS (4 Steps with Arrows) ─────────── */}
      <section className="py-16 md:py-22 bg-white border-y border-gray-100">
        <div className="container-site max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              How We Work
            </span>
            <h2
              className="font-display font-extrabold text-[#071C3C]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
            >
              A Simple and Structured Process
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              From concept to completion, we coordinate every step with the right vendors and service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200/80 text-center flex flex-col items-center h-full relative group hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    {/* Step Icon & Number Badge */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#071C3C] text-white flex items-center justify-center shadow-md group-hover:bg-[#FF6B00] transition-colors">
                        <Icon size={20} className="text-[#FF6B00] group-hover:text-white" />
                      </div>
                      <span className="font-display font-black text-xl text-[#071C3C]">
                        {step.step}
                      </span>
                    </div>

                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#071C3C] mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Connecting Chevron on Desktop */}
                    {idx < PROCESS_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-300 group-hover:text-orange-400 transition-colors">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. EVENTS FOR INDUSTRIAL & CORPORATE NEEDS (Split Grid) ─────────── */}
      <section className="py-16 md:py-24 bg-[#071C3C] text-white">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Card */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="inline-block px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-extrabold uppercase tracking-widest mb-3 border border-white/15">
                  Suitable For Multiple Occasions
                </div>

                <h2
                  className="font-display font-extrabold text-white mb-5 leading-tight"
                  style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
                >
                  Events for Industrial and Corporate Needs
                </h2>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-8">
                  Whether it's a plant inauguration, corporate conference, vendor meet or leadership gathering, we coordinate complete event logistics to ensure a professional and well-managed experience.
                </p>

                {/* Audiences List with Orange Checkmarks */}
                <div className="space-y-3.5 mb-8">
                  {AUDIENCES.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-xs sm:text-sm uppercase tracking-wider"
                >
                  <MessageCircle size={17} />
                  <span>Discuss Your Event</span>
                  <ArrowRight size={15} />
                </a>
              </ScrollReveal>
            </div>

            {/* Right Photo Gallery Grid (6 Photos in 3x2) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={150}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {GALLERY_PHOTOS.map((photo, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden aspect-4/3 relative group border border-white/10 shadow-lg"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 left-2 right-2 text-[11px] font-semibold text-white truncate drop-shadow-sm">
                        {photo.alt}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. FINAL BOTTOM CTA BANNER (Dual High-Contrast Buttons) ──────────── */}
      <section className="py-14 md:py-18 bg-[#05172E] text-white border-t border-white/10">
        <div className="container-site max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h2
                className="font-display font-extrabold text-white mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)' }}
              >
                Planning a corporate event or project milestone?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Share your event details and our team will get back to you with suitable options and coordination support.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider"
              >
                <span>Get a Quote</span>
                <ArrowRight size={16} />
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
