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
  scrollLabel: string;
  whatWeDoLabel: string;
  viewAllServicesButton: string;
  strategicAdvantageLabel: string;
  advantageTitle: string;
  advantageQuote: string;
  statsExperienceValue: string;
  statsExperienceLabel: string;
  statsEntriesValue: string;
  statsEntriesLabel: string;
  assessmentTitle: string;
  assessmentSubtitle: string;
  assessmentOriginLabel: string;
  assessmentOriginUS: string;
  assessmentOriginKR: string;
  assessmentIndustryLabel: string;
  assessmentIndustryTech: string;
  assessmentIndustryMfg: string;
  assessmentIndustryEnergy: string;
  assessmentIndustryConsumer: string;
  assessmentTimelineLabel: string;
  assessmentTimelineWeeks: string;
  assessmentTimelineMonths: string;
  assessmentTimelineImmediate: string;
  assessmentGenerateButton: string;
  assessmentResultTitle: string;
  assessmentResultChallengeTitle: string;
  assessmentResultStrategyTitle: string;
  assessmentResultCallToAction: string;
  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactCompanyLabel: string;
  contactEmailLabel: string;
  contactInterestLabel: string;
  contactInterestUStoKR: string;
  contactInterestKRtoUS: string;
  contactInterestOther: string;
  contactMessageLabel: string;
  contactSubmitButton: string;
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
    navAbout: 'About',
    navServices: 'Services',
    navIndustries: 'Industries',
    navInsights: 'Insights',
    navContact: 'Contact',
    heroTitle: 'Building the Right Path Between the U.S. and Korea.',
    heroSubtitle: 'Naveh is a consulting firm that connects opportunities and delivers lasting impact across the U.S. and Korea.',
    learnMoreButton: 'LEARN MORE',
    scrollLabel: 'SCROLL',
    whatWeDoLabel: 'WHAT WE DO',
    viewAllServicesButton: 'VIEW ALL SERVICES',
    strategicAdvantageLabel: 'THE SOVEREIGN ADVANTAGE',
    advantageTitle: 'Sovereign precision in every strategic move.',
    advantageQuote: '"Our methodology integrates architectural structural integrity with executive business acumen, ensuring every market move is stable and future-proof."',
    statsExperienceValue: '15+',
    statsExperienceLabel: 'YEARS EXPERIENCE',
    statsEntriesValue: '200+',
    statsEntriesLabel: 'MARKET ENTRIES',
    assessmentTitle: 'Dual-Market Entry Blueprint Generator',
    assessmentSubtitle: 'Interact with our high-end assessment engine to simulate compliance parameters and structural strategies for your cross-border roadmap.',
    assessmentOriginLabel: '1. HEADQUARTERS ORIGIN',
    assessmentOriginUS: 'United States Headquartered',
    assessmentOriginKR: 'South Korea Headquartered',
    assessmentIndustryLabel: '2. TARGET INDUSTRIAL SECTOR',
    assessmentIndustryTech: 'Artificial Intelligence & SaaS Stack',
    assessmentIndustryMfg: 'Advanced Semiconductors & Supply Networks',
    assessmentIndustryEnergy: 'Clean Energy, Grid & Hydrogen Storage',
    assessmentIndustryConsumer: 'Prestige Lifestyle & Consumer Flagships',
    assessmentTimelineLabel: '3. INTENDED LAUNCH HORIZON',
    assessmentTimelineWeeks: 'Immediate Expansion (< 3 Months)',
    assessmentTimelineMonths: 'Strategic Alignment (6-12 Months)',
    assessmentTimelineImmediate: 'Early Stage Planning & Intellectual Property Auditing',
    assessmentGenerateButton: 'GENERATE STRATEGIC ROADMAP',
    assessmentResultTitle: 'Structural Recommendation Blueprint',
    assessmentResultChallengeTitle: 'Core Sovereign Barriers Identified',
    assessmentResultStrategyTitle: 'Methodological Entry Pathway Recommended',
    assessmentResultCallToAction: 'INQUIRE ON METHODOLOGY STRATEGY',
    contactTitle: 'EXECUTIVE DISCUSSIONS',
    contactSubtitle: 'Request a secure briefing or direct advisory retainer. Submissions are treated with strict institutional confidentiality.',
    contactNameLabel: 'FULL NAME',
    contactCompanyLabel: 'COMPANY / CORPORATION',
    contactEmailLabel: 'BUSINESS EMAIL ADDRESS',
    contactInterestLabel: 'PRIMARY FOCUS OUTLINE',
    contactInterestUStoKR: 'US Expansion into South Korea',
    contactInterestKRtoUS: 'South Korean Expansion into U.S. Market',
    contactInterestOther: 'General Cross-Border Joint Ventures',
    contactMessageLabel: 'ADVISORY OBJECTIVES BRIEFING',
    contactSubmitButton: 'SUBMIT BRIEFING REQUEST',
    contactSuccessTitle: 'BRIEFING INITIATED',
    contactSuccessMessage: 'Our Senior Managing Director will review your brief within 12 hours. A secure meeting coordinate will be dispatched to your provided business email.',
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
    navAbout: '소개',
    navServices: '서비스',
    navIndustries: '산업',
    navInsights: '인사이트',
    navContact: '문의',
    heroTitle: '미국과 한국, 두 시장을 잇는 파트너.',
    heroSubtitle: 'Naveh는 한미 양국 간 시장 진출을 돕는 전략 컨설팅 회사입니다.',
    learnMoreButton: '자세히 보기',
    scrollLabel: '스크롤',
    whatWeDoLabel: '서비스 영역',
    viewAllServicesButton: '전체 서비스 보기',
    strategicAdvantageLabel: 'WHY NAVEH',
    advantageTitle: '현지 시장을 아는 전문가와 함께.',
    advantageQuote: '"규제 장벽을 넘고, 현지 파트너십을 구축하며, 실질적인 시장 진출을 실현합니다."',
    statsExperienceValue: '15년+',
    statsExperienceLabel: '업력',
    statsEntriesValue: '200+',
    statsEntriesLabel: '시장 진출 프로젝트',
    assessmentTitle: '시장 진출 로드맵',
    assessmentSubtitle: '귀사의 상황에 맞는 진출 전략을 확인해 보세요.',
    assessmentOriginLabel: '1. 본사 위치',
    assessmentOriginUS: '미국',
    assessmentOriginKR: '한국',
    assessmentIndustryLabel: '2. 산업 분야',
    assessmentIndustryTech: 'AI & 소프트웨어',
    assessmentIndustryMfg: '반도체 & 제조',
    assessmentIndustryEnergy: '클린에너지 & 인프라',
    assessmentIndustryConsumer: '소비재 & 라이프스타일',
    assessmentTimelineLabel: '3. 진출 시기',
    assessmentTimelineWeeks: '3개월 이내',
    assessmentTimelineMonths: '6-12개월',
    assessmentTimelineImmediate: '초기 검토 단계',
    assessmentGenerateButton: '로드맵 확인하기',
    assessmentResultTitle: '진출 로드맵',
    assessmentResultChallengeTitle: '주요 과제',
    assessmentResultStrategyTitle: '권장 전략',
    assessmentResultCallToAction: '상담 신청하기',
    contactTitle: '문의하기',
    contactSubtitle: '진출 계획에 대해 알려주시면, 영업일 기준 하루 내로 연락드리겠습니다.',
    contactNameLabel: '이름',
    contactCompanyLabel: '회사명',
    contactEmailLabel: '이메일',
    contactInterestLabel: '관심 분야',
    contactInterestUStoKR: '미국 → 한국 진출',
    contactInterestKRtoUS: '한국 → 미국 진출',
    contactInterestOther: '양국 간 파트너십',
    contactMessageLabel: '문의 내용',
    contactSubmitButton: '문의하기',
    contactSuccessTitle: '접수 완료',
    contactSuccessMessage: '문의가 접수되었습니다. 영업일 기준 하루 내로 답변 드리겠습니다.',
    globalOfficesTitle: '오피스',
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

/**
 * Generates custom dynamic blueprints on origin / industry selections
 */
export function generateBlueprint(
  origin: 'us' | 'kr',
  industry: string,
  lang: 'en' | 'ko'
): { challenges: string[]; strategies: string[]; alignmentScore: string } {
  if (lang === 'ko') {
    const defaultRes = {
      challenges: [
        '복합적인 정보 보안 관리 등 금융/클라우드 망 분리 한-미 특수 규제 격차.',
        '로컬 거대 기업군(Chaebols)의 폐쇄적인 조달 체인 및 파트너 발굴 투명성 부재.'
      ],
      strategies: [
        '자회사 직접 유치 전, 로컬 벤처캐피탈(CVC)을 통한 시범 PoC 및 공동 실증 협력 체계 구축.',
        '원스톱 로컬 데이터 보안 대리인을 임명하고 원천 저작권 구조 국산화 법인 설립.'
      ],
      alignmentScore: '89%'
    };

    if (origin === 'us') {
      if (industry.includes('tech')) {
        return {
          challenges: [
            '한국 금융위원회(FSC) 및 신용정보원 클라우드 망 분리 규제 컴플라이언스 극복.',
            '네이버/카카오 플랫폼에 대응하는 로컬 사용자 맞춤 UX 및 API 에코시스템 적응 장벽.',
            '로컬 엔터프라이즈의 폐쇄적 파트너 인큐베이션 및 기술 자산 유출 우려.'
          ],
          strategies: [
            '로컬 민간 샌드박스 승인을 위한 가상 온프레미스 에뮬레이션 아키텍처 제시.',
            '공동 원천 기술 라이선스 방식의 합작 조인트벤처(JV) 유동적 유치.',
            '나베 카카오/네이버 비즈니스 커넥터 프리셋을 이용해 3개월 내 로컬 ERP 동기화 완료.'
          ],
          alignmentScore: '92%'
        };
      } else if (industry.includes('mfg')) {
        return {
          challenges: [
            'CHIPS 법안에 근거한 민감 기술 수출 제재 가이드와 국익 상충 보장성 검증.',
            '한국 내 고정 첨단 패키징 설비 파트너 확보를 위한 독점 조항 조율 문제.',
            '공급망 이중 추적 시스템 오버헤드로 인한 로컬 세제 혜택 누락.'
          ],
          strategies: [
            '한-미 반동 얼라이언스 합의문을 반영한 "신뢰 우방국 원산지 원스톱 추적 모듈" 배치.',
            '오창 및 평택 반도체 특별 특구 대상 지자체 보조금 연계 조인트벤처 패스웨이 제공.',
            '원가 이전 가격(Transfer Pricing) 정밀 사후 감사 사전 실무 자문 개시.'
          ],
          alignmentScore: '96%'
        };
      }
    } else {
      // Origin KR expanding to US
      if (industry.includes('tech')) {
        return {
          challenges: [
            'Delaware Flip(미국 본사 설립) 시 발생하는 소유권 이전 및 국내 주주 회계 처분 소득세.',
            '미국 연방거래위원회(FTC) 데이터 국한 보관과 SOC2 Type II 획득 마일스톤 완료 가속.',
            'SV 로컬 투자사들의 국내 엔지니어링 센터 지식재산 이전 회의론.'
          ],
          strategies: [
            'Dual-Entity IP 라이선싱 모형 설계: 한국 R&D 본부는 핵심 IP를 소유하고 미국 지사가 로컬 상용 라이선스를 대여하는 방식.',
            '미국 홀딩 컴퍼니 지배 구조 고도화를 위한 주식 교환 최적 스케줄 설계.',
            '나베 200+ 투자자 인맥 풀 매칭을 통한 미국 사모 펀드 우선 프레젠테이션 피칭 지원.'
          ],
          alignmentScore: '94%'
        };
      } else if (industry.includes('mfg')) {
        return {
          challenges: [
            '미국 내 양산 기지 구축을 위한 연방 보조금 조건 수용 및 주정부 세제 인센티브 협상.',
            '미국 철강 및 노동 연동 법령(Inflation Reduction Act) 고용 비례 컴플라이언스 준수.',
            '로컬 원자재 공급망 단절 부작용에 대비한 안전 재고 가용성 보장.'
          ],
          strategies: [
            'IRA 부합형 수급처 오프테이크(Off-take) 계약서 최적 초안 구축.',
            '애틀랜타, 텍사스 주정부 경제 개발청과의 원스톱 세무 조율 인프라 패키지 제공.',
            '생산 기지 완공 전 대체 협력사 네트워크 3개처 백업 인바운드 계약 체결.'
          ],
          alignmentScore: '91%'
        };
      }
    }

    return defaultRes;
  } else {
    // English Version
    const defaultRes = {
      challenges: [
        'Incompatible cross-border data protection & digital sovereignty compliance requirements.',
        'High business opacity in regional supply contract bidding systems and distributor lock-ins.'
      ],
      strategies: [
        'Formulate a phased Joint-Venture structure with custom corporate governance models.',
        'Leverage Naveh Key-Account networks for fast-track product pilot testing.'
      ],
      alignmentScore: '88%'
    };

    if (origin === 'us') {
      if (industry.includes('tech')) {
        return {
          challenges: [
            'Korean FSC and Financial Security Institute mandates regarding financial cloud network separation.',
            'Navigating Kakao and Naver-centric product and single sign-on ecosystems.',
            'Establishing enterprise trust within traditional, hardware-dominated conglomerate buying cycles.'
          ],
          strategies: [
            'Deploy low-footprint virtual private clouds satisfying local network separation regulations.',
            'Integrate Naver/Kakao business suites using Naveh custom API orchestration bridges.',
            'Design dual-channel go-to-market roadmaps utilizing local partner sponsorships.'
          ],
          alignmentScore: '94%'
        };
      } else if (industry.includes('mfg')) {
        return {
          challenges: [
            'Ensuring bilateral compliance with the US CHIPS Act while protecting core equipment IP.',
            'Securing long-term co-investment terms with Tier-1 Korean foundry supply chains.',
            'Managing strict export control limitations and regional assembly data firewalls.'
          ],
          strategies: [
            'Draft precise multi-tier IP escrow legal structures protecting industrial secrets.',
            'Structure local joint ventures integrated with special economic zone tax benefits in Pyeongtaek.',
            'Perform transfer-pricing risk simulations with Naveh international tax consulting division.'
          ],
          alignmentScore: '97%'
        };
      }
    } else {
      // Korea to US
      if (industry.includes('tech')) {
        return {
          challenges: [
            'Unanticipated Korean exit-tax liability in top-to-bottom corporate flips (Delaware Flips).',
            'Meeting SOC2 Type II security requirements demanded by US institutional buyers.',
            'Establishing trusted bilingual leadership teams local to Silicon Valley or New York.'
          ],
          strategies: [
            'Design clean dual-entity intellectual property licensing frameworks.',
            'Fast-track SOC2 ready cloud configurations with specialized compliance pathways.',
            'Leverage Naveh executive talent search for local, bilingual Go-To-Market hires.'
          ],
          alignmentScore: '93%'
        };
      } else if (industry.includes('mfg')) {
        return {
          challenges: [
            'Meeting strict domestic sourcing and labor regulations mandated by the Inflation Reduction Act.',
            'Complex state-level tax incentives, zoning permits, and clean energy compliance.',
            'Handling severe labor shortage overheads in US industrial regions.'
          ],
          strategies: [
            'Perform geographic site selection audits aligning Georgia / Texas state tax incentives.',
            'Negotiate bulletproof long-term supply Off-take agreements with US automotive buyers.',
            'Implement automated line management protocols to balance early-stage labor dependencies.'
          ],
          alignmentScore: '90%'
        };
      }
    }

    return defaultRes;
  }
}
