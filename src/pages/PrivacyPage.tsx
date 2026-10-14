import SEO from '../components/seo/SEO';
import PageHero from '../components/sections/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | CORPHUB SOLUTION | Palanpur, Gujarat"
        description="Privacy Policy of CORPHUB SOLUTION in Palanpur, Gujarat. Details on how we manage, protect, and process client information and project enquiries."
        canonicalPath="/privacy-policy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
        ]}
      />

      {/* Hero */}
      <PageHero
        title="Privacy Policy"
        subtitle="Legal & Compliance"
        image="/assets/images/about-team.jpg"
        size="sm"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container-site max-w-4xl">
          <ScrollReveal>
            <SectionLabel text="Transparency & Data Safety" />
            <div className="prose prose-slate max-w-none space-y-6 text-gray-700 text-sm leading-relaxed mt-4">
              <p>
                <em>Last updated: October 2026</em>
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                1. Introduction
              </h2>
              <p>
                CORPHUB SOLUTION ("we", "our", or "us"), based in Palanpur, Banaskantha, Gujarat, values your privacy and is committed to protecting the confidential information of our corporate clients, partners, and website visitors. This Privacy Policy details our practices concerning data collection, usage, and protection when you interact with our website (corphubsolution.in) or communicate with our operations desks.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                2. Information We Collect
              </h2>
              <p>
                We only collect information directly provided by you when submitting an enquiry, requesting a quote, or communicating with us via WhatsApp, telephone, or email. This typically includes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name and corporate title</li>
                <li>Company / Organisation name</li>
                <li>Mobile number, telephone, and WhatsApp contact details</li>
                <li>Corporate email address</li>
                <li>Project details, site location, team size, and service requirements</li>
              </ul>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                3. Purpose of Processing
              </h2>
              <p>
                We use the submitted information strictly for professional B2B purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responding to project enquiries and preparing customized commercial proposals</li>
                <li>Coordinating accommodation, transport, material supply, vendor, and event arrangements</li>
                <li>Fulfilling corporate contracts, billing, and GST compliance</li>
                <li>Providing customer support and emergency field assistance</li>
              </ul>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your contact information. Where necessary to fulfill your booked services, limited project operational details (e.g. guest names for accommodation check-in or transport passenger rosters) may be shared with vetted local vendors, drivers, or property managers under strict confidentiality.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                5. Data Security
              </h2>
              <p>
                We implement appropriate administrative and technological precautions to guard your corporate data against unauthorized access, disclosure, or misuse.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                6. Contact for Privacy Inquiries
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to modify any stored contact information, please write to us at:
                <br />
                <strong>Email:</strong> corphubsolution@gmail.com
                <br />
                <strong>Phone:</strong> +91 9157060290
                <br />
                <strong>Address:</strong> Palanpur, Banaskantha, Gujarat, India
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
