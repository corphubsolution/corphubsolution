import Button from '../ui/Button';
import { buildEnquiryLink } from '../../utils/whatsapp';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { CONTACT } from '../../data/contact';

interface EnquiryCTAProps {
  heading?: string;
  title?: string;
  subtext?: string;
  subtitle?: string;
  service?: string;
  serviceName?: string;
  showQuoteBtn?: boolean;
}

export default function EnquiryCTA({
  heading,
  title,
  subtext,
  subtitle,
  service,
  serviceName,
  showQuoteBtn = true,
}: EnquiryCTAProps) {
  const displayHeading = title || heading || 'Ready to Support Your Project?';
  const displaySubtext = subtitle || subtext || 'Reach out today — we\'ll respond within 1 business day.';
  const effectiveService = serviceName || service;
  const whatsappLink = buildEnquiryLink(effectiveService);

  return (
    <section className="cta-band py-12 md:py-16 bg-[#071C3C] text-white" aria-labelledby="cta-heading">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2
              id="cta-heading"
              className="font-display text-white mb-2"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800 }}
            >
              {displayHeading}
            </h2>
            <p className="text-sm md:text-base text-white/70">
              {displaySubtext}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
            {showQuoteBtn && (
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                id="cta-quote-btn"
                className="w-full sm:w-auto justify-center"
              >
                Get a Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            )}
            <Button
              href={whatsappLink}
              variant="whatsapp"
              size="lg"
              external
              id="cta-whatsapp-btn"
              aria-label="Enquire via WhatsApp"
              className="w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp Us
            </Button>
            {!showQuoteBtn && (
              <Button
                href={`tel:${CONTACT.phoneRaw}`}
                variant="outline-white"
                size="lg"
                id="cta-call-btn"
                aria-label={`Call us at ${CONTACT.phone}`}
                className="w-full sm:w-auto justify-center"
              >
                <Phone size={18} aria-hidden="true" />
                Call Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
