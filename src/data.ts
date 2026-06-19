/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Industry, Office, InsightArticle } from './types';

export const SERVICES: Service[] = [
  {
    id: 'korea-us-market-entry',
    title: 'KOREA–U.S. MARKET ENTRY',
    subtitle: 'Strategic access to both markets',
    description: 'Navigate new markets with a partner who understands both the American innovation ecosystem and Korean corporate decision-making.',
    longDescription: 'Navigate new markets with a partner who understands both the American innovation ecosystem and Korean corporate decision-making. We provide structured entry pathways, counterparty identification, and execution support for companies pursuing Korea–U.S. cross-border opportunities.',
    details: [
      'Market landscape analysis and entry pathway assessment',
      'Counterparty identification and qualification across both markets',
      'Regulatory and compliance navigation',
      'Go-to-market strategy and execution support'
    ],
    iconName: 'DoorOpen',
    highlightStat: { value: 'Korea–U.S.', label: 'Market Corridor' }
  },
  {
    id: 'strategic-partnership',
    title: 'STRATEGIC PARTNERSHIP ORIGINATION',
    subtitle: 'Access-driven relationship development',
    description: 'Identify, qualify, and structure relationships between U.S. growth companies, Korean conglomerates, investors, and industrial partners.',
    longDescription: 'Identify, qualify, and structure relationships between U.S. growth companies, Korean conglomerates, investors, and industrial partners. We bring direct access and disciplined process to the highest-value commercial and capital relationships in the Korea–U.S. corridor.',
    details: [
      'Counterparty mapping and qualification across both markets',
      'Partnership structuring and negotiation advisory',
      'Joint venture and strategic alliance framework development',
      'Corporate development team advisory and support'
    ],
    iconName: 'Users',
    highlightStat: { value: 'Senior', label: 'Level Relationships' }
  },
  {
    id: 'capital-formation',
    title: 'CAPITAL FORMATION & SPV STRATEGY',
    subtitle: 'Cross-border capital pathways',
    description: 'Support venture allocations, strategic investments, and cross-border SPV structures designed for Korean institutional and private capital.',
    longDescription: 'Support venture allocations, strategic investments, and cross-border SPV structures designed for Korean institutional and private capital. We advise on the full capital formation lifecycle, from investor identification to structure design and execution.',
    details: [
      'SPV structure design and implementation advisory',
      'Korean institutional and private investor engagement',
      'Cross-border capital pathway development',
      'Strategic investment and co-investment advisory'
    ],
    iconName: 'GitMerge',
    highlightStat: { value: 'Cross-Border', label: 'Capital Strategy' }
  },
  {
    id: 'executive-access',
    title: 'EXECUTIVE ACCESS & MEETING STRATEGY',
    subtitle: 'Senior-level conversation preparation',
    description: 'Prepare founder, investor, and corporate teams for senior-level conversations with the right materials, positioning, and negotiation strategy.',
    longDescription: 'Prepare founder, investor, and corporate teams for senior-level conversations with the right materials, positioning, and negotiation strategy. We develop the briefing materials, stakeholder analysis, and negotiation frameworks required for high-value Korea–U.S. discussions.',
    details: [
      'Executive briefing material development and preparation',
      'Stakeholder analysis and positioning strategy',
      'Cultural context and negotiation preparation',
      'Follow-up strategy and relationship management'
    ],
    iconName: 'Compass',
    highlightStat: { value: 'Executive', label: 'Level Access' }
  },
  {
    id: 'sector-intelligence',
    title: 'SECTOR INTELLIGENCE & DEAL ADVISORY',
    subtitle: 'Focused market and deal intelligence',
    description: 'Deliver focused intelligence across AI infrastructure, automotive, EV, defense, dual-use technology, and Korea-linked strategic opportunities.',
    longDescription: 'Deliver focused intelligence across AI infrastructure, automotive, EV, defense, dual-use technology, and Korea-linked strategic opportunities. Our sector coverage is specific, current, and built around the commercial and capital dynamics of the Korea–U.S. corridor.',
    details: [
      'Sector-specific market intelligence and landscape reports',
      'Deal flow analysis and opportunity assessment',
      'Competitive landscape and counterparty mapping',
      'Korea–U.S. strategic opportunity identification'
    ],
    iconName: 'Globe',
    highlightStat: { value: 'Sector', label: 'Focused Intelligence' }
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'ai-infrastructure',
    name: 'AI Infrastructure & Data Centers',
    description: 'Strategic advisory for companies building next-generation compute, cloud infrastructure, enterprise AI systems, and data center ecosystems.',
    longDescription: 'Strategic advisory for companies building next-generation compute, cloud infrastructure, enterprise AI systems, and data center ecosystems. We connect U.S. AI companies with Korean industrial partners, investors, and corporate development teams pursuing AI infrastructure opportunities in the Korea–U.S. corridor.',
    iconName: 'Cpu',
    highlights: [
      'Next-generation compute and cloud infrastructure partnerships',
      'Enterprise AI system and data center ecosystem advisory',
      'Korean corporate AI adoption and investment strategy'
    ]
  },
  {
    id: 'mobility-ev',
    name: 'Mobility, EV & Automotive Technology',
    description: 'Partnership development across electric vehicles, battery systems, advanced manufacturing, mobility platforms, and Korean OEM ecosystems.',
    longDescription: 'Partnership development across electric vehicles, battery systems, advanced manufacturing, mobility platforms, and Korean OEM ecosystems. We advise companies navigating the Korea–U.S. automotive technology corridor, from battery supply chain to OEM commercial relationships.',
    iconName: 'Zap',
    highlights: [
      'EV and battery system partnership development',
      'Korean OEM and automotive ecosystem navigation',
      'Advanced manufacturing and mobility platform advisory'
    ]
  },
  {
    id: 'defense-dual-use',
    name: 'Defense & Dual-Use Technology',
    description: 'Market entry and strategic relationship support for technologies with commercial, industrial, and national security applications.',
    longDescription: 'Market entry and strategic relationship support for technologies with commercial, industrial, and national security applications. We support companies navigating complex Korea–U.S. defense and dual-use technology relationships, from market entry to strategic partnership development.',
    iconName: 'Layers',
    highlights: [
      'Dual-use technology market entry and commercial strategy',
      'Defense sector relationship development and advisory',
      'Commercial and national security application positioning'
    ]
  },
  {
    id: 'semiconductors',
    name: 'Semiconductors & Advanced Manufacturing',
    description: 'Cross-border advisory across advanced packaging, supply chain resilience, industrial automation, and high-value manufacturing partnerships.',
    longDescription: 'Cross-border advisory across advanced packaging, supply chain resilience, industrial automation, and high-value manufacturing partnerships. We advise companies navigating the Korea–U.S. semiconductor and advanced manufacturing corridor, from supply chain strategy to joint venture development.',
    iconName: 'Sparkles',
    highlights: [
      'Advanced packaging and supply chain resilience advisory',
      'Industrial automation partnership development',
      'High-value manufacturing and joint venture strategy'
    ]
  }
];

export const OFFICES: Office[] = [
  {
    id: 'seoul',
    city: 'Seoul',
    country: 'South Korea',
    address: 'Level 42, Three IFC, 10 Gukjegeumyung-ro, Yeongdeungpo-gu',
    phone: '+82 (2) 6137-9000',
    email: 'seoul@navehconsulting.com',
    timezone: 'KST (UTC+9)'
  },
  {
    id: 'new-york',
    city: 'New York',
    country: 'United States',
    address: 'Suite 5400, One World Trade Center, 285 Fulton Street, Manhattan',
    phone: '+1 (212) 555-0190',
    email: 'nyc@navehconsulting.com',
    timezone: 'EST (UTC-5 / EDT UTC-4)'
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'korus-compliance-guide',
    category: 'TRADE POLICY',
    title: 'Navigating Cross-Border Regulatory Shifts in a Bidirectional Era',
    summary: 'Essential operational audits for advanced electronics manufacturing and raw materials tracing under modern bilateral framework provisions.',
    date: 'May 20, 2026',
    readTime: '6 MIN READ',
    content: 'As international policies continue to shift, corporations are facing new demands in tracking origin certificates, aligning corporate environmental metrics, and complying with bilateral clean Energy mandates. For U.S. technology imports and Korean manufacturing centers, strategic audits are the key to safeguarding multi-billion dollar trade routes. Naveh Consulting provides a 4-step framework covering: 1) Multi-tier supply visibility auditing, 2) Regulatory risk grading matrices, 3) Dual-entity compliance firewalls, and 4) Dynamic off-take insurance setup.'
  },
  {
    id: 'seoul-saas-procurement',
    category: 'LOCALIZATION',
    title: 'Critical SaaS Localization Pitfalls in South Korea\'s Corporate Ecosystem',
    summary: 'Why translation is only the first step. Understanding Kakao SSO, document storage, and Yeouido enterprise procurement cycles.',
    date: 'April 15, 2026',
    readTime: '8 MIN READ',
    content: 'Many enterprise SaaS products fail to capture the lucrative Korean corporate market due to reliance on generic localized interfaces. Winning domestic deals requires a deep understanding of local workflows. Key integrations such as local Single Sign-On, strict domestic cloud database guidelines, native tax reporting systems, and a physical-first customer relationship model are non-negotiable for enterprise procurement teams in Seoul.'
  },
  {
    id: 'delaware-flip-korea',
    category: 'MARKET ENTRY',
    title: 'The US Dual-Entity Flip Protocol for East Asian Founders',
    summary: 'Structuring safe legal, tax, and transfer frameworks for early-to-growth stages bridging Seoul research centers and Delaware US entities.',
    date: 'March 8, 2026',
    readTime: '10 MIN READ',
    content: 'For leading Korean technology startups, moving ownership to a top-level US holding entity (the "Delaware Flip") is critical to unlocking institutional venture capital. However, unstructured corporate shifts can trigger unexpected exit tax exposure and intellectual property disputes. This whitepaper walks corporate leaders through legal cross-border transfer parameters, clean IP licensing agreements, and balanced dual-entity governance models.'
  }
];
