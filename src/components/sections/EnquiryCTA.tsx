import Button from '../ui/Button';
import { buildEnquiryLink } from '../../utils/whatsapp';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '../../data/contact';

interface EnquiryCTAProps {
  heading?: string;
  title?: string;
  subtext?: string;
  subtitle?: string;
  service?: string;
  serviceName?: string;
}

export default function EnquiryCTA({
  heading,
  title,
  subtext,
  subtitle,
  service,
  serviceName,
}: EnquiryCTAProps) {
  const displayHeading = title || heading || 'Ready to Support Your Project?';
  const displaySubtext = subtitle || subtext || 'Contact us today and we\'ll get back to you within 1 business day.';
  const effectiveService = serviceName || service;
  const whatsappLink = buildEnquiryLink(effectiveService);


  return (
    <section className="cta-band section-py" aria-labelledby="cta-heading">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2
              id="cta-heading"
              className="font-display text-white mb-2"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 700 }}
            >
              {displayHeading}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              {displaySubtext}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              href={whatsappLink}
              variant="whatsapp"
              size="lg"
              external
              id="cta-whatsapp-btn"
              aria-label="Enquire via WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp Us
            </Button>
            <Button
              href={`tel:${CONTACT.phoneRaw}`}
              variant="outline-white"
              size="lg"
              id="cta-call-btn"
              aria-label={`Call us at ${CONTACT.phone}`}
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
