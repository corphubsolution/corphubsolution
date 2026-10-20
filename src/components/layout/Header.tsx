import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '#', hasDropdown: true },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServicesActive = location.pathname.startsWith('/services');

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menus on route change or unmount
  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerStyle: React.CSSProperties = {
    height: 'var(--header-height)',
    backgroundColor: scrolled || mobileOpen ? '#071C3C' : 'transparent',
    backgroundImage: scrolled || mobileOpen
      ? 'none'
      : 'linear-gradient(to bottom, rgba(7, 28, 60, 0.9) 0%, rgba(7, 28, 60, 0.4) 60%, transparent 100%)',
    boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.45)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={headerStyle}
        role="banner"
      >
        <div className="container-site h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" aria-label="Corphub Solution — Home" className="flex items-center shrink-0">
            <div className="logo-container">
              <picture>
                <source srcSet="/assets/logo/logo-horizontal.webp" type="image/webp" />
                <img
                  src="/assets/logo/logo-horizontal.png"
                  alt="Corphub Solution"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                  width={220}
                  height={40}
                  loading="eager"
                />
              </picture>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1.5"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key="services"
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <button
                      className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group flex items-center gap-1.5 ${
                        isServicesActive || servicesOpen
                          ? 'text-orange-400 bg-white/[0.08]'
                          : 'text-white/90 hover:text-white hover:bg-white/[0.08]'
                      }`}
                      style={{ letterSpacing: '0.02em' }}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-controls="services-dropdown"
                      id="services-menu-btn"
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 text-orange-400/90 group-hover:text-orange-400 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />

                      {/* Underline indicator */}
                      <span
                        className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300 ${
                          isServicesActive || servicesOpen
                            ? 'scale-x-100 opacity-100'
                            : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                        }`}
                      />
                    </button>

                    {/* Dropdown with invisible hover bridge pt-2 */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[390px] z-50 transition-all duration-300 ${
                        servicesOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <div
                        id="services-dropdown"
                        className="rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                          background: 'rgba(7, 28, 60, 0.96)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 107, 0, 0.25)',
                          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.7), 0 0 25px rgba(255,107,0,0.15)',
                        }}
                        aria-label="Industrial support services"
                      >
                        {/* Top Accent Strip */}
                        <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />

                        {/* Top Label */}
                        <div className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-white/10">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-orange-400">
                            Industrial Support Services
                          </span>
                          <span className="text-[11px] font-medium text-white/50">
                            5 Specialized Divisions
                          </span>
                        </div>

                        {/* Services List */}
                        <div className="p-2 space-y-1">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              to={service.slug}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.08] transition-all duration-200"
                            >
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/5 border border-white/10 text-orange-400 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white group-hover:border-orange-500 group-hover:scale-105 transition-all duration-200 shadow-sm">
                                <service.icon size={18} aria-hidden="true" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                                    {service.name}
                                  </span>
                                  <ArrowRight
                                    size={14}
                                    className="text-orange-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-1"
                                    aria-hidden="true"
                                  />
                                </div>
                                <p className="text-xs text-white/60 group-hover:text-white/85 transition-colors line-clamp-1 mt-0.5">
                                  {service.tagline}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer in dropdown */}
                        <div className="px-5 py-3 bg-white/[0.03] border-t border-white/10 flex items-center justify-between text-xs">
                          <span className="text-white/60">Single-Window Execution</span>
                          <Link
                            to="/contact"
                            onClick={() => setServicesOpen(false)}
                            className="font-semibold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1 group/link"
                          >
                            <span>Request Fast Proposal</span>
                            <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                      isActive
                        ? 'text-orange-400 bg-white/[0.08]'
                        : 'text-white/90 hover:text-white hover:bg-white/[0.08]'
                    }`
                  }
                  style={{ letterSpacing: '0.02em' }}
                  end={link.to === '/'}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {/* Underline indicator */}
                      <span
                        className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'scale-x-100 opacity-100'
                            : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}

            {/* CTA with premium hover glow and sweep animation */}
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-lg transition-all duration-300 ml-2 group shadow-md overflow-hidden hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #FF6B00 0%, #FF8533 100%)',
                boxShadow: '0 4px 15px rgba(255, 107, 0, 0.35)',
              }}
              id="header-contact-cta"
            >
              {/* Subtle shine sweep on hover */}
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <span className="relative">Get a Quote</span>
              <ArrowRight
                size={15}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            id="hamburger-btn"
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
        hidden={!mobileOpen}
        style={{ display: mobileOpen ? 'block' : 'none' }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(7,28,60,0.9)' }}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className="absolute top-0 right-0 h-full w-80 max-w-full flex flex-col"
          style={{
            background: '#071C3C',
            borderLeft: '1px solid #123B70',
            paddingTop: 'var(--header-height)',
          }}
        >
          <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-1" aria-label="Mobile navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-3 rounded text-sm font-semibold ${isActive ? 'text-orange-400 bg-navy-800' : 'text-white hover:text-orange-400'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-4 py-3 rounded text-sm font-semibold ${isActive ? 'text-orange-400 bg-navy-800' : 'text-white hover:text-orange-400'}`
              }
            >
              About
            </NavLink>

            {/* Mobile Services accordion */}
            <div>
              <button
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-white hover:text-orange-400"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-3 my-1 border-l-2 border-orange-500/40 pl-3 flex flex-col gap-1">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={service.slug}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm text-white/90 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <service.icon size={15} className="text-orange-400 shrink-0" aria-hidden="true" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-4 py-3 rounded text-sm font-semibold ${isActive ? 'text-orange-400 bg-navy-800' : 'text-white hover:text-orange-400'}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile CTA buttons */}
          <div className="p-6 border-t flex flex-col gap-3" style={{ borderColor: '#123B70' }}>
            <Link
              to="/contact"
              className="btn btn-primary w-full justify-center"
              id="mobile-contact-cta"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
