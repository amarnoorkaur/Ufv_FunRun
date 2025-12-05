export enum Page {
  HOME = 'HOME',
  ABOUT_INITIATIVE = 'ABOUT_INITIATIVE',
  ABOUT_APP = 'ABOUT_APP',
  ABOUT_GRANT = 'ABOUT_GRANT',
  ETHICS = 'ETHICS',
  IMPACT = 'IMPACT',
  PRIVACY = 'PRIVACY',
  COMPARISON = 'COMPARISON',
  FAQ = 'FAQ',
  GET_INVOLVED = 'GET_INVOLVED',
  GIVEHUB = 'GIVEHUB',
  COMMUNITY_STORIES = 'COMMUNITY_STORIES',
  APP_MOCKUP = 'APP_MOCKUP'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface EthicalTheory {
  id: string;
  name: string;
  pageNumber: number;
  concept: string;
  application: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DonationItem {
  id: string;
  title: string;
  category: 'fitness' | 'books' | 'clothing' | 'appliances' | 'other';
  description: string;
  condition: 'new' | 'likeNew' | 'good' | 'fair';
  donorName: string;
  donorAvatar: string;
  postedDate: string;
  claimed: boolean;
  impactPoints: number;
}

export interface CommunityPost {
  id: string;
  author: string;
  authorAvatar: string;
  title: string;
  content: string;
  category: 'successStory' | 'mentalHealth' | 'seekingAdvice' | 'tips' | 'motivation';
  likes: number;
  comments: Comment[];
  postedDate: string;
}

export interface Comment {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  likes: number;
  postedDate: string;
}