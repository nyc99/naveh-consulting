/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TranslationSet {
  navAbout: string;
  navServices: string;
  navIndustries: string;
  navInsights: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  learnMoreButton: string;
  heroSecondaryButton: string;
  scrollLabel: string;
  whatWeDoLabel: string;
  servicesIntro: string;
  viewAllServicesButton: string;
  strategicAdvantageLabel: string;
  advantageTitle: string;
  advantageBody: string;
  advantageSupportingPara: string;
  contactEyebrow: string;
  contactTitle: string;
  contactIntro: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactCompanyLabel: string;
  contactTitleLabel: string;
  contactEmailLabel: string;
  contactPrimaryInterestLabel: string;
  contactSectorFocusLabel: string;
  contactObjectivesLabel: string;
  contactSubmitButton: string;
  contactDisclaimer: string;
  contactSuccessTitle: string;
  contactSuccessMessage: string;
  globalOfficesTitle: string;
  globalOfficesLabel: string;
  timezoneLabel: string;
  localTimeLabel: string;
  closeButton: string;
  detailsButton: string;
  readMoreButton: string;
  privacyPolicy: string;
  termsOfService: string;
  linkedIn: string;
}

export const TRANSLATIONS: Record<'en' | 'ko', TranslationSet> = {
  en: {
    navAbout: 'Firm',
    navServices: 'Capabilities',
    navIndustries: 'Sectors',
    navInsights: 'Intelligence',
    navContact: 'Contact',
    heroTitle: 'Strategic access between U.S. innovation and Korean industrial demand.',
    heroSubtitle: 'Naveh Partners advises founders, investors, and corporate teams pursuing Korea–U.S. market entry, capital formation, and strategic partnerships across AI infrastructure, mobility, semiconductors, and dual-use technology.',
    learnMoreButton: 'REQUEST STRATEGIC BRIEFING',
    heroSecondaryButton: 'EXPLORE SECTORS',
    scrollLabel: 'SCROLL',
    whatWeDoLabel: 'STRATEGIC SERVICES',
    servicesIntro: 'Naveh helps U.S. technology companies and Korean industrial partners build high-trust commercial, capital, and strategic relationships across AI infrastructure, mobility, and dual-use markets.',
    viewAllServicesButton: 'VIEW ALL CAPABILITIES',
    strategicAdvantageLabel: 'THE NAVEH ADVANTAGE',
    advantageTitle: 'Precision in the Korea–U.S. technology corridor.',
    advantageBody: 'Naveh Partners supports founders, investors, and corporate teams pursuing strategic relationships across the United States and South Korea. Our work is built around sector focus, trusted access, and disciplined execution — not generic market entry advice.',
    advantageSupportingPara: 'We help clients identify the right counterparties, prepare for senior-level discussions, structure cross-border capital pathways, and navigate the commercial realities of Korean and U.S. corporate decision-making.',
    contactEyebrow: 'CONFIDENTIAL INQUIRIES',
    contactTitle: 'CONFIDENTIAL ADVISORY INQUIRY',
    contactIntro: 'Request a strategic briefing with Naveh Partners. We work with founders, investors, corporate teams, and Korean–U.S. strategic partners pursuing cross-border market entry, capital formation, and commercial partnerships.',
    contactSubtitle: 'All inquiries are reviewed confidentially. Where appropriate, our team will follow up to schedule a private discussion.',
    contactNameLabel: 'FULL NAME',
    contactCompanyLabel: 'COMPANY / ORGANIZATION',
    contactTitleLabel: 'TITLE / ROLE',
    contactEmailLabel: 'BUSINESS EMAIL ADDRESS',
    contactPrimaryInterestLabel: 'PRIMARY AREA OF INTEREST',
    contactSectorFocusLabel: 'SECTOR FOCUS',
    contactObjectivesLabel: 'BRIEF DESCRIPTION OF OBJECTIVES',
    contactSubmitButton: 'SUBMIT CONFIDENTIAL INQUIRY',
    contactDisclaimer: 'Submission of this form does not create an advisory relationship. Confidentiality obligations are governed by written agreement where applicable.',
    contactSuccessTitle: 'INQUIRY RECEIVED',
    contactSuccessMessage: 'Our team will review your inquiry confidentially. Where appropriate, we will follow up to schedule a private discussion.',
    globalOfficesTitle: 'GLOBAL HQ SATELLITES',
    globalOfficesLabel: 'OFFICES',
    timezoneLabel: 'Timezone',
    localTimeLabel: 'Local Live Time',
    closeButton: 'Close',
    detailsButton: 'VIEW CAPABILITIES',
    readMoreButton: 'READ BRIEFING',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    linkedIn: 'LinkedIn ↗',
  },
  ko: {
    navAbout: '회사',
    navServices: '역량',
    navIndustries: '섹터',
    navInsights: '인텔리전스',
    navContact: '문의',
    heroTitle: 'U.S. 혁신과 한국 산업 수요를 잇는 전략적 접근.',
    heroSubtitle: 'Naveh Partners는 AI 인프라, 모빌리티, 반도체, 듀얼유스 기술 분야에서 한미 시장 진출, 자본 형성 및 전략적 파트너십을 추구하는 창업자, 투자자, 기업 팀을 자문합니다.',
    learnMoreButton: '전략 브리핑 요청',
    heroSecondaryButton: '섹터 탐색',
    scrollLabel: '스크롤',
    whatWeDoLabel: '전략 서비스',
    servicesIntro: 'Naveh는 미국 기술 기업과 한국 산업 파트너가 AI 인프라, 모빌리티, 듀얼유스 시장에서 신뢰 높은 상업, 자본, 전략적 관계를 구축할 수 있도록 지원합니다.',
    viewAllServicesButton: '전체 역량 보기',
    strategicAdvantageLabel: 'THE NAVEH ADVANTAGE',
    advantageTitle: '한미 기술 회랑에서의 정밀한 자문.',
    advantageBody: 'Naveh Partners는 미국과 한국 간 전략적 관계를 추구하는 창업자, 투자자, 기업 팀을 지원합니다. 당사의 업무는 섹터 집중, 신뢰 기반 접근, 철저한 실행을 중심으로 합니다.',
    advantageSupportingPara: '당사는 고객이 적합한 상대방을 파악하고, 고위급 논의를 준비하며, 국경 간 자본 경로를 구조화하고, 한국 및 미국 기업 의사결정의 상업적 현실을 헤쳐나가도록 지원합니다.',
    contactEyebrow: '기밀 문의',
    contactTitle: '기밀 자문 문의',
    contactIntro: 'Naveh Partners에 전략적 브리핑을 요청하세요. 한미 시장 진출, 자본 형성 및 상업적 파트너십을 추구하는 창업자, 투자자, 기업 팀과 함께 합니다.',
    contactSubtitle: '모든 문의는 기밀로 검토됩니다. 적절한 경우 당사 팀이 개인 면담 일정을 잡기 위해 연락드립니다.',
    contactNameLabel: '성명',
    contactCompanyLabel: '회사 / 기관',
    contactTitleLabel: '직함 / 역할',
    contactEmailLabel: '업무용 이메일',
    contactPrimaryInterestLabel: '주요 관심 분야',
    contactSectorFocusLabel: '섹터 포커스',
    contactObjectivesLabel: '목표 간략 설명',
    contactSubmitButton: '기밀 문의 제출',
    contactDisclaimer: '이 양식 제출은 자문 관계를 형성하지 않습니다. 기밀 의무는 해당하는 경우 서면 계약에 따라 규율됩니다.',
    contactSuccessTitle: '문의 접수',
    contactSuccessMessage: '팀에서 귀하의 문의를 기밀로 검토합니다. 적절한 경우 개인 면담 일정을 위해 연락드립니다.',
    globalOfficesTitle: '글로벌 오피스',
    globalOfficesLabel: '오피스',
    timezoneLabel: '시간대',
    localTimeLabel: '현지 시간',
    closeButton: '닫기',
    detailsButton: '자세히 보기',
    readMoreButton: '더 보기',
    privacyPolicy: '개인정보처리방침',
    termsOfService: '이용약관',
    linkedIn: 'LinkedIn ↗',
  }
};
