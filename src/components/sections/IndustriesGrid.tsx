import { Flame, Zap, Building, HardHat, Truck, Factory } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import ScrollReveal from '../ui/ScrollReveal';

const INDUSTRIES = [
  { icon: Flame, label: 'Oil & Gas' },
  { icon: Zap, label: 'Power & Energy' },
  { icon: Building, label: 'Petrochemical' },
  { icon: HardHat, label: 'Construction' },
  { icon: Truck, label: 'Infrastructure' },
  { icon: Factory, label: 'Manufacturing' },
];

interface IndustriesGridProps {
  dark?: boolean;
}

export default function IndustriesGrid({ dark = true }: IndustriesGridProps) {
  const bg = dark ? { background: '#052447' } : { background: '#F3F7FA' };
  const labelVariant = dark ? 'light' : 'default';
  const headingColor = dark ? 'text-white' : '';
  const headingStyle = dark ? undefined : { color: '#071C3C' };
  const subColor = dark ? 'rgba(255,255,255,0.65)' : '#6B7A8D';

  return (
    <section className="section-py" style={bg} aria-labelledby="industries-heading">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center mb-10">
            <SectionLabel variant={labelVariant}>Industries We Support</SectionLabel>
            <h2
              id="industries-heading"
              className={`font-heading mt-2 ${headingColor}`}
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, ...headingStyle }}
            >
              Serving Diverse Industrial Sectors
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: subColor }}>
              CORPHUB SOLUTION provides project support across a range of industrial and infrastructure sectors throughout Gujarat.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {INDUSTRIES.map(({ icon: Icon, label }, i) => (
            <ScrollReveal key={label} delay={i * 60}>
              <div className="industry-tile">
                <Icon size={28} className="industry-tile-icon" aria-hidden="true" />
                <span
                  className="text-xs font-semibold text-center"
                  style={{ color: dark ? 'rgba(255,255,255,0.85)' : '#3A4450' }}
                >
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
