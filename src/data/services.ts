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
    tagline: 'Comfortable, well-located housing for your project workforce.',
    description:
      'We arrange suitable rental accommodation and managed housing for project teams, executives, and workforce near industrial project sites across Gujarat.',
    heroImage: '/assets/images/accommodation-hero.jpg',
    icon: Building2,
    color: '#0A2E56',
    features: [
      'Rental property arrangement near project sites',
      'Managed accommodation with support services',
      'Flexible duration arrangements',
      'Coordination with property owners',
    ],
  },
  {
    id: 'transport',
    slug: '/services/transport',
    name: 'Transport',
    shortName: 'Transport',
    tagline: 'Reliable corporate transportation for project teams and executives.',
    description:
      'We coordinate professional passenger transport for corporate teams, daily commuting, airport transfers, and executive travel to and from project locations.',
    heroImage: '/assets/images/transport-hero.jpg',
    icon: Car,
    color: '#123B70',
    features: [
      'Airport and station pick-up & drop-off',
      'Daily project-site commuting arrangements',
      'Executive and VIP transport',
      'Team movement for large workforce',
    ],
  },
  {
    id: 'material-supply',
    slug: '/services/material-supply',
    name: 'Material Supply',
    shortName: 'Material Supply',
    tagline: 'Industrial materials and equipment sourced and coordinated for your project.',
    description:
      'We coordinate the sourcing and supply of industrial materials, equipment, and consumables through regional supplier networks, helping project teams reduce procurement delays.',
    heroImage: '/assets/images/material-supply-hero.jpg',
    icon: Package,
    color: '#1A4D8F',
    features: [
      'Industrial equipment and tool sourcing',
      'Construction materials coordination',
      'Safety equipment and consumables',
      'Supplier liaison and follow-up',
    ],
  },
  {
    id: 'vendor-management',
    slug: '/services/vendor-management',
    name: 'Vendor Management',
    shortName: 'Vendor Mgmt',
    tagline: 'One point of contact for all your vendor and contractor coordination.',
    description:
      'We act as a dedicated coordination layer between your project and its vendor ecosystem — managing communication, follow-ups, documentation support, and on-site liaison.',
    heroImage: '/assets/images/vendor-management-hero.jpg',
    icon: Users,
    color: '#071C3C',
    features: [
      'Vendor identification and vetting support',
      'Coordination and communication management',
      'Documentation and follow-up handling',
      'On-site vendor liaison support',
    ],
  },
  {
    id: 'event-management',
    slug: '/services/event-management',
    name: 'Event Management',
    shortName: 'Event Mgmt',
    tagline: 'Seamless corporate events, meetings, and conferences arranged end-to-end.',
    description:
      'We handle end-to-end coordination for corporate events — from venue sourcing and AV arrangements to catering liaison and attendee accommodation for meetings, conferences, and industrial training sessions.',
    heroImage: '/assets/images/event-management-hero.jpg',
    icon: CalendarCheck,
    color: '#052447',
    features: [
      'Corporate conference and seminar coordination',
      'Venue sourcing and logistics',
      'AV, catering, and support liaison',
      'Accommodation for outstation attendees',
    ],
  },
];
