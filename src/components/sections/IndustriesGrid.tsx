import { Flame, Zap, Building, HardHat, Truck, Factory, Compass, Briefcase } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import ScrollReveal from '../ui/ScrollReveal';

const INDUSTRIES = [
  { icon: Flame, label: 'Oil & Gas' },
  { icon: Zap, label: 'Power & Energy' },
  { icon: Building, label: 'Petrochemical' },
  { icon: HardHat, label: 'Construction' },
  { icon: Truck, label: 'Infrastructure' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Compass, label: 'Engineering & EPC' },
  { icon: Briefcase, label: 'Industrial Projects' },
];

interface IndustriesGridProps {
  dark?: boolean;
}

export default function IndustriesGrid({ dark = false }: IndustriesGridProps) {
  const bg = dark ? { background: '#071C3C' } : { background: '#FFFFFF' };
  const labelVariant = dark ? 'light' : 'default';
  const headingColor = dark ? 'text-white' : 'text-[#071C3C]';
  const subColor = dark ? 'rgba(255,255,255,0.65)' : '#6B7A8D';

  return (
    <section className="section-py border-t border-gray-100" style={bg} aria-labelledby="industries-heading">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center mb-10">
            <SectionLabel variant={labelVariant}>Sector Focus</SectionLabel>
            <h2
              id="industries-heading"
              className={`font-heading font-extrabold mt-2 ${headingColor}`}
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
            >
              Industries We Support
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="mt-2 max-w-xl mx-auto text-xs md:text-sm" style={{ color: subColor }}>
              Providing project support across key industrial and infrastructure sectors.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {INDUSTRIES.map(({ icon: Icon, label }, i) => (
            <ScrollReveal key={label} delay={i * 50}>
              <div 
                className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center gap-2 transition-all duration-200 hover:-translate-y-1 ${
                  dark 
                    ? 'bg-[#0A2E56] border-[#123B70] text-white hover:border-[#FF6B00]' 
                    : 'bg-[#F8FAFC] border-gray-200 text-[#071C3C] hover:border-orange-300 hover:shadow-md'
                }`}
              >
                <div className="text-[#FF6B00] mb-1">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <span className="text-[11px] font-bold leading-tight">
                  {label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
