/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  DoorOpen,
  GitMerge,
  Users,
  Globe,
  Compass,
  Cpu,
  Layers,
  Zap,
  Sparkles,
  ArrowRight,
  X,
  ChevronRight,
  Check,
  ArrowUpRight,
} from 'lucide-react';

import { SERVICES, INDUSTRIES, INSIGHTS } from './data';
import { TRANSLATIONS } from './translations';
import { Service, Industry } from './types';

// Anchor IDs for scrolling
const SECTION_IDS = {
  about: 'advantage-section',
  services: 'services-section',
  industries: 'industries-section',
  insights: 'insights-section',
  contact: 'contact-section',
  advisoryProcess: 'advisory-process-section',
};

const ADVISORY_STAGES = [
  {
    num: '01',
    title: 'CONFIDENTIAL INQUIRY',
    description: 'We begin with a private review of the company, strategic objective, sector focus, target market, and relevant Korea–U.S. opportunity.'
  },
  {
    num: '02',
    title: 'STRATEGIC FIT ASSESSMENT',
    description: 'Naveh evaluates whether the opportunity is suitable for Korean corporate, investor, or industrial engagement based on sector relevance, timing, credibility, and commercial logic.'
  },
  {
    num: '03',
    title: 'MANDATE & ENGAGEMENT SCOPE',
    description: 'Where there is mutual fit, Naveh defines the engagement scope, target counterparties, advisory priorities, timeline, economics, and confidentiality framework.'
  },
  {
    num: '04',
    title: 'MARKET INTELLIGENCE & POSITIONING',
    description: 'We develop the strategic narrative, sector thesis, counterparty rationale, and briefing materials required for senior-level Korean or U.S. discussions.'
  },
  {
    num: '05',
    title: 'COUNTERPARTY MAPPING & ORIGINATION',
    description: 'Naveh identifies, qualifies, and prioritizes relevant investors, corporate partners, conglomerates, strategic buyers, or operating partners.'
  },
  {
    num: '06',
    title: 'EXECUTIVE ACCESS & MEETING STRATEGY',
    description: 'We prepare clients for high-level conversations, including meeting objectives, stakeholder analysis, cultural context, negotiation posture, and follow-up strategy.'
  },
  {
    num: '07',
    title: 'STRUCTURING & EXECUTION SUPPORT',
    description: 'Naveh supports the development of commercial partnerships, capital pathways, SPV structures, strategic investment discussions, market-entry plans, or transaction frameworks.'
  },
  {
    num: '08',
    title: 'RELATIONSHIP DEVELOPMENT',
    description: 'After initial engagement, Naveh helps maintain momentum through follow-up materials, negotiation support, relationship management, and next-step execution planning.'
  }
];

const ADVANTAGE_PILLARS = [
  {
    label: 'KOREA–U.S. FOCUS',
    description: 'Dedicated advisory coverage across the Korean and American innovation markets.'
  },
  {
    label: 'SENIOR-LEVEL RELATIONSHIPS',
    description: 'Access-driven strategy for founders, investors, conglomerates, and corporate development teams.'
  },
  {
    label: 'TARGET SECTORS',
    description: 'AI infrastructure, mobility, EV, defense, dual-use technology, and strategic capital formation.'
  },
  {
    label: 'EXECUTION DISCIPLINE',
    description: 'From market mapping and briefing materials to introductions, transaction strategy, and partnership development.'
  }
];

const PRIMARY_INTEREST_OPTIONS = [
  'Korea–U.S. Market Entry',
  'Strategic Partnership Origination',
  'Capital Formation / SPV Strategy',
  'Executive Access & Meeting Strategy',
  'Sector Intelligence / Deal Advisory',
  'Other',
];

const SECTOR_FOCUS_OPTIONS = [
  'AI Infrastructure',
  'Mobility / Automotive / EV',
  'Defense & Dual-Use',
  'Enterprise Technology',
  'Capital Markets / Venture',
  'Semiconductors / Advanced Manufacturing',
  'Other',
];

export default function App() {
  const [lang, setLang] = useState<'en' | 'ko'>('en');
  const t = TRANSLATIONS[lang];

  // Selected details drawer states
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  // Contact form states
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPrimaryInterest, setFormPrimaryInterest] = useState(PRIMARY_INTEREST_OPTIONS[0]);
  const [formSectorFocus, setFormSectorFocus] = useState(SECTOR_FOCUS_OPTIONS[0]);
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Floating navbar style on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolls
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Contact form submission
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormName('');
    setFormCompany('');
    setFormTitle('');
    setFormEmail('');
    setFormPrimaryInterest(PRIMARY_INTEREST_OPTIONS[0]);
    setFormSectorFocus(SECTOR_FOCUS_OPTIONS[0]);
    setFormMessage('');
    setIsSuccess(false);
  };

  // Render icon based on metadata string
  const renderIcon = (name: string) => {
    const classes = 'w-12 h-12 text-brand-primary stroke-[1] fill-none';
    switch (name) {
      case 'DoorOpen': return <DoorOpen className={classes} />;
      case 'GitMerge': return <GitMerge className={classes} />;
      case 'Users': return <Users className={classes} />;
      case 'Globe': return <Globe className={classes} />;
      case 'Compass': return <Compass className={classes} />;
      case 'Cpu': return <Cpu className={classes} />;
      case 'Layers': return <Layers className={classes} />;
      case 'Zap': return <Zap className={classes} />;
      case 'Sparkles': return <Sparkles className={classes} />;
      default: return <Compass className={classes} />;
    }
  };

  return (
    <div id="application-root" className="min-h-screen bg-brand-surface font-sans text-brand-parchment relative selection:bg-brand-primary/30 selection:text-brand-primary overflow-x-hidden">

      {/* HEADER NAV */}
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-brand-surface/95 backdrop-blur-md border-brand-outline-variant/30 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div
            id="nav-brand-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center"
          >
            <img
              src="/logo.png"
              alt="Naveh Partners"
              className="h-36 w-auto object-contain"
            />
          </div>

          {/* Desktop Links */}
          <nav id="desktop-links" className="hidden md:flex items-center gap-10 text-[13px] font-semibold tracking-[0.14em] uppercase text-brand-accent">
            <button onClick={() => scrollTo(SECTION_IDS.about)} className="hover:text-brand-primary transition-colors cursor-pointer">
              {t.navAbout}
            </button>
            <button onClick={() => scrollTo(SECTION_IDS.services)} className="hover:text-brand-primary transition-colors cursor-pointer">
              {t.navServices}
            </button>
            <button onClick={() => scrollTo(SECTION_IDS.industries)} className="hover:text-brand-primary transition-colors cursor-pointer">
              {t.navIndustries}
            </button>
            <button onClick={() => scrollTo(SECTION_IDS.insights)} className="hover:text-brand-primary transition-colors cursor-pointer">
              {t.navInsights}
            </button>
            <button onClick={() => scrollTo(SECTION_IDS.contact)} className="hover:text-brand-primary transition-colors cursor-pointer">
              {t.navContact}
            </button>
          </nav>

          {/* Language Selector + Top-Right CTA */}
          <div id="language-and-cta" className="flex items-center gap-6">
            <div className="relative inline-flex items-center border border-brand-outline-variant/60 bg-brand-dim/50 p-1">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-[11px] font-semibold tracking-wider transition-all duration-300 ${
                  lang === 'en' ? 'bg-brand-primary text-brand-on-primary' : 'text-brand-accent hover:text-brand-parchment'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ko')}
                className={`px-3 py-1 text-[11px] font-semibold tracking-wider transition-all duration-300 ${
                  lang === 'ko' ? 'bg-brand-primary text-brand-on-primary' : 'text-brand-accent hover:text-brand-parchment'
                }`}
              >
                KO
              </button>
            </div>

            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="hidden lg:inline-flex border border-brand-primary/40 px-6 py-2.5 text-[12px] font-semibold tracking-[0.14em] text-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:border-brand-primary active:scale-[0.98]"
            >
              REQUEST STRATEGIC BRIEFING
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero-banner-section"
        className="relative min-h-screen flex items-center justify-center pt-24 shrink-0 overflow-hidden"
      >
        {/* Background Image — reduced overlay for more visible skyline */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.48 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            src="/background.png"
            alt="U.S. Korea Bridge Concept"
            className="w-full h-full object-cover brightness-110 contrast-110"
            referrerPolicy="no-referrer"
          />
          {/* Lighter overlay to keep luxury dark mood while improving visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/20 via-brand-surface/50 to-brand-surface"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-surface to-transparent"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-left flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-parchment leading-[1.12] tracking-normal mb-8 max-w-2xl"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-brand-accent/90 max-w-lg leading-relaxed mb-10 font-sans font-light"
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Primary CTA — solid filled, more prominent */}
            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="group inline-flex items-center gap-2 bg-brand-primary text-brand-on-primary px-7 py-3.5 text-[13px] font-bold tracking-[0.18em] hover:bg-brand-parchment hover:text-brand-surface transition-all duration-300 active:scale-[0.98]"
            >
              {t.learnMoreButton}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA — outlined / understated */}
            <button
              onClick={() => scrollTo(SECTION_IDS.industries)}
              className="group inline-flex items-center gap-2 border border-brand-parchment/30 text-brand-accent px-7 py-3.5 text-[13px] font-semibold tracking-[0.18em] hover:border-brand-primary/60 hover:text-brand-primary transition-all duration-300"
            >
              {t.heroSecondaryButton}
            </button>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC SERVICES SECTION */}
      <section
        id={SECTION_IDS.services}
        className="py-24 sm:py-32 relative border-t border-brand-outline-variant/20 bg-brand-dim"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section heading */}
          <div className="flex items-center justify-between mb-8">
            <div className="w-full flex items-center">
              <div className="h-[1px] flex-grow bg-brand-outline-variant/30"></div>
              <span className="mx-6 text-[11px] font-semibold tracking-[0.25em] text-brand-outline uppercase block text-center whitespace-nowrap">
                {t.whatWeDoLabel}
              </span>
              <div className="h-[1px] flex-grow bg-brand-outline-variant/30"></div>
            </div>
          </div>

          {/* Intro copy */}
          <p className="text-center text-sm font-light text-brand-accent/80 max-w-2xl mx-auto leading-relaxed mb-16">
            {t.servicesIntro}
          </p>

          {/* Services Grid */}
          <div id="services-grid" className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer py-8 px-4 flex flex-col items-center text-center"
              >
                <div className="mb-5">{renderIcon(service.iconName)}</div>
                <h3 className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-brand-parchment group-hover:text-brand-primary transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-accent/70 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <div className="h-[1px] w-24 bg-brand-outline-variant/40 self-center mr-6"></div>
            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.18em] text-brand-accent hover:text-brand-primary transition-colors duration-300"
            >
              {t.viewAllServicesButton} <ArrowRight className="w-4 h-4" />
            </button>
            <div className="h-[1px] w-24 bg-brand-outline-variant/40 self-center ml-6"></div>
          </div>
        </div>
      </section>

      {/* ADVISORY PROCESS SECTION */}
      <section
        id={SECTION_IDS.advisoryProcess}
        className="py-24 sm:py-32 relative bg-brand-surface border-y border-brand-outline-variant/20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase block mb-4">
              ADVISORY PROCESS
            </span>
            <h2 className="font-serif text-3xl md:text-[42px] tracking-tight mb-5 text-brand-parchment leading-tight">
              A disciplined path from strategic interest to cross-border execution.
            </h2>
            <p className="text-base font-light text-brand-accent max-w-2xl mx-auto leading-relaxed">
              Naveh helps clients move from initial market opportunity to qualified counterparties, executive-level conversations, and structured commercial or capital outcomes.
            </p>
          </div>

          {/* Timeline — 2 rows of 4 on desktop, vertical on mobile */}
          <div className="space-y-12 md:space-y-16">
            {[ADVISORY_STAGES.slice(0, 4), ADVISORY_STAGES.slice(4, 8)].map((row, rowIndex) => (
              <div key={rowIndex} className="relative">
                {/* Connecting line — desktop only */}
                <div className="hidden md:block absolute top-4 left-0 right-0 h-[1px] bg-brand-outline-variant/25 z-0" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                  {row.map((stage, idx) => (
                    <motion.div
                      key={stage.num}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="relative flex flex-col md:items-center md:text-center"
                    >
                      {/* Stage number — gold, above the connecting line */}
                      <div className="relative z-10 inline-flex items-center justify-center w-8 h-8 bg-brand-surface border border-brand-primary mb-4 shrink-0">
                        <span className="text-[11px] font-bold text-brand-primary font-mono">
                          {stage.num}
                        </span>
                      </div>
                      <h4 className="text-[10px] font-bold tracking-[0.18em] text-brand-parchment uppercase mb-2">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-brand-accent/75 font-light leading-relaxed">
                        {stage.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="inline-flex items-center gap-2 border border-brand-primary/50 px-8 py-3 text-[12px] font-bold tracking-[0.18em] text-brand-primary hover:bg-brand-primary/10 transition-all duration-300"
            >
              REQUEST STRATEGIC BRIEFING <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* THE NAVEH ADVANTAGE SECTION */}
      <section
        id={SECTION_IDS.about}
        className="py-24 sm:py-32 relative bg-brand-surface"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

            {/* Visual Column */}
            <div className="lg:col-span-5 relative group overflow-hidden min-h-[400px] lg:min-h-[580px]">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-brand-primary z-10 opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Sharp architectural glass facade"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.75] contrast-[1.12] saturate-[0.8]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-surface/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[12px] font-semibold tracking-[0.22em] text-brand-primary uppercase block mb-4">
                {t.strategicAdvantageLabel}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-8 tracking-wide text-brand-parchment">
                {t.advantageTitle}
              </h2>

              <p className="text-sm font-light text-brand-accent/85 leading-relaxed mb-4">
                {t.advantageBody}
              </p>

              <p className="text-sm font-light text-brand-accent/85 leading-relaxed mb-10">
                {t.advantageSupportingPara}
              </p>

              <div className="h-[1px] bg-brand-outline-variant/35 w-full mb-10"></div>

              {/* Four Credibility Pillars — 2×2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ADVANTAGE_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="border-l border-brand-primary/40 pl-5">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-brand-primary uppercase mb-2">
                      {pillar.label}
                    </h4>
                    <p className="text-xs font-light text-brand-accent/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC SECTORS SECTION */}
      <section
        id={SECTION_IDS.industries}
        className="py-24 sm:py-32 relative bg-brand-dim border-t border-brand-outline-variant/25"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase block mb-4">
              STRATEGIC SECTORS
            </span>
            <h2 className="font-serif text-3xl md:text-[42px] tracking-tight mb-5 text-brand-parchment leading-tight">
              Where Korean Industrial Demand Meets U.S. Innovation
            </h2>
            <p className="text-sm font-light text-brand-accent/80 max-w-2xl mx-auto leading-relaxed mb-6">
              Focused coverage across sectors where Korean corporate strategy, U.S. growth-stage technology, and cross-border capital formation converge.
            </p>
            <div className="w-20 h-[2px] bg-brand-primary mx-auto"></div>
          </div>

          <div id="industries-showcase" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className="bg-brand-card p-8 border border-brand-outline-variant/25 hover:border-brand-primary/50 cursor-pointer group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-bold tracking-widest text-brand-primary font-mono uppercase">
                      {ind.id === 'ai-infrastructure' ? 'AI INFRASTRUCTURE' :
                       ind.id === 'mobility-ev' ? 'MOBILITY / EV' :
                       ind.id === 'defense-dual-use' ? 'DEFENSE / DUAL-USE' :
                       'SEMICONDUCTORS'}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-brand-outline-variant group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h3 className="font-serif text-[22px] font-medium tracking-tight text-brand-parchment mb-4 group-hover:text-brand-primary transition-colors duration-300 leading-snug">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-brand-accent/85 leading-relaxed font-light line-clamp-4">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-outline-variant/25 text-[11px] font-bold tracking-widest text-brand-outline group-hover:text-brand-primary uppercase transition-colors">
                  {lang === 'ko' ? '섹터 탐색 →' : 'EXPLORE SECTOR →'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE / INSIGHTS SECTION */}
      <section
        id={SECTION_IDS.insights}
        className="py-24 sm:py-32 relative bg-brand-surface border-t border-brand-outline-variant/20"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.20em] text-brand-primary uppercase block mb-3">
              SELECT INTELLIGENCE BRIEFINGS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-parchment tracking-tight">
              {lang === 'ko' ? '전략 분석 리포트' : 'Publications & Briefings'}
            </h2>
          </div>

          <div className="space-y-12">
            {INSIGHTS.map((article) => (
              <div
                key={article.id}
                className="group border border-brand-outline-variant/25 hover:border-brand-primary/45 p-8 bg-brand-card/30 hover:bg-brand-card/60 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold tracking-wider text-brand-primary bg-brand-card px-2.5 py-1 border border-brand-outline-variant/30">
                      {article.category}
                    </span>
                    <span className="text-[10px] tracking-widest text-brand-outline font-mono">
                      {article.date}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-widest text-brand-outline font-semibold">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-brand-parchment leading-tight tracking-wide mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-xs text-brand-accent/80 font-light mb-6 leading-relaxed max-w-4xl">
                  {article.summary}
                </p>

                <div className="pt-4 border-t border-brand-outline-variant/20 flex justify-between items-center">
                  <button
                    onClick={() => alert(`${article.title}\n\n${article.content}`)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-brand-primary hover:underline uppercase"
                  >
                    {t.readMoreButton} <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] tracking-widest text-brand-outline invisible group-hover:visible font-semibold uppercase">
                    NAVEH INTELLIGENCE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENTIAL INQUIRY FORM SECTION */}
      <section
        id={SECTION_IDS.contact}
        className="py-24 sm:py-32 relative bg-brand-surface border-t border-brand-outline-variant/20"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary uppercase block mb-4">
              {t.contactEyebrow}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-parchment tracking-tight mb-5">
              {t.contactTitle}
            </h2>
            <p className="text-base font-light text-brand-accent leading-relaxed max-w-xl mx-auto mb-3">
              {t.contactIntro}
            </p>
            <p className="text-sm font-light text-brand-accent/70 leading-relaxed max-w-xl mx-auto">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="bg-brand-card p-10 border border-brand-outline-variant/20 relative">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 border border-brand-primary text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl text-brand-parchment mb-4 uppercase tracking-wider">
                  {t.contactSuccessTitle}
                </h3>
                <p className="text-sm font-light text-brand-accent leading-relaxed max-w-md mx-auto mb-8">
                  {t.contactSuccessMessage}
                </p>
                <button
                  onClick={handleResetForm}
                  className="border border-brand-outline-variant px-6 py-2 text-[10px] font-bold tracking-[0.2em] text-brand-parchment hover:border-brand-primary hover:text-brand-primary transition-colors uppercase rounded-none bg-transparent"
                >
                  SUBMIT NEW INQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-10">

                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. James Park"
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none transition-colors"
                    />
                  </div>
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactCompanyLabel}
                    </label>
                    <input
                      type="text"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="Company / Organization"
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Title + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactTitleLabel}
                    </label>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="e.g. Chief Executive Officer"
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none transition-colors"
                    />
                  </div>
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactEmailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Primary Area of Interest + Sector Focus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactPrimaryInterestLabel}
                    </label>
                    <select
                      value={formPrimaryInterest}
                      onChange={(e) => setFormPrimaryInterest(e.target.value)}
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none rounded-none font-light transition-colors"
                    >
                      {PRIMARY_INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-brand-card">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactSectorFocusLabel}
                    </label>
                    <select
                      value={formSectorFocus}
                      onChange={(e) => setFormSectorFocus(e.target.value)}
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none rounded-none font-light transition-colors"
                    >
                      {SECTOR_FOCUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-brand-card">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Brief Description of Objectives */}
                <div className="group flex flex-col">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                    {t.contactObjectivesLabel}
                  </label>
                  <textarea
                    rows={5}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Please provide a short overview of your company, target market, strategic objective, timeline, and any relevant counterparties or transaction context."
                    className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none resize-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-on-primary transition-all duration-300 py-5 text-sm font-bold tracking-[0.2em] uppercase rounded-none disabled:opacity-50 inline-flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      {t.contactSubmitButton} <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Disclaimer */}
                <p className="text-[10px] font-light text-brand-outline/70 leading-relaxed text-center pt-2">
                  {t.contactDisclaimer}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="application-footer"
        className="pt-20 pb-12 bg-brand-dim border-t border-brand-outline-variant/35 text-[12px]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl font-bold tracking-widest text-brand-parchment">
                naveh
              </span>
              <div className="h-4 w-[1px] bg-brand-outline-variant"></div>
              <span className="text-[11px] tracking-wider text-brand-outline/80">
                © 2026 Naveh Partners. All rights reserved.
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] text-brand-outline font-semibold tracking-wider uppercase">
              <button
                onClick={() => alert('Naveh Executive NDA & Confidential Privacy Commitment is enacted.')}
                className="hover:text-brand-primary transition-colors cursor-pointer"
              >
                {t.privacyPolicy}
              </button>
              <button
                onClick={() => alert('Naveh Strategic Retainer Terms govern all initial advisories.')}
                className="hover:text-brand-primary transition-colors cursor-pointer"
              >
                {t.termsOfService}
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                {t.linkedIn}
              </a>
            </div>
          </div>

          <div className="h-[1px] bg-brand-outline-variant/20 w-full mb-8"></div>

          <div className="text-center text-[10px] tracking-widest text-brand-outline-variant uppercase">
            Korea–U.S. Strategic Advisory. Confidential by design.
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* DRAWERS & DIALOG OVERLAYS */}
      {/* ========================================================= */}
      <AnimatePresence>
        {/* SERVICES CAPABILITIES DETAILS OVERLAY */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-dim/80 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-xl bg-brand-card p-8 md:p-12 border-l border-brand-outline-variant overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-widest text-brand-primary bg-brand-surface px-2.5 py-1 border border-brand-outline-variant/30 uppercase">
                      CAPABILITY
                    </span>
                    <span className="text-xs font-mono text-brand-outline">DETAILS</span>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1 border border-brand-outline/20 hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">{renderIcon(selectedService.iconName)}</div>

                <h3 className="font-serif text-3xl text-brand-parchment leading-tight tracking-wide mb-3 uppercase">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-brand-primary font-semibold tracking-wider uppercase mb-6">
                  {selectedService.subtitle}
                </p>

                <p className="text-sm font-light text-brand-accent/90 leading-relaxed mb-8">
                  {selectedService.longDescription}
                </p>

                <h4 className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant uppercase mb-4">
                  ADVISORY SCOPE:
                </h4>
                <ul className="space-y-4">
                  {selectedService.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-xs text-brand-accent font-light leading-relaxed">
                      <div className="w-5 h-5 border border-brand-primary text-brand-primary flex items-center justify-center font-mono text-[10px] shrink-0 font-bold">
                        {dIdx + 1}
                      </div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 pt-6 border-t border-brand-outline-variant/30 flex items-center justify-end">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    scrollTo(SECTION_IDS.contact);
                  }}
                  className="bg-brand-primary text-brand-on-primary hover:bg-brand-parchment hover:text-brand-surface py-3 px-6 text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
                >
                  REQUEST STRATEGIC BRIEFING
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* SECTORS DETAILS OVERLAY */}
        {selectedIndustry && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="absolute inset-0 bg-brand-dim/80 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-xl bg-brand-card p-8 md:p-12 border-l border-brand-outline-variant overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-widest text-brand-primary bg-brand-surface px-2.5 py-1 border border-brand-outline-variant/30 uppercase">
                      STRATEGIC SECTOR
                    </span>
                    <span className="text-xs font-mono text-brand-outline">FOCUS</span>
                  </div>
                  <button
                    onClick={() => setSelectedIndustry(null)}
                    className="p-1 border border-brand-outline/20 hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">{renderIcon(selectedIndustry.iconName)}</div>

                <h3 className="font-serif text-3xl text-brand-parchment leading-tight tracking-wide mb-6 uppercase">
                  {selectedIndustry.name}
                </h3>

                <p className="text-sm font-light text-brand-accent/90 leading-relaxed mb-8">
                  {selectedIndustry.longDescription}
                </p>

                <h4 className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant uppercase mb-4">
                  ADVISORY COVERAGE:
                </h4>
                <ul className="space-y-4">
                  {selectedIndustry.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-xs text-brand-accent font-light leading-relaxed">
                      <div className="w-2.5 h-2.5 border border-brand-primary transform rotate-45 shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 pt-6 border-t border-brand-outline-variant/30">
                <button
                  onClick={() => {
                    setSelectedIndustry(null);
                    scrollTo(SECTION_IDS.contact);
                  }}
                  className="w-full bg-brand-primary text-brand-on-primary hover:bg-brand-parchment hover:text-brand-surface py-3 text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
                >
                  REQUEST STRATEGIC BRIEFING
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
