import SEO from '../components/seo/SEO';
import PageHero from '../components/sections/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | CORPHUB SOLUTION | Palanpur, Gujarat"
        description="Commercial terms and conditions governing service agreements and operations of CORPHUB SOLUTION in Palanpur, Banaskantha, Gujarat."
        canonicalPath="/terms"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms & Conditions', href: '/terms' },
        ]}
      />

      {/* Hero */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Commercial Terms"
        image="/assets/images/about-team.jpg"
        size="sm"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms & Conditions' },
        ]}
      />

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container-site max-w-4xl">
          <ScrollReveal>
            <SectionLabel text="Operating Guidelines" />
            <div className="prose prose-slate max-w-none space-y-6 text-gray-700 text-sm leading-relaxed mt-4">
              <p>
                <em>Effective Date: October 2026</em>
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing this website (corphubsolution.in) or entering into an agreement with CORPHUB SOLUTION ("Company", "we", "our") for accommodation, transport, material supply, vendor management, or event management, you agree to comply with and be bound by these Terms and Conditions.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                2. Scope of Services
              </h2>
              <p>
                CORPHUB SOLUTION provides project support coordination services across Gujarat, India. Specific deliverables, quantities, schedules, and tariffs for each assignment are confirmed via written quotation, purchase order, or formal contract agreement between the client and CORPHUB SOLUTION.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                3. Bookings, Proposals & Payment Terms
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>All quotations issued are valid for the timeframe stated in the proposal document.</li>
                <li>Advance deposits or retainer amounts may be required prior to property leasing, vehicle mobilisation, or equipment procurement.</li>
                <li>Invoices must be cleared in accordance with the credit timeline mutually agreed upon in writing. Applicable GST and statutory levies are charged in line with Indian tax regulations.</li>
              </ul>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                4. Client Responsibilities
              </h2>
              <p>
                Clients agree to provide accurate project specifications, site locations, passenger manifests, and timely notifications of schedule changes. For accommodation units, clients agree that staff will maintain reasonable upkeep and observe local housing community norms.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                5. Safety & Regulatory Compliance
              </h2>
              <p>
                Both parties commit to complying with all local, state, and central safety regulations, labor guidelines, and transport laws. We reserve the right to pause service in circumstances posing hazardous conditions or safety risks to personnel or fleet drivers.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                6. Force Majeure
              </h2>
              <p>
                Neither party shall be held liable for failure or delay in performance caused by circumstances beyond reasonable control, including natural disasters, acts of government, strikes, extreme weather, road blockades, or national emergencies.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                7. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to our services shall be subject to the exclusive jurisdiction of the competent courts in Banaskantha District, Gujarat, India.
              </p>

              <h2 className="text-xl font-heading font-bold text-navy-950 mt-8 mb-3">
                8. Contact Information
              </h2>
              <p>
                For questions regarding these terms, contact:
                <br />
                <strong>CORPHUB SOLUTION</strong>
                <br />
                Palanpur, Banaskantha, Gujarat, India
                <br />
                <strong>Email:</strong> corphubsolution@gmail.com
                <br />
                <strong>Phone:</strong> +91 9157060290
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
