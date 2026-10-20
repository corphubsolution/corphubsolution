import { useState, useMemo } from 'react';
import SEO from '../../components/seo/SEO';
import { 
  Building2, 
  Zap, 
  Cpu, 
  HardHat, 
  Armchair, 
  Wrench, 
  Bot, 
  Settings, 
  Layers, 
  Search, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  UploadCloud, 
  X, 
  ChevronRight,
  Package,
  Users2,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';
import PageHero from '../../components/sections/PageHero';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import { CONTACT } from '../../data/contact';
import { buildEnquiryLink } from '../../utils/whatsapp';

interface MaterialCategory {
  id: string;
  name: string;
  tagline: string;
  group: 'all' | 'electrical' | 'civil' | 'mechanical' | 'cabins';
  icon: typeof Building2;
  items: string[];
}

const CATEGORIES: MaterialCategory[] = [
  {
    id: 'cabins-containers',
    name: 'Industrial Cabins & Containers',
    tagline: 'Site office, security & storage units',
    group: 'cabins',
    icon: Building2,
    items: [
      'Portable Site Cabins',
      'Office Cabins',
      'Security Cabins',
      'Storage Containers',
      'Shipping Containers',
      'Site Storage Solutions',
    ],
  },
  {
    id: 'electrical-materials',
    name: 'Electrical Materials',
    tagline: 'Switchgear, panels & distribution boards',
    group: 'electrical',
    icon: Zap,
    items: [
      'Electrical Switchgear',
      'MCBs, MCCBs, and Circuit Breakers',
      'Contactors and Relays',
      'Electrical Panels and Distribution Boards',
      'Industrial Switches and Sockets',
      'Motors and Electrical Accessories',
      'Industrial Lighting and LED Lights',
    ],
  },
  {
    id: 'cables-wires',
    name: 'Industrial Cables & Wires',
    tagline: 'Power, control & instrumentation cables',
    group: 'electrical',
    icon: Layers,
    items: [
      'Power Cables',
      'Control Cables',
      'Instrumentation Cables',
      'Flexible Cables',
      'Industrial Wires',
      'Cable Trays and Cable Accessories',
      'Cable Glands and Connectors',
    ],
  },
  {
    id: 'generators-power',
    name: 'Generators & Power Equipment',
    tagline: 'Diesel generators & backup equipment',
    group: 'electrical',
    icon: Cpu,
    items: [
      'Diesel Generators',
      'Industrial Generators',
      'Generator Spare Parts',
      'Power Distribution Accessories',
      'Voltage Stabilizers',
      'UPS and Industrial Power Backup Equipment',
    ],
  },
  {
    id: 'civil-construction',
    name: 'Civil & Construction Materials',
    tagline: 'Structural steel, cement & roofing',
    group: 'civil',
    icon: HardHat,
    items: [
      'Cement and Concrete Materials',
      'Steel and Reinforcement Bars',
      'Structural Steel',
      'Bricks and Blocks',
      'Sand and Aggregates',
      'Roofing Sheets',
      'Industrial Flooring Materials',
      'Pipes, Fittings, and Construction Accessories',
    ],
  },
  {
    id: 'furniture-office',
    name: 'Furniture & Office Setup',
    tagline: 'Workbenches, desks & site shelving',
    group: 'cabins',
    icon: Armchair,
    items: [
      'Office Tables and Desks',
      'Office Chairs',
      'Storage Cabinets',
      'Industrial Workbenches',
      'Racks and Shelving',
      'Factory and Site Office Furniture',
      'Meeting Room Furniture',
    ],
  },
  {
    id: 'hardware-fasteners',
    name: 'Industrial Hardware & Fasteners',
    tagline: 'Nuts, bolts, anchors, clamps & tools',
    group: 'mechanical',
    icon: Wrench,
    items: [
      'Nuts, Bolts, and Screws',
      'Industrial Fasteners',
      'Washers and Anchors',
      'Clamps and Brackets',
      'Bearings',
      'Industrial Hinges and Fittings',
      'Hand Tools and Hardware Accessories',
    ],
  },
  {
    id: 'automation-components',
    name: 'Automation Components (Materials Only)',
    tagline: 'Sensors, PLCs, HMIs, VFDs & drives',
    group: 'electrical',
    icon: Bot,
    items: [
      'Sensors and Proximity Sensors',
      'Limit Switches',
      'PLC Hardware and Modules',
      'HMI Panels',
      'VFDs and Drives',
      'Industrial Relays',
      'Solenoid Valves',
      'Actuators',
      'Industrial Connectors',
      'Automation Cables and Accessories',
    ],
  },
  {
    id: 'mechanical-components',
    name: 'Mechanical & Industrial Components',
    tagline: 'Valves, pumps, pipes, couplings & seals',
    group: 'mechanical',
    icon: Settings,
    items: [
      'Industrial Valves',
      'Pumps and Pump Spare Parts',
      'Pipes and Pipe Fittings',
      'Bearings and Bushes',
      'Couplings',
      'Gears and Gearboxes',
      'Pneumatic Components',
      'Hydraulic Components',
      'Industrial Seals and Gaskets',
    ],
  },
];

export default function MaterialSupplyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [activeModalCat, setActiveModalCat] = useState<MaterialCategory | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    mobileNumber: '',
    businessEmail: '',
    projectLocation: '',
    materialCategory: 'Industrial Cabins & Containers',
    materialSpecs: '',
    requiredQuantity: '',
    deliveryDate: '',
    preferredModel: 'Connect with Vendors – Free',
    additionalRequirements: '',
    fileName: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter((cat) => {
      const matchesGroup = selectedGroup === 'all' || cat.group === selectedGroup;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesGroup;

      const matchesName = cat.name.toLowerCase().includes(q);
      const matchesTagline = cat.tagline.toLowerCase().includes(q);
      const matchesItems = cat.items.some((item) => item.toLowerCase().includes(q));

      return matchesGroup && (matchesName || matchesTagline || matchesItems);
    });
  }, [searchQuery, selectedGroup]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured WhatsApp enquiry
    const message = `*Material Supply Enquiry — CorpHub Solution*
🏢 *Company:* ${formData.companyName}
👤 *Contact Person:* ${formData.contactPerson}
📞 *Phone:* ${formData.mobileNumber}
✉️ *Email:* ${formData.businessEmail}
📍 *Project Location:* ${formData.projectLocation}
📦 *Category:* ${formData.materialCategory}
📝 *Material & Specs:* ${formData.materialSpecs}
🔢 *Quantity:* ${formData.requiredQuantity || 'Not specified'}
📅 *Required By:* ${formData.deliveryDate || 'Flexible'}
🤝 *Preferred Model:* ${formData.preferredModel}
${formData.additionalRequirements ? `📌 *Additional Notes:* ${formData.additionalRequirements}` : ''}
${formData.fileName ? `📎 *Document Attached:* ${formData.fileName}` : ''}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encoded}`;

    // Mark submitted and open WhatsApp dispatch
    setFormSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const scrollToEnquiry = (modelPref?: string) => {
    if (modelPref) {
      setFormData((prev) => ({ ...prev, preferredModel: modelPref }));
    }
    const el = document.getElementById('material-enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Industrial Material Supply & Sourcing | CORPHUB SOLUTION"
        description="Reliable industrial material sourcing and direct supply for factories, EPC firms, and contractors. Free vendor connection or direct quotation-based material supply."
        canonicalPath="/services/material-supply"
        ogImage="/assets/images/material-supply-hero.png"
        keywords={[
          'Industrial material supply Gujarat',
          'Industrial cabins containers Palanpur',
          'Electrical switchgear panels supplier Gujarat',
          'Industrial power cables supplier Banaskantha',
          'Diesel generators industrial power Gujarat',
          'Structural steel TMT bars supplier Palanpur',
          'Mechanical valves pumps fittings Gujarat',
          'Free vendor connection industrial materials Gujarat',
          'Direct material supply CorpHub Solution'
        ]}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Material Supply', href: '/services/material-supply' },
        ]}
        serviceSchema={{
          name: 'Industrial Material Sourcing & Supply',
          description: 'Industrial material procurement, vendor coordination, and direct supplies for EPC contractors, industrial sites, and infrastructure projects.',
          serviceType: 'Industrial Material Supply',
        }}
        faqSchema={[
          {
            question: 'How does CorpHub Solution’s free vendor connection service work?',
            answer: 'CorpHub Solution matches clients with vetted suppliers based on their technical material requirements at zero charge. Clients receive multiple quotations and finalize transactions directly with vendors.',
          },
          {
            question: 'What is the direct material supply model by CorpHub Solution?',
            answer: 'In direct supply, CorpHub Solution takes end-to-end responsibility for material sourcing, pricing quotation, order processing, and scheduled site delivery for projects across Gujarat.',
          },
          {
            question: 'What material categories does CorpHub Solution source?',
            answer: 'Categories include site cabins & containers, electrical switchgear & DBs, power & control cables, diesel generators, structural steel & cement, factory furniture, industrial hardware, automation components, and mechanical valves & pumps.',
          },
        ]}
      />

      {/* Hero Header */}
      <PageHero
        title="Reliable Industrial Material Sourcing & Supply"
        subtitle="Vendor Connection & Direct Material Supply"
        image="/assets/images/material-supply-hero.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Material Supply' },
        ]}
      />

      {/* Hero Visual Card Section (Matching Reference Mockup) */}
      <section className="py-10 md:py-14 bg-[#F8FAFC]">
        <div className="container-site">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6">
                <ScrollReveal>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-3 inline-block">
                    Industrial Material Supply
                  </span>

                  <h1
                    className="font-display mb-4 text-[#071C3C]"
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                    }}
                  >
                    Reliable Industrial <br />
                    <span className="text-[#FF6B00]">Material Sourcing & Supply</span>
                  </h1>

                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    We help industrial companies, factories, EPC firms and contractors source the right materials through our <strong className="text-[#071C3C]">vendor network</strong> or <strong className="text-[#071C3C]">direct supply</strong> as per your project requirements.
                  </p>

                  {/* 4 Feature Badges Pill */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                    <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-xl p-2.5 text-center flex flex-col items-center">
                      <Package size={18} className="text-[#0284C7] mb-1" />
                      <span className="text-[11px] font-bold text-[#071C3C]">Multiple Options</span>
                    </div>
                    <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-xl p-2.5 text-center flex flex-col items-center">
                      <ShieldCheck size={18} className="text-[#0284C7] mb-1" />
                      <span className="text-[11px] font-bold text-[#071C3C]">Reliable Sourcing</span>
                    </div>
                    <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-xl p-2.5 text-center flex flex-col items-center">
                      <Building2 size={18} className="text-[#0284C7] mb-1" />
                      <span className="text-[11px] font-bold text-[#071C3C]">Project Based</span>
                    </div>
                    <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-xl p-2.5 text-center flex flex-col items-center">
                      <Globe size={18} className="text-[#0284C7] mb-1" />
                      <span className="text-[11px] font-bold text-[#071C3C]">Direct Delivery</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => scrollToEnquiry()}
                      className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                    >
                      Get Material Quotation <ArrowRight size={16} />
                    </button>
                    <Button variant="secondary" href="#our-service-models">
                      Explore Models
                    </Button>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Hero Image (material-supply-hero.png) */}
              <div className="lg:col-span-6">
                <ScrollReveal delay={200}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                    <img 
                      src="/assets/images/material-supply-hero.png" 
                      alt="Industrial Material Staging and Logistics Warehouse Yard" 
                      className="w-full h-[320px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-lg flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#071C3C]">Industrial Cabins, Cables, Steel & Components</p>
                        <p className="text-[11px] text-gray-500">Connecting project managers with verified manufacturers & distributors</p>
                      </div>
                      <span className="text-xs font-bold text-[#FF6B00] bg-orange-50 px-2.5 py-1 rounded-md">
                        Direct & Sourced
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* OUR TWO SERVICE MODELS (Side-by-Side Cards) */}
      <section id="our-service-models" className="py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 inline-block">
              Flexible Engagement
            </span>
            <h2
              className="font-display text-[#071C3C]"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
              }}
            >
              Our Two Service Models
            </h2>
            <div className="w-16 h-1 bg-[#FF6B00] mx-auto mt-3 rounded-full mb-3" />
            <p className="text-sm text-gray-500">
              Choose the model that best matches your procurement procedure, internal policies, and project timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Model 1: Connect with Vendors – FREE */}
            <ScrollReveal delay={100}>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-gray-200/80 hover:border-navy-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#071C3C] text-white flex items-center justify-center shadow-sm shrink-0">
                        <Users2 size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-lg text-[#071C3C]">
                          Connect with Vendors
                        </h3>
                        <p className="text-xs text-gray-500">Direct supplier matchmaking</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold bg-[#FF6B00] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      FREE
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    We connect you with suitable and verified vendors based on your material requirements. Get multiple options, compare quotations and finalize directly with suppliers.
                  </p>

                  <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-6 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Connect customers with relevant vendors</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Provide multiple vendor options whenever available</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Help customers compare quotations and available options</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Match suppliers according to material specs, budget & location</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Direct client-vendor deal finalization (Zero fee charged by CorpHub)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => scrollToEnquiry('Connect with Vendors – Free')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#071C3C] hover:bg-[#0A2E56] text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-xs uppercase tracking-wider shadow-sm"
                >
                  Connect with Vendors <ArrowRight size={14} />
                </button>
              </div>
            </ScrollReveal>

            {/* Model 2: Direct Material Supply by CorpHub Solution */}
            <ScrollReveal delay={200}>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-gray-200/80 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shadow-sm shrink-0">
                        <Package size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-lg text-[#071C3C]">
                          Direct Material Supply
                        </h3>
                        <p className="text-xs text-gray-500">By CorpHub Solution</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF6B00] bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      Quote Based
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    We directly source and supply industrial materials as per your exact specifications, quantity, project location, and scheduled delivery requirements.
                  </p>

                  <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-6 space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Detailed understanding of exact material specifications</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Sourcing through verified manufacturing supply networks</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Transparent quotation based on specifications & bulk volume</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Complete coordination of order processing, billing & site dispatch</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Support for project-specific BOMs and bulk contract orders</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => scrollToEnquiry('Direct Material Supply by CorpHub Solution')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-xs uppercase tracking-wider shadow-sm"
                >
                  Request a Material Quotation <ArrowRight size={14} />
                </button>
              </div>
            </ScrollReveal>

          </div>

          <div className="mt-8 text-center bg-[#F8FAFC] border border-gray-200/60 rounded-xl p-3.5 max-w-3xl mx-auto">
            <p className="text-xs text-gray-500">
              *<strong>Important:</strong> Pricing for direct supply depends on material type, quantity, technical specifications, and delivery destination. All product availability is subject to confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN SECTION: CATEGORIES (Left) & ENQUIRY FORM (Right) */}
      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: Categories & How It Works */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Category Header & Filter */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-heading font-extrabold text-2xl text-[#071C3C]">
                      Our Material Categories
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      Explore major categories of industrial materials we source and supply.
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full sm:w-64">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search materials, categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                    />
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: 'all', label: 'All Categories' },
                    { id: 'electrical', label: 'Electrical & Power' },
                    { id: 'civil', label: 'Civil & Infra' },
                    { id: 'mechanical', label: 'Mechanical & Hardware' },
                    { id: 'cabins', label: 'Cabins & Furniture' },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedGroup(filter.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                        selectedGroup === filter.id
                          ? 'bg-[#071C3C] text-white shadow-xs'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* 9 Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.id}
                        onClick={() => setActiveModalCat(cat)}
                        className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl bg-[#071C3C] text-white flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors shadow-xs">
                              <Icon size={20} />
                            </div>
                            <span className="text-[11px] text-gray-400 group-hover:text-[#FF6B00] transition-colors flex items-center gap-1 font-semibold">
                              View Items <ChevronRight size={14} />
                            </span>
                          </div>

                          <h3 className="font-heading font-extrabold text-sm text-[#071C3C] group-hover:text-[#FF6B00] transition-colors mb-1">
                            {cat.name}
                          </h3>
                          <p className="text-xs text-gray-500 mb-3">
                            {cat.tagline}
                          </p>
                        </div>

                        {/* Top 3 item preview chips */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                          {cat.items.slice(0, 3).map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-gray-50 text-gray-600 border border-gray-100 rounded-md px-2 py-0.5 font-medium"
                            >
                              {item}
                            </span>
                          ))}
                          {cat.items.length > 3 && (
                            <span className="text-[10px] text-[#0284C7] font-bold px-1.5 py-0.5">
                              +{cat.items.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {filteredCategories.length === 0 && (
                  <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 text-gray-500 text-xs">
                    No materials found matching "{searchQuery}". Try clearing your search or view all categories.
                  </div>
                )}
              </div>

              {/* Feature Pill Strip */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xs grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                <div className="p-2">
                  <p className="text-xs font-bold text-[#071C3C]">Multiple Sourcing</p>
                  <p className="text-[10px] text-gray-400">Broad vendor network</p>
                </div>
                <div className="p-2">
                  <p className="text-xs font-bold text-[#071C3C]">Project Support</p>
                  <p className="text-[10px] text-gray-400">BOM & bulk orders</p>
                </div>
                <div className="p-2">
                  <p className="text-xs font-bold text-[#071C3C]">Timely Dispatch</p>
                  <p className="text-[10px] text-gray-400">Scheduled coordination</p>
                </div>
                <div className="p-2">
                  <p className="text-xs font-bold text-[#071C3C]">Wide Catalog</p>
                  <p className="text-[10px] text-gray-400">9 material sectors</p>
                </div>
                <div className="p-2 col-span-2 sm:col-span-1">
                  <p className="text-xs font-bold text-[#071C3C]">On-Time Support</p>
                  <p className="text-[10px] text-gray-400">Regional logistics</p>
                </div>
              </div>

              {/* How Our Material Supply Works (4 Steps) */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-xs">
                <div className="mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-1 inline-block">
                    Workflow
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-[#071C3C]">
                    How Our Material Supply Works
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#071C3C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#071C3C] mb-1">
                        Share Your Requirements
                      </h4>
                      <p className="text-[11px] text-gray-600">
                        Tell us material requirements, quantity, specifications and project location.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#071C3C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#071C3C] mb-1">
                        Get Options or Quotation
                      </h4>
                      <p className="text-[11px] text-gray-600">
                        We connect you with vendors and/or provide a direct supply quotation.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#071C3C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#071C3C] mb-1">
                        Compare & Finalize
                      </h4>
                      <p className="text-[11px] text-gray-600">
                        Review options and finalize with the vendor or confirm our direct quotation.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      04
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#071C3C] mb-1">
                        Order & Delivery Support
                      </h4>
                      <p className="text-[11px] text-gray-600">
                        We coordinate order processing and delivery seamlessly as per your timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Material Enquiry Form */}
            <div id="material-enquiry-form" className="lg:col-span-5 sticky top-24">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-xl">
                
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B00] text-xs font-bold px-3 py-1 rounded-md mb-2">
                    <Sparkles size={14} /> Material Procurement
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#071C3C]">
                    Material Enquiry
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Share your requirements and our team will get back to you with suitable options.
                  </p>
                </div>

                {formSubmitted && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-emerald-900">
                        Enquiry Ready for Dispatch!
                      </h4>
                      <p className="text-[11px] text-emerald-700 mt-0.5">
                        WhatsApp message has been opened. Our team will review your specifications and contact you shortly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                  
                  {/* Company Name & Contact Person */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        placeholder="Enter contact person"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        placeholder="Enter 10-digit number"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        required
                        placeholder="name@company.com"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                  </div>

                  {/* Project Location & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        required
                        placeholder="City, site or district"
                        value={formData.projectLocation}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Material Category *
                      </label>
                      <select
                        name="materialCategory"
                        value={formData.materialCategory}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Material Name & Specifications */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Material Name & Specifications *
                    </label>
                    <textarea
                      name="materialSpecs"
                      required
                      rows={2}
                      placeholder="e.g. 50mm Structural steel beams, 10 units site cabins, 11kV cables..."
                      value={formData.materialSpecs}
                      onChange={handleInputChange}
                      className="w-full text-xs px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                    />
                  </div>

                  {/* Quantity & Required Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Required Quantity *
                      </label>
                      <input
                        type="text"
                        name="requiredQuantity"
                        required
                        placeholder="e.g. 50 Tons / 20 Units"
                        value={formData.requiredQuantity}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Required Delivery Date
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                      />
                    </div>
                  </div>

                  {/* Preferred Service Model */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-2">
                      Preferred Service Model *
                    </label>
                    <div className="space-y-2 bg-[#F8FAFC] p-3 rounded-xl border border-gray-200/70 text-xs">
                      {[
                        'Connect with Vendors – Free',
                        'Direct Material Supply by CorpHub Solution',
                        'Open to Both Options',
                      ].map((model) => (
                        <label key={model} className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredModel"
                            value={model}
                            checked={formData.preferredModel === model}
                            onChange={handleInputChange}
                            className="text-[#FF6B00] focus:ring-[#FF6B00]"
                          />
                          <span className="text-gray-700 font-medium">{model}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Additional Requirements
                    </label>
                    <input
                      type="text"
                      name="additionalRequirements"
                      placeholder="Any specific brands, test certificates, or delivery conditions"
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      className="w-full text-xs px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                    />
                  </div>

                  {/* File / BOQ Upload Note */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Upload Material List / BOQ / Document
                    </label>
                    <div className="border border-dashed border-gray-300 rounded-xl p-3 text-center bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <input
                        type="file"
                        id="boqFile"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="boqFile" className="cursor-pointer flex flex-col items-center">
                        <UploadCloud size={20} className="text-[#FF6B00] mb-1" />
                        <span className="text-xs text-gray-700 font-medium">
                          {formData.fileName ? formData.fileName : 'Click to select BOQ, PDF, or Excel file'}
                        </span>
                        <span className="text-[10px] text-gray-400 mt-0.5">
                          (You can also send directly via WhatsApp after submitting)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm uppercase tracking-wider"
                  >
                    Submit Material Enquiry <ArrowRight size={16} />
                  </button>

                  <p className="text-[10px] text-center text-gray-400 mt-2">
                    CorpHub Solution respects your confidentiality. Direct communication with verified channels.
                  </p>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL: Full Category Items List */}
      {activeModalCat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalCat(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#071C3C] text-[#FF6B00] flex items-center justify-center shrink-0">
                <activeModalCat.icon size={24} />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-[#071C3C]">
                  {activeModalCat.name}
                </h3>
                <p className="text-xs text-gray-500">{activeModalCat.tagline}</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              Below are typical products and items supplied under this category. Sourcing is confirmed based on your specifications, required brand, and volume:
            </p>

            <div className="space-y-2 mb-6">
              {activeModalCat.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-gray-100 text-xs text-gray-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, materialCategory: activeModalCat.name }));
                  setActiveModalCat(null);
                  scrollToEnquiry();
                }}
                className="flex-1 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider text-center"
              >
                Enquire for this Category
              </button>
              <button
                onClick={() => setActiveModalCat(null)}
                className="px-4 py-3 border border-gray-200 rounded-xl text-xs text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DIRECT CONTACT FOOTER STRIP */}
      <section className="py-10 bg-[#071C3C] text-white border-t border-white/10">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-heading font-extrabold text-xl text-white tracking-wider">
                CORPHUB <span className="text-[#FF6B00]">SOLUTION</span>
              </p>
              <p className="text-xs text-white/70 mt-1">
                Industrial Material Sourcing, Free Vendor Matchmaking & Direct Supply
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a 
                href={`tel:${CONTACT.phoneRaw}`} 
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl border border-white/15 transition-colors text-sm font-bold text-white"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white">
                  <Phone size={14} />
                </div>
                <span>{CONTACT.phone}</span>
              </a>

              <a 
                href={`mailto:${CONTACT.email}`} 
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl border border-white/15 transition-colors text-sm font-bold text-white"
              >
                <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
                <span>{CONTACT.email}</span>
              </a>

              <a
                href={buildEnquiryLink('Industrial Material Supply')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm"
              >
                Instant WhatsApp Quote <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-extrabold tracking-widest text-[#FF6B00] uppercase">
              — YOUR PROJECT, OUR RESPONSIBILITY —
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
