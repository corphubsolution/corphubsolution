import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import { buildEnquiryLink } from '../../utils/whatsapp';

interface IndustrialBelt {
  num: string;
  beltName: string;
  leadRegion: string;
  locations: string[];
  serviceTags: string[];
}

const GUJARAT_BELTS: IndustrialBelt[] = [
  {
    num: '1',
    beltName: 'Ahmedabad - Sanand Belt',
    leadRegion: 'Automotive, Engineering & Tech Corridor',
    locations: [
      'Sanand',
      'Changodar',
      'Bavla',
      'Naroda',
      'Odhav',
      'Vatva',
      'Kadi-Chhatral',
      'Kalol',
      'Dholka',
      'Becharaji - Mandal',
    ],
    serviceTags: ['Accommodation', 'Transport', 'Material Supply', 'Vendor Mgmt'],
  },
  {
    num: '2',
    beltName: 'Vadodara - Halol Belt',
    leadRegion: 'Heavy Engineering & Chemical Manufacturing Hub',
    locations: [
      'Makarpura',
      'Nandesari',
      'Savli',
      'Manjusar',
      'Waghodia',
      'Halol',
      'Padra',
      'Por-Ramangandi',
    ],
    serviceTags: ['Material Supply', 'Crew Housing', 'Site Transport', 'Liaison'],
  },
  {
    num: '3',
    beltName: 'Bharuch - Ankleshwar - Dahej Belt',
    leadRegion: 'PCPIR Petrochemical & Port Logistics Zone',
    locations: [
      'Ankleshwar',
      'Panoli',
      'Dahej',
      'Jhagadia',
      'Vilayat',
      'Bharuch',
      'Palej',
      'Saykha',
    ],
    serviceTags: ['Emergency BOM', 'Plant Shutdowns', 'Housing', 'Logistics'],
  },
  {
    num: '4',
    beltName: 'Surat - Vapi Belt',
    leadRegion: 'Heavy Industry, Textile & Chemical Corridor',
    locations: [
      'Sachin',
      'Pandesara',
      'Hazira',
      'Palsana',
      'Kadodara',
      'Vapi',
      'Sarigam',
      'Umbergaon',
      'Pardi',
    ],
    serviceTags: ['Corporate Cabs', 'Material Sourcing', 'Staff Stays'],
  },
  {
    num: '5',
    beltName: 'Rajkot - Morbi - Jamnagar Belt',
    leadRegion: 'Saurashtra Ceramic, Engineering & Refining',
    locations: [
      'Rajkot',
      'Shapar-Veraval',
      'Metoda',
      'Morbi',
      'Wankaner',
      'Jamnagar',
      'Dhrol',
      'Gondal',
      'Jetpur',
    ],
    serviceTags: ['Industrial Supplies', 'Transport Contracts', 'Field Housing'],
  },
  {
    num: '6',
    beltName: 'Kutch - Gandhidham Belt',
    leadRegion: 'Major Ports, Minerals & Special Economic Zones',
    locations: [
      'Mundra',
      'Gandhidham',
      'Kandla',
      'Anjar',
      'Bhuj',
      'Bhachau & nearby Industrial Estates',
    ],
    serviceTags: ['Port Logistics Support', 'Site Accommodations', 'Material'],
  },
  {
    num: '7',
    beltName: 'North Gujarat Belt',
    leadRegion: 'Home Operations Base & Industrial Logistics',
    locations: [
      'Mehsana',
      'Kadi',
      'Visnagar',
      'Palanpur',
      'Deesa',
      'Himatnagar',
      'Idar',
    ],
    serviceTags: ['Headquarters Support', '24/7 Operations', 'Direct Supply'],
  },
];

export default function RegionalHubs() {
  return (
    <section 
      className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200"
      aria-labelledby="regional-hubs-heading"
    >
      <div className="container-site max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal>
            <SectionLabel text="Our Services Available in Gujarat" />
            <h2
              id="regional-hubs-heading"
              className="font-display font-extrabold text-[#071C3C] mt-2"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
            >
              Wide Coverage Across 7 Major Gujarat Industrial Belts
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wide coverage. Reliable support. One solution — CORPHUB SOLUTION coordinates corporate accommodation, customized transport, industrial material supply, and vendor management across all major GIDCs.
            </p>
          </ScrollReveal>
        </div>

        {/* 7 Belts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {GUJARAT_BELTS.map((belt, idx) => (
            <ScrollReveal key={belt.num} delay={idx * 60}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-xl hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-white bg-[#071C3C] group-hover:bg-[#FF6B00] px-2.5 py-1 rounded-md transition-colors font-display">
                      Belt {belt.num}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                      <MapPin size={12} className="text-[#FF6B00]" />
                      Gujarat
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-1 leading-snug">
                    {belt.beltName}
                  </h3>

                  <p className="text-xs text-[#FF6B00] font-semibold mb-3.5">
                    {belt.leadRegion}
                  </p>

                  {/* Locations / Areas Chips */}
                  <div className="mb-4">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Covered Industrial Areas:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {belt.locations.map((loc, lIdx) => (
                        <span
                          key={lIdx}
                          className="text-[11px] font-medium bg-[#F1F5F9] text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Service Badges & Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 truncate max-w-[200px]">
                    <span className="font-bold text-[#071C3C]">Services:</span>
                    <span className="truncate">{belt.serviceTags.join(', ')}</span>
                  </div>

                  <a
                    href={buildEnquiryLink(`Inquiry for project support in ${belt.beltName}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-all shadow-2xs shrink-0"
                    aria-label={`Inquire for ${belt.beltName} project support`}
                  >
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner matching Instagram Post */}
        <div className="rounded-2xl bg-[#071C3C] text-white p-6 sm:p-7 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-black tracking-widest text-[#FF6B00] uppercase mb-0.5">
                All Major Industrial Areas Covered
              </p>
              <h4 className="font-display font-extrabold text-base sm:text-lg text-white">
                Wide Coverage. Reliable Support. One Solution — CORPHUB SOLUTION
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Corporate Accommodation • Transport Services • Material Supply • Vendor Management
              </p>
            </div>
          </div>

          <a
            href={buildEnquiryLink('Gujarat Industrial Belts Project Support')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg shrink-0"
          >
            <CheckCircle2 size={16} />
            <span>Enquire for Your Plant</span>
          </a>
        </div>
      </div>
    </section>
  );
}
