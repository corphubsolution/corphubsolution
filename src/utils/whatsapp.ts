import { CONTACT } from '../data/contact';

/**
 * Build a wa.me WhatsApp deep link with an optional pre-filled message.
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a WhatsApp enquiry link pre-filled with service context.
 */
export function buildEnquiryLink(service?: string): string {
  const serviceText = service ? `Service Required: ${service}\n` : '';
  const message = `Hello CORPHUB SOLUTION,\n\n${serviceText}I would like to enquire about your services. Please get in touch.\n\nThank you.`;
  return buildWhatsAppLink(message);
}

/**
 * Build a WhatsApp link from contact form data.
 */
export function buildFormWhatsAppLink(params: {
  name: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}): string {
  const text = `Hello CORPHUB SOLUTION,\n\nName: ${params.name}\nCompany: ${params.company}\nPhone: ${params.phone}\nService: ${params.service}\n\nMessage:\n${params.message}\n\nThank you.`;
  return buildWhatsAppLink(text);
}
