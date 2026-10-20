import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  slug: string;
  image?: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, name, description, slug, image, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-200/80 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group h-full"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top Image if provided */}
      {image && (
        <div className="relative h-40 w-full overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
            width={600}
            height={320}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div
            className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md text-[#FF6B00]"
            aria-hidden="true"
          >
            <Icon size={20} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {!image && (
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#FF6B00]"
              style={{ background: 'rgba(255,107,0,0.1)' }}
              aria-hidden="true"
            >
              <Icon size={22} />
            </div>
          )}

          <h3
            className="text-lg font-heading font-extrabold mb-2 text-[#071C3C] group-hover:text-[#FF6B00] transition-colors"
          >
            {name}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Link */}
        <Link
          to={slug}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] group-hover:text-[#e05e00] transition-colors uppercase tracking-wider mt-auto pt-2 border-t border-gray-100"
          aria-label={`Know More about ${name}`}
        >
          <span>Know More</span>
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
