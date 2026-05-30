/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Industry, Office, InsightArticle } from './types';

export const SERVICES: Service[] = [
  {
    id: 'market-entry',
    title: 'MARKET ENTRY',
    subtitle: 'Confidential strategic launch paths',
    description: 'Navigate new markets with confidence.',
    longDescription: 'Comprehensive entry strategies leveraging local network intelligence, rigorous regulatory analysis, and tailored deployment channels to scale successfully across the U.S. and South Korea.',
    details: [
      'Regulatory compliance & approvals (FDA, MFDS, FTC, KFTC)',
      'Direct competitor intelligence & target pricing models',
      'Corporate structure formulation (bilingual legal constructs)',
      'Product localization strategy & channel testing'
    ],
    iconName: 'DoorOpen',
    highlightStat: { value: '98%', label: 'Market Approval Rate' }
  },
  {
    id: 'cross-border-strategy',
    title: 'CROSS-BORDER STRATEGY',
    subtitle: 'Dual-geography corporate alignment',
    description: 'Strategic solutions tailored to both markets.',
    longDescription: 'High-level structural alignment between U.S. headquarters and Korean business subsidiaries, managing complex multi-market reporting, international tax considerations, and strategic goals.',
    details: [
      'M&A due diligence, local auditing, and valuation checks',
      'Dual HQ alignment protocol & optimized bilingual reporting workflows',
      'International transfer-pricing and cross-border commercial constructs',
      'Capital restructuring & dual-currency capitalization strategies'
    ],
    iconName: 'GitMerge',
    highlightStat: { value: '$4.2B', label: 'Cross-Border Volume Advised' }
  },
  {
    id: 'partnership-development',
    title: 'PARTNERSHIP DEVELOPMENT',
    subtitle: 'Elite industrial syndicate networks',
    description: 'Build meaningful, long-term partnerships.',
    longDescription: 'Facilitating high-stakes introductions and collaborative joint ventures with Korean chaebols (leading industrial conglomerates), Silicon Valley pioneers, and East Asian supply network partners.',
    details: [
      'Exclusive introductions to Conglomerate Venture Arms (CVCs)',
      'Joint Venture (JV) deal structuring, corporate mediation, and legal architectures',
      'Strategic co-research & technology-sharing framework brokering',
      'OEM/ODM supply agreements & off-take contract negotiations'
    ],
    iconName: 'Users',
    highlightStat: { value: '45+', label: 'Strategic JVs Structured' }
  },
  {
    id: 'localization',
    title: 'LOCALIZATION',
    subtitle: 'Fusing products to regional paradigms',
    description: 'Fit your business to local realities.',
    longDescription: 'Optimizing and refitting your product design, business model, price structures, marketing messaging, and human resource parameters to mesh seamlessly with native expectations.',
    details: [
      'Digital interface adaptation (Kakao ecosystem integration split / US standard stack translation)',
      'Cultural adaptation parameters & consumer sentiment surveys',
      'Localized pricing adjustments & domestic banking/merchant gateway configurations',
      'Executive talent sourcing (bilingual C-suite placements)'
    ],
    iconName: 'Globe',
    highlightStat: { value: '100%', label: 'Cultural Congruency Score' }
  },
  {
    id: 'executive-advisory',
    title: 'EXECUTIVE ADVISORY',
    subtitle: 'High-level boardroom counsel',
    description: 'Insight-driven guidance for key decisions.',
    longDescription: 'Ongoing retentive boardroom counsel for Chief Executives, founders, and investment groups navigating complex trade environments, regulatory risks, and geo-economic frameworks.',
    details: [
      'Geopolitical & trade policy risk assessment checks (CHIPS Act, Inflation Reduction Act)',
      'Bespoke cross-border negotiation coaching and mediation retainers',
      'Currency & treasury exposure optimization advice',
      'Foreign Direct Investment (FDI) reporting compliance & filings support'
    ],
    iconName: 'Compass',
    highlightStat: { value: '15+', label: 'Continuous Retainer Partners' }
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'tech-ai',
    name: 'Technology & AI Stack',
    description: 'Bridging Silicon Valley neural network frameworks and cloud intelligence with East Asia’s high-precision engineering.',
    longDescription: 'We advise deep-tech startups and enterprise SaaS founders on establishing commercial frameworks in Seoul and Silicon Valley, optimizing intellectual property assignment, and localizing enterprise procurement cycles with major technology groups.',
    iconName: 'Cpu',
    highlights: [
      'IP strategy & regulatory sandboxes',
      'Chaebol-partnered commercial integration pilots',
      'Bilingual software product localization parameters'
    ]
  },
  {
    id: 'semiconductors-mfg',
    name: 'Advanced Packaging & Supply Chain',
    description: 'Steering supply chain architecture through the complex landscape of semiconductor incentives, bilateral policies, and sub-tier sourcing.',
    longDescription: 'In an era of semiconductor policy changes, we support equipment makers, raw material providers, and advanced packaging firms in establishing durable cross-border operations and meeting multi-national compliance hurdles.',
    iconName: 'Layers',
    highlights: [
      'Bilateral subsidy alignment assessment',
      'Supply chain localization and strategic buffer hub builds',
      'Joint ventures with world-class foundry partners'
    ]
  },
  {
    id: 'energy-cleantech',
    name: 'Energy, Infrastructure & Battery Storage',
    description: 'Navigating hydrogen fuel infrastructure, next-generation battery cell chemistry, and clean-power grid integration protocols.',
    longDescription: 'Collaborating with battery material suppliers, EV charging pioneers, and large-scale utilities to establish reliable manufacturing projects, transfer advanced research, and leverage multi-country climate funding structures.',
    iconName: 'Zap',
    highlights: [
      'EV/Battery supply pipeline certification',
      'Bilateral climate fund capital access strategies',
      'Bespoke regulatory approval operations'
    ]
  },
  {
    id: 'consumer-lifestyle',
    name: 'Prestige Consumer & Retailing',
    description: 'Transforming premium lifestyle and wellness brands into cultural movements within Seoul’s dynamic retail ecosystems.',
    longDescription: 'We offer strategic go-to-market methodologies for premium brands seeking direct-to-consumer and retail department store channels in key global flagship cities, including Seoul (Gagnam/Seongsu), New York, and Los Angeles.',
    iconName: 'Sparkles',
    highlights: [
      'E-commerce & local shipping hub setup (Coupang, Kakao Shopping)',
      'Flagship location selection & partnership deals',
      'Multi-market digital influencer synchronization'
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
    title: 'Critical SaaS Localization Pitfalls in South Korea’s Corporate Ecosystem',
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
