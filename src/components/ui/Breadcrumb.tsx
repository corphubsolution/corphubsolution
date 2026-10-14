import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <Link to="/" aria-label="Home">
        <Home size={12} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={12} aria-hidden="true" />
          {item.href ? (
            <Link to={item.href}>{item.label}</Link>
          ) : (
            <span className="text-white" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
