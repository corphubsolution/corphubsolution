import {
  Building2,
  Car,
  Package,
  Users,
  CalendarCheck,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroImage: string;
  icon: LucideIcon;
  color: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'accommodation',
    slug: '/services/accommodation',
    name: 'Accommodation',
    shortName: 'Accommodation',
    tagline: 'The Right Stay. The Right Support. One Coordinated Solution.',
    description:
      'We help corporate and industrial companies arrange suitable accommodation for employees, visiting professionals and project teams — with flexible options, competitive pricing and reliable coordination.',
    heroImage: '/assets/images/accommodation-hero.webp',
    icon: Building2,
    color: '#0A2E56',
    features: [
      'Rental property arrangement & sourcing',
      'Hotel & guest house accommodation at corporate rates',
      'Managed accommodation with housekeeping & utilities',
      '24×7 dedicated accommodation support',
    ],
  },
  {
    id: 'transport',
    slug: '/services/transport',
    name: 'Transport',
    shortName: 'Transport',
    tagline: 'Safe. Reliable. Flexible. Complete Coordination.',
    description:
      'Customized transportation services for companies, industrial projects, employees, and engineers planned according to your route, vehicle type, and schedule.',
    heroImage: '/assets/images/Transport.webp',
    icon: Car,
    color: '#123B70',
    features: [
      'Corporate staff pickup & drop-off',
      'Airport & railway station transfers',
      'Outstation business travel & site visits',
      'Long-term vehicle contracts & tempo travellers',
    ],
  },
  {
    id: 'material-supply',
    slug: '/services/material-supply',
    name: 'Material Supply',
    shortName: 'Material Supply',
    tagline: 'Reliable Industrial Material Sourcing & Supply.',
    description:
      'We help industrial companies, factories, EPC firms and contractors source the right materials through our free vendor network or direct supply.',
    heroImage: '/assets/images/material-supply-hero.webp',
    icon: Package,
    color: '#1A4D8F',
    features: [
      'Free vendor connection & quotation comparison',
      'Direct material supply by CorpHub Solution',
      'Industrial cabins, electrical, steel & mechanical items',
      'Scheduled project delivery coordination',
    ],
  },
  {
    id: 'vendor-management',
    slug: '/services/vendor-management',
    name: 'Vendor Management',
    shortName: 'Vendor Mgmt',
    tagline: 'Reliable Vendors. Better Project Coordination.',
    description:
      'Local supplier coordination, contractor follow-ups and on-site progress support for industrial projects across Gujarat.',
    heroImage: '/assets/images/vender.webp',
    icon: Users,
    color: '#071C3C',
    features: [
      'Vendor identification and vetting support',
      'Milestone tracking & timeline enforcement',
      'Delivery documentation & invoice coordination',
      'On-site ground liaison & communication follow-up',
    ],
  },
  {
    id: 'event-management',
    slug: '/services/event-management',
    name: 'Event Management',
    shortName: 'Event Mgmt',
    tagline: 'Meeting, Banquet & Corporate Hospitality Arrangements.',
    description:
      'We arrange meeting spaces, hotel accommodation, food, refreshments, and complete event coordination according to your requirements, budget, schedule, and team size.',
    heroImage: '/assets/images/events/event-hero.webp',
    icon: CalendarCheck,
    color: '#052447',
    features: [
      'Meeting & conference rooms with AV setup',
      'Hotel stay & guest accommodation with meal plans',
      'Food, banquet & corporate catering arrangements',
      'End-to-end event coordination from booking to checkout',
    ],
  },
];
