import SEO from '../components/seo/SEO';
import { Home, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import { CONTACT } from '../data/contact';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | CORPHUB SOLUTION"
        description="The requested page could not be found on CORPHUB SOLUTION."
        noindex={true}
      />

      <section
        className="min-h-[75vh] flex items-center justify-center section-py relative overflow-hidden"
        style={{ background: '#F8FAFC' }}
      >
        <div className="container-site text-center max-w-xl relative z-10">
          <span
            className="font-display font-black text-8xl md:text-9xl block mb-2"
            style={{
              background: 'linear-gradient(135deg, #071C3C 0%, #FF6B00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </span>

          <h1 className="font-heading font-bold text-2xl md:text-3xl text-navy-950 mb-3">
            Page Not Found
          </h1>

          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            The page you are looking for may have been moved, renamed, or does not exist. Please navigate back to our homepage or contact our team directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/">
              <Home size={16} className="mr-1" /> Return to Homepage
            </Button>
            <Button variant="outline" href={`tel:${CONTACT.phoneRaw}`}>
              <Phone size={16} className="mr-1" /> Call Support
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
