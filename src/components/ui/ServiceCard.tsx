import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  slug: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, name, description, slug, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="card p-6 flex flex-col gap-4 group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded flex items-center justify-center shrink-0"
        style={{ background: 'rgba(255,107,0,0.1)' }}
        aria-hidden="true"
      >
        <Icon size={22} style={{ color: '#FF6B00' }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="text-lg font-heading font-bold"
          style={{ color: '#071C3C' }}
        >
          {name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#6B7A8D' }}>
          {description}
        </p>
      </div>

      {/* Link */}
      <Link
        to={slug}
        className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto"
        style={{ color: '#FF6B00' }}
        aria-label={`Learn more about ${name}`}
      >
        Learn More
        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
