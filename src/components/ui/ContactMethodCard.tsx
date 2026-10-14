import { type LucideIcon } from 'lucide-react';

interface ContactMethodCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  description?: string;
  id?: string;
  external?: boolean;
}

export default function ContactMethodCard({
  icon: Icon,
  label,
  value,
  href,
  description,
  id,
  external,
}: ContactMethodCardProps) {
  return (
    <a
      href={href}
      className="contact-card"
      id={id}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={`${label}: ${value}`}
    >
      <div className="contact-card-icon">
        <Icon size={22} aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#B0BCC9' }}>
          {label}
        </p>
        <p className="font-heading font-bold text-lg" style={{ color: '#071C3C' }}>
          {value}
        </p>
        {description && (
          <p className="text-xs mt-1" style={{ color: '#6B7A8D' }}>
            {description}
          </p>
        )}
      </div>
    </a>
  );
}
