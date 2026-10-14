import { buildEnquiryLink } from '../../utils/whatsapp';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  const link = buildEnquiryLink();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
      id="whatsapp-fab"
    >
      <MessageCircle size={22} color="white" aria-hidden="true" />
    </a>
  );
}
