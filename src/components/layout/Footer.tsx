import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { CONTACT } from '../../data/contact';
import { buildEnquiryLink } from '../../utils/whatsapp';

function InstagramIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const COMPANY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const year = CURRENT_YEAR;


  return (
    <footer
      className="accent-top"
      style={{ background: '#071C3C' }}
      role="contentinfo"
    >
      <div className="container-site section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Corphub Solution — Home">
              <div className="logo-container inline-flex mb-4">
                <picture>
                  <source srcSet="/assets/logo/logo-horizontal.webp" type="image/webp" />
                  <img
                    src="/assets/logo/logo-horizontal.png"
                    alt="Corphub Solution"
                    className="h-10 w-auto object-contain"
                    width={220}
                    height={40}
                    loading="lazy"
                  />
                </picture>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Your Project. Our Responsibility.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Industrial project support services across Gujarat — accommodation, transport, material supply, vendor management, and event management.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.slug}
                    className="text-sm transition-colors hover:text-orange-400"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-orange-400"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-start gap-2.5 text-sm hover:text-orange-400 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                  aria-label={`Phone: ${CONTACT.phone}`}
                >
                  <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-2.5 text-sm hover:text-orange-400 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                  aria-label={`Email: ${CONTACT.email}`}
                >
                  <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {CONTACT.location.full}
                </span>
              </li>
              <li className="pt-2 flex flex-col gap-2.5">
                <a
                  href={buildEnquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm inline-flex items-center gap-2"
                  id="footer-whatsapp-btn"
                  aria-label={`Chat on WhatsApp: ${CONTACT.phone}`}
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>WhatsApp: {CONTACT.phone}</span>
                </a>

                <a
                  href={CONTACT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-orange-400 transition-colors px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-orange-400/40"
                  id="footer-instagram-btn"
                  aria-label="Follow CorpHub Solution on Instagram"
                >
                  <InstagramIcon size={15} className="text-[#E1306C]" />
                  <span>Follow on Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(18,59,112,0.5)' }}
      >
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {year} CORPHUB SOLUTION. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-xs hover:text-orange-400 transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs hover:text-orange-400 transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
