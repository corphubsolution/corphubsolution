import SEO from '../../components/seo/SEO';
import { 
  Building2, 
  Hotel, 
  Home, 
  Target, 
  Clock, 
  ListChecks, 
  UserCheck, 
  CalendarDays, 
  Headphones, 
  Users,
  ChevronRight,
  ArrowRight,
  Factory,
  HardHat,
  Wrench,
  Briefcase
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import { buildEnquiryLink } from '../../utils/whatsapp';

const WHO_WE_SERVE = [
  {
    icon: Factory,
    title: 'Manufacturing Companies',
    tag: 'Industrial Estates & GIDC',
    badge: 'Shift-Ready Stays',
    desc: 'Turnkey housing and flats situated close to major plant gates (Sanand, Mehsana, Palanpur), ensuring punctual shift rotations and zero transit fatigue.',
  },
  {
    icon: HardHat,
    title: 'Engineering & EPC Firms',
    tag: 'Turnkey Project Sites',
    badge: 'Executive & Site Flats',
    desc: 'Dedicated corporate guest houses, 2/3 BHK flats, and managed accommodations tailored for resident engineers, project directors, and site supervisors.',
  },
  {
    icon: Wrench,
    title: 'Industrial Contractors',
    tag: 'Maintenance & Shutdowns',
    badge: 'Flexible Tenure',
    desc: 'Scalable accommodation solutions for fabrication teams, mechanical crews, and shutdown contractors with transparent corporate billing.',
  },
  {
    icon: Building2,
    title: 'Infrastructure Projects',
    tag: 'Corridors & Remote Hubs',
    badge: 'Fast Mobilisation',
    desc: 'Quick turnaround housing setups along highway expansions, solar energy parks, railway freight corridors, and power transmission sites across Gujarat.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Offices',
    tag: 'Executive & Regional Teams',
    badge: 'Serviced Stays',
    desc: 'Premium serviced apartments and executive living quarters with high-speed Wi-Fi, quiet work areas, routine housekeeping, and full GST invoicing.',
  },
  {
    icon: UserCheck,
    title: 'Visiting Engineers & Technicians',
    tag: 'Short-Term & On-Demand',
    badge: 'PO-Based Booking',
    desc: 'Daily, weekly, or 15-day flexible hotel & guest house stays arranged smoothly through official POs, eliminating personal employee expense claims.',
  },
];

export default function AccommodationPage() {
  const whatsappUrl = buildEnquiryLink('Corporate Accommodation Services');

  const scrollToSolutions = () => {
    const el = document.getElementById('accommodation-solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Corporate & Industrial Accommodation Solutions in Gujarat | Staff Housing & Guest House | CORPHUB SOLUTION"
        description="CORPHUB SOLUTION arranges corporate accommodation, workforce housing, executive guest houses & serviced apartments for industrial projects near Sanand GIDC, Ahmedabad, Gandhinagar, Vadodara & Palanpur. Flexible PO-based booking, managed stays & competitive corporate rates."
        canonicalPath="/services/accommodation"
        ogImage="/assets/images/accommodation-hero.png"
        keywords={[
          'CORPHUB SOLUTION accommodation',
          'corporate accommodation Gujarat',
          'corporate guest house near Sanand GIDC',
          'workforce accommodation solutions for industrial projects Gujarat',
          'staff accommodation near GIDC industrial estate',
          'industrial workforce housing Gujarat',
          'executive accommodation in Ahmedabad',
          'turnkey engineer guest house Banaskantha',
          'EPC project staff flats Palanpur',
          'serviced apartments for engineers near Naroda GIDC',
          'fully furnished flats for staff on rent Gujarat',
          'project-based staff housing and dormitories Gujarat',
          'corporate guest house with mess and food services Gujarat',
          'managed guest house with housekeeping services',
          'PG for engineers near factory Gujarat',
          'budget corporate guest house for construction teams',
          'short term accommodation for visiting engineers Gujarat',
          'long stay corporate housing for audit teams',
          'corporate accommodation PO basis booking Gujarat',
          'industrial guest house near Vatva GIDC Ahmedabad',
          'managed accommodation with WiFi and laundry Gujarat',
          'rental property arrangement for industrial workers',
          'hotel accommodation corporate rates Palanpur Mehsana',
          'B2B corporate accommodation service provider Gujarat',
          'factory staff housing near Sanand Mehsana Vadodara',
          'CorpHub Solution accommodation services'
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Accommodation', href: '/services/accommodation' },
        ]}
        serviceSchema={{
          name: 'Corporate & Industrial Accommodation Solutions',
          description: 'CORPHUB SOLUTION arranges rental properties, corporate hotel bookings, managed guest houses, and serviced executive apartments for industrial project teams, visiting engineers, and corporate employees across Gujarat.',
          serviceType: 'Corporate Accommodation Services',
        }}
        faqSchema={[
          {
            question: 'How does CORPHUB SOLUTION coordinate accommodation for industrial projects in Gujarat?',
            answer: 'CORPHUB SOLUTION provides end-to-end rental property sourcing, corporate hotel bookings, and managed executive guest houses across Palanpur, Banaskantha, Sanand, Ahmedabad, Gandhinagar, Vadodara, and Gujarat with single-point coordination, flexible lease options, and competitive corporate rates.',
          },
          {
            question: 'Can companies book project accommodation under PO or official credit terms?',
            answer: 'Yes, CORPHUB SOLUTION accepts corporate booking requests through Purchase Orders (PO) or official email agreements, with no advance payment required for eligible corporate clients under approved written credit terms.',
          },
          {
            question: 'What is included in managed accommodation services by CORPHUB SOLUTION?',
            answer: 'Managed accommodation includes housekeeping coordination, maintenance management, electricity/water/gas bill settlement, high-speed Wi-Fi internet, laundry services, and 24x7 support coordination.',
          },
          {
            question: 'Does CORPHUB SOLUTION provide accommodation near industrial estates and GIDC areas?',
            answer: 'Yes. CORPHUB SOLUTION arranges workforce housing and corporate guest houses near major GIDC industrial estates including Sanand, Vatva, Naroda, Changodar, Mehsana, and Palanpur to minimize commute time for project staff and engineers.',
          },
          {
            question: 'What types of accommodation does CORPHUB SOLUTION offer for different team sizes?',
            answer: 'We offer flexible accommodation options including 1BHK/2BHK/3BHK fully furnished flats, corporate guest houses, premium serviced apartments with workspaces, budget PG and dormitory arrangements, and hotel rooms at negotiated corporate rates — scalable for teams of 2 to 100+ members.',
          },
        ]}
      />

      {/* Hero Section */}
      <PageHero
        title="CORPORATE & INDUSTRIAL ACCOMMODATION SOLUTIONS"
        subtitle="The Right Stay. The Right Support. One Coordinated Solution."
        image="/assets/images/accommodation-hero.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Accommodation' },
        ]}
      />

      {/* Hero Visual Card Section (Matching Reference Mockup) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="container-site">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6">
                <ScrollReveal>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-3 inline-block">
                    Corporate Accommodation
                  </span>
                  
                  <h1
                    className="font-display mb-4 text-[#071C3C]"
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                    }}
                  >
                    The Right Stay. The Right Support. <br />
                    <span className="text-[#0284C7]">One Coordinated Solution.</span>
                  </h1>

                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    We help corporate and industrial companies arrange suitable accommodation for employees, visiting professionals and project teams — with flexible options, competitive pricing and reliable coordination.
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <button
                      onClick={scrollToSolutions}
                      className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                    >
                      Explore Solutions <ArrowRight size={16} />
                    </button>
                    <Button variant="secondary" href={whatsappUrl} external>
                      Speak With Us
                    </Button>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Hero Image (accommodation-hero.png) */}
              <div className="lg:col-span-6">
                <ScrollReveal delay={200}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                    <img 
                      src="/assets/images/accommodation-hero.png" 
                      alt="Corporate Accommodation — Industrial & Executive Stay" 
                      className="w-full h-[320px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-lg flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#071C3C]">Industrial & Project Corridor Living</p>
                        <p className="text-[11px] text-gray-500">Verified residential apartments, hotels & executive guest houses</p>
                      </div>
                      <span className="text-xs font-bold text-[#FF6B00] bg-orange-50 px-2.5 py-1 rounded-md">
                        Palanpur & Gujarat
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* OUR ACCOMMODATION SOLUTIONS (3 Pillars) */}
      <section id="accommodation-solutions" className="py-12 md:py-16 bg-white">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Service Verticals
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              OUR ACCOMMODATION SOLUTIONS
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full" />
          </div>

          {/* 3 Verticals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 01. Rental Property Arrangement */}
            <ScrollReveal delay={100}>
              <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-gray-200/70 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-orange-100 text-[#FF6B00] flex items-center justify-center shadow-sm shrink-0">
                    <Home size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#FF6B00] tracking-wider uppercase">01</span>
                    <h3 className="font-heading font-extrabold text-lg text-[#071C3C] leading-snug">
                      Rental Property Arrangement
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-semibold italic text-[#0284C7] mb-4">
                  Find the Right Property, Faster.
                </p>

                <ul className="space-y-2.5 text-xs text-gray-600 mt-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Fast property sourcing based on your requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Multiple property options for comparison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Property visit coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Furnished, semi-furnished and unfurnished properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Flexible rental options based on budget and location</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#071C3C]">
                  <span>Team & Engineer Flats</span>
                  <ChevronRight size={16} className="text-[#FF6B00]" />
                </div>
              </div>
            </ScrollReveal>

            {/* 02. Hotel & Guest House Accommodation */}
            <ScrollReveal delay={200}>
              <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-gray-200/70 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-orange-100 text-[#FF6B00] flex items-center justify-center shadow-sm shrink-0">
                    <Hotel size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#FF6B00] tracking-wider uppercase">02</span>
                    <h3 className="font-heading font-extrabold text-lg text-[#071C3C] leading-snug">
                      Hotel & Guest House Accommodation
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-semibold italic text-[#0284C7] mb-4">
                  Flexible Stays. Competitive Corporate Rates.
                </p>

                <ul className="space-y-2.5 text-xs text-gray-600 mt-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Daily, weekly, 15-day and monthly packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Hotel and guest house options tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Competitive rates compared with similar MakeMyTrip and Goibibo listings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Corporate booking requests through PO or official email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>No advance payment for eligible bookings under approved credit terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>24×7 accommodation support</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#071C3C]">
                  <span>Corporate Rates & PO Booking</span>
                  <ChevronRight size={16} className="text-[#FF6B00]" />
                </div>
              </div>
            </ScrollReveal>

            {/* 03. Managed Accommodation */}
            <ScrollReveal delay={300}>
              <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-gray-200/70 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-orange-100 text-[#FF6B00] flex items-center justify-center shadow-sm shrink-0">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#FF6B00] tracking-wider uppercase">03</span>
                    <h3 className="font-heading font-extrabold text-lg text-[#071C3C] leading-snug">
                      Managed Accommodation
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-semibold italic text-[#0284C7] mb-4">
                  Complete Stay Management. Less Operational Burden.
                </p>

                <ul className="space-y-2.5 text-xs text-gray-600 mt-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Cleaning and housekeeping coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Maintenance and repair management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Electricity, water and gas bill coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Wi-Fi and internet arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Laundry and other agreed services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    <span>Single-point coordination for accommodation-related needs</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#071C3C]">
                  <span>End-to-End Living Care</span>
                  <ChevronRight size={16} className="text-[#FF6B00]" />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE CORPHUB SOLUTION? (Feature Badges Pill Bar) */}
      <section className="py-8 bg-[#F3F7FA] border-y border-gray-200">
        <div className="container-site">
          <div className="text-center mb-6">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#071C3C]">
              Why Choose CorpHub Solution?
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            
            <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="text-[#0284C7] mb-2">
                <Target size={22} />
              </div>
              <p className="text-xs font-bold text-[#071C3C] leading-tight">
                Corporate & Industrial Focus
              </p>
              <p className="text-[10px] text-gray-500 mt-1">Tailored for business</p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="text-[#0284C7] mb-2">
                <Clock size={22} />
              </div>
              <p className="text-xs font-bold text-[#071C3C] leading-tight">
                Faster Coordination
              </p>
              <p className="text-[10px] text-gray-500 mt-1">Rapid turnarounds</p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="text-[#0284C7] mb-2">
                <ListChecks size={22} />
              </div>
              <p className="text-xs font-bold text-[#071C3C] leading-tight">
                Multiple Options
              </p>
              <p className="text-[10px] text-gray-500 mt-1">Easy comparison</p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="text-[#0284C7] mb-2">
                <UserCheck size={22} />
              </div>
              <p className="text-xs font-bold text-[#071C3C] leading-tight">
                One Point of Contact
              </p>
              <p className="text-[10px] text-gray-500 mt-1">Zero multi-vendor hassle</p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="text-[#0284C7] mb-2">
                <CalendarDays size={22} />
              </div>
              <p className="text-xs font-bold text-[#071C3C] leading-tight">
                Flexible Packages
              </p>
              <p className="text-[10px] text-gray-500 mt-1">Daily to monthly</p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="text-[#0284C7] mb-2">
                <Headphones size={22} />
              </div>
              <p className="text-xs font-bold text-[#071C3C] leading-tight">
                24×7 Support*
              </p>
              <p className="text-[10px] text-gray-500 mt-1">Round-the-clock help</p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS (5-Step Horizontal Flow) */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Simple Workflow
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              HOW IT WORKS
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            
            {/* Step 1 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 text-center relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm shadow-md mb-3">
                01
              </div>
              <h4 className="font-heading font-bold text-sm text-[#071C3C] mb-1">Share Requirements</h4>
              <p className="text-xs text-gray-500">Provide team size, location, budget and dates</p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 text-center relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm shadow-md mb-3">
                02
              </div>
              <h4 className="font-heading font-bold text-sm text-[#071C3C] mb-1">Explore Options</h4>
              <p className="text-xs text-gray-500">Compare shortlisted properties & rates</p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 text-center relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm shadow-md mb-3">
                03
              </div>
              <h4 className="font-heading font-bold text-sm text-[#071C3C] mb-1">Review & Approve</h4>
              <p className="text-xs text-gray-500">Finalize terms, package inclusions & PO</p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 text-center relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-sm shadow-md mb-3">
                04
              </div>
              <h4 className="font-heading font-bold text-sm text-[#071C3C] mb-1">Confirm Booking</h4>
              <p className="text-xs text-gray-500">Fast handover with all utilities configured</p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 text-center relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FF6B00] text-white font-bold flex items-center justify-center text-sm shadow-md mb-3">
                05
              </div>
              <h4 className="font-heading font-bold text-sm text-[#071C3C] mb-1">Receive Support</h4>
              <p className="text-xs text-gray-500">Ongoing maintenance & single-point coordination</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE SERVE (Premium Interactive Industry Cards) */}
      <section className="py-14 md:py-18 bg-[#F8FAFC]">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Tailored Industry Solutions
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              WHO WE SERVE
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Customized corporate accommodation and project living solutions engineered for every stakeholder tier.
            </p>
          </div>

          {/* 6 Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {WHO_WE_SERVE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#071C3C] text-white flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors shadow-sm shrink-0">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      {item.tag}
                    </span>

                    <h3 className="font-heading font-extrabold text-base text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed mt-auto">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Summary Pill Bar */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0">
                <Users size={16} />
              </div>
              <span className="text-xs font-bold text-[#071C3C]">
                Ready to coordinate stays for your organization?
              </span>
            </div>
            <div className="text-xs text-gray-500 font-medium">
              Flexible options • Competitive corporate rates • Dedicated point of contact
            </div>
          </div>
        </div>
      </section>

      {/* LET US SIMPLIFY YOUR ACCOMMODATION NEEDS (Orange CTA Banner) */}
      <section className="py-12 bg-white">
        <div className="container-site">
          <div className="rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #E05E00 100%)',
              color: '#FFFFFF'
            }}
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white text-[#FF6B00] flex items-center justify-center shrink-0 shadow-md">
                <Building2 size={32} />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight">
                  Let Us Simplify Your Accommodation Needs
                </h3>
                <p className="text-xs md:text-sm text-white/90 mt-1 max-w-2xl leading-relaxed">
                  Share your location, budget, team size and duration. We will coordinate suitable available options according to your requirements.
                </p>
                <p className="text-xs text-white/80 font-semibold mt-2">
                  CorpHub Solution — One Coordinated Channel for Multiple Industrial Requirements.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#071C3C] hover:bg-[#0A2E56] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider"
              >
                Contact CorpHub <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
