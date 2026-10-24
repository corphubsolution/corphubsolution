import SEO from '../../components/seo/SEO';
import { 
  Building2,
  Users2,
  BedDouble,
  Coffee,
  UtensilsCrossed,
  Utensils,
  Monitor,
  Headphones,
  ClipboardCheck,
  Calendar,
  Sparkles, 
  MapPin, 
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Scissors,
  Check,
  Clock,
  Target,
  Layers,
  FileCheck2,
  Presentation,
  ShieldCheck,
  Briefcase,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import { CONTACT } from '../../data/contact';
import { buildEnquiryLink } from '../../utils/whatsapp';

const HERO_PILLS = [
  { icon: Building2, label: 'Hotel & Venue Sourcing' },
  { icon: Users2, label: 'Meeting & Conference Rooms' },
  { icon: BedDouble, label: 'Guest Stays & Meal Plans' },
  { icon: Headphones, label: 'Complete Coordination' },
];

const USE_CASES = [
  {
    title: 'Company Meetings',
    desc: 'Executive board meetings, annual strategy meets, and quarterly reviews.',
    icon: Briefcase,
    badge: 'Corporate',
  },
  {
    title: 'NGO Meetings',
    desc: 'Regional program discussions, non-profit assemblies, and volunteer coordination.',
    icon: Users2,
    badge: 'Non-Profit',
  },
  {
    title: 'Training Sessions',
    desc: 'Technical workshops, safety HSE inductions, and corporate onboarding camps.',
    icon: Presentation,
    badge: 'Workshops',
  },
  {
    title: 'Project Reviews',
    desc: 'EPC project milestones, consultant audits, and contractor coordination meets.',
    icon: Target,
    badge: 'Industrial',
  },
  {
    title: 'Seminars & Symposia',
    desc: 'Industry knowledge forums, panel discussions, and professional workshops.',
    icon: Layers,
    badge: 'Conferences',
  },
  {
    title: 'Corporate Gatherings',
    desc: 'Stakeholder meets, client appreciation banquets, and annual gala dinners.',
    icon: Sparkles,
    badge: 'Banquets',
  },
];

const ARRANGEMENTS = [
  {
    id: 'venue-selection',
    num: '01',
    title: 'Hotel & Venue Selection',
    subtitle: 'Location & Budget Tailored',
    desc: 'Suitable and reputed hotels and venues coordinated according to location, budget, and specific organizational requirements.',
    icon: Building2,
    highlights: [
      'Vetted partner hotels & venues across Gujarat',
      'Optimized matching for group size and budget parameters',
      'Strategic locations with accessibility and parking',
    ],
  },
  {
    id: 'conference-rooms',
    num: '02',
    title: 'Meeting / Conference Rooms',
    subtitle: 'Professional Workspaces',
    desc: 'Professional meeting spaces equipped for small executive board groups and large corporate delegations alike.',
    icon: Users2,
    highlights: [
      'Boardroom, U-shape, classroom, and theatre seating',
      'High-speed connectivity and quiet, focused environment',
      'Flexible configurations for any group size',
    ],
  },
  {
    id: 'guest-accommodation',
    num: '03',
    title: 'Guest Accommodation',
    subtitle: 'Comfortable & Reliable Stays',
    desc: 'Comfortable, well-appointed rooms for participants, visiting teams, project delegates, and senior executives.',
    icon: BedDouble,
    highlights: [
      'Clean, comfortable, and air-conditioned guest rooms',
      'Close proximity to meeting venues and industrial zones',
      'Smooth check-in assistance and dedicated guest support',
    ],
  },
  {
    id: 'refreshments',
    num: '04',
    title: 'Meeting Room Refreshments',
    subtitle: 'Scheduled Break Service',
    desc: 'Fresh tea, coffee, and savory snacks served punctually according to your meeting agenda and break intervals.',
    icon: Coffee,
    highlights: [
      'Continuous fresh tea, coffee, and mineral water',
      'Morning and afternoon savory snack varieties',
      'Hygienic setup and courteous on-ground serving staff',
    ],
  },
  {
    id: 'meal-plans',
    num: '05',
    title: 'Accommodation with Meal Plans',
    subtitle: 'Full-Board & Half-Board Plans',
    desc: 'Coordinated stay packages inclusive of scheduled meals according to client requirements.',
    icon: Utensils,
    isBulletList: true,
    bulletItems: [
      'Breakfast',
      'Lunch',
      'Dinner',
      'Tea / Coffee',
      'Snacks',
    ],
  },
  {
    id: 'catering',
    num: '06',
    title: 'Food & Catering Arrangements',
    subtitle: 'Hygienic Culinary Solutions',
    desc: 'Vegetarian, non-vegetarian, and customized meal arrangements, subject to availability and dietary requirements.',
    icon: UtensilsCrossed,
    highlights: [
      'Pure vegetarian and Jain meal preparations',
      'Non-vegetarian options where available and requested',
      'Customized buffet menus tailored to guest preferences',
    ],
  },
  {
    id: 'meeting-requirements',
    num: '07',
    title: 'Meeting Requirements',
    subtitle: 'Turnkey AV & Venue Setup',
    desc: 'Comprehensive technical and infrastructure support to ensure your presentation and meeting flow without interruption.',
    icon: Monitor,
    isBulletList: true,
    bulletItems: [
      'Projector and screen setup',
      'Audio-visual systems & microphones',
      'Custom seating arrangements',
      'Meeting timing coordination',
      'Other venue-related requirements',
    ],
  },
  {
    id: 'complete-coordination',
    num: '08',
    title: 'Complete Coordination',
    subtitle: 'Booking Through Checkout',
    desc: 'Dedicated end-to-end coordination from initial booking through checkout to help provide a smooth, hassle-free experience.',
    icon: Headphones,
    highlights: [
      'Single point of contact for venue, stay, and meals',
      'Pre-event site check and setup verification',
      'On-ground liaison throughout your entire schedule',
    ],
  },
];

const FLEXIBLE_PACKAGES = [
  {
    title: 'Meeting Room Only',
    tag: 'Workspace Only',
    desc: 'Professional meeting hall equipped with required seating layout, basic AV support, and timing coordination.',
    icon: Users2,
    features: ['Dedicated meeting space', 'Configured seating setup', 'Standard AV & connectivity', 'Venue coordination'],
  },
  {
    title: 'Meeting Room + Food',
    tag: 'Meeting + Catering',
    desc: 'Meeting room facilities combined with scheduled refreshments, continuous tea/coffee, and selected snacks.',
    icon: UtensilsCrossed,
    features: ['Meeting hall included', 'Morning & evening tea/coffee', 'Scheduled fresh snacks', 'Beverage service setup'],
  },
  {
    title: 'Meeting Room + Lunch / Dinner',
    tag: 'Full Session',
    desc: 'Dedicated meeting space with scheduled executive buffet or plated lunch or dinner service for participants.',
    icon: Utensils,
    features: ['Complete meeting hall access', 'Buffet lunch or dinner', 'Custom menu selection', 'Dining area coordination'],
  },
  {
    title: 'Meeting Room + Full-Day Meal Package',
    tag: 'All-Day Comprehensive',
    desc: 'Full-day conference package including meeting space, welcome tea, morning snack, lunch, high-tea, and dinner.',
    icon: Coffee,
    features: ['Full-day hall reservation', 'Breakfast, lunch & dinner', 'High-tea & all-day beverages', 'Dedicated service coordination'],
  },
  {
    title: 'Hotel Stay + Breakfast',
    tag: 'Executive Stay',
    desc: 'Comfortable guest rooms for participants, visiting teams, and corporate guests with complimentary morning breakfast.',
    icon: BedDouble,
    features: ['Vetted partner hotel rooms', 'Complimentary daily breakfast', 'Flexible group check-in', 'Dedicated guest assistance'],
  },
  {
    title: 'Hotel Stay + Meeting + Food',
    tag: 'Residential Conference',
    desc: 'Complete residential conference solution: guest accommodation, conference room access, and scheduled meals.',
    icon: Building2,
    features: ['Comfortable hotel stay', 'Equipped meeting hall', 'All scheduled meals included', 'Seamless agenda alignment'],
  },
  {
    title: 'Complete Customized Package as per Requirement',
    tag: 'Most Flexible • Tailored',
    desc: 'Bespoke corporate package tailored to your exact team size, venue preferences, schedule, and budget limits.',
    icon: ClipboardCheck,
    isFeatured: true,
    features: ['Tailored to exact group size', 'Customized to your budget', 'Bespoke venue & stay selection', 'Single unified coordination contract'],
  },
];

const EDGE_FEATURES = [
  {
    icon: Layers,
    title: 'Seamless Coordination',
    desc: 'We connect all key services — venue, transport, accommodation, catering, and AV — through one coordinated channel.',
  },
  {
    icon: Clock,
    title: 'On-Time Execution',
    desc: 'Detailed agenda adherence, vendor follow-ups, and real-time coordination support on-site.',
  },
  {
    icon: MapPin,
    title: 'Local Gujarat Expertise',
    desc: 'Direct access to reliable hotels, banquet halls, and service partners across Palanpur, Banaskantha, and Gujarat.',
  },
  {
    icon: Target,
    title: 'Focus on Your Objectives',
    desc: 'We manage all venue logistics and hospitality so your leadership team can focus entirely on your guests and agenda.',
  },
];

const EVENT_SERVICES = [
  {
    title: 'Plant Inaugurations & Groundbreakings',
    desc: 'Coordinate industrial plant launches, facility openings, foundation stone ceremonies, and project milestone events.',
    icon: Scissors,
    image: '/assets/images/events/plant-inauguration.jpg',
    tag: 'Industrial Milestone',
  },
  {
    title: 'Vendor Meets & Stakeholder Conferences',
    desc: 'Plan and coordinate business conferences, annual supplier summits, and stakeholder appreciation gatherings.',
    icon: Users2,
    image: '/assets/images/events/vendor-conference.jpg',
    tag: 'B2B Summit',
  },
  {
    title: 'Corporate Events & Gala Dinners',
    desc: 'Manage corporate gatherings, award ceremonies, networking dinners, and annual milestone celebrations.',
    icon: UtensilsCrossed,
    image: '/assets/images/events/gala-dinner.jpg',
    tag: 'Celebration & Awards',
  },
  {
    title: 'Training Workshops & Seminars',
    desc: 'End-to-end coordination for technical workshops, safety HSE modules, employee inductions, and skill development.',
    icon: Monitor,
    image: '/assets/images/events/training-seminar.jpg',
    tag: 'Technical & HSE',
  },
  {
    title: 'VIP Hospitality & Guest Management',
    desc: 'Accommodation coordination, airport transfers, executive suites, and hospitality support for visiting management.',
    icon: BedDouble,
    image: '/assets/images/events/vip-hospitality.jpg',
    tag: 'Executive Travel',
  },
  {
    title: 'Event Logistics & Technical Support',
    desc: 'Venue staging, audiovisual systems, stage design, branding, seating arrangements, and on-site coordination.',
    icon: Layers,
    image: '/assets/images/events/event-logistics.jpg',
    tag: 'Turnkey AV & Stage',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    icon: FileCheck2,
    title: 'Share Your Requirements',
    desc: 'Share your team size, preferred dates, location, seating style, and accommodation or meal preferences.',
  },
  {
    step: '02',
    icon: Calendar,
    title: 'Plan & Coordinate',
    desc: 'We suggest suitable hotels, conference halls, and meal packages matching your schedule and budget.',
  },
  {
    step: '03',
    icon: Users2,
    title: 'Execute & Host',
    desc: 'On-ground coordination ensures seamless AV setup, seating arrangements, timing, and meal service.',
  },
  {
    step: '04',
    icon: Presentation,
    title: 'Smooth Checkout & Wrap-up',
    desc: 'End-to-end coordination from booking through guest checkout for a hassle-free client experience.',
  },
];

const AUDIENCES = [
  'Industrial & Manufacturing Companies',
  'Engineering, EPC & Infrastructure Firms',
  'Corporate Offices, Businesses & NGOs',
  'Institutions, Government Bodies & Trade Delegations',
];

const GALLERY_PHOTOS = [
  { src: '/assets/images/events/event-hero.webp', alt: 'Corporate Meeting & Conference Auditorium' },
  { src: '/assets/images/events/plant-inauguration.jpg', alt: 'Industrial Plant Inauguration Ceremony' },
  { src: '/assets/images/events/gala-dinner.jpg', alt: 'Corporate Banquet & Gala Dinner' },
  { src: '/assets/images/events/training-seminar.jpg', alt: 'Corporate Workshop & Seminar Hall' },
  { src: '/assets/images/events/vip-hospitality.jpg', alt: 'Guest Accommodation & Executive Suites' },
  { src: '/assets/images/events/event-logistics.jpg', alt: 'Audio-Visual & Conference Stage Setup' },
];

export default function EventManagementPage() {
  const whatsappUrl = buildEnquiryLink('Meeting, Banquet & Corporate Hospitality Arrangements');

  return (
    <>
      <SEO
        title="Meeting, Banquet & Corporate Hospitality Arrangements | CORPHUB SOLUTION"
        description="Professional venues, comfortable stays, and complete coordination. CORPHUB SOLUTION arranges meeting rooms, hotel accommodation, food, refreshments, and corporate event management across Gujarat tailored to your team size, budget, and schedule."
        canonicalPath="/services/event-management"
        ogImage="/assets/images/events/event-hero.webp"
        keywords={[
          'CORPHUB SOLUTION meeting arrangements',
          'corporate hospitality arrangements Gujarat',
          'banquet coordination Palanpur',
          'meeting room booking Gujarat',
          'hotel stay with breakfast for corporate groups',
          'conference room rental Palanpur Banaskantha',
          'corporate catering arrangements Gujarat',
          'meeting room with refreshments',
          'corporate event management Gujarat',
          'industrial plant inauguration Gujarat',
          'company meeting venue Ahmedabad',
          'NGO meeting hall Banaskantha',
          'training session venue Gujarat',
          'project review meeting room',
          'seminar venue Palanpur',
          'executive guest accommodation Gujarat',
          'turnkey conference coordination Gujarat',
          'CorpHub Solution events Gujarat'
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Event Management', href: '/services/event-management' },
        ]}
        serviceSchema={{
          name: 'Meeting, Banquet & Corporate Hospitality Arrangements',
          description: 'CORPHUB SOLUTION arranges meeting spaces, hotel accommodation, food, refreshments, and corporate hospitality coordination across Gujarat according to client requirements, budget, schedule, and team size.',
          serviceType: 'Corporate Hospitality & Event Management',
        }}
        faqSchema={[
          {
            question: 'What hospitality and meeting services does CORPHUB SOLUTION arrange?',
            answer: 'CORPHUB SOLUTION arranges hotel and venue selection, professional meeting and conference rooms, guest accommodation, scheduled refreshments (tea, coffee, snacks), accommodation with meal plans (breakfast, lunch, dinner), catering arrangements, audio-visual meeting requirements, and complete coordination from booking through checkout.',
          },
          {
            question: 'What package options are available for corporate meetings and stays?',
            answer: 'We provide seven flexible package options: Meeting Room Only, Meeting Room + Food, Meeting Room + Lunch / Dinner, Meeting Room + Full-Day Meal Package, Hotel Stay + Breakfast, Hotel Stay + Meeting + Food, and Complete Customized Packages tailored to your specific team size, schedule, and budget.',
          },
          {
            question: 'What types of use cases and organizations do you cater to?',
            answer: 'We cater to company meetings, NGO meetings, technical training sessions, EPC project reviews, seminars, corporate gatherings, and industrial milestone events such as plant inaugurations.',
          },
          {
            question: 'Can you handle technical meeting requirements such as projectors and sound?',
            answer: 'Yes. We coordinate projectors and screens, audio-visual systems, microphone setups, seating arrangements, and meeting timing coordination at the venue.',
          },
          {
            question: 'Which locations are covered across Gujarat?',
            answer: 'We coordinate venues, hotels, and event hospitality across Palanpur, Banaskantha, Mehsana, Ahmedabad, Gandhinagar, Sanand, Vadodara, and key industrial belts across Gujarat.',
          },
        ]}
      />

      {/* ── 1. ULTRA-PREMIUM HERO SECTION (Brochure-Inspired 2-Column Split) ── */}
      <section className="relative min-h-[660px] lg:min-h-[720px] flex items-center bg-[#071C3C] text-white overflow-hidden pt-28 pb-16">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/events/event-hero.webp"
            alt="Corporate Meeting, Banquet & Hospitality"
            width={1200}
            height={720}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-25 brightness-75 scale-105"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(7, 28, 60, 0.98) 0%, rgba(7, 28, 60, 0.92) 55%, rgba(5, 36, 71, 0.88) 100%)'
            }}
          />
        </div>

        {/* Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Tagline, Introduction, CTAs */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                {/* Top Badge: "YOUR PROJECT, OUR RESPONSIBILITY" */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-400/40 bg-orange-500/15 backdrop-blur-xs">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                    <span className="text-[11px] font-extrabold tracking-widest text-[#FF6B00] uppercase">
                      Corporate Hospitality & Event Solutions
                    </span>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                    <span>Your Project, Our Responsibility</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h1
                  className="font-display font-extrabold tracking-tight mb-4 leading-[1.12] text-white"
                  style={{ fontSize: 'clamp(2.15rem, 4.2vw, 3.5rem)' }}
                >
                  Meeting, Banquet & <br />
                  <span className="text-[#FF6B00]">Corporate Hospitality Arrangements</span>
                </h1>

                {/* Supporting Tagline Bar */}
                <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent border-l-4 border-[#FF6B00] mb-5">
                  <p className="text-sm sm:text-base font-bold text-orange-300 tracking-wide">
                    Professional Venues. Comfortable Stays. Complete Coordination.
                  </p>
                </div>

                {/* Concise, Professional Introduction */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-7 max-w-xl font-normal">
                  At <strong className="text-white font-semibold">CORPHUB SOLUTION</strong>, we arrange complete meeting spaces, hotel accommodation, food, refreshments, and related corporate facilities according to your organization&apos;s requirements, budget, schedule, and team size.
                </p>

                {/* 4 Feature Icon Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                  {HERO_PILLS.map((pill, idx) => {
                    const Icon = pill.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs font-semibold text-white/90 hover:bg-white/10 hover:border-orange-400/40 transition-colors"
                      >
                        <Icon size={15} className="text-[#FF6B00] shrink-0" />
                        <span className="truncate">{pill.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Dual Action CTAs */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="lg"
                    className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-orange-500/25 transition-all text-xs sm:text-sm uppercase tracking-wider"
                    id="hero-plan-meeting-btn"
                  >
                    <span>Plan Your Meeting</span>
                    <ArrowRight size={16} />
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all text-xs sm:text-sm"
                    id="hero-whatsapp-enquire-btn"
                  >
                    <MessageCircle size={18} className="text-[#25D366]" />
                    <span>Enquire About Hospitality</span>
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: 3-Image Montage (Echoing Brochure Top-Right Layout) */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={150}>
                <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 backdrop-blur-md shadow-2xl">
                  
                  {/* Top Image: Executive Conference Room */}
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 mb-3 border border-white/10 group">
                    <img
                      src="/assets/images/events/training-seminar.jpg"
                      alt="Professional Meeting & Conference Hall"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={500}
                      height={312}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#071C3C]/80 backdrop-blur-xs flex items-center justify-center text-[#FF6B00]">
                          <Users2 size={15} />
                        </div>
                        <span className="text-xs font-bold text-white drop-shadow-sm">Meeting & Conference Rooms</span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#FF6B00] text-white">AV Ready</span>
                    </div>
                  </div>

                  {/* Bottom Split Images: Hotel Bedroom & Banquet Catering */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Hotel Bedroom */}
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 border border-white/10 group">
                      <img
                        src="/assets/images/accommodation-hero.webp"
                        alt="Comfortable Hotel Guest Accommodation"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={250}
                        height={188}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5">
                        <BedDouble size={14} className="text-[#FF6B00] shrink-0" />
                        <span className="text-[11px] font-bold text-white truncate">Comfortable Stays</span>
                      </div>
                    </div>

                    {/* Banquet Catering */}
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 border border-white/10 group">
                      <img
                        src="/assets/images/events/gala-dinner.jpg"
                        alt="Corporate Catering & Banquet Meals"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={250}
                        height={188}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5">
                        <UtensilsCrossed size={14} className="text-[#FF6B00] shrink-0" />
                        <span className="text-[11px] font-bold text-white truncate">Food & Banquets</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-[#071C3C] text-white border border-orange-400/50 rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shrink-0 shadow-md">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="pr-2">
                      <p className="text-[11px] font-extrabold uppercase text-[#FF6B00] tracking-wider leading-none">End-To-End</p>
                      <p className="text-xs font-bold text-white mt-0.5">Booking through Checkout</p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. TARGET CUSTOMERS & USE CASES (Responsive Grid with High Polish) ── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-site max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Tailored For Every Corporate Need
            </span>
            <h2
              className="font-display font-extrabold text-[#071C3C] mb-3"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
            >
              Arrangements for Your Specific Use Case
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether the requirement is for a company meeting, NGO meeting, training session, project review, seminar, or corporate gathering, we help arrange everything according to the required team size, budget, and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-orange-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-2xs">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {uc.badge}
                        </span>
                      </div>
                      <h3 className="font-heading font-extrabold text-base text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-2">
                        {uc.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {uc.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Coordinated to team size & budget</span>
                      <ArrowRight size={14} className="text-[#FF6B00] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Quick reassurance ribbon */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#071C3C]">
                  Configured according to your team size, budget, and schedule
                </p>
                <p className="text-[11px] text-slate-500">
                  From small executive delegations of 5 to company-wide conferences of 200+ guests.
                </p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold text-white bg-[#071C3C] hover:bg-[#FF6B00] px-4 py-2.5 rounded-xl transition-colors shrink-0 flex items-center gap-1.5 shadow-xs"
            >
              <span>Get Custom Proposal</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. OUR ARRANGEMENTS INCLUDE (8 Cards - Circular Badges matching Brochure) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container-site max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3.5 py-1 rounded-md bg-orange-50 text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest mb-3 border border-orange-100">
              Complete Hospitality Solutions
            </div>
            <h2
              className="font-display font-extrabold text-[#071C3C]"
              style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)' }}
            >
              Our Arrangements Include
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Organized into clear, dedicated service capabilities — from hotel selection and conference rooms to meals, AV equipment, and complete coordination.
            </p>
          </div>

          {/* 8 Cards in 4x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARRANGEMENTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.id} delay={idx * 60}>
                  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:border-orange-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      {/* Top circular icon badge (Brochure style!) */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 rounded-full bg-[#071C3C] text-white group-hover:bg-[#FF6B00] flex items-center justify-center transition-colors shadow-md">
                          <Icon size={24} className="text-[#FF6B00] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[11px] font-black text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200 font-display">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-base text-[#071C3C] mb-1 leading-snug group-hover:text-[#FF6B00] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-bold text-[#FF6B00] mb-3 uppercase tracking-wider">
                        {item.subtitle}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    {/* Features list / Bullets */}
                    <div className="pt-4 border-t border-slate-200">
                      {item.isBulletList ? (
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Included Options:</p>
                          <ul className="space-y-1.5">
                            {item.bulletItems?.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {item.highlights?.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                              <Check size={14} className="text-[#FF6B00] mt-0.5 shrink-0" strokeWidth={2.5} />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. FLEXIBLE PACKAGE OPTIONS (Signature Navy Section with 7 Packages) ── */}
      <section className="py-18 md:py-24 bg-[#071C3C] text-white relative overflow-hidden">
        {/* Decorative backdrop elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Configurable Service Options
            </span>
            <h2
              className="font-display font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
            >
              Flexible Package Options
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Select one of our seven configurable service options or let us customize every detail around your schedule, group size, and budget.
            </p>
          </div>

          {/* 7 Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {FLEXIBLE_PACKAGES.map((pkg, idx) => {
              const Icon = pkg.icon;
              const isSpecial = pkg.isFeatured;
              return (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div
                    className={`rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-300 relative border ${
                      isSpecial
                        ? 'bg-gradient-to-br from-[#0F3870] to-[#071C3C] border-[#FF6B00] shadow-2xl md:col-span-2 lg:col-span-1 ring-1 ring-[#FF6B00]/50'
                        : 'bg-white/5 border-white/10 hover:border-orange-400/60 hover:bg-white/10 hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                          isSpecial ? 'bg-[#FF6B00] text-white' : 'bg-white/10 text-[#FF6B00] border border-white/15'
                        }`}>
                          <Icon size={22} />
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isSpecial
                            ? 'bg-[#FF6B00] text-white shadow-xs'
                            : 'bg-white/10 text-white/80 border border-white/15'
                        }`}>
                          {pkg.tag}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-white mb-2 leading-snug">
                        {pkg.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-5">
                        {pkg.desc}
                      </p>

                      {/* Package Checklist */}
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-200">
                            <Check size={14} className="text-[#FF6B00] shrink-0" strokeWidth={3} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={buildEnquiryLink(`Enquiry regarding: ${pkg.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 text-xs font-extrabold py-3 px-4 rounded-xl transition-all shadow-sm ${
                          isSpecial
                            ? 'bg-[#FF6B00] hover:bg-[#e05e00] text-white shadow-orange-500/30 shadow-md'
                            : 'bg-white/10 hover:bg-[#FF6B00] text-white border border-white/20 hover:border-[#FF6B00]'
                        }`}
                      >
                        <span>Enquire for Package</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Signature Reassurance Banner (Echoing Brochure Bottom!) */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/15 p-6 text-center backdrop-blur-md">
            <p className="text-xs font-black tracking-widest text-[#FF6B00] uppercase mb-1">
              One Requirement. One Point of Contact. Complete Coordination.
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto mb-4">
              All package options are strictly configurable based on your itinerary, guest count, and corporate preferences. No fixed lock-ins or rigid conditions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-3 border-t border-white/10 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-[#FF6B00]" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white transition-colors">{CONTACT.phone}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-[#FF6B00]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#FF6B00]" />
                <span>Palanpur, Banaskantha & Across Gujarat</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORPORATE & INDUSTRIAL MILESTONE EVENTS (6 Services) ── */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="container-site max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Turnkey Event Management
            </span>
            <h2
              className="font-display font-extrabold text-[#071C3C]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
            >
              Corporate & Industrial Milestone Events
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From plant inaugurations and groundbreaking ceremonies to vendor summits and gala dinners, we coordinate full-scale milestone events across Gujarat.
            </p>
          </div>

          {/* 6 Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {EVENT_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 h-full flex flex-col group">
                    {/* Image Header with Badge */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={400}
                        height={192}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/95 backdrop-blur-xs text-[#071C3C] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
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
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                          {srv.desc}
                        </p>
                      </div>

                      {/* Footer Link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <a
                          href={buildEnquiryLink(`Enquiry regarding: ${srv.title}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-[#FF6B00] hover:text-[#071C3C] transition-colors flex items-center gap-1.5"
                        >
                          <span>Enquire Now</span>
                          <ArrowRight size={14} />
                        </a>

                        <a
                          href={buildEnquiryLink(`Enquiry regarding: ${srv.title}`)}
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

      {/* ── 6. CORPHUB EDGE & LOGISTICAL DISTRACTION (2-Column Grid) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Story + Highlights */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="inline-block px-3 py-1 rounded-md bg-orange-50 text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest mb-3 border border-orange-100">
                  Professional Execution Without The Friction
                </div>

                <h2
                  className="font-display font-extrabold text-[#071C3C] mb-6 leading-tight"
                  style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)' }}
                >
                  Memorable Milestone Events <br />
                  <span className="text-[#071C3C]">Without the Logistical Distraction</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  Industrial inaugurations, shareholder visits, vendor conferences, and corporate gatherings require detailed planning, coordination, and execution. <strong className="text-[#071C3C] font-extrabold">CORPHUB SOLUTION</strong> coordinates event spaces, venue logistics, catering, audiovisual setups, travel, and accommodation so your teams can focus on their guests, agenda, and business objectives.
                </p>

                {/* 4 Feature Checkmark Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-orange-300 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Single Point of Contact</h4>
                      <p className="text-xs text-slate-500 mt-0.5">for complete event & hospitality coordination</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-orange-300 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Experienced Local Coordination</h4>
                      <p className="text-xs text-slate-500 mt-0.5">across Palanpur, Banaskantha & Gujarat</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-orange-300 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Vendor Management</h4>
                      <p className="text-xs text-slate-500 mt-0.5">for venues, catering, AV, transport, and stays</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-orange-300 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#071C3C]">Customized Solutions</h4>
                      <p className="text-xs text-slate-500 mt-0.5">as per your team size, event type, and budget</p>
                    </div>
                  </div>
                </div>

                {/* Dual Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider"
                  >
                    <span>Plan Your Meeting</span>
                    <ArrowRight size={16} />
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-slate-300 hover:border-orange-400 text-slate-700 hover:text-orange-600 font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    <MessageCircle size={16} className="text-[#25D366]" />
                    <span>Enquire About Hospitality</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Navy Card "The CORPHUB Event Edge" */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={150}>
                <div 
                  className="rounded-3xl p-7 sm:p-9 text-white shadow-xl relative overflow-hidden"
                  style={{ background: '#071C3C', border: '1px solid rgba(255, 255, 255, 0.12)' }}
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
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Micro reassurance footer */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>100% Turnkey Coordination</span>
                    <span className="text-[#FF6B00] font-bold">Palanpur & Across Gujarat</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. A SIMPLE AND STRUCTURED PROCESS (4 Steps Timeline) ── */}
      <section className="py-16 md:py-22 bg-[#F8FAFC] border-b border-slate-200">
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
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From requirement definition to checkout, we coordinate every detail with the right hotel, venue, and catering providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-center flex flex-col items-center h-full relative group hover:border-orange-400 hover:shadow-xl transition-all duration-300">
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

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Connecting Chevron on Desktop */}
                    {idx < PROCESS_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-orange-400 transition-colors">
                        <ArrowRight size={22} />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. EVENTS FOR INDUSTRIAL & CORPORATE NEEDS (Gallery & Audiences) ── */}
      <section className="py-16 md:py-24 bg-[#071C3C] text-white">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Card */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="inline-block px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-extrabold uppercase tracking-widest mb-3 border border-white/15">
                  Suitable For Multiple Organizations
                </div>

                <h2
                  className="font-display font-extrabold text-white mb-5 leading-tight"
                  style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
                >
                  Events for Industrial and Corporate Needs
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  Whether it&apos;s a company meeting, NGO conference, executive project review, or plant inauguration, we coordinate complete event and hospitality logistics to ensure a professional and seamless experience.
                </p>

                {/* Audiences List with Orange Checkmarks */}
                <div className="space-y-3.5 mb-8">
                  {AUDIENCES.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md bg-[#FF6B00] text-white flex items-center justify-center shrink-0">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-6 py-3 rounded-xl shadow-lg transition-colors text-xs sm:text-sm uppercase tracking-wider"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={15} />
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-xl border border-white/20 transition-colors text-xs sm:text-sm"
                  >
                    <MessageCircle size={16} className="text-[#25D366]" />
                    <span>Enquire About Hospitality</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Photo Gallery Grid (6 Photos in 3x2) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={150}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {GALLERY_PHOTOS.map((photo, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden aspect-4/3 relative group border border-white/10 shadow-lg"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        width={300}
                        height={225}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-semibold text-white truncate drop-shadow-sm">
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

      {/* ── 9. FINAL BOTTOM CTA BANNER ── */}
      <section className="py-14 md:py-18 bg-[#05172E] text-white border-t border-white/10">
        <div className="container-site max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
                Ready to Organize Your Next Gathering?
              </span>
              <h2
                className="font-display font-extrabold text-white mb-2"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)' }}
              >
                Planning a Meeting, Banquet or Corporate Event?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Share your team size, schedule, and venue preferences. Our team will coordinate the right meeting space, hotel stay, and meal arrangements for you.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider"
                id="cta-get-quote-btn"
              >
                <span>Get a Quote</span>
                <ArrowRight size={16} />
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider"
                id="cta-whatsapp-btn"
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
