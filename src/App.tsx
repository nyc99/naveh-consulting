/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
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
  Clock,
  ArrowRight,
  X,
  ChevronRight,
  FileText,
  Check,
  Building2,
  Phone,
  Mail,
  ArrowUpRight,
  Sliders
} from 'lucide-react';

import { SERVICES, INDUSTRIES, OFFICES, INSIGHTS } from './data';
import { TRANSLATIONS, generateBlueprint } from './translations';
import { Service, Industry } from './types';

// Anchor IDs for scrolling
const SECTION_IDS = {
  about: 'advantage-section',
  services: 'services-section',
  industries: 'industries-section',
  insights: 'insights-section',
  contact: 'contact-section',
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'ko'>('en');
  const t = TRANSLATIONS[lang];

  // Selected details drawer states
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  // Roadmap Assessment state
  const [assessmentOrigin, setAssessmentOrigin] = useState<'us' | 'kr'>('us');
  const [assessmentIndustry, setAssessmentIndustry] = useState<string>('tech-ai');
  const [assessmentTimeline, setAssessmentTimeline] = useState<string>('weeks');
  const [assessmentId, setAssessmentId] = useState<number>(0); // Trigger re-render of roadmap animations
  const [showAssessmentResult, setShowAssessmentResult] = useState<boolean>(false);
  const [blueprintResult, setBlueprintResult] = useState<ReturnType<typeof generateBlueprint> | null>(null);

  // Contact form submission states
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formInterest, setFormInterest] = useState<'us-to-korea' | 'korea-to-us' | 'other'>('us-to-korea');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Time zone live updating states
  const [seoulTime, setSeoulTime] = useState('');
  const [nyTime, setNYTime] = useState('');

  // Floating navbar style on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update clocks every second
  useEffect(() => {
    const updateClocks = () => {
      const getSeoul = () => {
        return new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'ko-KR', {
          timeZone: 'Asia/Seoul',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
      };
      const getNY = () => {
        return new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'ko-KR', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
      };
      setSeoulTime(getSeoul());
      setNYTime(getNY());
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  // Handle smooth scrolls
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Run dynamic strategy assessment simulation
  const handleGenerateBlueprint = (e: React.FormEvent) => {
    e.preventDefault();
    const res = generateBlueprint(assessmentOrigin, assessmentIndustry, lang);
    setBlueprintResult(res);
    setShowAssessmentResult(true);
    setAssessmentId((prev) => prev + 1);
  };

  // Run contact form submission demo
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after a period or let user expand
    }, 1200);
  };

  const handleResetForm = () => {
    setFormName('');
    setFormCompany('');
    setFormEmail('');
    setFormInterest('us-to-korea');
    setFormMessage('');
    setIsSuccess(false);
  };

  // Render proper icon based on metadata string - line art style like reference
  const renderIcon = (name: string) => {
    const classes = "w-12 h-12 text-brand-primary stroke-[1] fill-none";
    switch (name) {
      case 'DoorOpen':
        return <DoorOpen className={classes} />;
      case 'GitMerge':
        return <GitMerge className={classes} />;
      case 'Users':
        return <Users className={classes} />;
      case 'Globe':
        return <Globe className={classes} />;
      case 'Compass':
        return <Compass className={classes} />;
      case 'Cpu':
        return <Cpu className={classes} />;
      case 'Layers':
        return <Layers className={classes} />;
      case 'Zap':
        return <Zap className={classes} />;
      case 'Sparkles':
        return <Sparkles className={classes} />;
      default:
        return <Compass className={classes} />;
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
            <button
              onClick={() => scrollTo(SECTION_IDS.about)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => scrollTo(SECTION_IDS.services)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t.navServices}
            </button>
            <button
              onClick={() => scrollTo(SECTION_IDS.industries)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t.navIndustries}
            </button>
            <button
              onClick={() => scrollTo(SECTION_IDS.insights)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t.navInsights}
            </button>
            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              {t.navContact}
            </button>
          </nav>

          {/* Language Selector Dropdown */}
          <div id="language-and-cta" className="flex items-center gap-6">
            <div className="relative inline-flex items-center border border-brand-outline-variant/60 bg-brand-dim/50 p-1">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-[11px] font-semibold tracking-wider transition-all duration-300 ${
                  lang === 'en'
                    ? 'bg-brand-primary text-brand-on-primary'
                    : 'text-brand-accent hover:text-brand-parchment'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ko')}
                className={`px-3 py-1 text-[11px] font-semibold tracking-wider transition-all duration-300 ${
                  lang === 'ko'
                    ? 'bg-brand-primary text-brand-on-primary'
                    : 'text-brand-accent hover:text-brand-parchment'
                }`}
              >
                KO
              </button>
            </div>

            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="hidden lg:inline-flex border border-brand-primary/40 px-6 py-2.5 text-[12px] font-semibold tracking-[0.14em] text-brand-primary hover:bg-brand-primary/10 transition-all duration-300 hover:border-brand-primary active:scale-[0.98]"
            >
              {t.contactSubmitButton}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero-banner-section"
        className="relative min-h-screen flex items-center justify-center pt-24 shrink-0 overflow-hidden"
      >
        {/* Background Image with Deep Midnight Grayscale Blend */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.32 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            src="/background.png"
            alt="U.S. Korea Bridge Concept"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Edge and Bottom gradients for elite atmospheric integration */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/30 via-brand-surface/65 to-brand-surface"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-surface to-transparent"></div>
        </div>

        {/* Content Box - Left aligned like reference */}
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
          >
            <button
              onClick={() => scrollTo(SECTION_IDS.about)}
              className="group inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] text-brand-primary hover:text-brand-parchment transition-colors duration-300"
            >
              {t.learnMoreButton}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id={SECTION_IDS.services}
        className="py-24 sm:py-32 relative border-t border-brand-outline-variant/20 bg-brand-dim"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Heading with structural label lines */}
          <div className="flex items-center justify-between mb-16">
            <div className="w-full flex items-center">
              <div className="h-[1px] flex-grow bg-brand-outline-variant/30"></div>
              <span className="mx-6 text-[11px] font-semibold tracking-[0.25em] text-brand-outline uppercase block text-center whitespace-nowrap">
                {t.whatWeDoLabel}
              </span>
              <div className="h-[1px] flex-grow bg-brand-outline-variant/30"></div>
            </div>
          </div>

          {/* Simple Grid - clean like reference */}
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
                <div className="mb-5">
                  {renderIcon(service.iconName)}
                </div>
                <h3 className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-brand-parchment group-hover:text-brand-primary transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-accent/70 font-light leading-relaxed">
                  {lang === 'ko' ? service.description : service.description}
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

      {/* INTERACTIVE BLUEPRINT CALCULATOR */}
      <section
        id="interactive-blueprint-calculator"
        className="py-24 relative bg-brand-surface border-y border-brand-outline-variant/20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase block mb-4">
              METHODOLOGICAL TESTING ENGINE
            </span>
            <h2 className="font-serif text-3xl md:text-[42px] tracking-tight mb-5 text-brand-parchment leading-tight">
              {t.assessmentTitle}
            </h2>
            <p className="text-base font-light text-brand-accent max-w-2xl mx-auto leading-relaxed">
              {t.assessmentSubtitle}
            </p>
          </div>

          <form onSubmit={handleGenerateBlueprint} className="bg-brand-card p-10 border border-brand-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {/* Origin Selection */}
              <div>
                <label className="block text-[12px] font-semibold tracking-wider text-brand-primary mb-5 uppercase">
                  {t.assessmentOriginLabel}
                </label>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer group text-sm text-brand-accent">
                    <input
                      type="radio"
                      name="origin"
                      checked={assessmentOrigin === 'us'}
                      onChange={() => setAssessmentOrigin('us')}
                      className="accent-brand-primary rounded-none border border-brand-outline w-4 h-4"
                    />
                    <span className={assessmentOrigin === 'us' ? 'text-brand-primary font-medium' : 'group-hover:text-brand-parchment'} >
                      {t.assessmentOriginUS}
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group text-sm text-brand-accent">
                    <input
                      type="radio"
                      name="origin"
                      checked={assessmentOrigin === 'kr'}
                      onChange={() => setAssessmentOrigin('kr')}
                      className="accent-brand-primary rounded-none border border-brand-outline w-4 h-4"
                    />
                    <span className={assessmentOrigin === 'kr' ? 'text-brand-primary font-medium' : 'group-hover:text-brand-parchment'} >
                      {t.assessmentOriginKR}
                    </span>
                  </label>
                </div>
              </div>

              {/* Targets Industry Selection */}
              <div>
                <label className="block text-[12px] font-semibold tracking-wider text-brand-primary mb-5 uppercase">
                  {t.assessmentIndustryLabel}
                </label>
                <select
                  value={assessmentIndustry}
                  onChange={(e) => setAssessmentIndustry(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-outline-variant/60 text-sm px-4 py-3 font-light text-brand-parchment focus:border-brand-primary focus:outline-none rounded-none"
                >
                  <option value="tech-ai">{t.assessmentIndustryTech}</option>
                  <option value="semiconductors-mfg">{t.assessmentIndustryMfg}</option>
                  <option value="energy-cleantech">{t.assessmentIndustryEnergy}</option>
                  <option value="consumer-lifestyle">{t.assessmentIndustryConsumer}</option>
                </select>
              </div>

              {/* Timeline Selection */}
              <div>
                <label className="block text-[12px] font-semibold tracking-wider text-brand-primary mb-5 uppercase">
                  {t.assessmentTimelineLabel}
                </label>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-3 cursor-pointer group text-sm text-brand-accent">
                    <input
                      type="radio"
                      name="timeline"
                      checked={assessmentTimeline === 'weeks'}
                      onChange={() => setAssessmentTimeline('weeks')}
                      className="accent-brand-primary w-4 h-4"
                    />
                    <span>{t.assessmentTimelineWeeks}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group text-sm text-brand-accent">
                    <input
                      type="radio"
                      name="timeline"
                      checked={assessmentTimeline === 'months'}
                      onChange={() => setAssessmentTimeline('months')}
                      className="accent-brand-primary w-4 h-4"
                    />
                    <span>{t.assessmentTimelineMonths}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group text-sm text-brand-accent">
                    <input
                      type="radio"
                      name="timeline"
                      checked={assessmentTimeline === 'planning'}
                      onChange={() => setAssessmentTimeline('planning')}
                      className="accent-brand-primary w-4 h-4"
                    />
                    <span>{t.assessmentTimelineImmediate}</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary text-brand-on-primary hover:bg-brand-parchment hover:text-brand-surface transition-colors duration-300 py-4 text-sm font-bold tracking-[0.18em] uppercase rounded-none"
            >
              {t.assessmentGenerateButton}
            </button>
          </form>

          {/* RESULTS AREA WITH DYNAMIC FADE */}
          <AnimatePresence mode="wait">
            {showAssessmentResult && blueprintResult && (
              <motion.div
                key={assessmentId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-brand-card-high/35 border border-brand-primary/40 p-8 text-left"
              >
                <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-4 mb-6">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-brand-primary uppercase">
                    {t.assessmentResultTitle}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] tracking-wider text-brand-accent">Strategic Alignment Match:</span>
                    <span className="text-sm font-bold text-brand-primary font-mono">{blueprintResult.alignmentScore}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="text-[11px] font-semibold tracking-wider text-brand-primary mb-3 uppercase">
                      ⚠ {t.assessmentResultChallengeTitle}
                    </h5>
                    <ul className="space-y-3.5 text-xs font-light text-brand-accent">
                      {blueprintResult.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex gap-2 items-start leading-relaxed">
                          <span className="text-red-400 font-bold">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-[11px] font-semibold tracking-wider text-brand-primary mb-3 uppercase">
                      🛡 {t.assessmentResultStrategyTitle}
                    </h5>
                    <ul className="space-y-3.5 text-xs font-light text-brand-accent">
                      {blueprintResult.strategies.map((strategy, idx) => (
                        <li key={idx} className="flex gap-2 items-start leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-brand-outline-variant/30">
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent("Strategic Partnership Briefing Request");
                      const body = encodeURIComponent(`Hello Naveh Advisory Team, \n\nWe have run our roadmap simulation. \nOrigin: ${assessmentOrigin === 'us' ? 'United States' : 'South Korea'} \nIndustry category: ${assessmentIndustry} \n\nWe would like to request an executive briefing to discuss options.`);
                      window.location.href = `mailto:nyc@navehconsulting.com?subject=${subject}&body=${body}`;
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand-primary hover:text-brand-parchment transition-colors duration-300"
                  >
                    {t.assessmentResultCallToAction} <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SOVEREIGN ADVANTAGE SECTION (About / Stats with the tall Skyscraper image) */}
      <section
        id={SECTION_IDS.about}
        className="py-24 sm:py-32 relative bg-brand-surface"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Visual Column (Skyscraper photo as seen in design image) */}
            <div className="lg:col-span-5 relative group overflow-hidden min-h-[400px] lg:min-h-[580px]">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-brand-primary z-10 opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Sharp architectural glass facade"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.75] contrast-[1.12] saturate-[0.8]"
                referrerPolicy="no-referrer"
              />
              {/* Tone filters with light overlay to integrate skyscraper layout */}
              <div className="absolute inset-0 bg-brand-surface/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
            </div>

            {/* Stories & Editorial Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[12px] font-semibold tracking-[0.22em] text-brand-primary uppercase block mb-4">
                {t.strategicAdvantageLabel}
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4.5xl leading-tight mb-8 tracking-wide text-brand-parchment">
                {t.advantageTitle}
              </h2>

              <blockquote className="border-l-2 border-brand-primary/40 pl-6 my-8 italic text-base md:text-lg font-light leading-relaxed text-brand-accent/90">
                {t.advantageQuote}
              </blockquote>

              <div className="h-[1px] bg-brand-outline-variant/35 w-full my-8"></div>

              {/* High Contrast Industrial Statistics Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-primary font-light mb-2">
                    {t.statsExperienceValue}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-brand-outline uppercase">
                    {t.statsExperienceLabel}
                  </div>
                </div>

                <div>
                  <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-primary font-light mb-2">
                    {t.statsEntriesValue}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-brand-outline uppercase">
                    {t.statsEntriesLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET INDUSTRIES SHOWCASE */}
      <section
        id={SECTION_IDS.industries}
        className="py-24 sm:py-32 relative bg-brand-dim border-t border-brand-outline-variant/25"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-primary uppercase block mb-4">
              INDUSTRIAL SPANS
            </span>
            <h2 className="font-serif text-3xl md:text-[42px] tracking-tight mb-5 text-brand-parchment leading-tight">
              {lang === 'ko' ? '주요 특화 산업 영역' : 'Target Cross-Border Industries'}
            </h2>
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
                    <span className="text-[12px] font-bold tracking-widest text-brand-primary font-mono uppercase">
                      {ind.id.replace('-', ' ')}
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
                  {lang === 'ko' ? '세부 자문 사항 확인 →' : 'EXPLORE SCOPE →'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIEFINGS HUB (Insights Section) */}
      <section
        id={SECTION_IDS.insights}
        className="py-24 sm:py-32 relative bg-brand-surface border-t border-brand-outline-variant/20"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.20em] text-brand-primary uppercase block mb-3">
              SELECT INTELLIGENCE briefings
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-parchment tracking-tight">
              {lang === 'ko' ? '전략 분석 리포트' : 'Publications & Briefings'}
            </h2>
          </div>

          <div className="space-y-12">
            {INSIGHTS.map((article, idx) => (
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

                {/* Inline briefing expansions */}
                <div className="pt-4 border-t border-brand-outline-variant/20 flex justify-between items-center">
                  <button
                    onClick={() => {
                      /* Deeper briefing modal open */
                      alert(`${article.title}\n\n${article.content}`);
                    }}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-brand-primary hover:underline uppercase"
                  >
                    {t.readMoreButton} <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] tracking-widest text-brand-outline invisible group-hover:visible font-semibold uppercase">
                    NAVEH INTEL RETAINER
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE CONTACT DISCUSSIONS */}
      <section
        id={SECTION_IDS.contact}
        className="py-24 sm:py-32 relative bg-brand-surface border-t border-brand-outline-variant/20"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.22em] text-brand-primary uppercase block mb-4">
              METHODOLOGY RESERVATIONS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-parchment tracking-tight mb-5">
              {t.contactTitle}
            </h2>
            <p className="text-base font-light text-brand-accent leading-relaxed max-w-xl mx-auto">
              {t.contactSubtitle}
            </p>
          </div>

          {/* Upscale Stationery style form with only bottom borders */}
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
                  SUBMIT NEW FORM Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-12">

                {/* Double Column fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Name field */}
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Robert Vance"
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none transition-colors"
                    />
                  </div>

                  {/* Company/Corp field */}
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactCompanyLabel}
                    </label>
                    <input
                      type="text"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="Vance Aerospace Holdings"
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email and Interest Field */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Business Email */}
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactEmailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="r.vance@vanceaero.com"
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none transition-colors"
                    />
                  </div>

                  {/* Operational Focus Choice */}
                  <div className="group flex flex-col">
                    <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                      {t.contactInterestLabel}
                    </label>
                    <select
                      value={formInterest}
                      onChange={(e) => setFormInterest(e.target.value as any)}
                      className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none rounded-none font-light transition-colors"
                    >
                      <option value="us-to-korea" className="bg-brand-card">{t.contactInterestUStoKR}</option>
                      <option value="korea-to-us" className="bg-brand-card">{t.contactInterestKRtoUS}</option>
                      <option value="other" className="bg-brand-card">{t.contactInterestOther}</option>
                    </select>
                  </div>
                </div>

                {/* Scope Briefing Box */}
                <div className="group flex flex-col">
                  <label className="text-[11px] font-bold tracking-[0.2em] text-brand-outline-variant group-focus-within:text-brand-primary transition-colors mb-3 uppercase">
                    {t.contactMessageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Provide a high-level overview of target timeline, industrial sectors, and preliminary barriers."
                    className="w-full bg-transparent text-brand-parchment py-3 text-base border-b-2 border-brand-outline-variant/60 focus:border-brand-primary focus:outline-none placeholder-brand-outline-variant/30 font-light rounded-none resize-none transition-colors"
                  />
                </div>

                {/* Submission button with load */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-on-primary transition-all duration-400 py-5 text-sm font-bold tracking-[0.2em] uppercase rounded-none disabled:opacity-50 inline-flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      {t.contactSubmitButton} <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
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
                © 2026 Naveh Consulting. All rights reserved.
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] text-brand-outline font-semibold tracking-wider uppercase">
              <button
                onClick={() => alert(`Naveh Executive NDA & Confidential Privacy Commitment is enacted.`)}
                className="hover:text-brand-primary transition-colors cursor-pointer"
              >
                {t.privacyPolicy}
              </button>
              <button
                onClick={() => alert(`Naveh Strategic Retainer Terms govern all initial advisories.`)}
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
              <button
                onClick={() => scrollTo('global-clocks-section')}
                className="hover:text-brand-primary transition-colors cursor-pointer"
              >
                Global Offices
              </button>
            </div>
          </div>

          <div className="h-[1px] bg-brand-outline-variant/20 w-full mb-8"></div>

          <div className="text-center text-[10px] tracking-widest text-brand-outline-variant uppercase">
            REGULated in alignment with international bilateral compliance codes. SECURE DATA STORAGE GRADE IV FIPS-140 COMPLIANT.
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* DRAWERS & DIALOG OVERLAYS (Fluid animated sheets) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {/* SERVICES CAPABILITIES DETAILS OVERLAY */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-dim/80 backdrop-blur-sm"
            ></motion.div>

            {/* Panel */}
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
                      SERVICE FIELD
                    </span>
                    <span className="text-xs font-mono text-brand-outline">CAPABILITY DETAILS</span>
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
                  CORE EXECUTIVE TASKS UNDERTAKEN:
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

              {/* Action */}
              <div className="mt-12 pt-6 border-t border-brand-outline-variant/30 flex items-center justify-between">
                {selectedService.highlightStat && (
                  <div>
                    <span className="text-[10px] tracking-wider text-brand-outline block">OUTCOME RATIO</span>
                    <span className="text-lg font-serif font-bold text-brand-primary">{selectedService.highlightStat.value}</span>
                    <span className="text-[8px] tracking-widest text-brand-accent block uppercase ml-1">{selectedService.highlightStat.label}</span>
                  </div>
                )}
                <button
                  onClick={() => {
                    setFormInterest(selectedService.id.includes('entry') ? 'us-to-korea' : 'other');
                    setSelectedService(null);
                    scrollTo(SECTION_IDS.contact);
                  }}
                  className="bg-brand-primary text-brand-on-primary hover:bg-brand-parchment hover:text-brand-surface py-3 px-6 text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
                >
                  SECURE ADVOCATE BRIEFINGS
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* INDUSTRIES CAPABILITIES DETAILS OVERLAY */}
        {selectedIndustry && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="absolute inset-0 bg-brand-dim/80 backdrop-blur-sm"
            ></motion.div>

            {/* Panel */}
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
                      INDUSTRY VERTICAL
                    </span>
                    <span className="text-xs font-mono text-brand-outline">ZONAL FOCUS</span>
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
                  REPRESENTATIVE ADVISORY TARGETS:
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

              {/* Action */}
              <div className="mt-12 pt-6 border-t border-brand-outline-variant/30">
                <button
                  onClick={() => {
                    setAssessmentIndustry(selectedIndustry.id);
                    setSelectedIndustry(null);
                    scrollTo('interactive-blueprint-calculator');
                  }}
                  className="w-full bg-brand-primary text-brand-on-primary hover:bg-brand-parchment hover:text-brand-surface py-3 text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
                >
                  RUN SIMULATOR WITH {selectedIndustry.name.toUpperCase()}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
