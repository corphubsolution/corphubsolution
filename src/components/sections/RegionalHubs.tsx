import { MapPin, ArrowRight, Building, Car, Package } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import { buildEnquiryLink } from '../../utils/whatsapp';

const HUBS = [
  {
    city: 'Sanand',
    title: 'Automotive & Tech GIDC Hub',
    description: 'Workforce housing, technician transport, and direct material supply for automotive OEMs, semiconductor plants, and heavy engineering contractors.',
    highlights: ['Automotive & EV Hub', 'Semiconductor Corridor', 'Engineering GIDC'],
    icon: Building,
    serviceTags: ['Accommodation', 'Transport', 'Material'],
  },
  {
    city: 'Ahmedabad',
    title: 'Commercial & Manufacturing Capital',
    description: 'Corporate staff commute shuttles, executive guest house tie-ups, conference logistics, and industrial hardware sourcing for Changodar, Naroda & Vatva.',
    highlights: ['Corporate HQs', 'Manufacturing Corridors', 'B2B Conferences'],
    icon: Building,
    serviceTags: ['All 5 Services', 'Executive Stays', 'Fleet Hire'],
  },
  {
    city: 'Gandhinagar',
    title: 'GIFT City & IT / Institutional Hub',
    description: 'VIP hospitality, corporate event logistics, high-end serviced stays, and scheduled staff transport for technology companies and institutional delegations.',
    highlights: ['GIFT City Financial Hub', 'IT / Tech Parks', 'State Summits'],
    icon: Building,
    serviceTags: ['Event Management', 'VIP Hospitality', 'Corporate Cabs'],
  },
  {
    city: 'Vadodara',
    title: 'Heavy Engineering & Chemical Belt',
    description: 'Industrial material procurement, contractor supervision liaison, shutdown team accommodation, and plant site transit across Vadodara & Halol.',
    highlights: ['Heavy Machinery', 'Chemical & Pharma', 'Power Equipment'],
    icon: Package,
    serviceTags: ['Material Supply', 'Site Liaison', 'Crew Housing'],
  },
  {
    city: 'Mehsana & Palanpur',
    title: 'North Gujarat Operations Base',
    description: 'Our established home base delivering local vendor management, engineering stay agreements, solar corridor logistics, and regional transportation.',
    highlights: ['Operational HQs', 'Freight Corridors', 'Solar & Dairy Sites'],
    icon: MapPin,
    serviceTags: ['Local Liaison', 'Direct Supply', 'Long-term Stay'],
  },
  {
    city: 'Bharuch & Dahej',
    title: 'PCPIR Petrochemical & Port Corridor',
    description: 'Emergency supply sourcing, plant shutdown accommodation arrangements, and dedicated site vehicle coordination along the industrial coastal belt.',
    highlights: ['PCPIR Chemical Zone', 'Port Logistics', 'Plant Shutdowns'],
    icon: Car,
    serviceTags: ['Site Transport', 'BOM Supplies', 'Vendor Tracking'],
  },
];

export default function RegionalHubs() {
  return (
    <section 
      className="py-16 md:py-24 bg-[#F8FAFC] border-t border-gray-100"
      aria-labelledby="regional-hubs-heading"
    >
      <div className="container-site max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <SectionLabel text="Regional Coverage in Gujarat" />
            <h2
              id="regional-hubs-heading"
              className="font-display font-extrabold text-[#071C3C] mt-2"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)' }}
            >
              Key Industrial & Commercial Hubs We Support
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              From Sanand's automotive belt to Gandhinagar's GIFT City and Ahmedabad's commercial core, CorpHub Solution coordinates seamless ground operations.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HUBS.map((hub, idx) => (
            <ScrollReveal key={idx} delay={idx * 70}>
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  {/* Top City Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-black uppercase tracking-wider text-[#FF6B00] bg-orange-50 border border-orange-100 px-3 py-1 rounded-md">
                      {hub.city}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                      <MapPin size={12} className="text-[#FF6B00]" />
                      Gujarat
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-2">
                    {hub.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {hub.description}
                  </p>

                  {/* Highlights Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {hub.highlights.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold bg-[#F3F7FA] text-[#071C3C] px-2 py-0.5 rounded border border-gray-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Service Badges & Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] text-gray-500">
                    <span className="font-bold text-[#071C3C]">Services:</span>
                    <span>{hub.serviceTags.join(', ')}</span>
                  </div>

                  <a
                    href={buildEnquiryLink(`Project support inquiry for ${hub.city} region`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-colors"
                    aria-label={`Inquire for ${hub.city} project support`}
                  >
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
