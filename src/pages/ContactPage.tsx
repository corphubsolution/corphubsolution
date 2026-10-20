import { useState } from 'react';
import SEO from '../components/seo/SEO';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building 
} from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContactMethodCard from '../components/ui/ContactMethodCard';
import Button from '../components/ui/Button';
import { CONTACT } from '../data/contact';
import { buildWhatsAppLink, buildFormWhatsAppLink } from '../utils/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: 'Accommodation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    // Direct WhatsApp redirect with nicely structured message
    const url = buildFormWhatsAppLink(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact CORPHUB SOLUTION | Operations Desk Gujarat"
        description="Contact CORPHUB SOLUTION in Palanpur, Gujarat. Call +91 9157060290 or message for industrial housing, transport, material supply & site liaison."
        canonicalPath="/contact"
        ogImage="/assets/images/hero-home.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact' },
        ]}
      />

      {/* Hero */}
      <PageHero
        title="Get in Touch With Our Operations Desk"
        subtitle="Contact Us"
        image="/assets/images/hero-home.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* Contact Content Section */}
      <section className="section-py" style={{ background: '#FFFFFF' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Reach */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <SectionLabel text="Reach Out Today" />
                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#071C3C',
                    lineHeight: 1.15,
                  }}
                >
                  Direct Support for Industrial Projects Across Gujarat
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 mb-8">
                  Whether you require urgent team housing, a dedicated corporate transport fleet, or continuous vendor management, our coordinators in Palanpur are ready to assist.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4 mb-8">
                  <ContactMethodCard
                    icon={Phone}
                    label="Call Directly"
                    value={CONTACT.phone}
                    href={`tel:${CONTACT.phoneRaw}`}
                    description="Monday to Saturday, 8:00 AM – 8:00 PM IST"
                  />

                  <ContactMethodCard
                    icon={MessageCircle}
                    label="WhatsApp Chat"
                    value="+91 9157060290"
                    href={buildWhatsAppLink('Hello CORPHUB SOLUTION, I would like to enquire about your services.')}
                    external
                    description="Instant response for quotes and immediate bookings"
                  />

                  <ContactMethodCard
                    icon={Mail}
                    label="Email Enquiries"
                    value={CONTACT.email}
                    href={`mailto:${CONTACT.email}`}
                    description="Send project RFPs, BoQ sheets, and contracts"
                  />

                  <ContactMethodCard
                    icon={MapPin}
                    label="Headquarters"
                    value="Palanpur, Banaskantha"
                    href="https://maps.google.com/?q=Palanpur+Banaskantha+Gujarat+India"
                    external
                    description="Gujarat, India (Serving all major industrial zones)"
                  />
                </div>

                {/* Operating Hours Box */}
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock size={18} className="text-primary-orange" />
                    <h3 className="font-heading font-bold text-sm text-navy-950">Operating Hours</h3>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    <strong>Standard Business:</strong> Monday – Saturday: 8:00 AM – 8:00 PM IST
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Emergency Project Support:</strong> 24/7 dedicated telephone assistance for active client retainers.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-2"
                    style={{ background: 'linear-gradient(90deg, #FF6B00 0%, #0A2E56 100%)' }}
                  />

                  <h3 className="font-heading font-bold text-2xl text-navy-950 mb-2">
                    Send a Project Enquiry
                  </h3>
                  <p className="text-sm text-gray-500 mb-8">
                    Fill out the form below. When you click submit, your inquiry will open directly in WhatsApp to connect you immediately with our duty manager.
                  </p>

                  {submitted && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="font-semibold text-green-900 text-sm">Enquiry generated!</p>
                        <p className="text-xs text-green-700 mt-0.5">
                          WhatsApp should have opened in a new tab. If not, feel free to call us directly at {CONTACT.phone}.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Patel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-navy-600 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Company / Organization
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Infra Ltd"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-navy-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-navy-600 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Service Required *
                        </label>
                        <select
                          id="contact-service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-navy-600 transition-colors bg-white"
                        >
                          <option value="Accommodation">Accommodation (Guest Houses / Housing)</option>
                          <option value="Transport">Transport (Site Shuttles / Executive Fleet)</option>
                          <option value="Material Supply">Material Supply & Consumables</option>
                          <option value="Vendor Management">Vendor Management & Site Liaison</option>
                          <option value="Event Management">Event Management & Inaugurations</option>
                          <option value="Integrated All-In-One Package">Integrated All-In-One Package</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Project Details / Specific Requirements
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention team size, site location (district/town), timeline, and any urgent needs..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-navy-600 transition-colors resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full py-4 px-6 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
                      style={{ background: '#FF6B00' }}
                    >
                      <Send size={18} />
                      Submit & Connect on WhatsApp
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Your inquiry is strictly confidential. We do not spam or share project information with third parties.
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Highlight */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-site">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#071C3C', color: '#FF6B00' }}
              >
                <Building size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-950 text-lg">
                  Registered Operations Center: Palanpur, Gujarat
                </h3>
                <p className="text-sm text-gray-500">
                  District Banaskantha, Gujarat, India — Logistical hub connecting Northern Gujarat and Western Freight Corridors.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              href="https://maps.google.com/?q=Palanpur+Banaskantha+Gujarat+India"
              external
            >
              Open in Google Maps
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
