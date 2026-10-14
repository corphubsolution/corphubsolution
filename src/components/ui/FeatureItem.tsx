import { Check } from 'lucide-react';

interface FeatureItemProps {
  text: string;
  description?: string;
  dark?: boolean;
}

export default function FeatureItem({ text, description, dark = false }: FeatureItemProps) {
  return (
    <div className="feature-item">
      <div className="feature-icon shrink-0">
        <Check size={14} aria-hidden="true" />
      </div>
      <div>
        <p
          className={`text-sm font-semibold leading-tight ${dark ? 'text-white' : ''}`}
          style={!dark ? { color: '#1A2330' } : undefined}
        >
          {text}
        </p>
        {description && (
          <p
            className="text-xs mt-0.5 leading-relaxed"
            style={{ color: dark ? 'rgba(255,255,255,0.6)' : '#6B7A8D' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
