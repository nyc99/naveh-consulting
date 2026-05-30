/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  details: string[];
  iconName: string;
  highlightStat?: {
    value: string;
    label: string;
  };
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  iconName: string;
  highlights: string[];
}

export interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  content: string;
}

export interface InquiryForm {
  name: string;
  company: string;
  email: string;
  marketInterest: 'us-to-korea' | 'korea-to-us' | 'other';
  message: string;
}
